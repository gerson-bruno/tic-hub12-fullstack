<template>
  <Card class="shadow-lg rounded-xl overflow-hidden w-60">
    <!-- Imagem do produto -->
    <template #header>
      <img 
        :src="product.image"
        class="w-full h-40 object-cover"
        alt="Imagem do produto"
      />
    </template>

    <!-- Título -->
    <template #title>
      {{ product.name }}
    </template>

    <!-- Conteúdo -->
    <template #content>
      <p class="text-gray-600 mb-3">
        {{ product.description }}
      </p>

      <p class="text-xl font-bold mb-4">
        R$ {{ product.price }}
      </p>

      <!-- Botão adicionar -->
      <div class="flex justify-center mt-3">
        <Button
          label="Adicionar"
          icon="pi pi-shopping-cart"
          size="small"
          class="bg-amber-900 hover:bg-amber-800 text-white border-amber-900"
          @click="$emit('add', product)"
        />
      </div>
    </template>
  </Card>


<router-link :to="`/product/${product.id}`">
<Button
label="Ver Produto"
icon="pi pi-search"
/>
</router-link>

</template>

<script lang="ts">
import type { Product } from "../types/types"

export default {
  props: {
    product: {
      type: Object as () => Product,
      required: true
    }
  },
  emits: ["add"]
}
</script>

