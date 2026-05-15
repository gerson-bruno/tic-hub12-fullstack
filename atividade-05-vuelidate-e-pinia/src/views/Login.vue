<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100 px-4">
    <Card class="w-full max-w-md shadow-lg border-0 bg-white/80 backdrop-blur-md">
      <template #title>
        <div class="text-center text-2xl font-bold text-gray-800">Bem-vindo</div>
      </template>
      <template #content>
        <form @submit.prevent="submit" class="flex flex-col gap-4">
          <div class="flex flex-col gap-1">
            <label for="email" class="font-medium text-gray-700">E-mail</label>
            <InputText id="email" v-model="form.email" :class="{'p-invalid': v$.email.$error}" placeholder="seu@email.com" />
            <small class="p-error" v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</small>
          </div>

          <div class="flex flex-col gap-1">
            <label for="password" class="font-medium text-gray-700">Senha</label>
            <Password id="password" v-model="form.password" :class="{'p-invalid': v$.password.$error}" toggleMask :feedback="false" placeholder="Sua senha" />
            <small class="p-error" v-if="v$.password.$error">A senha é obrigatória</small>
          </div>

          <Button type="submit" label="Entrar" icon="pi pi-sign-in" class="mt-2 w-full" :loading="auth.loading" />
          
          <div class="text-center mt-2">
            <router-link to="/register" class="text-sm text-blue-600 hover:underline">Não tem conta? Registre-se</router-link>
          </div>
        </form>
      </template>
    </Card>
    <Toast />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter, useRoute } from 'vue-router'
import { useToast } from 'primevue/usetoast'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

const auth = useAuthStore()
const router = useRouter()
const route = useRoute()
const toast = useToast()

const form = reactive({ email: '', password: '' })
const rules = { email: { required, email }, password: { required } }
const v$ = useVuelidate(rules, form)

const submit = async () => {
  const result = await v$.value.$validate()
  if (!result) return

  try {
    await auth.login(form.email, form.password)
    toast.add({ severity: 'success', summary: 'Sucesso', detail: 'Login realizado!', life: 2000 })
    
    const redirectPath = route.query.redirect || '/'
    router.push(redirectPath)
  } catch (err) {
    toast.add({ severity: 'error', summary: 'Erro', detail: err, life: 3000 })
  }
}
</script>