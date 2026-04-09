import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Blockmaze Protocol",
  description: "Technical specification of the Blockmaze protocol including node setup, system requirements, validator operations, and tokenomics.",
};

export default function BlockmazeProtocolPage() {
  return (
    <>
      <Container>
        <Breadcrumb items={[{ label: "Blockmaze Protocol" }]} />
      </Container>
      <section className="section-padding">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-gray-dark mb-8">Blockmaze Protocol Technical Specification</h1>

            <h2 className="text-gray-dark text-2xl mb-4">1. Introduction</h2>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">This document defines the technical specifications of the Blockmaze protocol. It describes the scope of node operation, system requirements, tooling dependencies, validator responsibilities, protocol performance characteristics, native token usage, and the sovereign chain model.</p>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">The specification is intended for developers, node operators, and validators who plan to run or interact with the Blockmaze network. It focuses on operational and infrastructure-level details required to deploy and maintain nodes.</p>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">This document does not describe application logic or user-facing features. It outlines only the technical components and assumptions needed to support validator and full node operation within the Blockmaze protocol.</p>

            <h2 className="text-gray-dark text-2xl mb-4">2. Node Setup Scope</h2>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">The Blockmaze protocol supports two primary node types. Each node type serves a distinct purpose within the network and has different operational requirements.</p>

            <h3 className="text-gray-dark text-xl mb-3">Validator Node Scope</h3>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">Validator nodes take part in block production and consensus. They are responsible for validating transactions, producing blocks and maintaining network state.</p>
            <p className="text-gray-DEFAULT mb-2">A validator node must:</p>
            <ul className="space-y-2 mb-6">{["Remain online with high uptime", "Follow protocol rules during block production", "Maintain secure key management", "Participate in staking and governance processes"].map((i, idx) => <li key={idx} className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span>{i}</span></li>)}</ul>

            <h3 className="text-gray-dark text-xl mb-3">Full Node Scope</h3>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">Full nodes maintain a complete copy of the blockchain and provide read access to network data. They do not participate in block production or consensus.</p>
            <p className="text-gray-DEFAULT mb-2">A full node can be used for:</p>
            <ul className="space-y-2 mb-8">{["Querying blockchain data", "Supporting applications and services", "Monitoring network activity"].map((i, idx) => <li key={idx} className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span>{i}</span></li>)}</ul>

            <h2 className="text-gray-dark text-2xl mb-4">3. System Requirements</h2>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">Running a Blockmaze node requires meeting specific system and infrastructure requirements.</p>
            <h3 className="text-gray-dark text-xl mb-3">Operating System Requirements</h3>
            <ul className="space-y-2 mb-4"><li className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span><strong>Operating System:</strong> Ubuntu 22.04 or a compatible Linux distribution</span></li></ul>
            <h3 className="text-gray-dark text-xl mb-3">Hardware Requirements</h3>
            <ul className="space-y-2 mb-4">{["Memory: At least 16 GB of RAM", "Storage: A minimum of 500 GB of available disk space", "CPU: Minimum 8-core processor"].map((i, idx) => <li key={idx} className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span>{i}</span></li>)}</ul>
            <h3 className="text-gray-dark text-xl mb-3">Network Requirements</h3>
            <ul className="space-y-2 mb-8">{["A stable, high-speed internet connection", "Nodes can be deployed on cloud-based or locally hosted systems"].map((i, idx) => <li key={idx} className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span>{i}</span></li>)}</ul>

            <h2 className="text-gray-dark text-2xl mb-4">4. Tools and Dependencies</h2>
            <ul className="space-y-2 mb-8">{["Bash: Command-line shell for running scripts", "Go: Compatible with Cosmos SDK requirements", "Jq: Command-line tool for processing JSON data", "wget: For downloading files from external sources", "unzip: For extracting compressed archive files", "build-essential: Compilers and build tools for compiling from source"].map((i, idx) => <li key={idx} className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span>{i}</span></li>)}</ul>

            <h2 className="text-gray-dark text-2xl mb-4">5. Validator Operations</h2>
            <h3 className="text-gray-dark text-xl mb-3">Maintain Uptime</h3>
            <ul className="space-y-2 mb-4">{["24/7 Operations: Validator nodes must run continuously", "Redundancy: Implement backup systems to reduce downtime"].map((i, idx) => <li key={idx} className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span>{i}</span></li>)}</ul>
            <h3 className="text-gray-dark text-xl mb-3">Secure the Network</h3>
            <ul className="space-y-2 mb-4">{["Follow standard security practices to protect nodes", "Private keys must be stored securely and backed up in encrypted form"].map((i, idx) => <li key={idx} className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span>{i}</span></li>)}</ul>
            <h3 className="text-gray-dark text-xl mb-3">Adhere to Governance Policies</h3>
            <ul className="space-y-2 mb-8">{["Follow protocol rules and governance decisions", "Participate honestly and fairly to maintain network integrity"].map((i, idx) => <li key={idx} className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span>{i}</span></li>)}</ul>

            <h2 className="text-gray-dark text-2xl mb-4">6. Throughput and Performance</h2>
            <ul className="space-y-2 mb-8">{["Block Time: Approximately 6 seconds", "Transactions Per Second: Potentially thousands, depending on configuration"].map((i, idx) => <li key={idx} className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span>{i}</span></li>)}</ul>

            <h2 className="text-gray-dark text-2xl mb-4">7. Native Token (BMZ) and Economics</h2>
            <ul className="space-y-2 mb-8">{["Staking and Security: Used by validators and delegators for staking", "Fees: Used to pay transaction fees on the network", "Governance: Enables participation in on-chain governance and voting"].map((i, idx) => <li key={idx} className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span>{i}</span></li>)}</ul>

            <h2 className="text-gray-dark text-2xl mb-4">8. Customizability and Governance</h2>
            <h3 className="text-gray-dark text-xl mb-3">Sovereign Chains</h3>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">Each zone operates independently and can define its own governance rules, tokenomics, and validator set. This allows zones to operate with autonomy while remaining connected to the broader ecosystem.</p>
            <h3 className="text-gray-dark text-xl mb-3">Governance</h3>
            <p className="text-gray-DEFAULT leading-relaxed">Governance is handled through on-chain mechanisms. Stakeholders can submit proposals and vote on protocol upgrades or parameter changes according to the rules defined by each zone.</p>
          </div>
        </Container>
      </section>
    </>
  );
}
