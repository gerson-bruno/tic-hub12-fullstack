<template>
  <div class="product-card">
    <h3>{{ product.name }}</h3>
    <p>Categoria: {{ product.category.title }}</p>
    <p>Preço: R$ {{ product.price }}</p>
    <button @click="add">Adicionar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { type Product } from '../models/Product';

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: { type: Object as PropType<Product>, required: true }
  },
  emits: ['add-to-cart'],
  methods: {
    add() {
      this.$emit('add-to-cart', this.product);
    }
  }
});
</script>

