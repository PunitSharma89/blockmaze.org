'use client'

import { useState } from 'react'
import Image from 'next/image'

const USE_CASES = [
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
]

export default function UseCaseTabs() {
  const [active, setActive] = useState(0)
  const current = USE_CASES[active]

  return (
    <div className="usecase-card">
      {/* Left panel — active use case detail */}
      <div className="usecase-detail">
        <div className="usecase-detail-content">
          <div className="usecase-detail-icon-wrap">
            <Image src={current.icon} alt="" width={32} height={32} />
          </div>
          <h3 className="usecase-detail-title">{current.title}</h3>
          <p className="usecase-detail-desc">{current.description}</p>
        </div>
        <span className="usecase-detail-num">
          {String(active + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Right panel — 3×2 tab grid */}
      <div className="usecase-tabs">
        <div className="usecase-tabs-row">
          {USE_CASES.slice(0, 3).map((uc, i) => (
            <button
              key={i}
              className={`usecase-tab ${active === i ? 'usecase-tab--active' : ''}`}
              onClick={() => setActive(i)}
            >
              <Image src={uc.icon} alt="" width={32} height={32} />
              <span className="usecase-tab-title">{uc.title}</span>
            </button>
          ))}
        </div>
        <div className="usecase-tabs-row">
          {USE_CASES.slice(3, 6).map((uc, i) => (
            <button
              key={i + 3}
              className={`usecase-tab ${active === i + 3 ? 'usecase-tab--active' : ''}`}
              onClick={() => setActive(i + 3)}
            >
              <Image src={uc.icon} alt="" width={32} height={32} />
              <span className="usecase-tab-title">{uc.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
