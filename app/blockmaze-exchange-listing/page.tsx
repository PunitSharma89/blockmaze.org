import { Metadata } from "next";
import TechnicalPageClient from "@/components/ui/TechnicalPageClient";

export const metadata: Metadata = {
  title: "Exchange Listing Strategy Pack | Blockmaze",
  description: "Tiered exchange framework, listing playbook, commercial models, liquidity strategy, and readiness requirements for the Blockmaze token listing process.",
};

export default function ExchangeListingPage() {
  return (
    <TechnicalPageClient slug="blockmaze-exchange-listing" fallbackTitle="Exchange Listing Strategy Pack" />
  );
}
