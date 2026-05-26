import { CategoryRepository } from '../repositories/category.repository.js';
import { Category } from '../entities/category.entity.js';

export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  async getAll(page: number, size: number) {
    return await this.categoryRepository.getAllCategories(page, size);
  }

  async getById(id: string) {
    const category = await this.categoryRepository.getCategoryById(id);
    if (!category) {
      const error = new Error("Categoria não encontrada");
      (error as any).status = 404;
      throw error;
    }
    return category;
  }

  async create(name: string) {
    const entity = Category.create(name);
    return await this.categoryRepository.createCategory(entity);
  }

  async update(id: string, name: string) {
    const entity = await this.getById(id);
    entity.rename(name);
    return await this.categoryRepository.updateCategory(entity);
  }

  async delete(id: string) {
    await this.getById(id);
    await this.categoryRepository.deleteCategory(id);
  }
}