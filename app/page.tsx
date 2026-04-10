import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import AnimatedButton from "@/components/ui/AnimatedButton";
import SectionHeading from "@/components/ui/SectionHeading";
import Blurb from "@/components/ui/Blurb";
import BlogCard from "@/components/ui/BlogCard";
import BlogGrid from "@/components/ui/BlogGrid";
import FAQ from "@/components/ui/FAQ";
import ProblemSlider from "@/components/ui/ProblemSlider";
import AccountabilityArc from "@/components/ui/AccountabilityArc";
import UseCaseTabs from "@/components/ui/UseCaseTabs";
import EcosystemTabs from "@/components/ui/EcosystemTabs";


const faqItems = [
  {
    question:
      "1. What role does the Blockmaze Foundation perform within the network?",
    answer:
      "The Foundation maintains issuer registries, token standard approvals, proof cadence oversight, and governance processes at Layer-0 blockchain. It manages permissions and accountability structures without interfering with transaction settlement or consensus.",
  },
  {
    question:
      "2. Does governance have the authority to reverse transactions?",
    answer:
      "No. Settlement is governed exclusively by consensus rules within the layer 0 protocol. Once a block is finalized, it cannot be reversed. Governance actions apply only to issuer permissions and protocol parameters under the established blockchain governance framework, ensuring separation between oversight and settlement.",
  },
  {
    question: "3. How are corporate issuers admitted to the network?",
    answer:
      "Corporate issuers must complete identity verification, demonstrate legal authorization for the asset category, bond BMZ, and accept defined proof schedules before participating in the institutional tokenization platform. Approval is recorded in the Issuer Registry prior to asset deployment within the real-world asset tokenization platform.",
  },
  {
    question:
      "4. What happens if an issuer fails to submit the required proofs?",
    answer:
      "Missed proof deadlines trigger automatic standing transitions recorded on-chain within the regulated RWA tokenization platform. Governance may impose restrictions or revoke issuance permissions. Previously issued tokens remain transferable, but minting and burning rights can be suspended to preserve accountability standards in compliant asset tokenization.",
  },
  {
    question: "5. What is the difference between BMZ20 and BMZ3643?",
    answer:
      "BMZ20 applies to bearer-redeemable assets where possession enables redemption. BMZ3643 applies to registry-dependent assets where ownership relies on alignment with an external legal registry. Each template enforces different operational rules.",
  },
  {
    question:
      "6. Can sovereign entities operate independently within the ecosystem?",
    answer:
      "Yes. Sovereign domains may operate their own execution environments and validator sets while connecting to the layer 0 blockchain for shared registry references and cross-chain coordination. Governance at Layer-0 does not override sovereign authority, preserving flexibility within the broader compliant Web3 infrastructure.",
  },
];

const problemCards = [
  {
    icon: "/images/Anonymous-1.png",
    title: "Anonymous Issuer Access",
    description:
      "Most public networks allow asset issuance without identity verification or authorization checks. The protocol does not distinguish between a licensed issuer and an unidentified contract deployer. There is no native registry confirming who may issue assets or under what legal basis.",
  },
  {
    icon: "/images/Unrestricted.png",
    title: "Unrestricted Token Deployment",
    description:
      "Token contracts can be created without standardized templates, governance review, or defined issuance conditions. Asset categories, disclosure requirements, and operational constraints are left to individual applications rather than embedded at the network layer of a blockchain for asset tokenization.",
  },
  {
    icon: "/images/Proof-Monitoring.png",
    title: "Absence of Proof Monitoring",
    description:
      "Disclosure schedules and reserve attestations are handled outside the protocol. The network does not track proof deadlines, record missed submissions, or signal changes in issuer standing when obligations are not met, limiting institutional confidence in RWA tokenization.",
  },
  {
    icon: "/images/No-Distinction.png",
    title: "No Distinction Between Asset Types",
    description:
      "Bearer-redeemable assets and registry-dependent title assets are treated as identical token contracts. The protocol does not enforce reserve visibility for bearer assets or registry alignment for title-based assets, despite their differing legal realities in compliant asset tokenization environments.",
  },
  {
    icon: "/images/Governance.png",
    title: "Governance Detached From Issuer Permissions",
    description:
      "Governance mechanisms, where present, often focus on protocol upgrades rather than issuer eligibility or enforcement. There are no structured state transitions governing admission, restriction, or revocation at the protocol root within an on chain governance platform.",
  },
  {
    icon: "/images/Institutional-Participation.png",
    title: "Institutional Participation Constraints",
    description:
      "Without verified attribution, standardized issuance templates, structured disclosure requirements, and permission controls, regulated entities face structural limitations in adopting public blockchain infrastructure for real-world assets.",
  },
];

const uspCards = [
  {
    icon: "/images/Frame-14.png",
    title: "Accountability at Layer-0",
    description:
      "Issuer registries, proof schedules, and standing transitions operate at the protocol level. These rules apply consistently across all connected domains.",
  },
  {
    icon: "/images/Frame-15.png",
    title: "Verified Issuer Admission",
    description:
      "Corporate issuers must complete identity verification, demonstrate legal authorization, and bond economic commitments before deploying assets.",
  },
  {
    icon: "/images/Frame-16.png",
    title: "Asset-Specific Token Standards",
    description:
      "Two standardized templates reflect distinct legal realities: BMZ20 for bearer-redeemable assets and BMZ3643 for registry-dependent title assets, supporting structured RWA issuance platform requirements.",
  },
  {
    icon: "/images/Frame-17.png",
    title: "Enforced Disclosure Cadence",
    description:
      "Proof-of-reserves and proof-of-presence deadlines are monitored by protocol modules. Missed submissions trigger visible standing changes, reinforcing compliant asset tokenization practices.",
  },
  {
    icon: "/images/Frame-18.png",
    title: "Governance With Defined Boundaries",
    description:
      "Governance manages issuer permissions and protocol parameters within a defined blockchain governance framework. It cannot reverse transactions or interfere with settlement history.",
  },
  {
    icon: "/images/Frame-19.png",
    title: "Hybrid Layer-0 / Sovereign Model",
    description:
      "Issuers may operate directly on the root chain or deploy jurisdiction-specific Layer-1 domains connected through shared accountability primitives using a sovereign blockchain SDK.",
  },
];

const useCasesLeft = [
  {
    title: "Sovereign or Jurisdiction-Specific Asset Platforms",
    description:
      "Governments or regulated authorities can deploy sovereign domains connected to the layer-0 blockchain, maintaining local execution control while inheriting shared accountability registries.",
  },
  {
    title: "Institutional Asset Distribution Networks",
    description:
      "Regulated asset managers can distribute tokenized securities or structured products under defined issuer permissions, standardized templates, and transparent standing rules.",
  },
  {
    title: "Cross-Chain Settlement With Issuer Visibility",
    description:
      "Assets issued on sovereign domains can interoperate across connected chains while preserving issuer standing checks and registry references anchored at Layer-0, strengthening the architecture of a regulated blockchain for RWAs.",
  },
];

const useCasesRight = [
  {
    title: "Regulated Stablecoin Issuance",
    description:
      "Licensed financial entities can issue fiat-redeemable tokens under defined proof-of-reserves schedules, with issuer standing and disclosure history recorded on-chain.",
  },
  {
    title: "Tokenized Real Estate and Registry-Based Assets",
    description:
      "Title-dependent assets can be issued using structured templates that require whitelist controls, registry coherence commitments, and proof-of-presence attestations aligned with how to tokenize real estate legally.",
  },
  {
    title: "Commodity-Backed Digital Instruments",
    description:
      "Producers and custodians can tokenize gold on blockchain or issue bearer-redeemable tokens representing commodities such as energy resources, with reserve attestations tied to protocol-enforced proof cadence. This model supports tokenized gold with proof of reserve requirements.",
  },
];

const ecosystemCards = [
  {
    title: "Governance Council",
    href: "/governance",
    description:
      "The Governance Council oversees issuer admission, standing reviews, enforcement actions, and protocol parameters related to accountability. Governance decisions are recorded on-chain within defined authority boundaries and do not interfere with settlement history.",
    bullets: [
      "Reviews corporate issuer applications and authorization status",
      "Manages standing transitions, restrictions, and revocations",
      "Oversees protocol parameters tied to accountability frameworks",
    ],
  },
  {
    title: "RFP",
    href: "/rfp",
    description:
      "The RFP function manages ecosystem proposals, research initiatives, and structured funding programs aligned with network standards and accountability requirements.",
    bullets: [
      "Accepts proposals for tooling, standards, and infrastructure development",
      "Facilitates grant evaluation and milestone tracking",
      "Records approved initiatives under governance oversight",
    ],
  },
  {
    title: "DAO",
    href: "/dao",
    description:
      "The DAO enables broader participation in governance through proposal submission, voting, and treasury oversight using governance tokens within defined voting rules.",
    bullets: [
      "Enables proposal submission subject to deposit thresholds",
      "Conducts structured voting under defined quorum rules",
      "Oversees treasury allocation tied to approved proposals",
    ],
  },
  {
    title: "Validator",
    href: "/validator",
    description:
      "The validator interface supports onboarding and coordination for entities running a proof of stake validator on the layer 0 blockchain.",
    bullets: [
      "Facilitates validator registration and staking setup",
      "Provides access to network policy and performance standards",
      "Tracks validator uptime and slashing conditions",
    ],
  },
  {
    title: "Delegator",
    href: "/delegator",
    description:
      "The delegator interface allows BMZ holders to delegate stake to validators, contributing to network security without operating infrastructure.",
    bullets: [
      "Enables users to delegate crypto staking to verified validators",
      "Tracks validator node rewards and commission rates",
      "Reflects proportional exposure to validator performance",
    ],
  },
  {
    title: "Swap",
    href: "/swap",
    description:
      "The swap interface supports protocol-native asset exchange within the Blockmaze ecosystem, settling transactions under Layer-0 consensus rules.",
    bullets: [
      "Enables on-chain asset pair swaps",
      "Supports liquidity participation for approved tokens",
      "Settles trades under network finality rules",
    ],
  },
];

const blogPosts = [
  {
    title: "Why Smart Contracts Cannot Represent Legal Ownership Alone",
    slug: "why-smart-contracts-cannot-represent-legal-ownership-alone",
    image: "/images/Code-Executes-Law-Enforces-400x250.jpg",
    category: "Blockchain Regulation",
    categorySlug: "blockchain-regulation",
    excerpt:
      "A Developing Market Catching Up With Its Legal Framework The data available to date reveals a lot of information about this fast-developing market. The tokenized real-world asset market has recently grown to an approximate $24.9 billion total market value, growing...",
  },
  {
    title:
      "Why Institutional Capital Requires Verifiable Blockchain Infrastructure",
    slug: "why-institutional-capital-requires-verifiable-blockchain-infrastructure",
    image:
      "/images/Verifiable-Blockchain-for-Institutional-Finance-400x250.jpg",
    category: "Blockchain Infrastructure",
    categorySlug: "blockchain-infrastructure",
    excerpt:
      '"When Infrastructure Becomes Trustworthy: Financial Institutions Move" Capital markets do not adopt technology because it\'s "new." They do so only when the architecture around it can carry risk. The evolution of institutional blockchain infrastructure can be explained...',
  },
  {
    title:
      "Why Tokenization Infrastructure Must Reflect Legal Ownership Systems",
    slug: "why-tokenization-infrastructure-must-reflect-legal-ownership-systems",
    image: "/images/Real-World-Assets-400x250.webp",
    category: "Blockchain Asset Tokenization",
    categorySlug: "blockchain-asset-tokenization",
    excerpt:
      "The rise of real world asset tokenization as a means of representing ownership rights digitally has been one of the major emerging trends in the modern financial space. Blockchain is rapidly being adopted across real estate, commodities, equities, and various forms of...",
  },
];

export default function Home() {
  return (
    <>
      {/* SECTION 1: Hero */}
      <section
        className="relative h-[677px] overflow-hidden"
        style={{ background: "linear-gradient(to left, var(--color-header-navy), var(--color-header-dark) 49%)" }}
      >
        {/* Perspective grid — bottom of hero */}
        <div className="hero-bg-grid">
          <Image src="/images/hero-bg-grid.svg" alt="" fill className="object-fill" />
        </div>

        {/* Inner layout */}
        <div className="mx-auto w-[80%] max-w-[1440px] h-full flex items-center gap-[170px] px-0 relative">

          {/* ── LEFT COLUMN ── */}
          <div className="flex-1 flex flex-col gap-[40px] relative z-10 min-w-0">
            <div className="flex flex-col gap-[16px]">
              {/* Chip */}
              <div
                className="inline-flex w-fit items-center justify-center px-[16px] py-[12px] rounded-[999px] border"
                style={{ borderColor: "var(--color-chip-border)", background: "var(--color-chip-bg)" }}
              >
                <span className="text-[14px] font-medium tracking-[-0.28px] whitespace-nowrap" style={{ color: "var(--color-primary)" }}>
                  Blockmaze Foundation
                </span>
              </div>
              {/* Heading + description */}
              <div className="flex flex-col gap-[20px]">
                <h1 className="font-bold text-[46px] leading-[68px]" style={{ color: "var(--color-white)" }}>
                  The Accountability Framework Behind the Blockmaze Layer-0 Blockchain Ecosystem
                </h1>
                <p className="text-[16px] leading-[28px]" style={{ color: "var(--color-hero-body)" }}>
                  Establishing protocol-level governance and verified issuer accountability across the Blockmaze layer 0 blockchain ecosystem while preserving independent and irreversible settlement.
                </p>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex gap-[20px]">
              <AnimatedButton href="/contact-us" variant="primary">
                Contact Us
              </AnimatedButton>
              <AnimatedButton href="/whitepaper" variant="white">
                Read Whitepaper
              </AnimatedButton>
            </div>
          </div>

          {/* ── RIGHT COLUMN — hero image ── */}
          <div className="hidden lg:block flex-shrink-0 w-[582px] h-[558px]">
            <Image
              src="/images/hero-img.svg"
              alt="Blockmaze hero"
              width={582}
              height={558}
              priority
            />
          </div>

        </div>
      </section>

      {/* SECTION 2: About the Foundation */}
      <section className="section-padding section-padding--lg bg-white">
        <Container>
          <div className="flex flex-col gap-[60px] items-start w-full">
            {/* Heading + Description */}
            <div className="flex flex-col gap-4 items-center text-center w-full">
              <h2 className="section-heading">
                About the <span className="text-primary">Foundation</span>
              </h2>
              <p className="section-subtext">
              Blockmaze operates through defined governance channels and structured access layers that support issuer oversight, validator coordination, ecosystem funding, and network participation. Each component serves a distinct function within the Layer-0 framework.</p>
            </div>

            {/* Cards */}
            <div className="about-cards-row">
              {/* Vision Card */}
              <div className="about-card about-card-vision">
                <Image src="/images/about-icon001.png" alt="" width={170} height={201} />
                <div className="about-card-text">
                  <h3 className="about-card-title">Vision</h3>
                  <p className="about-card-desc">
                    To support a blockchain foundation where real-world assets can be issued under verified authorization, structured disclosure, and transparent oversight, while transaction settlement remains neutral and final.
                  </p>
                </div>
                <div className="about-card-bullets">
                  {[
                    "On-chain verification of issuer identity and authorization",
                    "Scheduled disclosure requirements tied to asset type",
                    "Public visibility into issuer standing",
                    "Separation of governance controls from settlement finality",
                    "Permanent record of issuer status changes",
                  ].map((item, i) => (
                    <div key={i} className="about-card-bullet">
                      <Image src="/images/about-arrow.svg" alt="" width={24} height={24} />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mission Card */}
              <div className="about-card about-card-mission">
                <Image src="/images/about-icon02.png" alt="" width={170} height={201} />
                <div className="about-card-text">
                  <h3 className="about-card-title">Mission</h3>
                  <p className="about-card-desc">
                    To maintain protocol-level governance structures, issuer verification standards, token templates, and proof enforcement mechanisms that provide a consistent accountability framework for real-world asset tokenization for institutions across the Blockmaze ecosystem.
                  </p>
                </div>
                <div className="about-card-bullets">
                  {[
                    "Structured review and admission of corporate issuers",
                    "Oversight of approved token template versions",
                    "Monitoring and automatic handling of missed proof deadlines",
                    "Management of issuer permission states",
                    "Governance of protocol parameters related to accountability",
                  ].map((item, i) => (
                    <div key={i} className="about-card-bullet">
                      <Image src="/images/about-arrow.svg" alt="" width={24} height={24} />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: Core Problems */}
      <section className="section-padding bg-white">
        <Container>
          <ProblemSlider cards={problemCards} />
        </Container>
      </section>

      {/* SECTION 4: The Blockmaze Accountability Model */}
      <section>
        <AccountabilityArc />
      </section>

      {/* SECTION 5: What Distinguishes Blockmaze */}
      <section className="distinguishes-section">
        <Container>
          <div className="distinguishes-inner">
            {/* Video background */}
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
              <span className="section-eyebrow section-eyebrow--dark">Primary USPs</span>
              <h2 className="distinguishes-title">
                What Distinguishes{" "}
                <span className="text-primary">Blockmaze</span>
              </h2>
              <p className="distinguishes-subtext">
                Blockmaze embeds issuer accountability at the protocol root
                rather than relying on application-level controls. Its
                architecture separates settlement from oversight, defines
                structured issuer admission, and applies standardized token
                behavior across connected chains.
              </p>
            </div>
            <div className="distinguishes-cards">
              <div className="distinguishes-row">
                {uspCards.slice(0, 3).map((card) => (
                  <div key={card.title} className="distinguishes-card">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={48}
                      height={48}
                      className="distinguishes-card-icon"
                    />
                    <div className="distinguishes-card-body">
                      <h4 className="distinguishes-card-title">
                        {card.title}
                      </h4>
                      <p className="distinguishes-card-text">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="distinguishes-row">
                {uspCards.slice(3, 6).map((card) => (
                  <div key={card.title} className="distinguishes-card">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={48}
                      height={48}
                      className="distinguishes-card-icon"
                    />
                    <div className="distinguishes-card-body">
                      <h4 className="distinguishes-card-title">
                        {card.title}
                      </h4>
                      <p className="distinguishes-card-text">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 6: Use Cases */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            label="Use Cases"
            heading="Top Blockmaze Use Cases"
            subtext="Blockmaze supports asset issuance models where verified authorization, structured disclosure, and protocol-level accountability are required."
          />
          <UseCaseTabs />
        </Container>
      </section>

      {/* SECTION 7: Governance & Ecosystem */}
      <section className="bg-white">
        <EcosystemTabs />
      </section>

      {/* SECTION 8: Documentation & Resources */}
      <section className="section-padding bg-white">
        <Container>
          <div className="docs-banner">
            <div className="docs-banner-content">
              <h2 className="docs-banner-title">
                Blockmaze Documentation &amp; Resources
              </h2>
              <AnimatedButton href="/knowledge-hub" variant="primary">
                View
              </AnimatedButton>
            </div>
            <div className="docs-banner-img-wrap">
              <Image
                src="/images/reso.png"
                alt="Blockmaze Documentation & Resources"
                width={400}
                height={300}
                className="docs-banner-img"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 9: Blogs */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            label="Blogs"
            heading="Latest Research & Featured Blog Posts"
            subtext="Recent publications highlight governance design, ecosystem development, validator infrastructure, developer tooling and research supporting compliant Web3 infrastructure and regulated digital asset markets."
          />
          <BlogGrid>
            {blogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug}
                image={post.image}
                category={post.category}
                categorySlug={post.categorySlug}
              />
            ))}
          </BlogGrid>
        </Container>
      </section>

      {/* SECTION 10: FAQ */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading label="FAQ" heading="Frequently Asked Questions" />
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
              <FAQ items={faqItems} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
