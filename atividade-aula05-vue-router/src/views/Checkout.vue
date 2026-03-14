<template>
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6 text-white">Checkout</h1>

    <Card v-if="cart.length === 0" class="text-center p-6">
      Seu carrinho está vazio.
    </Card>

    <div v-else>
      <ListBox :options="cart" class="w-full mb-4">
        <template #option="slotProps">
          <div class="flex justify-between items-center w-full">
            <div>
              <!-- Nome do item -->
              <p class="font-semibold" :style="{ color: '#112632' }">
                {{ slotProps.option.name }}
              </p>
              <!-- Preço x quantidade = total -->
              <p class="text-sm" :style="{ color: '#4B8ABF' }">
                R$ {{ slotProps.option.price }} x {{ slotProps.option.quantity }} = R$ {{ (slotProps.option.price * slotProps.option.quantity).toFixed(2) }}
              </p>
            </div>
          </div>
        </template>
      </ListBox>

      <p class="text-xl font-bold text-right mb-4 text-white">
        Total: R$ {{ total }}
      </p>

      <Button
        label="Confirmar Compra"
        icon="pi pi-check"
        :style="{ backgroundColor: '#1A3B4E', borderColor: '#1A3B4E', color: 'white' }"
        @click="completePurchase"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { cart } from "@/store/cart"
import { computed } from "vue"

export default {
  setup() {
    const total = computed(() =>
      cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
    )

    const completePurchase = () => {
      alert(`Compra finalizada! Total: R$ ${total.value.toFixed(2)}`)
      cart.value = []
    }

    return { cart, total, completePurchase }
  }
}
</script>