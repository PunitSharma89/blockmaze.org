import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Security Model & Slashing Rules | Blockmaze",
  description:
    "BlockMaze Blockchain security model covering Proof-of-Stake consensus, validator and delegator roles, economic security, slashing framework, jailing mechanisms, and governance of security parameters.",
};

const tocItems = [
  { id: "overview", label: "1. Overview" },
  { id: "core-security", label: "2. Core Security Architecture" },
  { id: "validator-roles", label: "3. Validator and Delegator Roles" },
  { id: "economic-security", label: "4. Economic Security Model" },
  { id: "slashing-framework", label: "5. Slashing Framework" },
  { id: "slashing-conditions", label: "6. Slashing Conditions" },
  { id: "jailing-vs-slashing", label: "7. Jailing vs Slashing" },
  { id: "delegator-impact", label: "8. Delegator Slashing Impact" },
  { id: "unbonding", label: "9. Unbonding and Security Window" },
  { id: "governance", label: "10. Governance of Security Parameters" },
];

export default function SecurityModelSlashingRulesPage() {
  return (
    <>
      <Container>
        <Breadcrumb items={[{ label: "Security Model & Slashing Rules" }]} />
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
                  Security Model & Slashing Rules
                </h1>
              </div>

              {/* Section 1 */}
              <div id="overview">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">
                  1. Overview
                </h2>
                <p className="mb-6 text-[#3c4043] text-justify">
                  BlockMaze Blockchain is a Delegated Proof-of-Stake network designed to provide deterministic finality, economic security and clear validator accountability. The protocol maintains chain sovereignty and supports modular governance across participating zones.
                </p>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Network security is enforced through Byzantine Fault Tolerant consensus, stake-weighted validator participation, protocol-level slashing and jailing mechanisms and governance-controlled security parameters. This document explains how the network protects itself from faults, attacks and validator misbehavior.
                </p>
              </div>

              {/* Section 2 */}
              <div id="core-security">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">
                  2. Core Security Architecture
                </h2>
                <p className="mb-6 text-[#3c4043] text-justify">
                  The BlockMaze security architecture is based on economic guarantees and deterministic consensus. It relies on validator stake, strict finality rules and fault tolerance assumptions to protect the network.
                </p>
                <div className="mb-6">
                  <Image
                    src="/images/Security-Architecture.png"
                    alt="Security Architecture"
                    width={800}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">
                  Proof-of-Stake Consensus
                </h3>
                <p className="mb-6 text-[#3c4043] text-justify">
                  BlockMaze uses a stake-weighted Proof-of-Stake model.
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Validators lock native BMZ tokens as collateral</li>
                  <li className="text-[#3c4043]">Consensus participation power is proportional to the amount of bonded stake</li>
                  <li className="text-[#3c4043]">A block is finalized once at least two-thirds of the total voting power signs it</li>
                </ul>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">
                  Security Guarantee
                </h3>
                <p className="mb-6 text-[#3c4043] text-justify">
                  As long as less than one-third of the total voting power behaves maliciously, the network maintains both safety and liveness.
                </p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">
                  Deterministic Finality
                </h3>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Blocks reach finality immediately after consensus is achieved.
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">There are no probabilistic confirmations</li>
                  <li className="text-[#3c4043]">Chain reorganizations do not occur after finality</li>
                </ul>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">
                  Implication
                </h3>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Once a transaction is committed to a finalized block, it is irreversible and considered settled.
                </p>
              </div>

              {/* Section 3 */}
              <div id="validator-roles">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">
                  3. Validator and Delegator Roles
                </h2>
                <p className="mb-6 text-[#3c4043] text-justify">
                  The BlockMaze security model assigns clear responsibilities to validators and delegators. Both roles are economically linked and jointly affect network security.
                </p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">
                  Validators
                </h3>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Validators are responsible for core network operations.
                </p>
                <p className="mb-4 text-[#3c4043] text-justify">
                  <strong>They perform the following functions:</strong>
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Proposing new blocks</li>
                  <li className="text-[#3c4043]">Validating transactions</li>
                  <li className="text-[#3c4043]">Participating in consensus rounds</li>
                  <li className="text-[#3c4043]">Maintaining high-availability infrastructure</li>
                </ul>
                <p className="mb-4 text-[#3c4043] text-justify">
                  <strong>Validators must meet the following requirements:</strong>
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Bond BMZ tokens as economic collateral</li>
                  <li className="text-[#3c4043]">Maintain secure key management practices</li>
                  <li className="text-[#3c4043]">Operate reliable networking and hardware</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Validator behavior directly impacts network safety and performance.
                </p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">
                  Delegators
                </h3>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Delegators participate in network security by staking BMZ tokens through validators.
                </p>
                <p className="mb-4 text-[#3c4043] text-justify">
                  <strong>Delegators:</strong>
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Stake BMZ tokens with selected validators</li>
                  <li className="text-[#3c4043]">Earn a proportional share of validator rewards</li>
                  <li className="text-[#3c4043]">Inherit both rewards and penalties</li>
                </ul>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">
                  Shared-Risk Principle
                </h3>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Delegators are economically exposed to validator behavior. This encourages careful validator selection and active monitoring.
                </p>
              </div>

              {/* Section 4 */}
              <div id="economic-security">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">
                  4. Economic Security Model
                </h2>
                <p className="mb-6 text-[#3c4043] text-justify">
                  BlockMaze enforces security through economic incentives rather than computational barriers. Key principles include:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Malicious behavior leads to direct financial loss</li>
                  <li className="text-[#3c4043]">Attacks require risking large amounts of bonded capital</li>
                  <li className="text-[#3c4043]">Honest participation remains economically dominant</li>
                </ul>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">
                  Attack Cost
                </h3>
                <p className="mb-6 text-[#3c4043] text-justify">
                  To compromise consensus, an attacker must control at least one-third of the total bonded BMZ. Any successful attack risks irreversible slashing of the bonded stake.
                </p>
              </div>

              {/* Section 5 */}
              <div id="slashing-framework">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">
                  5. Slashing Framework
                </h2>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Slashing is a protocol-level enforcement mechanism. It penalizes actions that threaten network safety or liveness. Slashing applies automatically based on on-chain evidence and is enforced without manual intervention.
                </p>
              </div>

              {/* Section 6 */}
              <div id="slashing-conditions">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">
                  6. Slashing Conditions
                </h2>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Slashing conditions define specific validator actions that trigger penalties.
                </p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">
                  Double Signing (Safety Violation)
                </h3>
                <p className="mb-6 text-[#3c4043] text-justify">
                  A validator signs two different blocks at the same block height.
                </p>
                <p className="mb-4 text-[#3c4043] text-justify"><strong>Impact:</strong></p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Breaks Byzantine safety assumptions</li>
                  <li className="text-[#3c4043]">Can lead to irreversible forks</li>
                </ul>
                <p className="mb-4 text-[#3c4043] text-justify"><strong>Penalty:</strong></p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">5% of the total bonded stake is slashed</li>
                  <li className="text-[#3c4043]">Permanent jailing of the validator</li>
                  <li className="text-[#3c4043]">Validator must rotate keys and manually re-enter the consensus</li>
                </ul>
                <p className="mb-4 text-[#3c4043] text-justify"><strong>Severity</strong></p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Critical and treated as malicious.</li>
                </ul>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">
                  Downtime (Liveness Violation)
                </h3>
                <p className="mb-6 text-[#3c4043] text-justify">
                  A validator fails to participate in consensus beyond the allowed threshold.
                </p>
                <p className="mb-4 text-[#3c4043] text-justify"><strong>Typical Parameters (Defined through governance)</strong></p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Monitoring window: approximately 10,000 blocks</li>
                  <li className="text-[#3c4043]">Maximum missed blocks: more than 95%</li>
                </ul>
                <p className="mb-4 text-[#3c4043] text-justify"><strong>Penalty:</strong></p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">0.01% of the bonded stake is slashed</li>
                  <li className="text-[#3c4043]">Temporary jailing</li>
                  <li className="text-[#3c4043]">Validator may rejoin after fixing the infrastructure and completing the unjailing</li>
                </ul>
                <p className="mb-4 text-[#3c4043] text-justify"><strong>Severity</strong></p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Operational negligence.</li>
                </ul>
              </div>

              {/* Section 7 */}
              <div id="jailing-vs-slashing">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">
                  7. Jailing vs Slashing
                </h2>
                <p className="mb-6 text-[#3c4043] text-justify">
                  BlockMaze uses two enforcement mechanisms to address validator misbehavior: jailing and slashing. Each mechanism serves a different purpose and has different recovery conditions.
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse bg-[#f9f9f9]">
                    <thead>
                      <tr>
                        <th className="border border-gray-200 p-3 text-left bg-[#f0f2f5] font-semibold text-[#2c3e50]">Mechanism</th>
                        <th className="border border-gray-200 p-3 text-left bg-[#f0f2f5] font-semibold text-[#2c3e50]">Description</th>
                        <th className="border border-gray-200 p-3 text-left bg-[#f0f2f5] font-semibold text-[#2c3e50]">Recoverable</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 p-3 text-[#3c4043]"><strong>Slashing</strong></td>
                        <td className="border border-gray-200 p-3 text-[#3c4043]">Permanent loss of bonded stake</td>
                        <td className="border border-gray-200 p-3 text-[#3c4043]">No</td>
                      </tr>
                      <tr className="bg-[#f9f9f9]">
                        <td className="border border-gray-200 p-3 text-[#3c4043]"><strong>Jailing</strong></td>
                        <td className="border border-gray-200 p-3 text-[#3c4043]">Validator suspension from consensus</td>
                        <td className="border border-gray-200 p-3 text-[#3c4043]">Yes, subject to conditions</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Downtime results in temporary jailing</li>
                  <li className="text-[#3c4043]">Double signing results in permanent jailing</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Slashing and jailing may occur together depending on the severity of the violation.
                </p>
              </div>

              {/* Section 8 */}
              <div id="delegator-impact">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">
                  8. Delegator Slashing Impact
                </h2>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Slashing is applied to the total bonded stake of a validator.
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Delegators absorb penalties in proportion to their delegated stake</li>
                  <li className="text-[#3c4043]">Delegators share responsibility for validator behavior through economic exposure</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">
                  This mechanism encourages:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Active validator performance monitoring</li>
                  <li className="text-[#3c4043]">Timely stake redelegation</li>
                  <li className="text-[#3c4043]">Decentralized accountability across the network</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Delegators share responsibility for validator behavior through economic exposure.
                </p>
              </div>

              {/* Section 9 */}
              <div id="unbonding">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">
                  9. Unbonding and Security Window
                </h2>
                <p className="mb-6 text-[#3c4043] text-justify">
                  The unbonding process includes a security window during which the stake remains subject to penalties:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Unbonding period: N days, defined through governance</li>
                  <li className="text-[#3c4043]">Stake remains slashable during the unbonding period</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">
                  This design prevents validators from avoiding penalties by unbonding immediately after misbehavior.
                </p>
                <p className="mb-4 text-[#3c4043] text-justify">
                  <strong>Security Rationale:</strong>
                </p>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Delayed detection of faults can still result in penalties, preserving enforcement effectiveness.
                </p>
              </div>

              {/* Section 10 */}
              <div id="governance">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">
                  10. Governance of Security Parameters
                </h2>
                <p className="mb-6 text-[#3c4043] text-justify">
                  BlockMaze uses on-chain governance to manage and update security-related parameters.
                </p>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Governance may modify:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Slashing percentages</li>
                  <li className="text-[#3c4043]">Downtime thresholds</li>
                  <li className="text-[#3c4043]">Unbonding duration</li>
                  <li className="text-[#3c4043]">Validator set size</li>
                  <li className="text-[#3c4043]">Minimum self-bond requirements</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">
                  This governance model allows the network to adjust security parameters over time without requiring protocol hard forks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
