import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import AnimatedButton from "@/components/ui/AnimatedButton";
import SectionHeading from "@/components/ui/SectionHeading";
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

/* ─── STEP CARD ─────────────────────────────────────────────── */

function StepCard({
  step,
}: {
  step: {
    title: string;
    description: string;
    details?: string[];
    note?: string;
  };
}) {
  return (
    <>
      <h4
        className="text-[18px] font-semibold leading-[1.4] mb-2"
        style={{ color: "var(--color-dark)" }}
      >
        {step.title}
      </h4>
      <p
        className="text-[15px] leading-[28px]"
        style={{ color: "var(--color-gray-body)" }}
      >
        {step.description}
      </p>
      {(step.details ?? []).length > 0 && (
        <ul className="flex flex-col gap-1.5 mt-3">
          {(step.details ?? []).map((d, j) => (
            <li key={j} className="flex items-start gap-2">
              <span
                className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-[9px]"
                style={{ background: "var(--color-primary)" }}
              />
              <span
                className="text-[14px] leading-[26px]"
                style={{ color: "var(--color-gray-body)" }}
              >
                {d}
              </span>
            </li>
          ))}
        </ul>
      )}
      {step.note && (
        <p
          className="text-[13px] leading-[22px] italic mt-2"
          style={{ color: "var(--color-gray-body)", opacity: 0.75 }}
        >
          {step.note}
        </p>
      )}
    </>
  );
}

/* ─── ICON MAP ──────────────────────────────────────────────── */

function Icon({ iconKey, size = 24 }: { iconKey: string; size?: number }) {
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

export default async function ValidatorPage() {
  const data = await sanityFetch<ValidatorData>(validatorPageQuery);

  const whoCards = data?.whoCards ?? [];
  const steps = data?.steps ?? [];
  const validationCards = data?.validationCards ?? [];
  const dashboardItems = data?.dashboardItems ?? [];

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
              {data?.hero?.badge && (
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
                    {data.hero.badge}
                  </span>
                </div>
              )}
              <div className="flex flex-col gap-[20px]">
                <h1
                  className="font-bold text-[46px] leading-[62px]"
                  style={{ color: "var(--color-white)" }}
                >
                  {data?.hero?.heading}
                </h1>
                {data?.hero?.subtext && (
                  <p
                    className="text-[16px] leading-[28px]"
                    style={{ color: "var(--color-hero-body)" }}
                  >
                    {data.hero.subtext}
                  </p>
                )}
                {data?.hero?.subtext2 && (
                  <p
                    className="text-[16px] leading-[28px]"
                    style={{ color: "var(--color-hero-body)" }}
                  >
                    {data.hero.subtext2}
                  </p>
                )}
              </div>
            </div>
            {data?.hero?.buttonText && (
              <AnimatedButton
                href={data.hero.buttonHref ?? "#"}
                variant="primary"
              >
                {data.hero.buttonText}
              </AnimatedButton>
            )}
          </div>
          <div className="hidden lg:flex flex-shrink-0 items-center justify-center w-[660px]">
            {data?.hero?.image?.asset?.url ? (
              <Image
                src={data.hero.image.asset.url}
                alt={data.hero.image.alt ?? ""}
                width={600}
                height={400}
                priority
              />
            ) : (
              <Image
                src="/images/validator-banner.png"
                alt="Validator Program"
                width={600}
                height={400}
                priority
              />
            )}
          </div>
        </div>
      </section>

      {/* 2 ── WHO SHOULD USE — white */}
      {whoCards.length > 0 && (
        <section className="section-padding bg-white">
          <Container>
            <SectionHeading
              label={data?.whoSection?.eyebrow}
              heading={data?.whoSection?.heading ?? ""}
            />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              {whoCards.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col items-center gap-4 p-6 rounded-[20px] text-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "var(--color-bg-default)",
                    border: "1px solid var(--color-border-subtle)",
                  }}
                >
                  <Image
                    src={card.imagePath}
                    alt={card.title}
                    width={200}
                    height={150}
                    className="rounded-xl"
                  />
                  <p
                    className="text-[18px] font-medium leading-[1.5]"
                    style={{ color: "var(--color-dark)" }}
                  >
                    {card.title}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 3 ── STEPS — alternating timeline */}
      {steps.length > 0 && (
        <section className="section-padding">
          <Container>
            <SectionHeading
              label={data?.stepsSection?.eyebrow}
              heading={data?.stepsSection?.heading ?? ""}
              subtext={data?.stepsSection?.subtext}
            />

            {/* ── DESKTOP: alternating left / right ── */}
            <div className="mt-12 relative hidden lg:block mx-auto">
              {/* centre spine */}
              <div
                className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px]"
                style={{ background: "var(--color-border-subtle)" }}
              />

              <div className="flex flex-col gap-0">
                {steps.map((step, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <div
                      key={i}
                      className="relative flex items-start min-h-[120px] pb-10 last:pb-0"
                    >
                      {/* left half */}
                      <div className=" pr-10 flex justify-end">
                        {isLeft && (
                          <div
                            className="w-full max-w-[660px] p-6 rounded-[20px] transition-all duration-300 hover:-translate-y-1"
                            style={{
                              background: "var(--color-white)",
                              border: "1px solid var(--color-border-subtle)",
                            }}
                          >
                            <StepCard step={step} />
                          </div>
                        )}
                      </div>

                      {/* centre badge + horizontal connector */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-5 flex items-center justify-center z-10">
                        {/* connector line to card */}
                        <div
                          className="absolute w-8 h-[2px]"
                          style={{
                            background: "var(--color-primary)",
                            [isLeft ? "right" : "left"]: "100%",
                          }}
                        />
                        <div
                          className="w-11 h-11 rounded-full flex items-center justify-center text-[15px] font-bold shadow-lg"
                          style={{
                            background: "var(--color-primary)",
                            color: "var(--color-dark)",
                          }}
                        >
                          {i + 1}
                        </div>
                      </div>

                      {/* right half */}
                      <div className="pl-10 flex justify-end ms-[auto]">
                        {!isLeft && (
                          <div
                            className="w-full max-w-[660px] p-6 rounded-[20px] transition-all duration-300 hover:-translate-y-1"
                            style={{
                              background: "var(--color-white)",
                              border: "1px solid var(--color-border-subtle)",
                            }}
                          >
                            <StepCard step={step} />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── MOBILE: left-aligned timeline ── */}
            <div className="relative lg:hidden max-w-xl mx-auto">
              <div
                className="absolute left-[21px] top-0 bottom-0 w-[2px]"
                style={{ background: "var(--color-border-subtle)" }}
              />
              <div className="flex flex-col gap-0">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="relative flex items-start gap-5 pb-8 last:pb-0"
                  >
                    <div
                      className="relative z-10 flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-[15px] font-bold shadow-md"
                      style={{
                        background: "var(--color-primary)",
                        color: "var(--color-dark)",
                      }}
                    >
                      {i + 1}
                    </div>
                    <div
                      className="flex-1 p-5 rounded-[20px]"
                      style={{
                        background: "var(--color-white)",
                        border: "1px solid var(--color-border-subtle)",
                      }}
                    >
                      <StepCard step={step} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {data?.stepsButton?.text && (
              <div className="flex justify-center mt-12">
                <AnimatedButton
                  href={data.stepsButton.href ?? "#"}
                  variant="primary"
                >
                  {data.stepsButton.text}
                </AnimatedButton>
              </div>
            )}
          </Container>
        </section>
      )}

      {/* 4 ── HOW VALIDATION WORKS — surface */}
      {validationCards.length > 0 && (
        <section
          className="section-padding"
          style={{ background: "var(--color-surface)" }}
        >
          <Container>
            <SectionHeading
              label={data?.validationSection?.eyebrow}
              heading={data?.validationSection?.heading ?? ""}
              subtext={data?.validationSection?.subtext}
            />
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {validationCards.map((card) => (
                <div
                  key={card.title}
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
                    <Icon iconKey={card.iconKey} size={22} />
                  </div>
                  <h4
                    className="text-[18px] font-medium leading-[1.4]"
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

      {/* 5 ── DASHBOARD — white */}
      {dashboardItems.length > 0 && (
        <section className="section-padding bg-white">
          <Container>
            <SectionHeading
              label={data?.dashboardSection?.eyebrow}
              heading={data?.dashboardSection?.heading ?? ""}
            />
            <div className="flex flex-col gap-3 max-w-2xl mx-auto mb-8">
              {dashboardItems.map((item, i) => (
                <div key={i} className="about-card-bullet">
                  <Image
                    src="/images/about-arrow.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <p
                    className="text-[16px] leading-[31px]"
                    style={{ color: "var(--color-gray-body)" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
            {data?.dashboardButton?.text && (
              <div className="flex justify-center">
                <AnimatedButton
                  href={data.dashboardButton.href ?? "#"}
                  variant="primary"
                >
                  {data.dashboardButton.text}
                </AnimatedButton>
              </div>
            )}
            {data?.noteText && (
              <p
                className="text-[14px] leading-[24px] text-center mt-6 max-w-2xl mx-auto"
                style={{ color: "var(--color-gray-body)", fontStyle: "italic" }}
              >
                {data.noteText}
              </p>
            )}
          </Container>
        </section>
      )}
    </>
  );
}
