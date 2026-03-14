<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Lista de Produtos</h1>
      <DataTable :value="products" class="shadow-lg rounded overflow-hidden">
    <Column field="id" header="ID" style="width: 5%"></Column>
    <Column field="name" header="Nome"></Column>
    <Column field="price" header="Preço (R$)" :body="priceTemplate"></Column>
    <Column field="description" header="Descrição"></Column>
  </DataTable>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import DataTable from "primevue/datatable"
import Column from "primevue/column"
import type { Product } from "../../types/types"

export default {
  components: { DataTable, Column },
  data() {
    return {
      products: [
        { id: 1, name: "Café Especial Sul de Minas 250g", description: "Café especial de torra média produzido no Sul de Minas. Possui notas naturais de chocolate e caramelo, corpo equilibrado e aroma marcante, ideal para preparo filtrado ou espresso.", price: 28 },
        { id: 2, name: "Café Cerrado Mineiro 250g", description: "Café cultivado no Cerrado Mineiro com torra média-clara e acidez equilibrada. Apresenta notas suaves de frutas secas e chocolate, com finalização limpa e aroma agradável.", price: 32 },
        { id: 3, name: "Coador de Café - Hario V60", description: "Coador manual de café para preparo filtrado. O V60 possui 6 ranhuras em espiral e um grande furo central, que juntos aceleram o fluxo de água, evitam o amargor e produzem um café mais limpo, aromático e com acidez destacada.", price: 79 },
        { id: 4, name: "Moedor Manual de Café - Hario Slim 24g", description: "Moedor manual com ajuste de granulometria para diferentes métodos de preparo. Permite moer o café na hora, preservando aroma, sabor e frescor dos grãos.", price: 145 }
      ] as Product[]
    }
  },
  methods: {
    priceTemplate(row: Product) {
      return `R$ ${row.price}`;
    }
  }
}
</script>