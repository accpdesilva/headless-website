import { defineStore } from 'pinia';
import axios from 'axios';

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
        const res = await axios.get('http://localhost/booster/wp-json/wp/v2/posts?_embed');
        const rawPosts = res.data.slice(0, 3);

        this.posts = rawPosts.map(post => {
          const media = post._embedded?.['wp:featuredmedia']?.[0];
          return {
            ...post,
            featured_media_url: media?.source_url || 'https://placehold.co/80x80',
          };
        });
      } catch (e) {
        console.error('Error fetching posts:', e);
      } finally {
        this.loading = false;
      }
    },
  },
});