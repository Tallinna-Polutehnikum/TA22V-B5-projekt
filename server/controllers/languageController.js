import ApiError from "../error/ApiError.js";
import LanguageService from "../services/languageService.js";
import logger from "../utils/logger.js";

let languageService

class LanguageController {
    
    constructor(){
        languageService = new LanguageService()
    }
    // languageRepository = new LanguageRepository(Language);
    // languageService = new LanguageService(this.languageRepository);

    async getOne(req, res, next) {
        try {
            const { id } = req.params['id']; //req.body;
            console.log(id)
            if (!id) {
                return next(ApiError.badRequest('id is not found')) //returns HTTP error
            }; 
            const language = await this.languageService.getLanguage(id);

            return res.json(language);    
        } catch (error) {
            console.log(error)
            next(error);
        }

    };

    async getAll(req, res, next) {
        // console.log(`languages getall ${languageService}`)
        try {
            const languages = await languageService.getLanguages();
            
            return res.json(languages);
        } catch (error) {
            logger.error(error)
            next (error);
        }

    };

    async create(req, res) {

        const { name } = req.body;
        const language = await this.languageService.createLanguage(name);

        return res.json(language);

    };

    async change(req, res) {

        const { id, name } = req.body;
        await this.languageService.updateLanguage(id, name);

    };

    async delete(req, res) {

        const { id } = req.body;
        await this.languageService.deleteLanguage(id);
        
    };
}

export default new LanguageController();