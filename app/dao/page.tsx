import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import AnimatedButton from "@/components/ui/AnimatedButton";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQ from "@/components/ui/FAQ";
import { sanityFetch } from "@/lib/sanity";
import { daoPageQuery } from "@/lib/queries";

export const metadata: Metadata = {
  title: "DAO Governance Platform | Quadratic Voting for RWAs",
  description:
    "Participate in DAO governance using quadratic voting to approve RWA tokenization, treasury allocation, and regulated blockchain decisions.",
};

/* ─── TYPES ─────────────────────────────────────────────────── */

interface DaoData {
  hero?: {
    badge?: string;
    heading?: string;
    subtext?: string;
    subtext2?: string;
    buttonText?: string;
    buttonHref?: string;
    secondButtonText?: string;
    secondButtonHref?: string;
    image?: { asset?: { url: string }; alt?: string };
  };
  aboutSection?: { eyebrow?: string; heading?: string };
  aboutText?: string;
  aboutButton?: { text?: string; href?: string };
  aboutCardsSection?: { eyebrow?: string; heading?: string };
  aboutCards?: { title: string; description: string }[];
  aboutCardsButton?: { text?: string; href?: string };
  marqueeItems?: string[];
  stepsSection?: { eyebrow?: string; heading?: string; subtext?: string };
  steps?: { iconPath: string; title: string; description: string }[];
  eligibilitySection?: { eyebrow?: string; heading?: string; subtext?: string };
  eligibilityItems?: string[];
  mechanismsSection?: { eyebrow?: string; heading?: string; subtext?: string };
  mechanisms?: { iconPath: string; title: string; description: string }[];
  faqSection?: { eyebrow?: string; heading?: string };
  faqs?: { question: string; answer: string }[];
}

/* ─── PAGE ──────────────────────────────────────────────────── */

export default async function DAOPage() {
  const data = await sanityFetch<DaoData>(daoPageQuery);

  const aboutCards = data?.aboutCards ?? [];
  const marqueeItems = data?.marqueeItems ?? [];
  const steps = data?.steps ?? [];
  const eligibilityItems = data?.eligibilityItems ?? [];
  const mechanisms = data?.mechanisms ?? [];
  const faqs = data?.faqs ?? [];

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

        <div className="mx-auto w-[100%] lg:w-[80%] max-w-[1440px] py-20 relative z-10 flex flex-col lg:flex-row items-center gap-[60px]">
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
                    className="text-[18px] font-medium leading-[28px]"
                    style={{ color: "var(--color-primary)" }}
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
            <div className="flex flex-wrap gap-[20px]">
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
                src="/images/dao-banner-1.png"
                alt="Blockmaze DAO"
                width={600}
                height={400}
                priority
              />
            )}
          </div>
        </div>
      </section>

      {/* 2 ── ABOUT — white */}
      {(data?.aboutText || data?.aboutButton?.text) && (
        <section className="section-padding bg-white">
          <Container>
            <div className="flex flex-col gap-6 items-center text-center w-full">
              {data?.aboutSection?.eyebrow && (
                <span className="section-eyebrow">
                  {data.aboutSection.eyebrow}
                </span>
              )}
              {data?.aboutSection?.heading && (
                <h2 className="section-heading">{data.aboutSection.heading}</h2>
              )}
              {data?.aboutText && (
                <p className="section-subtext">{data.aboutText}</p>
              )}
              {data?.aboutButton?.text && (
                <AnimatedButton
                  href={data.aboutButton.href ?? "#"}
                  variant="primary"
                >
                  {data.aboutButton.text}
                </AnimatedButton>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* 3 ── ABOUT CARDS — surface */}
      {aboutCards.length > 0 && (
        <section
          className="section-padding"
          style={{ background: "var(--color-surface)" }}
        >
          <Container>
            <SectionHeading
              label={data?.aboutCardsSection?.eyebrow}
              heading={data?.aboutCardsSection?.heading ?? ""}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {aboutCards.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col gap-3 p-6 rounded-[20px] transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "var(--color-white)",
                    border: "1px solid var(--color-border-subtle)",
                  }}
                >
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
            {data?.aboutCardsButton?.text && (
              <div className="flex justify-center mt-8">
                <AnimatedButton
                  href={data.aboutCardsButton.href ?? "#"}
                  variant="primary"
                >
                  {data.aboutCardsButton.text}
                </AnimatedButton>
              </div>
            )}
          </Container>
        </section>
      )}

      {/* 4 ── MARQUEE */}
      {marqueeItems.length > 0 && (
        <div
          className="overflow-hidden py-5"
          style={{
            background: "var(--color-primary)",
          }}
        >
          <div
            className="flex gap-10 whitespace-nowrap"
            style={{
              animation: "marquee 20s linear infinite",
            }}
          >
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
              (item, i) => (
                <span
                  key={i}
                  className="text-[15px] font-semibold tracking-wide"
                  style={{ color: "var(--color-dark)" }}
                >
                  {item} <span className="mx-3 opacity-50">—</span>
                </span>
              ),
            )}
          </div>
          <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }`}</style>
        </div>
      )}

      {/* 5 ── HOW GOVERNANCE WORKS — white */}
      {steps.length > 0 && (
        <section className="section-padding bg-white">
          <Container>
            <SectionHeading
              label={data?.stepsSection?.eyebrow}
              heading={data?.stepsSection?.heading ?? ""}
              subtext={data?.stepsSection?.subtext}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className="flex flex-col gap-4 p-6 rounded-[20px] transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "var(--color-bg-default)",
                    border: "1px solid var(--color-border-subtle)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,176,30,0.1)" }}
                  >
                    <Image
                      src={step.iconPath}
                      alt={step.title}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4
                      className="text-[18px] font-medium leading-[1.4]"
                      style={{ color: "var(--color-dark)" }}
                    >
                      Step {i + 1}: {step.title}
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
          </Container>
        </section>
      )}

      {/* 6 ── VOTING ELIGIBILITY — surface */}
      {eligibilityItems.length > 0 && (
        <section
          className="section-padding"
          style={{ background: "var(--color-surface)" }}
        >
          <Container>
            <SectionHeading
              label={data?.eligibilitySection?.eyebrow}
              heading={data?.eligibilitySection?.heading ?? ""}
              subtext={data?.eligibilitySection?.subtext}
            />
            <div className="flex flex-col gap-3 max-w-2xl mx-auto">
              {eligibilityItems.map((item, i) => (
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
          </Container>
        </section>
      )}

      {/* 7 ── CORE GOVERNANCE MECHANISMS — white */}
      {mechanisms.length > 0 && (
        <section className="section-padding bg-white">
          <Container>
            <SectionHeading
              label={data?.mechanismsSection?.eyebrow}
              heading={data?.mechanismsSection?.heading ?? ""}
              subtext={data?.mechanismsSection?.subtext}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mechanisms.map((m) => (
                <div
                  key={m.title}
                  className="flex flex-col gap-3 p-6 rounded-[20px] transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "var(--color-bg-default)",
                    border: "1px solid var(--color-border-subtle)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,176,30,0.1)" }}
                  >
                    <Image
                      src={m.iconPath}
                      alt={m.title}
                      width={32}
                      height={32}
                    />
                  </div>
                  <h4
                    className="text-[18px] font-semibold"
                    style={{ color: "var(--color-dark)" }}
                  >
                    {m.title}
                  </h4>
                  <p
                    className="text-[15px] leading-[28px]"
                    style={{ color: "var(--color-gray-body)" }}
                  >
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 8 ── FAQ — white */}
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
