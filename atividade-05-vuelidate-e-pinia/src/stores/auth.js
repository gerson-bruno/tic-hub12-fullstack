import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false
  }),

  actions: {
    async login(email, password) {
      this.loading = true

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === 'teste@email.com' && password === '123456') {
            this.user = { email }
            this.token = 'fake-token'
            this.isAuthenticated = true
            this.loading = false
            resolve()
          } else {
            this.loading = false
            reject('Credenciais inválidas')
          }
        }, 1000)
      })
    },

    async register(name, email, password) {
      this.loading = true

      return new Promise((resolve) => {
        setTimeout(() => {
          this.user = { name, email }
          this.token = 'fake-token'
          this.isAuthenticated = true
          this.loading = false
          resolve()
        }, 1000)
      })
    },

    logout() {
      this.user = null
      this.token = null
      this.isAuthenticated = false
    }
  }
})