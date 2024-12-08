import { v4 } from "uuid";
import path from 'path';
import Movie from "../models/movie.js";
import ApiError from "../error/ApiError.js";

class MovieController
{
    async create(req, res, next)
    {
        try
        {
            const {title, rating, description, year, languageId, sublanguageId} = req.body
            const {img} = req.files
            let fileName = v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
    
            const movie = await Movie.create({title, rating, description, year, languageId, sublanguageId, img: fileName})
            return res.json(movie) 
        } catch(e)
        {
            next(ApiError.badRequest(e.message))
        }
    };
    async getAll(req, res)
    {
        const movies = await Movie.findAll()
        return res.json(movies)
        //можно добавить фильтрацию
    };
    async getOne(req, res, next)
    {
        try
        {
            const {id} = req.params
            const movie = await Movie.findOne({where: {id}})
            return res.json(movie)
        }catch(e)
        {
            next(ApiError.badRequest(e.message))
        }
    };
    async change(req, res)
    {
        const { id } = req.params; // Получаем ID из параметров маршрута
        const updateData = req.body; // Данные для обновления

    try 
    {
        const { id } = req.params; // Получаем ID из параметров маршрута
        const updateData = req.body; // Данные для обновления
        const [updatedRowsCount] = await YourModel.update(updateData, {where: { id }}); // Обновляем запись в базе данных

        if (updatedRowsCount === 0)
        {
            return ApiError.badRequest('Not found');
        }

        return res.status(200).json({ message: 'Resource updated successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
    };
    async delete(req, res)
    {

    };
}

export default new MovieController()