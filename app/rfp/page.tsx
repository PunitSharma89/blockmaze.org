import { Metadata } from "next";
import TechnicalPageClient from "@/components/ui/TechnicalPageClient";

export const metadata: Metadata = {
  title: "RFP | Blockmaze",
  description: "Official framework for ecosystem funding, validator infrastructure, governance tooling, and RWA tokenization initiatives under a structured review process.",
};

export default function RfpPage() {
  return (
    <TechnicalPageClient slug="rfp" fallbackTitle="Request for Proposal" />
  );
}
