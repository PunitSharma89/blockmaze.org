import { Metadata } from "next";
import TechnicalPageClient from "@/components/ui/TechnicalPageClient";

export const metadata: Metadata = {
  title: "Whitepaper | Blockmaze",
  description: "The Blockmaze whitepaper defines the core problems, governance model, technical architecture, and use cases that shape the Blockmaze ecosystem.",
};

export default function WhitepaperPage() {
  return (
    <TechnicalPageClient slug="whitepaper" fallbackTitle="Blockmaze Whitepaper" />
  );
}
