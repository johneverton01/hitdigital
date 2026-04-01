<script setup lang="ts">
import Comments from "~/components/posts/Comments.vue";

const route = useRoute("posts-id");
const { id: postId } = route.params;
const { currentPost, fetchPostById, loading, error } = usePosts();

const currentPostId = Number(postId);

await fetchPostById(currentPostId);

useHead({
  title: () => currentPost.value?.title ?? "Post",
  meta: [
    {
      name: "description",
      content: () => currentPost.value?.body ?? "",
    },
  ],
});
</script>
<template>
  <article class="p-4">
    <div v-if="loading" class="font-semibold text-center">Carregando...</div>
    <div v-else-if="error" class="text-red-500 text-center">
      Erro ao carregar o post: {{ error }}
    </div>
    <div v-else-if="currentPost">
      <h1 class="text-3xl font-bold mb-4">{{ currentPost.title }}</h1>
      <p class="text-gray-400">{{ currentPost.body }}</p>
    </div>
  </article>
  <Comments :post-id="currentPostId" />
</template>
