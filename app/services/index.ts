import { CommentSchema } from "~/types/Comments";
import { PostSchema } from "~/types/Post";

export const createApi = (fetcher: ReturnType<typeof $fetch.create>) => {
  return {
    getPosts: async () => {
      try {
        const data = await fetcher("/posts");
        return PostSchema.array().parse(data);
      } catch (error) {
        throw new Error("Error fetching posts: " + error);
      }
    },
    getPostById: async (id: number) => {
      try {
        const data = await fetcher(`/posts/${id}`);
        return PostSchema.parse(data) || undefined;
      } catch (error) {
        throw new Error("Error fetching post: " + error);
      }
    },
    getPostComments: async (postId: number) => {
      try {
        const data = await fetcher(`/posts/${postId}/comments`);
        return CommentSchema.array().parse(data) || [];
      } catch (error) {
        throw new Error("Error fetching comments: " + error);
      }
    },
  };
};
