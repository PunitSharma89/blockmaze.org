import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/ui/BlogCard";
import BlogGrid from "@/components/ui/BlogGrid";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Explore research, insights, and analysis on blockchain governance, real-world asset tokenization, and institutional blockchain infrastructure.",
};

// Static blog data (will be replaced with Sanity CMS when configured)
const blogPosts = [
  {
    title: "Why Smart Contracts Cannot Represent Legal Ownership Alone",
    slug: "why-smart-contracts-cannot-represent-legal-ownership-alone",
    image: "/images/Code-Executes-Law-Enforces-400x250.jpg",
    category: "Blockchain Regulation",
    categorySlug: "blockchain-regulation",
    excerpt:
      "A Developing Market Catching Up With Its Legal Framework The data available to date reveals a lot of information about this fast-developing market. The tokenized real-world asset market has recently grown to an approximate $24.9 billion total market value, growing...",
  },
  {
    title:
      "Why Institutional Capital Requires Verifiable Blockchain Infrastructure",
    slug: "why-institutional-capital-requires-verifiable-blockchain-infrastructure",
    image:
      "/images/Verifiable-Blockchain-for-Institutional-Finance-400x250.jpg",
    category: "Blockchain Infrastructure",
    categorySlug: "blockchain-infrastructure",
    excerpt:
      '"When Infrastructure Becomes Trustworthy: Financial Institutions Move" Capital markets do not adopt technology because it\'s "new." They do so only when the architecture around it can carry risk.',
  },
  {
    title:
      "Why Tokenization Infrastructure Must Reflect Legal Ownership Systems",
    slug: "why-tokenization-infrastructure-must-reflect-legal-ownership-systems",
    image: "/images/Real-World-Assets-400x250.webp",
    category: "Blockchain Asset Tokenization",
    categorySlug: "blockchain-asset-tokenization",
    excerpt:
      "The rise of real world asset tokenization as a means of representing ownership rights digitally has been one of the major emerging trends in the modern financial space.",
  },
];

export default function BlogsPage() {
  return (
    <>
      <Container>
        <Breadcrumb items={[{ label: "Blogs" }]} />
      </Container>
      <section className="section-padding">
        <Container>
          <SectionHeading
            heading="Blogs"
            subtext="Explore research, insights, and analysis on blockchain governance, real-world asset tokenization, and institutional blockchain infrastructure."
          />
          <BlogGrid>
            {blogPosts.map((post) => (
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
