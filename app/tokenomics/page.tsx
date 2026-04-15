import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
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
  breakdownSection?: { eyebrow?: string; heading?: string; subtext?: string };
  breakdownItems?: { category: string; pct: string; purpose: string }[];
  lockingSection?: { eyebrow?: string; heading?: string; subtext?: string };
  lockingCards?: { title: string; description: string }[];
}

/* ─── PAGE ──────────────────────────────────────────────────── */

export default async function TokenomicsPage() {
  const data = await sanityFetch<TokenomicsData>(tokenomicsPageQuery);

  const utilityCards = data?.utilityCards ?? [];
  const tokenAllocation = data?.tokenAllocation ?? [];
  const lockingCards = data?.lockingCards ?? [];

  const breakdownIcons = [
    /* Founders / genesis — rocket */
    <svg
      key="0"
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 6C22 6 30 10 30 22C30 28 26 34 22 38C18 34 14 28 14 22C14 10 22 6 22 6Z"
        stroke="#ffb01e"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="22" cy="22" r="3" stroke="#ffb01e" strokeWidth="2" />
      <path
        d="M14 28L8 34M30 28L36 34"
        stroke="#ffb01e"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>,
    /* Community — people */
    <svg
      key="1"
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="22" cy="14" r="5" stroke="#ffb01e" strokeWidth="2" />
      <path
        d="M10 36C10 29.4 15.4 24 22 24C28.6 24 34 29.4 34 36"
        stroke="#ffb01e"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="10" cy="16" r="3.5" stroke="#ffb01e" strokeWidth="1.6" />
      <path
        d="M4 32C4 27.6 6.7 24 10 24"
        stroke="#ffb01e"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="34" cy="16" r="3.5" stroke="#ffb01e" strokeWidth="1.6" />
      <path
        d="M40 32C40 27.6 37.3 24 34 24"
        stroke="#ffb01e"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>,
    /* Institution / building */
    <svg
      key="2"
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8"
        y="18"
        width="28"
        height="20"
        rx="2"
        stroke="#ffb01e"
        strokeWidth="2"
      />
      <path
        d="M6 18L22 6L38 18"
        stroke="#ffb01e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="18"
        y="28"
        width="8"
        height="10"
        rx="1"
        stroke="#ffb01e"
        strokeWidth="1.8"
      />
      <rect
        x="12"
        y="22"
        width="5"
        height="5"
        rx="1"
        stroke="#ffb01e"
        strokeWidth="1.6"
      />
      <rect
        x="27"
        y="22"
        width="5"
        height="5"
        rx="1"
        stroke="#ffb01e"
        strokeWidth="1.6"
      />
    </svg>,
    /* Ecosystem / network tree */
    <svg
      key="3"
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="22" cy="8" r="5" stroke="#ffb01e" strokeWidth="2" />
      <circle cx="8" cy="36" r="5" stroke="#ffb01e" strokeWidth="2" />
      <circle cx="36" cy="36" r="5" stroke="#ffb01e" strokeWidth="2" />
      <line x1="22" y1="13" x2="8" y2="31" stroke="#ffb01e" strokeWidth="1.8" />
      <line
        x1="22"
        y1="13"
        x2="36"
        y2="31"
        stroke="#ffb01e"
        strokeWidth="1.8"
      />
      <line
        x1="13"
        y1="36"
        x2="31"
        y2="36"
        stroke="#ffb01e"
        strokeWidth="1.8"
      />
    </svg>,
    /* Shield / validator */
    <svg
      key="4"
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 4L6 10V22C6 31 14 38 22 40C30 38 38 31 38 22V10L22 4Z"
        stroke="#ffb01e"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M15 22L19.5 27L29 17"
        stroke="#ffb01e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
    /* Liquidity / waves */
    <svg
      key="5"
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 18C10 14 14 22 18 18C22 14 26 22 30 18C34 14 38 18 38 18"
        stroke="#ffb01e"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 26C10 22 14 30 18 26C22 22 26 30 30 26C34 22 38 26 38 26"
        stroke="#ffb01e"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="22" cy="10" r="4" stroke="#ffb01e" strokeWidth="1.8" />
      <line
        x1="22"
        y1="14"
        x2="22"
        y2="18"
        stroke="#ffb01e"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>,
    /* Chart / investors */
    <svg
      key="6"
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="6"
        width="36"
        height="28"
        rx="4"
        stroke="#ffb01e"
        strokeWidth="2"
      />
      <line x1="4" y1="14" x2="40" y2="14" stroke="#ffb01e" strokeWidth="1.6" />
      <circle cx="9" cy="10" r="1.5" fill="#ffb01e" />
      <circle cx="14" cy="10" r="1.5" fill="#ffb01e" />
      <path
        d="M10 26L16 20L22 24L32 16"
        stroke="#ffb01e"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="16"
        y1="38"
        x2="28"
        y2="38"
        stroke="#ffb01e"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="22"
        y1="34"
        x2="22"
        y2="38"
        stroke="#ffb01e"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>,
    /* Token / hexagon */
    <svg
      key="7"
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 4L36 12V28L22 36L8 28V12L22 4Z"
        stroke="#ffb01e"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M18 20H26M18 24H26"
        stroke="#ffb01e"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M20 17V27M24 17V27"
        stroke="#ffb01e"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>,
  ];

  return (
    <>
      {/* 1 ── HERO */}
      <section className="about-hero-section">
        <div className="about-hero-wrap">
          <div className="about-hero-text">
            {data?.hero?.badge && (
              <div className="hero-chip-v2">
                <span className="hero-chip-dot" />
                <span className="hero-chip-label">{data.hero.badge}</span>
              </div>
            )}
            <div className="about-hero-textblock">
              {data?.hero?.subheading && (
                <h1 className="about-hero-h1">{data.hero.subheading}</h1>
              )}
              {data?.hero?.bodyText && (
                <p className="about-hero-p">{data.hero.bodyText}</p>
              )}
            </div>
            <div className="hero-figma-btns">
              {data?.hero?.button1Text && (
                <Link href={data.hero.button1Href ?? "#"} className="hero-figma-btn-primary">
                  {data.hero.button1Text}
                </Link>
              )}
              {data?.hero?.button2Text && (
                <Link href={data.hero.button2Href ?? "#"} className="hero-figma-btn-white">
                  {data.hero.button2Text}
                </Link>
              )}
            </div>
          </div>
          <div className="about-hero-img-col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/about-hero.svg" alt="Blockmaze Tokenomics" className="about-hero-img" />
          </div>
        </div>
      </section>

      {/* 2 ── CORE TOKEN UTILITY */}
      {utilityCards.length > 0 && (
        <section className="section-padding rfp-elig-section">
          <Container>
            <SectionHeading
              label={data?.utilitySection?.eyebrow}
              heading={data?.utilitySection?.heading ?? ""}
              subtext={data?.utilitySection?.subtext}
            />
            <div className="tokenomics-elig-grid section-content-gap">
              {utilityCards.map((card, idx) => (
                <div
                  key={card.title}
                  className={`rfp-elig-card ${idx % 2 === 0 ? "rfp-elig-card--blue" : "rfp-elig-card--warm"}`}
                >
                  <h3 className="rfp-elig-card-heading">{card.title}</h3>
                  <div className="rfp-elig-items">
                    {card.description && (
                      <div className="rfp-elig-item">
                        <Image
                          src="/images/about-arrow.svg"
                          alt=""
                          width={24}
                          height={24}
                          className="rfp-elig-item-icon"
                        />
                        <p className="rfp-elig-item-text">{card.description}</p>
                      </div>
                    )}
                    {(card.bullets ?? []).map((b, i) => (
                      <div key={i} className="rfp-elig-item">
                        <Image
                          src="/images/about-arrow.svg"
                          alt=""
                          width={24}
                          height={24}
                          className="rfp-elig-item-icon"
                        />
                        <p className="rfp-elig-item-text">{b}</p>
                      </div>
                    ))}
                  </div>
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
            <div className="flex justify-center mt-10 role-tabs-card">
              {data?.allocationChartImage?.asset?.url ? (
                <Image
                  src={data.allocationChartImage.asset.url}
                  alt={data.allocationChartImage.alt ?? ""}
                  width={800}
                  height={500}
                  className="rounded-2xl w-100 h-auto"
                />
              ) : (
                <Image
                  src="/images/token-allocation.png"
                  alt="Token Allocation Chart"
                  width={800}
                  height={500}
                  className="rounded-2xl w-100 h-auto"
                />
              )}
            </div>
          </Container>
        </section>
      )}
      {(data?.breakdownItems ?? []).length > 0 && (
        <section className="section-padding bg-white">
          <Container>
            <SectionHeading
              label={data?.breakdownSection?.eyebrow}
              heading={
                data?.breakdownSection?.heading ??
                "Token Allocation Breakdown & Purpose"
              }
              subtext={data?.breakdownSection?.subtext}
            />
            <div className="breakdown-eco-grid">
              {(data?.breakdownItems ?? []).map((item, idx) => (
                <div key={idx} className="eco-card">
                  <div className="eco-card-icon">
                    {breakdownIcons[idx % breakdownIcons.length]}
                  </div>
                  <h4 className="eco-card-title">
                    {item.category}{" "}
                    <span style={{ color: "var(--color-primary)" }}>
                      {item.pct}
                    </span>
                  </h4>
                  <p className="eco-card-desc">{item.purpose}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 5 ── LOCKING & VESTING — white */}
      {lockingCards.length > 0 && (
        <section className="section-padding rfp-howit-section">
          <Container>
            <SectionHeading
              label={data?.lockingSection?.eyebrow}
              heading={data?.lockingSection?.heading ?? ""}
              subtext={data?.lockingSection?.subtext}
            />
            <div className="locking-howit-grid section-content-gap">
              {lockingCards.map((card, idx) => (
                <div key={card.title} className="rfp-howit-card">
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
    </>
  );
}
