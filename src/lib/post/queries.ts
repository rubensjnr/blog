import { postRepository } from "@/repositories/post/json-post-repository";
import { cache } from "react";

export const findAllPublicPosts = cache(async () => {
  return await postRepository.findAllPublic();
});
