import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GovernanceStructureScroll from "@/components/ui/GovernanceStructureScroll";
import { sanityFetch } from "@/lib/sanity";
import { delegatorPageQuery } from "@/lib/queries";

export const metadata: Metadata = {
  title:
    "Blockmaze Delegator | Crypto Staking Platform | Delegate & Earn Rewards",
  description:
    "The Blockmaze delegator platform enables BMZ holders to participate in network security by delegating stake to active validators.",
};

/* ─── TYPES ─────────────────────────────────────────────────── */

interface DelegatorData {
  hero?: {
    badge?: string;
    heading?: string;
    subtext?: string;
    buttonText?: string;
    buttonHref?: string;
    image?: { asset?: { url: string }; alt?: string };
  };
  benefitsSection?: { eyebrow?: string; heading?: string };
  benefits?: { iconPath: string; title: string; description: string }[];
  evaluateSection?: {
    eyebrow?: string;
    heading?: string;
    text?: string;
    subtext?: string;
    items?: string[];
    note?: string;
    image?: { asset?: { url: string }; alt?: string };
  };
  stepsSection?: { eyebrow?: string; heading?: string; subtext?: string };
  steps?: { title: string; description: string }[];
  stepsButton?: { text?: string; href?: string };
  dashboardSection?: { eyebrow?: string; heading?: string };
  dashboardItems?: string[];
  dashboardImage?: { asset?: { url: string }; alt?: string };
  rewardsSection?: { eyebrow?: string; heading?: string };
  earningCard?: {
    iconPath?: string;
    heading?: string;
    text?: string;
    rewardItems?: string[];
    note?: string;
  };
  unbondingCard?: {
    iconPath?: string;
    heading?: string;
    text?: string;
    timeline?: string[];
    text2?: string;
  };
  risksCard?: {
    iconPath?: string;
    heading?: string;
    intro?: string;
    risks?: { title: string; description: string }[];
  };
  ctaSection?: {
    heading?: string;
    subtext?: string;
    buttonText?: string;
    buttonHref?: string;
  };
}

/* ─── PAGE ──────────────────────────────────────────────────── */

export default async function DelegatorPage() {
  const data = await sanityFetch<DelegatorData>(delegatorPageQuery);

  const benefits = data?.benefits ?? [];
  const steps = data?.steps ?? [];
  const dashboardItems = data?.dashboardItems ?? [];

  return (
    <div className="delegator-page">

      {/* 1 ── HERO — same as validator */}
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
          {data?.hero?.buttonText && (
            <div className="hero-figma-btns">
              <Link
                href={data.hero.buttonHref ?? "#"}
                className="hero-figma-btn-primary"
              >
                {data.hero.buttonText}
              </Link>
            </div>
          )}
          <div className="about-globe-container">
            <Image
              src="/images/about-globe.svg"
              alt="Blockmaze Delegator Platform"
              width={950}
              height={400}
              className="about-globe-img"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2 ── WHY DELEGATE — eco-cards-grid (like About The Blockmaze Foundation) */}
      {benefits.length > 0 && (
        <section className="section-padding bg-white">
          <Container>
            <SectionHeading
              label={data?.benefitsSection?.eyebrow}
              heading={data?.benefitsSection?.heading ?? ""}
            />
            <div className="eco-cards-grid section-content-gap">
              {benefits.map((b) => (
                <div key={b.title} className="eco-card">
                  <div className="eco-card-icon">
                    <Image
                      src={b.iconPath}
                      alt={b.title}
                      width={44}
                      height={44}
                    />
                  </div>
                  <h4 className="eco-card-title">{b.title}</h4>
                  <p className="eco-card-desc">{b.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 3 ── WHAT TO EVALUATE — vision-layout (like About Long-Term Vision) */}
      {data?.evaluateSection && (
        <section className="section-padding bg-white">
          <Container>
            <div className="vision-layout">

              {/* Left — image */}
              <div className="vision-img-card">
                {data.evaluateSection.image?.asset?.url ? (
                  <Image
                    src={data.evaluateSection.image.asset.url}
                    alt={data.evaluateSection.image.alt ?? ""}
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

              {/* Right — text + list */}
              <div className="vision-content">
                <div className="vision-text-block">
                  {data.evaluateSection.eyebrow && (
                    <span className="section-eyebrow">
                      {data.evaluateSection.eyebrow}
                    </span>
                  )}
                  <h2 className="vision-title">
                    {data.evaluateSection.heading?.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="text-primary">
                      {data.evaluateSection.heading?.split(" ").slice(-1)[0]}
                    </span>
                  </h2>
                  {data.evaluateSection.text && (
                    <p className="vision-desc">{data.evaluateSection.text}</p>
                  )}
                  {data.evaluateSection.subtext && (
                    <p className="vision-desc">{data.evaluateSection.subtext}</p>
                  )}
                </div>
                {(data.evaluateSection.items ?? []).length > 0 && (
                  <ul className="vision-list">
                    {(data.evaluateSection.items ?? []).map((item, i) => (
                      <li key={i} className="vision-item">
                        <span className="vision-item-icon">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="9" stroke="#ffb01e" strokeWidth="1.5"/>
                            <path d="M6.5 10L9 12.5L13.5 7.5" stroke="#ffb01e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

            </div>
            {data.evaluateSection.note && (
              <p className="delegator-evaluate-note">{data.evaluateSection.note}</p>
            )}
          </Container>
        </section>
      )}

      {/* 4 ── HOW TO DELEGATE — GovernanceStructureScroll (like validator How to Participate) */}
      <GovernanceStructureScroll
        eyebrow={data?.stepsSection?.eyebrow}
        heading={data?.stepsSection?.heading}
        subHeading={data?.stepsSection?.subtext}
        items={steps}
        buttonText={data?.stepsButton?.text}
        buttonHref={data?.stepsButton?.href}
      />

      {/* 5 ── DASHBOARD — feature-pills (like RFP Transparency & Reporting) */}
      {dashboardItems.length > 0 && (
        <section className="section-padding bg-white">
          <Container>
            <SectionHeading
              label={data?.dashboardSection?.eyebrow}
              heading={data?.dashboardSection?.heading ?? ""}
            />
            <div className="feature-pills-wrap section-content-gap">
              {dashboardItems.map((item, idx) => (
                <span key={idx} className="feature-pill">
                  {item}
                </span>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 6 ── REWARDS, UNBONDING & RISKS — consistent card UI */}
      {(data?.earningCard || data?.unbondingCard || data?.risksCard) && (
        <section className="section-padding bg-white">
          <Container>
            <SectionHeading
              label={data?.rewardsSection?.eyebrow}
              heading={data?.rewardsSection?.heading ?? ""}
            />

            {/* Earning + Unbonding — 2 col */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 section-content-gap">

              {/* Earning */}
              {data?.earningCard && (
                <div className="delegator-card">
                  {data.earningCard.iconPath && (
                    <div className="delegator-card-icon">
                      <Image
                        src={data.earningCard.iconPath}
                        alt=""
                        width={30}
                        height={30}
                      />
                    </div>
                  )}
                  <h4 className="delegator-card-title">{data.earningCard.heading}</h4>
                  {data.earningCard.text && (
                    <p className="delegator-card-text">{data.earningCard.text}</p>
                  )}
                  {(data.earningCard.rewardItems ?? []).length > 0 && (
                    <ul className="delegator-card-bullets">
                      {(data.earningCard.rewardItems ?? []).map((item, i) => (
                        <li key={i} className="delegator-card-bullet">
                          <span className="delegator-bullet-dot" />
                          <span className="delegator-card-bullet-text">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {data.earningCard.note && (
                    <p className="delegator-note">{data.earningCard.note}</p>
                  )}
                </div>
              )}

              {/* Unbonding */}
              {data?.unbondingCard && (
                <div className="delegator-card">
                  {data.unbondingCard.iconPath && (
                    <div className="delegator-card-icon">
                      <Image
                        src={data.unbondingCard.iconPath}
                        alt=""
                        width={30}
                        height={30}
                      />
                    </div>
                  )}
                  <h4 className="delegator-card-title">{data.unbondingCard.heading}</h4>
                  {data.unbondingCard.text && (
                    <p className="delegator-card-text">{data.unbondingCard.text}</p>
                  )}
                  {(data.unbondingCard.timeline ?? []).length > 0 && (
                    <ul className="delegator-card-bullets">
                      {(data.unbondingCard.timeline ?? []).map((item, i) => (
                        <li key={i} className="delegator-card-bullet">
                          <span className="delegator-bullet-dot" />
                          <span className="delegator-card-bullet-text">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {data.unbondingCard.text2 && (
                    <p className="delegator-note">{data.unbondingCard.text2}</p>
                  )}
                </div>
              )}
            </div>

            {/* Risks — full width */}
            {data?.risksCard && (
              <div className="delegator-card">
                {data.risksCard.iconPath && (
                  <div className="delegator-card-icon">
                    <Image
                      src={data.risksCard.iconPath}
                      alt=""
                      width={30}
                      height={30}
                    />
                  </div>
                )}
                <h4 className="delegator-card-title">{data.risksCard.heading}</h4>
                {data.risksCard.intro && (
                  <p className="delegator-card-text">{data.risksCard.intro}</p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {(data.risksCard.risks ?? []).map((risk) => (
                    <div key={risk.title} className="delegator-risk-item">
                      <h5 className="delegator-risk-title">{risk.title}</h5>
                      <p className="delegator-card-text">{risk.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Container>
        </section>
      )}

    </div>
  );
}
