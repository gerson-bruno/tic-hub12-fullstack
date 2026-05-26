export interface CategoryEntityProps {
  id: string;
  name: string;
}

export interface ProductEntityProps {
  id: string;
  name: string;
  price: number;
  stock: number;
  categoryId: string;
}

export const categoriesTable: CategoryEntityProps[] = [];
export const productsTable: ProductEntityProps[] = [];