import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import AOS from 'aos'
import '@/assets/main.css'
import 'aos/dist/aos.css'
import { createI18n } from 'vue-i18n'
import { options } from '@/languages'

const app = createApp(App)

const i18n = createI18n(options)

app.use(createPinia())
app.use(i18n)

app.mount('#app')

AOS.init()
