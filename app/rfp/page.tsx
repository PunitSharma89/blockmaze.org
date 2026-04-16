import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQ from "@/components/ui/FAQ";
import { sanityFetch } from "@/lib/sanity";
import { rfpPageQuery } from "@/lib/queries";
import { getLocale } from "@/lib/getLocale";

export const metadata: Metadata = {
  title: "RFP | Blockmaze",
  description:
    "Official framework for ecosystem funding, validator infrastructure, governance tooling, and RWA tokenization initiatives under a structured review process.",
};

/* ─── TYPES ─────────────────────────────────────────────────── */

interface RfpData {
  hero?: {
    badge?: string;
    heading?: string;
    subtext?: string;
    buttonText?: string;
    buttonHref?: string;
  };
  about?: {
    eyebrow?: string;
    heading?: string;
    text?: string;
  };
  programSection?: { eyebrow?: string; heading?: string };
  programCards?: { title: string; description: string }[];
  processSection?: { eyebrow?: string; heading?: string };
  processSteps?: { title: string; description: string }[];
  eligibility?: {
    eyebrow?: string;
    heading?: string;
    subtext?: string;
    eligibilityHeading?: string;
    complianceHeading?: string;
    eligibilityItems?: string[];
    complianceItems?: string[];
  };
  faqSection?: { eyebrow?: string; heading?: string };
  evaluation?: {
    eyebrow?: string;
    heading?: string;
    subtext?: string;
    criteria?: string[];
  };
  transparency?: {
    eyebrow?: string;
    heading?: string;
    subtext?: string;
    features?: string[];
  };
  faqs?: { question: string; answer: string }[];
}

/* ─── PAGE ──────────────────────────────────────────────────── */

export default async function RfpPage() {
  const locale = await getLocale();
  const data = await sanityFetch<RfpData>(rfpPageQuery, { locale });

  // Split process steps into rows of 3
  const processSteps = data?.processSteps ?? [];
  const stepRows: (typeof processSteps)[] = [];
  for (let i = 0; i < processSteps.length; i += 3) {
    stepRows.push(processSteps.slice(i, i + 3));
  }

  return (
    <>
      {/* SECTION 1: Hero */}
      <section className="about-hero">
        <div className="about-hero-grid" />
        <div className="about-hero-inner">
          <div className="hero-chip-v2">
            <span className="hero-chip-dot" />
            <span className="hero-chip-label">{data?.hero?.badge}</span>
          </div>
          <div className="hero-figma-textblock">
            <h1 className="hero-figma-h1">{data?.hero?.heading}</h1>
            <p className="hero-figma-p">{data?.hero?.subtext}</p>
          </div>
          <div className="hero-figma-btns">
            <Link
              href={data?.hero?.buttonHref ?? "#"}
              className="hero-figma-btn-primary"
            >
              {data?.hero?.buttonText}
            </Link>
          </div>
          <div className="about-globe-container">
            <Image
              src="/images/about-globe.svg"
              alt="Blockmaze ecosystem globe"
              width={950}
              height={400}
              className="about-globe-img"
              priority
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: About */}
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

      {/* SECTION 3: RFP Program Structure */}
      {(data?.programCards ?? []).length > 0 && (
        <section className="section-padding rfp-howit-section">
          <Container>
            <SectionHeading
              label={data?.programSection?.eyebrow}
              heading={data?.programSection?.heading ?? ""}
            />
            <div className="rfp-howit-grid section-content-gap">
              {data!.programCards!.map((card, idx) => (
                <div key={idx} className="rfp-howit-card">
                  <span className="rfp-howit-num">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h4 className="rfp-howit-title">{card.title}</h4>
                  <p className="rfp-howit-desc">{card.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* SECTION 4: How the RFP Process Works */}
      {processSteps.length > 0 && (
        <section className="rfp-process-section">
          <div className="rfp-process-box">
            <div className="role-tabs-glow" aria-hidden="true" />
            <div className="rfp-process-header">
              {data?.processSection?.eyebrow && (
                <span className="rfp-process-chip">
                  {data.processSection.eyebrow}
                </span>
              )}
              <h2 className="rfp-process-heading">
                {data?.processSection?.heading}
              </h2>
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
                          <h4 className="rfp-process-cell-title">
                            {step.title}
                          </h4>
                        </div>
                        <p className="rfp-process-cell-desc">
                          {step.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5: Eligibility & Compliance */}
      {data?.eligibility && (
        <section className="section-padding rfp-elig-section">
          <Container>
            <SectionHeading
              label={data.eligibility.eyebrow}
              heading={
                <>
                  {data.eligibility.heading?.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="text-primary">
                    {data.eligibility.heading?.split(" ").slice(-1)[0]}
                  </span>
                </>
              }
              subtext={data.eligibility.subtext}
            />
            <div className="rfp-elig-cards section-content-gap">
              {/* Eligibility card */}
              <div className="rfp-elig-card rfp-elig-card--blue">
                <h3 className="rfp-elig-card-heading">
                  {data.eligibility.eligibilityHeading}
                </h3>
                <div className="rfp-elig-items">
                  {(data.eligibility.eligibilityItems ?? []).map(
                    (item, idx) => (
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
                    ),
                  )}
                </div>
              </div>

              {/* Compliance card */}
              <div className="rfp-elig-card rfp-elig-card--warm">
                <h3 className="rfp-elig-card-heading">
                  {data.eligibility.complianceHeading}
                </h3>
                <div className="rfp-elig-items">
                  {(data.eligibility.complianceItems ?? []).map((item, idx) => (
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
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* SECTION 6: Evaluation Criteria */}
      {data?.evaluation && (
        <section className="section-padding bg-white">
          <Container>
            <div className="vision-layout gapMob">
              {/* Left — dark image card */}
              <div className="vision-img-card">
                <Image
                  src="/images/long.svg"
                  alt="Evaluation Criteria"
                  width={556}
                  height={531}
                  className="vision-img"
                />
              </div>

              {/* Right — text + criteria list */}
              <div className="vision-content">
                <div className="vision-text-block ">
                  {data.evaluation.eyebrow && (
                    <span className="section-eyebrow">
                      {data.evaluation.eyebrow}
                    </span>
                  )}
                  <h2 className="vision-title">
                    {data.evaluation.heading?.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="text-primary">
                      {data.evaluation.heading?.split(" ").slice(-1)[0]}
                    </span>
                  </h2>
                  {data.evaluation.subtext && (
                    <p className="vision-desc">{data.evaluation.subtext}</p>
                  )}
                </div>
                <ul className="vision-list">
                  {(data.evaluation.criteria ?? []).map((criterion, idx) => (
                    <li key={idx} className="vision-item">
                      <span className="vision-item-icon">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="10"
                            cy="10"
                            r="9"
                            stroke="#ffb01e"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M6.5 10L9 12.5L13.5 7.5"
                            stroke="#ffb01e"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* SECTION 7: Transparency & Reporting */}
      {data?.transparency && (
        <section className="section-padding bg-white">
          <Container>
            <SectionHeading
              label={data.transparency.eyebrow}
              heading={data.transparency.heading ?? ""}
              subtext={data.transparency.subtext}
            />
            <div className="feature-pills-wrap section-content-gap">
              {(data.transparency.features ?? []).map((feature, idx) => (
                <span key={idx} className="feature-pill">
                  {feature}
                </span>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* SECTION 8: FAQ */}
      {(data?.faqs ?? []).length > 0 && (
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
                <FAQ items={data!.faqs!} />
              </div>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
