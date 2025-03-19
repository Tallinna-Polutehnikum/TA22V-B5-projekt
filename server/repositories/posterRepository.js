import { where } from "sequelize";
import logger from "../utils/logger";

export default class PosterRepository {

    static cache = new Map();   //create a map object with cache 
    static cacheState = null;

    constructor(model) {
        this.model = model;

        if (!PosterRepository.cacheState) {    //if null
            PosterRepository.cacheState = PosterRepository.cache;
        }

        this.cache = PosterRepository.cacheState;

    }

    //ORM FUNCTIONS IS ANY!!!


    async findByPk(id) {

        if (this.cache.has(id)) {
            return this.cache.get(id);
        }

        logger.info(`DB query: findById(${id})`);

        const poster = await this.model.findByPk(id);
        if (poster) { // if not null, not undefined, not a ''...
            this.cache.set(id, poster);
        }

        return poster;

    }

    async findAll() {

        if (this.cache.has('all')) {
            return this.cache.get('all');
        }

        logger.info(`DB query: findAll`);

        const posters = await this.model.findAll();
        if (posters) {
            this.cache.set('all', posters);
        }

        return posters;

    }

    async create(data) {

        logger.info(`DB query: create(${data})`);

        const poster = await this.model.create(data);
        // this.cache.set(poster.id, poster);
        //console.log(`${nameOf(poster)} added`);

        return poster;

    }

    async update(model_id, newName) {   //have not response

        const poster = await this.model.findByPk(model_id);
        logger.info(`DB query: update poster ${model_id} with ${newName})`);

        if (poster) {

            await poster.set({ name: newName });
            await poster.save();

            this.cache.set(poster.id, poster);
            logger.info(`poster with id ${model_id} updated successfuly`)
            return poster;

        } else {
            logger.error(`poster not found`)
        }

    }

    async delete(id) {  //may have response

        const poster = await this.model.findByPk(id);
        logger.info(`DB query: delete(${id})`);

        if (poster) {
            const numDestroyedRows = await poster.destroy();
            this.cache.delete(id);

            if (numDestroyedRows > 0) {
                logger.info(`poster with id ${id} deleted successfuly`);
                return true;

            } else {
                logger.error(`poster with id ${id} not been deleted`);
                return false;

            }

        }

        return false;    //confirms deletion (for bussines logic)

    }

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