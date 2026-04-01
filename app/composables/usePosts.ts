import type { Post } from "~/types/Post";

export const usePosts = () => {
  const posts = useState<Post[]>("posts", () => []);
  const currentPost = useState<Post | undefined>(
    "currentPost",
    () => undefined,
  );
  const loading = useState<boolean>("posts:loading", () => false);
  const error = useState<string | undefined>("posts:error", () => undefined);

  const { $api } = useNuxtApp();

  const fetchPosts = async () => {
    error.value = undefined;
    try {
      const result = await useAsyncData(
        "posts",
        async () => {
          return await $api.getPosts();
        },
        {
          transform: (data) => {
            posts.value = data;
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
      error.value = "Erro ao carregar os posts";
    } finally {
      loading.value = false;
    }
  };

  const fetchPostById = async (id: number) => {
    error.value = undefined;
    currentPost.value = undefined;
    try {
      const result = await useAsyncData(
        `post-${id}`,
        async () => {
          const cachedPost = posts.value.find((post) => post.id === id);
          if (cachedPost) return cachedPost;

          return await $api.getPostById(id);
        },
        {
          transform: (data) => {
            currentPost.value = data;
            return data;
          },
          getCachedData: (key, nuxtApp) =>
            nuxtApp.payload.data[key] ?? nuxtApp.static.data[key],
        },
      );
      if (result.data.value && !currentPost.value) {
        currentPost.value = result.data.value;
      }
      watch(result.pending, (val) => (loading.value = val), {
        immediate: true,
      });
      return result;
    } catch {
      error.value = "Erro ao carregar o post";
    } finally {
      loading.value = false;
    }
  };

  return {
    posts: readonly(posts),
    currentPost: readonly(currentPost),
    loading: readonly(loading),
    error: readonly(error),
    fetchPosts,
    fetchPostById,
  };
};
