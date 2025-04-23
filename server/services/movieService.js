import DataBaseError from "../error/DataBaseError.js";
import validateId from "../middleware/ValidationIdMiddleware.js";
import validateName from "../middleware/ValidationNameMiddleware.js";
import Language from "../models/language.js";
import Movie from "../models/movie.js";
import MovieRepository from "../repositories/movieRepository.js";
import logger from "../utils/logger.js";

export default class MovieService {
  constructor() {
    this.movieRepository = new MovieRepository(Movie);
  }

  async getMovie(id) {
    
    try {
      validateId(id);

      const movie = await this.movieRepository.findByPk(id);
      if (!movie) throw DataBaseError.getMessage(`movie not found`);

      logger.info(`${movie} returned`);
      return movie;

    } catch (error) {
      logger.error(error);
      throw error;
    }

  }

    async getMovies() {

      try {
        const movies = await this.movieRepository.findAll({
            include: [
                {model: Actor},
                {model: Genre},
                {model: Poster},
                {model: Language, as: 'original'},
                {model: Language, as: 'subtitle'}
            ]     
        });
        if (!movies) throw DataBaseError.getMessage(`movies not found`);

        logger.info(`movies returned`);
        return movies;

      } catch (error) {
        logger.error(error);
        throw error;
      }

    }

  async createMovie(name) {  //may be exists check

    try {
      validateName(name);

      const movie = await this.movieRepository.create(name);
      if (!movie) throw DataBaseError.getMessage(`movie not been created`);

      logger.info(`${movie} added to DB`);
      return movie;

    } catch (error) {
      logger.error(error);
      throw (error);
    }

  }

  async updateMovie(id, name) {

    try {
      validateId(id);
      validateName(name);

      const movie = await this.movieRepository.update(id, name);
      if (!movie) throw DataBaseError.getMessage(`movie not been updated`);

    } catch (error) {
      logger.error(error);
    }

  }

  async deleteMovie(id) {

    try {
      validateId(id);

      deleted = await this.movieRepository.delete(id)
      if (!deleted) throw DataBaseError.getMessage(`movie not found`);
      await this.movieRepository.clearCache(id)

    } catch (error) {
      logger.error(error);
    }

  }

}