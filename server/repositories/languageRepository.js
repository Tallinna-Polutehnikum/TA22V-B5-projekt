import DataBaseError from "../error/DataBaseError";
import Language from "../models/language"

export default class LanguageRepository{
    constructor(){
        this.cache = new Map(); //create a map object with cache 
    }
    
    async findByPk(id){
        try {
            if (this.cache.has(id)) {
                console.log("Returning from cache");
                return this.cache.get(id);
            }

            console.log("Fetching from db");
            const language = await Language.findByPk(id);

            if (language) {  // if exists
                this.cache.set(id, language);
            }
            return language; 
        } catch (error) {
            throw new DataBaseError(error.message);
        }

    }

    async findAll(){
        try {
            if (this.cache.has('all')) {
                console.log("Returning from cache");
                return this.cache.get('all');
            }

            console.log("Fetching from db");
            const languages = await Language.findAll();
            this.cache.set('all', languages);
            return languages;
        } catch (error) {
            throw new DataBaseError(error.message); 
        }

    }

    async create(name){
        try {
            const language = await Language.create({ name });
            console.log('language added');
            this.cache.set(language.id, language);
            return language;
        } catch (error) {
            throw new DataBaseError(error.message);
        }
    }

    async update(id, newData) {
        try {
            const language = await findByPk(id);
            if (!language) return null; //if not exists

            await language.update(newData);
            this.cache.set(language.id, language);
            return language;
        } catch (error) {
            throw new DataBaseError(error.message);
        }

    }
    
    async delete(id) {
        try {
            const language = await findByPk(id);
            if (!language) return null; //if not exists

            await language.destroy();
            this.cache.delete(id);
            return true;    //confirms deletion (for bussines logic)
        } catch (error) {
            throw new DataBaseError(error.message);
        }

    }

    async clearCache(key){  //can be incapsulated
        switch(key){
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