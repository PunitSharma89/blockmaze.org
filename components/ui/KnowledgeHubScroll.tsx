'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Container from '@/components/layout/Container'

interface KnowledgeHubItem {
  _id: string
  title: string
  excerpt?: string
  bulletPoints?: string[]
  link?: string
}

interface KnowledgeHubScrollProps {
  eyebrow?: string
  heading?: string
  items: KnowledgeHubItem[]
}

export default function KnowledgeHubScroll({
  eyebrow,
  heading,
  items = [],
}: KnowledgeHubScrollProps) {
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
            start: 'top 50%',
            end: 'bottom 50%',
            onEnter:     () => setActiveIndex(i),
            onEnterBack: () => setActiveIndex(i),
          })
        })

        if (lineFillRef.current) {
          gsap.set(lineFillRef.current, { scaleY: 0, transformOrigin: 'top center' })

          const firstItem = itemRefs.current[0]
          const lastItem  = itemRefs.current[itemRefs.current.length - 1]

          if (firstItem && lastItem) {
            ScrollTrigger.create({
              trigger: firstItem,
              start: 'top 50%',
              endTrigger: lastItem,
              end: 'bottom 50%',
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
                  key={item._id}
                  ref={(el) => { itemRefs.current[i] = el }}
                  className={`ucs-item${activeIndex === i ? ' ucs-item--active' : ''}`}
                >
                  <div className="ucs-marker">
                    <div className="ucs-marker-outer" />
                    <div className="ucs-marker-inner" />
                  </div>
                  <div className="ucs-item-body">
                    <h3 className="ucs-item-title">{item.title}</h3>
                    {item.excerpt && (
                      <p className="ucs-item-desc">{item.excerpt}</p>
                    )}
                    {(item.bulletPoints ?? []).length > 0 && (
                      <ul className="kh-bullet-list">
                        {(item.bulletPoints ?? []).map((point, j) => (
                          <li key={j} className="kh-bullet-item">
                            <span className="kh-bullet-dot" />
                            <span className="kh-bullet-text">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.link && (
                      <Link href={item.link} className="hero-figma-btn-primary kh-item-btn">
                        Explore more
                      </Link>
                    )}
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
