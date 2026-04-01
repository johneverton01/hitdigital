import type { Post } from "~/types/Post";
import type { createApi } from ".";

export class PostsService {
  private api: ReturnType<typeof createApi>;

  constructor(api: ReturnType<typeof createApi>) {
    this.api = api;
  }

  async getPosts(): Promise<Post[]> {
    return this.api.getPosts();
  }

  async getPostById(id: number): Promise<Post | undefined> {
    return this.api.getPostById(id);
  }

  async getPostComments(postId: number) {
    return this.api.getPostComments(postId);
  }
}