<template>
  <div class="max-w-4xl mx-auto p-6">
    <div v-if="product">
      <!-- Card branco arredondado com sombra -->
      <div class="bg-white rounded-xl shadow-lg p-6">
        <div class="flex flex-col md:flex-row gap-6">
          <!-- Imagem -->
          <img
            :src="product.image"
            alt="product.name"
            class="w-full md:w-1/2 h-80 object-cover rounded-lg"
          />

          <!-- Informações -->
          <div class="flex-1 flex flex-col justify-between">
            <div>
              <h1 class="text-3xl font-bold mb-4 text-[#112632]">{{ product.name }}</h1>
              <p class="text-gray-700 mb-4">{{ product.description }}</p>
              <p class="text-2xl font-semibold mb-4 text-[#112632]">R$ {{ product.price }}</p>
            </div>

            <div class="flex gap-4">
              <Button
                label="Adicionar ao Carrinho"
                icon="pi pi-shopping-cart"
                :style="{ backgroundColor: '#1A3B4E', borderColor: '#1A3B4E', color: 'white' }"
                @click="addToCart(product)"
              />
              <router-link to="/">
                <Button 
                  label="Voltar" 
                  :style="{ backgroundColor: '#748690', borderColor: '#748690', color: 'white' }"
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center text-gray-500">
      Produto não encontrado.
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router"
import { cart } from "@/store/cart"
import { ref } from "vue"
import type { Product } from "@/types/types"
import Button from "primevue/button"

// Array de produtos (pode importar do Home ou criar um arquivo separado)
const products: Product[] = [
  {
    id: 1,
    name: "Café Especial Sul de Minas 250g",
    description:
      "Café especial de torra média produzido no Sul de Minas. Possui notas naturais de chocolate e caramelo, corpo equilibrado e aroma marcante, ideal para preparo filtrado ou espresso.",
    price: 28,
    image: "/src/assets/coffee01.png"
  },
  {
    id: 2,
    name: "Café Cerrado Mineiro 250g",
    description:
      "Café cultivado no Cerrado Mineiro com torra média-clara e acidez equilibrada. Apresenta notas suaves de frutas secas e chocolate, com finalização limpa e aroma agradável.",
    price: 32,
    image: "/src/assets/coffee02.png"
  },
  {
    id: 3,
    name: "Coador de Café - Hario V60",
    description:
      "Coador manual de café para preparo filtrado. O V60 possui 6 ranhuras em espiral e um grande furo central, que juntos aceleram o fluxo de água, evitam o amargor e produzem um café mais limpo, aromático e com acidez destacada.",
    price: 79,
    image: "/src/assets/coffee03.png"
  },
  {
    id: 4,
    name: "Moedor Manual de Café - Hario Slim 24g",
    description:
      "Moedor manual com ajuste de granulometria para diferentes métodos de preparo. Permite moer o café na hora, preservando aroma, sabor e frescor dos grãos.",
    price: 145,
    image: "/src/assets/coffee04.png"
  }
]

// Pegando o id da rota
const route = useRoute()
const productId = Number(route.params.id)
const product = ref(products.find((p) => p.id === productId))

// Função para adicionar ao carrinho
function addToCart(product: Product) {
  const item = cart.value.find((i) => i.id === product.id)
  if (item) item.quantity++
  else cart.value.push({ ...product, quantity: 1 })
}
</script>