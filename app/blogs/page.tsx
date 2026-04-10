import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/ui/BlogCard";
import BlogGrid from "@/components/ui/BlogGrid";
import { sanityFetch } from "@/lib/sanity";
import { allBlogsQuery } from "@/lib/queries";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Explore published insights across governance, infrastructure, and real-world asset systems.",
};

interface SanityBlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  featuredImage?: {
    asset?: { url: string };
    alt?: string;
  };
  category?: {
    title: string;
    slug: { current: string };
  };
  publishedAt?: string;
}

export default async function BlogsPage() {
  let posts: SanityBlogPost[] = [];

  const result = await sanityFetch<SanityBlogPost[]>(allBlogsQuery);
  posts = result ?? [];

  return (
    <>
      <Container>
        <Breadcrumb items={[{ label: "Blogs" }]} />
      </Container>
      <section className="section-padding">
        <Container>
          <SectionHeading
            heading="Latest Blogs & Research"
            subtext="Explore published insights across governance, infrastructure, and real-world asset systems."
          />

          {posts.length > 0 ? (
            <BlogGrid>
              {posts.map((post) => (
                <BlogCard
                  key={post._id}
                  title={post.title}
                  slug={post.slug.current}
                  image={post.featuredImage?.asset?.url ?? ""}
                  excerpt={post.excerpt}
                  category={post.category?.title}
                  categorySlug={post.category?.slug?.current}
                  publishedAt={post.publishedAt}
                />
              ))}
            </BlogGrid>
          ) : (
            <div className="text-center text-gray-DEFAULT py-12">
              <p>No blog posts published yet. Check back soon.</p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
