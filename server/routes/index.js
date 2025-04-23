import Router from 'express';
import userRouter from './userRouter.js';
import movieRouter from './movieRouter.js';
import languageRouter from './languageRouter.js';
import actorRouter from './actorRouter.js';
import genreRouter from './genreRouter.js';
import posterRouter from './posterRouter.js';

const router = new Router()

router.use('/user', userRouter,)
router.use('/movie', movieRouter)
router.use('/lang', languageRouter)
router.use('/actor', actorRouter)
router.use('/genre', genreRouter)
router.use('/poster', posterRouter)


export default router;