<template>
  <div class="product-card">
    <h3>{{ product.name }}</h3>
    <p>Categoria: {{ product.category.title }}</p>
    <p>Preço: R$ {{ product.price }}</p>
    <button @click="add">Adicionar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Product } from '../models/Product';

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

<style scoped>
.product-card {
  border: 1px solid #ccc;
  padding: 8px;
  margin: 5px;
}
</style>