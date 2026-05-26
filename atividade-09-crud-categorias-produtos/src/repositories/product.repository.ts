import { productsTable } from '../database.js';
import { Product } from '../entities/product.entity.js';

export class ProductRepository {
  async createProduct(product: Product): Promise<Product> {
    productsTable.push({
      id: product.id,
      name: product.name,
      price: product.price,
      stock: product.stock,
      categoryId: product.categoryId
    });
    return product;
  }

  async getAllProducts(page: number, size: number): Promise<Product[]> {
    const offset = (page - 1) * size;
    const rows = productsTable.slice(offset, offset + size);
    return rows.map(r => new Product(r.id, r.name, r.price, r.stock, r.categoryId));
  }

  async getProductById(id: string): Promise<Product | null> {
    const row = productsTable.find(p => p.id === id);
    if (!row) return null;
    return new Product(row.id, row.name, row.price, row.stock, row.categoryId);
  }

  async updateProduct(product: Product): Promise<Product> {
    const index = productsTable.findIndex(p => p.id === product.id);
    if (index !== -1) {
      productsTable[index] = {
        id: product.id,
        name: product.name,
        price: product.price,
        stock: product.stock,
        categoryId: product.categoryId
      };
    }
    return product;
  }

  async deleteProduct(id: string): Promise<void> {
    const index = productsTable.findIndex(p => p.id === id);
    if (index !== -1) {
      productsTable.splice(index, 1);
    }
  }
}