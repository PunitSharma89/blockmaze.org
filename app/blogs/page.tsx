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

const blogPosts = [
  {
    title: "The Role of Governance Frameworks in Institutional Blockchain Adoption",
    slug: "the-role-of-governance-frameworks-in-institutional-blockchain-adoption",
    image: "/images/gov-banner-1.png",
    category: "Blockchain Governance Framework",
    categorySlug: "blockchain-governance-framework",
    excerpt:
      "Governance frameworks are the mechanisms through which blockchain networks make decisions about their own rules, parameters, and evolution. For institutional adoption, how a network governs itself matters as much as what it can technically do.",
  },
  {
    title: "Why Do Institutions Need a Dedicated Real-World Asset Tokenization Platform?",
    slug: "why-do-institutions-need-a-dedicated-real-world-asset-tokenization-platform",
    image: "/images/Institutional.png",
    category: "Real-World Asset Tokenization",
    categorySlug: "real-world-asset-tokenization",
    excerpt:
      "General-purpose blockchain networks were not designed with the compliance requirements, verification standards, and institutional accountability frameworks that regulated asset markets require.",
  },
  {
    title: "What Role Do Validator Node Rewards Play in Institutional Blockchain Networks?",
    slug: "what-role-do-validator-node-rewards-play-in-institutional-blockchain-networks",
    image: "/images/validator-banner.png",
    category: "Blockchain Infrastructure",
    categorySlug: "blockchain-infrastructure",
    excerpt:
      "Validator rewards are the economic mechanism through which proof-of-stake networks incentivize the operation of the infrastructure that secures them.",
  },
  {
    title: "Why a Layer 0 Blockchain Matters for Regulated Real-World Asset Tokenization",
    slug: "why-a-layer-0-blockchain-matters-for-regulated-real-world-asset-tokenization",
    image: "/images/Network-Architecture.png",
    category: "Layer-0 Protocol",
    categorySlug: "layer-0-protocol",
    excerpt:
      "Most blockchain networks handling real-world asset tokenization operate at Layer-1 or above. This creates a structural problem: accountability controls applied at the application layer are inconsistent by nature.",
  },
  {
    title: "Why Tokenization Infrastructure Must Reflect Legal Ownership Systems",
    slug: "why-tokenization-infrastructure-must-reflect-legal-ownership-systems",
    image: "/images/Real-World-Assets-400x250.webp",
    category: "Blockchain Asset Tokenization",
    categorySlug: "blockchain-asset-tokenization",
    excerpt:
      "The rise of real world asset tokenization as a means of representing ownership rights digitally has been one of the major emerging trends in the modern financial space.",
  },
  {
    title: "Why Institutional Capital Requires Verifiable Blockchain Infrastructure",
    slug: "why-institutional-capital-requires-verifiable-blockchain-infrastructure",
    image: "/images/Verifiable-Blockchain-for-Institutional-Finance-400x250.jpg",
    category: "Blockchain Infrastructure",
    categorySlug: "blockchain-infrastructure",
    excerpt:
      "Capital markets do not adopt technology because it's new. They do so only when the architecture around it can carry risk.",
  },
  {
    title: "Why Smart Contracts Cannot Represent Legal Ownership Alone",
    slug: "why-smart-contracts-cannot-represent-legal-ownership-alone",
    image: "/images/Code-Executes-Law-Enforces-400x250.jpg",
    category: "Blockchain Regulation",
    categorySlug: "blockchain-regulation",
    excerpt:
      "A Developing Market Catching Up With Its Legal Framework. The tokenized real-world asset market has recently grown to an approximate $24.9 billion total market value.",
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
