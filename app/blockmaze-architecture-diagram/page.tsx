import { Metadata } from "next";
import TechnicalPageClient from "@/components/ui/TechnicalPageClient";

export const metadata: Metadata = {
  title: "Architecture Diagram | Blockmaze",
  description: "Blockmaze Network architecture diagrams covering network design, state machine, CometBFT consensus, ABCI, EVM compatibility, accounts, gas, transaction receipts, and interconnected ecosystem.",
};

export default function ArchitectureDiagramPage() {
  return (
    <TechnicalPageClient slug="blockmaze-architecture-diagram" fallbackTitle="Architecture Diagram" />
  );
}
