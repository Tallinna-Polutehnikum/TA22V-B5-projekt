import DataBaseError from "../error/DataBaseError";
import { validateId } from "../middleware/ValidationIdMiddleware";
import { validateName } from "../middleware/ValidationNameMiddleware";

export default class LanguageService {
  constructor(languageRepository) {
    this.languageRepository = languageRepository;
  }

  async getLanguage(id) {
    validateId(id);
    const language = await languageRepository.findByPk(id);
    if (!language) throw new DataBaseError;

    return language;
  }

  async getLanguages() {
    const languages = await languageRepository.findAll();
    if (!languages) throw new DataBaseError;

    return languages;
  }

  async createLanguage(name) {
    validateName(name);
    if (!name) throw new DataBaseError;

    return await languageRepository.create(name);
  }

  async updateLanguage(id, name) {
    validateId(id);
    validateName(name);
    if (!id) throw new DataBaseError;
    if (!name) throw new DataBaseError;

    return await languageRepository.update(id, name);
  }

  async deleteLanguage(id) {
    validateId(id);
    if (!id) throw new DataBaseError;

    return await languageRepository.dalete(id);
  }

}