import type { Comment } from "~/types/Comments";

export const useComments = () => {
  const comments = useState<Comment[]>("comments", () => []);
  const loading = useState<boolean>("comments:loading", () => false);
  const error = useState<string | undefined>("comments:error", () => undefined);

  const { $api } = useNuxtApp();

  const fetchComments = async (postId: number) => {
    error.value = undefined;
    try {
      const result =  await useAsyncData(
        `comments-${postId}`,
        async () => {
          return await $api.getPostComments(postId);
        },
        {
          transform: (data) => {
            comments.value = data;
            return data;
          },
          getCachedData: (key, nuxtApp) =>
            nuxtApp.payload.data[key] ?? nuxtApp.static.data[key],
        },
      );
      watch(result.pending, (val) => (loading.value = val), {
        immediate: true,
      });
      return result;
    } catch {
      error.value = "Erro ao carregar os comentários";
    } finally {
      loading.value = false;
    }
  };

  return {
    comments: readonly(comments),
    loading: readonly(loading),
    error: readonly(error),
    fetchComments,
  };
};
