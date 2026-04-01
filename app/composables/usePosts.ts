import type { Post } from '~/types/Post';

export const usePosts = () => {

  const posts = useState<Post[]>('posts', () => []);
  const currentPost = useState<Post | undefined>('currentPost', () => undefined);
  const loading = useState<boolean>('loading', () => false);
  const error = useState<string | undefined>('error', () => undefined);

  const { $api } = useNuxtApp();

  const fetchPosts = async () => {
    return await useAsyncData('posts', async () => {
      loading.value = true;
      return await $api.getPosts();
    }, {
      transform: (data) => {
        posts.value = data;
        loading.value = false;
        return data;
      },
      getCachedData: () => {
        return posts.value.length > 0 ? posts.value : undefined;
      }
    })
  }

  const fetchPostById = async (id: number) => {
    return await useAsyncData(`post-${id}`, async () => {
      const cachedPost = posts.value.find(post => post.id === id);
      if (cachedPost) {
        currentPost.value = cachedPost;
        return cachedPost;
      }

      return await $api.getPostById(id);
    }, {
      transform: (data) => {
        currentPost.value = data;
        return data;
      },
      getCachedData: () => {
        return currentPost.value?.id === id ? currentPost.value : undefined;
      }
    })
  }

  return {
    posts: readonly(posts),
    currentPost: readonly(currentPost),
    loading: readonly(loading),
    error: readonly(error),
    fetchPosts,
    fetchPostById
  }
}