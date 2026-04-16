import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/ui/BlogCard";
import BlogGrid from "@/components/ui/BlogGrid";
import FAQ from "@/components/ui/FAQ";
import ProblemSlider from "@/components/ui/ProblemSlider";
import AccountabilityArc from "@/components/ui/AccountabilityArc";
import UseCaseScroll from "@/components/ui/UseCaseScroll";
import DistinguishesSection from "@/components/ui/DistinguishesSection";
import EcosystemTabs from "@/components/ui/EcosystemTabs";
import { Globe } from "@/components/ui/Globe";
import AboutAccordion from "@/components/ui/AboutAccordion";
import { sanityFetch } from "@/lib/sanity";
import { homePageQuery, latestBlogsQuery } from "@/lib/queries";
import { getLocale } from "@/lib/getLocale";

/* ─── TYPES ─────────────────────────────────────────────────── */

interface HomeData {
  hero?: {
    chipLabel?: string;
    heading?: string;
    bodyText?: string;
    button1Text?: string;
    button1Href?: string;
    button2Text?: string;
    button2Href?: string;
  };
  about?: { heading?: string; headingHighlight?: string; bodyText?: string };
  aboutAccordion?: {
    vision?: { title?: string; bodyText?: string; bullets?: string[] };
    mission?: { title?: string; bodyText?: string; bullets?: string[] };
  };
  problemSection?: { heading?: string; headingHighlight?: string };
  problemCards?: { icon: string; title: string; description: string }[];
  accountabilitySection?: {
    heading?: string;
    headingHighlight?: string;
    subtext?: string;
  };
  accountabilityServices?: { text: string; icon: string; position: string }[];
  distinguishesSection?: { pill?: string; heading?: string; subtext?: string };
  uspCards?: { icon: string; title: string; description: string }[];
  useCasesSection?: {
    eyebrow?: string;
    heading?: string;
    headingHighlight?: string;
    subtext?: string;
  };
  useCases?: { title: string; description: string; icon: string }[];
  ecosystemSection?: {
    heading?: string;
    headingHighlight?: string;
    subtext?: string;
  };
  ecosystemItems?: {
    title: string;
    href: string;
    imagePath: string;
    description: string;
    bullets: string[];
  }[];
  docsBanner?: { title?: string; buttonText?: string; buttonHref?: string };
  blogsSection?: { eyebrow?: string; heading?: string; subtext?: string };
  faqSection?: { eyebrow?: string; heading?: string };
  faqs?: { question: string; answer: string }[];
}

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  featuredImage?: { asset?: { url: string }; alt?: string };
  category?: { title: string; slug: { current: string } };
}

/* ─── PAGE ──────────────────────────────────────────────────── */

export default async function Home() {
  const locale = await getLocale();
  const [data, blogs] = await Promise.all([
    sanityFetch<HomeData>(homePageQuery, { locale }),
    sanityFetch<BlogPost[]>(latestBlogsQuery, { locale }),
  ]);

  const problemCards = data?.problemCards ?? [];
  const uspCards = data?.uspCards ?? [];
  const faqs = data?.faqs ?? [];

  return (
    <>
      {/* SECTION 1: Hero */}
      <section className="hero-figma-section mainHeroBanner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/back-box.svg"
          alt=""
          aria-hidden="true"
          className="hero-figma-bg"
        />

        <div className="hero-figma-inner">
          <div className="hero-figma-text">
            <div className="hero-chip-v2">
              <span className="hero-chip-dot"></span>
              <span className="hero-chip-label">
                {data?.hero?.chipLabel ?? "Blockmaze Foundation"}
              </span>
            </div>
            <div className="hero-figma-textblock">
              <h1 className="hero-figma-h1">
                {data?.hero?.heading ??
                  "The Accountability Framework Behind the Blockmaze Layer-0 Blockchain Ecosystem"}
              </h1>
              <p className="hero-figma-p">
                {data?.hero?.bodyText ??
                  "Establishing protocol-level governance and verified issuer accountability across the Blockmaze layer 0 blockchain ecosystem while preserving independent and irreversible settlement."}
              </p>
            </div>
          </div>
          <div className="hero-figma-btns">
            <Link
              href={data?.hero?.button1Href ?? "/contact-us"}
              className="hero-figma-btn-primary"
            >
              {data?.hero?.button1Text ?? "Contact Us"}
            </Link>
            <Link
              href={data?.hero?.button2Href ?? "/whitepaper"}
              className="hero-figma-btn-white"
            >
              {data?.hero?.button2Text ?? "Read Whitepaper"}
            </Link>
          </div>
        </div>

        <div className="hero-figma-img-wrap">
          <Globe className="hero-globe" />
          <Image
            src="/images/hero-img-1.png"
            alt="Blockmaze hero"
            width={774}
            height={442}
            priority
            className="relative z-10"
          />
        </div>
      </section>

      {/* SECTION 2: About the Foundation */}
      <section className="about-section">
        <Container>
          <div className="about-new-wrap">
            <div className="flex flex-col gap-[20px] items-center text-center w-full">
              <h2 className="section-heading">
                {data?.about?.heading ?? "About the"}{" "}
                <span className="text-primary">
                  {data?.about?.headingHighlight ?? "Foundation"}
                </span>
              </h2>
              <p className="section-subtext about-subtext">
                {data?.about?.bodyText ??
                  "The Blockmaze foundation is an independent, non-profit organization responsible for the governance architecture and accountability framework of the Blockmaze Layer-0 protocol. As a foundation supporting a regulated blockchain for RWAs, it maintains issuer registries, token standard approvals, proof cadence oversight, and governance processes that apply across all connected chains. Its role is limited to defining issuer eligibility, monitoring ongoing obligations, managing standing transitions, and maintaining protocol registries that record these decisions on-chain within a blockchain governance framework."}
              </p>
            </div>

            <div className="about-new-content">
              {/* Left: SVG illustration */}
              <div className="about-new-img-col">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/mission-vision.svg"
                  alt="Mission and Vision"
                  aria-hidden="true"
                />
              </div>

              {/* Right: accordion */}
              <div className="about-new-cards-col">
                <AboutAccordion
                  vision={data?.aboutAccordion?.vision}
                  mission={data?.aboutAccordion?.mission}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: Core Problems */}
      <section className="problem-section">
        <div className="problem-section-wrap">
          <div className="problem-section-box">
            <ProblemSlider
              cards={problemCards}
              heading={data?.problemSection?.heading}
              headingHighlight={data?.problemSection?.headingHighlight}
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: The Blockmaze Accountability Model */}
      <section>
        <AccountabilityArc
          heading={data?.accountabilitySection?.heading}
          headingHighlight={data?.accountabilitySection?.headingHighlight}
          subtext={data?.accountabilitySection?.subtext}
          services={data?.accountabilityServices as never}
        />
      </section>

      {/* SECTION 5: What Distinguishes Blockmaze */}
      <DistinguishesSection
        cards={uspCards}
        pill={data?.distinguishesSection?.pill}
        heading={data?.distinguishesSection?.heading}
        subtext={data?.distinguishesSection?.subtext}
      />

      {/* SECTION 6: Use Cases */}
      <UseCaseScroll
        eyebrow={data?.useCasesSection?.eyebrow}
        heading={data?.useCasesSection?.heading}
        headingHighlight={data?.useCasesSection?.headingHighlight}
        subtext={data?.useCasesSection?.subtext}
        useCases={data?.useCases}
      />

      {/* SECTION 7: Governance & Ecosystem */}
      <section className="bg-white">
        <EcosystemTabs
          heading={data?.ecosystemSection?.heading}
          headingHighlight={data?.ecosystemSection?.headingHighlight}
          subtext={data?.ecosystemSection?.subtext}
          items={data?.ecosystemItems}
        />
      </section>

      {/* SECTION 8: Documentation & Resources */}
      <section className="section-padding bg-white">
        <Container>
          <div className="docs-banner columnReverse">
            <div className="docs-banner-content">
              <h2 className="docs-banner-title">
                {data?.docsBanner?.title ??
                  "Blockmaze Documentation & Resources"}
              </h2>
              <Link
                href={data?.docsBanner?.buttonHref ?? "/knowledge-hub"}
                className="hero-figma-btn-primary"
              >
                {data?.docsBanner?.buttonText ?? "View"}
              </Link>
            </div>
            <div className="docs-banner-img-wrap">
              <Image
                src="/images/reso.png"
                alt="Blockmaze Documentation & Resources"
                width={400}
                height={300}
                className="docs-banner-img"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 9: Blogs */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            label={data?.blogsSection?.eyebrow ?? "Blogs"}
            heading={
              data?.blogsSection?.heading ??
              "Latest Research & Featured Blog Posts"
            }
            subtext={
              data?.blogsSection?.subtext ??
              "Recent publications highlight governance design, ecosystem development, validator infrastructure, developer tooling and research supporting compliant Web3 infrastructure and regulated digital asset markets."
            }
          />
          <BlogGrid>
            {(blogs ?? []).map((post) => (
              <BlogCard
                key={post._id}
                title={post.title}
                excerpt={post.excerpt ?? ""}
                slug={post.slug?.current ?? ""}
                image={
                  post.featuredImage?.asset?.url ??
                  "/images/Code-Executes-Law-Enforces-400x250.jpg"
                }
                category={post.category?.title ?? ""}
                categorySlug={post.category?.slug?.current ?? ""}
              />
            ))}
          </BlogGrid>
        </Container>
      </section>

      {/* SECTION 10: FAQ */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            label={data?.faqSection?.eyebrow ?? "FAQ"}
            heading={data?.faqSection?.heading ?? "Frequently Asked Questions"}
          />
          <div className="flex flex-col lg:flex-row gap-12 items-center mt-12 ">
            <div className="lg:w-5/12">
              <Image
                src="/images/faq-svg.svg"
                alt="Frequently Asked Questions"
                width={454}
                height={425}
              />
            </div>
            <div className="lg:w-7/12">
              <FAQ items={faqs} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
