import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Delegator",
  description: "The Blockmaze delegator platform enables BMZ holders to participate in network security by delegating stake to active validators.",
};

const benefits = [
  { icon: "/images/Frame-4.png", title: "Earn Passive Income", description: "Stake your BMZ and earn rewards without technical setup" },
  { icon: "/images/Institutional.png", title: "Retain 100% Control", description: "Blockmaze supports non-custodial delegation, so you always own your tokens" },
  { icon: "/images/Frame-5.png", title: "Low Barrier to Entry", description: "Start with as little as BMZ and stake as many as you want." },
  { icon: "/images/Frame-6.png", title: "Flexible Management", description: "Redelegate or unbond anytime through the Blockmaze delegator dashboard" },
  { icon: "/images/Frame-7.png", title: "Support Network Security", description: "Contribute to Blockmaze blockchain while earning" },
];

const delegationSteps = [
  { num: "1", title: "Connect Your Wallet", description: "Access the Blockmaze Delegator Platform and connect a Blockmaze-compatible wallet (MetaMask, Kepler, WalletConnect, etc.)." },
  { num: "2", title: "Browse Validators", description: "Navigate to the Validators section and review active validators using filters such as uptime, commission, and total stake." },
  { num: "3", title: "Select a Validator", description: "Open the validator profile and confirm commission parameters, performance history, and active status." },
  { num: "4", title: "Enter Delegation Amount", description: "Choose the amount of BMZ to delegate and review expected rewards and validator commission." },
  { num: "5", title: "Confirm and Sign", description: "Approve the transaction in your wallet and wait for on-chain confirmation. Once confirmed, your delegation becomes active and begins earning rewards according to validator performance." },
];

const dashboardCapabilities = [
  "Delegate and redelegate BMZ",
  "Track rewards and commission impact",
  "View validator performance",
  "Unbond and withdraw stake",
  "Monitor transaction history",
];

const risks = [
  { title: "Slashing Risk", description: "If a validator violates protocol rules or experiences extended downtime, a portion of the delegated stake may be slashed proportionally. Severe violations, such as double-signing, may result in higher penalties." },
  { title: "Liquidity & Opportunity Risk", description: "Delegated BMZ remains locked and cannot be used elsewhere. During the unbonding period, rewards stop accruing, and market price movements may impact value." },
  { title: "Network & Protocol Risk", description: "Protocol upgrades, governance decisions, or smart contract changes may affect staking parameters. Audits and upgrade notices are published, but network evolution carries inherent risk." },
  { title: "Commission & Performance Risk", description: "Validators may adjust commission rates within predefined limits. Prolonged downtime or poor performance can reduce rewards until redelegation occurs." },
];

export default function DelegatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-section-dark text-white">
        <Container>
          <Breadcrumb items={[{ label: "Delegator" }]} />
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-white mb-4">Earn Rewards by Delegating Your BMZ</h1>
              <p className="text-gray-light text-lg leading-relaxed mb-6">
                The Blockmaze delegator platform enables BMZ holders to participate in network security by delegating stake to active validators on the Blockmaze network. Delegators earn staking rewards without running validator infrastructure, while retaining full ownership of their tokens.
              </p>
              <Button href="https://delegator.blockmaze.com/login" variant="primary" external>Log In to Delegator Dashboard</Button>
            </div>
            <div className="lg:w-1/2">
              <Image src="/images/People_counter_system.png" alt="Delegator Platform" width={600} height={400} priority />
            </div>
          </div>
        </Container>
      </section>

      {/* Why Delegate */}
      <section className="section-padding">
        <Container>
          <SectionHeading heading="Why Delegate on Blockmaze?" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="card bg-gray-50 p-6">
                <Image src={b.icon} alt={b.title} width={50} height={50} className="mb-4" />
                <h4 className="text-gray-dark font-semibold mb-2">{b.title}</h4>
                <p className="text-gray-DEFAULT text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What To Evaluate */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-gray-dark mb-4">What To Evaluate Before Delegating</h2>
              <p className="text-gray-DEFAULT mb-6 leading-relaxed">
                Delegation enables BMZ holders to support validator operations without running a node. Delegators remain the rightful owners of their stakes and earn passive rewards while validators&apos; rewards and weight in consensus get multiplied.
              </p>
              <ul className="space-y-2 mb-4">
                {["Profile details, including name, description, website, identity reference, security contact, etc.", "Validator status (Active / Inactive / Deactivating)", "Commission rate, maximum commission, and change limits", "Self-stake and total stake", "Uptime and block production history"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-DEFAULT text-sm">
                    <span className="text-primary mt-0.5">&#8226;</span><span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-DEFAULT text-sm italic">
                Delegation carries shared responsibility. Validator downtime or protocol violations may impact rewards or delegated stake. So, delegators must carefully pick validators.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image src="/images/image-40.png" alt="What To Evaluate" width={500} height={400} />
            </div>
          </div>
        </Container>
      </section>

      {/* How to Delegate */}
      <section className="section-padding">
        <Container>
          <SectionHeading label="Process" heading="How to Delegate Your BMZ" subtext="Delegation allows BMZ holders to support validator operations by assigning stake to active validators. Delegated tokens contribute to validator weight in consensus and earn staking rewards, while remaining under the delegator\u2019s control." />
          <div className="space-y-6 max-w-3xl mx-auto">
            {delegationSteps.map((step) => (
              <div key={step.num} className="card bg-gray-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">{step.num}</div>
                  <div>
                    <h4 className="text-gray-dark font-semibold mb-2">{step.title}</h4>
                    <p className="text-gray-DEFAULT text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Dashboard */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image src="/images/image-41.png" alt="Delegator Dashboard" width={500} height={400} />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-gray-dark mb-6">What Delegators Can Manage From the Dashboard</h2>
              <ul className="space-y-3">
                {dashboardCapabilities.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-DEFAULT">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Rewards & Risks */}
      <section className="section-padding bg-section-dark text-white">
        <Container>
          <h2 className="text-white text-center mb-12">Delegator Rewards, Commitment & Delegation Responsibility</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Earning Rewards */}
            <div className="card bg-white/5 p-6 border border-white/10">
              <Image src="/images/earning.png" alt="Earning Rewards" width={50} height={50} className="mb-4" />
              <h4 className="text-white font-semibold mb-3">1. Earning Rewards Through Delegation</h4>
              <p className="text-gray-light text-sm leading-relaxed">
                Delegated BMZ bears staking rewards while bonded to an active validator. Rewards are generated when validators partake in block production and consensus, and are evenly distributed after deducting validator commission.
              </p>
            </div>
            {/* Unbonding */}
            <div className="card bg-white/5 p-6 border border-white/10">
              <Image src="/images/unbounding.png" alt="Unbonding" width={50} height={50} className="mb-4" />
              <h4 className="text-white font-semibold mb-3">2. Unbonding, Redelegating, and Exit Timeline</h4>
              <p className="text-gray-light text-sm leading-relaxed mb-3">
                Delegation is not instantly liquid. When a delegator initiates unbonding, BMZ tokens enter a fixed unbonding period during which they remain locked and stop earning rewards.
              </p>
              <ul className="space-y-1 text-sm text-gray-light">
                <li>Day 0 → Unbonding initiated</li>
                <li>Days 1-21 → Tokens locked (no rewards; slashing risk remains)</li>
                <li>Day 21 → Tokens released to wallet</li>
              </ul>
            </div>
          </div>

          {/* Risks */}
          <div className="mt-8">
            <div className="card bg-white/5 p-6 border border-white/10">
              <Image src="/images/dele-risk.png" alt="Delegation Risks" width={50} height={50} className="mb-4" />
              <h4 className="text-white font-semibold mb-4">3. Understanding Delegation Risks</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {risks.map((risk) => (
                  <div key={risk.title}>
                    <h5 className="text-white font-semibold mb-2">{risk.title}</h5>
                    <p className="text-gray-light text-sm leading-relaxed">{risk.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <Container>
          <Button href="/contact-us" variant="primary">Talk to Expert</Button>
        </Container>
      </section>
    </>
  );
}
