'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Container from '@/components/layout/Container'

const DEFAULT_ITEMS = [
  { title: 'Settlement Does Not Verify Issuer Authority', description: 'Transaction finality confirms that a transfer occurred. It does not confirm whether the issuer has legal authorization or maintains required backing.', icon: '/images/usecase-icon-coin.svg' },
  { title: 'Real-World Assets Carry External Obligations', description: 'Assets tied to reserves, registries, or regulated frameworks depend on off-chain commitments. These commitments must be defined and monitored through structured protocol rules.', icon: '/images/usecase-icon-building.svg' },
  { title: 'Application-Level Controls Create Fragmentation', description: 'When each platform defines its own compliance logic, standards vary, and oversight becomes inconsistent. This weakens credibility across networks.', icon: '/images/usecase-icon-chain.svg' },
  { title: 'Shared Registries Provide Consistency', description: 'Embedding issuer eligibility and standing records at Layer-0 ensures that accountability signals apply uniformly across connected chains.', icon: '/images/usecase-icon-globe.svg' },
  { title: 'Enforcement Requires Defined Boundaries', description: 'Accountability mechanisms must operate within clear authority limits. Governance can adjust permissions and record standing changes without interfering with settlement.', icon: '/images/usecase-icon-building.svg' },
  { title: 'Separation Preserves Neutral Finality', description: 'By separating issuer responsibility from consensus, transaction history remains irreversible while accountability remains structured and visible at the protocol level.', icon: '/images/usecase-icon-chain.svg' },
]

interface AccountabilityScrollProps {
  items?: { title: string; description: string; icon: string }[];
}

export default function AccountabilityScroll({ items: itemsProp }: AccountabilityScrollProps = {}) {
  const ITEMS = itemsProp && itemsProp.length > 0 ? itemsProp : DEFAULT_ITEMS;
  const sectionRef  = useRef<HTMLElement>(null)
  const itemRefs    = useRef<(HTMLDivElement | null)[]>([])
  const lineFillRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    let gsapCtx: { revert: () => void } | null = null
    let unmounted = false

    const init = async () => {
      const { default: gsap } = await import('gsap')
      const { ScrollTrigger }  = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      // If the component unmounted while we were awaiting imports, abort
      if (unmounted) return

      const section = sectionRef.current
      if (!section) return

      gsapCtx = gsap.context(() => {
        itemRefs.current.forEach((item, i) => {
          if (!item) return
          ScrollTrigger.create({
            trigger: item,
            start: 'top 62%',
            end: 'bottom 38%',
            onEnter:     () => setActiveIndex(i),
            onEnterBack: () => setActiveIndex(i),
          })
        })

        if (lineFillRef.current) {
          gsap.set(lineFillRef.current, { scaleY: 0, transformOrigin: 'top center' })
          ScrollTrigger.create({
            trigger: section,
            start: 'top 60%',
            end: 'bottom 40%',
            onUpdate: (self) => {
              if (lineFillRef.current) {
                gsap.to(lineFillRef.current, {
                  scaleY: self.progress,
                  duration: 0.15,
                  ease: 'none',
                  overwrite: true,
                })
              }
            },
          })
        }
      }, section)
    }

    init()
    return () => {
      unmounted = true
      gsapCtx?.revert()
    }
  }, [])

  return (
    <section ref={sectionRef} className="ucs-section">
      <Container>
        <div className="ucs-inner">

          {/* LEFT: sticky panel */}
          <div className="ucs-left">
            <h2 className="section-heading">
              Why Accountability Must Be Embedded at the{' '}
              <span className="text-primary">Protocol</span> Layer
            </h2>
            <div className="ucs-counter">
              <span className="ucs-counter-current">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <span className="ucs-counter-sep">/</span>
              <span className="ucs-counter-total">
                {String(ITEMS.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* RIGHT: scroll timeline */}
          <div className="ucs-right">
            <div className="ucs-timeline">

              <div className="ucs-line">
                <div ref={lineFillRef} className="ucs-line-fill" />
              </div>

              {ITEMS.map((item, i) => (
                <div
                  key={i}
                  ref={(el) => { itemRefs.current[i] = el }}
                  className={`ucs-item${activeIndex === i ? ' ucs-item--active' : ''}`}
                >
                  <div className="ucs-marker">
                    <div className="ucs-marker-outer" />
                    <div className="ucs-marker-inner" />
                  </div>
                  <div className="ucs-item-body">
                    <div className="ucs-item-icon-wrap">
                      <Image src={item.icon} alt="" width={22} height={22} />
                    </div>
                    <h3 className="ucs-item-title">{item.title}</h3>
                    <p className="ucs-item-desc">{item.description}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
