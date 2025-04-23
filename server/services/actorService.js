import DataBaseError from "../error/DataBaseError.js";
import validateId from "../middleware/ValidationIdMiddleware.js";
import validateName from "../middleware/ValidationNameMiddleware.js";
import Actor from "../models/actor.js";
import ActorRepository from "../repositories/actorRepository.js";
import logger from "../utils/logger.js";

export default class ActorService {
  constructor() {
    this.actorRepository = new ActorRepository(Actor);
  }

  async getActor(id) {
    
    try {
      validateId(id);

      const actor = await this.actorRepository.findByPk(id);
      if (!actor) throw DataBaseError.getMessage(`actor not found`);

      logger.info(`${actor} returned`);
      return actor;

    } catch (error) {
      logger.error(error);
      throw error;
    }

  }

    async getActors() {

      try {
        const actors = await this.actorRepository.findAll();
        if (!actors) throw DataBaseError.getMessage(`actors not found`);

        logger.info(`actors returned`);
        return actors;

      } catch (error) {
        logger.error(error);
        throw error;
      }

    }

  async createActor(first, last) {

    try {
      validateName(first);
      validateName(last)

      const actor = await this.actorRepository.create( {"firstName": first, "lastName": last} );
      if (!actor) throw DataBaseError.getMessage(`actor not been created`);

      logger.info(`${actor} added to DB`);
      return actor;

    } catch (error) {
      logger.error(error);
      throw (error);
    }

  }


}