import { Metadata } from "next";
import TechnicalPageClient from "@/components/ui/TechnicalPageClient";

export const metadata: Metadata = {
  title: "Delegator Handbook | Blockmaze",
  description: "How to use the Blockmaze Delegator Application to delegate BMZ tokens and participate in network security.",
};

export default function DelegatorHandbookPage() {
  return (
    <TechnicalPageClient slug="blockmaze-delegator-handbook" fallbackTitle="Blockmaze Delegator Handbook" />
  );
}
