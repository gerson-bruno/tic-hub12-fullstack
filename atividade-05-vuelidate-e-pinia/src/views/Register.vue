<template>
  <div class="flex justify-center items-center h-screen">
    <Card class="w-96">
      <template #title>Cadastro</template>

      <div class="flex flex-col gap-3">
        <InputText v-model="form.name" placeholder="Nome" :class="{'border-red-500': v$.name.$error}" />
        <small v-if="v$.name.$error" class="text-red-500">Nome obrigatório</small>

        <InputText v-model="form.email" placeholder="Email" :class="{'border-red-500': v$.email.$error}" />
        <small v-if="v$.email.$error" class="text-red-500">Email inválido</small>

        <Password v-model="form.password" toggleMask placeholder="Senha" :class="{'border-red-500': v$.password.$error}" />
        <small v-if="v$.password.$error" class="text-red-500">Mínimo 6 caracteres</small>

        <Password v-model="form.confirmPassword" toggleMask placeholder="Confirmar senha"
                  :class="{'border-red-500': v$.confirmPassword.$error}" />
        <small v-if="v$.confirmPassword.$error" class="text-red-500">Senhas não coincidem</small>

        <Button label="Cadastrar"
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
import { required, email, minLength, sameAs } from '@vuelidate/validators'

const auth = useAuthStore()
const router = useRouter()
const toast = useToast()

const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const rules = {
  name: { required },
  email: { required, email },
  password: { required, minLength: minLength(6) },
  confirmPassword: { required, sameAs: sameAs(() => form.password) }
}

const v$ = useVuelidate(rules, form)

const submit = async () => {
  v$.value.$touch()

  if (v$.value.$invalid) return

  await auth.register(form.name, form.email, form.password)

  toast.add({ severity: 'success', summary: 'Sucesso', detail: 'Conta criada', life: 2000 })

  router.push('/')
}
</script>