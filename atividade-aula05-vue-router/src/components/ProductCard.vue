<template>
  <Card class="shadow-lg rounded-xl overflow-hidden w-80 mx-auto">
    <template #header>
      <img 
        :src="product.image"
        class="w-full h-40 object-cover"
      />
    </template>

    <template #title>
      {{ product.name }}
    </template>

    <template #content>
      <p class="text-gray-600 mb-2">
        {{ product.description }}
      </p>
      <p class="text-xl font-bold mb-4">
        R$ {{ product.price }}
      </p>
      <div class="flex justify-center mt-3">
       <Button
          label="Adicionar"
          icon="pi pi-shopping-cart"
          size="small"
          :style="{ backgroundColor: '#1A3B4E', borderColor: '#1A3B4E', color: 'white' }"
          @click="$emit('add', product)"
        />
      </div>
    </template>
  </Card>
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