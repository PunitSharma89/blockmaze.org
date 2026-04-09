import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FAQ from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "Governance",
  description:
    "Providing structured policy review, compliance oversight, and long-term governance across protocol, validator, market, and ecosystem funding decisions.",
};

const roles = [
  { icon: "/images/gov-role01.png", title: "Policy Oversight", description: "Review and assess major governance proposals impacting protocol architecture, validator standards, market infrastructure, and ecosystem funding programs." },
  { icon: "/images/gov-role02.png", title: "Compliance Supervision", description: "Evaluate governance actions against regulatory best practices, jurisdictional requirements, and institutional compliance frameworks." },
  { icon: "/images/gov-role03.png", title: "Risk Management", description: "Identify, assess, and mitigate operational, financial, technical, and regulatory risks across decentralized governance activities." },
  { icon: "/images/gov-role04.png", title: "Advisory Governance", description: "Provide non-binding recommendations to the DAO and Foundation to guide long-term protocol strategy and ecosystem development." },
  { icon: "/images/gov-role05.png", title: "Emergency Governance", description: "Support escalation handling, incident response, and contingency governance actions during network or market disruptions." },
  { icon: "/images/gov-role06.png", title: "Long-Term Stewardship", description: "Ensure governance decisions align with long-term network security, sustainability, and institutional trust." },
];

const scopeItems = [
  { icon: "/images/gov-scop-icon01.png", title: "Protocol Governance", description: "Oversight of core blockchain upgrades, smart contract frameworks, and technical standards supporting compliant asset tokenization." },
  { icon: "/images/gov-scop-icon02.png", title: "Validator Governance", description: "Review of validator onboarding criteria, infrastructure standards, reward parameters, slashing policies, and operational compliance requirements." },
  { icon: "/images/gov-scop-icon03.png", title: "Market Infrastructure Governance", description: "Supervision of decentralized exchange policies, swap fee structures, liquidity provisioning standards, market risk controls, and compliance safeguards." },
  { icon: "/images/gov-scop-icon04.png", title: "Treasury & Ecosystem Funding", description: "Oversight of major treasury allocations, strategic ecosystem investments, and funding initiatives executed through the DAO and RFP programs." },
  { icon: "/images/gov-scop-icon05.png", title: "Compliance & Policy Frameworks", description: "Development and review of governance policies addressing regulatory alignment, risk management, and jurisdictional best practices." },
  { icon: "/images/gov-scop-icon06.png", title: "Research & Standards", description: "Guidance on protocol research initiatives, technical standards, and long-term innovation priorities." },
];

const structureItems = [
  { icon: "/images/gov-structure-icon01.png", title: "Blockmaze Foundation", description: "Provides stewardship, neutrality oversight, and governance framework design." },
  { icon: "/images/gov-structure-icon02.png", title: "Governance Council", description: "Acts as the institutional oversight and advisory governance body." },
  { icon: "/images/gov-structure-icon03.png", title: "DAO Governance Platform", description: "Enables decentralized proposal submission, voting, and treasury governance." },
  { icon: "/images/gov-structure-icon04.png", title: "Execution Layer", description: "Implements approved governance decisions via audited smart contracts, timelocks, and multi-signature authorization frameworks." },
];

const operatesSteps = [
  { icon: "/images/gov-council-icon01.png", title: "Proposal Intake", description: "Major governance proposals are submitted for Council review following DAO initiation or Foundation referral." },
  { icon: "/images/gov-council-icon02.png", title: "Advisory Review", description: "Formal recommendations are issued to the DAO and Foundation." },
  { icon: "/images/gov-council-icon03.png", title: "Preliminary Screening", description: "Proposals undergo eligibility checks, compliance assessment, and operational feasibility review." },
  { icon: "/images/gov-council-icon04.png", title: "Governance Coordination", description: "Approved proposals proceed to DAO voting and on-chain execution." },
  { icon: "/images/gov-council-icon05.png", title: "Risk & Impact Analysis", description: "Council members assess technical, regulatory, financial, and ecosystem-wide implications." },
  { icon: "/images/gov-council-icon06.png", title: "Post-Execution Oversight", description: "Council reviews implementation outcomes and long-term impact." },
];

const involvedItems = [
  { icon: "/images/involved-icon01.png", title: "For Institutions", description: "Explore structured governance participation and advisory collaboration opportunities." },
  { icon: "/images/involved-icon02.png", title: "For Developers & Validators", description: "Submit technical proposals, standards initiatives, and governance tooling requests through the DAO or RFP Portal." },
  { icon: "/images/involved-icon03.png", title: "For Ecosystem Partners", description: "Engage with the Governance Council for policy discussions, governance consultations, and institutional partnerships." },
];

const faqItems = [
  { question: "1. What is the Governance Council?", answer: "The Governance Council is the formal policy and oversight body within the Blockmaze governance framework, responsible for reviewing major proposals, assessing risks, and providing institutional supervision." },
  { question: "2. How does the Council interact with the DAO?", answer: "The Council provides non-binding advisory recommendations to the DAO and Foundation, reviewing proposals before they proceed to community voting." },
  { question: "3. Can the Council override DAO decisions?", answer: "No. The Council provides advisory oversight and compliance review but does not have the authority to override approved DAO governance decisions." },
];

export default function GovernancePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-section-dark text-white">
        <Container>
          <Breadcrumb items={[{ label: "Governance" }]} />
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h4 className="text-primary font-semibold mb-2">Blockmaze Governance Council</h4>
              <h1 className="text-white mb-4">Institutional Oversight for a Trusted Web3 Economy</h1>
              <p className="text-gray-light text-lg leading-relaxed">
                Providing structured policy review, compliance oversight, and long-term governance across protocol, validator, market, and ecosystem funding decisions.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image src="/images/gov-banner-1.png" alt="Governance Council" width={600} height={400} priority />
            </div>
          </div>
        </Container>
      </section>

      {/* About */}
      <section className="section-padding">
        <Container>
          <p className="text-gray-DEFAULT text-center max-w-4xl mx-auto leading-relaxed">
            The Blockmaze governance council is the formal policy and oversight body within the Blockmaze governance framework. It is responsible for reviewing major governance proposals, assessing regulatory and operational risks, and providing institutional supervision to ensure long-term network stability and compliance.
          </p>
        </Container>
      </section>

      {/* Role Within Governance Framework */}
      <section className="section-padding bg-gray-50">
        <Container>
          <SectionHeading heading="Role Within the Governance Framework" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role) => (
              <div key={role.title} className="card bg-white p-6">
                <Image src={role.icon} alt={role.title} width={50} height={50} className="mb-4" />
                <h4 className="text-gray-dark font-semibold mb-2">{role.title}</h4>
                <p className="text-gray-DEFAULT text-sm leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Governance Scope */}
      <section className="section-padding">
        <Container>
          <SectionHeading heading="Governance Scope" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scopeItems.map((item) => (
              <div key={item.title} className="card bg-gray-50 p-6">
                <Image src={item.icon} alt={item.title} width={50} height={50} className="mb-4" />
                <h4 className="text-gray-dark font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-DEFAULT text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Governance Structure */}
      <section className="section-padding bg-gray-50">
        <Container>
          <SectionHeading heading="Governance Structure" subtext="The Blockmaze DAO enables authorized governance participants to take part in transparent, secure decision-making through a structured on-chain governance process." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {structureItems.map((item) => (
              <div key={item.title} className="card bg-white p-6 text-center">
                <Image src={item.icon} alt={item.title} width={60} height={60} className="mx-auto mb-4" />
                <h4 className="text-gray-dark font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-DEFAULT text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How the Council Operates */}
      <section className="section-padding">
        <Container>
          <SectionHeading heading="How the Governance Council Operates" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {operatesSteps.map((step) => (
              <div key={step.title} className="card bg-gray-50 p-6">
                <Image src={step.icon} alt={step.title} width={50} height={50} className="mb-4" />
                <h4 className="text-gray-dark font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-DEFAULT text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Compliance & Risk Framework */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-gray-dark mb-4">Compliance & Risk Framework</h2>
              <p className="text-gray-DEFAULT mb-6 leading-relaxed">
                The Governance Council operates under a structured compliance and risk management framework designed to align decentralized governance with institutional standards.
              </p>
              <ul className="space-y-2">
                {["Regulatory alignment assessments", "Audit-backed review processes", "Jurisdictional risk reviews", "Formal documentation of decisions", "Conflict-of-interest disclosures", "Incident escalation protocols"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-DEFAULT">
                    <span className="text-primary mt-1">&#8226;</span><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <Image src="/images/risk-sec.png" alt="Compliance & Risk Framework" width={600} height={400} />
            </div>
          </div>
        </Container>
      </section>

      {/* Get Involved */}
      <section className="section-padding">
        <Container>
          <SectionHeading heading="Get Involved" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {involvedItems.map((item) => (
              <div key={item.title} className="card bg-gray-50 p-6 text-center">
                <Image src={item.icon} alt={item.title} width={60} height={60} className="mx-auto mb-4" />
                <h4 className="text-gray-dark font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-DEFAULT text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <Container>
          <SectionHeading heading="Frequently Asked Questions" />
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-5/12">
              <Image src="/images/faq-img.png" alt="FAQ" width={454} height={425} />
            </div>
            <div className="lg:w-7/12">
              <FAQ items={faqItems} />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding bg-section-dark text-center">
        <Container>
          <Button href="/contact-us" variant="white">Contact the Council</Button>
        </Container>
      </section>
    </>
  );
}
