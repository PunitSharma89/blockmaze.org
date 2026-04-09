import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQ from "@/components/ui/FAQ";

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
    bio: "Tajinder Virk is a global fintech architect and institution builder with a track record of launching and scaling regulated financial ecosystems across multiple jurisdictions. As Co-Founder and CEO of Blockmaze, he leads the strategic vision of building a sovereign-ready, trust-enforced real-world asset blockchain designed to bridge traditional finance with programmable infrastructure. With deep expertise spanning wealth management, investment banking, payments, and cross-border regulatory frameworks, Tajinder focuses on designing systems that eliminate structural conflicts of interest, restore transparency, and create durable financial rails for the next generation of global asset ownership.",
  },
  {
    name: "Puneet Mangal",
    role: "Co-Founder & Chief Operating Officer, Blockmaze",
    photo: "/images/Mask-group-19.png",
    bio: "Puneet Mangal is a seasoned entrepreneur with extensive experience in manufacturing, distribution, and global trade of metals and steel products, along with strategic venture-style investments in emerging businesses. As Co-Founder and COO of Blockmaze, he oversees operational execution, infrastructure build-out, and institutional partnerships. His background in real-world asset industries brings grounded commercial insight to Blockmaze\u2019s tokenization framework, ensuring that digital representations of assets are anchored in practical supply chain realities, capital discipline, and scalable operational processes.",
  },
  {
    name: "Sarvjeet Virk",
    role: "Strategic Advisor, Blockmaze",
    photo: "/images/Mask-group-20.png",
    bio: "Sarvjeet Virk is a technology-focused entrepreneur with deep experience in building regulated financial platforms and high-performance trading infrastructure. As an Advisor to Blockmaze, he provides strategic oversight on technology architecture, scalability, and governance design. With a strong foundation in developing compliant, resilient financial systems across global markets, Sarvjeet plays a critical role in shaping Blockmaze\u2019s institutional-grade reliability and long-term technological durability.",
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
      {/* Hero */}
      <section
        className="section-padding bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/banner-bg01.png)" }}
      >
        <Container>
          <Breadcrumb items={[{ label: "About" }]} />
          <div className="max-w-3xl">
            <h1 className="text-gray-dark mb-4">
              Independent Governance for Regulated, Real-World Blockchain
              Infrastructure
            </h1>
            <p className="text-gray-DEFAULT text-lg leading-relaxed">
              The Blockmaze foundation maintains the governance architecture of
              the Blockmaze Layer-0 network, including issuer admission
              standards, on-chain registries, and permission frameworks.
            </p>
          </div>
        </Container>
      </section>

      {/* The Blockmaze Foundation */}
      <section className="section-padding">
        <Container>
          <SectionHeading heading="About the Blockmaze Foundation & Ecosystem" />
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="lg:w-1/2">
              <Image
                src="/images/about-img.png"
                alt="The Blockmaze Foundation"
                width={500}
                height={400}
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-gray-dark mb-4">The Blockmaze Foundation</h3>
              <p className="text-gray-DEFAULT mb-6 leading-relaxed">
                The Blockmaze foundation is an independent, non-profit entity
                responsible for overseeing governance and issuer accountability
                at the Layer-0 level. It defines issuer eligibility, manages
                registries, enforces proof requirements, and administers
                governance actions within clearly defined authority boundaries.
                It also supports research, grants, and ecosystem initiatives that
                strengthen validator participation and developer engagement
                within the network&apos;s governance framework.
              </p>
              <h4 className="text-gray-dark font-semibold mb-3">
                Key responsibilities:
              </h4>
              <ul className="space-y-2">
                {[
                  "Define issuer admission and authorization requirements",
                  "Approve and maintain standardized token templates",
                  "Enforce scheduled proof submissions",
                  "Record standing changes and enforcement outcomes",
                  "Execute governance decisions within defined limits",
                  "Support ecosystem programs aligned with protocol standards",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-DEFAULT"
                  >
                    <span className="text-primary mt-1">&#8226;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* The Role of the Blockmaze Foundation */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-5/12">
              <h2 className="text-gray-dark mb-6">
                The Role of the Blockmaze Foundation
              </h2>
              <Image
                src="/images/image-191-1.png"
                alt="The Role of the Blockmaze Foundation"
                width={500}
                height={400}
              />
            </div>
            <div className="lg:w-7/12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {roles.map((role) => (
                  <div key={role.title} className="card bg-white p-6">
                    <Image
                      src={role.icon}
                      alt={role.title}
                      width={50}
                      height={50}
                      className="mb-4"
                    />
                    <h4 className="text-gray-dark font-semibold mb-2">
                      {role.title}
                    </h4>
                    <p className="text-gray-DEFAULT text-sm leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How the Blockmaze Ecosystem Works */}
      <section className="section-padding">
        <Container>
          <SectionHeading heading="How the Blockmaze Ecosystem Works" />
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-1/2">
              <Image
                src="/images/ecosystem-work.png"
                alt="How the Blockmaze Ecosystem Works"
                width={600}
                height={450}
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              {ecosystemComponents.map((item) => (
                <div key={item.title}>
                  <h4 className="text-gray-dark font-semibold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-DEFAULT text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Why Accountability Must Be Embedded at the Protocol Layer */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-gray-dark">
                Why Accountability Must Be Embedded at the Protocol Layer
              </h2>
              {accountabilityPoints.map((point) => (
                <div key={point.title}>
                  <h4 className="text-gray-dark font-semibold mb-2">
                    {point.title}
                  </h4>
                  <p className="text-gray-DEFAULT text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/images/image-192.png"
                alt="Why Accountability Must Be Embedded"
                width={600}
                height={450}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Long-Term Vision */}
      <section className="section-padding">
        <Container>
          <SectionHeading heading="Long-Term Vision for Blockmaze" />
          <p className="text-gray-DEFAULT text-center max-w-3xl mx-auto mb-8 leading-relaxed">
            The long-term vision of Blockmaze is to serve as foundational
            infrastructure for real-world asset issuance across jurisdictions
            while preserving settlement integrity and defined governance
            boundaries.
          </p>
          <ul className="max-w-2xl mx-auto space-y-3">
            {[
              "Broader participation from regulated issuers",
              "Expansion of sovereign domains aligned with local requirements",
              "Increased validator distribution across the network",
              "Wider adoption of standardized asset templates",
              "Gradual expansion of governance participation",
              "Ongoing refinement of accountability standards",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-DEFAULT"
              >
                <span className="text-primary mt-1">&#8226;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Leadership & Management */}
      <section className="section-padding bg-gray-50">
        <Container>
          <SectionHeading heading="Leadership & Management" />
          <p className="text-gray-DEFAULT text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            The Blockmaze foundation is guided by a management team responsible
            for maintaining governance integrity, operational discipline, and
            structured oversight across the Layer-0 network. The team brings
            experience across blockchain architecture, regulatory frameworks,
            financial systems, and protocol governance. Their responsibility is
            to ensure that accountability standards remain consistent,
            documented, and enforceable as the ecosystem expands.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="card bg-white p-6 text-center"
              >
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h4 className="text-gray-dark font-semibold">{member.name}</h4>
                <p className="text-primary text-sm mb-4">{member.role}</p>
                <p className="text-gray-DEFAULT text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <Container>
          <SectionHeading heading="Frequently Asked Questions" />
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
