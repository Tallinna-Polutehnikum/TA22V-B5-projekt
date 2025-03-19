import { where } from "sequelize";
import logger from "../utils/logger";

export default class MovieRepository {

    static cache = new Map();   //create a map object with cache 
    static cacheState = null;

    constructor(model) {
        this.model = model;

        if (!MovieRepository.cacheState) {    //if null
            MovieRepository.cacheState = MovieRepository.cache;
        }

        this.cache = MovieRepository.cacheState;

    }

    //ORM FUNCTIONS IS ANY!!!


    async findByPk(id) {

        if (this.cache.has(id)) {
            return this.cache.get(id);
        }

        logger.info(`DB query: findById(${id})`);

        const movie = await this.model.findByPk(id);
        if (movie) { // if not null, not undefined, not a ''...
            this.cache.set(id, movie);
        }

        return movie;

    }

    async findAll() {

        if (this.cache.has('all')) {
            return this.cache.get('all');
        }

        logger.info(`DB query: findAll`);

        const movies = await this.model.findAll();
        if (movies) {
            this.cache.set('all', movies);
        }

        return movies;

    }
    //{title, desc, year, langId, sublangId}
    async create(data) {

        logger.info(`DB query: create(${data})`);    
        const movie = await this.model.create(data);
        // this.cache.set(movie.id, movie);
        //console.log(`${nameOf(movie)} added`);

        return movie;

    }

    //{title, desc, year, langId, sublangId}
    async update(model_id, data) {   //have not response
        
        const movie = await this.model.findByPk(model_id);
        logger.info(`DB query: update movie ${model_id} with ${data})`);

        if (movie) {
            Object.keys(data).forEach(key => {
                movie.set(key, data[key]);
            });
            await movie.save();

            this.cache.set(movie.id, movie);
            logger.info(`movie with id ${model_id} updated successfuly`)
            return movie;

        } else {
            logger.error(`movie not found`)
        }

    }

    async delete(id) {  //may have response

        const movie = await this.model.findByPk(id);
        logger.info(`DB query: delete(${id})`);

        if (movie) {
            const numDestroyedRows = await movie.destroy();
            this.cache.delete(id);

            if (numDestroyedRows > 0) {
                logger.info(`movie with id ${id} deleted successfuly`);
                return true;

            } else {
                logger.error(`movie with id ${id} not been deleted`);
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