import DataBaseError from "../error/DataBaseError";
import { validateId } from "../middleware/ValidationIdMiddleware";
import { validateName } from "../middleware/ValidationNameMiddleware";
import logger from "../utils/logger";

export default class LanguageService {
  constructor(repository) {
    this.languageRepository = repository;
  }

  async getLanguage(id) {
    validateId(id);

    try {
      const language = await languageRepository.findByPk(id);
      if (!language) throw new DataBaseError.getMessage(`${name(language)} not found`);

      logger.info(`language returned`);
      return language;
    } catch (error) {
      logger.error(error);
    }
  }

  async getLanguages() {

    try {
      const languages = await languageRepository.findAll();
      if (!languages) throw new DataBaseError.getMessage(`${name(languages)} not found`);

      return languages;
    } catch (error) {
      logger.error(error);
    }
  }

  async createLanguage(name) {  //may be exists check
    validateName(name);

    try {
      const language = await languageRepository.create(name);
      if (!language) throw new DataBaseError.getMessage(`${name(language)} not been created`);

      logger.info(`${language} added to DB`)
      return language;
    } catch (error) {
      logger.error(error);
    }
  }

  async updateLanguage(id, name) {
    validateId(id);
    validateName(name);

    return await languageRepository.update(id, name);
  }

  async deleteLanguage(id) {
    validateId(id);
    if (!id) throw new DataBaseError;

    return await languageRepository.dalete(id);
  }

}