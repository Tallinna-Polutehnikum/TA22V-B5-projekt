import { where } from "sequelize";
import logger from "../utils/logger.js";

export default class LanguageRepository {

    static cache = new Map();   //create a map object with cache 
    static cacheState = null;

    constructor(model) {
        this.model = model;

        if (!LanguageRepository.cacheState) {    //if null
            LanguageRepository.cacheState = LanguageRepository.cache;
        }

        this.cache = LanguageRepository.cacheState;

    }

    //ORM FUNCTIONS IS ANY!!!


    async findByPk(id) {

        if (this.cache.has(id)) {
            return this.cache.get(id);
        }

        logger.info(`DB query: findById(${id})`);

        const language = await this.model.findByPk(id);
        if (language) { // if not null, not undefined, not a ''...
            this.cache.set(id, language);
        }

        return language;

    }

    async findAll() {

        if (this.cache.has('all')) {
            return this.cache.get('all');
        }

        logger.info(`DB query: findAll`);

        const languages = await this.model.findAll();
        if (languages) {
            this.cache.set('all', languages);
        }

        return languages;

    }

    async create(data) {

        logger.info(`DB query: create(${data})`);

        const language = await this.model.create(data);
        // this.cache.set(language.id, language);
        //console.log(`${nameOf(language)} added`);

        return language;

    }

    async update(model_id, newName) {   //have not response

        const language = await this.model.findByPk(model_id);
        logger.info(`DB query: update language ${model_id} with ${newName})`);

        if (language) {

            await language.set({ name: newName });
            await language.save();

            this.cache.set(language.id, language);
            logger.info(`language with id ${model_id} updated successfuly`)
            return language;

        } else {
            logger.error(`language not found`)
        }

    }

    async delete(id) {  //may have response

        const language = await this.model.findByPk(id);
        logger.info(`DB query: delete(${id})`);

        if (language) {
            const numDestroyedRows = await language.destroy();
            this.cache.delete(id);

            if (numDestroyedRows > 0) {
                logger.info(`language with id ${id} deleted successfuly`);
                return true;

            } else {
                logger.error(`language with id ${id} not been deleted`);
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