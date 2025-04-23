import ApiError from "../error/ApiError.js";
import ActorService from "../services/actorService.js";
import logger from "../utils/logger.js";

let actorService

class ActorController {
    
    constructor(){
        actorService = new ActorService()
    }


    async getOne(req, res, next) {
        try {
            const { id } = req.params;
            console.log(id)
            if (!id) {
                return next(ApiError.badRequest('id is not found')) //returns HTTP error
            }; 
            const actor = await actorService.getActor(id);

            return res.json(actor);    
        } catch (error) {
            console.log(error)
            next(error);
        }

    };

    async getAll(req, res, next) {
        try {
            const actors = await actorService.getActors();
            
            return res.json(actors);
        } catch (error) {
            logger.error(error)
            next (error);
        }

    };

    async create(req, res) {

        const { name } = req.body;
        const actor = await this.actorService.createActor(name);

        return res.json(actor);

    };

}

export default new ActorController();