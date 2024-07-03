import './assets/style/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './lang'

import { Button, Toast, Field, Popover } from 'vant'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(Button)
app.use(Toast)
app.use(Field)
app.use(Popover)

app.mount('#app')