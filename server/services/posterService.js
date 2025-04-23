import DataBaseError from "../error/DataBaseError.js";
import validateId from "../middleware/ValidationIdMiddleware.js";
import validateName from "../middleware/ValidationNameMiddleware.js";
import Poster from "../models/poster.js";
import PosterRepository from "../repositories/posterRepository.js";
import logger from "../utils/logger.js";

export default class PosterService {
  constructor() {
    this.posterRepository = new PosterRepository(Poster);
  }

  async getPoster(id) {
    
    try {
      validateId(id);

      const poster = await this.posterRepository.findByPk(id);
      if (!poster) throw DataBaseError.getMessage(`poster not found`);

      logger.info(`${poster} returned`);
      return poster;

    } catch (error) {
      logger.error(error);
      throw error;
    }

  }

    async getPosters() {

      try {
        const posters = await this.posterRepository.findAll();
        if (!posters) throw DataBaseError.getMessage(`posters not found`);

        logger.info(`posters returned`);
        return posters;

      } catch (error) {
        logger.error(error);
        throw error;
      }

    }

  async createPoster(typeId, url) {

    try {
      validateId(typeId);
      validateName(url);

      const poster = await this.posterRepository.create( {"type": typeId, "url": url} );
      if (!poster) throw DataBaseError.getMessage(`poster not been created`);

      logger.info(`${poster} added to DB`);
      return poster;

    } catch (error) {
      logger.error(error);
      throw (error);
    }

  }


}