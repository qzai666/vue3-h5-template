import { defineStore, acceptHMRUpdate } from 'pinia'

interface State {
  state_lang: string
}

export const useSystemStore = defineStore({
  id: 'system',
  state: () =>
    <State>{
      state_lang: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en'
    },
  getters: {
    // 系统语言
    lang: (state): string => {
      return state.state_lang
    }
  },
  actions: {
    changeLang(lang: string) {
      this.state_lang = lang
      localStorage.setItem('lang', lang)
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSystemStore, import.meta.hot))
}
