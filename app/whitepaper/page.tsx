import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Whitepaper",
  description: "The Blockmaze whitepaper defines the core problems, governance model, technical architecture, and use cases that shape the Blockmaze ecosystem.",
};

export default function WhitepaperPage() {
  return (
    <>
      <section className="section-padding bg-section-dark text-white">
        <Container>
          <Breadcrumb items={[{ label: "Whitepaper" }]} />
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-white mb-4">Blockmaze Whitepaper</h1>
              <h3 className="text-white mb-4">The Foundational Design Document for the Blockmaze Network</h3>
              <p className="text-gray-light text-lg leading-relaxed mb-6">The Blockmaze whitepaper defines the core problems, governance model, technical architecture, and use cases that shape the Blockmaze ecosystem. It serves as the authoritative reference for understanding the network&apos;s purpose, design decisions, and long-term vision.</p>
              <ul className="space-y-2 mb-8">
                {["The structural limitations of existing blockchain networks", "The governance-controlled architecture of Blockmaze", "Protocol-level compliance and permissioned issuance", "Core use cases for sovereigns and regulated enterprises", "Long-term network design principles"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-light"><span className="text-primary mt-1">&#8226;</span><span>{item}</span></li>
                ))}
              </ul>
              <p className="text-gray-light mb-6">Read the full whitepaper to understand how Blockmaze is built as a governed economic infrastructure.</p>
              <Button href="/whitepaper-doc" variant="primary">Click here</Button>
            </div>
            <div className="lg:w-1/2">
              <Image src="/images/whitepaper-img.png" alt="Blockmaze Whitepaper" width={600} height={500} priority />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
