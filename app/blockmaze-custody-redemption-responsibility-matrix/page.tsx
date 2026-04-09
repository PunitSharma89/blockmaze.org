import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Custody & Redemption Responsibility Matrix | Blockmaze",
  description:
    "Defines wallet custody models, investor responsibilities, redemption validation, and settlement workflows within the Blockmaze ecosystem.",
};

const tocItems = [
  { id: "purpose", label: "1. Purpose of the Document" },
  { id: "custody-overview", label: "2. Custody Model Overview" },
  { id: "wallet-types", label: "3. Wallet Types and Ownership" },
  { id: "redemption", label: "4. Redemption Flow" },
];

export default function CustodyRedemptionPage() {
  return (
    <>
      <Container>
        <Breadcrumb items={[{ label: "Custody & Redemption Responsibility Matrix" }]} />
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
                  Custody & Redemption Responsibility Framework
                </h1>
              </div>

              {/* Section 1 */}
              <div id="purpose">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">1. Purpose of the Document</h2>
                <p className="mb-6 text-[#3c4043] text-justify">This document defines custody and redemption responsibilities within the Blockmaze ecosystem. It explains how user assets are held, who controls access to wallets, and how redemption of tokenized assets is processed.</p>
                <p className="mb-6 text-[#3c4043] text-justify">The document clarifies the roles and obligations of investors, the platform, and issuers across custody models and redemption flows. It also outlines responsibility boundaries between on-chain actions and off-chain settlement.</p>
                <p className="mb-6 text-[#3c4043] text-justify">This specification is intended to provide clear operational guidance and accountability for asset custody and redemption activities on Blockmaze.</p>
              </div>

              {/* Section 2 */}
              <div id="custody-overview">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">2. Custody Model Overview</h2>
                <p className="mb-6 text-[#3c4043] text-justify">Blockmaze follows a dual custody model to support different user preferences and operational needs. This model allows users to choose between managing their own wallets or using wallets created through the platform.</p>
                <p className="mb-6 text-[#3c4043] text-justify">The custody model clearly separates asset ownership from platform responsibilities. In all cases, ownership of assets remains with the investor, while the platform provides infrastructure, compliance checks, and process coordination.</p>
                <p className="mb-6 text-[#3c4043] text-justify">Custody arrangements define how keys are managed, how access is controlled, and how responsibilities are distributed during normal operations and redemption events.</p>
              </div>

              {/* Section 3 */}
              <div id="wallet-types">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">3. Wallet Types and Ownership</h2>
                <p className="mb-6 text-[#3c4043] text-justify">Blockmaze supports two wallet types for holding and managing assets. Each wallet type defines how keys are controlled and how responsibilities are assigned between the investor and the platform.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">External Wallet (Self-Custody)</h3>
                <p className="mb-6 text-[#3c4043] text-justify">In the self-custody model, investors use external wallets that they control directly. The investor owns and manages private keys and is responsible for wallet security and access.</p>
                <p className="mb-6 text-[#3c4043] text-justify">The platform does not store private keys or have signing authority over external wallets. The platform interacts with these wallets only through standard on-chain transactions and approved interfaces.</p>
                <p className="mb-6 text-[#3c4043] text-justify">Investors can connect their own external wallets directly to the platform using supported wallet providers, including:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">MetaMask</li>
                  <li className="text-[#3c4043]">Coinbase Wallet</li>
                  <li className="text-[#3c4043]">WalletConnect-supported wallets such as Trust Wallet and Rainbow</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">This option allows users to interact with the platform using wallets they already control.</p>

                <h4 className="text-base md:text-lg mt-6 mb-3 font-semibold text-[#34495e]">Custody Responsibility</h4>
                <p className="mb-6 text-[#3c4043] text-justify">In this model:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Private keys are fully owned and controlled by the investor</li>
                  <li className="text-[#3c4043]">The platform never stores, accesses, or manages private keys</li>
                  <li className="text-[#3c4043]">Token holdings remain in the investor&apos;s wallet address</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">Investors are responsible for:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Securely storing their seed phrase or private key</li>
                  <li className="text-[#3c4043]">Approving all transactions</li>
                  <li className="text-[#3c4043]">Paying applicable gas fees</li>
                </ul>

                <h4 className="text-base md:text-lg mt-6 mb-3 font-semibold text-[#34495e]">Platform Controls</h4>
                <p className="mb-6 text-[#3c4043] text-justify">The platform controls:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Wallet authentication and connection verification</li>
                  <li className="text-[#3c4043]">Mapping the wallet address to the user profile</li>
                  <li className="text-[#3c4043]">Checking on-chain balances and eligibility rules, including whitelisting and transfer restrictions</li>
                  <li className="text-[#3c4043]">Initiating transactions, which still require user approval</li>
                </ul>

                <h4 className="text-base md:text-lg mt-6 mb-3 font-semibold text-[#34495e]">Key Notes</h4>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Wallet connection is required before executing any on-chain transaction</li>
                  <li className="text-[#3c4043]">Each wallet address is treated as a unique investor identity on-chain</li>
                  <li className="text-[#3c4043]">Transfers and redemptions succeed only if the wallet is compliant and whitelisted</li>
                </ul>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Platform-Created Wallet (Email + OTP)</h3>
                <p className="mb-6 text-[#3c4043] text-justify">In the platform-created wallet model, wallets are generated through the platform using an email and OTP-based access flow. These wallets are linked to the user&apos;s platform account.</p>
                <p className="mb-6 text-[#3c4043] text-justify">Key management and access controls are handled through platform-defined mechanisms. While the platform facilitates wallet creation and access, asset ownership remains with the investor. The platform&apos;s role is limited to enabling access, enforcing controls, and supporting compliance requirements.</p>
                <p className="mb-6 text-[#3c4043] text-justify">The platform allows users to create a wallet using their email ID and OTP authentication within the platform environment.</p>

                <h4 className="text-base md:text-lg mt-6 mb-3 font-semibold text-[#34495e]">This option is intended for users who:</h4>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Do not already have a crypto wallet</li>
                  <li className="text-[#3c4043]">Prefer not to manage seed phrases manually</li>
                  <li className="text-[#3c4043]">Want a login-based experience similar to Web2 platforms</li>
                </ul>

                <h4 className="text-base md:text-lg mt-6 mb-3 font-semibold text-[#34495e]">Wallet Mapping and Identity</h4>
                <p className="mb-6 text-[#3c4043] text-justify">When a wallet is created using Email and OTP:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">A new blockchain wallet address is generated</li>
                  <li className="text-[#3c4043]">The wallet address is automatically linked to the user&apos;s email account</li>
                  <li className="text-[#3c4043]">The mapping is stored in platform records for identification and activity tracking</li>
                </ul>

                <h4 className="text-base md:text-lg mt-6 mb-3 font-semibold text-[#34495e]">Custody Responsibility</h4>
                <p className="mb-6 text-[#3c4043] text-justify">Depending on the implementation, custody follows a non-custodial or smart wallet model.</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Users retain ownership and control of the wallet</li>
                  <li className="text-[#3c4043]">The platform enables transaction signing through secure mechanisms</li>
                  <li className="text-[#3c4043]">The platform does not own or take custody of user funds</li>
                </ul>

                <h4 className="text-base md:text-lg mt-6 mb-3 font-semibold text-[#34495e]">User Benefits</h4>
                <p className="mb-6 text-[#3c4043] text-justify">This model provides:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">No requirement to install a browser wallet</li>
                  <li className="text-[#3c4043]">No need to store or remember a seed phrase</li>
                  <li className="text-[#3c4043]">Faster onboarding and reduced setup friction</li>
                  <li className="text-[#3c4043]">A simplified investment and redemption experience</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div id="redemption">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">4. Redemption Flow (Token Redemption Responsibility)</h2>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Redemption Overview</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Redemption is the process through which an investor requests to sell back held security tokens to the issuer or an issuer-defined redemption entity. In return, the investor receives fiat currency or stablecoins based on the latest applicable price. This process provides investors with an exit option and allows issuers to manage liquidity and buyback obligations.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Redemption Eligibility</h3>
                <p className="mb-6 text-[#3c4043] text-justify">An investor can initiate a redemption request only if all of the following conditions are met:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Required KYC or KYB checks are completed, if mandated</li>
                  <li className="text-[#3c4043]">The investor holds a redeemable token balance in the linked wallet</li>
                  <li className="text-[#3c4043]">The token is in a redeemable status, as defined by the offering rules</li>
                  <li className="text-[#3c4043]">The redemption window is open, if applicable</li>
                  <li className="text-[#3c4043]">Any holding or lock-in period has been satisfied, if applicable</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">Requests that do not meet these conditions are not processed.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Redemption Process</h3>

                <h4 className="text-base md:text-lg mt-6 mb-3 font-semibold text-[#34495e]">Step 1: Investor Initiates Redemption Request</h4>
                <p className="mb-6 text-[#3c4043] text-justify">The investor initiates redemption from their portfolio or holdings screen by selecting:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Token or offering name</li>
                  <li className="text-[#3c4043]">Quantity of tokens to redeem</li>
                  <li className="text-[#3c4043]">Redemption method, if multiple options are available</li>
                  <li className="text-[#3c4043]">Bank or stablecoin payout destination, where applicable</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">The investor then submits the redemption request.</p>

                <h4 className="text-base md:text-lg mt-6 mb-3 font-semibold text-[#34495e]">Step 2: Platform Validates Redemption Request</h4>
                <p className="mb-6 text-[#3c4043] text-justify">After submission, the platform performs validation checks, including:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Wallet connection and address mapping</li>
                  <li className="text-[#3c4043]">Token balance verification</li>
                  <li className="text-[#3c4043]">Redemption amount does not exceed holdings</li>
                  <li className="text-[#3c4043]">Token transferability to the issuer or redemption address</li>
                  <li className="text-[#3c4043]">Compliance and restriction checks</li>
                  <li className="text-[#3c4043]">Availability of a valid price reference, such as the latest NAV or price</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">If validation is successful, the request status is updated to Redemption Request Created or Pending Confirmation.</p>

                <h4 className="text-base md:text-lg mt-6 mb-3 font-semibold text-[#34495e]">Step 3: Token Transfer Back to Issuer</h4>
                <p className="mb-6 text-[#3c4043] text-justify">After approval, the platform triggers the on-chain redemption action.</p>
                <p className="mb-6 text-[#3c4043] text-justify">Tokens are transferred from the investor wallet to the issuer&apos;s redemption or treasury wallet. This transfer may occur through:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">A direct token transfer signed by the investor, or</li>
                  <li className="text-[#3c4043]">An escrow or contract-based redemption flow executed after approval</li>
                </ul>

                <h4 className="text-base md:text-lg mt-6 mb-3 font-semibold text-[#34495e]">Step 4: Payment Calculation Based on Latest Price</h4>
                <p className="mb-6 text-[#3c4043] text-justify">Once tokens are received by the issuer, the payable amount is calculated using:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Latest token price or NAV</li>
                  <li className="text-[#3c4043]">Quantity of tokens redeemed</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">Applicable deductions may include:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Exit fees</li>
                  <li className="text-[#3c4043]">Processing fees</li>
                  <li className="text-[#3c4043]">Early redemption penalties</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">The final payable amount is calculated as:</p>
                <p className="mb-6 text-[#3c4043] text-justify"><strong>Final Payable Amount = Redeemed Tokens x Latest Price</strong></p>

                <h4 className="text-base md:text-lg mt-6 mb-3 font-semibold text-[#34495e]">Step 5: Payment to Investor</h4>
                <p className="mb-6 text-[#3c4043] text-justify">After the calculation, the issuer initiates settlement using the supported payout method.</p>
                <p className="mb-6 text-[#3c4043] text-justify">Settlement options may include:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Bank transfer for fiat payouts</li>
                  <li className="text-[#3c4043]">Stablecoin transfer, such as USDC, USDT, or equivalent</li>
                  <li className="text-[#3c4043]">Internal wallet credit, if supported</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
