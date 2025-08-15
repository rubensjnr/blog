import { PostModel } from "@/models/post/post-module";

export interface PostRepository {
  findAllPublic(): Promise<PostModel[]>;
  findPostById(id: string): Promise<PostModel | undefined>;
}
