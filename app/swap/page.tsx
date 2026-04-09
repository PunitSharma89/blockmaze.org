import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Swap",
  description: "The BMZ Swap platform enables participation in Blockmaze governance by converting BMZ into governance-backed GBMZ.",
};

const steps = [
  { num: "1", title: "Issuers and Participants Hold BMZ", desc: "Issuers, institutions, and ecosystem participants hold BMZ tokens to access governance and platform participation." },
  { num: "2", title: "BMZ Is Staked on the Governance Platform", desc: "BMZ is staked through the governance staking interface to signal long-term commitment to the ecosystem." },
  { num: "3", title: "GBMZ Is Issued at a 1:1 Ratio", desc: "For every BMZ staked, an equivalent amount of governance-backed GBMZ is issued." },
  { num: "4", title: "GBMZ Enables Governance Participation", desc: "GBMZ is used to vote on proposals through the DAO using a Quadratic Voting mechanism." },
  { num: "5", title: "Tokens Are Locked for Governance Integrity", desc: "Staked BMZ and issued GBMZ remain locked for 15 days to ensure responsible participation." },
  { num: "6", title: "Unstake or Continue Participation", desc: "After the lock-in period, participants may swap GBMZ back to BMZ at a 1:1 ratio or continue participating in governance." },
];

export default function SwapPage() {
  return (
    <>
      <section className="section-padding bg-section-dark text-white">
        <Container>
          <Breadcrumb items={[{ label: "Swap" }]} />
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-white mb-4">BMZ Governance Staking & Swap Platform</h1>
              <p className="text-gray-light text-lg leading-relaxed mb-6">The BMZ Swap platform enables participation in Blockmaze governance by converting BMZ into governance-backed GBMZ. This platform is designed for issuers, institutions, and ecosystem participants seeking structured, long-term involvement in protocol and market decisions.</p>
              <Button href="https://dev-staking.stackflow.site/" variant="primary" external>Log In to Staking Dashboard</Button>
            </div>
            <div className="lg:w-1/2">
              <Image src="/images/bmz_banner.png" alt="BMZ Swap Platform" width={600} height={400} priority />
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <SectionHeading heading="How BMZ Staking & Swapping Works" />
          <div className="space-y-6 max-w-3xl mx-auto">
            {steps.map((step) => (
              <div key={step.num} className="card bg-gray-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">{step.num}</div>
                  <div>
                    <h4 className="text-gray-dark font-semibold mb-2">{step.title}</h4>
                    <p className="text-gray-DEFAULT text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gray-50">
        <Container>
          <SectionHeading heading="Governance Designed to Prevent Concentration of Power" />
          <p className="text-gray-DEFAULT text-center max-w-3xl mx-auto mb-8 leading-relaxed">Blockmaze governance uses a Quadratic Voting model, where voting influence increases at a decreasing rate as more tokens are used, preventing any single participant from dominating decisions.</p>
          <div className="flex justify-center">
            <Image src="/images/Design.png" alt="Quadratic Voting" width={600} height={400} />
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <SectionHeading heading="Lock-In & Unswap Rules" />
          <p className="text-gray-DEFAULT text-center max-w-3xl mx-auto leading-relaxed">To ensure responsible governance participation, BMZ staking follows a 15-day commitment period. This design discourages short-term influence and protects issuers from sudden governance swings, ensuring decisions are made by participants with sustained alignment. After the commitment period ends, GBMZ can be seamlessly converted back to BMZ at a 1:1 ratio.</p>
        </Container>
      </section>

      <section className="section-padding bg-section-dark text-center">
        <Container>
          <Button href="https://dev-staking.stackflow.site/" variant="white" external>Stake BMZ to Receive GBMZ</Button>
        </Container>
      </section>
    </>
  );
}
