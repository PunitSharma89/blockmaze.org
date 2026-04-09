import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Yellow Paper",
  description: "Blockmaze Yellow Paper - Technical specification and formal methods documentation.",
};

export default function YellowPaperPage() {
  return (
    <>
      <Container><Breadcrumb items={[{ label: "Yellow Paper" }]} /></Container>
      <section className="section-padding">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-gray-dark mb-6">Blockmaze Yellow Paper</h1>
            <p className="text-gray-DEFAULT mb-8">The Blockmaze Yellow Paper provides detailed technical specifications and formal methods documentation for the protocol.</p>
            <div className="bg-gray-50 rounded-lg p-12 border border-gray-200">
              <p className="text-gray-DEFAULT">Document viewer will be available soon. Please contact us for a copy of the yellow paper.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
