import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Exchange Listing Strategy Pack | Blockmaze",
  description:
    "Tiered exchange framework, listing playbook, commercial models, liquidity strategy, and readiness requirements for the Blockmaze token listing process.",
};

const tocItems = [
  { id: "executive", label: "1. Executive Summary" },
  { id: "tiering", label: "2. Tiering Framework" },
  { id: "assignments", label: "3. Exchange Tier Assignments" },
  { id: "selecting", label: "4. Selecting the Right Exchange Tier" },
  { id: "playbook", label: "5. Standard Listing Playbook" },
  { id: "considerations", label: "6. Exchange-Specific Considerations" },
  { id: "commercial", label: "7. Commercial Structures and Listing Economics" },
  { id: "overview-table", label: "8. Exchange-Specific Listing Overview" },
];

const exchangeData = [
  { name: "Binance", tier: "A", value: "Highest global liquidity and market credibility", fee: "$0 – $1M+ (mostly strategic, non-cash)", readiness: "Multiple audits, legal opinion, strong traction, compliance-ready", marketing: "Launchpad / Launchpool, global announcements, trading contests", website: "binance.com" },
  { name: "Coinbase Exchange", tier: "A", value: "Compliance-first exchange with deep fiat access", fee: "No direct fee (legal & compliance heavy)", readiness: "Strong legal clarity, clean cap table, governance maturity", marketing: "Coinbase Earn, institutional visibility", website: "coinbase.com" },
  { name: "Kraken", tier: "A", value: "Institutional trust and regulated access", fee: "$0 – $100k", readiness: "Audit and legal clarity, conservative tokenomics", marketing: "Institutional exposure, thought leadership", website: "kraken.com" },
  { name: "Upbit", tier: "A", value: "Dominant Korean retail liquidity", fee: "$100k – $500k+ (indirect)", readiness: "Korean compliance, strong disclosures, governance", marketing: "Korean community campaigns", website: "upbit.com" },
  { name: "OKX", tier: "A", value: "Strong spot and derivatives footprint", fee: "$100k – $300k", readiness: "Solid audits, clear roadmap", marketing: "Trading campaigns, ecosystem co-marketing", website: "okx.com" },
  { name: "KuCoin", tier: "B", value: "Large global retail base, growth-stage friendly", fee: "$50k – $200k", readiness: "Audit recommended, clear utility narrative", marketing: "Spotlight listings, trading competitions", website: "kucoin.com" },
  { name: "Bybit", tier: "B", value: "Trader-centric with high engagement", fee: "$50k – $200k", readiness: "Clear token mechanics, active community", marketing: "Trading battles, influencer campaigns", website: "bybit.com" },
  { name: "Bitget", tier: "B", value: "Copy-trading driven retail exchange", fee: "$30k – $150k", readiness: "Token utility clarity", marketing: "Copy-trading promos, campaigns", website: "bitget.com" },
  { name: "Gate.io", tier: "B", value: "Broad asset coverage and global reach", fee: "$30k – $100k", readiness: "Standard audit and documentation", marketing: "Launch and trading campaigns", website: "gate.io" },
  { name: "MEXC", tier: "B", value: "Fast listings with altcoin liquidity", fee: "$20k – $80k", readiness: "Basic compliance readiness", marketing: "Aggressive trading promotions", website: "mexc.com" },
  { name: "HTX", tier: "B", value: "Strong Asian market presence", fee: "$50k – $200k", readiness: "Standard audits and disclosures", marketing: "Asia-focused campaigns", website: "htx.com" },
  { name: "BingX", tier: "C", value: "Regional expansion and early liquidity", fee: "$10k – $50k", readiness: "Basic listing readiness", marketing: "Regional promotions", website: "bingx.com" },
  { name: "BitMart", tier: "C", value: "US-facing mid-tier retail access", fee: "$20k – $100k", readiness: "Standard compliance", marketing: "Trading and launch campaigns", website: "bitmart.com" },
  { name: "CoinEx", tier: "C", value: "Niche global altcoin traders", fee: "$10k – $50k", readiness: "Basic audit and docs", marketing: "Community trading campaigns", website: "coinex.com" },
  { name: "LBank", tier: "C", value: "Retail-heavy Asian audience", fee: "$10k – $50k", readiness: "Basic listing requirements", marketing: "Regional retail campaigns", website: "lbank.com" },
  { name: "XT.com", tier: "C", value: "Supplementary listings and incentives", fee: "$10k – $40k", readiness: "Standard readiness", marketing: "Incentive-driven promotions", website: "xt.com" },
  { name: "CoinW", tier: "C", value: "Promotional and regional reach", fee: "$10k – $40k", readiness: "Basic documentation", marketing: "Campaign-based listings", website: "coinw.com" },
  { name: "Weex", tier: "D", value: "Early exposure and tactical distribution", fee: "$5k – $20k", readiness: "Minimal compliance", marketing: "Small-scale campaigns", website: "weex.com" },
  { name: "Blofin", tier: "D", value: "Niche audience targeting", fee: "$5k – $20k", readiness: "Minimal readiness", marketing: "Experimental campaigns", website: "blofin.com" },
];

export default function ExchangeListingPage() {
  return (
    <>
      <Container>
        <Breadcrumb items={[{ label: "Exchange Listing" }]} />
      </Container>
      <section className="border border-gray-200">
        <div className="flex flex-col lg:flex-row bg-[#f8f9fa] text-[#1a1a1a] font-sans leading-[1.7] text-sm md:text-base">
          {/* Sidebar */}
          <aside className="w-full lg:w-[280px] bg-white border-r border-gray-200 p-6 lg:p-8 lg:sticky lg:top-[100px] lg:h-screen lg:overflow-y-auto border-b lg:border-b-0">
            <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-6 border-b-2 border-[#1a1a1a] pb-1 font-bold">
              Table of Content
            </h3>
            <ul className="list-none space-y-1">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block px-3 py-2 text-[#444] text-[0.95rem] rounded hover:bg-[#f0f2f5] hover:text-black hover:font-semibold transition-all duration-200 no-underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Content */}
          <div className="flex-1 p-4 md:p-8 lg:p-16 bg-[#f8f9fa]">
            <div className="max-w-[90%] mx-auto bg-white p-6 md:p-10 lg:p-20 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-200">
              {/* Header */}
              <div className="text-center mb-16 border-b-4 border-[#1a1a1a] pb-8">
                <h1 className="text-2xl md:text-4xl lg:text-[2.8rem] font-extrabold text-black leading-tight uppercase">
                  Exchange Listing Strategy Pack
                </h1>
              </div>

              {/* Section 1 */}
              <div id="executive">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">1. Executive Summary</h2>
                <p className="mb-6 text-[#3c4043] text-justify">Listing a token on centralized exchanges requires preparation across legal, technical, commercial, and operational areas. Each exchange follows its own standards for compliance, integration, and commercial engagement. These differences affect timelines, costs, and listing outcomes.</p>
                <p className="mb-6 text-[#3c4043] text-justify">This document presents a tiered approach to exchange listings. Exchanges are grouped based on liquidity, reputation, review standards, regional reach, and commercial requirements. The tiered structure helps teams plan listings in a staged manner, align budgets, and prioritize effort based on project readiness.</p>
                <p className="mb-6 text-[#3c4043] text-justify">The guide also outlines a standard execution playbook that covers internal preparation, exchange outreach, due diligence, technical onboarding, launch coordination, and post-listing monitoring. The goal is to provide a clear and repeatable process for navigating centralized exchange listings in an informed and controlled way.</p>
              </div>

              {/* Section 2 */}
              <div id="tiering">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">2. Tiering Framework</h2>
                <p className="mb-6 text-[#3c4043] text-justify">The tiering framework groups centralized exchanges based on measurable factors that affect listing effort, cost, and outcome. This structure helps teams compare exchanges on common criteria and set realistic expectations before outreach.</p>
                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Tier Classification Criteria</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Exchanges are evaluated using the following attributes:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]"><strong>Liquidity and Volume:</strong> Daily trading volume and order book depth.</li>
                  <li className="text-[#3c4043]"><strong>Brand and Reputation:</strong> Market trust, regulatory standing, and fiat access.</li>
                  <li className="text-[#3c4043]"><strong>Listing Rigor:</strong> Depth of legal, compliance, tokenomics, and due diligence reviews.</li>
                  <li className="text-[#3c4043]"><strong>Commercial Barrier:</strong> Listing fees, marketing commitments, and token-related requirements.</li>
                  <li className="text-[#3c4043]"><strong>Technical Integration Effort:</strong> Engineering work needed for deposits, withdrawals, custody, and monitoring.</li>
                  <li className="text-[#3c4043]"><strong>Regional Impact:</strong> Strength in specific markets such as Korea, India, Southeast Asia, or LATAM.</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">These criteria are used collectively to assign exchanges into tiers and guide listing strategy.</p>
              </div>

              {/* Section 3 */}
              <div id="assignments">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">3. Exchange Tier Assignments</h2>
                <p className="mb-6 text-[#3c4043] text-justify">Exchanges are grouped into tiers based on the classification criteria defined in the tiering framework. Each tier reflects a different level of liquidity, review depth, and commercial expectation. The tier does not indicate quality alone, but the effort and readiness required to secure a listing.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Tier A - Premier Global Exchanges</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Tier A exchanges represent the highest level of global liquidity and brand recognition. These platforms conduct deep legal, compliance, and technical reviews before approving a listing.</p>
                <p className="mb-6 text-[#3c4043] text-justify">Examples include Binance, Coinbase Exchange, Kraken, Upbit, and OKX.</p>
                <p className="mb-6 text-[#3c4043] text-justify">Listings on Tier A exchanges often improve market credibility and access to large retail and institutional audiences. These exchanges usually expect strong traction, clear token utility, audits, legal opinions, and coordinated launch plans.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Tier B - Large Global and Regional Exchanges</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Tier B exchanges have strong trading volume and wide user bases but are generally more open to growth-stage projects.</p>
                <p className="mb-6 text-[#3c4043] text-justify">Examples include KuCoin, Bybit, Bitget, HTX, Gate.io, MEXC, and similar platforms.</p>
                <p className="mb-6 text-[#3c4043] text-justify">These exchanges may have faster listing cycles than Tier A but often expect commercial commitments, marketing support, or liquidity arrangements as part of the listing process.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Tier C - Mid and Niche Exchanges</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Tier C exchanges focus on specific regions or trader segments and usually offer quicker onboarding.</p>
                <p className="mb-6 text-[#3c4043] text-justify">Examples include BingX, BitMart, CoinEx, LBank, XT.com, and CoinW.</p>
                <p className="mb-6 text-[#3c4043] text-justify">These platforms are often used to expand regional reach, add trading pairs, or support early liquidity. Listing requirements are lighter compared to higher tiers, but liquidity is also lower.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Tier D - Smaller and Emerging Exchanges</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Tier D exchanges are smaller platforms with limited liquidity and narrower reach.</p>
                <p className="mb-6 text-[#3c4043] text-justify">Examples include Weex, Blofin, and similar emerging exchanges.</p>
                <p className="mb-6 text-[#3c4043] text-justify">These exchanges are typically used for targeted regional exposure, community programs, or early distribution strategies rather than core liquidity objectives.</p>
              </div>

              {/* Section 4 */}
              <div id="selecting">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">4. Selecting the Right Exchange Tier</h2>
                <p className="mb-6 text-[#3c4043] text-justify">Choosing which exchange tier to target depends on the project&apos;s maturity, regulatory exposure, budget, and market priorities. Not all tiers are suitable at the same stage, and listings are often sequenced rather than pursued at once.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Product Readiness and Market Traction</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Projects with proven on-chain usage, clear token utility, audited contracts, and verified teams are better positioned for Tier A and Tier B exchanges. Early-stage tokens usually begin with Tier B or Tier C to build volume, trading history, and reference listings.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Budget and Commercial Considerations</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Higher-tier exchanges often involve higher costs, either through direct fees, marketing commitments, or liquidity support. Projects should align tier selection with available treasury resources and expected return from the listing.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Regulatory Exposure</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Tokens with potential regulatory sensitivity should prioritize exchanges with strong compliance frameworks. Exchanges with stricter legal review are better suited for markets with higher regulatory scrutiny.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Regional Market Focus</h3>
                <p className="mb-6 text-[#3c4043] text-justify">If the project targets specific regions, exchanges dominant in those regions should be prioritized. Regional strength can be more valuable than global reach when building early adoption.</p>
              </div>

              {/* Section 5 */}
              <div id="playbook">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">5. Standard Listing Playbook</h2>
                <p className="mb-6 text-[#3c4043] text-justify">The standard listing playbook outlines a phased process for planning, executing, and managing centralized exchange listings. Each phase addresses a specific part of the listing lifecycle and helps reduce execution risk.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Phase 0: Internal Readiness</h3>
                <p className="mb-6 text-[#3c4043] text-justify">This phase focuses on preparing core materials and internal alignment. Key activities include confirming legal structure, whitepaper and tokenomics readiness, smart contract audits, team KYC, treasury allocation planning, and preparation of technical integration details such as contract metadata and RPC endpoints.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Phase 2: Outreach and Commercial Negotiation</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Outreach is initiated through official listing portals, direct contacts, or introductions via advisors. Commercial terms are discussed, including listing expectations, marketing support, liquidity plans, and any token allocations for campaigns.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Phase 3: Exchange Due Diligence</h3>
                <p className="mb-6 text-[#3c4043] text-justify">The exchange conducts legal, compliance, and operational review. Projects submit required documents such as legal opinions, audits, tokenomics details, AML and KYC information, and respond to follow-up questions.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Phase 4: Technical Onboarding</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Technical integration is completed in coordination with the exchange. This includes sharing contract details, setting up deposits and withdrawals, testing wallet flows, and aligning on trading pairs and market parameters.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Phase 5: Go-to-Market Coordination</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Listing timelines and announcements are aligned with the exchange. Marketing assets, joint promotions, and liquidity support are prepared to ensure stable trading conditions at launch.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Phase 6: Post-Listing Monitoring and Optimization</h3>
                <p className="mb-6 text-[#3c4043] text-justify">After listing, trading activity, liquidity depth, and market behavior are monitored. Additional liquidity, marketing, or communication actions may be deployed to support healthy trading and address volatility.</p>
              </div>

              {/* Section 6 */}
              <div id="considerations">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">6. Exchange-Specific Considerations</h2>
                <p className="mb-6 text-[#3c4043] text-justify">Different exchange tiers follow different review standards, timelines, and commercial expectations. Understanding these differences helps teams prepare the right materials and avoid mismatched outreach.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Tier A Exchange Expectations</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Tier A exchanges apply the highest level of legal, compliance, and technical scrutiny. Examples: Binance, Coinbase Exchange, Kraken, Upbit, OKX.</p>
                <p className="mb-4 text-[#3c4043] text-justify"><strong>Typical expectations include:</strong></p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Multiple smart contract audits</li>
                  <li className="text-[#3c4043]">Clear legal opinions on token status</li>
                  <li className="text-[#3c4043]">Detailed token utility and supply disclosures</li>
                  <li className="text-[#3c4043]">Proven traction and usage metrics</li>
                  <li className="text-[#3c4043]">Coordinated launch planning</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">These exchanges often involve long review cycles and structured marketing coordination.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Tier B Exchange Expectations</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Tier B exchanges balance scale with faster onboarding and are more open to growth-stage projects. Examples: KuCoin, Bybit, Bitget, Gate.io, MEXC, HTX.</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Standard audits and documentation</li>
                  <li className="text-[#3c4043]">Clear token mechanics and roadmap</li>
                  <li className="text-[#3c4043]">Commercial discussions around marketing or liquidity</li>
                  <li className="text-[#3c4043]">Faster review timelines than Tier A</li>
                </ul>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Tier C and Tier D Exchange Expectations</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Tier C and D exchanges focus on speed and accessibility, with lighter review standards.</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Basic compliance and documentation checks</li>
                  <li className="text-[#3c4043]">Short onboarding timelines</li>
                  <li className="text-[#3c4043]">Lower liquidity and brand impact</li>
                  <li className="text-[#3c4043]">Used for regional exposure or early distribution</li>
                </ul>
              </div>

              {/* Section 7 */}
              <div id="commercial">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">7. Commercial Structures and Listing Economics</h2>
                <p className="mb-6 text-[#3c4043] text-justify">Commercial terms for exchange listings vary by tier, market conditions, and project readiness. These structures define the financial and operational commitments required before and after a listing.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Listing Fees and Marketing Commitments</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Some exchanges charge a fixed listing fee, while others require marketing support in place of or in addition to fees.</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Tier A exchanges often avoid public listing fees but expect coordinated marketing campaigns and strong launch support.</li>
                  <li className="text-[#3c4043]">Tier B exchanges may request a combination of listing fees and marketing commitments.</li>
                  <li className="text-[#3c4043]">Tier C and D exchanges usually follow a fixed-fee model with limited marketing requirements.</li>
                </ul>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Market Making and Liquidity Support</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Many exchanges require active liquidity support to ensure stable trading after launch.</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Working with a third-party market maker</li>
                  <li className="text-[#3c4043]">Providing liquidity directly from the project treasury</li>
                  <li className="text-[#3c4043]">Following exchange-defined spread and depth requirements</li>
                </ul>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Token Allocation for Promotions</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Exchanges may request token allocations for promotional activities.</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Trading competitions</li>
                  <li className="text-[#3c4043]">Airdrops or user rewards</li>
                  <li className="text-[#3c4043]">Staking or lock-in programs</li>
                </ul>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Lockups and Vesting Expectations</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Exchanges often review team and investor vesting schedules during due diligence. Clear disclosure of lockups and release timelines helps exchanges assess post-listing risk and reduces market uncertainty. Projects with transparent vesting structures are generally easier to onboard.</p>
              </div>

              {/* Section 8 */}
              <div id="overview-table">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">8. Exchange-Specific Listing Overview</h2>
                <p className="mb-6 text-[#3c4043] text-justify">Exact listing fees are rarely public and vary by market conditions, project quality, negotiation strength, and marketing scope. The figures below are industry-estimated ranges based on market intelligence, past deals, and advisory experience. They should be used for budget planning only, not as guaranteed quotes.</p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr>
                        <th className="border border-gray-200 p-3 text-left bg-[#f0f2f5] font-semibold text-[#2c3e50]">Exchange</th>
                        <th className="border border-gray-200 p-3 text-left bg-[#f0f2f5] font-semibold text-[#2c3e50]">Tier</th>
                        <th className="border border-gray-200 p-3 text-left bg-[#f0f2f5] font-semibold text-[#2c3e50]">Core Value / Positioning</th>
                        <th className="border border-gray-200 p-3 text-left bg-[#f0f2f5] font-semibold text-[#2c3e50]">Indicative Fee*</th>
                        <th className="border border-gray-200 p-3 text-left bg-[#f0f2f5] font-semibold text-[#2c3e50]">Key Readiness</th>
                        <th className="border border-gray-200 p-3 text-left bg-[#f0f2f5] font-semibold text-[#2c3e50]">Marketing Levers</th>
                      </tr>
                    </thead>
                    <tbody>
                      {exchangeData.map((ex, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#f9f9f9]"}>
                          <td className="border border-gray-200 p-3 text-[#3c4043] font-semibold">{ex.name}</td>
                          <td className="border border-gray-200 p-3 text-[#3c4043]">{ex.tier}</td>
                          <td className="border border-gray-200 p-3 text-[#3c4043]">{ex.value}</td>
                          <td className="border border-gray-200 p-3 text-[#3c4043]">{ex.fee}</td>
                          <td className="border border-gray-200 p-3 text-[#3c4043]">{ex.readiness}</td>
                          <td className="border border-gray-200 p-3 text-[#3c4043]">{ex.marketing}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
