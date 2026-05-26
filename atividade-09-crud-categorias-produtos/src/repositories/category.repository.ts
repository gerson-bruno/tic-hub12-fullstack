import { categoriesTable } from '../database.js';
import { Category } from '../entities/category.entity.js';

export class CategoryRepository {
  async createCategory(category: Category): Promise<Category> {
    categoriesTable.push({ id: category.id, name: category.name });
    return category;
  }

  async getAllCategories(page: number, size: number): Promise<Category[]> {
    const offset = (page - 1) * size;
    const rows = categoriesTable.slice(offset, offset + size);
    return rows.map(r => new Category(r.id, r.name));
  }

  async getCategoryById(id: string): Promise<Category | null> {
    const row = categoriesTable.find(c => c.id === id);
    if (!row) return null;
    return new Category(row.id, row.name);
  }

  async updateCategory(category: Category): Promise<Category> {
    const index = categoriesTable.findIndex(c => c.id === category.id);
    if (index !== -1) {
      categoriesTable[index] = { id: category.id, name: category.name };
    }
    return category;
  }

  async deleteCategory(id: string): Promise<void> {
    const index = categoriesTable.findIndex(c => c.id === id);
    if (index !== -1) {
      categoriesTable.splice(index, 1);
    }
  }
}