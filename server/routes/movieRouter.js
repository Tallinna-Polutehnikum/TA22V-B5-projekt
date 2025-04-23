import Router from 'express';
import movieController from '../controllers/movieController.js';

const router = new Router()

router.post('/', movieController.create)
router.get('/', movieController.getAll)
router.get('/:id', movieController.getOne)
// router.put('/', movieController.change)
// router.delete('/', movieController.delete)

export default router;