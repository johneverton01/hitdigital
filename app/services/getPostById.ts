import { PostSchema } from "~/types/Post";

export class GetPostById {
   async execute(id: number) {
      const { data, status, error, refresh, clear } = await useFetch(`${import.meta.env.VITE_API_URL}/posts/${id}`);
      if (error.value) {
        console.error('Error fetching post:', error.value);
        return undefined;
      }
      return PostSchema.parse(data.value) || undefined;
  
    }
}