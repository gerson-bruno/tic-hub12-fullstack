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
          <button @click="removeOneFromCart(item.product.id)">Remover</button>
          <button @click="removeFromCart(item.product.id)">Limpar</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import ProductCard from './components/ProductCard.vue';
import { type Product } from './models/Product';
import { type Category } from './models/Category';
import { Cart } from './models/Cart';

export default defineComponent({
  name: 'App',
  components: { ProductCard },
  setup() {
    const electronics: Category = { id: 1, title: 'Eletrônicos' };
    const games: Category = { id: 2, title: 'Video Game' };

    const products: Product[] = [
      { id: 1, name: 'Smartphone', price: 2000, category: electronics },
      { id: 2, name: 'Notebook', price: 4500, category: electronics },
      { id: 3, name: 'Video Game', price: 3280, category: games },
    ];

    const cart = reactive(new Cart());

    const addToCart = (product: Product) => cart.addItem(product);
    const removeFromCart = (productId: number) => cart.removeItem(productId);
    const removeOneFromCart = (productId: number) => cart.removeOne(productId);

    return { products, cart, addToCart, removeFromCart, removeOneFromCart };
  }
});
</script>