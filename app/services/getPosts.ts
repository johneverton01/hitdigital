import { PostSchema } from "~/types/Post";

export class GetPosts {
  async execute() {
    const { data, status, error, refresh, clear } = await useFetch(`${import.meta.env.VITE_API_URL}/posts`);
    if (error.value) {
      console.error('Error fetching posts:', error.value);
      return [];
    }
    return PostSchema.array().parse(data.value) || [];

  }
}