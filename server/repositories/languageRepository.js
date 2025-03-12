import logger from "../utils/logger";

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

        const language = await this.model.findByPk(id);
        if (language) { // if not null, not undefined, not a ''...
            this.cache.set(id, language);
        } //else {
        //     return DataBaseError.getMessage(`${nameOf(language)} not found`);
        // }

        logger.info(`DB query: findById(${id})`);
        return language;

    }

    async findAll() {

        if (this.cache.has('all')) {
            return this.cache.get('all');
        }

        const languages = await this.model.findAll();
        if (languages) {
            this.cache.set('all', languages);
        } //else {
        //     return DataBaseError.getMessage(`${nameOf(languages)} not found`);
        // }

        logger.info(`DB query: findAll`);
        return languages;

    }

    async create(data) {    //just add errorHandler, dont need duble check

        const language = await this.model.create({ data });
        // this.cache.set(language.id, language);
        //console.log(`${nameOf(language)} added`);

        logger.info(`DB query: create(${data})`);
        return language;

    }

    async update(id, newData) {

        const language = await this.findByPk(id);
        await language.update(newData);
        this.cache.set(language.id, language);

        logger.info(`DB query: update(${id, newData})`);
        return language;

    }

    async delete(id) {

        const language = await this.findByPk(id);
        await language.destroy();
        this.cache.delete(id);

        logger.info(`DB query: delete(${id})`);
        return true;    //confirms deletion (for bussines logic)

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