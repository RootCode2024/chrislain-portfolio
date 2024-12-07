import './assets/main.css'
import './assets/styles/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { createHead } from '@vueuse/head'


const head = createHead();
const app = createApp(App)


app.use(router)
app.use(i18n)
app.use(head);
app.mount('#app')
