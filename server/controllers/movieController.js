import { v4 } from "uuid";
import path from 'path';
import sequelize from "../db.js";
import sharp from "sharp";
import ApiError from "../error/ApiError.js";
import Movie from "../models/movie.js";
import Poster from "../models/poster.js";
import PosterType from "../models/posterType.js";
import MoviePoster from "../models/moviePoster.js";


class MovieController {
    async create(req, res, next) {
        try {
            const { title, description, year, languageId, sublanguageId } = req.body
            const { img } = req.files

            let imgName = null;
            if (img != null) {
                imgName = v4() + ".jpg"
                await img.mv(path.resolve(__dirname, '..', 'static', imgName))
                    .then(() => {
                        console.log("Image successfully moved to /static folder");
                    })
            }

            const transaction = await sequelize.transaction();
            try {
                const movie = await Movie.create({ title, description, year, languageId, sublanguageId }, { transaction });
                console.log("Created movie: ", movie);

                let posterTypeValue;
                if (img != null) {
                    const metadata = await sharp(img.data).metadata();
                    const aspectRatio = metadata.width / metadata.height;

                    if (aspectRatio > 1.5) {
                        posterTypeValue = 'Horizontal';
                        return posterTypeValue;
                    } else {
                        posterTypeValue = 'Vertical';
                        return posterTypeValue;
                    }
                }


                if (imgName) {
                    const posterType = await PosterType.findOne({ where: { type: posterTypeValue } }, { transaction });
                    if (!posterType) {
                        throw new Error("posterType not found");
                    }

                    const poster = await Poster.create({ url: `/static/${imgName}`, type: posterType.id }, { transaction });
                    console.log("Created poster: ", poster);

                    await MoviePoster.create({ movieId: movie.id, posterId: poster.id }, { transaction });
                    console.log("MoviePoster added");
                    await transaction.commit();

                    return res.json(movie);
                } else {
                    console.log("imgName is fucked");
                }
            } catch (e) {
                await transaction.rollback();
                throw e;
            }

        } catch (e) {
            console.log("Object creation failed")
            next(ApiError.badRequest(e.message))
        }
    };

    async getAll(req, res) {
        const movies = await Movie.findAll()
        return res.json(movies)
        //можно добавить фильтрацию
    };

    async getOne(req, res, next) {
        try {
            const { id } = req.params
            const movie = await Movie.findByPk(id);
            return res.json(movie)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    };

    async change(req, res, next) {  //need change responces
        try {
            const { id } = req.params;
            const updateData = req.body;
            const [updatedRowsCount] = await Movie.update(updateData, { where: { id } });

            if (updatedRowsCount === 0) {
                return ApiError.badRequest('Not found');
            }

            return res.status(200).json({ message: 'Resource updated successfully' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    };

    async delete(req, res) {

    };
}

export default new MovieController()