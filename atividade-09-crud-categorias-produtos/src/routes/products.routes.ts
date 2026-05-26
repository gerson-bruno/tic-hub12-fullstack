// src/routes/products.routes.ts
import { Router } from 'express';
import { ProductController } from '../controllers/product.controller.js';
import { ProductService } from '../services/product.service.js';
import { ProductRepository } from '../repositories/product.repository.js';
import { CategoryRepository } from '../repositories/category.repository.js';
import { validate } from '../middlewares/validate.js';
import { authMiddleware, authorize } from '../middlewares/auth.ts';
import { 
  createProductSchema, 
  updateProductSchema, 
  productParamsSchema, 
  productQueryPaginationSchema 
} from '../schemas/app.schemas.js';

const router = Router();

const productRepository = new ProductRepository();
const categoryRepository = new CategoryRepository(); 
const productService = new ProductService(productRepository, categoryRepository);
const productController = new ProductController(productService);

// Rotas Públicas
router.get('/', validate(productQueryPaginationSchema), productController.getAll);
router.get('/:id', validate(productParamsSchema), productController.getById);

// Rotas Privadas (Admin apenas)
router.post('/', authMiddleware, authorize('admin'), validate(createProductSchema), productController.create);
router.put('/:id', authMiddleware, authorize('admin'), validate(productParamsSchema), validate(updateProductSchema), productController.update);
router.delete('/:id', authMiddleware, authorize('admin'), validate(productParamsSchema), productController.delete);

export default router;