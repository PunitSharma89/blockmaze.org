'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
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
  buttonText?: string
  buttonHref?: string
}

export default function GovernanceStructureScroll({
  eyebrow,
  heading,
  subHeading,
  items = [],
  buttonText,
  buttonHref,
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

            const lineRect = lineEl.getBoundingClientRect()
            const fillReachedY = lineRect.top + lineEl.offsetHeight * progress

            let newActive = 0
            itemRefs.current.forEach((item, i) => {
              if (!item) return
              const markerEl = item.querySelector('.ucs-marker') as HTMLElement | null
              if (!markerEl) return
              const markerRect = markerEl.getBoundingClientRect()
              const markerCenterY = markerRect.top + markerRect.height / 2
              if (fillReachedY >= markerCenterY) newActive = i
            })

            setActiveIndex(newActive)
          },
        })
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
            {buttonText && (
              <Link href={buttonHref ?? '#'} className="hero-figma-btn-primary">
                {buttonText}
              </Link>
            )}
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
                  className={`ucs-item${activeIndex === i ? ' ucs-item--active' : i < activeIndex ? ' ucs-item--done' : ''}`}
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
