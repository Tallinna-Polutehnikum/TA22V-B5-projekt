import { where } from "sequelize";
import logger from "../utils/logger.js";

export default class ActorRepository {

    static cache = new Map();   //create a map object with cache 
    static cacheState = null;

    constructor(model) {
        this.model = model;

        if (!ActorRepository.cacheState) {    //if null
            ActorRepository.cacheState = ActorRepository.cache;
        }

        this.cache = ActorRepository.cacheState;

    }

    //ORM FUNCTIONS IS ANY!!!


    async findByPk(id) {

        if (this.cache.has(id)) {
            return this.cache.get(id);
        }

        logger.info(`Actor query: findById(${id})`);

        const actor = await this.model.findByPk(id);
        if (actor) { // if not null, not undefined, not a ''...
            this.cache.set(id, actor);
        }

        return actor;

    }

    async findAll() {

        if (this.cache.has('all')) {
            return this.cache.get('all');
        }

        logger.info(`Actor query: findAll`);

        const actors = await this.model.findAll();
        if (actors) {
            this.cache.set('all', actors);
        }

        return actors;

    }

    async create(data) {

        logger.info(`Actor query: create(${data})`);

        const actor = await this.model.create(data);
        // this.cache.set(actor.id, actor);
        //console.log(`${nameOf(actor)} added`);

        return actor;

    }

    // async update(model_id, newName) {   //have not response

    //     const actor = await this.model.findByPk(model_id);
    //     logger.info(`DB query: update actor ${model_id} with ${newName})`);

    //     if (actor) {

    //         await actor.set({ name: newName });
    //         await actor.save();

    //         this.cache.set(actor.id, actor);
    //         logger.info(`actor with id ${model_id} updated successfuly`)
    //         return actor;

    //     } else {
    //         logger.error(`actor not found`)
    //     }

    // }

    // async delete(id) {  //may have response

    //     const actor = await this.model.findByPk(id);
    //     logger.info(`DB query: delete(${id})`);

    //     if (actor) {
    //         const numDestroyedRows = await actor.destroy();
    //         this.cache.delete(id);

    //         if (numDestroyedRows > 0) {
    //             logger.info(`actor with id ${id} deleted successfuly`);
    //             return true;

    //         } else {
    //             logger.error(`actor with id ${id} not been deleted`);
    //             return false;

    //         }

    //     }

    //     return false;    //confirms deletion (for bussines logic)

    // }

    async clearCache(key) {
        switch (key) {
            case 'all':
                this.cache.delete('all');
                break;
            default:
                if (typeof key === 'number' && Number.isInteger(key)) {
                    this.cache.delete(key);
                } else {
                    console.log('clearCache: unexpected key value');
                }
                break;
        }
    }

}