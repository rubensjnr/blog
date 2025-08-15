import { formateDateTime } from "@/utils/date-and-time";
import React from "react";
import PostHeading from "../PostHeading";

type PostSummaryProps = {
  postHeading?: "h1" | "h2";
  title: string;
  createdAt: string;
  slug: string;
  excerpt: string;
};

function PostSummary({
  postHeading,
  title,
  createdAt,
  slug,
  excerpt,
}: PostSummaryProps) {
  return (
    <div className="flex flex-col  justify-center gap-1 ">
      <time
        dateTime={createdAt}
        className="
       text-slate-500
         text-sm/tight"
      >
        {formateDateTime(createdAt)}
      </time>
      <PostHeading as={postHeading} url={`/post/${slug}`}>
        {title}
      </PostHeading>
      <p className="text-gray-600">{`${excerpt}`}</p>
    </div>
  );
}

export default PostSummary;
