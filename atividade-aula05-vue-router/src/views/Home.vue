<template>
  <div class="max-w-6xl mx-auto p-6">
   
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add="addToCart"
      />
    </div>

    <h2 class="text-2xl font-bold mt-12 mb-4">Carrinho</h2>
    <Card v-if="cart.length === 0" class="text-center p-6">
      Carrinho vazio
    </Card>

    <ListBox v-else :options="cart" class="w-full">
      <template #option="slotProps">
        <div class="flex justify-between items-center w-full">
          <div>
            <p class="font-semibold">{{ slotProps.option.name }}</p>
            <p class="text-sm text-gray-500">R$ {{ slotProps.option.price }}</p>
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
import ProductCard from "../components/ProductCard.vue"
import { type Product, type CartItem } from "../types/types"

export default {
  components: { ProductCard },

  data() {
    return {
      products: [
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
      ],
      cart: [] as CartItem[]
    }
  },

  methods: {
    addToCart(product: Product) {
      const item = this.cart.find((i) => i.id === product.id)
      if (item) item.quantity++
      else this.cart.push({ ...product, quantity: 1 })
    },

    confirmClear() {
      this.$confirm.require({
        message: "Deseja remover todos os itens?",
        header: "Confirmação",
        acceptLabel: "Sim",
        rejectLabel: "Não",
        accept: () => (this.cart = [])
      })
    }
  }
}
</script>