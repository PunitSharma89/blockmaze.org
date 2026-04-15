import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQ from "@/components/ui/FAQ";
import RoleTabs from "@/components/ui/RoleTabs";
import FoundationScroller from "@/components/ui/FoundationScroller";
import AccountabilityScroll from "@/components/ui/AccountabilityScroll";
import { sanityFetch } from "@/lib/sanity";
import { aboutPageQuery } from "@/lib/queries";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Blockmaze foundation maintains the governance architecture of the Blockmaze Layer-0 network, including issuer admission standards, on-chain registries, and permission frameworks.",
};

const roles = [
  {
    icon: "/images/Governance-Stewardship.svg",
    title: "Governance Stewardship",
    description:
      "The foundation stewards governance processes that define issuer permissions, protocol parameters, and accountability boundaries at Layer-0.",
  },
  {
    icon: "/images/Governance-Stewardship.svg",
    title: "Boundary Enforcement",
    description:
      "It maintains a clear separation between governance authority, transaction settlement, asset issuance, and market activity within the ecosystem.",
  },
  {
    icon: "/images/Governance-Stewardship.svg",
    title: "Accountability Oversight",
    description:
      "The Foundation ensures that issuer standing, enforcement actions, and governance decisions are recorded transparently through on-chain processes.",
  },
  {
    icon: "/images/Governance-Stewardship.svg",
    title: "Institutional Coordination",
    description:
      "It engages regulated entities, validators, and ecosystem contributors within defined governance structures without participating in commercial operations.",
  },
  {
    icon: "/images/Governance-Stewardship.svg",
    title: "Policy Execution",
    description:
      "Governance outcomes are translated into protocol-level state changes affecting permissions and standards, while preserving consensus integrity.",
  },
  {
    icon: "/images/Governance-Stewardship.svg",
    title: "Ecosystem Support",
    description:
      "The Foundation supports structured research, grant initiatives, and technical collaboration aligned with the accountability framework of the network.",
  },
];

const ecosystemIcons = [
  /* Layer-0 Root Network — interconnected nodes */
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" key="0">
    <circle cx="22" cy="8" r="5" stroke="#ffb01e" strokeWidth="2"/>
    <circle cx="8" cy="36" r="5" stroke="#ffb01e" strokeWidth="2"/>
    <circle cx="36" cy="36" r="5" stroke="#ffb01e" strokeWidth="2"/>
    <line x1="22" y1="13" x2="8" y2="31" stroke="#ffb01e" strokeWidth="1.8"/>
    <line x1="22" y1="13" x2="36" y2="31" stroke="#ffb01e" strokeWidth="1.8"/>
    <line x1="13" y1="36" x2="31" y2="36" stroke="#ffb01e" strokeWidth="1.8"/>
  </svg>,
  /* Sovereign Domains — stacked layers */
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" key="1">
    <path d="M6 15L22 7L38 15L22 23L6 15Z" stroke="#ffb01e" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M6 22L22 30L38 22" stroke="#ffb01e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 29L22 37L38 29" stroke="#ffb01e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  /* Issuer Framework — document with badge */
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" key="2">
    <rect x="6" y="4" width="24" height="32" rx="3" stroke="#ffb01e" strokeWidth="2"/>
    <line x1="12" y1="13" x2="24" y2="13" stroke="#ffb01e" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="12" y1="19" x2="24" y2="19" stroke="#ffb01e" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="12" y1="25" x2="20" y2="25" stroke="#ffb01e" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="33" cy="33" r="7" fill="none" stroke="#ffb01e" strokeWidth="2"/>
    <path d="M29.5 33L32 35.5L36.5 30.5" stroke="#ffb01e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  /* Validator Participation — shield with check */
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" key="3">
    <path d="M22 4L6 10V22C6 31 14 38 22 40C30 38 38 31 38 22V10L22 4Z" stroke="#ffb01e" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M15 22L19.5 27L29 17" stroke="#ffb01e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  /* Token Standards — hexagon coin */
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" key="4">
    <path d="M22 4L36 12V28L22 36L8 28V12L22 4Z" stroke="#ffb01e" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M18 20H26M18 24H26" stroke="#ffb01e" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M20 17V27" stroke="#ffb01e" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M24 17V27" stroke="#ffb01e" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>,
  /* Application & Market Infrastructure — chart/app */
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" key="5">
    <rect x="4" y="6" width="36" height="28" rx="4" stroke="#ffb01e" strokeWidth="2"/>
    <line x1="4" y1="14" x2="40" y2="14" stroke="#ffb01e" strokeWidth="1.6"/>
    <circle cx="9" cy="10" r="1.5" fill="#ffb01e"/>
    <circle cx="14" cy="10" r="1.5" fill="#ffb01e"/>
    <path d="M10 25L16 20L22 23L30 17" stroke="#ffb01e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="16" y1="38" x2="28" y2="38" stroke="#ffb01e" strokeWidth="2" strokeLinecap="round"/>
    <line x1="22" y1="34" x2="22" y2="38" stroke="#ffb01e" strokeWidth="2" strokeLinecap="round"/>
  </svg>,
];

const ecosystemComponents = [
  {
    title: "Layer-0 Root Network",
    description:
      "The root chain provides consensus, final settlement, shared registries, and cross-chain coordination. It anchors issuer standing, governance decisions, and accountability records while maintaining independent transaction finality.",
  },
  {
    title: "Sovereign Domains",
    description:
      "Jurisdictions or regulated entities may deploy sovereign chains connected to the Layer-0 root. These domains retain local execution control while referencing shared registries and accountability primitives.",
  },
  {
    title: "Issuer Framework",
    description:
      "Corporate issuers undergo admission review before deploying assets. Approved issuers are recorded on-chain with defined permissions and proof schedules. Standing transitions occur automatically when obligations are not met.",
  },
  {
    title: "Validator Participation",
    description:
      "Validators secure the root network through staking and consensus participation. Slashing rules and performance standards maintain network integrity.",
  },
  {
    title: "Token Standards",
    description:
      "Assets are deployed using standardized templates designed for distinct legal realities. These templates encode operational rules, disclosure requirements, and permission controls directly into token behavior.",
  },
  {
    title: "Application & Market Infrastructure",
    description:
      "Developers build applications aligned with approved token standards and governance boundaries. Asset exchange and liquidity mechanisms settle under Layer-0 consensus without altering issuer accountability rules.",
  },
];

const team = [
  {
    name: "Tajinder Virk",
    role: "Co-Founder & CEO, Blockmaze",
    photo: "/images/tj12.png",
    linkedin: "https://www.linkedin.com/in/tajindervirk/",
    bio: "Tajinder Virk is a global fintech architect and institution builder with a track record of launching and scaling regulated financial ecosystems across multiple jurisdictions. As Co-Founder and CEO of Blockmaze, he leads the strategic vision of building a sovereign-ready, trust-enforced real-world asset blockchain designed to bridge traditional finance with programmable infrastructure. With deep expertise spanning wealth Management, investment banking, payments, and cross-border regulatory frameworks, Tajinder focuses on designing systems that eliminate structural conflicts of interest, restore transparency, and create durable financial rails for the next generation of global asset ownership.",
  },
  {
    name: "Puneet Mangal",
    role: "Co-Founder & Chief Operating Officer, Blockmaze",
    photo: "/images/Mask-group-19.png",
    linkedin: "https://www.linkedin.com/in/puneetmangal/",
    bio: "Puneet Mangal is a seasoned entrepreneur with extensive experience in manufacturing, distribution, and global trade of metals and steel products, along with strategic venture-style investments in emerging businesses. As Co-Founder and COO of Blockmaze, he oversees operational execution, infrastructure build-out, and institutional partnerships. His background in real-world asset industries brings grounded commercial insight to Blockmaze’s tokenization framework, ensuring that digital representations of assets are anchored in practical supply chain realities, capital discipline, and scalable operational processes.",
  },
  {
    name: "Sarvjeet Virk",
    role: "Strategic Advisor, Blockmaze",
    photo: "/images/sv1.png",
    linkedin: "https://www.linkedin.com/in/sarvjeetvirk/",
    bio: "Sarvjeet Virk is a technology-focused entrepreneur with deep experience in building regulated financial platforms and high-performance trading infrastructure. As an Advisor to Blockmaze, he provides strategic oversight on technology architecture, scalability, and governance design. With a strong foundation in developing compliant, resilient financial systems across global markets, Sarvjeet plays a critical role in shaping Blockmaze’s institutional-grade reliability and long-term technological durability.",
  },
];

const faqItems = [
  {
    question:
      "1. What is the primary responsibility of the Blockmaze Foundation?",
    answer:
      "The Foundation oversees governance administration, issuer eligibility standards, registry maintenance, and accountability processes at the Layer-0 level. It does not operate markets or control transaction settlement.",
  },
  {
    question: "2. How does the Foundation interact with issuers?",
    answer:
      "Governance is coordinated across the Foundation, the Governance Council, and a dedicated DAO governance platform supporting structured decentralized decision-making.",
  },
  {
    question: "3. Can governance reverse or modify past transactions?",
    answer:
      "Developers, validators, and partners may submit proposals, grant applications, and infrastructure requests through the RFP Portal and access tooling via the Developer Portal for review under structured ecosystem programs.",
  },
  {
    question: "4. What role does the DAO play within the ecosystem?",
    answer:
      "The foundation maintains separation from commercial operations, market execution, and protocol authority while supporting governance design, validator standards, developer frameworks, and technical standards.",
  },
  {
    question: "5. How does Blockmaze support regulated participation?",
    answer:
      "The foundation maintains separation from commercial operations, market execution, and protocol authority while supporting governance design, validator standards, developer frameworks, and technical standards.",
  },
];

interface AboutData {
  hero?: {
    chipLabel?: string;
    heading?: string;
    headingHighlight?: string;
    headingSuffix?: string;
    bodyText?: string;
  };
}

export default async function AboutPage() {
  const data = await sanityFetch<AboutData>(aboutPageQuery);

  return (
    <>
      {/* Hero — Figma 420:277 */}
      <section className="about-hero-section about-page-hero">
        <div className="about-hero-wrap">
          {/* Left: text */}
          <div className="about-hero-text">
            <div className="hero-chip-v2">
              <span className="hero-chip-dot" />
              <span className="hero-chip-label">
                {data?.hero?.chipLabel ?? "About the Blockmaze Foundation & Ecosystem"}
              </span>
            </div>
            <div className="about-hero-textblock">
              <h1 className="about-hero-h1">
                {data?.hero?.heading ?? "Independent Governance for Regulated, Real-World"}{" "}
                <span className="text-primary">
                  {data?.hero?.headingHighlight ?? "Blockchain"}
                </span>{" "}
                {data?.hero?.headingSuffix ?? "Infrastructure"}
              </h1>
              <p className="about-hero-p">
                {data?.hero?.bodyText ??
                  "The Blockmaze foundation maintains the governance architecture of the Blockmaze Layer-0 network, including issuer admission standards, on-chain registries, and permission frameworks."}
              </p>
            </div>
          </div>

          {/* Right: illustration — absolutely centered, overflow-clip like Figma */}
          <div className="about-hero-img-col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about-hero-1.jpg"
              alt="Blockmaze ecosystem illustration"
              className="about-hero-img"
            />
          </div>
        </div>
      </section>

      {/* The Blockmaze Foundation — scroll-driven stepper */}
      <FoundationScroller />

      {/* The Role of the Blockmaze Foundation */}
      <RoleTabs roles={roles} />

      {/* How the Blockmaze Ecosystem Works */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            heading={<>How the Blockmaze <span className="text-primary">Ecosystem</span> Works</>}
          />
          <div className="eco-cards-grid">
            {ecosystemComponents.map((item, i) => (
              <div key={item.title} className="eco-card">
                <div className="eco-card-icon">{ecosystemIcons[i]}</div>
                <h4 className="eco-card-title">{item.title}</h4>
                <p className="eco-card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Accountability Must Be Embedded at the Protocol Layer */}
      <AccountabilityScroll />

      {/* Long-Term Vision */}
      <section className="section-padding bg-white">
        <Container>
          <div className="vision-layout">

            {/* Left — dark image card */}
            <div className="vision-img-card">
              <Image
                src="/images/long.svg"
                alt="Long-Term Vision for Blockmaze"
                width={556}
                height={531}
                className="vision-img"
              />
            </div>

            {/* Right — text content */}
            <div className="vision-content">
              <div className="vision-text-block">
                <h2 className="vision-title">Long-Term Vision for Blockmaze</h2>
                <p className="vision-desc">
                  The long-term vision of Blockmaze is to serve as foundational
                  infrastructure for real-world asset issuance across jurisdictions
                  while preserving settlement integrity and defined governance
                  boundaries.
                </p>
              </div>
              <ul className="vision-list">
                {[
                  "Broader participation from regulated issuers",
                  "Expansion of sovereign domains aligned with local requirements",
                  "Increased validator distribution across the network",
                  "Wider adoption of standardized asset templates",
                  "Gradual expansion of governance participation",
                  "Ongoing refinement of accountability standards",
                ].map((item, i) => (
                  <li key={i} className="vision-item">
                    <span className="vision-item-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="9" stroke="#ffb01e" strokeWidth="1.5"/>
                        <path d="M6.5 10L9 12.5L13.5 7.5" stroke="#ffb01e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </Container>
      </section>

      {/* Leadership & Management */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading heading={<>Leadership &amp; <span className="text-primary">Management</span></>} />
          <p className="about-vision-desc">
            The Blockmaze foundation is guided by a management team responsible
            for maintaining governance integrity, operational discipline, and
            structured oversight across the Layer-0 network.
          </p>
          <div className="about-team-grid">
            {team.map((member) => (
              <div key={member.name} className="about-team-card">
                <div className="about-team-photo-wrap">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={460}
                    height={616}
                    className="about-team-photo"
                  />
                </div>
                <div className="about-team-info">
                  <div className="about-team-header">
                    <div className="about-team-header-text">
                      <h4 className="about-team-name">{member.name}</h4>
                      <p className="about-team-role">{member.role}</p>
                    </div>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} LinkedIn`} className="about-team-social">
                      <Image src="/images/linkedin.svg" alt="LinkedIn" width={20} height={20} />
                    </a>
                  </div>
                  <p className="about-team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading heading={<>Frequently Asked <span className="text-primary">Questions</span></>} />
          <div className="about-faq-grid">
            <div className="about-faq-img">
              <Image
                src="/images/faq-img.png"
                alt="Frequently Asked Questions"
                width={454}
                height={425}
              />
            </div>
            <div className="about-faq-content">
              <FAQ items={faqItems} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
