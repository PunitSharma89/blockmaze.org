import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Emission & Vesting | Blockmaze",
  description:
    "BMZ token emission, vesting, and unlock schedule covering vesting architecture, allocation wallets, access control, deployment, execution flow, admin panel, beneficiary flow, and multi-signature approval.",
};

const tocItems = [
  { id: "Overview", label: "1. Document Overview" },
  { id: "Architecture", label: "2. High-Level Vesting Architecture" },
  { id: "Allocation", label: "3. BMZ Token Allocation Wallets at Genesis" },
  { id: "Access", label: "4. Access Control Model" },
  { id: "Deployment", label: "5. Vesting Contract Deployment and Configuration" },
  { id: "Vesting", label: "6. Vesting Execution Flow" },
  { id: "Functional", label: "7. Admin Panel Functional Scope" },
  { id: "Process", label: "8. End-to-End Vesting Process Flow" },
  { id: "Beneficiary", label: "9. Beneficiary User Flow" },
  { id: "Multi", label: "10. Multi-Signature Approval Model" },
];

const allocationData = [
  { category: "Founders – Core Allocation", amount: "19,000,000,000" },
  { category: "Genesis Validator Compensation Pool", amount: "1,000,000,000" },
  { category: "Early/Strategic Investors", amount: "5,000,000,000" },
  { category: "RWA, Business Development & Protocol Operations Team", amount: "6,000,000,000" },
  { category: "Advisors & Specialized Experts", amount: "2,000,000,000" },
  { category: "Community Users & Contributors", amount: "12,000,000,000" },
  { category: "Ecosystem & RWA Adoption Fund", amount: "10,000,000,000" },
  { category: "Vendor & Contributor Performance Pool", amount: "6,000,000,000" },
];

export default function EmissionVestingPage() {
  return (
    <>
      <Container>
        <Breadcrumb items={[{ label: "Emission & Vesting" }]} />
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
                  Emission, Vesting & Unlock Schedule
                </h1>
              </div>

              {/* Section 1 */}
              <div id="Overview">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">1. Document Overview</h2>
                <p className="mb-6 text-[#3c4043] text-justify">This document explains how the BMZ token emission, vesting, and unlock system works. It describes the structure, roles, access controls, and execution flow used to release BMZ tokens over time in a controlled and verifiable way.</p>
                <p className="mb-6 text-[#3c4043] text-justify">The vesting system is designed to manage long-term token distribution across different allocation categories such as founders, validators, investors, contributors, and ecosystem participants. It ensures that BMZ tokens are released only as per predefined schedules and rules recorded on-chain.</p>
                <p className="mb-6 text-[#3c4043] text-justify">All vesting actions follow fixed logic enforced by smart contracts. Once vesting terms are set, they cannot be changed. This prevents manual overrides, reduces operational risk, and ensures predictable token supply behavior.</p>
                <p className="mb-6 text-[#3c4043] text-justify">The document also explains how allocation wallets, beneficiaries, backend services, and admin tools interact with the vesting system. It is intended for internal teams, auditors, partners, and users who need a clear view of how BMZ emissions and unlocks are executed and monitored.</p>
              </div>

              {/* Section 2 */}
              <div id="Architecture">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">2. High-Level Vesting Architecture</h2>
                <p className="mb-6 text-[#3c4043] text-justify">The BMZ vesting system is built to control how tokens are locked, released, and tracked over time. It separates responsibilities across smart contracts and off-chain services so that token distribution follows fixed rules and remains verifiable at every stage.</p>
                <p className="mb-6 text-[#3c4043] text-justify">The architecture is designed to prevent manual intervention after setup. Once a vesting contract is created, its parameters cannot be changed. This ensures that all stakeholders can rely on predictable emission and unlock behavior.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Vesting System Components</h3>
                <p className="mb-6 text-[#3c4043] text-justify">The vesting system consists of four main components, each with a defined role in the lifecycle of BMZ token distribution.</p>

                <h4 className="text-base md:text-lg mt-6 mb-3 font-semibold text-[#34495e]">Factory Contract</h4>
                <p className="mb-6 text-[#3c4043] text-justify">The Factory Contract is responsible for deploying vesting contracts. It controls who is allowed to create new vesting schedules and checks authorization before deployment. The factory ensures that only approved allocation wallets can deploy vesting contracts and that deployment parameters are valid.</p>
                <p className="mb-6 text-[#3c4043] text-justify">Once a vesting contract is deployed through the factory, its configuration is fixed. The factory does not allow changes to lock periods, vesting schedules, or beneficiaries after deployment.</p>

                <h4 className="text-base md:text-lg mt-6 mb-3 font-semibold text-[#34495e]">Vesting Contract (Clone)</h4>
                <p className="mb-6 text-[#3c4043] text-justify">Each vesting contract holds BMZ tokens for a specific allocation or beneficiary. It manages the lock period, vesting timeline, and release logic. The contract calculates how many tokens can be released at any given time and transfers tokens only when conditions are met.</p>
                <p className="mb-6 text-[#3c4043] text-justify">The vesting contract enforces all rules on-chain and does not rely on manual approvals for token release.</p>

                <h4 className="text-base md:text-lg mt-6 mb-3 font-semibold text-[#34495e]">Backend Scheduler Service</h4>
                <p className="mb-6 text-[#3c4043] text-justify">The backend scheduler monitors active vesting contracts and checks when tokens become eligible for release. It prepares and submits transactions to trigger token transfers once lock periods end and vesting conditions are satisfied.</p>
                <p className="mb-6 text-[#3c4043] text-justify">This service supports reliable execution and prevents repeated or invalid releases by validating contract state before each action.</p>

                <h4 className="text-base md:text-lg mt-6 mb-3 font-semibold text-[#34495e]">Admin Panel</h4>
                <p className="mb-6 text-[#3c4043] text-justify">The admin panel is a web interface used by authorized allocation wallets. It provides visibility into deployed vesting contracts, assigned beneficiaries, release history, and current vesting status.</p>
                <p className="mb-6 text-[#3c4043] text-justify">The admin panel does not bypass contract rules. It acts only as an interface for managing and monitoring vesting activity within the permissions granted to each wallet.</p>
              </div>

              {/* Section 3 */}
              <div id="Allocation">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">3. BMZ Token Allocation Wallets at Genesis</h2>
                <p className="mb-6 text-[#3c4043] text-justify">At genesis, the BMZ native token supply is distributed across a defined set of allocation wallets. Each allocation wallet represents a specific category and acts as the authorized controller for vesting and emission within that category.</p>
                <p className="mb-6 text-[#3c4043] text-justify">These wallets are controlled by the client and are mapped one-to-one with vesting categories. An allocation wallet can deploy vesting contracts only for its assigned category and cannot interact with or manage allocations belonging to other categories.</p>
                <p className="mb-6 text-[#3c4043] text-justify">Each allocation wallet serves as the source of truth for token distribution in its category. All vesting actions initiated from these wallets are enforced through on-chain logic and remain fully auditable.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">BMZ Allocation by Category</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="border border-black p-4 text-left text-[#3c4043]">Allocation Category</th>
                        <th className="border border-black p-4 text-left text-[#3c4043]">Allocation (BMZ)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allocationData.map((row, idx) => (
                        <tr key={idx}>
                          <td className="border border-black p-4 text-[#3c4043]">{row.category}</td>
                          <td className="border border-black p-4 text-[#3c4043]">{row.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mb-6 text-[#3c4043] text-justify">Each allocation wallet is the only entity permitted to deploy vesting contracts for its category. These wallets act as authorized vesting controllers and are governed by strict access rules defined at the contract level.</p>
                <p className="mb-6 text-[#3c4043] text-justify">All token movements from these wallets occur only through deployed vesting contracts. Direct transfers that bypass vesting logic are not part of the emission design. This ensures that BMZ token releases follow predefined schedules and remain predictable over time.</p>
                <p className="mb-6 text-[#3c4043] text-justify">Every allocation, deployment, and release event is recorded on-chain and can be reviewed by auditors, partners, and users.</p>
              </div>

              {/* Section 4 */}
              <div id="Access">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">4. Access Control Model</h2>
                <p className="mb-6 text-[#3c4043] text-justify">The BMZ vesting system follows a strict access control model to ensure that only authorized parties can deploy vesting contracts and manage token distribution. All permissions are enforced at the smart-contract level and cannot be bypassed through interfaces or off-chain systems.</p>
                <p className="mb-6 text-[#3c4043] text-justify">Access control is designed to limit authority, reduce operational risk, and ensure that every vesting action is attributable to a known and approved wallet.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">On-Chain Access Control Principles</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Access control is enforced directly by the Factory Contract. The contract validates the identity of the caller before allowing any vesting-related action.</p>
                <p className="mb-6 text-[#3c4043] text-justify">Key principles include:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Only approved allocation wallets can deploy vesting contracts</li>
                  <li className="text-[#3c4043]">Each allocation wallet is restricted to its own category</li>
                  <li className="text-[#3c4043]">Vesting parameters cannot be changed after deployment</li>
                  <li className="text-[#3c4043]">Unauthorized actions are rejected at the contract level</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">This ensures that token distribution logic remains consistent and resistant to misuse.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Defined Roles</h3>
                <p className="mb-6 text-[#3c4043] text-justify">The vesting system defines clear roles with limited and specific authority.</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]"><strong>Super Admin:</strong> The contract owner is responsible for approving and managing allocation wallets. This role does not manage vesting schedules or beneficiaries.</li>
                  <li className="text-[#3c4043]"><strong>Allocation Wallet / Admin:</strong> A category-specific wallet that deploys vesting contracts and assigns beneficiaries for its allocation. It controls only its own category.</li>
                  <li className="text-[#3c4043]"><strong>Vesting Beneficiary:</strong> The end user or entity that receives BMZ tokens over time according to the vesting schedule defined in the contract.</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">Each role has clearly separated responsibilities to avoid overlap or privilege escalation.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Authorization Rules</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Allocation wallets must be explicitly whitelisted in the Factory Contract before they can deploy vesting contracts. The factory checks the sender address for every deployment request.</p>
                <p className="mb-6 text-[#3c4043] text-justify">Authorization rules include:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Deployment requests from non-whitelisted wallets are rejected</li>
                  <li className="text-[#3c4043]">Allocation wallets cannot deploy contracts for other categories</li>
                  <li className="text-[#3c4043]">Vesting contract parameters are locked once deployed</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">These rules ensure that vesting contracts follow predefined governance and that all emissions remain transparent and auditable.</p>
              </div>

              {/* Section 5 */}
              <div id="Deployment">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">5. Vesting Contract Deployment and Configuration</h2>
                <p className="mb-6 text-[#3c4043] text-justify">Vesting contracts are created through a controlled deployment process. This process ensures that BMZ tokens are locked under predefined rules and released only according to the approved vesting schedule.</p>
                <p className="mb-6 text-[#3c4043] text-justify">All vesting contracts are deployed through the Factory Contract by authorized allocation wallets. Direct deployment outside this process is not allowed.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Vesting Contract Deployment</h3>
                <p className="mb-6 text-[#3c4043] text-justify">The deployment process involves two main participants:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]"><strong>Actor:</strong> Authorized allocation wallet</li>
                  <li className="text-[#3c4043]"><strong>System:</strong> Factory Contract</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">When an allocation wallet initiates deployment, the factory verifies the caller&apos;s authorization and category permissions. Only after successful validation does the factory deploy a new vesting contract.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Deployment Parameters</h3>
                <p className="mb-6 text-[#3c4043] text-justify">During deployment, the allocation wallet must provide the following parameters:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Lock period (cliff duration)</li>
                  <li className="text-[#3c4043]">Vesting schedule, defined as linear release</li>
                  <li className="text-[#3c4043]">Total BMZ token allocation</li>
                  <li className="text-[#3c4043]">Beneficiary wallet address</li>
                  <li className="text-[#3c4043]">Vesting category identifier</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">These parameters define how and when BMZ tokens can be released to the beneficiary.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Post-Deployment Behavior</h3>
                <p className="mb-6 text-[#3c4043] text-justify">After deployment:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">BMZ tokens are transferred into the vesting contract</li>
                  <li className="text-[#3c4043]">Vesting terms become fixed and cannot be changed</li>
                  <li className="text-[#3c4043]">No updates to the allocation amount, schedule, or beneficiary are allowed</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">This ensures that once a vesting contract is created, its behavior remains predictable and verifiable for its entire lifecycle.</p>
              </div>

              {/* Section 6 */}
              <div id="Vesting">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">6. Vesting Execution Flow</h2>
                <p className="mb-6 text-[#3c4043] text-justify">The vesting execution flow defines how BMZ tokens move from the locked state to the released state over time. This flow is designed to ensure that tokens are released only when conditions defined in the vesting contract are met, and that execution remains consistent across all vesting categories.</p>
                <p className="mb-6 text-[#3c4043] text-justify">The execution process combines on-chain validation with controlled off-chain triggering. Smart contracts enforce all rules, while off-chain services handle timing and transaction submission.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Lock Period Handling</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Each vesting contract includes a lock period, also known as a cliff. During this period, all BMZ tokens remain locked inside the vesting contract.</p>
                <p className="mb-6 text-[#3c4043] text-justify">Key points of lock handling:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">No token transfers are allowed before the lock period ends</li>
                  <li className="text-[#3c4043]">Release attempts during the lock period are rejected by the contract</li>
                  <li className="text-[#3c4043]">The lock duration is defined at deployment and cannot be changed</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">The lock period ensures delayed access to tokens and supports long-term alignment for each allocation category.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Automated Vesting Claim Execution</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Once the lock period has ended, BMZ tokens become eligible for release based on the vesting schedule. Vesting execution is handled by a backend scheduler that operates under defined rules.</p>
                <p className="mb-6 text-[#3c4043] text-justify">Execution steps include:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Scanning active vesting contracts</li>
                  <li className="text-[#3c4043]">Checking whether the lock period has completed</li>
                  <li className="text-[#3c4043]">Calculating the amount of BMZ tokens eligible for release</li>
                  <li className="text-[#3c4043]">Preparing signed transactions for eligible contracts</li>
                  <li className="text-[#3c4043]">Triggering token transfers through a paymaster service</li>
                  <li className="text-[#3c4043]">Recording transaction details and release status</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">The scheduler does not override contract logic. It acts only when on-chain conditions confirm that tokens can be released.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Execution Controls and Safeguards</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Several controls are in place to protect against errors and misuse</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Vesting state is verified on-chain before each execution</li>
                  <li className="text-[#3c4043]">Duplicate releases are blocked through contract state checks</li>
                  <li className="text-[#3c4043]">Nonce tracking prevents repeated execution of the same release</li>
                  <li className="text-[#3c4043]">Failed transactions are logged and can be retried safely</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">These safeguards ensure that each BMZ token is released once, at the correct time, and to the correct beneficiary. The vesting execution flow repeats until the full allocation assigned to a vesting contract has been released.</p>
              </div>

              {/* Section 7 */}
              <div id="Functional">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">7. Admin Panel Functional Scope</h2>
                <p className="mb-6 text-[#3c4043] text-justify">The admin panel is a web-based interface used by authorized allocation wallets to manage and monitor vesting activity. It provides visibility into vesting contracts and release status without bypassing on-chain controls.</p>
                <p className="mb-6 text-[#3c4043] text-justify">All actions performed through the admin panel follow the same authorization rules enforced by the smart contracts.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Allocation Wallet Capabilities</h3>
                <p className="mb-6 text-[#3c4043] text-justify">An authorized allocation wallet can use the admin panel to:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Connect its wallet securely</li>
                  <li className="text-[#3c4043]">View all vesting contracts deployed under its allocation category</li>
                  <li className="text-[#3c4043]">Assign beneficiaries to vesting contracts</li>
                  <li className="text-[#3c4043]">Configure vesting schedules at deployment</li>
                  <li className="text-[#3c4043]">Monitor vesting progress and token releases</li>
                  <li className="text-[#3c4043]">Review transaction history and release records</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">The admin panel serves as an operational interface and does not allow changes to vesting terms after deployment.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Access Restrictions</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Access to the admin panel is limited by wallet permissions.</p>
                <p className="mb-6 text-[#3c4043] text-justify">Key restrictions include:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Allocation wallets can manage only their own category</li>
                  <li className="text-[#3c4043]">Cross-category access is blocked or limited to read-only views</li>
                  <li className="text-[#3c4043]">Unauthorized wallets cannot deploy or modify vesting contracts</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">These restrictions ensure the separation of control across allocation categories and maintain clear accountability for all vesting actions.</p>
              </div>

              {/* Section 8 */}
              <div id="Process">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">8. End-to-End Vesting Process Flow</h2>
                <p className="mb-6 text-[#3c4043] text-justify">The end-to-end vesting process defines the full lifecycle of the BMZ token distribution, from initial system setup to final token release. This flow ensures that every step follows predefined rules and remains traceable on-chain.</p>
                <p className="mb-6 text-[#3c4043] text-justify">The process begins with system initialization and continues until all tokens assigned to a vesting contract are fully released to the beneficiary.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Process Flow Step</h3>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">The Factory Contract is deployed on the network.</li>
                  <li className="text-[#3c4043]">The Super Admin approves and whitelists allocation wallets in the factory.</li>
                  <li className="text-[#3c4043]">An allocation wallet connects to the admin panel.</li>
                  <li className="text-[#3c4043]">The allocation wallet deploys a vesting contract through the factory.</li>
                  <li className="text-[#3c4043]">Vesting parameters and beneficiary details are defined at deployment.</li>
                  <li className="text-[#3c4043]">BMZ tokens are transferred into the vesting contract.</li>
                  <li className="text-[#3c4043]">Tokens remain locked during the defined lock period.</li>
                  <li className="text-[#3c4043]">After the lock period ends, tokens become eligible for release.</li>
                  <li className="text-[#3c4043]">The backend scheduler detects eligible vesting contracts.</li>
                  <li className="text-[#3c4043]">The scheduler submits release transactions when conditions are met.</li>
                  <li className="text-[#3c4043]">BMZ tokens are transferred to the beneficiary wallet.</li>
                  <li className="text-[#3c4043]">The process repeats until the full allocation is released.</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">Each step is recorded on-chain, allowing any observer to verify deployment, lock status, release events, and final balances. No manual intervention is required once a vesting contract is deployed.</p>
                <p className="mb-6 text-[#3c4043] text-justify">This structured flow ensures predictable emissions, reduces operational risk, and maintains a clear audit trail for all BMZ token unlocks.</p>
              </div>

              {/* Section 9 */}
              <div id="Beneficiary">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">9. Beneficiary User Flow</h2>
                <p className="mb-6 text-[#3c4043] text-justify">The beneficiary user flow explains how end users view and track their vested BMZ tokens. Beneficiaries do not control vesting execution. They have read-only access to vesting information and receive tokens automatically when release conditions are met.</p>
                <p className="mb-6 text-[#3c4043] text-justify">All data shown to beneficiaries is sourced directly from the on-chain contract state.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">User Authentication</h3>
                <p className="mb-6 text-[#3c4043] text-justify">A vesting beneficiary connects their wallet to the user dashboard. The system identifies all vesting contracts where the connected wallet is listed as a beneficiary. Access is limited to viewing information. Beneficiaries cannot change vesting parameters or trigger releases.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Vesting Dashboard</h3>
                <p className="mb-6 text-[#3c4043] text-justify">The vesting dashboard provides a clear view of the beneficiary&apos;s token position.</p>
                <p className="mb-6 text-[#3c4043] text-justify">Users can view:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Total BMZ tokens allocated</li>
                  <li className="text-[#3c4043]">BMZ tokens already released</li>
                  <li className="text-[#3c4043]">Remaining locked BMZ tokens</li>
                  <li className="text-[#3c4043]">Vesting start date and lock period end date</li>
                  <li className="text-[#3c4043]">Vesting schedule and next release date</li>
                  <li className="text-[#3c4043]">Vesting category associated with the allocation</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">This information helps beneficiaries understand when and how tokens will be released.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Vesting and Transfer History</h3>
                <p className="mb-6 text-[#3c4043] text-justify">The dashboard also shows a complete history of token releases.</p>
                <p className="mb-6 text-[#3c4043] text-justify">For each release, users can view:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Released the BMZ amount</li>
                  <li className="text-[#3c4043]">Transaction hash</li>
                  <li className="text-[#3c4043]">Timestamp</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">This ensures transparency and allows beneficiaries to verify every transfer on the blockchain.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Beneficiary Wallet Address Change</h3>
                <p className="mb-6 text-[#3c4043] text-justify">The system supports beneficiary wallet updates with added security controls. Both single-wallet and multi-signature approval options are supported. Wallet updates do not change vesting terms. They only redirect future releases to a new approved address.</p>
              </div>

              {/* Section 10 */}
              <div id="Multi">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">10. Multi-Signature Approval Model</h2>
                <p className="mb-6 text-[#3c4043] text-justify">The vesting system supports a multi-signature approval model for beneficiary wallet address updates. This model adds an extra layer of control when changing the destination address for future token releases.</p>
                <p className="mb-6 text-[#3c4043] text-justify">The approval model applies only to wallet updates. It does not affect vesting schedules, allocation amounts, or release logic.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Wallet Approval Modes</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Two approval modes are supported:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]"><strong>Single Wallet Mode:</strong> The beneficiary wallet alone approves the address change.</li>
                  <li className="text-[#3c4043]"><strong>Multi-Signature Mode:</strong> Address changes require approval from multiple registered wallets.</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">The approval mode is selected based on security preferences.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Multi-Signature Configuration</h3>
                <p className="mb-6 text-[#3c4043] text-justify">In multi-signature mode, the system registers three wallets:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">The beneficiary wallet</li>
                  <li className="text-[#3c4043]">Two additional approver wallets</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">This creates a fixed set of wallets used for approval.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Approval Rules</h3>
                <p className="mb-6 text-[#3c4043] text-justify">The system follows an n-1 approval rule:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Any two out of the three registered wallets must approve the request</li>
                  <li className="text-[#3c4043]">Approvals are submitted through signed messages</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">Once the required approvals are collected, the request becomes eligible for execution.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Wallet Update Flow</h3>
                <p className="mb-6 text-[#3c4043] text-justify">The wallet update process follows these steps:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">The beneficiary submits a wallet update request.</li>
                  <li className="text-[#3c4043]">Approval signatures are collected from any two registered wallets.</li>
                  <li className="text-[#3c4043]">The system verifies approval validity and quorum.</li>
                  <li className="text-[#3c4043]">The beneficiary address is updated on-chain.</li>
                  <li className="text-[#3c4043]">An event is emitted for audit tracking.</li>
                  <li className="text-[#3c4043]">All future vesting releases are sent to the new wallet address.</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">This model ensures that wallet changes are controlled, traceable, and protected against unauthorized updates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
