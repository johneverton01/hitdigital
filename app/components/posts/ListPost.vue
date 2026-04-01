<script setup lang="ts">
import { type Post } from "~/types/Post";
const { posts } = defineProps<{
  posts: Post[];
}>();
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">Lista de posts</h1>
    <Post v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>
