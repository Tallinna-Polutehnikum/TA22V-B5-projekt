import ApiError from "../error/ApiError.js";
import PosterService from "../services/posterService.js";
import logger from "../utils/logger.js";

let posterService

class PosterController {
    
    constructor(){
        posterService = new PosterService()
    }


    async getOne(req, res, next) {
        try {
            const { id } = req.params;
            console.log(id)
            if (!id) {
                return next(ApiError.badRequest('id is not found')) //returns HTTP error
            }; 
            const poster = await posterService.getPoster(id);

            return res.json(poster);    
        } catch (error) {
            console.log(error)
            next(error);
        }

    };

    async getAll(req, res, next) {
        try {
            const posters = await posterService.getPosters();
            
            return res.json(posters);
        } catch (error) {
            logger.error(error)
            next (error);
        }

    };

    async create(req, res) {

        const { name } = req.body;
        const poster = await this.posterService.createPoster(name);

        return res.json(poster);

    };

}

export default new PosterController();