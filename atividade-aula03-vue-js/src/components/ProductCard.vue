<template>
  <div class="card">
    <!-- Imagem do produto -->
    <img :src="product.image" :alt="product.name" class="product-image" />

    <!-- Categoria -->
    <p class="category">{{ product.category.title }}</p>

    <!-- Nome -->
    <h3 class="product-name">{{ product.name }}</h3>

    <!-- Preço -->
    <p class="price">R$ {{ product.price }}</p>

    <!-- Botão -->
    <button @click="$emit('add-to-cart', product)">Adicionar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { type Product } from '../models/Product';

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true
    }
  }
});
</script>
