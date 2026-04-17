<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-slate-100 text-slate-900">
    <h1 class="text-4xl font-bold">Acesso Liberado!</h1>
    <p class="text-xl mt-2">Bem-vindo, {{ authStore.user?.name }}</p>
    <Button label="Sair" severity="danger" class="mt-8" @click="logout" />
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
import Button from 'primevue/button'

const authStore = useAuthStore()
const router = useRouter()

const logout = () => {
  authStore.logout()
  router.push('/')
}
</script>