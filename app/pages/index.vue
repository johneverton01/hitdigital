<script setup lang="ts">
  import Post from '~/components/posts/Post.vue';
import { usePosts } from "~/composables/usePosts";

  const { posts, fetchPosts } = usePosts();

  await fetchPosts();

</script>
<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">Lista de posts</h1>
    <div class="flex flex-wrap gap-4">
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>