import Router from 'express';
import genreController from '../controllers/genreController.js';

const router = new Router()

router.post('/', genreController.create)
router.get('/', genreController.getAll)
router.get('/:id', genreController.getOne)

export default router;