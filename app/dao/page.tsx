import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FAQ from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "DAO",
  description: "Enabling on-chain decision-making and protocol participation through the Blockmaze DAO governance platform.",
};

const metrics = [
  { label: "Total Proposals", value: "79" },
  { label: "Assets Tokenization", value: "01" },
  { label: "Council Members", value: "04" },
  { label: "Total Votes Cast", value: "41" },
];

const steps = [
  { icon: "/images/dao-step01.png", title: "Proposal Submission", description: "Governance participants submit proposals for review, including minting requests, proof-of-reserve audits, and protocol or governance actions." },
  { icon: "/images/dao-step02.png", title: "Active Voting", description: "Eligible members cast votes using GBMZ tokens, with voting power calculated as \u221A(GBMZ allocated) to support balanced representation." },
  { icon: "/images/dao-step03.png", title: "Resolution and Execution", description: "Votes are tallied at the defined deadline and recorded on-chain. Approved proposals are executed automatically through smart contract workflows." },
];

const coreMechanisms = [
  { icon: "/images/core01.png", title: "Quadratic Voting", description: "Fair governance is supported through a quadratic voting mechanism within the DAO governance platform, where voting power is calculated as \u221A(GBMZ allocated)." },
  { icon: "/images/core02.png", title: "Proof of Reserve", description: "Governance participants review and vote on proof-of-reserve audits to ensure that all assets issued through real-world asset tokenization remain fully backed." },
  { icon: "/images/core03.png", title: "Minting Approval", description: "Requests to mint new tokens representing real-world assets are submitted for governance approval, with each proposal undergoing formal review by the Governance Council." },
];

const faqItems = [
  { question: "1. Who can participate in DAO governance?", answer: "Participation is available to authorized governance participants who hold GBMZ tokens, meet defined eligibility requirements, and connect an approved wallet during active voting periods." },
  { question: "2. How are governance proposals created and approved?", answer: "Proposals are submitted through the DAO interface, reviewed by governance participants, voted on using decentralized decision-making, and executed automatically." },
  { question: "3. How does voting power work?", answer: "Voting power uses quadratic weighting to ensure fair representation and prevent influence concentration." },
  { question: "4. How is treasury governance managed?", answer: "Treasury governance is managed through proposals and voting, with approved allocations executed on-chain to fund ecosystem programs." },
  { question: "5. How is transparency maintained?", answer: "All proposals, votes, and execution records are published on-chain to ensure verifiable activity and full transparency across governance operations." },
];

export default function DAOPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-section-dark text-white">
        <Container>
          <Breadcrumb items={[{ label: "DAO" }]} />
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h4 className="text-primary font-semibold mb-2">Blockmaze DAO</h4>
              <h1 className="text-white mb-4">On-chain Governance Platform</h1>
              <p className="text-gray-light text-lg leading-relaxed mb-6">Enabling Decision-making and Protocol Participation</p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact-us" variant="primary">Contact Us</Button>
                <Button href="https://dao.blockmaze.org/proposals?tab=active" variant="outline" external>View Proposals</Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Image src="/images/dao-banner-1.png" alt="Blockmaze DAO" width={600} height={400} priority />
            </div>
          </div>
        </Container>
      </section>

      {/* Metrics */}
      <section className="py-12 bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="text-4xl font-bold text-primary mb-2">{m.value}</div>
                <div className="text-gray-DEFAULT text-sm">{m.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* About */}
      <section className="section-padding bg-gray-50">
        <Container>
          <SectionHeading heading="About The Blockmaze DAO" />
          <p className="text-gray-DEFAULT text-center max-w-3xl mx-auto mb-6 leading-relaxed">
            The DAO exists to support decentralized decision-making by allowing token holders to propose, review, and vote on governance actions.
          </p>
          <p className="text-gray-DEFAULT text-center max-w-3xl mx-auto leading-relaxed">
            Community governance is executed through a structured DAO governance platform that enables transparent participation, verifiable voting, and accountable execution of approved proposals.
          </p>
        </Container>
      </section>

      {/* How Governance Works */}
      <section className="section-padding">
        <Container>
          <SectionHeading heading="How Governance Works" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="card bg-gray-50 p-6 text-center">
                <Image src={step.icon} alt={step.title} width={80} height={80} className="mx-auto mb-4" />
                <h4 className="text-gray-dark font-semibold mb-2">Step {i + 1}: {step.title}</h4>
                <p className="text-gray-DEFAULT text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Voting Eligibility */}
      <section className="section-padding bg-gray-50">
        <Container>
          <SectionHeading heading="Voting Eligibility Requirements" />
          <ul className="max-w-2xl mx-auto space-y-3">
            {[
              "Verified governance participants approved through governance access controls",
              "Hold GBMZ tokens in connected wallet for decentralized decision-making",
              "Maintain an active wallet connection during the voting period for on-chain vote submission",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-DEFAULT">
                <span className="text-primary mt-1">&#8226;</span><span>{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Core Governance Mechanisms */}
      <section className="section-padding">
        <Container>
          <SectionHeading heading="Core Governance Mechanisms" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreMechanisms.map((m) => (
              <div key={m.title} className="card bg-gray-50 p-6 text-center">
                <Image src={m.icon} alt={m.title} width={60} height={60} className="mx-auto mb-4" />
                <h4 className="text-gray-dark font-semibold mb-2">{m.title}</h4>
                <p className="text-gray-DEFAULT text-sm leading-relaxed">{m.description}</p>
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
          <Button href="/contact-us" variant="white">Talk to Expert</Button>
        </Container>
      </section>
    </>
  );
}
