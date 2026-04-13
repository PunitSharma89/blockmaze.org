"use client";

import { useState } from "react";
import Image from "next/image";

const visionBullets = [
  "On-chain verification of issuer identity and authorization",
  "Scheduled disclosure requirements tied to asset type",
  "Public visibility into issuer standing",
  "Separation of governance controls from settlement finality",
  "Permanent record of issuer status changes",
];

const missionBullets = [
  "Structured review and admission of corporate issuers",
  "Oversight of approved token template versions",
  "Monitoring and automatic handling of missed proof deadlines",
  "Management of issuer permission states",
  "Governance of protocol parameters related to accountability",
];

export default function AboutAccordion() {
  const [active, setActive] = useState<"vision" | "mission">("vision");

  return (
    <div className="about-acc-inner">
      <div className="about-acc-list">

        {/* Vision card */}
        <div
          className={`about-acc-card about-acc-card--vision${active === "vision" ? " about-acc-card--active" : ""}`}
          onClick={() => setActive("vision")}
        >
          <h3 className={`about-acc-title${active !== "vision" ? " about-acc-title--sm" : ""}`}>
            Vision
          </h3>
          <div className="about-acc-body">
            <p className="about-card-desc">
              To support a blockchain foundation where real-world assets can be issued under verified authorization, structured disclosure, and transparent oversight, while transaction settlement remains neutral and final.
            </p>
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

        {/* Mission card */}
        <div
          className={`about-acc-card about-acc-card--mission${active === "mission" ? " about-acc-card--active" : ""}`}
          onClick={() => setActive("mission")}
        >
          <h3 className={`about-acc-title${active !== "mission" ? " about-acc-title--sm" : ""}`}>
            Mission
          </h3>
          <div className="about-acc-body">
            <p className="about-card-desc">
              To maintain protocol-level governance structures, issuer verification standards, token templates, and proof enforcement mechanisms that provide a consistent accountability framework for real-world asset tokenization for institutions across the Blockmaze ecosystem.
            </p>
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

      {/* Vertical orange progress divider */}
      <div className="about-acc-divider">
        <div className={`about-acc-divider-bar${active === "mission" ? " about-acc-divider-bar--bottom" : ""}`} />
      </div>
    </div>
  );
}
