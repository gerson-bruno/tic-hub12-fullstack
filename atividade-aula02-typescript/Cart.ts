import { CartItem } from "./CartItem";
import { Product } from "./Product";

export class Cart {
  private items: CartItem[] = [];

  addItem(product: Product, quantity: number): void {
    const exists = this.items.some(item => item.product.id === product.id);

    if (exists) {
      this.items = this.items.map(item => {
        if (item.product.id === product.id) item.quantity += quantity;
        return item;
      });
    } else {
      this.items.push({ product, quantity });
    }
  }

  getTotalItems(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getFinalPrice(): number {
    return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
}