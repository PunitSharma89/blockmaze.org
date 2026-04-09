import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Legal Documentation | Blockmaze",
  description:
    "Access the foundational documents that define governance processes, issuer standards, protocol parameters, and accountability boundaries across the Blockmaze network.",
};

const documents = [
  "Lorem ipsum Governance Policies, Regulatory",
  "Lorem ipsum Governance Policies, Regulatory",
  "Lorem ipsum Governance Policies, Regulatory",
  "Lorem ipsum Governance Policies, Regulatory",
  "Lorem ipsum Governance Policies, Regulatory",
  "Lorem ipsum Governance Policies, Regulatory",
  "Lorem ipsum Governance Policies, Regulatory",
  "Lorem ipsum Governance Policies, Regulatory",
  "Lorem ipsum Governance Policies, Regulatory",
  "Lorem ipsum Governance Policies, Regulatory",
  "Lorem ipsum Governance Policies, Regulatory",
  "Lorem ipsum Governance Policies, Regulatory",
];

export default function LegalDocumentationPage() {
  return (
    <>
      <Container>
        <Breadcrumb items={[{ label: "Legal Documentation" }]} />
      </Container>

      {/* Hero Section */}
      <section className="py-8 md:py-12">
        <Container>
          <div className="bg-[#fafafa] rounded-[50px] md:rounded-[50px] border border-[#d8d8d8] px-4 md:px-8 pt-12 md:pt-16 pb-0 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #fffdf4 0%, rgba(255,253,244,0) 100%)",
            }}
          >
            <div className="inline-block border border-black rounded-full px-8 py-2.5 mb-4">
              <h4 className="text-black text-base leading-[30px] m-0">Legal Documentation</h4>
            </div>
            <h1 className="text-[#0f0f0f] text-3xl md:text-5xl lg:text-[60px] font-medium leading-tight md:leading-[72px] max-w-[1080px] mx-auto mb-0">
              Governance Policies, Regulatory Disclosures, and Official Records
            </h1>
            <p className="text-[#4b4b4b] text-base md:text-lg leading-7 max-w-[900px] mx-auto mt-4">
              Access the foundational documents that define governance processes, issuer standards, protocol parameters, and accountability boundaries across the Blockmaze network. These records establish authority limits, procedural rules, and accountability structures maintained by the foundation.
            </p>
            <div className="mt-8">
              <Image
                src="/images/legal-documentation-hero.png"
                alt="Legal Documentation"
                width={800}
                height={400}
                className="mx-auto max-w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Document Listing */}
      <section className="pb-16 md:pb-20">
        <Container>
          <div className="flex flex-wrap justify-between items-center gap-12">
            {documents.map((doc, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 w-full md:w-[calc(50%-25px)]"
              >
                <div className="flex-shrink-0 w-[70px] h-[70px]">
                  <Image
                    src="/images/legal-doc-icon.png"
                    alt="Document icon"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold leading-7 mb-1">
                    {doc}
                  </h3>
                  <a
                    href="#"
                    className="text-primary text-sm hover:underline"
                  >
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
