import { Metadata } from "next";
import TechnicalPageClient from "@/components/ui/TechnicalPageClient";

export const metadata: Metadata = {
  title: "RWA Issuer Framework | Blockmaze",
  description: "Blockmaze RWA Issuer Framework defining how regulated institutions can tokenize real-world assets, covering issuer eligibility, onboarding, governance approval, token management, compliance, and enforcement.",
};

export default function RwaIssuerFrameworkPage() {
  return (
    <TechnicalPageClient slug="blockmaze-rwa-issuer-framework" fallbackTitle="RWA Issuer Framework" />
  );
}
