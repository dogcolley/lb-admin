import { defineStore } from 'pinia';


interface rootState {
  test : any
}

export const useTestStore = defineStore({
    id : 'test',
    state: () => ({
      test: 'testing pinia store',
    } as rootState),
    getters: {
      doubleCount: (state:any) => state.user,
    },
    actions: {
      save(user?: any) {
        this.user = user
      },
    },
})
  