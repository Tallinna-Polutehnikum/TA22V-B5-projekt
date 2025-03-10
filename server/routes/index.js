import Router from 'express';
import userRouter from './userRouter.js';
import movieRouter from './movieRouter.js';
import languageRouter from './languageRouter.js';

const router = new Router()

router.use('/user', userRouter,)
router.use('/movie', movieRouter)
router.use('/lang', languageRouter)


export default router;