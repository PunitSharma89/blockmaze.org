import { Metadata } from "next";
import TechnicalPageClient from "@/components/ui/TechnicalPageClient";

export const metadata: Metadata = {
  title: "Blockmaze Protocol",
  description: "Technical specification of the Blockmaze protocol including node setup, system requirements, validator operations, and tokenomics.",
};

export default function BlockmazeProtocolPage() {
  return (
    <TechnicalPageClient slug="blockmaze-protocol" fallbackTitle="Blockmaze Protocol" />
  );
}
