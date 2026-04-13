import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import AnimatedButton from "@/components/ui/AnimatedButton";
import SectionHeading from "@/components/ui/SectionHeading";
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
                src="/images/bmz_banner.png"
                alt="BMZ Swap Platform"
                width={600}
                height={400}
                priority
              />
            )}
          </div>
        </div>
      </section>

      {/* 2 ── STEPS — alternating timeline */}
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

            {/* ── DESKTOP: alternating left / right ── */}
            <div className="relative hidden lg:block mx-auto">
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
                      <div className="w-1/2 pr-10 flex justify-end">
                        {isLeft && (
                          <div
                            className="w-full max-w-[660px] p-6 rounded-[20px] transition-all duration-300 hover:-translate-y-1"
                            style={{
                              background: "var(--color-white)",
                              border: "1px solid var(--color-border-subtle)",
                            }}
                          >
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
                          </div>
                        )}
                      </div>

                      {/* centre badge + connector */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-5 flex items-center justify-center z-10">
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
                      <div className="w-1/2 pl-10 flex justify-start">
                        {!isLeft && (
                          <div
                            className="w-full max-w-[660px] p-6 rounded-[20px] transition-all duration-300 hover:-translate-y-1"
                            style={{
                              background: "var(--color-white)",
                              border: "1px solid var(--color-border-subtle)",
                            }}
                          >
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

      {/* 3 ── GOVERNANCE — dark */}
      {data?.governanceSection && (
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
              <div className="p-[60px] flex flex-row items-center gap-[60px]">
                <div className="mb-3">
                  {data.governanceSection.eyebrow && (
                    <span className="section-eyebrow section-eyebrow--dark mb-3">
                      {data.governanceSection.eyebrow}
                    </span>
                  )}
                  <h2 className="distinguishes-title">
                    {data.governanceSection.heading}
                  </h2>
                  {data.governanceSection.text && (
                    <p className="distinguishes-subtext">
                      {data.governanceSection.text}
                    </p>
                  )}
                  {data.governanceSection.text2 && (
                    <p className="distinguishes-subtext">
                      {data.governanceSection.text2}
                    </p>
                  )}
                </div>
                <div className="hidden lg:flex flex-shrink-0 justify-center w-[460px]">
                  {data.governanceSection.image?.asset?.url ? (
                    <Image
                      src={data.governanceSection.image.asset.url}
                      alt={data.governanceSection.image.alt ?? ""}
                      width={500}
                      height={380}
                    />
                  ) : (
                    <Image
                      src="/images/Design.png"
                      alt="Quadratic Voting"
                      width={500}
                      height={380}
                    />
                  )}
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 4 ── LOCK-IN — surface */}
      {data?.lockInSection?.text && (
        <section
          className="section-padding"
          style={{ background: "var(--color-surface)" }}
        >
          <Container>
            <SectionHeading
              label={data.lockInSection.eyebrow}
              heading={data.lockInSection.heading ?? ""}
            />
            <p
              className="text-[16px] leading-[31px] text-center max-w-3xl mx-auto"
              style={{ color: "var(--color-gray-body)" }}
            >
              {data.lockInSection.text}
            </p>
          </Container>
        </section>
      )}

      {/* 5 ── CTA — dark */}
    </>
  );
}
