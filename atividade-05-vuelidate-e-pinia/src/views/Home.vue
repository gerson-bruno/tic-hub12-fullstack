<template>
  <div class="p-5">
    <h1 class="text-xl mb-4">Home</h1>
    <Button label="Logout" @click="logout" />
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const logout = () => {
  auth.logout()
  router.push('/login')
}
</script>