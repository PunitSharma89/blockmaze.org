import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Validator Handbook",
  description: "Step-by-step guide for operating a validator on the Blockmaze network.",
};

export default function ValidatorHandbookPage() {
  return (
    <>
      <Container><Breadcrumb items={[{ label: "Validator Handbook" }]} /></Container>
      <section className="section-padding">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-gray-dark mb-8">Blockmaze Validator Handbook</h1>

            <h2 className="text-gray-dark text-2xl mb-4">1. Document Overview</h2>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">This handbook provides a step-by-step guide for operating a validator on the Blockmaze network. It covers setup requirements, dashboard features, staking actions, and account controls. It is intended for users planning to operate validator nodes and manage stake.</p>

            <h2 className="text-gray-dark text-2xl mb-4">2. Validators on Blockmaze</h2>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">Validators verify transactions, create blocks, and participate in the consensus process. They must follow network rules to remain active and avoid penalties. Validators protect the network from invalid transactions and dishonest activity.</p>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">A minimum stake of 100 BMZ tokens is required. Higher stake increases the chance of active validator set inclusion.</p>

            <h2 className="text-gray-dark text-2xl mb-4">3. Minimum Requirements</h2>
            <h3 className="text-gray-dark text-xl mb-3">System Requirements</h3>
            <ul className="space-y-2 mb-4">{["Operating System: Ubuntu 22.04", "Memory: Minimum 4 GB RAM", "Storage: At least 20 GB available disk space", "Network: Stable and continuous internet connection"].map((i, idx) => <li key={idx} className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span>{i}</span></li>)}</ul>
            <h3 className="text-gray-dark text-xl mb-3">Required Tools</h3>
            <ul className="space-y-2 mb-8">{["Bash", "Go (matching Cosmos SDK version)", "jq", "wget", "unzip", "build-essential"].map((i, idx) => <li key={idx} className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span>{i}</span></li>)}</ul>

            <h2 className="text-gray-dark text-2xl mb-4">4. Validator Login Process</h2>
            <h3 className="text-gray-dark text-xl mb-3">Step 1: Enter Node URL</h3>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">Format: http://&lt;your-node-ip&gt;:26657. Port 26657 is required (default RPC port).</p>
            <h3 className="text-gray-dark text-xl mb-3">Step 2: Submit Node URL</h3>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">System checks connection and proceeds to wallet authentication if successful.</p>
            <h3 className="text-gray-dark text-xl mb-3">Step 3: Enter Mnemonic Phrase</h3>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">12- or 24-word mnemonic phrase required. Do not share your mnemonic phrase. Keep it private and secure.</p>

            <h2 className="text-gray-dark text-2xl mb-4">5. Validator Dashboard</h2>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">The dashboard provides access to:</p>
            <ul className="space-y-2 mb-8">{["Dashboard: Current validator status and performance data", "Block: Block explorer view with numbers and hashes", "Validators: Lists of active, inactive, and deactivated validators", "Manage Account: Bond funds, unbond tokens, stop validating", "My Account: Wallet balance, transaction history, validator address"].map((i, idx) => <li key={idx} className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span>{i}</span></li>)}</ul>

            <h2 className="text-gray-dark text-2xl mb-4">6. Setting Up as a Validator</h2>
            <h3 className="text-gray-dark text-xl mb-3">Validator Profile Details</h3>
            <ul className="space-y-2 mb-4">{["Name: Display name visible to delegators", "Description: Short description (uptime goals, security practices)", "Website: Optional information link", "Identity: Unique identifier or username", "Security Contact: Address for security communication"].map((i, idx) => <li key={idx} className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span>{i}</span></li>)}</ul>
            <h3 className="text-gray-dark text-xl mb-3">Bonding Tokens and Commission Settings</h3>
            <ul className="space-y-2 mb-8">{["Stake Amount: Number of BMZ to bond (remains locked while active)", "Initial Commission Rate: Percentage of rewards retained", "Maximum Commission Rate: Highest future rate allowed", "Maximum Change Rate: Allowed commission change limit per update"].map((i, idx) => <li key={idx} className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span>{i}</span></li>)}</ul>

            <h2 className="text-gray-dark text-2xl mb-4">7. Blocks Section</h2>
            <p className="text-gray-DEFAULT mb-8 leading-relaxed">Real-time visibility into block production. Monitor validator block production participation. Verify block creation and observe validator behavior.</p>

            <h2 className="text-gray-dark text-2xl mb-4">8. Block Explorer</h2>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">The block explorer provides Block Summary including latest block height, top validator (last 24 hours), and block time (last 20 blocks).</p>
            <p className="text-gray-DEFAULT leading-relaxed">Block filters allow sorting by newest or oldest, navigating through history with pagination, and tracking validator activity over time.</p>
          </div>
        </Container>
      </section>
    </>
  );
}
