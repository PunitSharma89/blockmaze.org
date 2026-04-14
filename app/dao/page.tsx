import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQ from "@/components/ui/FAQ";
import { sanityFetch } from "@/lib/sanity";
import { daoPageQuery } from "@/lib/queries";

export const metadata: Metadata = {
  title: "DAO Governance Platform | Quadratic Voting for RWAs",
  description:
    "Participate in DAO governance using quadratic voting to approve RWA tokenization, treasury allocation, and regulated blockchain decisions.",
};

/* ─── TYPES ─────────────────────────────────────────────────── */

interface DaoData {
  hero?: {
    badge?: string;
    heading?: string;
    subtext?: string;
    subtext2?: string;
    buttonText?: string;
    buttonHref?: string;
    secondButtonText?: string;
    secondButtonHref?: string;
    image?: { asset?: { url: string }; alt?: string };
  };
  aboutSection?: { eyebrow?: string; heading?: string };
  aboutText?: string;
  aboutButton?: { text?: string; href?: string };
  aboutCardsSection?: { eyebrow?: string; heading?: string };
  aboutCards?: { title: string; description: string }[];
  aboutCardsButton?: { text?: string; href?: string };
  marqueeItems?: string[];
  stepsSection?: { eyebrow?: string; heading?: string; subtext?: string };
  steps?: { iconPath: string; title: string; description: string }[];
  eligibilitySection?: { eyebrow?: string; heading?: string; subtext?: string };
  eligibilityItems?: string[];
  mechanismsSection?: { eyebrow?: string; heading?: string; subtext?: string };
  mechanisms?: { iconPath: string; title: string; description: string }[];
  faqSection?: { eyebrow?: string; heading?: string };
  faqs?: { question: string; answer: string }[];
}

/* ─── PAGE ──────────────────────────────────────────────────── */

export default async function DAOPage() {
  const data = await sanityFetch<DaoData>(daoPageQuery);

  const aboutCards = data?.aboutCards ?? [];
  const marqueeItems = data?.marqueeItems ?? [];
  const steps = data?.steps ?? [];
  const eligibilityItems = data?.eligibilityItems ?? [];
  const mechanisms = data?.mechanisms ?? [];
  const faqs = data?.faqs ?? [];

  const stepRows: (typeof steps)[] = [];
  for (let i = 0; i < steps.length; i += 3) {
    stepRows.push(steps.slice(i, i + 3));
  }

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
            <p className="hero-figma-p">{data?.hero?.subtext}</p>
            {data?.hero?.subtext2 && (
              <p className="hero-figma-p">{data.hero.subtext2}</p>
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
            {data?.hero?.secondButtonText && (
              <Link
                href={data.hero.secondButtonHref ?? "#"}
                className="hero-figma-btn-white"
              >
                {data.hero.secondButtonText}
              </Link>
            )}
          </div>
          <div className="about-globe-container">
            <Image
              src="/images/about-globe.svg"
              alt="Blockmaze DAO"
              width={950}
              height={400}
              className="about-globe-img"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2 ── ABOUT + CARDS */}
      {(data?.aboutSection?.heading || data?.aboutText || aboutCards.length > 0) && (
        <section className="about-section">
          <Container>
            <div className="about-new-wrap">
              <div className="flex flex-col gap-[20px] items-center text-center w-full">
                <h2 className="section-heading">
                  {data?.aboutSection?.heading?.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="text-primary">
                    {data?.aboutSection?.heading?.split(" ").slice(-1)[0]}
                  </span>
                </h2>
                {data?.aboutText && (
                  <p className="section-subtext about-subtext">{data.aboutText}</p>
                )}
              </div>
              {aboutCards.length > 0 && (
                <div className="rfp-howit-grid">
                  {aboutCards.map((card, idx) => (
                    <div key={idx} className="rfp-howit-card">
                      <span className="rfp-howit-num">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h4 className="rfp-howit-title">{card.title}</h4>
                      <p className="rfp-howit-desc">{card.description}</p>
                    </div>
                  ))}
                </div>
              )}
              {data?.aboutButton?.text && (
                <div className="flex justify-center">
                  <Link
                    href={data.aboutButton.href ?? "#"}
                    className="hero-figma-btn-primary"
                  >
                    {data.aboutButton.text}
                  </Link>
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* 3 ── CAPABILITIES HEADING + MARQUEE */}
      {(data?.aboutCardsSection?.heading || marqueeItems.length > 0) && (
        <div className="dao-capabilities-header">
          {data?.aboutCardsSection?.heading && (
            <h2 className="dao-capabilities-title">
              {data.aboutCardsSection.heading.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-primary">
                {data.aboutCardsSection.heading.split(" ").slice(-1)[0]}
              </span>
            </h2>
          )}
          {marqueeItems.length > 0 && (
            <div className="dao-marquee-bar">
              <div className="dao-marquee-track">
                {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
                  (item, i) => (
                    <span key={i} className="dao-marquee-item">
                      {item} <span className="dao-marquee-sep">—</span>
                    </span>
                  ),
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 5 ── HOW GOVERNANCE WORKS — same as RFP Process section */}
      {steps.length > 0 && (
        <section className="rfp-process-section">
          <div className="rfp-process-box">
            <div className="role-tabs-glow" aria-hidden="true" />
            <div className="rfp-process-header">
              {data?.stepsSection?.eyebrow && (
                <span className="rfp-process-chip">{data.stepsSection.eyebrow}</span>
              )}
              <h2 className="rfp-process-heading">{data?.stepsSection?.heading}</h2>
              {data?.stepsSection?.subtext && (
                <p className="rfp-process-subheading">{data.stepsSection.subtext}</p>
              )}
            </div>
            <div className="rfp-process-grid">
              {stepRows.map((row, rowIdx) => (
                <div key={rowIdx} className="rfp-process-row">
                  {row.map((step, idx) => {
                    const stepNum = rowIdx * 3 + idx + 1;
                    return (
                      <div key={idx} className="rfp-process-cell">
                        <div className="rfp-process-cell-top">
                          <div className="rfp-process-icon">
                            <span className="rfp-process-step-num">
                              {String(stepNum).padStart(2, "0")}
                            </span>
                          </div>
                          <h4 className="rfp-process-cell-title">{step.title}</h4>
                        </div>
                        <p className="rfp-process-cell-desc">{step.description}</p>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6 ── VOTING ELIGIBILITY — 2-then-1 grid */}
      {eligibilityItems.length > 0 && (
        <section className="section-padding bg-white">
          <Container>
            <SectionHeading
              label={data?.eligibilitySection?.eyebrow}
              heading={data?.eligibilitySection?.heading ?? ""}
              subtext={data?.eligibilitySection?.subtext}
            />
            <div className="dao-elig-grid section-content-gap">
              {eligibilityItems.map((item, idx) => (
                <div key={idx} className="rfp-elig-item">
                  <Image
                    src="/images/about-arrow.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="rfp-elig-item-icon"
                  />
                  <p className="rfp-elig-item-text">{item}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 7 ── CORE GOVERNANCE MECHANISMS */}
      {mechanisms.length > 0 && (
        <section className="section-padding bg-white">
          <Container>
            <SectionHeading
              label={data?.mechanismsSection?.eyebrow}
              heading={data?.mechanismsSection?.heading ?? ""}
              subtext={data?.mechanismsSection?.subtext}
            />
            <div className="eco-cards-grid dao-mechanisms-grid section-content-gap">
              {mechanisms.map((m) => (
                <div key={m.title} className="eco-card">
                  <div className="eco-card-icon">
                    <Image
                      src={m.iconPath}
                      alt={m.title}
                      width={44}
                      height={44}
                    />
                  </div>
                  <h4 className="eco-card-title">{m.title}</h4>
                  <p className="eco-card-desc">{m.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 8 ── FAQ */}
      {faqs.length > 0 && (
        <section className="section-padding bg-white">
          <Container>
            <SectionHeading
              label={data?.faqSection?.eyebrow}
              heading={data?.faqSection?.heading ?? ""}
            />
            <div className="flex flex-col lg:flex-row gap-12 items-start faq-grid-gap">
              <div className="lg:w-5/12">
                <Image
                  src="/images/faq-img.png"
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
      )}
    </>
  );
}
