<template>
  <div id="app">
    <h1>Loja de Eletrônicos e Games</h1>

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

// IMPORT DAS IMAGENS NO TOPO
import smartphoneImg from './assets/smartphone.jpg';
import notebookImg from './assets/notebook.jpg';
import videogameImg from './assets/videogame.jpg';

export default defineComponent({
  name: 'App',
  components: { ProductCard },
  setup() {
    const electronics: Category = { id: 1, title: 'Eletrônicos' };
    const games: Category = { id: 2, title: 'Video Game' };

    const products: Product[] = [
      { id: 1, name: 'iPhone 17 Pro Max', price: 12499, category: electronics, image: smartphoneImg },
      { id: 2, name: 'Notebook VAIO FE16', price: 6250, category: electronics, image: notebookImg },
      { id: 3, name: 'Playstation 5', price: 3999, category: games, image: videogameImg }
    ];

    const cart = reactive(new Cart());

    const addToCart = (product: Product) => cart.addItem(product);
    const removeFromCart = (productId: number) => cart.removeItem(productId);
    const removeOneFromCart = (productId: number) => cart.removeOne(productId);

    return { products, cart, addToCart, removeFromCart, removeOneFromCart };
  }
});
</script>