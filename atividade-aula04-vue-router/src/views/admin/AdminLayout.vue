<template>

<div class="flex">

<aside class="w-64 bg-gray-900 text-white p-6">

<h2 class="text-xl mb-6">
Admin Dashboard
</h2>

<nav class="flex flex-col gap-3">

<router-link to="/admin/products">
Produtos
</router-link>

<router-link to="/admin/reports">
Relatórios
</router-link>

</nav>

</aside>

<main class="flex-1 p-6">

<router-view/>

</main>

</div>

</template>