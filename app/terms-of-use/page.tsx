import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Blockmaze Terms of Use - Terms governing the use of the Blockmaze platform and services.",
};

export default function TermsOfUsePage() {
  return (
    <>
      {/* <Container>
        <Breadcrumb items={[{ label: "Terms of Use" }]} />
      </Container> */}
      <section className="section-padding">
        <Container>
          <div className="mx-auto">
            <h1 className="text-gray-dark mb-8">Terms of Use</h1>

            <h3 className="text-gray-dark text-2xl mb-4">Introduction</h3>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              By accessing or using the Blockmaze website, applications,
              portals, APIs, and related services, you agree to be bound by
              these terms of use, our privacy policy, and any additional
              policies referenced herein. If you do not agree with these terms,
              you must not access or use the platform.
            </p>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              Blockmaze operates a decentralized ecosystem that includes
              governance tooling, validator and delegator infrastructure, RFP
              and grant programs, swap and liquidity services, and developer
              resources. These terms govern all interactions with the Blockmaze
              ecosystem.
            </p>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              If you are using the platform on behalf of an organization or
              legal entity, you represent that you are authorized to bind such
              entity to these terms.
            </p>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">
              Blockmaze may modify these terms from time to time. Material
              changes will be communicated through the platform or official
              channels. Continued use of the platform constitutes acceptance of
              the updated terms.
            </p>

            <h3 className="text-gray-dark text-2xl mb-4">
              Third Party Content
            </h3>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              The platform may display or link to third-party content, tools,
              services, websites, advertisements, or integrations for the
              convenience of users or to enhance ecosystem functionality.
              Blockmaze does not control, endorse, or assume responsibility for
              any third-party content.
            </p>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">
              Your interactions with third parties are solely between you and
              such third parties. Blockmaze is not responsible for any loss,
              damage, or dispute arising from third-party content or third-party
              services.
            </p>

            <h3 className="text-gray-dark text-2xl mb-4">User Content</h3>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              User content includes any data, text, proposals, code, documents,
              wallet addresses, credentials, feedback, or other materials
              submitted through the platform.
            </p>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              You represent and warrant that all user content you submit is
              accurate, lawful, and that you possess all necessary rights to
              provide it. You are solely responsible for maintaining the
              confidentiality of your credentials and for all activities
              conducted under your account or wallet.
            </p>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              You grant Blockmaze a non-exclusive, worldwide, royalty-free
              license to use, display, reproduce, and distribute user content
              solely for platform operations, governance, compliance, analytics,
              and ecosystem administration.
            </p>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">
              Blockmaze reserves the right to remove or restrict user content
              that violates these terms, applicable law, or governance policies.
            </p>

            <h3 className="text-gray-dark text-2xl mb-4">Software</h3>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              Any software, smart contracts, APIs, SDKs, and technical tools
              provided through the platform are owned by or licensed to
              Blockmaze and are protected by applicable intellectual property
              laws.
            </p>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">
              Open-source components are governed by their respective licenses.
              Nothing in these terms transfers ownership of any software or
              intellectual property to you.
            </p>

            <h3 className="text-gray-dark text-2xl mb-4">
              Intellectual Property
            </h3>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              All content, trademarks, logos, designs, documentation,
              interfaces, and branding associated with the platform are the
              property of Blockmaze or its licensors.
            </p>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">
              You may not copy, modify, distribute, publish, reverse engineer,
              or commercially exploit any platform materials without prior
              written permission, except as expressly permitted under applicable
              open-source licenses.
            </p>

            <h3 className="text-gray-dark text-2xl mb-4">
              Acceptable Use Policy
            </h3>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              You agree not to use the platform to engage in unlawful,
              fraudulent, deceptive, abusive, or harmful conduct.
            </p>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              You may not interfere with platform security, manipulate
              governance processes, exploit vulnerabilities, impersonate others,
              violate intellectual property rights, distribute malicious
              software, or bypass access controls.
            </p>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">
              Blockmaze reserves the right to suspend or terminate access for
              violations of this policy.
            </p>

            <h3 className="text-gray-dark text-2xl mb-4">
              Governance, DAO & RFP Participation
            </h3>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              Participation in the Blockmaze DAO, Governance Council workflows,
              or RFP processes is subject to on-chain rules, governance
              frameworks, eligibility criteria, and compliance requirements.
            </p>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              All governance votes, proposals, and decisions are final and
              binding once executed on-chain. Blockmaze does not guarantee the
              approval, funding, or implementation of any proposal or grant
              request.
            </p>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">
              Participation involves technical, financial, and regulatory risks.
              You acknowledge that governance parameters may change through
              approved governance actions.
            </p>

            <h3 className="text-gray-dark text-2xl mb-4">
              Validators & Delegators
            </h3>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              Validators and Delegators acknowledge that participation in
              network operations involves operational, technical, and economic
              risks.
            </p>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              Validators are responsible for maintaining infrastructure, meeting
              security standards, and complying with network policies.
              Delegators assume all risk associated with validator selection,
              delegation decisions, slashing, downtime penalties, and reward
              variability.
            </p>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">
              Blockmaze does not guarantee staking rewards or network uptime.
            </p>

            <h3 className="text-gray-dark text-2xl mb-4">
              Compliance & Sanctions
            </h3>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              You agree to comply with all applicable laws, including AML, KYC,
              tax, and sanctions regulations.
            </p>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              Blockmaze reserves the right to request identity verification,
              restrict access by jurisdiction, and terminate accounts for
              compliance reasons.
            </p>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">
              You represent that you are not subject to trade restrictions,
              sanctions, or legal prohibitions that would prevent lawful use of
              the platform.
            </p>

            <h3 className="text-gray-dark text-2xl mb-4">Indemnification</h3>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">
              You agree to indemnify and hold harmless Blockmaze, its
              affiliates, officers, employees, contributors, and service
              providers from any claims, damages, losses, or liabilities arising
              from your use of the platform, your user content, governance
              participation, or violation of these terms.
            </p>

            <h3 className="text-gray-dark text-2xl mb-4">Disclaimer</h3>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              The platform and all services are provided &quot;as is&quot; and
              &quot;as available.&quot; Blockmaze disclaims all warranties,
              express or implied, including warranties of merchantability,
              fitness for a particular purpose, non-infringement, accuracy,
              security, and availability.
            </p>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">
              Blockmaze does not guarantee uninterrupted service, error-free
              operation, or network performance.
            </p>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">
              Blockmaze does not provide investment, legal, tax, or financial
              advice. Nothing on the platform constitutes a solicitation or an
              offer to buy or sell any security or asset.
            </p>

            <h3 className="text-gray-dark text-2xl mb-4">
              Limitation of Liability
            </h3>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">
              To the maximum extent permitted by law, Blockmaze shall not be
              liable for any indirect, incidental, consequential, special,
              exemplary, or punitive damages, including loss of profits, data,
              tokens, or reputation.
            </p>

            <h3 className="text-gray-dark text-2xl mb-4">General</h3>
            <p className="text-gray-DEFAULT leading-relaxed">
              These terms constitute the entire agreement between you and
              Blockmaze regarding the use of the platform. If any provision is
              unenforceable, the remaining provisions remain valid. Failure to
              enforce any provision does not waive Blockmaze&apos;s right to
              enforce it later.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
