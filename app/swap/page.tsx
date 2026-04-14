import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GovernanceStructureScroll from "@/components/ui/GovernanceStructureScroll";
import { sanityFetch } from "@/lib/sanity";
import { swapPageQuery } from "@/lib/queries";

export const metadata: Metadata = {
  title: "RWA Swap Platform | On-Chain Asset Exchange Protocol",
  description:
    "The BMZ Swap platform enables participation in Blockmaze governance by converting BMZ into governance-backed GBMZ.",
};

/* ─── TYPES ─────────────────────────────────────────────────── */

interface SwapData {
  hero?: {
    badge?: string;
    heading?: string;
    subtext?: string;
    buttonText?: string;
    buttonHref?: string;
    button2Text?: string;
    button2Href?: string;
    image?: { asset?: { url: string }; alt?: string };
  };
  stepsSection?: { eyebrow?: string; heading?: string };
  steps?: { title: string; description: string }[];
  stepsButton?: { text?: string; href?: string };
  governanceSection?: {
    eyebrow?: string;
    heading?: string;
    text?: string;
    text2?: string;
    image?: { asset?: { url: string }; alt?: string };
  };
  lockInSection?: { eyebrow?: string; heading?: string; text?: string };
  ctaSection?: {
    heading?: string;
    subtext?: string;
    buttonText?: string;
    buttonHref?: string;
  };
}

/* ─── PAGE ──────────────────────────────────────────────────── */

export default async function SwapPage() {
  const data = await sanityFetch<SwapData>(swapPageQuery);

  const steps = data?.steps ?? [];


  return (
    <>
      {/* 1 ── HERO */}
      <section className="about-hero">
        <div className="about-hero-grid" />
        <div className="about-hero-inner">
          {data?.hero?.badge && (
            <div className="hero-chip-v2">
              <span className="hero-chip-dot" />
              <span className="hero-chip-label">{data.hero.badge}</span>
            </div>
          )}
          <div className="hero-figma-textblock">
            <h1 className="hero-figma-h1">{data?.hero?.heading}</h1>
            {data?.hero?.subtext && (
              <p className="hero-figma-p">{data.hero.subtext}</p>
            )}
          </div>
          <div className="hero-figma-btns">
            {data?.hero?.buttonText && (
              <Link
                href={data.hero.buttonHref ?? "#"}
                className="hero-figma-btn-primary"
              >
                {data.hero.buttonText}
              </Link>
            )}
            {data?.hero?.button2Text && (
              <Link
                href={data.hero.button2Href ?? "#"}
                className="hero-figma-btn-white"
              >
                {data.hero.button2Text}
              </Link>
            )}
          </div>
          <div className="about-globe-container">
            <Image
              src="/images/about-globe.svg"
              alt="BMZ Swap Platform"
              width={950}
              height={400}
              className="about-globe-img"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2 ── STEPS — sticky scroll (same as Top Blockmaze Use Cases) */}
      <GovernanceStructureScroll
        eyebrow={data?.stepsSection?.eyebrow}
        heading={data?.stepsSection?.heading}
        items={steps}
      />
      {data?.stepsButton?.text && (
        <section className="section-padding bg-white">
          <Container>
            <div className="flex justify-center">
              <Link
                href={data.stepsButton.href ?? "#"}
                className="hero-figma-btn-primary"
              >
                {data.stepsButton.text}
              </Link>
            </div>
          </Container>
        </section>
      )}

      {/* 3 ── GOVERNANCE — vision-layout */}
      {data?.governanceSection && (
        <section className="section-padding bg-white">
          <Container>
            <div className="vision-layout">

              {/* Left — image */}
              <div className="vision-img-card">
                {data.governanceSection.image?.asset?.url ? (
                  <Image
                    src={data.governanceSection.image.asset.url}
                    alt={data.governanceSection.image.alt ?? ""}
                    width={556}
                    height={531}
                    className="vision-img"
                  />
                ) : (
                  <Image
                    src="/images/long.svg"
                    alt=""
                    width={556}
                    height={531}
                    className="vision-img"
                  />
                )}
              </div>

              {/* Right — text */}
              <div className="vision-content">
                <div className="vision-text-block">
                  {data.governanceSection.eyebrow && (
                    <span className="section-eyebrow">
                      {data.governanceSection.eyebrow}
                    </span>
                  )}
                  <h2 className="vision-title">
                    {data.governanceSection.heading?.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="text-primary">
                      {data.governanceSection.heading?.split(" ").slice(-1)[0]}
                    </span>
                  </h2>
                  {data.governanceSection.text && (
                    <p className="vision-desc">{data.governanceSection.text}</p>
                  )}
                  {data.governanceSection.text2 && (
                    <p className="vision-desc">{data.governanceSection.text2}</p>
                  )}
                </div>
              </div>

            </div>
          </Container>
        </section>
      )}

      {/* 4 ── LOCK-IN — centered heading + text */}
      {data?.lockInSection?.text && (
        <section className="section-padding bg-white">
          <Container>
            <SectionHeading
              label={data.lockInSection.eyebrow}
              heading={
                <>
                  {data.lockInSection.heading?.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="text-primary">
                    {data.lockInSection.heading?.split(" ").slice(-1)[0]}
                  </span>
                </>
              }
              subtext={data.lockInSection.text}
            />
          </Container>
        </section>
      )}

      {/* 5 ── CTA */}
      {data?.ctaSection && (
        <section className="section-padding bg-white">
          <Container>
            <div className="docs-banner">
              <div className="docs-banner-content">
                {data.ctaSection.heading && (
                  <h2 className="docs-banner-title">{data.ctaSection.heading}</h2>
                )}
                {data.ctaSection.subtext && (
                  <p className="section-subtext">{data.ctaSection.subtext}</p>
                )}
                {data.ctaSection.buttonText && (
                  <Link
                    href={data.ctaSection.buttonHref ?? "#"}
                    className="hero-figma-btn-primary"
                  >
                    {data.ctaSection.buttonText}
                  </Link>
                )}
              </div>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
