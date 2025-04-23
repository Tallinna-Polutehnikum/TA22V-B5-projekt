import DataBaseError from "../error/DataBaseError.js";
import validateId from "../middleware/ValidationIdMiddleware.js";
import validateName from "../middleware/ValidationNameMiddleware.js";
import Language from "../models/language.js";
import LanguageRepository from "../repositories/languageRepository.js";
import logger from "../utils/logger.js";

export default class LanguageService {
  constructor() {
    this.languageRepository = new LanguageRepository(Language);
  }

  async getLanguage(id) {
    
    try {
      validateId(id);

      const language = await this.languageRepository.findByPk(id);
      if (!language) throw DataBaseError.getMessage(`language not found`);

      logger.info(`${language} returned`);
      return language;

    } catch (error) {
      logger.error(error);
      throw error;
    }

  }

    async getLanguages() {

      try {
        const languages = await this.languageRepository.findAll();
        if (!languages) throw DataBaseError.getMessage(`languages not found`);

        logger.info(`languages returned`);
        return languages;

      } catch (error) {
        logger.error(error);
        throw error;
      }

    }

  async createLanguage(name) {  //may be exists check

    try {
      validateName(name);

      const language = await this.languageRepository.create(name);
      if (!language) throw DataBaseError.getMessage(`language not been created`);

      logger.info(`${language} added to DB`);
      return language;

    } catch (error) {
      logger.error(error);
      throw (error);
    }

  }

  async updateLanguage(id, name) {

    try {
      validateId(id);
      validateName(name);

      const language = await this.languageRepository.update(id, name);
      if (!language) throw DataBaseError.getMessage(`language not been updated`);

    } catch (error) {
      logger.error(error);
    }

  }

  async deleteLanguage(id) {

    try {
      validateId(id);

      deleted = await this.languageRepository.delete(id)
      if (!deleted) throw DataBaseError.getMessage(`language not found`);
      await this.languageRepository.clearCache(id)

    } catch (error) {
      logger.error(error);
    }

  }

}