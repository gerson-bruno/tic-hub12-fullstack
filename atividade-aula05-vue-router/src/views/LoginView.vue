<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-900 p-4">
    <Card class="w-full max-w-md shadow-2xl border border-white/10 bg-slate-800 text-white">
      <template #title>
        <h1 class="text-center text-2xl font-bold text-white">Login ReabilitaSys</h1>
      </template>
      <template #content>
        <form @submit.prevent="handleLogin" class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label>E-mail</label>
            <InputText v-model="state.email" :class="{'p-invalid': v$.email.$error}" placeholder="user@test.com" />
            <small v-if="v$.email.$error" class="text-red-400">E-mail inválido.</small>
          </div>
          <div class="flex flex-col gap-2">
            <label>Senha</label>
            <Password v-model="state.password" :feedback="false" toggleMask placeholder="123456" />
            <small v-if="v$.password.$error" class="text-red-400">Senha obrigatória.</small>
          </div>
          <Button type="submit" label="Entrar" :loading="authStore.loading" class="mt-4" />
        </form>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

// Imports de componentes do PrimeVue
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'

const authStore = useAuthStore()
const router = useRouter()
const toast = useToast()

const state = reactive({ email: '', password: '' })
const rules = { email: { required, email }, password: { required } }
const v$ = useVuelidate(rules, state)

const handleLogin = async () => {
  const isValid = await v$.value.$validate()
  if (!isValid) return

  try {
    await authStore.login(state)
    toast.add({ severity: 'success', summary: 'Sucesso', detail: 'Bem-vindo!', life: 3000 })
    router.push('/home')
  } catch (err) {
    toast.add({ severity: 'error', summary: 'Erro', detail: err, life: 3000 })
  }
}
</script>