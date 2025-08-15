import { PostModel } from "@/models/post/post-module";

export interface PostRepository {
  findAll(): Promise<PostModel[]>;
  findPostById(id: string): Promise<PostModel | undefined>;
}
