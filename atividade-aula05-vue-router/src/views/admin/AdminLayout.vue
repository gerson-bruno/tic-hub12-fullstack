<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-900 text-white p-6 flex flex-col">
  <h2 class="text-2xl font-bold mb-8">Admin Dashboard</h2>
  <ul class="flex flex-col gap-4">
    <li>
      <router-link to="/admin/products" class="block p-2 rounded hover:bg-gray-700 transition">Produtos</router-link>
    </li>
    <li>
      <router-link to="/admin/reports" class="block p-2 rounded hover:bg-gray-700 transition">Relatórios</router-link>
    </li>
  </ul>
</aside>

<main class="flex-1 p-8 bg-gray-100 overflow-auto">
  <router-view class="bg-white p-6 rounded shadow-lg" />
</main>
  </div>
</template>