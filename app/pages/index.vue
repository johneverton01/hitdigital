<script setup lang="ts">
import Post from "~/components/posts/Post.vue";
import { usePosts } from "~/composables/usePosts";

const { posts, fetchPosts, loading, error } = usePosts();

await fetchPosts();

useHead({ 
  title: "Lista de Posts",
  meta: [{ name: "description", content: "Listagem de posts do blog" }]
});

</script>
<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">Lista de posts</h1>
    <div class="font-semibold text-center" v-if="loading">Carregando...</div>
    <div v-else-if="error" class="text-red-500 text-center">
      Erro ao carregar os posts: {{ error }}
    </div>
    <div v-else-if="posts.length === 0" class="text-gray-500 text-center">
      Nenhum post encontrado.
    </div>
    <div v-else class="flex flex-wrap gap-4">
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>
