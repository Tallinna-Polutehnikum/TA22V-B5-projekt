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
      if (!language) throw new DataBaseError.getMessage(`language not found`);

      logger.info(`${language.name} returned`);
      return language;

    } catch (error) {
      logger.error(error);
    }

  }

  async getLanguages() {

    try {
      const languages = await languageRepository.findAll();
      if (!languages) throw new DataBaseError.getMessage(`languages not found`);

      logger.info(`languages returned`);
      return languages;

    } catch (error) {
      logger.error(error);
    }

  }

  async createLanguage(name) {  //may be exists check

    validateName(name);

    try {
      const language = await languageRepository.create(name);
      if (!language) throw new DataBaseError.getMessage(`language not been created`);

      logger.info(`${language.name} added to DB`);
      return language;

    } catch (error) {
      logger.error(error);
    }

  }

  async updateLanguage(id, name) {
    
    try {
      validateId(id);
      validateName(name);

      const language = await languageRepository.update(id, name);
      if (!language) throw new DataBaseError.getMessage(`language not been updated`);
      
    } catch (error) {
      logger.error(error);
    }

  }

  async deleteLanguage(id) {

    try {
      validateId(id);
      
      if (!id) throw new DataBaseError;

    } catch (error) {
      
    }

    return await languageRepository.delete(id);
    
  }

}