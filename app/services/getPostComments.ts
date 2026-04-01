import { CommentSchema } from "~/types/Comments";

export class GetPostComments {
    async execute(postId: number) {
        const { 
            data,
            status,
            error,
            refresh,
            clear 
          } = await useFetch(`${import.meta.env.VITE_API_URL}/posts/${postId}/comments`);
        if (error.value) {
          console.error('Error fetching comments:', error.value);
          return [];
        }
        return CommentSchema.parse(data.value) || [];
    } 
}