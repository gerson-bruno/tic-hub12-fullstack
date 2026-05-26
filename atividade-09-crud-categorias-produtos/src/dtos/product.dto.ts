import { Product } from '../entities/product.entity.js';

export class ProductResponseDto {
  static create(product: Product) {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      stock: product.stock,
      categoryId: product.categoryId
    };
  }
}

export class ProductListDto {
  static create(products: Product[], page: number, size: number) {
    return {
      data: products.map(p => ProductResponseDto.create(p)),
      page,
      size
    };
  }
}