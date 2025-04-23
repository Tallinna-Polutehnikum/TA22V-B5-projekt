import DataBaseError from "../error/DataBaseError.js";
import validateId from "../middleware/ValidationIdMiddleware.js";
import validateName from "../middleware/ValidationNameMiddleware.js";
import Genre from "../models/genre.js";
import GenreRepository from "../repositories/genreRepository.js";
import logger from "../utils/logger.js";

export default class GenreService {
  constructor() {
    this.genreRepository = new GenreRepository(Genre);
  }

  async getGenre(id) {
    
    try {
      validateId(id);

      const genre = await this.genreRepository.findByPk(id);
      if (!genre) throw DataBaseError.getMessage(`genre not found`);

      logger.info(`${genre} returned`);
      return genre;

    } catch (error) {
      logger.error(error);
      throw error;
    }

  }

    async getGenres() {

      try {
        const genres = await this.genreRepository.findAll();
        if (!genres) throw DataBaseError.getMessage(`genres not found`);

        logger.info(`genres returned`);
        return genres;

      } catch (error) {
        logger.error(error);
        throw error;
      }

    }

  async createGenre(title) {

    try {
      validateName(title);

      const genre = await this.genreRepository.create( title );
      if (!genre) throw DataBaseError.getMessage(`genre not been created`);

      logger.info(`${genre} added to DB`);
      return genre;

    } catch (error) {
      logger.error(error);
      throw (error);
    }

  }


}