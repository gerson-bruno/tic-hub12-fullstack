import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
    loading: false
  }),

  actions: {
    async login(email, password) {
      this.loading = true
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === 'teste@email.com' && password === '123456') {
            this.setSession({ email }, 'fake-token-jwt')
            resolve()
          } else {
            this.loading = false
            reject('Credenciais inválidas (Dica: teste@email.com / 123456)')
          }
        }, 1500)
      })
    },

    async register(name, email, password) {
      this.loading = true
      return new Promise((resolve) => {
        setTimeout(() => {
          this.setSession({ name, email }, 'fake-token-jwt')
          resolve()
        }, 1500)
      })
    },

    setSession(user, token) {
      this.user = user
      this.token = token
      this.isAuthenticated = true
      this.loading = false
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('token', token)
    },

    logout() {
      this.user = null
      this.token = null
      this.isAuthenticated = false
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    }
  }
})