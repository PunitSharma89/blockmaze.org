import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import AnimatedButton from "@/components/ui/AnimatedButton";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQ from "@/components/ui/FAQ";
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
          <div className="hidden lg:flex flex-shrink-0 items-center justify-center w-[460px]">
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
                src="/images/People_counter_system.png"
                alt="Delegator Platform"
                width={600}
                height={400}
                priority
              />
            )}
          </div>
        </div>
      </section>

      {/* 2 ── WHY DELEGATE — dark */}
      {benefits.length > 0 && (
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
                    {data?.benefitsSection?.eyebrow}
                  </span>
                  <h2 className="distinguishes-title">
                    {data?.benefitsSection?.heading}
                  </h2>
                </div>
                <div className="distinguishes-cards">
                  {[benefits.slice(0, 3), benefits.slice(3)]
                    .filter((r) => r.length > 0)
                    .map((row, ri) => (
                      <div key={ri} className="distinguishes-row">
                        {row.map((b) => (
                          <div key={b.title} className="distinguishes-card">
                            <div
                              className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                              style={{ background: "rgba(255,176,30,0.12)" }}
                            >
                              <Image
                                src={b.iconPath}
                                alt={b.title}
                                width={32}
                                height={32}
                              />
                            </div>
                            <div className="distinguishes-card-body">
                              <h4 className="distinguishes-card-title">
                                {b.title}
                              </h4>
                              <p className="distinguishes-card-text">
                                {b.description}
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

      {/* 3 ── WHAT TO EVALUATE — white, two-column */}
      {data?.evaluateSection && (
        <section className="section-padding bg-white">
          <Container>
            <div className="flex flex-col lg:flex-row items-center gap-[60px]">
              <div className="gap-5">
                {data.evaluateSection.eyebrow && (
                  <span className="section-eyebrow mb-3">
                    {data.evaluateSection.eyebrow}
                  </span>
                )}
                <h2 className="section-heading text-left mb-3">
                  {data.evaluateSection.heading}
                </h2>
                {data.evaluateSection.text && (
                  <p
                    className="text-[16px] leading-[31px] mb-3"
                    style={{ color: "var(--color-gray-body)" }}
                  >
                    {data.evaluateSection.text}
                  </p>
                )}
                {data.evaluateSection.subtext && (
                  <p
                    className="text-[15px] leading-[28px] font-medium mb-3"
                    style={{ color: "var(--color-dark)" }}
                  >
                    {data.evaluateSection.subtext}
                  </p>
                )}
                {(data.evaluateSection.items ?? []).length > 0 && (
                  <ul className="flex flex-col gap-2 mb-3">
                    {(data.evaluateSection.items ?? []).map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-[10px]"
                          style={{ background: "var(--color-primary)" }}
                        />
                        <span
                          className="text-[15px] leading-[28px]"
                          style={{ color: "var(--color-gray-body)" }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {data.evaluateSection.note && (
                  <p
                    className="text-[14px] leading-[24px] italic"
                    style={{ color: "var(--color-gray-body)", opacity: 0.8 }}
                  >
                    {data.evaluateSection.note}
                  </p>
                )}
              </div>
              <div className="hidden lg:flex flex-shrink-0 w-[50%] justify-center">
                {data.evaluateSection.image?.asset?.url ? (
                  <Image
                    src={data.evaluateSection.image.asset.url}
                    alt={data.evaluateSection.image.alt ?? ""}
                    width={500}
                    height={400}
                    className="rounded-2xl"
                  />
                ) : (
                  <Image
                    src="/images/image-40.png"
                    alt="What To Evaluate"
                    width={500}
                    height={400}
                    className="rounded-2xl"
                  />
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 4 ── HOW TO DELEGATE — surface, timeline */}
      {steps.length > 0 && (
        <section
          className="section-padding"
          style={{ background: "var(--color-surface)" }}
        >
          <Container>
            <SectionHeading
              label={data?.stepsSection?.eyebrow}
              heading={data?.stepsSection?.heading ?? ""}
              subtext={data?.stepsSection?.subtext}
            />
            {/* desktop alternating timeline */}
            <div className="relative hidden lg:block mx-auto">
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
                      className="relative flex items-start min-h-[100px] pb-10 last:pb-0"
                    >
                      <div className="pr-10 flex justify-end">
                        {isLeft && (
                          <div
                            className="w-full max-w-[660px] p-6 rounded-[20px] transition-all duration-300 hover:-translate-y-1"
                            style={{
                              background: "var(--color-white)",
                              border: "1px solid var(--color-border-subtle)",
                            }}
                          >
                            <h4
                              className="text-[17px] font-semibold mb-2"
                              style={{ color: "var(--color-dark)" }}
                            >
                              {step.title}
                            </h4>
                            <p
                              className="text-[14px] leading-[26px]"
                              style={{ color: "var(--color-gray-body)" }}
                            >
                              {step.description}
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 top-5 z-10 flex items-center justify-center">
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
                      <div className="pl-10 flex justify-end ms-[auto]">
                        {!isLeft && (
                          <div
                            className="w-full max-w-[660px] p-6 rounded-[20px] transition-all duration-300 hover:-translate-y-1"
                            style={{
                              background: "var(--color-white)",
                              border: "1px solid var(--color-border-subtle)",
                            }}
                          >
                            <h4
                              className="text-[17px] font-semibold mb-2"
                              style={{ color: "var(--color-dark)" }}
                            >
                              {step.title}
                            </h4>
                            <p
                              className="text-[14px] leading-[26px]"
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
            {/* mobile left-aligned timeline */}
            <div className="relative lg:hidden max-w-xl mx-auto">
              <div
                className="absolute left-[21px] top-0 bottom-0 w-[2px]"
                style={{ background: "var(--color-border-subtle)" }}
              />
              <div className="flex flex-col gap-0">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="relative flex items-start gap-5 pb-7 last:pb-0"
                  >
                    <div
                      className="relative z-10 flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-[15px] font-bold"
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
                        className="text-[17px] font-semibold mb-1"
                        style={{ color: "var(--color-dark)" }}
                      >
                        {step.title}
                      </h4>
                      <p
                        className="text-[14px] leading-[26px]"
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

      {/* 5 ── DASHBOARD — white, two-column */}
      {dashboardItems.length > 0 && (
        <section className="section-padding bg-white">
          <Container>
            <div className="flex flex-col lg:flex-row items-center gap-[60px]">
              <div className="hidden lg:flex flex-shrink-0 w-[50%] justify-center">
                {data?.dashboardImage?.asset?.url ? (
                  <Image
                    src={data.dashboardImage.asset.url}
                    alt={data.dashboardImage.alt ?? ""}
                    width={500}
                    height={400}
                    className="rounded-2xl"
                  />
                ) : (
                  <Image
                    src="/images/image-41.png"
                    alt="Delegator Dashboard"
                    width={500}
                    height={400}
                    className="rounded-2xl"
                  />
                )}
              </div>
              <div className="gap-6">
                {data?.dashboardSection?.eyebrow && (
                  <span className="section-eyebrow mb-3">
                    {data.dashboardSection.eyebrow}
                  </span>
                )}
                <h2 className="section-heading text-left mb-3">
                  {data?.dashboardSection?.heading}
                </h2>
                <div className="flex flex-col gap-3">
                  {dashboardItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(255,176,30,0.15)" }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M2.5 7l3 3 6-6"
                            stroke="var(--color-primary)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span
                        className="text-[16px] leading-[28px]"
                        style={{ color: "var(--color-gray-body)" }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 6 ── REWARDS, UNBONDING & RISKS — dark */}
      {(data?.earningCard || data?.unbondingCard || data?.risksCard) && (
        <section className="distinguishes-section pt-[60px]">
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
              <div className="distinguishes-content bg-transparent">
                {(data?.rewardsSection?.eyebrow ||
                  data?.rewardsSection?.heading) && (
                  <div className="distinguishes-heading">
                    <span className="section-eyebrow section-eyebrow--dark">
                      {data.rewardsSection?.eyebrow}
                    </span>
                    <h2 className="distinguishes-title">
                      {data.rewardsSection?.heading}
                    </h2>
                  </div>
                )}

                {/* earning + unbonding row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  {/* Earning */}
                  {data?.earningCard && (
                    <div
                      className="p-6 rounded-[20px]"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                    >
                      {data.earningCard.iconPath && (
                        <Image
                          src={data.earningCard.iconPath}
                          alt=""
                          width={44}
                          height={44}
                          className="mb-4"
                        />
                      )}
                      <h4
                        className="text-[17px] font-semibold mb-3"
                        style={{ color: "var(--color-white)" }}
                      >
                        {data.earningCard.heading}
                      </h4>
                      <p
                        className="text-[14px] leading-[26px] mb-4"
                        style={{ color: "rgba(255,255,255,0.7)" }}
                      >
                        {data.earningCard.text}
                      </p>
                      {(data.earningCard.rewardItems ?? []).length > 0 && (
                        <ul className="flex flex-col gap-1.5 mb-3">
                          {(data.earningCard.rewardItems ?? []).map(
                            (item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span
                                  className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-[9px]"
                                  style={{ background: "var(--color-primary)" }}
                                />
                                <span
                                  className="text-[13px] leading-[24px]"
                                  style={{ color: "rgba(255,255,255,0.65)" }}
                                >
                                  {item}
                                </span>
                              </li>
                            ),
                          )}
                        </ul>
                      )}
                      {data.earningCard.note && (
                        <p
                          className="text-[13px] leading-[22px] italic"
                          style={{ color: "rgba(255,255,255,0.5)" }}
                        >
                          {data.earningCard.note}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Unbonding */}
                  {data?.unbondingCard && (
                    <div
                      className="p-6 rounded-[20px]"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                    >
                      {data.unbondingCard.iconPath && (
                        <Image
                          src={data.unbondingCard.iconPath}
                          alt=""
                          width={44}
                          height={44}
                          className="mb-4"
                        />
                      )}
                      <h4
                        className="text-[17px] font-semibold mb-3"
                        style={{ color: "var(--color-white)" }}
                      >
                        {data.unbondingCard.heading}
                      </h4>
                      <p
                        className="text-[14px] leading-[26px] mb-4"
                        style={{ color: "rgba(255,255,255,0.7)" }}
                      >
                        {data.unbondingCard.text}
                      </p>
                      {(data.unbondingCard.timeline ?? []).length > 0 && (
                        <ul className="flex flex-col gap-1.5 mb-4">
                          {(data.unbondingCard.timeline ?? []).map(
                            (item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span
                                  className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-[9px]"
                                  style={{ background: "var(--color-primary)" }}
                                />
                                <span
                                  className="text-[13px] leading-[24px]"
                                  style={{ color: "rgba(255,255,255,0.65)" }}
                                >
                                  {item}
                                </span>
                              </li>
                            ),
                          )}
                        </ul>
                      )}
                      {data.unbondingCard.text2 && (
                        <p
                          className="text-[13px] leading-[22px] italic"
                          style={{ color: "rgba(255,255,255,0.5)" }}
                        >
                          {data.unbondingCard.text2}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Risks */}
                {data?.risksCard && (
                  <div
                    className="w-full p-6 rounded-[20px]"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    {data.risksCard.iconPath && (
                      <Image
                        src={data.risksCard.iconPath}
                        alt=""
                        width={44}
                        height={44}
                        className="mb-4"
                      />
                    )}
                    <h4
                      className="text-[17px] font-semibold mb-2"
                      style={{ color: "var(--color-white)" }}
                    >
                      {data.risksCard.heading}
                    </h4>
                    {data.risksCard.intro && (
                      <p
                        className="text-[14px] leading-[26px] mb-6"
                        style={{ color: "rgba(255,255,255,0.7)" }}
                      >
                        {data.risksCard.intro}
                      </p>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {(data.risksCard.risks ?? []).map((risk) => (
                        <div key={risk.title}>
                          <h5
                            className="text-[15px] font-semibold mb-2"
                            style={{ color: "var(--color-primary)" }}
                          >
                            {risk.title}
                          </h5>
                          <p
                            className="text-[14px] leading-[26px]"
                            style={{ color: "rgba(255,255,255,0.65)" }}
                          >
                            {risk.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 7 ── CTA */}
      {/* {data?.ctaSection?.buttonText && (
        <section className="section-padding bg-white">
          <Container>
            <div className="flex justify-center">
              <AnimatedButton
                href={data.ctaSection.buttonHref ?? "#"}
                variant="primary"
              >
                {data.ctaSection.buttonText}
              </AnimatedButton>
            </div>
          </Container>
        </section>
      )} */}
    </>
  );
}
