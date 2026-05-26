import { Request, Response, NextFunction } from 'express';
import { ProductService } from '../services/product.service.js';
import { ProductResponseDto, ProductListDto } from '../dtos/product.dto.js';

export class ProductController {
  constructor(private productService: ProductService) {}

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = Number(req.query.page);
      const size = Number(req.query.size);
      const products = await this.productService.getAll(page, size);
      return res.json(ProductListDto.create(products, page, size));
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const product = await this.productService.getById(id);
      return res.json(ProductResponseDto.create(product));
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, price, stock, categoryId } = req.body;
      const product = await this.productService.create(name, price, stock, categoryId);
      return res.status(201).json(ProductResponseDto.create(product));
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { name, price, stock, categoryId } = req.body;
      const product = await this.productService.update(id, name, price, stock, categoryId);
      return res.json(ProductResponseDto.create(product));
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      await this.productService.delete(id);
      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
}