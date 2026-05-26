import { Category } from '../entities/category.entity.js';

export class CategoryResponseDto {
  static create(category: Category) {
    return {
      id: category.id,
      name: category.name
    };
  }
}

export class CategoryListDto {
  static create(categories: any[], page: number, size: number) {
    return {
      data: categories.map(c => CategoryResponseDto.create(c)),
      page,
      size
    };
  }
}