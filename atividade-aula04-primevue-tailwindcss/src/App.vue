<template>

<div class="container mx-auto p-6">

<h1 class="text-3xl font-bold mb-6">
Cafeteria do Mago! ☕🧙🏼
</h1>
<h2>O seu melhor café é aqui!</h2>

<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

<ProductCard
v-for="product in products"
:key="product.id"
:product="product"
@add="addToCart"
/>

</div>

<h2 class="text-2xl font-bold mt-10 mb-4">
Carrinho
</h2>

<Card v-if="cart.length === 0" class="text-center p-6">
Carrinho vazio
</Card>

<ListBox
v-else
:options="cart"
class="w-full"
>

<template #option="slotProps">

<div class="flex justify-between items-center w-full">

<div>
<p class="font-semibold">
{{ slotProps.option.name }}
</p>

<p class="text-sm text-gray-500">
R$ {{ slotProps.option.price }}
</p>
</div>

<InputNumber
v-model="slotProps.option.quantity"
showButtons
buttonLayout="horizontal"
incrementButtonIcon="pi pi-plus"
decrementButtonIcon="pi pi-minus"
/>

</div>

</template>

</ListBox>

<Button
label="Limpar Carrinho"
icon="pi pi-trash"
severity="danger"
class="mt-4"
@click="confirmClear"
/>

<ConfirmDialog />

</div>

</template>

<script lang="ts">

import ProductCard from './components/ProductCard.vue'
import {type Product, type CartItem } from './types/types'

export default {

components:{
ProductCard
},

data(){

return{

products: [
{
id: 1,
name: "Café Especial Sul de Minas 250g",
description: "Torra média, notas de chocolate e caramelo",
price: 28
},
{
id: 2,
name: "Café Cerrado Mineiro 250g",
description: "Torra média-clara, acidez equilibrada",
price: 32
},
{
id: 3,
name: "Coador Hario V60",
description: "Coador manual para preparo filtrado",
price: 79
},
{
id: 4,
name: "Moedor Manual de Café",
description: "Moagem ajustável para diferentes métodos",
price: 145
}
],

cart: [] as CartItem[]

}

},

methods:{

addToCart(product: Product){

const item = this.cart.find(i => i.id === product.id)

if(item){
item.quantity++
}else{

this.cart.push({
...product,
quantity:1
})

}

},

confirmClear(){

this.$confirm.require({

message:"Deseja remover todos os itens?",
header:"Confirmação",

acceptLabel: "Sim",
rejectLabel: "Não",
accept: () => {
this.cart = []
}

})

}

}

}

</script>