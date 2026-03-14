<template>

<div>

<h2 class="text-2xl font-bold mb-6">
Gestão de Produtos
</h2>

<DataTable :value="products">

<Column field="name" header="Produto"></Column>

<Column field="price" header="Preço"></Column>

</DataTable>

</div>

</template>

<script lang="ts">

export default {

data(){

return{

products:[
{name:"Café Sul de Minas",price:28},
{name:"Café Cerrado",price:32}
]

}

}

}

</script>