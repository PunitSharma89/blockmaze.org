import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "RFP | Blockmaze",
  description:
    "Official framework for ecosystem funding, validator infrastructure, governance tooling, and RWA tokenization initiatives under a structured review process.",
};

const processStepsRow1 = [
  {
    title: "RFP Issuance",
    description:
      "Blockmaze issues formal RFPs outlining ecosystem priorities, funding scope, technical requirements, compliance expectations, and evaluation criteria.",
  },
  {
    title: "Proposal Submission",
    description:
      "Applicants submit structured proposals detailing scope, milestones, compliance considerations, and budget requirements.",
  },
  {
    title: "Preliminary Screening",
    description:
      "Proposals undergo eligibility checks, compliance assessment, and strategic alignment review.",
  },
];

const processStepsRow2 = [
  {
    title: "Technical & Risk Review",
    description:
      "Subject-matter experts assess feasibility, security, regulatory exposure, and long-term ecosystem impact.",
  },
  {
    title: "Governance Council Review",
    description:
      "Major proposals are reviewed for policy alignment, risk management, and institutional compliance.",
  },
  {
    title: "DAO Approval",
    description:
      "Funding proposals requiring treasury allocation proceed to DAO voting for decentralized decision-making.",
  },
];

const processStepsRow3 = [
  {
    title: "Grant Agreement & Onboarding",
    description:
      "Approved applicants enter formal grant or partnership agreements defining milestones and reporting obligations.",
  },
  {
    title: "Milestone-Based Disbursement",
    description:
      "Funds are released in phases based on verified milestone completion.",
  },
  {
    title: "Ongoing Reporting & Oversight",
    description:
      "Projects submit progress reports and undergo performance monitoring throughout execution.",
  },
];

const programCards = [
  {
    title: "Open RFPs",
    description:
      "Publicly listed funding programs and partnership calls aligned with strategic ecosystem priorities.",
  },
  {
    title: "Rolling Submissions",
    description:
      "Proposal intake for high-impact ecosystem initiatives.",
  },
  {
    title: "Strategic RFPs",
    description:
      "Invitation-based proposals for major infrastructure, liquidity, and institutional partnerships.",
  },
];

const eligibilityItems = [
  "Registered development teams",
  "Infrastructure providers, research institutions, or legal entities",
  "Demonstrated technical or operational capability",
  "Alignment with Blockmaze ecosystem priorities",
  "Clear project scope and deliverables",
];

const complianceItems = [
  "Jurisdictional eligibility screening",
  "Conflict-of-interest disclosures",
  "Regulatory risk assessment",
  "Acceptance of grant and reporting terms",
];

const evaluationCriteria = [
  "Regulatory alignment assessments",
  "Long-term ecosystem value",
  "Technical feasibility and security posture",
  "Budget transparency and cost efficiency",
  "Compliance and regulatory readiness",
  "Milestone clarity and measurability",
  "Team credibility and execution capability",
];

const transparencyFeatures = [
  "Public listing of funded proposals",
  "Periodic ecosystem funding reports",
  "On-chain tracking of treasury disbursements",
  "Performance monitoring dashboards",
  "Published evaluation summaries",
];

const faqItems = [
  {
    question: "Who can submit an RFP?",
    answer:
      "Developers, infrastructure providers, research institutions, startups, and established enterprises meeting eligibility and compliance requirements may submit proposals.",
  },
  {
    question: "How are RFPs evaluated?",
    answer:
      "Governance is coordinated across the Foundation, the Governance Council, and a dedicated DAO governance platform supporting structured decentralized decision-making.",
  },
  {
    question: "Is DAO approval required for all RFPs?",
    answer:
      "Developers, validators, and partners may submit proposals, grant applications, and infrastructure requests through the RFP Portal and access tooling via the Developer Portal for review under structured ecosystem programs.",
  },
  {
    question: "How are funds disbursed?",
    answer:
      "The foundation maintains separation from commercial operations, market execution, and protocol authority while supporting governance design, validator standards, developer frameworks, and technical standards.",
  },
  {
    question: "What compliance checks are required?",
    answer:
      "The foundation maintains separation from commercial operations, market execution, and protocol authority while supporting governance design, validator standards, developer frameworks, and technical standards.",
  },
  {
    question: "How is transparency maintained?",
    answer:
      "The foundation maintains separation from commercial operations, market execution, and protocol authority while supporting governance design, validator standards, developer frameworks, and technical standards.",
  },
];

export default function RfpPage() {
  return (
    <>
      <Container>
        <Breadcrumb items={[{ label: "RFP" }]} />
      </Container>

      {/* Hero Section */}
      <section className="py-8 md:py-12">
        <Container>
          <div className="bg-[#fafafa] rounded-[50px] border border-[#d8d8d8] px-5 md:px-8 pt-10 md:pt-14 pb-10 md:pb-14 text-center">
            <div className="inline-block border border-black rounded-full px-8 py-2.5 mb-5">
              <span className="text-black text-base">Blockmaze RFP Portal</span>
            </div>
            <h1 className="text-[#0f0f0f] text-3xl md:text-5xl lg:text-[60px] font-medium leading-tight md:leading-[72px] max-w-[1080px] mx-auto mb-4">
              Structured Ecosystem Funding & Partnership Framework
            </h1>
            <p className="text-[#4b4b4b] text-base md:text-lg leading-7 max-w-[900px] mx-auto mb-8">
              The Blockmaze DAO enables authorized governance participants to take part in transparent, secure decision-making through a structured on-chain governance process.
            </p>
            <Button href="#" variant="primary">
              Submit an RFP
            </Button>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            label="About the Blockmaze RFP Portal"
            heading="About the Blockmaze RFP Portal"
          />
          <p className="text-gray-DEFAULT text-lg leading-relaxed max-w-4xl mx-auto text-center">
            The Blockmaze RFP Portal is the official ecosystem funding, procurement, and partnership interface of the Blockmaze Foundation. It provides a structured intake, review, and approval framework for proposals supporting protocol development, validator infrastructure, decentralized market operations, governance tooling, and real-world asset tokenization platforms.
          </p>
        </Container>
      </section>

      {/* RFP Program Structure */}
      <section className="section-padding bg-gray-50">
        <Container>
          <SectionHeading
            label="RFP Program"
            heading="RFP Program Structure"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-gray-200"
              >
                <h3 className="text-gray-dark text-xl font-semibold mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-DEFAULT leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            label="How it Works?"
            heading="How the RFP Process Works"
          />
          {[processStepsRow1, processStepsRow2, processStepsRow3].map(
            (row, rowIdx) => (
              <div
                key={rowIdx}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
              >
                {row.map((step, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
                  >
                    <h3 className="text-gray-dark text-lg font-semibold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-DEFAULT text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            )
          )}
        </Container>
      </section>

      {/* Eligibility & Compliance */}
      <section className="section-padding bg-gray-50">
        <Container>
          <SectionHeading
            label="Eligibility & Compliance"
            heading="Eligibility & Compliance Requirements"
          />
          <p className="text-gray-DEFAULT text-lg leading-relaxed max-w-4xl mx-auto text-center mb-12">
            Participation in the RFP program is available to qualified applicants meeting defined eligibility and compliance criteria.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-gray-dark text-xl font-semibold mb-6">
                Eligibility Requirements
              </h3>
              <ul className="space-y-3">
                {eligibilityItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-DEFAULT"
                  >
                    <span className="text-primary mt-1">&#8226;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-gray-dark text-xl font-semibold mb-6">
                Compliance Requirements
              </h3>
              <ul className="space-y-3">
                {complianceItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-DEFAULT"
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

      {/* Evaluation Criteria */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            label="Evaluation"
            heading="Evaluation Criteria"
          />
          <p className="text-gray-DEFAULT text-lg leading-relaxed max-w-4xl mx-auto text-center mb-12">
            All proposals are evaluated using a structured, transparent framework.
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {evaluationCriteria.map((criteria, idx) => (
              <span
                key={idx}
                className="inline-block bg-gray-50 border border-gray-200 rounded-full px-6 py-3 text-gray-DEFAULT text-sm"
              >
                {criteria}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Transparency & Reporting */}
      <section className="section-padding bg-gray-50">
        <Container>
          <SectionHeading
            label="Transparency"
            heading="Transparency & Reporting"
          />
          <p className="text-gray-DEFAULT text-lg leading-relaxed max-w-4xl mx-auto text-center mb-12">
            The RFP Portal operates under a transparency-first framework to ensure accountable ecosystem funding.
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {transparencyFeatures.map((feature, idx) => (
              <span
                key={idx}
                className="inline-block bg-white border border-gray-200 rounded-full px-6 py-3 text-gray-DEFAULT text-sm"
              >
                {feature}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            label="FAQ"
            heading="Frequently Asked Questions"
          />
          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((faq, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
              >
                <h3 className="text-gray-dark text-lg font-semibold mb-3">
                  {idx + 1}. {faq.question}
                </h3>
                <p className="text-gray-DEFAULT leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
