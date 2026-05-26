import { Request, Response, NextFunction } from 'express';
import { CategoryService } from '../services/category.service.js';
import { CategoryResponseDto, CategoryListDto } from '../dtos/category.dto.js';

export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = Number(req.query.page);
      const size = Number(req.query.size);
      const categories = await this.categoryService.getAll(page, size);
      return res.json(CategoryListDto.create(categories, page, size));
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const category = await this.categoryService.getById(id);
      return res.json(CategoryResponseDto.create(category));
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.body;
      const category = await this.categoryService.create(name);
      return res.status(201).json(CategoryResponseDto.create(category));
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const category = await this.categoryService.update(id, name);
      return res.json(CategoryResponseDto.create(category));
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      await this.categoryService.delete(id);
      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
}