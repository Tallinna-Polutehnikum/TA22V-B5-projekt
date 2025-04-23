import Router from 'express';
import posterController from '../controllers/posterController.js';

const router = new Router()

router.post('/', posterController.create)
router.get('/', posterController.getAll)
router.get('/:id', posterController.getOne)

export default router;