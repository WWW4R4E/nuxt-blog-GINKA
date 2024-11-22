// plugins/pinia.ts
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from '@/app.vue';
import { useMainStore } from '~/stores/main';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

// 初始化 store
const mainStore = useMainStore();
mainStore.setAuthentication(false); // 初始化认证状态
mainStore.setPosts([]); // 初始化 posts

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(pinia);
});