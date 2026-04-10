import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import TechnicalPageClient from "@/components/ui/TechnicalPageClient";

export const metadata: Metadata = {
  title: "Validator Handbook",
  description:
    "Step-by-step guide for operating a validator on the Blockmaze network.",
};

export default function ValidatorHandbookPage() {
  return (
    <>
      {/* <Container>
        <Breadcrumb items={[{ label: "Validator Handbook" }]} />
      </Container> */}
      <TechnicalPageClient
        slug="blockmaze-validator-handbook"
        fallbackTitle="Blockmaze Validator Handbook"
      />
    </>
  );
}
