import { type CartItem } from './CartItem';
import { type Product } from './Product';

export class Cart {
  private items: CartItem[] = [];

  addItem(product: Product, quantity: number = 1): void {
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

  removeItem(productId: number): void {
    this.items = this.items.filter(item => item.product.id !== productId);
  }

  removeOne(productId: number): void {
  this.items = this.items.map(item => {
    if (item.product.id === productId) {
      item.quantity -= 1;
    }
    return item;
  }).filter(item => item.quantity > 0);  
}
  getTotalItems(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getFinalPrice(): number {
    return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  getItems(): CartItem[] {
    return this.items;
  }
}

