import PostCoverImage from "../PostCoverImage";
import PostSummary from "../PostSummary";
import { findAllPublicPosts } from "@/lib/post/queries";

async function PostFeatured() {
  const posts = await findAllPublicPosts();
  const post = posts[0];
  return (
    <section className="grid grid-cols-1 gap-6 mb-16  sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{
          href: `/post/${post.slug}`,
        }}
        imageProps={{
          src: post.coverImageUrl,
          alt: post.title,
          width: 1200,
          height: 720,
          priority: true,
        }}
      />

      <PostSummary
        postHeading="h1"
        title={post.title}
        createdAt={post.createdAt}
        excerpt={post.excerpt}
        slug={post.slug}
      />
    </section>
  );
}

export default PostFeatured;
