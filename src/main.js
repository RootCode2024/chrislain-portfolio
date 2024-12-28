import { createHead } from '@vueuse/head'
import './../public/assets/styles/tailwind.css'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './../public/assets/main.css'
import i18n from './i18n'

const head = createHead()
const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(head)

app.mount('#app')

