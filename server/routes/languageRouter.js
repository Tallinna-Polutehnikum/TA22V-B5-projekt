import Router from 'express';
import languageController from '../controllers/languageController.js';

const router = new Router()

router.post('/', languageController.create)
router.get('/', languageController.getAll)
router.get('/:id', languageController.getOne)
// router.put('/', languageController.change)
// router.delete('/', languageController.delete)

export default router;