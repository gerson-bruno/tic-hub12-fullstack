import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura'; 
import ToastService from 'primevue/toastservice';
import router from './router';
import App from './App.vue';

import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import Toast from 'primevue/toast';

import 'primeicons/primeicons.css';
import './index.css'; 

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ToastService);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.component('Card', Card);
app.component('InputText', InputText);
app.component('Password', Password);
app.component('Button', Button);
app.component('Toast', Toast);

app.mount('#app');