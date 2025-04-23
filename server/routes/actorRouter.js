import Router from 'express';
import actorController from '../controllers/actorController.js';

const router = new Router()

router.post('/', actorController.create)
router.get('/', actorController.getAll)
router.get('/:id', actorController.getOne)

export default router;