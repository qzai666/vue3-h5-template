import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCounterStore = defineStore({
  id: 'count',
  state: () => ({
    state_count: 0 as number
  }),
  getters: {
    count: (state): number => {
      return state.state_count
    }
  },
  actions: {
    addCount() {
      this.state_count++
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}
