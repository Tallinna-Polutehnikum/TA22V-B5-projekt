import LanguageRepository from "../repositories/languageRepository";
import BussinesError from "../error/BussinesError";
import DataBaseError from "../error/DataBaseError";
import { validateId, validateName } from "../middleware/ValidationIdMiddleware";

export default class LanguageService {
  constructor(LanguageRepository) {
    this.languageRepository = LanguageRepository;
  }

  async getLanguage(id) {
    if (typeof id === 'number' && Number.isInteger(id)) {   //ПРИСМОТРЕТЬСЯ - надо заменить обратной логикой в мидлвейр
      validateId(id);
      const language = await languageRepository.findByPk(id);
      if (!language) throw new DataBaseError;
    }

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
    if (!id) throw new DataBaseError;

    if (!name) throw new DataBaseError;

    return await languageRepository.update(id, name);
  }

  async deleteLanguage(id) {
    if (!id) throw new DataBaseError;

    return await languageRepository.dalete(id);
  }

}