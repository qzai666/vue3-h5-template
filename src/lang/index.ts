import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from '../App.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

import { useSystemStore } from '@/stores/system'

const useSystem = useSystemStore()

import zh_Hans from './zh_Hans.js'
import en from './en.js'

import { Locale } from 'vant'
import enUS from 'vant/lib/locale/lang/en-US'

Locale.use('en-US', enUS)

const i18n = createI18n({
  locale: useSystem.lang,
  legacy: false,
  messages: {
    en,
    zh_Hans
  }
})

export default i18n
