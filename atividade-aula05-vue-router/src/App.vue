<!-- <template>

<div class="max-w-5xl mx-auto py-8">

<h1 class="text-3xl font-bold mb-2 text-center text-amber-900">
Cafeteria do Mago ☕🧙🏼
</h1>


<p class="text-center text-gray-500 mb-10">
O seu melhor café é aqui!
</p>

<div class="grid grid-cols-4 gap-10 justify-items-center">
    <div v-for="product in products" :key="product.id" class="w-full">
    <ProductCard
      :product="product"
      @add="addToCart"
    />
  </div>
</div>

<h2 class="text-2xl font-bold mt-12 mb-4">
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
:min="1"
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
import { type Product, type CartItem } from './types/types'

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
description: "Café especial de torra média produzido no Sul de Minas. Possui notas naturais de chocolate e caramelo, corpo equilibrado e aroma marcante, ideal para preparo filtrado ou espresso.",
price: 28,
image: "./src/assets/coffee01.png"
},
{
id: 2,
name: "Café Cerrado Mineiro 250g",
description: "Café cultivado no Cerrado Mineiro com torra média-clara e acidez equilibrada. Apresenta notas suaves de frutas secas e chocolate, com finalização limpa e aroma agradável.",
price: 32,
image: "./src/assets/coffee02.png"
},
{
id: 3,
name: "Coador de Café - Hario V60",
description: "Coador manual de café para preparo filtrado. O V60 possui 6 ranhuras em espiral e um grande furo central, que juntos aceleram o fluxo de água, evitam o amargor e produzem um café mais limpo, aromático e com acidez destacada.",
price: 79,
image: "./src/assets/coffee03.png"
},
{
id: 4,
name: "Moedor Manual de Café - Hario Slim 24g",
description: "Moedor manual com ajuste de granulometria para diferentes métodos de preparo. Permite moer o café na hora, preservando aroma, sabor e frescor dos grãos.",
price: 145,
image: "./src/assets/coffee04.png"
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

acceptLabel:"Sim",
rejectLabel:"Não",

accept: () => {
this.cart = []
}

})

}

}

}

</script> -->

<script setup>
import logoMago from '@/assets/logo.png';
</script>

<template>

<div>

<header class="sticky top-0 z-50 w-full px-6 py-4 border-b border-[#1A3B4E]/5 bg-white/50 backdrop-blur-md shadow-sm">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      
      <div class="flex items-center gap-3">
        <div class="flex items-center justify-center w-35 h-35 rounded-xl overflow-hidden">
          <img 
            :src="logoMago" 
            alt="Logo Cafeteria do Mago" 
            class="w-full h-full object-cover"
          />
        </div>
        
        <h1 class="text-4xl font-bold tracking-tight text-stone-800">
          Cafeteria do 
          <span class="text-[#1A3B4E]">
            Mago
          </span>
        </h1>
      </div>

    <!-- <nav class="hidden md:flex items-center gap-8">
      <a href="#" class="text-sm font-semibold text-stone-600 hover:text-amber-700 transition-colors">Menu</a>
      <a href="#" class="text-sm font-semibold text-stone-600 hover:text-amber-700 transition-colors">Nossa Magia</a>
      <a href="#" class="text-sm font-semibold text-stone-600 hover:text-amber-700 transition-colors">Grimório</a>
      
      <button class="px-6 py-2 text-sm font-bold rounded-full bg-stone-800 text-amber-50 shadow-md hover:bg-stone-700 transition-all active:scale-95">
        Pedir Agora ☕
      </button>
    </nav> -->

    <button class="md:hidden text-stone-800">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
      </svg>
    </button>
  </div>
</header>
<router-view/>

</div>

</template>