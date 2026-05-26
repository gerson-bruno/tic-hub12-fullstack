import { Router } from 'express';
import { CategoryController } from '../controllers/category.controller.js';
import { CategoryService } from '../services/category.service.js';
import { CategoryRepository } from '../repositories/category.repository.js';
import { validate } from '../middlewares/validate.js';
import { authMiddleware, authorize } from '../middlewares/auth.ts';
import { 
  createCategorySchema, 
  updateCategorySchema, 
  categoryParamsSchema, 
  categoryQueryPaginationSchema 
} from '../schemas/app.schemas.js';

const router = Router();

const categoryRepository = new CategoryRepository();
const categoryService = new CategoryService(categoryRepository);
const categoryController = new CategoryController(categoryService);

// Rotas Públicas
router.get('/', validate(categoryQueryPaginationSchema), categoryController.getAll);
router.get('/:id', validate(categoryParamsSchema), categoryController.getById);

// Rotas Privadas (Admin apenas)
router.post('/', authMiddleware, authorize('admin'), validate(createCategorySchema), categoryController.create);
router.put('/:id', authMiddleware, authorize('admin'), validate(categoryParamsSchema), validate(updateCategorySchema), categoryController.update);
router.delete('/:id', authMiddleware, authorize('admin'), validate(categoryParamsSchema), categoryController.delete);

export default router;