import { defineStore } from 'pinia';


interface rootState {
  state : boolean
}

export const useLoadingStore = defineStore({
    id : 'loading',
    state: () => ({
        state: true
    } as rootState),
    getters: {
    },
    actions: {
        loadingEnd(){
            this.state = false
        }
    },
})
  