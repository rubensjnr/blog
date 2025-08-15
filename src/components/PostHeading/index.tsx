import Link from "next/link";
import React from "react";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};

function PostHeading({ children, url, as: Tag = "h2" }: PostHeadingProps) {
  const headingClass = {
    h1: "text-2xl/tight mb-4 font-extrabold sm:text-4xl",
    h2: "text-1xl/tight font-bold mb-1 sm:text-1xl",
  };

  return (
    <Tag className={headingClass[Tag]}>
      <Link
        title={children as string}
        className="hover:opacity-95"
        href={`${url}`}
      >
        {children}
      </Link>
    </Tag>
  );
}

export default PostHeading;
