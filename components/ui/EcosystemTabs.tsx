'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useScroll, useMotionValueEvent } from 'framer-motion'

interface EcosystemItem {
  title: string
  href: string
  imagePath: string
  description: string
  bullets: string[]
}

interface EcosystemTabsProps {
  heading?: string
  headingHighlight?: string
  subtext?: string
  items?: EcosystemItem[]
}

const DEFAULT_ECOSYSTEM: EcosystemItem[] = [
  {
    title: 'Governance Council',
    href: '/governance',
    imagePath: '/images/council.png',
    description: 'The Governance Council oversees issuer admission, standing reviews, enforcement actions, and protocol parameters related to accountability. Governance decisions are recorded on-chain within defined authority boundaries and do not interfere with settlement history.',
    bullets: ['Structured review and admission of corporate issuers', 'Oversight of approved token template versions', 'Monitoring and automatic handling of missed proof deadlines'],
  },
  {
    title: 'RFP',
    href: '/rfp',
    imagePath: '/images/rfp.png',
    description: 'The RFP function manages ecosystem proposals, research initiatives, and structured funding programs aligned with network standards and accountability requirements.',
    bullets: ['Accepts proposals for tooling, standards, and infrastructure development', 'Facilitates grant evaluation and milestone tracking', 'Records approved initiatives under governance oversight'],
  },
  {
    title: 'DAO',
    href: '/dao',
    imagePath: '/images/Digital-economy.png',
    description: 'The DAO enables broader participation in governance through proposal submission, voting, and treasury oversight using governance tokens within defined voting rules.',
    bullets: ['Enables proposal submission subject to deposit thresholds', 'Conducts structured voting under defined quorum rules', 'Oversees treasury allocation tied to approved proposals'],
  },
  {
    title: 'Validator',
    href: '/validator',
    imagePath: '/images/vali.png',
    description: 'The validator interface supports onboarding and coordination for entities running a proof of stake validator on the layer 0 blockchain.',
    bullets: ['Facilitates validator registration and staking setup', 'Provides access to network policy and performance standards', 'Tracks validator uptime and slashing conditions'],
  },
  {
    title: 'Delegator',
    href: '/delegator',
    imagePath: '/images/del.png',
    description: 'The delegator interface allows BMZ holders to delegate stake to validators, contributing to network security without operating infrastructure.',
    bullets: ['Enables users to delegate crypto staking to verified validators', 'Tracks validator node rewards and commission rates', 'Reflects proportional exposure to validator performance'],
  },
  {
    title: 'Swap',
    href: '/swap',
    imagePath: '/images/swap-1.png',
    description: 'The swap interface supports protocol-native asset exchange within the Blockmaze ecosystem, settling transactions under Layer-0 consensus rules.',
    bullets: ['Enables on-chain asset pair swaps', 'Supports liquidity participation for approved tokens', 'Settles trades under network finality rules'],
  },
]

/* ── Desktop scroll-driven version (unchanged) ─────────────────────────── */
function EcosystemDesktop({ ECOSYSTEM }: { ECOSYSTEM: EcosystemItem[] }) {
  const THRESHOLDS = ECOSYSTEM.map((_, i) => i / ECOSYSTEM.length)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const current = ECOSYSTEM[active]

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    for (let i = THRESHOLDS.length - 1; i >= 0; i--) {
      if (v >= THRESHOLDS[i]) {
        setActive(i)
        break
      }
    }
  })

  const barTop = `${(active / ECOSYSTEM.length) * 100}%`

  return (
    <div ref={scrollRef} className="eco-scroll">
      <div className="eco-sticky">
        <div className="eco-columns">
          <div className="eco-left">
            <div className="eco-track">
              <div className="eco-track-indicator" style={{ top: barTop }} />
            </div>
            <div className="eco-nav-list">
              {ECOSYSTEM.map((item, i) => (
                <div key={i} className={`eco-nav-item ${active === i ? 'eco-nav-item--active' : ''}`}>
                  <h4 className="eco-nav-title">{item.title}</h4>
                  {active === i && <p className="eco-nav-desc">{item.description}</p>}
                </div>
              ))}
            </div>
          </div>
          <div className="eco-right-card">
            <div className="eco-img-container">
              <Image src={current.imagePath} alt={current.title} width={614} height={344} className="eco-img" />
            </div>
            <div className="eco-card-content">
              <h3 className="eco-card-title">{current.title}</h3>
              <div className="eco-card-bullets">
                {current.bullets.map((bullet, i) => (
                  <div key={i} className="eco-card-bullet">
                    <Image src="/images/eco-arrow.svg" alt="" width={24} height={24} className="eco-card-bullet-icon" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
              <Link href={current.href} className="hero-figma-btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Mobile accordion version ───────────────────────────────────────────── */
function EcosystemMobile({ ECOSYSTEM }: { ECOSYSTEM: EcosystemItem[] }) {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <div className="eco-accordion">
      {ECOSYSTEM.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i} className={`eco-accordion-item${isOpen ? ' eco-accordion-item--open' : ''}`}>
            <button
              className="eco-accordion-trigger"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span className="eco-accordion-title">{item.title}</span>
              <span className="eco-accordion-icon">{isOpen ? '−' : '+'}</span>
            </button>

            {isOpen && (
              <div className="eco-accordion-body">
                <div className="eco-img-container">
                  <Image src={item.imagePath} alt={item.title} width={614} height={344} className="eco-img" />
                </div>
                <div className="eco-card-content">
                  <p className="eco-nav-desc">{item.description}</p>
                  <div className="eco-card-bullets">
                    {item.bullets.map((bullet, j) => (
                      <div key={j} className="eco-card-bullet">
                        <Image src="/images/eco-arrow.svg" alt="" width={24} height={24} className="eco-card-bullet-icon" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={item.href} className="hero-figma-btn-primary">Learn More</Link>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

/* ── Main export ────────────────────────────────────────────────────────── */
export default function EcosystemTabs({ heading, headingHighlight, subtext, items }: EcosystemTabsProps) {
  const ECOSYSTEM = (items && items.length > 0) ? items : DEFAULT_ECOSYSTEM
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 767)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <div className="eco-section">
      <div className="eco-heading-wrap">
        <h2 className="section-heading">
          {heading ?? 'Governance'}&amp;{' '}
          <span className="text-primary">{headingHighlight ?? 'Ecosystem'}</span>
        </h2>
        <p className="section-subtext">
          {subtext ?? 'Blockmaze operates through defined governance channels and structured access layers that support issuer oversight, validator coordination, ecosystem funding, and network participation. Each component serves a distinct function within the Layer-0 framework.'}
        </p>
      </div>

      {isMobile
        ? <EcosystemMobile ECOSYSTEM={ECOSYSTEM} />
        : <EcosystemDesktop ECOSYSTEM={ECOSYSTEM} />
      }
    </div>
  )
}
