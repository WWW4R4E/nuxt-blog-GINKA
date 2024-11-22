// stores/main.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMainStore = defineStore('main', {
  state: () => ({
    isAuthenticated: ref(false),
    posts: ref([]) as Ref<Post[]>
  }),
  actions: {
    setAuthentication(isAuthenticated: boolean) {
      this.isAuthenticated = isAuthenticated;
    },
    setPosts(posts: Post[]) {
      this.posts = posts;
    }
  },
  getters: {
    getRandomPostId(): number {
      const minPostId = 1;
      const maxPostId = this.posts.length;
      return Math.floor(Math.random() * (maxPostId - minPostId + 1)) + minPostId;
    }
  }
});

interface Post {
  id: number;
  title: string;
  summary: string;
}