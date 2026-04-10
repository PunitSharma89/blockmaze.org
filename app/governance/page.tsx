import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import GovernanceFAQ from "@/components/ui/GovernanceFAQ";
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
    image?: SanityImage;
  };
  about?: { heading?: string; text?: string };
  roles?: { iconKey: string; title: string; description: string }[];
  scopeItems?: { iconKey: string; title: string; description: string }[];
  structure?: { iconKey: string; title: string; description: string }[];
  steps?: { num: string; title: string; description: string }[];
  compliance?: {
    heading?: string;
    text?: string;
    tags?: string[];
    image?: SanityImage;
  };
  getInvolved?: { iconKey: string; title: string; description: string }[];
  faqs?: { question: string; answer: string }[];
}

/* ─── ICON MAP ──────────────────────────────────────────────── */

function RoleIcon({ iconKey, size = 28 }: { iconKey: string; size?: number }) {
  const s = size;
  const sw = "1.6";
  switch (iconKey) {
    case "shield":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 28 28"
          fill="none"
          stroke="#2EA3F2"
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
          stroke="#2EA3F2"
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
          stroke="#2EA3F2"
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
          stroke="#2EA3F2"
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
          stroke="#2EA3F2"
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
          stroke="#2EA3F2"
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
          stroke="#2EA3F2"
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
          stroke="#2EA3F2"
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
          stroke="#2EA3F2"
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
          stroke="#2EA3F2"
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
          stroke="#2EA3F2"
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
          stroke="#2EA3F2"
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="14" cy="14" r="10" />
        </svg>
      );
  }
}

function ScopeIcon({ iconKey }: { iconKey: string }) {
  const sw = "1.6";
  switch (iconKey) {
    case "shield":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          stroke="#facc15"
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 2l7 4v6c0 4.5-3 8-7 9.5C7 20 4 16.5 4 12V6l7-4z" />
        </svg>
      );
    case "network":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          stroke="#facc15"
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="7" r="3" />
          <path d="M5 19c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <path d="M16 10l2 2 4-4" />
        </svg>
      );
    case "document":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          stroke="#facc15"
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="5" width="16" height="12" rx="2" />
          <path d="M7 9h8M7 13h5" />
        </svg>
      );
    case "lock":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          stroke="#facc15"
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="9" width="16" height="10" rx="2" />
          <path d="M7 9V6a4 4 0 0 1 8 0v3" />
          <circle cx="11" cy="14" r="1.5" />
        </svg>
      );
    case "chart":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          stroke="#facc15"
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 17l4-8 3 3 3-6 4 11" />
        </svg>
      );
    case "clock":
    default:
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          stroke="#facc15"
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M11 7v4l3 3" />
        </svg>
      );
  }
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center border border-[#d1d5db] text-[#555] text-[11px] font-semibold uppercase tracking-[0.12em] px-4 py-1.5 rounded-full mb-5">
      {children}
    </span>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────── */

export default async function GovernancePage() {
  const data = await sanityFetch<GovernanceData>(governancePageQuery);

  const hero = data?.hero;
  const about = data?.about;
  const roles = data?.roles ?? [];
  const scopeItems = data?.scopeItems ?? [];
  const structure = data?.structure ?? [];
  const steps = data?.steps ?? [];
  const compliance = data?.compliance;
  const getInvolved = data?.getInvolved ?? [];
  const faqs = data?.faqs ?? [];

  const stepsLeft = steps.slice(0, 3);
  const stepsRight = steps.slice(3, 6);

  return (
    <div className="bg-white">
      <Container>
        <Breadcrumb items={[{ label: "Governance" }]} />
      </Container>

      {/* 1 ── HERO */}
      {hero && (
        <section className="py-10 bg-white">
          <Container>
            <div
              className="rounded-[32px] overflow-hidden"
              style={{ background: "#f5f5f5", border: "1px solid #e5e5e5" }}
            >
              <div className="text-center px-6 md:px-16 pt-14 pb-10">
                {hero.badge && (
                  <div className="flex justify-center mb-5">
                    <Badge>{hero.badge}</Badge>
                  </div>
                )}
                {hero.heading && (
                  <h1 className="text-3xl md:text-[44px] font-bold text-[#0f0f0f] leading-[1.2] mb-5">
                    {hero.heading.split("\n").map((line, i, arr) => (
                      <span key={i}>
                        {line}
                        {i < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </h1>
                )}
                {hero.subtext && (
                  <p className="text-[#555] text-[15px] leading-relaxed mb-8 max-w-[520px] mx-auto">
                    {hero.subtext}
                  </p>
                )}
                {hero.buttonText && (
                  <Link
                    href={hero.buttonHref ?? "/contact-us"}
                    className="inline-flex items-center gap-2 bg-[#0f0f0f] text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-[#333] transition-colors duration-200 text-[15px]"
                  >
                    {hero.buttonText}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                )}
              </div>
              <div className="flex justify-center">
                {hero.image?.asset?.url ? (
                  <Image
                    src={hero.image.asset.url}
                    alt={hero.image.alt ?? "Governance"}
                    width={480}
                    height={280}
                    className="max-w-full"
                  />
                ) : (
                  <svg
                    width="480"
                    height="280"
                    viewBox="0 0 480 280"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="240"
                      cy="230"
                      rx="190"
                      ry="40"
                      stroke="#ccc"
                      strokeWidth="1"
                      strokeDasharray="5 4"
                      fill="none"
                    />
                    <ellipse
                      cx="240"
                      cy="230"
                      rx="140"
                      ry="28"
                      stroke="#ddd"
                      strokeWidth="1"
                      strokeDasharray="4 3"
                      fill="none"
                    />
                    <rect
                      x="155"
                      y="90"
                      width="130"
                      height="130"
                      rx="6"
                      fill="#e8ecf8"
                      stroke="#c4cce8"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M145 93 L220 45 L295 93"
                      fill="#dde3f5"
                      stroke="#c4cce8"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="170"
                      y="108"
                      width="28"
                      height="24"
                      rx="3"
                      fill="#c4cce8"
                      opacity="0.8"
                    />
                    <rect
                      x="206"
                      y="108"
                      width="28"
                      height="24"
                      rx="3"
                      fill="#c4cce8"
                      opacity="0.8"
                    />
                    <rect
                      x="242"
                      y="108"
                      width="28"
                      height="24"
                      rx="3"
                      fill="#c4cce8"
                      opacity="0.8"
                    />
                    <rect
                      x="170"
                      y="142"
                      width="28"
                      height="24"
                      rx="3"
                      fill="#c4cce8"
                      opacity="0.8"
                    />
                    <rect
                      x="206"
                      y="142"
                      width="28"
                      height="24"
                      rx="3"
                      fill="#c4cce8"
                      opacity="0.8"
                    />
                    <rect
                      x="242"
                      y="142"
                      width="28"
                      height="24"
                      rx="3"
                      fill="#c4cce8"
                      opacity="0.8"
                    />
                    <rect
                      x="206"
                      y="178"
                      width="32"
                      height="42"
                      rx="3"
                      fill="#b0bbdd"
                    />
                    <circle cx="295" cy="72" r="28" fill="#fef9c3" />
                    <path
                      d="M295 55 l12 6v8c0 8-5 13-12 15-7-2-12-7-12-15V61z"
                      fill="#fde68a"
                      stroke="#f59e0b"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M289 71 l4 4 8-9"
                      stroke="#d97706"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="95"
                      y="118"
                      width="42"
                      height="54"
                      rx="5"
                      fill="#e8ecf8"
                      stroke="#c4cce8"
                      strokeWidth="1.5"
                    />
                    <circle cx="107" cy="132" r="4" fill="#c4cce8" />
                    <path
                      d="M115 132h14M103 144h22M103 154h16"
                      stroke="#c4cce8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="68"
                      cy="218"
                      r="16"
                      fill="#facc15"
                      stroke="#1a1a1a"
                      strokeWidth="1.2"
                    />
                    <circle
                      cx="68"
                      cy="218"
                      r="10"
                      fill="#fde68a"
                      stroke="#1a1a1a"
                      strokeWidth="1"
                    />
                    <circle
                      cx="400"
                      cy="228"
                      r="13"
                      fill="#facc15"
                      stroke="#1a1a1a"
                      strokeWidth="1.2"
                    />
                    <circle
                      cx="400"
                      cy="228"
                      r="8"
                      fill="#fde68a"
                      stroke="#1a1a1a"
                      strokeWidth="1"
                    />
                  </svg>
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 2 ── ABOUT */}
      {about && (
        <section className="py-16 bg-white border-t border-[#f0f0f0]">
          <Container>
            <div className="max-w-[700px] mx-auto text-center">
              <Badge>Overview</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-5">
                {about.heading}
              </h2>
              <p className="text-[#555] leading-relaxed text-[15px]">
                {about.text}
              </p>
            </div>
          </Container>
        </section>
      )}

      {/* 3 ── ROLE CARDS */}
      {roles.length > 0 && (
        <section className="py-16 bg-[#f8fafc] border-t border-[#f0f0f0]">
          <Container>
            <div className="text-center mb-12">
              <Badge>Responsibilities</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                Role Within the Governance Framework
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {roles.map((r) => (
                <div
                  key={r.title}
                  className="bg-white border border-[#e5e7eb] rounded-2xl p-7 hover:border-primary hover:shadow-md transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#eff6ff] flex items-center justify-center mb-5">
                    <RoleIcon iconKey={r.iconKey} />
                  </div>
                  <h3 className="font-bold text-[#1a1a1a] text-[15px] mb-2">
                    {r.title}
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed">
                    {r.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}
      {/* 4 ── GOVERNANCE SCOPE */}
      {scopeItems.length > 0 && (
        <section className="py-16 bg-[#1e2433]">
          <Container>
            <div className="text-center mb-12">
              <span className="inline-flex items-center border border-[#facc15]/40 text-[#facc15] text-[11px] font-semibold uppercase tracking-[0.12em] px-4 py-1.5 rounded-full mb-5">
                Scope
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Governance Scope
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {scopeItems.map((s) => (
                <div
                  key={s.title}
                  className="bg-[#262d3d] border border-[#2e3750] rounded-2xl p-6 hover:border-[#facc15]/50 transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#facc15]/10 flex items-center justify-center mb-4">
                    <ScopeIcon iconKey={s.iconKey} />
                  </div>
                  <h3 className="font-bold text-white text-[14px] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[#8b95a9] text-sm leading-relaxed">
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
        <section className="py-16 bg-white border-t border-[#f0f0f0]">
          <Container>
            <div className="text-center mb-12">
              <Badge>Structure</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                Governance Structure
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {structure.map((s) => (
                <div
                  key={s.title}
                  className="bg-[#f8fafc] border border-[#e5e7eb] rounded-2xl p-7 text-center hover:border-primary hover:shadow-md transition-all duration-200"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#eff6ff] flex items-center justify-center mx-auto mb-5">
                    <RoleIcon iconKey={s.iconKey} size={32} />
                  </div>
                  <h3 className="font-bold text-[#1a1a1a] text-[15px] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed">
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
        <section className="py-16 bg-[#f8fafc] border-t border-[#f0f0f0]">
          <Container>
            <div className="text-center mb-12">
              <Badge>Process</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                How the Governance Council Operates
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 max-w-4xl mx-auto">
              <div>
                {stepsLeft.map((s, i) => (
                  <div
                    key={s.num}
                    className={`flex gap-5 py-7 ${i < stepsLeft.length - 1 ? "border-b border-[#e5e7eb]" : ""}`}
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1a1a1a] text-white text-sm font-bold flex items-center justify-center">
                      {s.num}
                    </span>
                    <div>
                      <h3 className="font-bold text-[#1a1a1a] text-[15px] mb-1">
                        {s.title}
                      </h3>
                      <p className="text-[#666] text-sm leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                {stepsRight.map((s, i) => (
                  <div
                    key={s.num}
                    className={`flex gap-5 py-7 ${i < stepsRight.length - 1 ? "border-b border-[#e5e7eb]" : ""}`}
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1a1a1a] text-white text-sm font-bold flex items-center justify-center">
                      {s.num}
                    </span>
                    <div>
                      <h3 className="font-bold text-[#1a1a1a] text-[15px] mb-1">
                        {s.title}
                      </h3>
                      <p className="text-[#666] text-sm leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 7 ── COMPLIANCE & RISK */}
      {compliance && (
        <section className="py-16 bg-white border-t border-[#f0f0f0]">
          <Container>
            <div
              className="rounded-[32px] overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #fef9c3 0%, #fde68a 100%)",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-10 md:px-14 py-14">
                <div>
                  <Badge>Compliance</Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4">
                    {compliance.heading}
                  </h2>
                  <p className="text-[#555] text-sm leading-relaxed mb-8">
                    {compliance.text}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {(compliance.tags ?? []).map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/80 border border-[#f59e0b]/30 text-[#92400e] text-xs font-semibold px-4 py-2 rounded-full shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  {compliance.image?.asset?.url ? (
                    <Image
                      src={compliance.image.asset.url}
                      alt={compliance.image.alt ?? "Compliance"}
                      width={280}
                      height={220}
                      className="max-w-full"
                    />
                  ) : (
                    <svg
                      width="280"
                      height="220"
                      viewBox="0 0 280 220"
                      fill="none"
                    >
                      <rect
                        x="60"
                        y="40"
                        width="160"
                        height="150"
                        rx="12"
                        fill="white"
                        stroke="#f59e0b"
                        strokeWidth="1.5"
                      />
                      <rect
                        x="100"
                        y="28"
                        width="80"
                        height="28"
                        rx="8"
                        fill="#fde68a"
                        stroke="#f59e0b"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M84 80h112"
                        stroke="#fde68a"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M84 100h80"
                        stroke="#fde68a"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M84 120h112"
                        stroke="#fde68a"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M84 140h60"
                        stroke="#fde68a"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <circle cx="76" cy="80" r="5" fill="#4ade80" />
                      <path
                        d="M73 80l2 2 4-4"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="76" cy="100" r="5" fill="#4ade80" />
                      <path
                        d="M73 100l2 2 4-4"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="76" cy="120" r="5" fill="#4ade80" />
                      <path
                        d="M73 120l2 2 4-4"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="76" cy="140" r="5" fill="#f59e0b" />
                      <path
                        d="M76 137v6M73 140h6"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      <circle cx="210" cy="55" r="28" fill="#fef3c7" />
                      <path
                        d="M210 40l12 6v8c0 7-5 11-12 13-7-2-12-6-12-13V46l12-6z"
                        fill="#fde68a"
                        stroke="#f59e0b"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M205 55l4 4 7-8"
                        stroke="#f59e0b"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 8 ── GET INVOLVED */}
      {getInvolved.length > 0 && (
        <section className="py-16 bg-[#f8fafc] border-t border-[#f0f0f0]">
          <Container>
            <div className="text-center mb-12">
              <Badge>Participate</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                Get Involved
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getInvolved.map((g) => (
                <div
                  key={g.title}
                  className="bg-white border border-[#e5e7eb] rounded-2xl p-8 hover:border-primary hover:shadow-md transition-all duration-200"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#eff6ff] flex items-center justify-center mb-5">
                    <RoleIcon iconKey={g.iconKey} size={30} />
                  </div>
                  <h3 className="font-bold text-[#1a1a1a] text-[16px] mb-3">
                    {g.title}
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed">
                    {g.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 9 ── FAQ */}
      {faqs.length > 0 && (
        <section className="py-16 bg-white border-t border-[#f0f0f0]">
          <Container>
            <div className="text-center mb-12">
              <Badge>FAQ</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                Frequently Asked Questions
              </h2>
            </div>
            <GovernanceFAQ items={faqs} />
          </Container>
        </section>
      )}
    </div>
  );
}
