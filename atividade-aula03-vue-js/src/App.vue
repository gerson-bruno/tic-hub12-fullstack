<template>
  <div id="app">
    <h1>Loja de Eletrônicos</h1>

    <div class="products">
      <ProductCard
        v-for="prod in products"
        :key="prod.id"
        :product="prod"
        @add-to-cart="addToCart"
      />
    </div>

    <div class="cart">
      <h2>Carrinho</h2>
      <p>Total de itens: {{ cart.getTotalItems() }}</p>
      <p>Preço final: R$ {{ cart.getFinalPrice() }}</p>

      <ul>
        <li v-for="item in cart.getItems()" :key="item.product.id">
          {{ item.product.name }} x {{ item.quantity }}
          <button @click="removeFromCart(item.product.id)">Remover</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import ProductCard from './components/ProductCard.vue';
import { Product } from './models/Product';
import { Category } from './models/Category';
import { Cart } from './models/Cart';

export default defineComponent({
  name: 'App',
  components: { ProductCard },
  setup() {
    const electronics: Category = { id: 1, title: 'Eletrônicos' };
    const books: Category = { id: 2, title: 'Livros' };

    const products: Product[] = [
      { id: 1, name: 'Smartphone', price: 2000, category: electronics },
      { id: 2, name: 'Notebook', price: 4500, category: electronics },
      { id: 3, name: 'Livro TS', price: 120, category: books },
    ];

    const cart = reactive(new Cart());

    const addToCart = (product: Product) => cart.addItem(product);
    const removeFromCart = (productId: number) => cart.removeItem(productId);

    return { products, cart, addToCart, removeFromCart };
  }
});
</script>

<style>
.products { display: flex; flex-wrap: wrap; }
.cart { margin-top: 20px; }
</style>