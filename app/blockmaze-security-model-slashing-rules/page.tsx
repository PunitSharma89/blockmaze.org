import { Metadata } from "next";
import TechnicalPageClient from "@/components/ui/TechnicalPageClient";

export const metadata: Metadata = {
  title: "Security Model & Slashing Rules | Blockmaze",
  description: "BlockMaze Blockchain security model covering Proof-of-Stake consensus, validator and delegator roles, economic security, slashing framework, jailing mechanisms, and governance of security parameters.",
};

export default function SecurityModelPage() {
  return (
    <TechnicalPageClient slug="blockmaze-security-model-slashing-rules" fallbackTitle="Security Model & Slashing Rules" />
  );
}
