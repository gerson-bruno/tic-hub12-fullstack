import { ProductRepository } from '../repositories/product.repository.js';
import { CategoryRepository } from '../repositories/category.repository.js';
import { Product } from '../entities/product.entity.js';

export class ProductService {
  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository
  ) {}

  async getAll(page: number, size: number) {
    return await this.productRepository.getAllProducts(page, size);
  }

  async getById(id: string) {
    const product = await this.productRepository.getProductById(id);
    if (!product) {
      const error = new Error("Produto não encontrado");
      (error as any).status = 404;
      throw error;
    }
    return product;
  }

  async create(name: string, price: number, stock: number, categoryId: string) {
    const categoryExists = await this.categoryRepository.getCategoryById(categoryId);
    if (!categoryExists) {
      const error = new Error("Categoria informada não existe");
      (error as any).status = 400;
      throw error;
    }

    const entity = Product.create(name, price, stock, categoryId);
    return await this.productRepository.createProduct(entity);
  }

  async update(id: string, name: string, price: number, stock: number, categoryId: string) {
    const product = await this.getById(id);

    if (categoryId !== product.categoryId) {
      const categoryExists = await this.categoryRepository.getCategoryById(categoryId);
      if (!categoryExists) {
        const error = new Error("Nova categoria informada não existe");
        (error as any).status = 400;
        throw error;
      }
    }

    const updatedEntity = Product.create(name, price, stock, categoryId, product.id);
    return await this.productRepository.updateProduct(updatedEntity);
  }

  async delete(id: string) {
    await this.getById(id);
    await this.productRepository.deleteProduct(id);
  }
}