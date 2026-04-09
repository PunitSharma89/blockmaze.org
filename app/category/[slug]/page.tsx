import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/ui/BlogCard";
import BlogGrid from "@/components/ui/BlogGrid";

const categories: Record<
  string,
  {
    title: string;
    posts: {
      title: string;
      slug: string;
      image: string;
      category: string;
      categorySlug: string;
      excerpt: string;
    }[];
  }
> = {
  "blockchain-regulation": {
    title: "Blockchain Regulation",
    posts: [
      {
        title: "Why Smart Contracts Cannot Represent Legal Ownership Alone",
        slug: "why-smart-contracts-cannot-represent-legal-ownership-alone",
        image: "/images/Code-Executes-Law-Enforces-400x250.jpg",
        category: "Blockchain Regulation",
        categorySlug: "blockchain-regulation",
        excerpt:
          "A Developing Market Catching Up With Its Legal Framework...",
      },
    ],
  },
  "blockchain-infrastructure": {
    title: "Blockchain Infrastructure",
    posts: [
      {
        title:
          "Why Institutional Capital Requires Verifiable Blockchain Infrastructure",
        slug: "why-institutional-capital-requires-verifiable-blockchain-infrastructure",
        image:
          "/images/Verifiable-Blockchain-for-Institutional-Finance-400x250.jpg",
        category: "Blockchain Infrastructure",
        categorySlug: "blockchain-infrastructure",
        excerpt:
          "Capital markets do not adopt technology because it's \"new.\"...",
      },
    ],
  },
  "blockchain-asset-tokenization": {
    title: "Blockchain Asset Tokenization",
    posts: [
      {
        title:
          "Why Tokenization Infrastructure Must Reflect Legal Ownership Systems",
        slug: "why-tokenization-infrastructure-must-reflect-legal-ownership-systems",
        image: "/images/Real-World-Assets-400x250.webp",
        category: "Blockchain Asset Tokenization",
        categorySlug: "blockchain-asset-tokenization",
        excerpt:
          "The rise of real world asset tokenization as a means of representing ownership rights digitally...",
      },
    ],
  },
};

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const category = categories[slug];
  return {
    title: category?.title || "Category",
    description: `Browse articles in ${category?.title || "this category"}`,
  };
}

export default async function CategoryPage(props: { params: Params }) {
  const { slug } = await props.params;
  const category = categories[slug];

  if (!category) {
    return (
      <Container>
        <div className="section-padding text-center">
          <h1 className="text-gray-dark">Category Not Found</h1>
        </div>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Breadcrumb items={[{ label: category.title }]} />
      </Container>
      <section className="section-padding">
        <Container>
          <SectionHeading heading={category.title} />
          <BlogGrid>
            {category.posts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug}
                image={post.image}
                category={post.category}
                categorySlug={post.categorySlug}
              />
            ))}
          </BlogGrid>
        </Container>
      </section>
    </>
  );
}
