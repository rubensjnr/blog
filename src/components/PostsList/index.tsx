import { postRepository } from "@/repositories/post/json-post-repository";
import PostCoverImage from "../PostCoverImage";
import PostHeading from "../PostHeading";
import { formateDateTime } from "@/utils/date-and-time";

async function PostsList() {
  const posts = await postRepository.findAll();
  return (
    <section className="grid grid-cols-1  gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        return (
          <div className="flex flex-col group gap-4" key={post.id}>
            <PostCoverImage
              linkProps={{
                href: `/post/${post.slug}`,
              }}
              imageProps={{
                src: post.coverImageUrl,
                alt: post.title,
                width: 1200,
                height: 720,
                title: post.title,
              }}
            />
            <div className="flex flex-col  justify-center gap-1 ">
              <time
                dateTime={post.createdAt}
                className="
                 text-slate-500
                   text-sm/tight"
              >
                {formateDateTime(post.createdAt)}
              </time>
              <PostHeading as="h2" url={`/post/${post.slug}`}>
                {post.title}
              </PostHeading>
              <p className="text-gray-600">{`${post.excerpt}`}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default PostsList;
