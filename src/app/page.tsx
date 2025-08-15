import { Suspense } from "react";
import PostsList from "@/components/Posts/PostsList";
import SpinLoader from "@/components/SpinLoader";
import PostFeatured from "@/components/Posts/PostFeatured";

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader className="min-h-screen" />}>
        <PostFeatured />
      </Suspense>
      <Suspense fallback={<SpinLoader className="min-h-screen" />}>
        <PostsList />
      </Suspense>
    </>
  );
}
