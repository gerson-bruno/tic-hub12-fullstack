
<script setup>
import logoMago from '@/assets/logo.png';
</script>

<template>

<div>

<header class="sticky top-0 z-50 w-full px-6 py-4 border-b border-[#1A3B4E]/5 bg-white/50 backdrop-blur-md shadow-sm">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      
      <div class="flex items-center gap-3">
        <div class="flex items-center justify-center w-35 h-35 rounded-xl overflow-hidden">
          <img 
            :src="logoMago" 
            alt="Logo Cafeteria do Mago" 
            class="w-full h-full object-cover"
          />
        </div>
        <div class="flex flex-col">
        <h1 class="text-4xl font-bold tracking-tight text-stone-800">
          Cafeteria do 
          <span class="text-[#1A3B4E]">
            Mago
          </span>
        </h1>
        <h2 class="text-sm  font-large text-[#1A3B4E]/70 tracking-wide mt-[-2px]">
    Trazendo toda a magia ao seu café
  </h2>
  </div>
      </div>

    <nav class="hidden md:flex items-center gap-8">
  <router-link
    to="/"
    class="text-sm font-semibold text-[#1A3B4E] hover:text-[#1A3B4E]/80 transition-colors"
  >
    Início
  </router-link>
  <router-link
    to="/checkout"
    class="text-sm font-semibold text-[#1A3B4E] hover:text-[#1A3B4E]/80 transition-colors"
  >
    Carrinho
  </router-link>
</nav>

    <button class="md:hidden text-stone-800">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
      </svg>
    </button>
  </div>
</header>

<router-view
  :products="products"
  :cart="cart"
  :add-to-cart="addToCart"
/>

</div>

</template>