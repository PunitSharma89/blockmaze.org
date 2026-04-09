import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Whitepaper Document",
  description: "Full Blockmaze Whitepaper document view.",
};

export default function WhitepaperDocPage() {
  return (
    <>
      <Container><Breadcrumb items={[{ label: "Whitepaper", href: "/whitepaper" }, { label: "Document" }]} /></Container>
      <section className="section-padding">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-gray-dark mb-6">Blockmaze Whitepaper</h1>
            <p className="text-gray-DEFAULT mb-8">The full whitepaper document is available for download and review.</p>
            <div className="bg-gray-50 rounded-lg p-12 border border-gray-200">
              <p className="text-gray-DEFAULT">Document viewer will be available soon. Please contact us for a copy of the whitepaper.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
