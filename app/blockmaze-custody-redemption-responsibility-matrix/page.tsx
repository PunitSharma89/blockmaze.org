import { Metadata } from "next";
import TechnicalPageClient from "@/components/ui/TechnicalPageClient";

export const metadata: Metadata = {
  title: "Custody & Redemption Responsibility Matrix | Blockmaze",
  description: "Defines wallet custody models, investor responsibilities, redemption validation, and settlement workflows within the Blockmaze ecosystem.",
};

export default function CustodyRedemptionPage() {
  return (
    <TechnicalPageClient slug="blockmaze-custody-redemption-responsibility-matrix" fallbackTitle="Custody & Redemption Responsibility Matrix" />
  );
}
