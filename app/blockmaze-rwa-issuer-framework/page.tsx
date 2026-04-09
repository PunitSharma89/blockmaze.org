import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "RWA Issuer Framework | Blockmaze",
  description:
    "Blockmaze RWA Issuer Framework defining how regulated institutions can tokenize real-world assets, covering issuer eligibility, onboarding, governance approval, token management, compliance, and enforcement.",
};

const tocItems = [
  { id: "Purpose", label: "1. Overview" },
  { id: "Custody", label: "2. Issuer Eligibility and Scope" },
  { id: "Ownership", label: "3. Issuer Onboarding and Registration" },
  { id: "Issuer", label: "4. Issuer Access and Permissions" },
  { id: "Proposal", label: "5. Offering Creation and Proposal Submission" },
  { id: "Mechanism", label: "6. Governance and Approval Mechanism" },
  { id: "Marketplace", label: "7. Token Deployment and Primary Marketplace Listing" },
  { id: "Token", label: "8. Token Management Rights" },
  { id: "Compliance", label: "9. Ongoing Reporting and Compliance" },
  { id: "Enforcement", label: "10. Governance Actions and Enforcement" },
];

export default function RwaIssuerFrameworkPage() {
  return (
    <>
      <Container>
        <Breadcrumb items={[{ label: "RWA Issuer Framework" }]} />
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
                  RWA Issuer Framework
                </h1>
              </div>

              {/* Section 1 */}
              <div id="Purpose">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">1. Overview</h2>
                <p className="mb-6 text-[#3c4043] text-justify">The RWA Issuer Framework defines how regulated institutions can tokenize real-world assets on the platform in a controlled and governed manner. It establishes clear rules for issuer onboarding, asset approval, token issuance and ongoing compliance.</p>
                <p className="mb-6 text-[#3c4043] text-justify">The framework is built for institutional issuers only. Individual users are not allowed to issue real-world asset tokens. This restriction ensures accountability, regulatory alignment and clear ownership of issued assets.</p>
                <p className="mb-6 text-[#3c4043] text-justify">The framework covers the full lifecycle of an RWA offering. This includes issuer registration, verification, proposal creation, governance approval, token deployment, market listing, reporting and enforcement actions. Each stage follows defined processes and recorded approvals.</p>
                <p className="mb-6 text-[#3c4043] text-justify">The objective of this framework is to ensure that all tokenized real-world assets are issued with proper disclosures, legal backing and ongoing oversight. This creates a transparent environment for investors, regulators and platform participants.</p>
              </div>

              {/* Section 2 */}
              <div id="Custody">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">2. Issuer Eligibility and Scope</h2>
                <p className="mb-6 text-[#3c4043] text-justify">The RWA Issuer Framework is limited to regulated institutional entities. Only registered institutions are permitted to act as issuers and tokenize real-world assets on the platform. Individual users or unregistered entities cannot issue RWA tokens.</p>
                <p className="mb-6 text-[#3c4043] text-justify">Eligible issuers include organizations that can provide verifiable legal identity, regulatory standing and supporting documentation for the assets they intend to tokenize. This ensures clear accountability for asset ownership, issuance and ongoing obligations.</p>
                <p className="mb-6 text-[#3c4043] text-justify">The framework applies to real-world asset classes such as commodities and securities. Each asset type must meet defined legal, compliance and disclosure requirements before it can be approved for tokenization.</p>
                <p className="mb-6 text-[#3c4043] text-justify">The scope of issuer activity is limited to approved offerings and governed actions. Issuers can operate only within the permissions granted after approval and remain subject to continuous monitoring and governance oversight.</p>
              </div>

              {/* Section 3 */}
              <div id="Ownership">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">3. Issuer Onboarding and Registration</h2>
                <p className="mb-6 text-[#3c4043] text-justify">Issuer onboarding establishes the identity, legitimacy and approval status of an institution before it can issue real-world asset tokens. This process ensures that only verified entities gain issuer-level access.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Institutional Registration</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Issuers begin by registering as institutional entities on the platform. Registration requires submission of core organizational details and completion of basic account creation. Individual accounts are not eligible for issuer registration.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">KYB Verification Process</h3>
                <p className="mb-6 text-[#3c4043] text-justify">After registration, the institution must complete KYB verification. KYB is conducted through an integrated third-party compliance provider along with required form submissions. The submitted information is reviewed by both the compliance provider and the platform Admin.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Issuer Approval and Whitelisting</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Once KYB is approved, the institution can request issuer status. This request is reviewed by the Admin. Upon approval, the issuer&apos;s wallet address is whitelisted and issuer-level access is enabled. Only after whitelisting can the institution perform issuer-specific actions.</p>
              </div>

              {/* Section 4 */}
              <div id="Issuer">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">4. Issuer Access and Permissions</h2>
                <p className="mb-6 text-[#3c4043] text-justify">Once approved and whitelisted, the issuer gains access to issuer-specific functions on the platform. These permissions are limited to actions required for creating, managing and maintaining approved real-world asset offerings.</p>
                <p className="mb-6 text-[#3c4043] text-justify">Approved issuers are allowed to:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Create and submit asset tokenization proposals</li>
                  <li className="text-[#3c4043]">Manage the token lifecycle for approved offerings</li>
                  <li className="text-[#3c4043]">Interact with the governance council for proposal review and approval</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">All issuer actions are governed by predefined rules and are recorded for audit purposes. Issuers cannot perform actions outside their approved scope or bypass governance controls.</p>
              </div>

              {/* Section 5 */}
              <div id="Proposal">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">5. Offering Creation & Proposal Submission</h2>
                <p className="mb-6 text-[#3c4043] text-justify">Approved issuers can create new real-world asset offerings through a structured proposal process. This process ensures that each offering is reviewed for asset validity, legal compliance and issuance rules before deployment.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Offering Proposal Creation</h3>
                <p className="mb-6 text-[#3c4043] text-justify">The issuer initiates an offering by creating a proposal that specifies the asset class to be tokenized. Supported asset classes include commodities and securities. Each proposal represents a single offering and follows a defined submission workflow.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Asset and Legal Details</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Each offering proposal must include complete supporting information, such as:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Asset details, including quantity, quality and storage information</li>
                  <li className="text-[#3c4043]">Legal documentation related to ownership and rights</li>
                  <li className="text-[#3c4043]">Compliance disclosures required for the asset class</li>
                  <li className="text-[#3c4043]">Token issuance parameters and basic economics</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">These details form the basis for governance review.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Internal Review and Submission</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Before submission, proposals are reviewed by the issuer to confirm completeness and accuracy. Once finalized, the proposal is submitted for governance and DAO review. After submission, the proposal enters the formal approval process and cannot be altered without resubmission.</p>
              </div>

              {/* Section 6 */}
              <div id="Mechanism">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">6. Governance and Approval Mechanism</h2>
                <p className="mb-6 text-[#3c4043] text-justify">All real-world asset offerings are subject to a governance-based approval process. This process ensures that asset issuance follows defined standards and that decisions are reviewed by an independent body.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Governing Council Review</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Submitted proposals are reviewed by the Governing Council. The council examines the proposal details and supporting documents provided by the issuer. The review focuses on:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Asset legitimacy and ownership</li>
                  <li className="text-[#3c4043]">Legal and compliance documentation</li>
                  <li className="text-[#3c4043]">Risk disclosures</li>
                  <li className="text-[#3c4043]">Token issuance structure</li>
                </ul>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Approval Criteria</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Approval is based on whether the proposal meets required legal, compliance and disclosure standards. Proposals that do not meet these requirements may be rejected or returned for revision.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Authorization Outcome</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Once approved, the offering is authorized for on-chain deployment. If rejected, the issuer must address the identified issues before resubmitting.</p>
              </div>

              {/* Section 7 */}
              <div id="Marketplace">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">7. Token Deployment and Primary Marketplace Listing</h2>
                <p className="mb-6 text-[#3c4043] text-justify">Once an offering proposal is approved by the Governing Council, the platform proceeds with on-chain deployment of the associated smart contracts. These contracts are created according to the parameters approved during governance review.</p>
                <p className="mb-6 text-[#3c4043] text-justify">After deployment, tokens are minted strictly within the approved supply limits. No additional minting is permitted outside the authorized scope.</p>
                <p className="mb-6 text-[#3c4043] text-justify">Following minting, the offering is listed on the Primary Marketplace. This makes the tokens available to eligible investors under the rules defined for the offering. Listing occurs only after successful deployment and confirmation that all approval conditions have been met.</p>
              </div>

              {/* Section 8 */}
              <div id="Token">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">8. Token Management Rights</h2>
                <p className="mb-6 text-[#3c4043] text-justify">Issuers are granted controlled administrative rights over tokens issued under approved offerings. These rights are enforced through smart contracts and apply only within the limits defined during the approval process. Issuer actions are logged on-chain and remain subject to governance oversight.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Minting Controls</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Issuers can mint tokens only according to the supply limits approved for the offering. Minting outside the approved parameters is not permitted. Mint actions are recorded on-chain and linked to the specific offering.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Burning Controls</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Issuers can burn tokens when required. This may occur during redemption, corrections, or other approved operational cases. Burn actions reduce the total supply and are recorded on-chain.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Freeze and Unfreeze Controls</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Issuers can restrict token transfers by freezing tokens when required for compliance or regulatory reasons. Once conditions are met, issuers can unfreeze tokens to restore transferability. All freeze and unfreeze actions are tracked and auditable.</p>
              </div>

              {/* Section 9 */}
              <div id="Compliance">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">9. Ongoing Reporting and Compliance</h2>
                <p className="mb-6 text-[#3c4043] text-justify">Issuers are required to meet ongoing reporting obligations to maintain transparency and alignment with asset backing requirements. These obligations apply to the full lifecycle of an issued offering.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Proof of Reserve Reporting</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Issuers must submit a Proof of Reserve report every 15 days. This report confirms that the issued tokens remain backed by the underlying real-world assets.</p>
                <p className="mb-6 text-[#3c4043] text-justify">Proof of Reserve reports must include verifiable data that supports asset quantity and custody status. Reports are submitted through the platform and linked to the relevant offering.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Review and Monitoring</h3>
                <p className="mb-6 text-[#3c4043] text-justify">Submitted reports are reviewed by the Governing Council. The review checks consistency between reported reserves and issued token supply.</p>
                <p className="mb-6 text-[#3c4043] text-justify">If discrepancies, delays, or risks are identified, the council may request clarification or additional documentation from the issuer.</p>
              </div>

              {/* Section 10 */}
              <div id="Enforcement">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">10. Governance Actions and Enforcement</h2>
                <p className="mb-6 text-[#3c4043] text-justify">The governance framework includes defined actions to address non-compliance, reporting gaps, or operational risks related to issued real-world asset tokens. These actions ensure continued oversight and protect market participants.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Corrective Actions</h3>
                <p className="mb-6 text-[#3c4043] text-justify">If issues are identified during review or monitoring, the Governing Council may:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Request additional disclosures or clarifications</li>
                  <li className="text-[#3c4043]">Require updated documentation or reports</li>
                  <li className="text-[#3c4043]">Set timelines for issue resolution</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">Issuers are expected to respond within the defined timeframe to maintain issuer status.</p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">Restrictions and Revocation</h3>
                <p className="mb-6 text-[#3c4043] text-justify">In cases of unresolved issues or serious breaches, the Governing Council may:</p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Impose restrictions on issuer actions</li>
                  <li className="text-[#3c4043]">Pause minting, transfers, or marketplace access</li>
                  <li className="text-[#3c4043]">Revoke issuer privileges if required</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">All enforcement actions follow recorded governance decisions and are logged for audit purposes. Issuers remain accountable for compliance throughout the lifecycle of their offerings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
