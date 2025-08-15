import PostCoverImage from "../PostCoverImage";
import PostSummary from "../PostSummary";
import { findAllPublicPosts } from "@/lib/post/queries";

async function PostsList() {
  const posts = await findAllPublicPosts();
  return (
    <section className="grid grid-cols-1  gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.slice(1).map((post) => {
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
            <PostSummary
              postHeading="h2"
              title={post.title}
              createdAt={post.createdAt}
              excerpt={post.excerpt}
              slug={post.slug}
            />
          </div>
        );
      })}
    </section>
  );
}

export default PostsList;
