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
      <section
        className="relative overflow-hidden flex items-center"
        style={{
          minHeight: "500px",
          background:
            "linear-gradient(to left, var(--color-header-navy), var(--color-header-dark) 49%)",
        }}
      >
        <div className="hero-bg-grid">
          <Image
            src="/images/hero-bg-grid.svg"
            alt=""
            fill
            className="object-fill"
          />
        </div>

        <div className="mx-auto w-[100%] lg:w-[80%] max-w-[1440px] py-20 relative z-10 flex flex-col items-center text-center gap-[40px]">
          <div className="flex flex-col gap-[16px] items-center max-w-[780px]">
            <div
              className="inline-flex w-fit items-center justify-center px-[16px] py-[12px] rounded-[999px] border"
              style={{
                borderColor: "var(--color-chip-border)",
                background: "var(--color-chip-bg)",
              }}
            >
              <span
                className="text-[14px] font-medium tracking-[-0.28px] whitespace-nowrap"
                style={{ color: "var(--color-primary)" }}
              >
                {data?.hero?.badge}
              </span>
            </div>
            <div className="flex flex-col gap-[20px]">
              <h1
                className="font-bold text-[46px] leading-[62px]"
                style={{ color: "var(--color-white)" }}
              >
                {data?.hero?.heading}
              </h1>
              <p
                className="text-[16px] leading-[28px]"
                style={{ color: "var(--color-hero-body)" }}
              >
                {data?.hero?.subtext}
              </p>
            </div>
          </div>
          <AnimatedButton
            href={data?.hero?.buttonHref ?? "#"}
            variant="primary"
          >
            {data?.hero?.buttonText}
          </AnimatedButton>
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

      {/* SECTION 3: RFP Program Structure */}
      {(data?.programCards ?? []).length > 0 && (
        <section
          className="section-padding"
          style={{ background: "var(--color-surface)" }}
        >
          <Container>
            <SectionHeading
              label={data?.programSection?.eyebrow}
              heading={data?.programSection?.heading ?? ""}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {(data?.programCards ?? []).map((card, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-3 p-6 rounded-[20px] transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "var(--color-white)",
                    border: "1px solid var(--color-border-subtle)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,176,30,0.1)" }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 11l3 3L22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                  </div>
                  <h4
                    className="text-[18px] font-semibold"
                    style={{ color: "var(--color-dark)" }}
                  >
                    {card.title}
                  </h4>
                  <p
                    className="text-[15px] leading-[28px]"
                    style={{ color: "var(--color-gray-body)" }}
                  >
                    {card.description}
                  </p>
                </div>
              ))}
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

      {/* SECTION 6: Evaluation Criteria */}
      {data?.evaluation && (
        <section className="section-padding bg-white">
          <Container>
            <SectionHeading
              label={data.evaluation.eyebrow}
              heading={data.evaluation.heading ?? ""}
              subtext={data.evaluation.subtext}
            />
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {(data.evaluation.criteria ?? []).map((criteria, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium"
                  style={{
                    background: "rgba(255,176,30,0.08)",
                    border: "1px solid var(--color-primary)",
                    color: "var(--color-primary)",
                  }}
                >
                  {criteria}
                </span>
              ))}
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
