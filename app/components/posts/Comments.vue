<script setup lang="ts">
const { postId } = defineProps<{
  postId: number;
}>();

const { comments, fetchComments, loading, error } = useComments();

watch(
  () => postId,
  (id) => {
    fetchComments(id);
  },
  { immediate: true },
);
</script>
<template>
  <div>
    <div>Comentarios</div>
    <div v-if="loading" class="text-center">Carregando comentários...</div>
    <div v-else-if="error" class="text-red-500 text-center">{{ error }}</div>
    <div v-else>
      <div v-for="comment in comments" :key="comment.id" class="my-4">
        <div class="p-4 border border-gray-100 rounded">
          {{ comment.name }} - {{ comment.email }}
          <div>
            {{ comment.body }}
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
