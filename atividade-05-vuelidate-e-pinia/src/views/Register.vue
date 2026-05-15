<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100 px-4">
    <Card class="w-full max-w-md shadow-lg">
      <template #title>
        <div class="text-center text-2xl font-bold text-gray-800">Criar Conta</div>
      </template>
      <template #content>
        <form @submit.prevent="submit" class="flex flex-col gap-3">
          <div class="flex flex-col gap-1">
            <label class="text-sm font-semibold">Nome Completo</label>
            <InputText v-model="form.name" :class="{'p-invalid': v$.name.$error}" />
            <small class="p-error" v-if="v$.name.$error">O nome é obrigatório</small>
          </div>

          <div class="flex flex-col gap-1">
            <label class="text-sm font-semibold">E-mail</label>
            <InputText v-model="form.email" :class="{'p-invalid': v$.email.$error}" />
            <small class="p-error" v-if="v$.email.$error">Insira um e-mail válido</small>
          </div>

          <div class="flex flex-col gap-1">
            <label class="text-sm font-semibold">Senha (mín. 6 caracteres)</label>
            <Password v-model="form.password" :class="{'p-invalid': v$.password.$error}" toggleMask />
            <small class="p-error" v-if="v$.password.$error">A senha deve ter pelo menos 6 caracteres</small>
          </div>

          <div class="flex flex-col gap-1">
            <label class="text-sm font-semibold">Confirmar Senha</label>
            <Password v-model="form.confirmPassword" :class="{'p-invalid': v$.confirmPassword.$error}" toggleMask :feedback="false" />
            <small class="p-error" v-if="v$.confirmPassword.$error">As senhas não coincidem</small>
          </div>

          <Button type="submit" label="Finalizar Cadastro" icon="pi pi-user-plus" class="mt-4 w-full" :loading="auth.loading" />
          <Button label="Voltar para Login" icon="pi pi-arrow-left" class="p-button-text w-full" @click="router.push('/login')" />
        </form>
      </template>
    </Card>
    <Toast />
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'

const auth = useAuthStore()
const router = useRouter()
const toast = useToast()

const form = reactive({ name: '', email: '', password: '', confirmPassword: '' })

const rules = computed(() => ({
  name: { required },
  email: { required, email },
  password: { required, minLength: minLength(6) },
  confirmPassword: { required, sameAs: sameAs(form.password) }
}))

const v$ = useVuelidate(rules, form)

const submit = async () => {
  const result = await v$.value.$validate()
  if (!result) return

  await auth.register(form.name, form.email, form.password)
  toast.add({ severity: 'success', summary: 'Bem-vindo!', detail: 'Conta criada com sucesso', life: 2000 })
  router.push('/')
}
</script>