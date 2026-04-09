import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Blockmaze Privacy Policy - How we collect, use, disclose, and protect personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Container>
        <Breadcrumb items={[{ label: "Privacy Policy" }]} />
      </Container>
      <section className="section-padding">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-gray-dark mb-8">Privacy Policy</h1>

            <h2 className="text-gray-dark text-2xl mb-4">Introduction</h2>
            <p className="text-gray-DEFAULT mb-6 leading-relaxed">
              This privacy policy explains how Blockmaze collects, uses,
              discloses, and protects personal data when you access or use the
              Blockmaze websites, applications, portals, smart contracts, APIs,
              and related services.
            </p>
            <p className="text-gray-DEFAULT mb-6 leading-relaxed">
              Blockmaze operates a decentralized ecosystem that includes
              governance infrastructure, DAO participation, validator and
              delegator coordination, RFP and grant programs, swap and liquidity
              services, and developer tooling. This privacy policy applies to all
              users of the platform, including visitors, governance participants,
              validators, delegators, developers, and applicants responding to
              RFPs.
            </p>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">
              By accessing or using the Platform, you acknowledge that you have
              read and understood this Privacy Policy.
            </p>

            <h2 className="text-gray-dark text-2xl mb-4">
              Scope and Applicability
            </h2>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              This Privacy Policy applies to personal data processed by
              Blockmaze in connection with:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Use of Blockmaze websites and portals",
                "Participation in governance, DAO voting, or RFP processes",
                "Validator and delegator onboarding and participation",
                "Developer access to APIs, SDKs, and documentation",
                "Communications, support requests, and compliance activities",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-DEFAULT">
                  <span className="text-primary mt-1">&#8226;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">
              This privacy policy does not apply to third-party websites,
              services, or protocols that may be linked to or integrated with the
              platform.
            </p>

            <h2 className="text-gray-dark text-2xl mb-4">
              Categories of Personal Data We Collect
            </h2>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              We may collect the following categories of personal data depending
              on how you interact with the platform:
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Personal identification and contact information, such as name, email address, organization name, country of residence, and communication details.",
                "Account and access information, including usernames, authentication credentials, wallet addresses, public keys, and role-based access identifiers.",
                "Governance and participation data, including proposals submitted, votes cast, delegation activity, validator participation records, and RFP submissions.",
                "Compliance and verification data, which may include identity verification information, sanctions screening results, and regulatory compliance records, where required by law.",
                "Technical and usage data, including IP address, device identifiers, browser type, operating system, timestamps, pages accessed, and interaction logs.",
                "Communications data, including inquiries, support requests, feedback, and correspondence with Blockmaze.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-DEFAULT">
                  <span className="text-primary mt-1">&#8226;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-gray-dark text-2xl mb-4">
              Blockchain and On-Chain Data
            </h2>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              Certain data associated with your use of the platform may be
              recorded on public or permissioned blockchains. Blockchain data may
              be immutable, transparent, and publicly accessible.
            </p>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">
              Blockmaze does not control public blockchain networks and cannot
              modify, delete, or restrict access to data recorded on-chain. You
              acknowledge that personal data included in on-chain transactions
              may be permanently visible and subject to blockchain network rules.
            </p>

            <h2 className="text-gray-dark text-2xl mb-4">
              Purposes of Processing
            </h2>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              Blockmaze processes personal data for the following purposes:
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "To provide, operate, and maintain the platform and its features.",
                "To enable participation in governance, DAO voting, RFP processes, and ecosystem programs.",
                "To onboard and manage validators, delegators, and developers.",
                "To administer grants, proposals, and milestone-based programs.",
                "To ensure network security, integrity, and operational resilience.",
                "To comply with legal, regulatory, and compliance obligations.",
                "To communicate with users regarding updates, governance actions, support requests, and Platform-related information.",
                "To analyze usage trends and improve Platform performance and user experience.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-DEFAULT">
                  <span className="text-primary mt-1">&#8226;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-gray-dark text-2xl mb-4">
              Legal Bases for Processing
            </h2>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              Blockmaze processes personal data based on one or more of the
              following legal bases, depending on the context:
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Performance of a contract or taking steps prior to entering into a contract.",
                "Compliance with legal or regulatory obligations.",
                "Legitimate interests pursued by Blockmaze, such as security, governance integrity, and platform improvement, provided such interests are not overridden by user rights.",
                "Consent, where explicitly required under applicable law.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-DEFAULT">
                  <span className="text-primary mt-1">&#8226;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-gray-dark text-2xl mb-4">
              Disclosure of Personal Data
            </h2>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              Blockmaze may disclose personal data to:
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Service providers and infrastructure partners that support platform operations are subject to confidentiality obligations.",
                "Compliance, identity verification, and security service providers, where required by law or governance policy.",
                "Governance bodies or auditors where disclosure is necessary for transparency, compliance, or dispute resolution.",
                "Regulatory authorities, courts, or law enforcement, where required by applicable law or legal process.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-DEFAULT">
                  <span className="text-primary mt-1">&#8226;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-gray-dark text-2xl mb-4">
              Cross-Border Data Transfers
            </h2>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">
              Personal data may be processed or stored in jurisdictions outside
              your country of residence. Where required, Blockmaze implements
              appropriate safeguards to ensure an adequate level of data
              protection, consistent with applicable data protection laws.
            </p>

            <h2 className="text-gray-dark text-2xl mb-4">Data Retention</h2>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              Blockmaze retains personal data only for as long as necessary to
              fulfill the purposes described in this privacy policy, comply with
              legal obligations, resolve disputes, and enforce agreements.
            </p>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">
              Retention periods may vary depending on data type, regulatory
              requirements, and governance obligations. Data that is no longer
              required is securely deleted or anonymized, except where retention
              is required by law or blockchain immutability.
            </p>

            <h2 className="text-gray-dark text-2xl mb-4">Security Measures</h2>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              Blockmaze implements reasonable technical and organizational
              measures to protect personal data against unauthorized access,
              loss, misuse, alteration, or disclosure.
            </p>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">
              These measures may include access controls, encryption, monitoring,
              secure infrastructure, and internal data handling policies. However,
              no system is completely secure, and Blockmaze cannot guarantee
              absolute security.
            </p>

            <h2 className="text-gray-dark text-2xl mb-4">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              Blockmaze may use cookies and similar technologies to operate the
              platform, enhance functionality, analyze usage, and improve
              performance.
            </p>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">
              You may manage cookie preferences through your browser settings or
              applicable consent tools. Disabling certain cookies may affect
              platform functionality.
            </p>

            <h2 className="text-gray-dark text-2xl mb-4">User Rights</h2>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              Subject to applicable law, you may have the right to:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "Access personal data held about you.",
                "Request correction of inaccurate or incomplete personal data.",
                "Request deletion of personal data, where legally permissible.",
                "Request restriction or objection to certain processing activities.",
                "Request data portability where processing is based on consent or contract.",
                "Withdraw consent where processing is based on consent.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-DEFAULT">
                  <span className="text-primary mt-1">&#8226;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">
              Requests may be submitted through the contact details provided
              below. Blockmaze will respond within the timeframes required by
              applicable law.
            </p>

            <h2 className="text-gray-dark text-2xl mb-4">
              Automated Decision-Making
            </h2>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">
              Blockmaze does not engage in automated decision-making that
              produces legal or similarly significant effects on users without
              appropriate safeguards or human oversight.
            </p>

            <h2 className="text-gray-dark text-2xl mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              Blockmaze may update this privacy policy from time to time to
              reflect changes in legal requirements, Platform functionality, or
              data processing practices.
            </p>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">
              Material changes will be communicated through the platform or other
              appropriate channels. Continued use of the platform after updates
              constitutes acknowledgment of the revised privacy policy.
            </p>

            <h2 className="text-gray-dark text-2xl mb-4">Acknowledgment</h2>
            <p className="text-gray-DEFAULT leading-relaxed">
              By using the Blockmaze platform, you acknowledge that you have
              read, understood, and agree to the processing of personal data as
              described in this privacy policy.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
