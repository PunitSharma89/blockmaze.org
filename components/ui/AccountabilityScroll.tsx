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
    let gsapCtx: { revert: () => void } | undefined
    let unmounted = false

    const init = async () => {
      const { default: gsap } = await import('gsap')
      const { ScrollTrigger }  = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (unmounted) return

      const section = sectionRef.current
      if (!section) return

      gsapCtx = gsap.context(() => {
        const lineEl = lineFillRef.current?.parentElement as HTMLElement | null
        if (!lineEl || !lineFillRef.current) return

        gsap.set(lineFillRef.current, { scaleY: 0, transformOrigin: 'top center' })

        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          onUpdate: (self) => {
            const progress = self.progress

            gsap.to(lineFillRef.current, {
              scaleY: progress,
              duration: 0.1,
              ease: 'none',
              overwrite: true,
            })

            const lineRect   = lineEl.getBoundingClientRect()
            const lineHeight = lineEl.offsetHeight
            const fillReachedY = lineRect.top + lineHeight * progress

            let newActive = 0
            itemRefs.current.forEach((item, i) => {
              if (!item) return
              const markerEl = item.querySelector('.ucs-marker') as HTMLElement | null
              if (!markerEl) return
              const markerRect    = markerEl.getBoundingClientRect()
              const markerCenterY = markerRect.top + markerRect.height / 2
              if (fillReachedY >= markerCenterY) newActive = i
            })

            setActiveIndex(newActive)
          },
        })
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
      <Container className="max-responsive">
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
                  className={`ucs-item${
                    activeIndex === i
                      ? ' ucs-item--active'
                      : i < activeIndex
                      ? ' ucs-item--done'
                      : ''
                  }`}
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
