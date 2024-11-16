// plugins/store.ts
import type { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// 定义 state 类型
interface State {
  isAuthenticated: boolean
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

// 创建 store
const store = createStore<State>({
  state: {
    isAuthenticated: false
  },
  mutations: {
    setAuthentication(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    }
  },
  actions: {
    // 如果有其他 actions 可以在这里定义
  }
})

// 导出 Nuxt 插件
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store)
})