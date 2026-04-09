import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Validator",
  description: "The Blockmaze Validator Platform is designed for users who want to run, manage, and operate validator nodes on the Blockmaze network.",
};

const userCategories = [
  { image: "/images/validator-plat001.png", title: "Node operators running Blockmaze validator nodes" },
  { image: "/images/validator-plat002.png", title: "Participants seeking to validate blocks and earn staking rewards" },
  { image: "/images/validator-plat003.png", title: "Validators managing stake, commission, uptime, and network participation" },
];

const steps = [
  { num: "1", title: "Issuers and Participants Hold BMZ", description: "Issuers, institutions, and ecosystem participants hold BMZ tokens to access governance and platform participation.", details: ["Operating System: Ubuntu 22.04", "Memory: Minimum 4 GB RAM", "Storage: At least 20 GB available disk space", "Network: Stable, continuous internet connection"] },
  { num: "2", title: "Access the Validator Platform", description: "Validators log in through the Blockmaze Validator interface by connecting their running node and wallet.", details: ["Enter the node\u2019s RPC URL", "Authenticate using Blockmaze compatible wallets \u2013 Kepler, MetaMask, etc.", "Access the validator dashboard upon successful connection"] },
  { num: "3", title: "Register Validator Details", description: "Validators create a public validator profile visible to the network.", details: ["Validator name and description", "Optional website or reference link", "Identity and security contact details", "Commission parameters"] },
  { num: "4", title: "Stake BMZ and Activate Validation", description: "Validators must bond a minimum amount of BMZ tokens to activate validation.", details: ["Bonded tokens remain locked while validating", "Commission rates define validator reward share", "Validators become active once minimum stake requirements are met"] },
  { num: "5", title: "Begin Block Validation", description: "Once active, validators participate in transaction validation and block production. Validators are expected to maintain uptime and follow network rules to remain active.", details: [] },
];

export default function ValidatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-section-dark text-white">
        <Container>
          <Breadcrumb items={[{ label: "Validator" }]} />
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-white mb-4">Blockmaze Validator Program</h1>
              <p className="text-gray-light text-lg leading-relaxed mb-6">
                The Blockmaze Validator Platform is designed for users who want to run, manage, and operate validator nodes on the Blockmaze network. Validators earn staking rewards in return for correct participation in transaction validation, block production, and protocol security.
              </p>
              <Button href="/contact-us" variant="primary">Log In to Validator Dashboard</Button>
            </div>
            <div className="lg:w-1/2">
              <Image src="/images/validator-banner.png" alt="Validator Program" width={600} height={400} priority />
            </div>
          </div>
        </Container>
      </section>

      {/* Who Should Use */}
      <section className="section-padding">
        <Container>
          <SectionHeading heading="Who Should Use the Blockmaze Validator Platform" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {userCategories.map((cat) => (
              <div key={cat.title} className="card bg-gray-50 p-6 text-center">
                <Image src={cat.image} alt={cat.title} width={200} height={150} className="mx-auto mb-4" />
                <p className="text-gray-dark font-semibold text-sm">{cat.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How to Participate */}
      <section className="section-padding bg-gray-50">
        <Container>
          <SectionHeading heading="How to Participate in the Blockmaze Blockchain Consensus Mechanism" subtext="Becoming a validator on the Blockmaze network requires meeting defined technical and staking requirements and completing validator registration through the dashboard." />
          <div className="space-y-8 max-w-3xl mx-auto">
            {steps.map((step) => (
              <div key={step.num} className="card bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">{step.num}</div>
                  <div>
                    <h4 className="text-gray-dark font-semibold mb-2">{step.title}</h4>
                    <p className="text-gray-DEFAULT text-sm leading-relaxed mb-3">{step.description}</p>
                    {step.details.length > 0 && (
                      <ul className="space-y-1">
                        {step.details.map((d, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-DEFAULT">
                            <span className="text-primary mt-0.5">&#8226;</span><span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
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
