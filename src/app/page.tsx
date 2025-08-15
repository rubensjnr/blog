import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostsList from "@/components/PostsList";
import SpinLoader from "@/components/SpinLoader";
import { Container } from "@/components/Container";
import PostFeatured from "@/components/PostFeatured";

export default async function HomePage() {
  return (
    <>
      <Container>
        <Header />
        <Suspense fallback={<SpinLoader className="min-h-screen" />}>
          <PostFeatured />
        </Suspense>
        <Suspense fallback={<SpinLoader className="min-h-screen" />}>
          <PostsList />
        </Suspense>
      </Container>
      <Footer />
    </>
  );
}
