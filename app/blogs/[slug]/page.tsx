import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";

// Static blog data placeholder (will be replaced with Sanity CMS)
const blogPostsData: Record<
  string,
  { title: string; category: string; excerpt: string; content: string }
> = {
  "why-smart-contracts-cannot-represent-legal-ownership-alone": {
    title: "Why Smart Contracts Cannot Represent Legal Ownership Alone",
    category: "Blockchain Regulation",
    excerpt:
      "A Developing Market Catching Up With Its Legal Framework",
    content:
      "A Developing Market Catching Up With Its Legal Framework. The data available to date reveals a lot of information about this fast-developing market. The tokenized real-world asset market has recently grown to an approximate $24.9 billion total market value, growing significantly over the past year.",
  },
  "why-institutional-capital-requires-verifiable-blockchain-infrastructure": {
    title:
      "Why Institutional Capital Requires Verifiable Blockchain Infrastructure",
    category: "Blockchain Infrastructure",
    excerpt: "When Infrastructure Becomes Trustworthy: Financial Institutions Move",
    content:
      "Capital markets do not adopt technology because it's \"new.\" They do so only when the architecture around it can carry risk. The evolution of institutional blockchain infrastructure can be explained through the lens of trust engineering.",
  },
  "why-tokenization-infrastructure-must-reflect-legal-ownership-systems": {
    title:
      "Why Tokenization Infrastructure Must Reflect Legal Ownership Systems",
    category: "Blockchain Asset Tokenization",
    excerpt:
      "The rise of real world asset tokenization as a means of representing ownership rights digitally.",
    content:
      "The rise of real world asset tokenization as a means of representing ownership rights digitally has been one of the major emerging trends in the modern financial space. Blockchain is rapidly being adopted across real estate, commodities, equities, and various forms of debt instruments.",
  },
};

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return Object.keys(blogPostsData).map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = blogPostsData[slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage(props: { params: Params }) {
  const { slug } = await props.params;
  const post = blogPostsData[slug];

  if (!post) {
    return (
      <Container>
        <div className="section-padding text-center">
          <h1 className="text-gray-dark">Post Not Found</h1>
        </div>
      </Container>
    );
  }

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
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              {post.category}
            </span>
            <h1 className="text-gray-dark mt-2 mb-6">{post.title}</h1>
            <div className="prose prose-lg max-w-none text-gray-DEFAULT leading-relaxed">
              <p>{post.content}</p>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
