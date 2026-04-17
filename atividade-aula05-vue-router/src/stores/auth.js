import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
    loading: false
  }),
  actions: {
    async login(credentials) {
      this.loading = true
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (credentials.email === "user@test.com" && credentials.password === "123456") {
            this.user = { name: 'Gerson Bruno' }
            this.isAuthenticated = true
            resolve()
          } else {
            reject("E-mail ou senha incorretos!")
          }
          this.loading = false
        }, 1500)
      })
    },
    logout() {
      this.user = null
      this.isAuthenticated = false
    }
  }
})