import { Metadata } from "next";
import Image from "next/image";
import KnowledgeHubScroll from "@/components/ui/KnowledgeHubScroll";
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
      {/* 1 ── HERO — same as About page */}
      <section className="about-hero">
        <div className="about-hero-grid" />
        <div className="about-hero-inner">
          <div className="hero-chip-v2">
            <span className="hero-chip-dot" />
            <span className="hero-chip-label">Documentation &amp; Resources</span>
          </div>
          <div className="hero-figma-textblock">
            <h1 className="hero-figma-h1">
              Blockmaze Documentation &amp;{" "}
              <span className="text-primary">Resources</span>
            </h1>
            <p className="hero-figma-p">
              The Blockmaze knowledge hub serves as the single source of truth
              for all technical specifications, governance frameworks, validator
              standards, token economics, and real-world asset infrastructure
              documentation. All documents are version-controlled,
              governance-aligned, and intended for developers, validators,
              institutions, exchanges, and ecosystem participants.
            </p>
          </div>
          <div className="about-globe-container">
            <Image
              src="/images/about-globe.svg"
              alt="Blockmaze Knowledge Hub"
              width={950}
              height={400}
              className="about-globe-img"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2 ── KNOWLEDGE ITEMS — sticky scroll with full data */}
      {items.length > 0 ? (
        <KnowledgeHubScroll
          eyebrow="Documentation"
          heading="Knowledge Hub Resources"
          items={items}
        />
      ) : (
        <section className="section-padding bg-white">
          <p className="kh-empty-text">
            Resources and documentation will be available soon. Check back for updates.
          </p>
        </section>
      )}
    </>
  );
}
