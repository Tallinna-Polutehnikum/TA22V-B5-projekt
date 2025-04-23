import ApiError from "../error/ApiError.js";
import GenreService from "../services/genreService.js";
import logger from "../utils/logger.js";

let genreService

class GenreController {
    
    constructor(){
        genreService = new GenreService()
    }


    async getOne(req, res, next) {
        try {
            const { id } = req.params;
            console.log(id)
            if (!id) {
                return next(ApiError.badRequest('id is not found')) //returns HTTP error
            }; 
            const genre = await genreService.getGenre(id);

            return res.json(genre);    
        } catch (error) {
            console.log(error)
            next(error);
        }

    };

    async getAll(req, res, next) {
        try {
            const genres = await genreService.getGenres();
            
            return res.json(genres);
        } catch (error) {
            logger.error(error)
            next (error);
        }

    };

    async create(req, res) {

        const { name } = req.body;
        const genre = await this.genreService.createGenre(name);

        return res.json(genre);

    };

}

export default new GenreController();