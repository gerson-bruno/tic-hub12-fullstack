export class Cart {
    constructor() {
        this.items = [];
    }
    addItem(product, quantity) {
        const exists = this.items.some(item => item.product.id === product.id);
        if (exists) {
            this.items = this.items.map(item => {
                if (item.product.id === product.id)
                    item.quantity += quantity;
                return item;
            });
        }
        else {
            this.items.push({ product, quantity });
        }
    }
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }
    getFinalPrice() {
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
}
