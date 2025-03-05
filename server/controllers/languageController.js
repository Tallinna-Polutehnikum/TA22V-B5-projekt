import ApiError from "../error/ApiError.js";
import Language from "../models/language.js";


class LanguageController {
    async create(req, res) {
        const { name } = req.body
        const language = await Language.create({ name })
        return res.json(language)
    };
    async getAll(req, res) {
        const languages = await Language.findAll()
        return res.json(languages)
    };
    async getOne(req, res) {
        const { id } = req.body
        if (!id) { return next(ApiError.badRequest('Id is not found')) }
        const language = await Language.findOne(id)
        return res.json(language)
    };
    async change(req, res) {

    };
    async delete(req, res) {

    };
}

export default new LanguageController()