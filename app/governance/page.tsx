import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQ from "@/components/ui/FAQ";
import GovernanceStructureScroll from "@/components/ui/GovernanceStructureScroll";
import { sanityFetch } from "@/lib/sanity";
import { governancePageQuery } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Governance",
  description:
    "The Blockmaze Governance Council provides policy oversight for regulated blockchain operations, RWA issuance approval, compliance review, and ecosystem risk management.",
};

/* ─── TYPES ─────────────────────────────────────────────────── */

interface SanityImage {
  asset?: { url: string };
  alt?: string;
}

interface GovernanceData {
  hero?: {
    badge?: string;
    heading?: string;
    subtext?: string;
    buttonText?: string;
    buttonHref?: string;
    secondButtonText?: string;
    secondButtonHref?: string;
    image?: SanityImage;
  };
  about?: { eyebrow?: string; heading?: string; text?: string };
  rolesSection?: { eyebrow?: string; heading?: string };
  roles?: { iconKey: string; title: string; description: string }[];
  scopeSection?: { eyebrow?: string; heading?: string };
  scopeItems?: { iconKey: string; title: string; description: string }[];
  structureSection?: {
    eyebrow?: string;
    heading?: string;
    subHeading?: string;
  };
  structure?: { iconKey: string; title: string; description: string }[];
  stepsSection?: { eyebrow?: string; heading?: string };
  steps?: { num: string; title: string; description: string }[];
  compliance?: {
    eyebrow?: string;
    heading?: string;
    text?: string;
    tags?: string[];
    image?: SanityImage;
  };
  getInvolvedSection?: { eyebrow?: string; heading?: string };
  getInvolved?: { iconKey: string; title: string; description: string }[];
  faqSection?: { eyebrow?: string; heading?: string };
  faqs?: { question: string; answer: string }[];
}

/* ─── ICON MAP ──────────────────────────────────────────────── */

function RoleIcon({ iconKey, size = 28 }: { iconKey: string; size?: number }) {
  const s = size;
  const sw = "1.6";
  const color = "var(--color-primary)";
  switch (iconKey) {
    case "shield":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 28 28"
          fill="none"
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 3L24 8v7c0 6-4 11-10 13C8 26 4 21 4 15V8l10-5z" />
        </svg>
      );
    case "document":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 28 28"
          fill="none"
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="6" width="20" height="16" rx="3" />
          <path d="M9 12h10M9 16h6" />
        </svg>
      );
    case "chart":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 28 28"
          fill="none"
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 22l4-8 4 4 4-6 4 10" />
          <path d="M4 22h20" />
        </svg>
      );
    case "network":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 28 28"
          fill="none"
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="14" cy="9" r="4" />
          <circle cx="6" cy="20" r="3" />
          <circle cx="22" cy="20" r="3" />
          <path d="M10 11l-2 6M18 11l2 6M10.5 20h7" />
        </svg>
      );
    case "emergency":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 28 28"
          fill="none"
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 4v6M14 18v6M4 14h6M18 14h6" />
          <circle cx="14" cy="14" r="4" />
        </svg>
      );
    case "clock":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 28 28"
          fill="none"
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="14" cy="14" r="10" />
          <path d="M14 8v6l4 4" />
        </svg>
      );
    case "lock":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 28 28"
          fill="none"
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="5" y="13" width="18" height="12" rx="2" />
          <path d="M9 13V9a5 5 0 0 1 10 0v4" />
          <circle cx="14" cy="19" r="1.5" />
        </svg>
      );
    case "arrow":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 28 28"
          fill="none"
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 14h16M18 8l6 6-6 6" />
        </svg>
      );
    case "partner":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 28 28"
          fill="none"
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="8" width="20" height="14" rx="3" />
          <path d="M10 8V6a5 5 0 0 1 8 0v2" />
          <path d="M9 16h10M9 20h6" />
        </svg>
      );
    case "developer":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 28 28"
          fill="none"
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="22" height="20" rx="3" />
          <path d="M9 10h10M9 14h10M9 18h6" />
        </svg>
      );
    case "institution":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 28 28"
          fill="none"
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 3l11 5v7c0 6-4.5 11-11 13C7 26 3 21 3 15V8z" />
          <path d="M10 14l3 3 5-6" />
        </svg>
      );
    default:
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 28 28"
          fill="none"
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="14" cy="14" r="10" />
        </svg>
      );
  }
}

/* ─── PAGE ──────────────────────────────────────────────────── */

export default async function GovernancePage() {
  const data = await sanityFetch<GovernanceData>(governancePageQuery);

  const roles = data?.roles ?? [];
  const scopeItems = data?.scopeItems ?? [];
  const structure = data?.structure ?? [];
  const steps = data?.steps ?? [];
  const getInvolved = data?.getInvolved ?? [];
  const faqs = data?.faqs ?? [];

  const stepRows: (typeof steps)[] = [];
  for (let i = 0; i < steps.length; i += 3) {
    stepRows.push(steps.slice(i, i + 3));
  }

  return (
    <>
      {/* 1 ── HERO — same pattern as About / RFP */}
      <section className="about-hero-section about-page-hero">
        <div className="about-hero-wrap">
          <div className="about-hero-text">
            <div className="hero-chip-v2">
              <span className="hero-chip-dot" />
              <span className="hero-chip-label">{data?.hero?.badge}</span>
            </div>
            <div className="about-hero-textblock">
              <h1 className="about-hero-h1">{data?.hero?.heading}</h1>
              <p className="about-hero-p">{data?.hero?.subtext}</p>
            </div>
            <div className="hero-figma-btns">
              {data?.hero?.buttonText && (
                <Link href={data.hero.buttonHref ?? "#"} className="hero-figma-btn-primary">
                  {data.hero.buttonText}
                </Link>
              )}
            </div>
          </div>
          <div className="about-hero-img-col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/goverence-hero.png" alt="Blockmaze governance" className="about-hero-img" />
          </div>
        </div>
      </section>

      {/* 2 ── ABOUT — centered heading + subtext (same as RFP About section) */}
      {data?.about && (
        <section className="section-padding bg-white">
          <Container>
            <SectionHeading
              heading={
                <>
                  {data.about.heading?.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="text-primary">
                    {data.about.heading?.split(" ").slice(-1)[0]}
                  </span>
                </>
              }
              subtext={data.about.text}
            />
          </Container>
        </section>
      )}

      {/* 3 ── ROLES — eco-cards-grid with icons (white) */}
      {roles.length > 0 && (
        <section className="section-padding bg-white !pt-0">
          <Container>
            <SectionHeading
              label={data?.rolesSection?.eyebrow}
              heading={data?.rolesSection?.heading ?? ""}
            />
            <div className="eco-cards-grid section-content-gap">
              {roles.map((r) => (
                <div key={r.title} className="eco-card">
                  <div className="eco-card-icon">
                    <RoleIcon iconKey={r.iconKey} size={44} />
                  </div>
                  <h4 className="eco-card-title">{r.title}</h4>
                  <p className="eco-card-desc">{r.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 4 ── GOVERNANCE SCOPE — ds-section dark box (What Distinguishes pattern) */}
      {scopeItems.length > 0 && (
        <section className="ds-section">
          <Container>
            <div className="ds-box">
              <div className="ds-bg-glow" aria-hidden="true" />
              <div className="ds-layout responsive-block">

                {/* Left */}
                <div className="ds-left">
                  <div className="ds-left-text">
                    <span className="ds-pill">
                      {data?.scopeSection?.eyebrow ?? "Governance Scope"}
                    </span>
                    <h2 className="ds-heading">
                      {data?.scopeSection?.heading ?? ""}
                    </h2>
                  </div>
                  <div className="ds-coin-wrap">
                    <Image
                      src="/images/coin-12.png"
                      alt="Blockmaze governance"
                      width={248}
                      height={252}
                      className="ds-coin-img"
                    />
                  </div>
                </div>

                {/* Right — 3×2 feature grid */}
                <div className="ds-right">
                  {[[scopeItems[0], scopeItems[1]], [scopeItems[2], scopeItems[3]], [scopeItems[4], scopeItems[5]]].map((row, ri) => (
                    <div key={ri} className="ds-row">
                      {row.map((item) =>
                        item && (
                          <div key={item.title} className="ds-feature">
                            <div className="ds-feature-top">
                              <div className="ds-icon-wrap">
                                <RoleIcon iconKey={item.iconKey} size={44} />
                              </div>
                              <h4 className="ds-feature-title">{item.title}</h4>
                            </div>
                            <p className="ds-feature-desc">{item.description}</p>
                          </div>
                        )
                      )}
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 5 ── GOVERNANCE STRUCTURE — sticky scroll (same as AccountabilityScroll) */}
      <GovernanceStructureScroll
        eyebrow={data?.structureSection?.eyebrow}
        heading={data?.structureSection?.heading}
        subHeading={data?.structureSection?.subHeading}
        items={structure}
      />

      {/* 6 ── HOW IT OPERATES — rfp-howit ghost-number cards using step.num (white) */}
      {steps.length > 0 && (
        <section className="section-padding bg-white">
          <Container>
            <SectionHeading
              label={data?.stepsSection?.eyebrow}
              heading={data?.stepsSection?.heading ?? ""}
            />
            <div className="rfp-howit-grid section-content-gap">
              {steps.map((step, idx) => (
                <div key={idx} className="rfp-howit-card">
                  <span className="rfp-howit-num">{step.num}</span>
                  <h4 className="rfp-howit-title">{step.title}</h4>
                  <p className="rfp-howit-desc">{step.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 7 ── COMPLIANCE & RISK — SectionHeading + neutral pills (same as RFP Transparency) */}
      {data?.compliance && (
        <section className="section-padding bg-white">
          <Container>
            <SectionHeading
              label={data.compliance.eyebrow}
              heading={data.compliance.heading ?? ""}
              subtext={data.compliance.text}
            />
            {(data.compliance.tags ?? []).length > 0 && (
              <div className="feature-pills-wrap section-content-gap">
                {(data.compliance.tags ?? []).map((tag) => (
                  <span key={tag} className="feature-pill">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Container>
        </section>
      )}

      {/* 8 ── GET INVOLVED — eco-cards-grid with icons (white) */}
      {getInvolved.length > 0 && (
        <section className="section-padding bg-white">
          <Container>
            <SectionHeading
              label={data?.getInvolvedSection?.eyebrow}
              heading={data?.getInvolvedSection?.heading ?? ""}
            />
            <div className="eco-cards-grid section-content-gap">
              {getInvolved.map((g) => (
                <div key={g.title} className="eco-card">
                  <div className="eco-card-icon">
                    <RoleIcon iconKey={g.iconKey} size={44} />
                  </div>
                  <h4 className="eco-card-title">{g.title}</h4>
                  <p className="eco-card-desc">{g.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 9 ── FAQ — image + accordion with faq-grid-gap */}
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
      )}
    </>
  );
}
