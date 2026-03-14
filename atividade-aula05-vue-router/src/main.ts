import { createApp } from 'vue'
import App from './App.vue'
import './style.css' 

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import Button from 'primevue/button'
import Card from 'primevue/card'
import ListBox from 'primevue/listbox'
import InputNumber from 'primevue/inputnumber'
import ConfirmDialog from 'primevue/confirmdialog'
import ConfirmationService from 'primevue/confirmationservice'

import 'primeicons/primeicons.css'
import router from './router'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

app.use(ConfirmationService)
app.use(router)

app.component('Button', Button)
app.component('Card', Card)
app.component('ListBox', ListBox)
app.component('InputNumber', InputNumber)
app.component('ConfirmDialog', ConfirmDialog)

app.mount('#app')