import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import AnimatedButton from "@/components/ui/AnimatedButton";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQ from "@/components/ui/FAQ";
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
  structureSection?: { eyebrow?: string; heading?: string; subHeading?: string };
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
      {/* 1 ── HERO */}
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

        <div className="mx-auto w-[80%] max-w-[1440px] py-20 relative z-10 flex flex-col lg:flex-row items-center gap-[60px]">
          <div className="flex-1 flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[16px]">
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
            <div className="flex gap-[20px]">
              {data?.hero?.buttonText && (
                <AnimatedButton
                  href={data.hero.buttonHref ?? "#"}
                  variant="primary"
                >
                  {data.hero.buttonText}
                </AnimatedButton>
              )}
              {data?.hero?.secondButtonText && (
                <AnimatedButton
                  href={data.hero.secondButtonHref ?? "#"}
                  variant="white"
                >
                  {data.hero.secondButtonText}
                </AnimatedButton>
              )}
            </div>
          </div>

          <div className="hidden lg:flex flex-shrink-0 items-center justify-center w-[660px] h-[400px] ms-[auto]">
            {data?.hero?.image?.asset?.url ? (
              <Image
                src={data.hero.image.asset.url}
                alt={data.hero.image.alt ?? ""}
                width={660}
                height={400}
                priority
              />
            ) : (
              <svg
                width="660"
                height="400"
                viewBox="0 0 460 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="230"
                  cy="360"
                  rx="200"
                  ry="32"
                  stroke="#1e3a5f"
                  strokeWidth="1"
                  strokeDasharray="6 4"
                  fill="none"
                  opacity="0.5"
                />
                <rect
                  x="130"
                  y="100"
                  width="200"
                  height="200"
                  rx="12"
                  fill="#0e213d"
                  stroke="#1e3a5f"
                  strokeWidth="1.5"
                />
                <path
                  d="M110 104 L230 40 L350 104"
                  fill="#0b1b30"
                  stroke="#1e3a5f"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <rect
                  x="155"
                  y="150"
                  width="50"
                  height="40"
                  rx="4"
                  fill="#1a3050"
                  stroke="#1e3a5f"
                  strokeWidth="1"
                />
                <rect
                  x="215"
                  y="150"
                  width="50"
                  height="40"
                  rx="4"
                  fill="#1a3050"
                  stroke="#1e3a5f"
                  strokeWidth="1"
                />
                <rect
                  x="275"
                  y="150"
                  width="40"
                  height="40"
                  rx="4"
                  fill="#1a3050"
                  stroke="#1e3a5f"
                  strokeWidth="1"
                />
                <rect
                  x="155"
                  y="205"
                  width="50"
                  height="40"
                  rx="4"
                  fill="#1a3050"
                  stroke="#1e3a5f"
                  strokeWidth="1"
                />
                <rect
                  x="215"
                  y="205"
                  width="50"
                  height="40"
                  rx="4"
                  fill="#1a3050"
                  stroke="#1e3a5f"
                  strokeWidth="1"
                />
                <rect
                  x="195"
                  y="260"
                  width="70"
                  height="40"
                  rx="4"
                  fill="#172840"
                  stroke="#1e3a5f"
                  strokeWidth="1"
                />
                <circle
                  cx="345"
                  cy="92"
                  r="38"
                  fill="rgba(255,176,30,0.08)"
                  stroke="rgba(255,176,30,0.3)"
                  strokeWidth="1.5"
                />
                <path
                  d="M345 72l16 8v10c0 10-6 16-16 19-10-3-16-9-16-19V80l16-8z"
                  fill="rgba(255,176,30,0.15)"
                  stroke="#ffb01e"
                  strokeWidth="1.5"
                />
                <path
                  d="M338 91l5 5 10-11"
                  stroke="#ffb01e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="100"
                  cy="310"
                  r="20"
                  fill="rgba(255,176,30,0.1)"
                  stroke="#ffb01e"
                  strokeWidth="1.2"
                />
                <circle
                  cx="100"
                  cy="310"
                  r="12"
                  fill="rgba(255,176,30,0.15)"
                  stroke="#ffb01e"
                  strokeWidth="1"
                />
                <circle
                  cx="370"
                  cy="320"
                  r="16"
                  fill="rgba(255,176,30,0.1)"
                  stroke="#ffb01e"
                  strokeWidth="1.2"
                />
                <circle
                  cx="370"
                  cy="320"
                  r="9"
                  fill="rgba(255,176,30,0.15)"
                  stroke="#ffb01e"
                  strokeWidth="1"
                />
              </svg>
            )}
          </div>
        </div>
      </section>

      {/* 2 ── ABOUT */}
      {data?.about && (
        <section className="section-padding section-padding--lg bg-white">
          <Container>
            <div className="flex flex-col gap-4 items-center text-center w-full">
              <span className="section-eyebrow">{data.about.eyebrow}</span>
              <h2 className="section-heading">{data.about.heading}</h2>
              <p className="section-subtext">{data.about.text}</p>
            </div>
          </Container>
        </section>
      )}

      {/* 3 ── ROLE CARDS — dark */}
      {roles.length > 0 && (
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
                    {data?.rolesSection?.eyebrow}
                  </span>
                  <h2 className="distinguishes-title">
                    {data?.rolesSection?.heading}
                  </h2>
                </div>
                <div className="distinguishes-cards">
                  {[roles.slice(0, 3), roles.slice(3, 6)]
                    .filter((r) => r.length > 0)
                    .map((row, rowIdx) => (
                      <div key={rowIdx} className="distinguishes-row">
                        {row.map((r) => (
                          <div key={r.title} className="distinguishes-card">
                            <div
                              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                              style={{ background: "rgba(255,176,30,0.12)" }}
                            >
                              <RoleIcon iconKey={r.iconKey} size={22} />
                            </div>
                            <div className="distinguishes-card-body">
                              <h4 className="distinguishes-card-title">
                                {r.title}
                              </h4>
                              <p className="distinguishes-card-text">
                                {r.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 4 ── GOVERNANCE SCOPE */}
      {scopeItems.length > 0 && (
        <section
          className="section-padding"
          style={{ background: "var(--color-surface)" }}
        >
          <Container>
            <SectionHeading
              label={data?.scopeSection?.eyebrow}
              heading={data?.scopeSection?.heading ?? ""}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {scopeItems.map((s) => (
                <div
                  key={s.title}
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
                    <RoleIcon iconKey={s.iconKey} size={22} />
                  </div>
                  <h4
                    className="text-[18px] font-medium leading-[1.4]"
                    style={{ color: "var(--color-dark)" }}
                  >
                    {s.title}
                  </h4>
                  <p
                    className="text-[16px] leading-[31px]"
                    style={{ color: "var(--color-gray-body)" }}
                  >
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 5 ── GOVERNANCE STRUCTURE */}
      {structure.length > 0 && (
        <section className="section-padding bg-white">
          <Container>
            <SectionHeading
              label={data?.structureSection?.eyebrow}
              heading={data?.structureSection?.heading ?? ""}
              subHeading={data?.structureSection?.subHeading ?? ""}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {structure.map((s) => (
                <div
                  key={s.title}
                  className="flex flex-col items-center text-center gap-4 p-7 rounded-[20px] transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "var(--color-bg-default)",
                    border: "1px solid var(--color-border-subtle)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: "rgba(255,176,30,0.1)" }}
                  >
                    <RoleIcon iconKey={s.iconKey} size={30} />
                  </div>
                  <h4
                    className="text-[18px] font-medium"
                    style={{ color: "var(--color-dark)" }}
                  >
                    {s.title}
                  </h4>
                  <p
                    className="text-[15px] leading-[28px]"
                    style={{ color: "var(--color-gray-body)" }}
                  >
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 6 ── HOW IT OPERATES */}
      {steps.length > 0 && (
        <section
          className="section-padding"
          style={{ background: "var(--color-surface)" }}
        >
          <Container>
            <SectionHeading
              label={data?.stepsSection?.eyebrow}
              heading={data?.stepsSection?.heading ?? ""}
            />
            <div className="flex flex-col gap-4">
              {stepRows.map((row, rowIdx) => (
                <div
                  key={rowIdx}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  {row.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-3 p-6 rounded-[20px] transition-all duration-300 hover:-translate-y-1"
                      style={{
                        background: "var(--color-white)",
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
                        {step.num}
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
                  ))}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 7 ── COMPLIANCE & RISK */}
      {data?.compliance && (
        <section className="section-padding bg-white">
          <Container>
            <div className="docs-banner">
              <div className="mb-4">
                <span className="section-eyebrow mb-6 inline-flex">
                  {data.compliance.eyebrow}
                </span>
                <h2
                  className="text-[36px] font-bold leading-[48px] mb-4"
                  style={{ color: "var(--color-white)" }}
                >
                  {data.compliance.heading}
                </h2>
                <p
                  className="text-[16px] leading-[28px] mb-8 max-w-[500px]"
                  style={{ color: "var(--color-hero-body)" }}
                >
                  {data.compliance.text}
                </p>
                <div className="flex flex-wrap gap-3">
                  {(data.compliance.tags ?? []).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium"
                      style={{
                        background: "rgba(255,176,30,0.15)",
                        border: "1px solid var(--color-primary)",
                        color: "var(--color-primary)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="docs-banner-img-wrap">
                {data.compliance.image?.asset?.url ? (
                  <Image
                    src={data.compliance.image.asset.url}
                    alt={data.compliance.image.alt ?? ""}
                    width={340}
                    height={260}
                    className="docs-banner-img"
                  />
                ) : (
                  <Image
                    src="/images/reso.png"
                    alt=""
                    width={340}
                    height={260}
                    className="docs-banner-img"
                  />
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 8 ── GET INVOLVED — dark */}
      {getInvolved.length > 0 && (
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
                    {data?.getInvolvedSection?.eyebrow}
                  </span>
                  <h2 className="distinguishes-title">
                    {data?.getInvolvedSection?.heading}
                  </h2>
                </div>
                <div className="distinguishes-cards">
                  {[getInvolved.slice(0, 3), getInvolved.slice(3, 6)]
                    .filter((r) => r.length > 0)
                    .map((row, rowIdx) => (
                      <div key={rowIdx} className="distinguishes-row">
                        {row.map((g) => (
                          <div key={g.title} className="distinguishes-card">
                            <div
                              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                              style={{ background: "rgba(255,176,30,0.12)" }}
                            >
                              <RoleIcon iconKey={g.iconKey} size={22} />
                            </div>
                            <div className="distinguishes-card-body">
                              <h4 className="distinguishes-card-title">
                                {g.title}
                              </h4>
                              <p className="distinguishes-card-text">
                                {g.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 9 ── FAQ */}
      {faqs.length > 0 && (
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
                <FAQ items={faqs} />
              </div>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
