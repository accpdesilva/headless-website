<template>
  <div v-if="loading">Loading...</div>
  <div v-else v-for="post in posts" :key="post.id">
    <h2 v-html="post.title.rendered" />
    <div v-html="post.content.rendered" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { usePostStore } from './stores/postStore';

const store = usePostStore();
const { posts, loading } = storeToRefs(store);

onMounted(() => {
  store.fetchPosts();
});
</script>