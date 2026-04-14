import Image from "next/image";
import { Metadata } from "next";
import Container from "@/components/layout/Container";
import AnimatedButton from "@/components/ui/AnimatedButton";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQ from "@/components/ui/FAQ";
import { sanityFetch } from "@/lib/sanity";
import { rfpPageQuery } from "@/lib/queries";

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
  const data = await sanityFetch<RfpData>(rfpPageQuery);

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
            <h1 className="hero-figma-h1">
              {data?.hero?.heading}
            </h1>
            <p className="hero-figma-p">
              {data?.hero?.subtext}
            </p>
          </div>
          <AnimatedButton
            href={data?.hero?.buttonHref ?? "#"}
            variant="primary"
          >
            {data?.hero?.buttonText}
          </AnimatedButton>
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
        <section className="section-padding section-padding--lg bg-white">
          <Container>
            <div className="flex flex-col gap-4 items-center text-center w-full">
              <span className="section-eyebrow">{data.about.eyebrow}</span>
              <h2 className="section-heading">
                {data.about.heading?.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-primary">
                  {data.about.heading?.split(" ").slice(-1)[0]}
                </span>
              </h2>
              <p className="section-subtext">{data.about.text}</p>
            </div>
          </Container>
        </section>
      )}

      {/* SECTION 3: RFP Program Structure — dark */}
      {(data?.programCards ?? []).length > 0 && (
        <section className="distinguishes-section">
          <Container>
            <div className="distinguishes-inner">
              <video
                className="distinguishes-bg-video"
                src="/images/bg-line-1.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="distinguishes-content">
                <div className="distinguishes-heading">
                  <span className="section-eyebrow section-eyebrow--dark">
                    {data?.programSection?.eyebrow}
                  </span>
                  <h2 className="distinguishes-title">
                    {data?.programSection?.heading}
                  </h2>
                </div>
                <div className="distinguishes-cards">
                  <div className="distinguishes-row">
                    {data!.programCards!.map((card, idx) => (
                      <div key={idx} className="distinguishes-card">
                        <div className="distinguishes-card-body">
                          <h4 className="distinguishes-card-title">
                            {card.title}
                          </h4>
                          <p className="distinguishes-card-text">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* SECTION 4: How the RFP Process Works */}
      {processSteps.length > 0 && (
        <section className="section-padding bg-white">
          <Container>
            <SectionHeading
              label={data?.processSection?.eyebrow}
              heading={data?.processSection?.heading ?? ""}
            />
            <div className="flex flex-col gap-4">
              {stepRows.map((row, rowIdx) => (
                <div
                  key={rowIdx}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  {row.map((step, idx) => {
                    const stepNum = rowIdx * 3 + idx + 1;
                    return (
                      <div
                        key={idx}
                        className="flex flex-col gap-3 p-6 rounded-[20px] transition-all duration-300 hover:-translate-y-1"
                        style={{
                          background: "var(--color-bg-default)",
                          border: "1px solid var(--color-border-subtle)",
                        }}
                      >
                        <div
                          className="inline-flex items-center justify-center w-9 h-9 rounded-full text-sm font-bold flex-shrink-0"
                          style={{
                            background: "var(--color-primary)",
                            color: "var(--color-dark)",
                          }}
                        >
                          {stepNum}
                        </div>
                        <div className="flex flex-col gap-2">
                          <h4
                            className="text-[18px] font-medium leading-[1.4]"
                            style={{ color: "var(--color-dark)" }}
                          >
                            {step.title}
                          </h4>
                          <p
                            className="text-[16px] leading-[31px]"
                            style={{ color: "var(--color-gray-body)" }}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* SECTION 5: Eligibility & Compliance */}
      {data?.eligibility && (
        <section
          className="section-padding"
          style={{ background: "var(--color-surface)" }}
        >
          <Container>
            <SectionHeading
              label={data.eligibility.eyebrow}
              heading={data.eligibility.heading ?? ""}
              subtext={data.eligibility.subtext}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto items-start">
              <div>
                <h3
                  className="text-[22px] font-semibold mb-6"
                  style={{ color: "var(--color-dark)" }}
                >
                  {data.eligibility.eligibilityHeading}
                </h3>
                <div className="flex flex-col gap-3">
                  {(data.eligibility.eligibilityItems ?? []).map(
                    (item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Image
                          src="/images/about-arrow.svg"
                          alt=""
                          width={24}
                          height={24}
                        />
                        <p className="break-words leading-relaxed">{item}</p>
                      </div>
                    ),
                  )}
                </div>
              </div>
              <div>
                <h3
                  className="text-[22px] font-semibold mb-6"
                  style={{ color: "var(--color-dark)" }}
                >
                  {data.eligibility.complianceHeading}
                </h3>
                <div className="flex flex-col gap-3">
                  {(data.eligibility.complianceItems ?? []).map((item, idx) => (
                    <div key={idx} className="about-card-bullet">
                      <Image
                        src="/images/about-arrow.svg"
                        alt=""
                        width={24}
                        height={24}
                      />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* SECTION 6: Evaluation Criteria — dark */}
      {data?.evaluation && (
        <section className="section-padding">
          <Container>
            <div className="distinguishes-inner">
              <video
                className="distinguishes-bg-video"
                src="/images/bg-line-1.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="distinguishes-content">
                <div className="distinguishes-heading">
                  <span className="section-eyebrow section-eyebrow--dark">
                    {data.evaluation.eyebrow}
                  </span>
                  <h2 className="distinguishes-title">
                    {data.evaluation.heading}
                  </h2>
                  <p className="distinguishes-subtext">
                    {data.evaluation.subtext}
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
                  {(data.evaluation.criteria ?? []).map((criteria, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium"
                      style={{
                        background: "rgba(255,176,30,0.12)",
                        border: "1px solid var(--color-primary)",
                        color: "var(--color-primary)",
                      }}
                    >
                      {criteria}
                    </span>
                  ))}
                </div>
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
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {(data.transparency.features ?? []).map((feature, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium"
                  style={{
                    background: "var(--color-bg-default)",
                    border: "1px solid var(--color-border-default)",
                    color: "var(--color-gray-DEFAULT)",
                  }}
                >
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
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:w-5/12">
                <Image
                  src="/images/faq-img.png"
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
