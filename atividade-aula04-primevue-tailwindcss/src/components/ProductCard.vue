<template>

<Card class="shadow-lg rounded-xl overflow-hidden w-60">
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

<p class="text-gray-600 mb-3">
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