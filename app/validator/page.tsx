import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GovernanceStructureScroll from "@/components/ui/GovernanceStructureScroll";
import { sanityFetch } from "@/lib/sanity";
import { validatorPageQuery } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Blockmaze Validator | Node Rewards | Layer-0 Blockchain Staking",
  description:
    "The Blockmaze Validator Platform is designed for users who want to run, manage, and operate validator nodes on the Blockmaze network.",
};

/* ─── TYPES ─────────────────────────────────────────────────── */

interface ValidatorData {
  hero?: {
    badge?: string;
    heading?: string;
    subtext?: string;
    subtext2?: string;
    buttonText?: string;
    buttonHref?: string;
    image?: { asset?: { url: string }; alt?: string };
  };
  whoSection?: { eyebrow?: string; heading?: string };
  whoCards?: { imagePath: string; title: string }[];
  stepsSection?: { eyebrow?: string; heading?: string; subtext?: string };
  steps?: {
    title: string;
    description: string;
    details?: string[];
    note?: string;
  }[];
  stepsButton?: { text?: string; href?: string };
  validationSection?: { eyebrow?: string; heading?: string; subtext?: string };
  validationCards?: { iconKey: string; title: string; description: string }[];
  dashboardSection?: { eyebrow?: string; heading?: string };
  dashboardItems?: string[];
  dashboardButton?: { text?: string; href?: string };
  noteText?: string;
  ctaSection?: {
    heading?: string;
    subtext?: string;
    buttonText?: string;
    buttonHref?: string;
  };
}

/* ─── ICON MAP ──────────────────────────────────────────────── */

function Icon({ iconKey, size = 24 }: { iconKey: string; size?: number }) {
  const s = size;
  const sw = "1.6";
  const color = "var(--color-primary)";
  switch (iconKey) {
    case "shield":
      return (
        <svg width={s} height={s} viewBox="0 0 28 28" fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 3L24 8v7c0 6-4 11-10 13C8 26 4 21 4 15V8l10-5z" />
        </svg>
      );
    case "document":
      return (
        <svg width={s} height={s} viewBox="0 0 28 28" fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="6" width="20" height="16" rx="3" />
          <path d="M9 12h10M9 16h6" />
        </svg>
      );
    case "chart":
      return (
        <svg width={s} height={s} viewBox="0 0 28 28" fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 22l4-8 4 4 4-6 4 10" />
          <path d="M4 22h20" />
        </svg>
      );
    case "network":
      return (
        <svg width={s} height={s} viewBox="0 0 28 28" fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="14" cy="9" r="4" />
          <circle cx="6" cy="20" r="3" />
          <circle cx="22" cy="20" r="3" />
          <path d="M10 11l-2 6M18 11l2 6M10.5 20h7" />
        </svg>
      );
    case "clock":
      return (
        <svg width={s} height={s} viewBox="0 0 28 28" fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="14" cy="14" r="10" />
          <path d="M14 8v6l4 4" />
        </svg>
      );
    case "lock":
      return (
        <svg width={s} height={s} viewBox="0 0 28 28" fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="13" width="18" height="12" rx="2" />
          <path d="M9 13V9a5 5 0 0 1 10 0v4" />
          <circle cx="14" cy="19" r="1.5" />
        </svg>
      );
    default:
      return (
        <svg width={s} height={s} viewBox="0 0 28 28" fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="14" cy="14" r="10" />
        </svg>
      );
  }
}

/* ─── PAGE ──────────────────────────────────────────────────── */

export default async function ValidatorPage() {
  const data = await sanityFetch<ValidatorData>(validatorPageQuery);

  const whoCards = data?.whoCards ?? [];
  const steps = data?.steps ?? [];
  const validationCards = data?.validationCards ?? [];
  const dashboardItems = data?.dashboardItems ?? [];

  const validationRows: (typeof validationCards)[] = [];
  for (let i = 0; i < validationCards.length; i += 3) {
    validationRows.push(validationCards.slice(i, i + 3));
  }

  return (
    <div className="validator-page">
      {/* 1 ── HERO */}
      <section className="about-hero-section">
        <div className="about-hero-wrap">
          <div className="about-hero-text">
            {data?.hero?.badge && (
              <div className="hero-chip-v2">
                <span className="hero-chip-dot" />
                <span className="hero-chip-label">{data.hero.badge}</span>
              </div>
            )}
            <div className="about-hero-textblock">
              <h1 className="about-hero-h1">{data?.hero?.heading}</h1>
              {data?.hero?.subtext && (
                <p className="about-hero-p">{data.hero.subtext}</p>
              )}
              {data?.hero?.subtext2 && (
                <p className="about-hero-p">{data.hero.subtext2}</p>
              )}
            </div>
            {data?.hero?.buttonText && (
              <div className="hero-figma-btns">
                <Link href={data.hero.buttonHref ?? "#"} className="hero-figma-btn-primary">
                  {data.hero.buttonText}
                </Link>
              </div>
            )}
          </div>
          <div className="about-hero-img-col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/about-hero.svg" alt="Blockmaze Validator Platform" className="about-hero-img" />
          </div>
        </div>
      </section>

      {/* 2 ── WHO SHOULD USE — eco-cards-grid (like DAO Core Governance Mechanisms) */}
      {whoCards.length > 0 && (
        <section className="section-padding bg-white mb-5">
          <Container>
            <SectionHeading
              label={data?.whoSection?.eyebrow}
              heading={
                <>
                  {data?.whoSection?.heading?.split(" ").slice(0, -2).join(" ")}
                  <br />
                  <span className="text-primary">
                    {data?.whoSection?.heading?.split(" ").slice(-2).join(" ")}
                  </span>
                </>
              }
            />
            <div className="feature-pills-wrap section-content-gap">
              {whoCards.map((card) => (
                <span key={card.title} className="feature-pill">
                  {card.title}
                </span>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 3 ── HOW TO PARTICIPATE — GovernanceStructureScroll (like swap steps) */}
      <GovernanceStructureScroll
        eyebrow={data?.stepsSection?.eyebrow}
        heading={data?.stepsSection?.heading}
        subHeading={data?.stepsSection?.subtext}
        items={steps}
        buttonText={data?.stepsButton?.text}
        buttonHref={data?.stepsButton?.href}
      />

      {/* 4 ── HOW VALIDATION WORKS — rfp-process-section (like RFP How the Process Works) */}
      {validationCards.length > 0 && (
        <section className="rfp-process-section">
          <div className="rfp-process-box">
            <div className="role-tabs-glow" aria-hidden="true" />
            <div className="rfp-process-header">
              {data?.validationSection?.eyebrow && (
                <span className="rfp-process-chip">
                  {data.validationSection.eyebrow}
                </span>
              )}
              <h2 className="rfp-process-heading">
                {data?.validationSection?.heading}
              </h2>
              {data?.validationSection?.subtext && (
                <p className="rfp-process-subheading">
                  {data.validationSection.subtext}
                </p>
              )}
            </div>
            <div className="rfp-process-grid">
              {validationRows.map((row, rowIdx) => (
                <div key={rowIdx} className="rfp-process-row">
                  {row.map((card, idx) => (
                    <div key={idx} className="rfp-process-cell">
                      <div className="rfp-process-cell-top">
                        <div className="rfp-process-icon validator-process-icon">
                          <Icon iconKey={card.iconKey} size={22} />
                        </div>
                        <h4 className="rfp-process-cell-title">{card.title}</h4>
                      </div>
                      <p className="rfp-process-cell-desc">{card.description}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5 ── DASHBOARD — feature-pills (like RFP Transparency & Reporting) */}
      {dashboardItems.length > 0 && (
        <section className="section-padding bg-white">
          <Container>
            <SectionHeading
              label={data?.dashboardSection?.eyebrow}
              heading={data?.dashboardSection?.heading ?? ""}
              className="mb-5"
            />
            <div className="feature-pills-wrap section-content-gap">
              {dashboardItems.map((item, idx) => (
                <span key={idx} className="feature-pill">
                  {item}
                </span>
              ))}
            </div>
            {data?.dashboardButton?.text && (
              <div className="flex justify-center mt-8">
                <Link
                  href={data.dashboardButton.href ?? "#"}
                  className="hero-figma-btn-primary"
                >
                  {data.dashboardButton.text}
                </Link>
              </div>
            )}
            {data?.noteText && (
              <p className="validator-note">{data.noteText}</p>
            )}
          </Container>
        </section>
      )}
    </div>
  );
}
