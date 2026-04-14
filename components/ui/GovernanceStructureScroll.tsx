'use client'

import { useEffect, useRef, useState } from 'react'
import Container from '@/components/layout/Container'

interface StructureItem {
  title: string
  description: string
}

interface GovernanceStructureScrollProps {
  eyebrow?: string
  heading?: string
  subHeading?: string
  items?: StructureItem[]
}

export default function GovernanceStructureScroll({
  eyebrow,
  heading,
  subHeading,
  items = [],
}: GovernanceStructureScrollProps) {
  const sectionRef  = useRef<HTMLElement>(null)
  const itemRefs    = useRef<(HTMLDivElement | null)[]>([])
  const lineFillRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    let gsapCtx: { revert: () => void } | null = null

    const init = async () => {
      const { default: gsap } = await import('gsap')
      const { ScrollTrigger }  = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

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
    return () => { gsapCtx?.revert() }
  }, [])

  if (!items.length) return null

  return (
    <section ref={sectionRef} className="ucs-section">
      <Container>
        <div className="ucs-inner">

          {/* LEFT: sticky panel */}
          <div className="ucs-left">
            {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
            <h2 className="section-heading">{heading}</h2>
            {subHeading && <p className="ucs-subtext">{subHeading}</p>}
            <div className="ucs-counter">
              <span className="ucs-counter-current">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <span className="ucs-counter-sep">/</span>
              <span className="ucs-counter-total">
                {String(items.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* RIGHT: scroll timeline */}
          <div className="ucs-right">
            <div className="ucs-timeline">
              <div className="ucs-line">
                <div ref={lineFillRef} className="ucs-line-fill" />
              </div>
              {items.map((item, i) => (
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
