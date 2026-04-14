"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";

interface UseCase {
  title: string;
  description: string;
  icon: string;
}

interface UseCaseScrollProps {
  eyebrow?: string;
  heading?: string;
  headingHighlight?: string;
  subtext?: string;
  useCases?: UseCase[];
}

const DEFAULT_USE_CASES: UseCase[] = [
  {
    title: "Sovereign or Jurisdiction-Specific Asset Platforms",
    description:
      "Governments or regulated authorities can deploy sovereign domains connected to the layer-0 blockchain, maintaining local execution control while inheriting shared accountability registries.",
    icon: "/images/usecase-icon-globe.svg",
  },
  {
    title: "Institutional Asset Distribution Networks",
    description:
      "Regulated asset managers can distribute tokenized securities or structured products under defined issuer permissions, standardized templates, and transparent standing rules.",
    icon: "/images/usecase-icon-building.svg",
  },
  {
    title: "Cross-Chain Settlement With Issuer Visibility",
    description:
      "Assets issued on sovereign domains can interoperate across connected chains while preserving issuer standing checks and registry references anchored at Layer-0, strengthening the architecture of a regulated blockchain for RWAs.",
    icon: "/images/usecase-icon-chain.svg",
  },
  {
    title: "Regulated Stablecoin Issuance",
    description:
      "Licensed financial entities can issue fiat-redeemable tokens under defined proof-of-reserves schedules, with issuer standing and disclosure history recorded on-chain.",
    icon: "/images/usecase-icon-coin.svg",
  },
  {
    title: "Tokenized Real Estate and Registry-Based Assets",
    description:
      "Title-dependent assets can be issued using structured templates that require whitelist controls, registry coherence commitments, and proof-of-presence attestations aligned with how to tokenize real estate legally.",
    icon: "/images/usecase-icon-building.svg",
  },
  {
    title: "Commodity-Backed Digital Instruments",
    description:
      "Producers and custodians can tokenize gold on blockchain or issue bearer-redeemable tokens representing commodities such as energy resources, with reserve attestations tied to protocol-enforced proof cadence.",
    icon: "/images/usecase-icon-chain.svg",
  },
];

export default function UseCaseScroll({
  eyebrow,
  heading,
  headingHighlight,
  subtext,
  useCases,
}: UseCaseScrollProps) {
  const USE_CASES =
    useCases && useCases.length > 0 ? useCases : DEFAULT_USE_CASES;
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineFillRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let gsapCtx: { revert: () => void } | undefined;

    const init = async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      if (!section) return;

      gsapCtx = gsap.context(() => {
        itemRefs.current.forEach((item, i) => {
          if (!item) return;
          ScrollTrigger.create({
            trigger: item,
            start: "top 62%",
            end: "bottom 38%",
            onEnter: () => setActiveIndex(i),
            onEnterBack: () => setActiveIndex(i),
          });
        });

        if (lineFillRef.current) {
          gsap.set(lineFillRef.current, {
            scaleY: 0,
            transformOrigin: "top center",
          });
          ScrollTrigger.create({
            trigger: section,
            start: "top 60%",
            end: "bottom 40%",
            onUpdate: (self) => {
              if (lineFillRef.current) {
                gsap.to(lineFillRef.current, {
                  scaleY: self.progress,
                  duration: 0.15,
                  ease: "none",
                  overwrite: true,
                });
              }
            },
          });
        }
      }, section);
    };

    init();

    return () => {
      gsapCtx?.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="ucs-section">
      <Container className="max-responsive">
        <div className="ucs-inner">
          {/* LEFT: sticky panel */}
          <div className="ucs-left">
            <span className="section-eyebrow">{eyebrow ?? "Use Cases"}</span>
            <h2 className="section-heading">
              {heading ?? "Top Blockmaze"}{" "}
              <span className="text-primary">
                {headingHighlight ?? "Use Cases"}
              </span>
            </h2>
            <p className="ucs-subtext">
              {subtext ??
                "Blockmaze supports asset issuance models where verified authorization, structured disclosure, and protocol-level accountability are required."}
            </p>
            <div className="ucs-counter">
              <span className="ucs-counter-current">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="ucs-counter-sep">/</span>
              <span className="ucs-counter-total">
                {String(USE_CASES.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* RIGHT: scroll timeline */}
          <div className="ucs-right">
            <div className="ucs-timeline">
              <div className="ucs-line">
                <div ref={lineFillRef} className="ucs-line-fill" />
              </div>
              {USE_CASES.map((uc, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  className={`ucs-item${activeIndex === i ? " ucs-item--active" : ""}`}
                >
                  <div className="ucs-marker">
                    <div className="ucs-marker-outer" />
                    <div className="ucs-marker-inner" />
                  </div>
                  <div className="ucs-item-body">
                    <div className="ucs-item-icon-wrap">
                      <Image src={uc.icon} alt="" width={22} height={22} />
                    </div>
                    <h3 className="ucs-item-title">{uc.title}</h3>
                    <p className="ucs-item-desc">{uc.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
