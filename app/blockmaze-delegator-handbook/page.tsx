import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Delegator Handbook",
  description: "How to use the Blockmaze Delegator Application to delegate BMZ tokens and participate in network security.",
};

export default function DelegatorHandbookPage() {
  return (
    <>
      <Container><Breadcrumb items={[{ label: "Delegator Handbook" }]} /></Container>
      <section className="section-padding">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-gray-dark mb-8">Blockmaze Delegator Handbook</h1>

            <h2 className="text-gray-dark text-2xl mb-4">1. Introduction</h2>
            <p className="text-gray-DEFAULT mb-4 leading-relaxed">The Blockmaze Delegator Application enables users to participate in the blockchain by delegating BMZ tokens and supporting validator selection.</p>
            <p className="text-gray-DEFAULT mb-2">Role of Delegators:</p>
            <ul className="space-y-2 mb-8">{["Delegate BMZ tokens to trusted validators", "Help select network validators", "Earn staking rewards", "Contribute to network security and stability"].map((i, idx) => <li key={idx} className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span>{i}</span></li>)}</ul>

            <h2 className="text-gray-dark text-2xl mb-4">2. Application Login</h2>
            <ul className="space-y-2 mb-8">{["Access the Blockmaze Delegator Application", "Select mnemonic login option", "Enter mnemonic phrase securely", "Your mnemonic phrase must be kept private and secure at all times"].map((i, idx) => <li key={idx} className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span>{i}</span></li>)}</ul>

            <h2 className="text-gray-dark text-2xl mb-4">3. Dashboard Overview</h2>
            <ul className="space-y-2 mb-4">{["View BMZ token balance and account status", "Track staking rewards in real-time", "Delegate, redelegate, or unbond stakes", "Review validator rankings and performance"].map((i, idx) => <li key={idx} className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span>{i}</span></li>)}</ul>
            <p className="text-gray-DEFAULT mb-2">Key Metrics Displayed:</p>
            <ul className="space-y-2 mb-4">{["Market Cap", "Blockmaze Price", "Inflation Rate", "APR (Annual Percentage Rate)", "Total Supply"].map((i, idx) => <li key={idx} className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span>{i}</span></li>)}</ul>
            <p className="text-gray-DEFAULT mb-2">Minimum Requirements:</p>
            <ul className="space-y-2 mb-8">{["Supported blockchain-compatible wallet connection", "Minimum 50 BMZ tokens for delegation", "Additional BMZ for transaction gas fees"].map((i, idx) => <li key={idx} className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span>{i}</span></li>)}</ul>

            <h2 className="text-gray-dark text-2xl mb-4">4. Blocks Section</h2>
            <ul className="space-y-2 mb-8">{["View real-time block production on Blockmaze blockchain", "See which validator produced each block", "Monitor block numbers, hashes, and production time", "Navigate to Block Summary or Block Details pages"].map((i, idx) => <li key={idx} className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span>{i}</span></li>)}</ul>

            <h2 className="text-gray-dark text-2xl mb-4">5. Adjusting Stakes</h2>
            <h3 className="text-gray-dark text-xl mb-3">Bonding Additional Tokens</h3>
            <ul className="space-y-2 mb-4">{["Locate validator in table", "Click \"Bond More\" button", "Enter amount in designated field", "Confirm transaction and approve gas fees"].map((i, idx) => <li key={idx} className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span>{i}</span></li>)}</ul>
            <h3 className="text-gray-dark text-xl mb-3">Unbonding Tokens</h3>
            <ul className="space-y-2 mb-4">{["Select validator from table", "Click \"Unbond\" button", "Enter unbond amount", "Note: Tokens do not earn rewards and remain locked until release"].map((i, idx) => <li key={idx} className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span>{i}</span></li>)}</ul>
            <h3 className="text-gray-dark text-xl mb-3">Redelegating Tokens</h3>
            <ul className="space-y-2 mb-8">{["Click \"Redelegate Funds\" next to validator", "Select target validator from dropdown", "Review commission rates and performance metrics", "Transfer occurs instantly without reward interruption"].map((i, idx) => <li key={idx} className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span>{i}</span></li>)}</ul>

            <h2 className="text-gray-dark text-2xl mb-4">6. Validators Screen</h2>
            <ul className="space-y-2 mb-4">{["Search validators by name, address, or block hash", "Filter by status: All, Active, Inactive, Deactivating", "Analyze metrics: Name, Address, Status, Total Stake, Self Stake, Commission, Delegators Count"].map((i, idx) => <li key={idx} className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span>{i}</span></li>)}</ul>
            <p className="text-gray-DEFAULT mb-2">Selection Guidance:</p>
            <ul className="space-y-2 mb-8">{["Prefer active validators", "Look for high self-stakes", "Choose lower commission rates", "Review performance history"].map((i, idx) => <li key={idx} className="flex items-start gap-2 text-gray-DEFAULT"><span className="text-primary mt-1">&#8226;</span><span>{i}</span></li>)}</ul>
          </div>
        </Container>
      </section>
    </>
  );
}
