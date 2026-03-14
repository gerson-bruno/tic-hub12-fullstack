<template>
  <div class="max-w-[95%] mx-auto mt-6">

    <!-- Produtos -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add="addToCart"
      >
        <template #footer>
          <router-link
            :to="`/product/${product.id}`"
            class="text-blue-600 hover:underline text-sm"
          >
            Ver detalhes
          </router-link>
        </template>
      </ProductCard>
    </div>

    <!-- Carrinho -->
    <h2 class="text-2xl font-bold mt-12 mb-4 text-center text-[#112632]">Carrinho</h2>

    <Card v-if="cart.length === 0" class="text-center p-6 max-w-md mx-auto">
      Carrinho vazio
    </Card>
<ListBox
      v-else
      :options="cart"
      class="w-full max-w-md mx-auto border border-gray-200 rounded-lg overflow-hidden !shadow-none"
      :style="{ backgroundColor: '#fefefe' }"
      :pt="{
        item: { class: '!p-0 !bg-transparent' } 
      }"
    >
      <template #option="slotProps">
        <div
          class="flex justify-between items-center w-full p-3 hover:bg-[#1A3B4E]/5 transition-colors"
        >
          <div>
            <p class="font-semibold text-[#112632]">{{ slotProps.option.name }}</p>
            <p class="text-sm text-[#5f7f9e]">
              R$ {{ slotProps.option.price }} x {{ slotProps.option.quantity }} = R$ {{
                (slotProps.option.price * slotProps.option.quantity).toFixed(2)
              }}
            </p>
          </div>

          <InputNumber
            v-model="slotProps.option.quantity"
            showButtons
            buttonLayout="horizontal"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
            :min="1"
            class="!w-24 !h-8"
            inputClass="!w-8 !p-0 text-center text-xs border-y border-gray-200 focus:!border-[#1A3B4E] focus:!ring-1 focus:!ring-[#1A3B4E]"
            incrementButtonClass="!w-7 !p-0 !bg-[#1A3B4E] !border-[#1A3B4E] !text-white focus:!ring-0"
            decrementButtonClass="!w-7 !p-0 !bg-[#1A3B4E] !border-[#1A3B4E] !text-white focus:!ring-0"
          />
        </div>
      </template>
    </ListBox>

    <div class="flex gap-4 mt-4 justify-center">
      <Button
        label="Limpar Carrinho"
        icon="pi pi-trash"
        severity="danger"
        @click="confirmClear"
      />
      <router-link :to="{ name: 'checkout' }">
        <Button
          label="Finalizar Compra"
          icon="pi pi-check"
          :style="{ backgroundColor: '#1A3B4E', borderColor: '#1A3B4E', color: 'white' }"
          :disabled="cart.length === 0"
        />
      </router-link>
    </div>

    <ConfirmDialog />
  </div>
</template>



<script lang="ts">
import ProductCard from "../components/ProductCard.vue"
import { cart } from "../store/cart"
import { type Product } from "../types/types"
import InputNumber from "primevue/inputnumber"
import Button from "primevue/button"
import ListBox from "primevue/listbox"
import Card from "primevue/card"
import ConfirmDialog from "primevue/confirmdialog"

export default {
  components: { ProductCard, InputNumber, Button, ListBox, Card, ConfirmDialog },
  setup() {
    const products: Product[] = [
      { id: 1, name: "Café Especial Sul de Minas 250g", description: "Café especial de torra média produzido no Sul de Minas. Possui notas naturais de chocolate e caramelo, corpo equilibrado e aroma marcante, ideal para preparo filtrado ou espresso.", price: 28, image: "/src/assets/coffee01.png" },
      { id: 2, name: "Café Cerrado Mineiro 250g", description: "Café cultivado no Cerrado Mineiro com torra média-clara e acidez equilibrada. Apresenta notas suaves de frutas secas e chocolate, com finalização limpa e aroma agradável.", price: 32, image: "/src/assets/coffee02.png" },
      { id: 3, name: "Coador de Café - Hario V60", description: "Coador manual de café para preparo filtrado. O V60 possui 6 ranhuras em espiral e um grande furo central, que juntos aceleram o fluxo de água, evitam o amargor e produzem um café mais limpo, aromático e com acidez destacada.", price: 79, image: "/src/assets/coffee03.png" },
      { id: 4, name: "Moedor Manual de Café - Hario Slim 24g", description: "Moedor manual com ajuste de granulometria para diferentes métodos de preparo. Permite moer o café na hora, preservando aroma, sabor e frescor dos grãos.", price: 145, image: "/src/assets/coffee04.png" }
    ]

    const addToCart = (product: Product) => {
      const item = cart.value.find(i => i.id === product.id)
      if (item) item.quantity++
      else cart.value.push({ ...product, quantity: 1 })
    }

    const confirmClear = () => {
      if (confirm("Deseja remover todos os itens?")) {
        cart.value = []
      }
    }

    return { products, cart, addToCart, confirmClear }
  }
}
</script>