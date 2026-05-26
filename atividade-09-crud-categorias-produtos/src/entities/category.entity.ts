import crypto from 'crypto';

export class Category {
  constructor(
    public readonly id: string,
    public name: string
  ) {}

 
  static create(name: string, id?: string): Category {
    if (!name || name.trim().length < 3) {
      throw new Error("O nome da categoria deve ter no mínimo 3 letras");
    }
    const categoryId = id || crypto.randomUUID();
    return new Category(categoryId, name.trim());
  }

 
  rename(newName: string): void {
    if (!newName || newName.trim().length < 3) {
      throw new Error("O novo nome da categoria deve ter no mínimo 3 letras");
    }
    this.name = newName.trim();
  }
}