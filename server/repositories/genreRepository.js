import { where } from "sequelize";
import logger from "../utils/logger.js";

export default class GenreRepository {

    static cache = new Map();   //create a map object with cache 
    static cacheState = null;

    constructor(model) {
        this.model = model;

        if (!GenreRepository.cacheState) {    //if null
            GenreRepository.cacheState = GenreRepository.cache;
        }

        this.cache = GenreRepository.cacheState;

    }

    //ORM FUNCTIONS IS ANY!!!


    async findByPk(id) {

        if (this.cache.has(id)) {
            return this.cache.get(id);
        }

        logger.info(`Genre query: findById(${id})`);

        const genre = await this.model.findByPk(id);
        if (genre) { // if not null, not undefined, not a ''...
            this.cache.set(id, genre);
        }

        return genre;

    }

    async findAll() {

        if (this.cache.has('all')) {
            return this.cache.get('all');
        }

        logger.info(`Genre query: findAll`);

        const genres = await this.model.findAll();
        if (genres) {
            this.cache.set('all', genres);
        }

        return genres;

    }

    async create(data) {

        logger.info(`Genre query: create(${data})`);

        const genre = await this.model.create(data);
        // this.cache.set(genre.id, genre);
        //console.log(`${nameOf(genre)} added`);

        return genre;

    }

    async update(model_id, newName) {   //have not response

        const genre = await this.model.findByPk(model_id);
        logger.info(`Genre query: update genre ${model_id} with ${newName})`);

        if (genre) {

            await genre.set({ name: newName });
            await genre.save();

            this.cache.set(genre.id, genre);
            logger.info(`genre with id ${model_id} updated successfuly`)
            return genre;

        } else {
            logger.error(`genre not found`)
        }

    }

    async delete(id) {  //may have response

        const genre = await this.model.findByPk(id);
        logger.info(`Genre query: delete(${id})`);

        if (genre) {
            const numDestroyedRows = await genre.destroy();
            this.cache.delete(id);

            if (numDestroyedRows > 0) {
                logger.info(`genre with id ${id} deleted successfuly`);
                return true;

            } else {
                logger.error(`genre with id ${id} not been deleted`);
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