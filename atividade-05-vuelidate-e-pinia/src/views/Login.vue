<template>
  <div class="flex justify-center items-center h-screen">
    <Card class="w-96">
      <template #title>Login</template>

      <div class="flex flex-col gap-3">
        <InputText v-model="form.email" placeholder="Email" :class="{'border-red-500': v$.email.$error}" />
        <small class="text-red-500" v-if="v$.email.$error">Email inválido</small>

        <Password v-model="form.password" toggleMask placeholder="Senha" :class="{'border-red-500': v$.password.$error}" />
        <small class="text-red-500" v-if="v$.password.$error">Senha obrigatória</small>

        <Button label="Entrar"
                :loading="auth.loading"
                @click="submit" />
      </div>
    </Card>

    <Toast />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'

import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

const auth = useAuthStore()
const router = useRouter()
const toast = useToast()

const form = reactive({
  email: '',
  password: ''
})

const rules = {
  email: { required, email },
  password: { required }
}

const v$ = useVuelidate(rules, form)

const submit = async () => {
  v$.value.$touch()

  if (v$.value.$invalid) return

  try {
    await auth.login(form.email, form.password)

    toast.add({ severity: 'success', summary: 'Sucesso', detail: 'Login realizado', life: 2000 })

    router.push('/')
  } catch (err) {
    toast.add({ severity: 'error', summary: 'Erro', detail: err, life: 2000 })
  }
}
</script>