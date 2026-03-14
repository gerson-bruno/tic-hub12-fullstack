<template>
  <nav class="w-64 bg-gray-800 text-white flex flex-col h-screen p-4">
    <h2 class="text-xl font-bold mb-6">Admin Dashboard</h2>
    <router-link 
      to="/admin/products" 
      class="mb-3 px-3 py-2 rounded hover:bg-gray-700"
    >
      Produtos
    </router-link>
    <router-link 
      to="/admin/reports" 
      class="mb-3 px-3 py-2 rounded hover:bg-gray-700"
    >
      Relatórios
    </router-link>
  </nav>
</template>