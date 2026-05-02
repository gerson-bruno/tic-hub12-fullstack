import { Router } from 'express';
import { categoryController } from '../controllers/category.controller.js';
import { validate } from '../middlewares/validate.js';
import { createCategorySchema, categoryParamsSchema, categoryQueryPaginationSchema } from '../schemas/app.schemas.js';

const router = Router();

router.get('/', validate(categoryQueryPaginationSchema), categoryController.getAll);
router.post('/', validate(createCategorySchema), categoryController.create);
router.delete('/:id', validate(categoryParamsSchema), categoryController.delete);

export default router;