import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Tokenomics",
  description: "Blockmaze tokenomics model designed to align network security, governance participation, and long-term ecosystem sustainability.",
};

const tokenAllocation = [
  { category: "Founders \u2013 Genesis Liquidity & Past KPI/IP Tranche", pct: "1%", tokens: "1,000,000,000", locking: "0", vesting: "0" },
  { category: "Founders \u2013 Core Allocation", pct: "19%", tokens: "19,000,000,000", locking: "12 Months", vesting: "8 Years" },
  { category: "Genesis Validator Compensation Pool", pct: "1%", tokens: "1,000,000,000", locking: "6 Months Lock", vesting: "36 Months" },
  { category: "Early / Strategic Investors", pct: "5%", tokens: "5,000,000,000", locking: "12 Months", vesting: "Minimum 4 Years" },
  { category: "Vendor & Contributor Performance Pool", pct: "6%", tokens: "6,000,000,000", locking: "\u2014", vesting: "\u2014" },
  { category: "RWA, Business Development & Protocol Operations Team", pct: "6%", tokens: "6,000,000,000", locking: "\u2014", vesting: "Minimum 4 Years" },
  { category: "Advisors & Specialized Experts", pct: "2%", tokens: "2,000,000,000", locking: "12 Months", vesting: "3 Years" },
  { category: "Stakers & Validators (Long-Term Security Emissions)", pct: "20%", tokens: "20,000,000,000", locking: "\u2014", vesting: "\u2014" },
  { category: "Community Users & Contributors", pct: "12%", tokens: "12,000,000,000", locking: "\u2014", vesting: "\u2014" },
  { category: "Ecosystem & RWA Adoption Fund", pct: "10%", tokens: "10,000,000,000", locking: "\u2014", vesting: "\u2014" },
  { category: "Protocol-Owned Liquidity (POL)", pct: "3.50%", tokens: "3,500,000,000", locking: "\u2014", vesting: "\u2014" },
  { category: "Tactical Exchange & MM Incentives", pct: "3.50%", tokens: "3,500,000,000", locking: "\u2014", vesting: "\u2014" },
  { category: "Circuit-Breaker Reserve (Emergency)", pct: "4%", tokens: "4,000,000,000", locking: "\u2014", vesting: "\u2014" },
  { category: "Foundation Operations", pct: "2%", tokens: "2,000,000,000", locking: "\u2014", vesting: "\u2014" },
  { category: "Ecosystem & Public Grants", pct: "2%", tokens: "2,000,000,000", locking: "\u2014", vesting: "\u2014" },
  { category: "Strategic Long-Term Reserves", pct: "3%", tokens: "3,000,000,000", locking: "\u2014", vesting: "\u2014" },
];

export default function TokenomicsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-white">
        <Container>
          <Breadcrumb items={[{ label: "Tokenomics" }]} />
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-gray-dark mb-4">Blockmaze Tokenomics</h1>
              <h3 className="text-gray-dark mb-4">Designed to Secure the Network, Govern Change, and Scale Responsibly</h3>
              <p className="text-gray-DEFAULT mb-6 leading-relaxed">Blockmaze&apos;s tokenomics model is designed to align network security, governance participation, and long-term ecosystem sustainability. The framework balances utility, incentives, and economic controls to support validators, delegators, developers, and governance participants while promoting responsible growth of the BlockMaze network.</p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact-us" variant="primary">Contact Us</Button>
                <Button href="/whitepaper" variant="outline">Read Whitepaper</Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Image src="/images/tokenomics-img.png" alt="Blockmaze Tokenomics" width={600} height={400} priority />
            </div>
          </div>
        </Container>
      </section>

      {/* Core Token Utility */}
      <section className="section-padding bg-gray-50">
        <Container>
          <SectionHeading label="Token Utility" heading="Core Token Utility" subtext="The Blockmaze token is a functional coordination asset that aligns security, governance, and ecosystem participation across the network." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Network Security", desc: "The token underpins network security through staking and validation.", bullets: ["Validators stake tokens to participate in consensus", "Delegators stake to support validators and share security incentives", "Rewards are designed to favor long-term uptime, reliability, and honest behavior", "Slashing and penalties enforce protocol integrity"] },
              { title: "Governance Participation", desc: "The token enables decentralized and accountable decision-making.", bullets: ["Vote on protocol upgrades and network parameters", "Approve ecosystem initiatives and fund allocations", "Participate in governance proposals and reviews", "Influence is tied to active participation, not passive holding"] },
              { title: "Ecosystem Coordination", desc: "The token aligns incentives across all ecosystem participants.", bullets: ["Incentivizes contributors, developers, and infrastructure providers", "Supports ecosystem programs, grants, and RWA initiatives", "Aligns economic rewards with verifiable network contribution"] },
              { title: "Access & Protocol Interaction", desc: "The token facilitates structured and permissionless network access.", bullets: ["Access governance processes and validator infrastructure", "Interact with protocol-level services and ecosystem modules", "Enable accountable participation without centralized control"] },
            ].map((item) => (
              <div key={item.title} className="card bg-white p-6">
                <h4 className="text-gray-dark font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-DEFAULT mb-3 text-sm">{item.desc}</p>
                <ul className="space-y-1">{item.bullets.map((b, i) => <li key={i} className="flex items-start gap-2 text-sm text-gray-DEFAULT"><span className="text-primary mt-0.5">&#8226;</span><span>{b}</span></li>)}</ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Token Allocation Table */}
      <section className="section-padding bg-section-dark text-white">
        <Container>
          <SectionHeading label="Token Allocation" heading="Token Allocation Model" />
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-3 px-4 text-gray-light font-semibold">Category</th>
                  <th className="text-left py-3 px-4 text-gray-light font-semibold">Allocation %</th>
                  <th className="text-left py-3 px-4 text-gray-light font-semibold">Tokens (BMZ)</th>
                  <th className="text-left py-3 px-4 text-gray-light font-semibold">Locking</th>
                  <th className="text-left py-3 px-4 text-gray-light font-semibold">Vesting</th>
                </tr>
              </thead>
              <tbody>
                {tokenAllocation.map((row) => (
                  <tr key={row.category} className="border-b border-white/10">
                    <td className="py-3 px-4 text-gray-light">{row.category}</td>
                    <td className="py-3 px-4 text-primary font-semibold">{row.pct}</td>
                    <td className="py-3 px-4 text-gray-light">{row.tokens}</td>
                    <td className="py-3 px-4 text-gray-light">{row.locking}</td>
                    <td className="py-3 px-4 text-gray-light">{row.vesting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex justify-center">
            <Image src="/images/token-allocation.png" alt="Token Allocation Chart" width={800} height={500} />
          </div>
        </Container>
      </section>

      {/* Locking & Vesting */}
      <section className="section-padding">
        <Container>
          <SectionHeading label="Locking" heading="Locking & Vesting Mechanism" subtext="The Blockmaze tokenomics framework incorporates locking and vesting mechanisms to promote long-term alignment and responsible participation across the ecosystem." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Purpose of Locking and Vesting", desc: "Locking and vesting mechanisms are used to align long-term participation with network responsibility. They ensure that token allocations tied to governance, security, and operations are released gradually, reducing short-term misalignment and reinforcing sustained contribution." },
              { title: "Role-Based Application", desc: "Locking and vesting are applied selectively based on the role and impact of each allocation category. Participants with long-term influence over protocol development, network security, or economic decisions are subject to extended vesting horizons." },
              { title: "Alignment Over Time", desc: "By distributing token access over defined periods, the framework incentivizes continued engagement, accountability, and decision-making aligned with the long-term health of the network rather than short-term outcomes." },
              { title: "Stability and Trust", desc: "Gradual release of tokens supports market stability and builds confidence among ecosystem participants by limiting sudden supply shocks and reinforcing commitment across all stakeholder groups." },
            ].map((item) => (
              <div key={item.title} className="card bg-gray-50 p-6">
                <h4 className="text-gray-dark font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-DEFAULT text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
