import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { sanityFetch } from "@/lib/sanity";
import { allKnowledgeHubQuery } from "@/lib/queries";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Knowledge Hub",
  description:
    "Access Blockmaze Foundation resources, documentation, and research materials.",
};

interface KnowledgeHubItem {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  bulletPoints?: string[];
  link?: string;
  featuredImage?: {
    asset?: { url: string };
    alt?: string;
  };
  publishedAt?: string;
}

export default async function KnowledgeHubPage() {
  const result = await sanityFetch<KnowledgeHubItem[]>(allKnowledgeHubQuery);
  const items = result ?? [];

  return (
    <>
      <Container>
        <Breadcrumb items={[{ label: "Knowledge Hub" }]} />
      </Container>

      {/* Dark Hero Banner */}
      <section className="mx-4 lg:mx-8 mb-12">
        <div className="bg-black rounded-3xl overflow-hidden px-8 py-16 text-center">
          <span className="inline-block border border-white text-white text-sm px-5 py-2 rounded-full mb-6">
            Documentation &amp; Resources
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            Blockmaze Documentation &amp; Resources
          </h1>
          <p className="text-white leading-relaxed max-w-4xl mx-auto mb-10">
            The Blockmaze knowledge hub serves as the single source of truth for
            all technical specifications, governance frameworks, validator
            standards, token economics, and real-world asset infrastructure
            documentation. All documents are version-controlled,
            governance-aligned, and intended for developers, validators,
            institutions, exchanges, and ecosystem participants.
          </p>
          <div className="relative w-full max-w-4xl mx-auto aspect-[16/9]">
            <Image
              src="/images/resource_banner.png"
              alt="Blockmaze Documentation"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content Items */}
      <section className="section-padding">
        <Container>
          {items.length > 0 ? (
            <div className="flex flex-col gap-16">
              {items.map((item, index) => {
                const isEven = index % 2 !== 0;
                const textBlock = (
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-dark mb-4">
                      {item.title}
                    </h2>
                    {item.excerpt && (
                      <p className="text-gray-DEFAULT leading-relaxed mb-6">
                        {item.excerpt}
                      </p>
                    )}
                    {item.bulletPoints && item.bulletPoints.length > 0 && (
                      <ul className="mb-8 space-y-3">
                        {item.bulletPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-DEFAULT">
                            <span className="text-gray-dark">♦</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.link && (
                      <a
                        href={item.link}
                        className="inline-block border border-gray-dark text-gray-dark px-8 py-3 rounded hover:bg-gray-dark hover:text-white transition-colors duration-300"
                      >
                        Explore more
                      </a>
                    )}
                  </div>
                );
                const imageBlock = item.featuredImage?.asset?.url ? (
                  <div className="flex-1 flex justify-center">
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={item.featuredImage.asset.url}
                        alt={item.featuredImage.alt || item.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ) : null;
                return (
                  <div key={item._id} className="flex flex-col lg:flex-row items-center gap-12">
                    {isEven ? <>{imageBlock}{textBlock}</> : <>{textBlock}{imageBlock}</>}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center text-gray-DEFAULT py-12">
              <p>
                Resources and documentation will be available soon. Check back
                for updates.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
