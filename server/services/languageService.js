import LanguageRepository from "../repositories/languageRepository";
import BussinesError from "../error/BussinesError";

export default class LanguageService {

    async getLanguage(id) {
        if (typeof id === 'number' && Number.isInteger(id)) {   //ПРИСМОТРЕТЬСЯ
            const language = await LanguageRepository.findByPk(id);
            if (!language) {
                throw new BussinesError.forbidden();
            }
        }

        return language;
    }

    async getLanguages() {
        const languages = await LanguageRepository.findAll();
        if (!languages) {
          throw new BussinesError.forbidden();
        }

        return languages;
    }
  
    async createLanguage(name) {
      if (!name) {
        throw new BussinesError.invalid();
      }

      return await LanguageRepository.create(name);
    }

    async updateLanguage(id, name) {
        if (!id) {
            throw new BussinesError.forbidden();
        }

        if (!name) {
          throw new BussinesError.invalid();
        }

        return await LanguageRepository.update(id, name);
    }
    
    async deleteLanguage(id) {
        if (!id) {
          throw new BussinesError.forbidden();
        }

        return await LanguageRepository.dalete(id);
    }

  }