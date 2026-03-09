import { Cart } from "./Cart";
// Categoria e produtos
const electronics = { id: 1, name: "Eletrônicos" };
const phone = { id: 1, name: "Smartphone", price: 2000, category: electronics };
const notebook = { id: 2, name: "Notebook", price: 4500, category: electronics };
// Carrinho
const cart = new Cart();
cart.addItem(phone, 1);
cart.addItem(phone, 2);
cart.addItem(notebook, 1);
// Resultados
console.log("Itens no carrinho:", cart.getTotalItems()); // 4
console.log("Preço final:", cart.getFinalPrice()); // 10500
