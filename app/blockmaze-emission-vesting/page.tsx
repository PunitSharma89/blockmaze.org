import { Metadata } from "next";
import TechnicalPageClient from "@/components/ui/TechnicalPageClient";

export const metadata: Metadata = {
  title: "Emission & Vesting | Blockmaze",
  description: "BMZ token emission, vesting, and unlock schedule covering vesting architecture, allocation wallets, access control, deployment, execution flow, admin panel, beneficiary flow, and multi-signature approval.",
};

export default function EmissionVestingPage() {
  return (
    <TechnicalPageClient slug="blockmaze-emission-vesting" fallbackTitle="Emission & Vesting" />
  );
}
