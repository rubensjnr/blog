import { PostModel } from "@/models/post/post-module";
import { PostRepository } from "./post-repository";
import { readFile } from "fs/promises";
import { resolve } from "path";

const ROOT_DIR = process.cwd();

const SIMULATE_WAIT_IN_MS = 1;

export class JsonPostRepository implements PostRepository {
  private async simulateWait() {
    if (SIMULATE_WAIT_IN_MS <= 0) return;
    await new Promise((resolve) => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }

  private async readFromDisk(): Promise<PostModel[]> {
    const filePath = resolve(ROOT_DIR, "src", "db", "seed", "posts.json");
    const jsonContent = await readFile(filePath, "utf8");
    const parseJson = JSON.parse(jsonContent);
    const { posts } = parseJson;
    return posts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    await this.simulateWait();
    const posts = await this.readFromDisk();
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAA");
    return posts;
  }
  async findPostById(id: string): Promise<PostModel | undefined> {
    await this.simulateWait();
    const posts = await this.findAllPublic();
    const post = posts.find((item) => item.id === id);
    if (!post) throw new Error("Post não encontrado");
    return post;
  }
}

export const postRepository = new JsonPostRepository();
