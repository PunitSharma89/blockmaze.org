import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/ui/BlogCard";
import BlogGrid from "@/components/ui/BlogGrid";
import { sanityFetch } from "@/lib/sanity";
import { allBlogsQuery } from "@/lib/queries";
import { getLocale } from "@/lib/getLocale";

const CATEGORY_TRANSLATIONS: Record<string, Record<string, string>> = {
  "Layer-0 Protocol": { ar: "بروتوكول Layer-0", es: "Protocolo Layer-0", fr: "Protocole Layer-0" },
  "Blockchain Regulation": { ar: "تنظيم البلوكشين", es: "Regulación Blockchain", fr: "Réglementation Blockchain" },
  "Blockchain Asset Tokenization": { ar: "ترميز أصول البلوكشين", es: "Tokenización de Activos Blockchain", fr: "Tokenisation d'Actifs Blockchain" },
  "Blockchain Governance Framework": { ar: "إطار حوكمة البلوكشين", es: "Marco de Gobernanza Blockchain", fr: "Cadre de Gobernanza Blockchain" },
  "Blockchain Infrastructure": { ar: "بنية البلوكشين التحتية", es: "Infraestructura Blockchain", fr: "Infrastructure Blockchain" },
  "Real-World Asset Tokenization": { ar: "ترميز الأصول الحقيقية", es: "Tokenización de Activos del Mundo Real", fr: "Tokenisation d'Actifs Réels" },
};

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
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "blogs" });

  let result = await sanityFetch<SanityBlogPost[]>(allBlogsQuery, { locale });

  // Fallback to English if no translated posts exist for this locale
  if ((!result || result.length === 0) && locale !== "en") {
    result = await sanityFetch<SanityBlogPost[]>(allBlogsQuery, { locale: "en" });
  }

  posts = result ?? [];

  return (
    <main className="blog-list">
      <Container>
        <Breadcrumb items={[{ label: "Blogs" }]} />
      </Container>
      <section className="section-padding">
        <Container>
          <SectionHeading
            heading={t("heading")}
            subtext={t("subtext")}
            className="blog-head"
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
                  category={post.category?.title ? (CATEGORY_TRANSLATIONS[post.category.title]?.[locale] ?? post.category.title) : undefined}
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
    </main>
  );
}
