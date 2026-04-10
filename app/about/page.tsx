import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQ from "@/components/ui/FAQ";
import RoleTabs from "@/components/ui/RoleTabs";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Blockmaze foundation maintains the governance architecture of the Blockmaze Layer-0 network, including issuer admission standards, on-chain registries, and permission frameworks.",
};

const roles = [
  {
    icon: "/images/tbf1.png",
    title: "Governance Stewardship",
    description:
      "The foundation stewards governance processes that define issuer permissions, protocol parameters, and accountability boundaries at Layer-0.",
  },
  {
    icon: "/images/tbf2.png",
    title: "Boundary Enforcement",
    description:
      "It maintains a clear separation between governance authority, transaction settlement, asset issuance, and market activity within the ecosystem.",
  },
  {
    icon: "/images/tbf3.png",
    title: "Accountability Oversight",
    description:
      "The Foundation ensures that issuer standing, enforcement actions, and governance decisions are recorded transparently through on-chain processes.",
  },
  {
    icon: "/images/tbf4.png",
    title: "Institutional Coordination",
    description:
      "It engages regulated entities, validators, and ecosystem contributors within defined governance structures without participating in commercial operations.",
  },
  {
    icon: "/images/tbf5.png",
    title: "Policy Execution",
    description:
      "Governance outcomes are translated into protocol-level state changes affecting permissions and standards, while preserving consensus integrity.",
  },
  {
    icon: "/images/Rectangle-63637.png",
    title: "Ecosystem Support",
    description:
      "The Foundation supports structured research, grant initiatives, and technical collaboration aligned with the accountability framework of the network.",
  },
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

const accountabilityPoints = [
  {
    title: "Settlement Does Not Verify Issuer Authority",
    description:
      "Transaction finality confirms that a transfer occurred. It does not confirm whether the issuer has legal authorization or maintains required backing.",
  },
  {
    title: "Real-World Assets Carry External Obligations",
    description:
      "Assets tied to reserves, registries, or regulated frameworks depend on off-chain commitments. These commitments must be defined and monitored through structured protocol rules.",
  },
  {
    title: "Application-Level Controls Create Fragmentation",
    description:
      "When each platform defines its own compliance logic, standards vary, and oversight becomes inconsistent. This weakens credibility across networks.",
  },
  {
    title: "Shared Registries Provide Consistency",
    description:
      "Embedding issuer eligibility and standing records at Layer-0 ensures that accountability signals apply uniformly across connected chains.",
  },
  {
    title: "Enforcement Requires Defined Boundaries",
    description:
      "Accountability mechanisms must operate within clear authority limits. Governance can adjust permissions and record standing changes without interfering with settlement.",
  },
  {
    title: "Separation Preserves Neutral Finality",
    description:
      "By separating issuer responsibility from consensus, transaction history remains irreversible while accountability remains structured and visible at the protocol level.",
  },
];

const team = [
  {
    name: "Tajinder Virk",
    role: "Co-Founder & CEO, Blockmaze",
    photo: "/images/Mask-group-18.png",
    bio: "Tajinder Virk is a global fintech architect and institution builder with a track record of launching and scaling regulated financial ecosystems across multiple jurisdictions. As Co-Founder and CEO of Blockmaze, he leads the strategic vision of building a sovereign-ready, trust-enforced real-world asset blockchain designed to bridge traditional finance with programmable infrastructure.",
  },
  {
    name: "Puneet Mangal",
    role: "Co-Founder & Chief Operating Officer, Blockmaze",
    photo: "/images/Mask-group-19.png",
    bio: "Puneet Mangal is a seasoned entrepreneur with extensive experience in manufacturing, distribution, and global trade of metals and steel products, along with strategic venture-style investments in emerging businesses. As Co-Founder and COO of Blockmaze, he oversees operational execution, infrastructure build-out, and institutional partnerships.",
  },
  {
    name: "Sarvjeet Virk",
    role: "Strategic Advisor, Blockmaze",
    photo: "/images/Mask-group-20.png",
    bio: "Sarvjeet Virk is a technology-focused entrepreneur with deep experience in building regulated financial platforms and high-performance trading infrastructure. As an Advisor to Blockmaze, he provides strategic oversight on technology architecture, scalability, and governance design.",
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

export default function AboutPage() {
  return (
    <>
      {/* Hero — dark gradient matching home page */}
      <section className="about-hero">
        <Container>
          <Breadcrumb items={[{ label: "About" }]} />
          <div className="about-hero-content">
            <h1 className="about-hero-title">
              Independent Governance for Regulated, Real-World{" "}
              <span className="text-primary">Blockchain Infrastructure</span>
            </h1>
            <p className="about-hero-desc">
              The Blockmaze foundation maintains the governance architecture of
              the Blockmaze Layer-0 network, including issuer admission
              standards, on-chain registries, and permission frameworks.
            </p>
          </div>
        </Container>
      </section>

      {/* The Blockmaze Foundation */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading heading={<>About the Blockmaze <span className="text-primary">Foundation</span> &amp; Ecosystem</>} />
          <div className="about-foundation-grid">
            <div className="about-foundation-img">
              <Image
                src="/images/about-img.png"
                alt="The Blockmaze Foundation"
                width={500}
                height={400}
                className="about-rounded-img"
              />
            </div>
            <div className="about-foundation-text">
              <h3 className="about-section-title">The Blockmaze Foundation</h3>
              <p className="about-body-text">
                The Blockmaze foundation is an independent, non-profit entity
                responsible for overseeing governance and issuer accountability
                at the Layer-0 level. It defines issuer eligibility, manages
                registries, enforces proof requirements, and administers
                governance actions within clearly defined authority boundaries.
                It also supports research, grants, and ecosystem initiatives that
                strengthen validator participation and developer engagement
                within the network&apos;s governance framework.
              </p>
              <h4 className="about-subsection-title">Key responsibilities:</h4>
              <ul className="about-bullet-list">
                {[
                  "Define issuer admission and authorization requirements",
                  "Approve and maintain standardized token templates",
                  "Enforce scheduled proof submissions",
                  "Record standing changes and enforcement outcomes",
                  "Execute governance decisions within defined limits",
                  "Support ecosystem programs aligned with protocol standards",
                ].map((item, i) => (
                  <li key={i} className="about-bullet-item">
                    <span className="about-bullet-dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* The Role of the Blockmaze Foundation */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            heading={<>The Role of the Blockmaze <span className="text-primary">Foundation</span></>}
          />
          <RoleTabs roles={roles} />
        </Container>
      </section>

      {/* How the Blockmaze Ecosystem Works */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            heading={<>How the Blockmaze <span className="text-primary">Ecosystem</span> Works</>}
          />
          <div className="about-ecosystem-grid">
            <div className="about-ecosystem-img">
              <Image
                src="/images/ecosystem-work.png"
                alt="How the Blockmaze Ecosystem Works"
                width={600}
                height={450}
                className="about-rounded-img"
              />
            </div>
            <div className="about-ecosystem-list">
              {ecosystemComponents.map((item) => (
                <div key={item.title} className="about-ecosystem-item">
                  <h4 className="about-subsection-title">{item.title}</h4>
                  <p className="about-body-text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Why Accountability Must Be Embedded at the Protocol Layer */}
      <section className="section-padding bg-surface">
        <Container>
          <div className="about-accountability-grid">
            <div className="about-accountability-list">
              <h2 className="section-heading about-heading-left">
                Why Accountability Must Be Embedded at the{" "}
                <span className="text-primary">Protocol</span> Layer
              </h2>
              {accountabilityPoints.map((point) => (
                <div key={point.title} className="about-ecosystem-item">
                  <h4 className="about-subsection-title">{point.title}</h4>
                  <p className="about-body-text-sm">{point.description}</p>
                </div>
              ))}
            </div>
            <div className="about-accountability-img">
              <Image
                src="/images/image-192.png"
                alt="Why Accountability Must Be Embedded"
                width={600}
                height={450}
                className="about-rounded-img"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Long-Term Vision */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading heading={<>Long-Term <span className="text-primary">Vision</span> for Blockmaze</>} />
          <p className="about-vision-desc">
            The long-term vision of Blockmaze is to serve as foundational
            infrastructure for real-world asset issuance across jurisdictions
            while preserving settlement integrity and defined governance
            boundaries.
          </p>
          <ul className="about-vision-list">
            {[
              "Broader participation from regulated issuers",
              "Expansion of sovereign domains aligned with local requirements",
              "Increased validator distribution across the network",
              "Wider adoption of standardized asset templates",
              "Gradual expansion of governance participation",
              "Ongoing refinement of accountability standards",
            ].map((item, i) => (
              <li key={i} className="about-bullet-item">
                <span className="about-bullet-dot" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Leadership & Management */}
      <section className="section-padding bg-surface">
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
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="about-team-photo"
                />
                <h4 className="about-team-name">{member.name}</h4>
                <p className="about-team-role">{member.role}</p>
                <p className="about-body-text-sm">{member.bio}</p>
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
