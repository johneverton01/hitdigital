<script setup lang="ts">
  import { GetPosts } from "~/services/getPosts";

  const getPosts = new GetPosts();
  const posts = await getPosts.execute();


</script>
<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">Lista de posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id" class="mb-2">
        <h2 class="text-xl font-semibold">{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>