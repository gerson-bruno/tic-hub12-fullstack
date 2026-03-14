<script setup lang="ts">

import { useRoute } from "vue-router"

const route = useRoute()

const id = route.params.id

</script>

<template>

<div class="p-10">

<h1 class="text-3xl font-bold">
Produto {{ id }}
</h1>

<p class="mt-4">
Aqui apareceriam os detalhes do produto.
</p>

</div>

</template>