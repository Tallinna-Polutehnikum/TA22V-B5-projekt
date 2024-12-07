import Router from 'express';
import userRouter from './userRouter.js';
import movieRouter from './movieRouter.js';
import moviesRouter from './moviesRouter.js';

const router = new Router()

router.use('/user', userRouter)
router.use('/movie', movieRouter)
router.use('/movies', moviesRouter)


export default router;