'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

/* ── Service items positioned around the arc illustration ─────────────── */

const SERVICES = [
  {
    text: "Requires Bonded Commitments As A Condition Of Issuer Eligibility",
    icon: "/images/accountability-icon-exam.svg",
    position: "top-center" as const,
  },
  {
    text: "Restricts Governance Authority To Permissions, Template Approvals, And Enforcement Actions",
    icon: "/images/accountability-icon-btc.svg",
    position: "top-left" as const,
  },
  {
    text: "Maintains An Independent Settlement Governed Solely By Consensus Rules",
    icon: "/images/accountability-icon-card.svg",
    position: "top-right" as const,
  },
  {
    text: "Records Standing Transitions On-Chain When Obligations Are Missed",
    icon: "/images/accountability-icon-btc.svg",
    position: "bottom-left" as const,
  },
  {
    text: "Enforces Scheduled Proof Submissions Based On Asset Classification",
    icon: "/images/accountability-icon-card.svg",
    position: "bottom-right" as const,
  },
]

/* ── Component ─────────────────────────────────────────────────────────── */

export default function AccountabilityArc() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={sectionRef}
      className={`accountability-section${isVisible ? ' is-visible' : ''}`}
    >
      {/* Heading */}
      <div className="accountability-heading-wrap">
        <h2 className="section-heading">
          The Blockmaze{' '}
          <span className="text-primary">Accountability</span>
          {' '}Model
        </h2>
        <p className="section-subtext">
          Blockmaze addresses the accountability gap at its foundation by
          embedding issuer oversight directly at the protocol layer rather
          than leaving it to individual applications. It separates settlement
          from issuer responsibility, defining clear boundaries between
          governance controls and transaction finality within a compliant
          Web3 infrastructure.
        </p>
      </div>

      {/* Illustration + positioned services */}
      <div className="accountability-model-container">
        {/* Central SVG illustration */}
        <div className="accountability-model-visual">
          <svg
            width="1012"
            height="681"
            viewBox="0 0 1012 681"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="accountability-model-img"
            aria-label="Blockmaze Accountability Model"
          >
            {/* Animated arcs — outermost to innermost */}
            <path
              pathLength={1}
              className="arc-path arc-path-1"
              d="M1010.75 505.75C1010.75 226.846 784.654 0.75 505.75 0.75C226.846 0.75 0.75 226.846 0.75 505.75"
              stroke="url(#paint0_linear_71_2274)"
              strokeWidth="1.5"
            />
            <path
              pathLength={1}
              className="arc-path arc-path-2"
              d="M915.75 504.25C915.75 277.813 732.187 94.25 505.75 94.25C279.313 94.25 95.75 277.813 95.75 504.25"
              stroke="url(#paint1_linear_71_2274)"
              strokeWidth="1.5"
            />
            <path
              pathLength={1}
              className="arc-path arc-path-3"
              d="M817.75 497.75C817.75 325.437 678.063 185.75 505.75 185.75C333.437 185.75 193.75 325.437 193.75 497.75"
              stroke="url(#paint2_linear_71_2274)"
              strokeWidth="1.5"
            />
            <path
              pathLength={1}
              className="arc-path arc-path-4"
              d="M727.75 502.25C727.75 379.643 628.357 280.25 505.75 280.25C383.143 280.25 283.75 379.643 283.75 502.25"
              stroke="url(#paint3_linear_71_2274)"
              strokeWidth="1.5"
            />

            {/* Bottom trapezoid glow */}
            <path className="accountability-flash-beam" d="M389.107 720.75L333.75 479.75H670.75L604.386 720.75H389.107Z" fill="url(#paint4_linear_71_2274)"/>

            {/* Blockmaze logo mark */}
            <mask id="mask0_71_2274" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="408" y="353" width="196" height="208">
              <path d="M603.06 353.574H408.441V560.75H603.06V353.574Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_71_2274)">
              <path d="M425.281 542.64V440.592C425.281 440.289 425.125 439.444 425.281 439.18C425.706 438.457 427.605 440.583 428.111 441.024C435.269 447.258 442.451 453.466 449.645 459.661C451.072 460.89 452.547 462.183 453.276 463.922C453.885 465.373 453.909 466.993 453.927 468.567C454.038 479.44 454.149 490.313 454.26 501.186C454.305 505.483 454.566 510.299 457.726 513.211C461.528 516.716 467.439 515.949 472.159 515.958C478.654 515.973 485.149 515.991 491.644 516.006C504.403 516.036 517.163 516.069 529.922 516.099C536.558 516.114 546.747 517.205 551.578 511.724C554.931 507.921 554.625 501.921 552.223 497.456C549.821 492.991 545.746 489.71 541.776 486.556C530.342 477.467 518.908 468.375 507.474 459.286C508.053 459.748 531.187 436.508 533.394 434.376C537.706 430.217 542.013 426.052 546.316 421.881C549.929 418.378 554.643 414.495 554.097 408.86C553.713 404.884 550.394 401.682 546.672 400.236C542.948 398.788 538.849 398.758 534.852 398.749C514.056 398.692 493.26 398.632 472.468 398.575C469.202 398.566 465.883 398.563 462.746 399.472C459.609 400.377 456.62 402.335 455.237 405.292C453.615 408.762 454.503 412.99 456.548 416.231C458.59 419.473 461.639 421.929 464.629 424.325C477.083 434.295 489.539 444.263 501.992 454.233C502.649 454.761 503.375 455.445 503.27 456.278C503.192 456.893 502.679 457.346 502.202 457.742C496.148 462.749 490.094 467.76 484.039 472.768C483.47 473.239 482.858 473.731 482.123 473.818C481.167 473.934 480.285 473.347 479.502 472.789C469.733 465.808 459.948 458.815 450.82 451.016C444.28 445.426 438.031 439.366 433.308 432.175C429.374 426.187 427.368 419.968 426.345 413.538C425.164 406.108 425.302 398.392 425.302 390.434C425.296 384.122 425.29 377.809 425.29 371.494C453.474 371.695 481.661 371.896 509.843 371.443C523.394 371.224 537.041 370.852 550.49 372.844C561.924 374.535 571.939 381.681 577.868 391.69C578.452 392.677 578.995 393.69 579.493 394.725C579.742 395.241 579.979 395.765 580.204 396.293C581.721 399.834 582.638 403.625 582.971 407.46C583.136 409.346 583.148 411.235 583.031 413.125C582.507 421.785 579.766 430.316 574.617 437.345C568.665 445.468 559.387 451.489 551.569 457.697C554.04 459.577 556.514 461.454 558.985 463.334C564.242 467.331 569.537 471.362 573.924 476.294C580.476 483.659 585.13 493.303 584.726 503.396C584.516 508.683 583.307 515.328 580.752 519.862C576.539 527.341 570.59 534.085 562.898 538.082C559.294 539.956 555.399 541.275 551.386 541.92C547.332 542.571 543.206 542.577 539.101 542.58C518.893 542.58 498.682 542.604 478.474 542.613C468.254 542.616 458.032 542.619 447.813 542.622L425.278 542.634L425.281 542.64Z" fill="url(#paint5_linear_71_2274)"/>
            </g>
            <defs>
              <linearGradient id="paint0_linear_71_2274" x1="505.75" y1="0.75" x2="505.75" y2="505.75" gradientUnits="userSpaceOnUse">
                <stop offset="0.323661" stopColor="#E4E4E4"/>
                <stop offset="0.920298" stopColor="#AAAAAA" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint1_linear_71_2274" x1="505.75" y1="94.25" x2="505.75" y2="504.25" gradientUnits="userSpaceOnUse">
                <stop offset="0.323661" stopColor="#E4E4E4"/>
                <stop offset="0.920298" stopColor="#AAAAAA" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint2_linear_71_2274" x1="505.75" y1="185.75" x2="505.75" y2="497.75" gradientUnits="userSpaceOnUse">
                <stop offset="0.323661" stopColor="#E4E4E4"/>
                <stop offset="0.920298" stopColor="#AAAAAA" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint3_linear_71_2274" x1="505.75" y1="280.25" x2="505.75" y2="502.25" gradientUnits="userSpaceOnUse">
                <stop offset="0.323661" stopColor="#E4E4E4"/>
                <stop offset="0.920298" stopColor="#AAAAAA" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint4_linear_71_2274" x1="502.25" y1="479.75" x2="502.25" y2="720.75" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.17"/>
                <stop offset="1" stopColor="#FFB01E" stopOpacity="0.44"/>
              </linearGradient>
              <linearGradient id="paint5_linear_71_2274" x1="504.981" y1="371.265" x2="504.79" y2="587.22" gradientUnits="userSpaceOnUse">
                <stop offset="0.174989" stopColor="#010101"/>
                <stop offset="1" stopColor="#FFB01E"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Service items */}
        {SERVICES.map((service, i) => (
          <div
            key={i}
            className={`accountability-item accountability-item--${service.position}`}
          >
            {/* Left-side items: text first, then icon */}
            {(service.position === 'top-left' || service.position === 'bottom-left') && (
              <>
                <p className="accountability-item-text accountability-item-text--right">
                  {service.text}
                </p>
                <div className="accountability-icon-box">
                  <Image src={service.icon} alt="" width={40} height={40} />
                </div>
              </>
            )}

            {/* Center item: icon on top, text below */}
            {service.position === 'top-center' && (
              <div className="accountability-item-center">
                <div className="accountability-icon-box">
                  <Image src={service.icon} alt="" width={40} height={40} />
                </div>
                <p className="accountability-item-text accountability-item-text--center">
                  {service.text}
                </p>
              </div>
            )}

            {/* Right-side items: icon first, then text */}
            {(service.position === 'top-right' || service.position === 'bottom-right') && (
              <>
                <div className="accountability-icon-box">
                  <Image src={service.icon} alt="" width={40} height={40} />
                </div>
                <p className="accountability-item-text">
                  {service.text}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
