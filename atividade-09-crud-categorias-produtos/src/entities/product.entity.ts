import crypto from 'crypto';

export class Product {
  constructor(
    public readonly id: string,
    public name: string,
    public price: number,
    public stock: number,
    public categoryId: string
  ) {}

  static create(name: string, price: number, stock: number, categoryId: string, id?: string): Product {
    if (!name || name.trim().length < 3) throw new Error("Nome deve ter no mínimo 3 caracteres");
    if (price <= 0) throw new Error("O preço deve ser positivo");
    if (stock < 0) throw new Error("O estoque não pode ser negativo");
    if (!categoryId) throw new Error("categoryId é obrigatório");

    const productId = id || crypto.randomUUID();
    return new Product(productId, name.trim(), price, stock, categoryId);
  }
}