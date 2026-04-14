import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import AnimatedButton from "@/components/ui/AnimatedButton";
import SectionHeading from "@/components/ui/SectionHeading";
import { sanityFetch } from "@/lib/sanity";
import { tokenomicsPageQuery } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Tokenomics - Blockmaze Foundation",
  description:
    "Blockmaze tokenomics model designed to align network security, governance participation, and long-term ecosystem sustainability.",
};

/* ─── TYPES ─────────────────────────────────────────────────── */

interface TokenomicsData {
  hero?: {
    badge?: string;
    heading?: string;
    subheading?: string;
    bodyText?: string;
    button1Text?: string;
    button1Href?: string;
    button2Text?: string;
    button2Href?: string;
    image?: { asset?: { url: string }; alt?: string };
  };
  utilitySection?: { eyebrow?: string; heading?: string; subtext?: string };
  utilityCards?: { title: string; description: string; bullets?: string[] }[];
  allocationSection?: { eyebrow?: string; heading?: string; subtext?: string };
  tableHeaders?: {
    category?: string;
    pct?: string;
    tokens?: string;
    locking?: string;
    vesting?: string;
  };
  tokenAllocation?: {
    category: string;
    pct: string;
    tokens: string;
    locking: string;
    vesting: string;
  }[];
  allocationChartImage?: { asset?: { url: string }; alt?: string };
  lockingSection?: { eyebrow?: string; heading?: string; subtext?: string };
  lockingCards?: { title: string; description: string }[];
}

/* ─── PAGE ──────────────────────────────────────────────────── */

export default async function TokenomicsPage() {
  const data = await sanityFetch<TokenomicsData>(tokenomicsPageQuery);

  const utilityCards = data?.utilityCards ?? [];
  const tokenAllocation = data?.tokenAllocation ?? [];
  const lockingCards = data?.lockingCards ?? [];

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
              <div className="flex flex-col gap-[16px]">
                <h1
                  className="font-bold text-[46px] leading-[62px]"
                  style={{ color: "var(--color-white)" }}
                >
                  {data?.hero?.heading}
                </h1>
                {data?.hero?.subheading && (
                  <h2
                    className="text-[22px] font-medium leading-[34px]"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {data.hero.subheading}
                  </h2>
                )}
                {data?.hero?.bodyText && (
                  <p
                    className="text-[16px] leading-[28px]"
                    style={{ color: "var(--color-hero-body)" }}
                  >
                    {data.hero.bodyText}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-[16px]">
              {data?.hero?.button1Text && (
                <AnimatedButton
                  href={data.hero.button1Href ?? "#"}
                  variant="primary"
                >
                  {data.hero.button1Text}
                </AnimatedButton>
              )}
              {data?.hero?.button2Text && (
                <AnimatedButton
                  href={data.hero.button2Href ?? "#"}
                  variant="white"
                >
                  {data.hero.button2Text}
                </AnimatedButton>
              )}
            </div>
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
                src="/images/tokenomics-img.png"
                alt="Blockmaze Tokenomics"
                width={600}
                height={400}
                priority
              />
            )}
          </div>
        </div>
      </section>

      {/* 2 ── CORE TOKEN UTILITY — surface */}
      {utilityCards.length > 0 && (
        <section
          className="section-padding"
          style={{ background: "var(--color-surface)" }}
        >
          <Container>
            <SectionHeading
              label={data?.utilitySection?.eyebrow}
              heading={data?.utilitySection?.heading ?? ""}
              subtext={data?.utilitySection?.subtext}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {utilityCards.map((card) => (
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
                  {(card.bullets ?? []).length > 0 && (
                    <ul className="flex flex-col gap-1.5 mt-1">
                      {(card.bullets ?? []).map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span
                            className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-[9px]"
                            style={{ background: "var(--color-primary)" }}
                          />
                          <span
                            className="text-[14px] leading-[26px]"
                            style={{ color: "var(--color-gray-body)" }}
                          >
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 3 ── TOKEN ALLOCATION — light */}
      {tokenAllocation.length > 0 && (
        <section className="section-padding bg-white">
          <Container>
            <SectionHeading
              label={data?.allocationSection?.eyebrow}
              heading={data?.allocationSection?.heading ?? ""}
              subtext={data?.allocationSection?.subtext}
            />
            <div
              className="w-full overflow-x-auto rounded-[20px]"
              style={{ border: "1px solid var(--color-border-subtle)" }}
            >
              <table className="w-full text-sm">
                <thead>
                  <tr
                    style={{
                      background: "rgba(255,176,30,0.06)",
                      borderBottom: "1px solid var(--color-border-subtle)",
                    }}
                  >
                    {[
                      data?.tableHeaders?.category,
                      data?.tableHeaders?.pct,
                      data?.tableHeaders?.tokens,
                      data?.tableHeaders?.locking,
                      data?.tableHeaders?.vesting,
                    ].map((h, i) => (
                      <th
                        key={i}
                        className="text-left py-4 px-5 text-[13px] font-semibold whitespace-nowrap"
                        style={{ color: "var(--color-dark)" }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tokenAllocation.map((row, i) => (
                    <tr
                      key={i}
                      className="transition-colors"
                      style={{
                        borderBottom:
                          i < tokenAllocation.length - 1
                            ? "1px solid var(--color-border-subtle)"
                            : "none",
                        background:
                          i % 2 === 1
                            ? "var(--color-surface)"
                            : "var(--color-white)",
                      }}
                    >
                      <td
                        className="py-3 px-5 text-[13px] leading-[22px] font-medium"
                        style={{ color: "var(--color-dark)" }}
                      >
                        {row.category}
                      </td>
                      <td
                        className="py-3 px-5 text-[13px] font-bold whitespace-nowrap"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {row.pct}
                      </td>
                      <td
                        className="py-3 px-5 text-[13px] whitespace-nowrap"
                        style={{ color: "var(--color-gray-body)" }}
                      >
                        {row.tokens}
                      </td>
                      <td
                        className="py-3 px-5 text-[13px] whitespace-nowrap"
                        style={{ color: "var(--color-gray-body)" }}
                      >
                        {row.locking}
                      </td>
                      <td
                        className="py-3 px-5 text-[13px] whitespace-nowrap"
                        style={{ color: "var(--color-gray-body)" }}
                      >
                        {row.vesting}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center mt-10">
              {data?.allocationChartImage?.asset?.url ? (
                <Image
                  src={data.allocationChartImage.asset.url}
                  alt={data.allocationChartImage.alt ?? ""}
                  width={800}
                  height={500}
                  className="rounded-2xl"
                />
              ) : (
                <Image
                  src="/images/token-allocation.png"
                  alt="Token Allocation Chart"
                  width={800}
                  height={500}
                  className="rounded-2xl"
                />
              )}
            </div>
          </Container>
        </section>
      )}

      {/* 4 ── LOCKING & VESTING — white */}
      {lockingCards.length > 0 && (
        <section className="section-padding bg-white">
          <Container>
            <SectionHeading
              label={data?.lockingSection?.eyebrow}
              heading={data?.lockingSection?.heading ?? ""}
              subtext={data?.lockingSection?.subtext}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lockingCards.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col gap-3 p-6 rounded-[20px] transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "var(--color-bg-default)",
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
                      <rect x="3" y="9" width="14" height="10" rx="2" />
                      <path d="M6 9V6a4 4 0 0 1 8 0v3" />
                      <circle cx="10" cy="14" r="1.2" />
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
    </>
  );
}
