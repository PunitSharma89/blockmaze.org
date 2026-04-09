import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { sanityFetch } from "@/lib/sanity";
import { blogBySlugQuery, blogSlugsQuery } from "@/lib/queries";

export const revalidate = 60;

interface SanityBlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  body?: import("@portabletext/react").PortableTextBlock[];
  rawHtml?: string;
  featuredImage?: {
    asset?: { url: string };
    alt?: string;
  };
  category?: {
    title: string;
    slug: { current: string };
  };
  author?: {
    name: string;
    bio?: string;
    image?: { asset?: { url: string } };
  };
  publishedAt?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: { current: string } }[]>(blogSlugsQuery);
  return (slugs ?? []).map((s) => ({ slug: s.slug.current }));
}

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await sanityFetch<SanityBlogPost>(blogBySlugQuery, { slug });
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
  };
}

const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-gray-dark mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-gray-dark mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-gray-dark mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-gray-dark mt-6 mb-3">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-gray-DEFAULT leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-6 italic text-gray-DEFAULT my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside text-gray-DEFAULT mb-4 space-y-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside text-gray-DEFAULT mb-4 space-y-2">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-dark">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) =>
      value?.asset?.url ? (
        <div className="my-8 rounded-xl overflow-hidden">
          <Image
            src={value.asset.url}
            alt={value.alt || ""}
            width={800}
            height={500}
            className="w-full object-cover"
          />
          {value.caption && (
            <p className="text-center text-sm text-gray-light mt-2">
              {value.caption}
            </p>
          )}
        </div>
      ) : null,
  },
};

export default async function BlogPostPage(props: { params: Params }) {
  const { slug } = await props.params;

  const post = await sanityFetch<SanityBlogPost>(blogBySlugQuery, { slug });

  if (!post) notFound();

  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <>
      <Container>
        <Breadcrumb
          items={[{ label: "Blogs", href: "/blogs" }, { label: post.title }]}
        />
      </Container>

      <article className="section-padding">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Category + Date */}
            <div className="flex items-center gap-4 mb-4">
              {post.category && (
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                  {post.category.title}
                </span>
              )}
              {publishedDate && (
                <span className="text-gray-light text-sm">{publishedDate}</span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-gray-dark mb-6">{post.title}</h1>

            {/* Featured Image */}
            {post.featuredImage?.asset?.url && (
              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                <Image
                  src={post.featuredImage.asset.url}
                  alt={post.featuredImage.alt || post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Body — rawHtml takes priority, then PortableText, then excerpt */}
            {post.rawHtml ? (
              <div
                className="prose-content"
                dangerouslySetInnerHTML={{ __html: post.rawHtml }}
              />
            ) : post.body && post.body.length > 0 ? (
              <div className="prose-content">
                <PortableText
                  value={post.body}
                  components={portableTextComponents}
                />
              </div>
            ) : post.excerpt ? (
              <p className="text-gray-DEFAULT leading-relaxed text-lg">
                {post.excerpt}
              </p>
            ) : null}

            {/* Author */}
            {post.author && (
              <div className="mt-12 pt-8 border-t border-gray-200 flex items-center gap-4">
                {post.author.image?.asset?.url && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={post.author.image.asset.url}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-dark">
                    {post.author.name}
                  </p>
                  {post.author.bio && (
                    <p className="text-sm text-gray-DEFAULT">{post.author.bio}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </Container>
      </article>
    </>
  );
}
