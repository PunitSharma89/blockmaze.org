"use client";

import { useState } from "react";
import Image from "next/image";

interface AccordionCard {
  title?: string;
  bodyText?: string;
  bullets?: string[];
}

interface AboutAccordionProps {
  vision?: AccordionCard;
  mission?: AccordionCard;
}

export default function AboutAccordion({ vision, mission }: AboutAccordionProps) {
  const [active, setActive] = useState<"vision" | "mission">("vision");

  const visionTitle = vision?.title ?? "Vision";
  const visionBody =
    vision?.bodyText ??
    "To support a blockchain foundation where real-world assets can be issued under verified authorization, structured disclosure, and transparent oversight, while transaction settlement remains neutral and final.";
  const visionBullets = vision?.bullets?.length
    ? vision.bullets
    : [
        "On-chain verification of issuer identity and authorization",
        "Scheduled disclosure requirements tied to asset type",
        "Public visibility into issuer standing",
        "Separation of governance controls from settlement finality",
        "Permanent record of issuer status changes",
      ];

  const missionTitle = mission?.title ?? "Mission";
  const missionBody =
    mission?.bodyText ??
    "To maintain protocol-level governance structures, issuer verification standards, token templates, and proof enforcement mechanisms that provide a consistent accountability framework for real-world asset tokenization for institutions across the Blockmaze ecosystem.";
  const missionBullets = mission?.bullets?.length
    ? mission.bullets
    : [
        "Structured review and admission of corporate issuers",
        "Oversight of approved token template versions",
        "Monitoring and automatic handling of missed proof deadlines",
        "Management of issuer permission states",
        "Governance of protocol parameters related to accountability",
      ];

  return (
    <div className="about-acc-inner">
      <div className="about-acc-list">
        <div
          className={`about-acc-card about-acc-card--vision${active === "vision" ? " about-acc-card--active" : ""}`}
          onClick={() => setActive("vision")}
        >
          <h3 className={`about-acc-title${active !== "vision" ? " about-acc-title--sm" : ""}`}>
            {visionTitle}
          </h3>
          <div className="about-acc-body">
            <p className="about-card-desc">{visionBody}</p>
            <div className="about-card-bullets">
              {visionBullets.map((item, i) => (
                <div key={i} className="about-card-bullet">
                  <Image src="/images/about-arrow.svg" alt="" width={24} height={24} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`about-acc-card about-acc-card--mission${active === "mission" ? " about-acc-card--active" : ""}`}
          onClick={() => setActive("mission")}
        >
          <h3 className={`about-acc-title${active !== "mission" ? " about-acc-title--sm" : ""}`}>
            {missionTitle}
          </h3>
          <div className="about-acc-body">
            <p className="about-card-desc">{missionBody}</p>
            <div className="about-card-bullets">
              {missionBullets.map((item, i) => (
                <div key={i} className="about-card-bullet">
                  <Image src="/images/about-arrow.svg" alt="" width={24} height={24} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="about-acc-divider">
        <div className={`about-acc-divider-bar${active === "mission" ? " about-acc-divider-bar--bottom" : ""}`} />
      </div>
    </div>
  );
}
