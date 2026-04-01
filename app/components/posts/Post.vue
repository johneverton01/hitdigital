<script setup lang="ts">
import { type Post } from "~/types/Post";
const { post } = defineProps<{ post: Post }>();
</script>
<template>
  <div class="border border-gray-300 rounded p-4 w-92 bg-white text-gray-800">
    <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <NuxtLink
      :to="`/posts/${post.id}`"
      class="text-blue-500 hover:underline mt-2 inline-block hover:cursor-pointer"
    >
      Ler mais
    </NuxtLink>
  </div>
</template>
