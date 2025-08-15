import PostCoverImage from "../PostCoverImage";
import PostHeading from "../PostHeading";

function PostFeatured() {
  return (
    <section className="grid grid-cols-1 gap-6 mb-16  sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{
          href: "#",
        }}
        imageProps={{
          src: "/images/bryen_0.png",
          alt: "Post Principal",
          width: 1200,
          height: 720,
          priority: true,
        }}
      />

      <div className="flex flex-col  justify-center gap-1 ">
        <time dateTime="2025-08-15" className="text-slate-500 text-sm/tight">
          15/08/2025 10:00
        </time>
        <PostHeading as="h1" url="#">
          Ldeleniti earum a fugit
        </PostHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          deleniti earum a fugit incidunt rerum tempore aut praesentium
          explicabo non? Numquam odit ea ullam quae sapiente mollitia est veniam
          dolore?
        </p>
      </div>
    </section>
  );
}

export default PostFeatured;
