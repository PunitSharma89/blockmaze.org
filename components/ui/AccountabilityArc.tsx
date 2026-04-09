'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/layout/Container'

const items = [
  "Requires bonded commitments as a condition of issuer eligibility",
  "Enforces scheduled proof submissions based on asset classification",
  "Records standing transitions on-chain when obligations are missed",
  "Restricts governance authority to permissions, template approvals, and enforcement actions",
  "Maintains an independent settlement governed solely by consensus rules",
]

// Scroll progress threshold at which each item becomes visible
// (0 = start of scroll, 1 = end of scroll through the section)
const THRESHOLDS = [0.05, 0.22, 0.42, 0.62, 0.80]

// SVG arc path matching Figma curve (viewBox 0 0 1186 1041)
const ARC_PATH = "M 220,4 C 380,10 900,120 1186,1041"

export default function AccountabilityArc() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const [dot, setDot] = useState({ x: 220, y: 4 })
  const [visible, setVisible] = useState([false, false, false, false, false])

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  })

  const smooth = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001,
  })

  useMotionValueEvent(smooth, 'change', (v) => {
    // Move dot along arc path
    const path = pathRef.current
    if (!path) return
    const len = path.getTotalLength()
    const pt = path.getPointAtLength(Math.max(0, Math.min(v, 1)) * len)
    setDot({ x: pt.x, y: pt.y })

    // Reveal items as dot reaches each threshold
    setVisible(THRESHOLDS.map((t) => v >= t))
  })

  return (
    <div ref={scrollRef} className="accountability-arc-scroll">
      <div className="accountability-arc-sticky">

        {/* Heading — stays visible throughout scroll */}
        <div className="flex flex-col items-center text-center gap-4 pt-[60px] pb-[40px] shrink-0">
          <h2 className="section-heading">
            The Blockmaze{' '}
            <span className="text-primary">Accountability</span>
            {' '}Model
          </h2>
          <p className="section-subtext">
            Blockmaze addresses the accountability gap at its foundation by embedding issuer oversight directly at the protocol layer rather than leaving it to individual applications. It separates settlement from issuer responsibility, defining clear boundaries between governance controls and transaction finality within a compliant Web3 infrastructure.
          </p>
        </div>

        {/* Arc canvas */}
        <Container>
        <div className="accountability-arc-wrapper">

          {/* Background arc fill */}
          <div className="accountability-arc-bg">
            <Image src="/images/arc-bg.svg" alt="" fill className="object-contain object-left-top" />
          </div>

          {/* Arc stroke */}
          <div className="accountability-arc-stroke">
            <Image src="/images/arc-stroke.svg" alt="" fill className="object-contain object-left-top" />
          </div>

          {/* SVG overlay — hidden path + animated dot */}
          <svg
            className="accountability-arc-svg"
            viewBox="0 0 1186 1041"
            preserveAspectRatio="xMinYMin meet"
            aria-hidden="true"
          >
            {/* Hidden path used only for getPointAtLength */}
            <path ref={pathRef} d={ARC_PATH} fill="none" stroke="none" />

            {/* Outer pulse ring */}
            <circle
              cx={dot.x}
              cy={dot.y}
              r="28"
              fill="none"
              stroke="rgba(255,176,30,0.25)"
              strokeWidth="1.5"
            />
            {/* Mid glow */}
            <circle cx={dot.x} cy={dot.y} r="18" fill="rgba(255,176,30,0.15)" />
            {/* Solid orange dot */}
            <circle cx={dot.x} cy={dot.y} r="10" fill="#ffb01e" />
            {/* White inner ring */}
            <circle cx={dot.x} cy={dot.y} r="5" fill="white" />
          </svg>

          {/* Service items — appear when dot reaches them */}
          {items.map((text, i) => (
            <motion.div
              key={i}
              className={`accountability-arc-item accountability-arc-item-${i + 1}`}
              initial={{ opacity: 0, y: 14 }}
              animate={visible[i] ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Image src="/images/arc-icon.svg" alt="" width={24} height={24} />
              <p className="accountability-arc-text">{text}</p>
            </motion.div>
          ))}

        </div>
        </Container>
      </div>
    </div>
  )
}
