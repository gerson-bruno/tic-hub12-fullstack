import { Router } from 'express';
import { productController } from '../controllers/product.controller.js';
import { validate } from '../middlewares/validate.js';
import { createProductSchema, productParamsSchema } from '../schemas/app.schemas.js';

const router = Router();

router.get('/', productController.list);
router.post('/', validate(createProductSchema), productController.create);
router.delete('/:id', validate(productParamsSchema), productController.delete);

export default router;

