import ApiError from "../error/ApiError.js";
import Language from "../models/language.js";
import LanguageRepository from "../repositories/languageRepository.js";
import LanguageService from "../services/languageService.js";


class LanguageController
{
    languageRepository = new LanguageRepository(Language);
    languageService = new LanguageService(this.languageRepository);

    async create(req, res)
    {
        const {name} = req.body;
        const language = await this.languageService.createLanguage({name});

        return res.json(language);
    };
    async getAll(req, res)
    {
        const languages = await this.languageService.getLanguages();

        return res.json(languages);
    };
    async getOne(req, res)
    {
        const {id} = req.body;
        if(!id){ return next(ApiError.badRequest('id is not found')) }; //returns HTTP error
        const language = await this.languageService.getLanguage(id);
        
        return res.json(language);
    };
    async change(req, res)
    {
        const {id, name} = req.body;
        await this.languageService.updateLanguage({id, name});
    };
    async delete(req, res)
    {

    };
}

export default new LanguageController()