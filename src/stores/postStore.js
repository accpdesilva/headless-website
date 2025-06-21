import { defineStore } from 'pinia';
import { getPosts } from '../services/api';

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [],
    loading: false,
  }),
  actions: {
    async fetchPosts() {
      if (this.posts.length) return;
      this.loading = true;
      try {
        const res = await getPosts();
        this.posts = res.data;
      } catch (e) {
        console.error('Error fetching posts:', e);
      } finally {
        this.loading = false;
      }
    },
  },
});
