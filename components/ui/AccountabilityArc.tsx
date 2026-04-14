'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

type ServicePosition = 'top-center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

interface ServiceItem {
  text: string
  icon: string
  position: ServicePosition
}

interface AccountabilityArcProps {
  heading?: string
  headingHighlight?: string
  subtext?: string
  services?: ServiceItem[]
}

const DEFAULT_SERVICES: ServiceItem[] = [
  { text: 'Requires Bonded Commitments As A Condition Of Issuer Eligibility', icon: '/images/accountability-icon-exam.svg', position: 'top-center' },
  { text: 'Restricts Governance Authority To Permissions, Template Approvals, And Enforcement Actions', icon: '/images/accountability-icon-btc.svg', position: 'top-left' },
  { text: 'Maintains An Independent Settlement Governed Solely By Consensus Rules', icon: '/images/accountability-icon-card.svg', position: 'top-right' },
  { text: 'Records Standing Transitions On-Chain When Obligations Are Missed', icon: '/images/accountability-icon-btc.svg', position: 'bottom-left' },
  { text: 'Enforces Scheduled Proof Submissions Based On Asset Classification', icon: '/images/accountability-icon-card.svg', position: 'bottom-right' },
]

export default function AccountabilityArc({ heading, headingHighlight, subtext, services }: AccountabilityArcProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const activeServices = (services && services.length > 0) ? services : DEFAULT_SERVICES

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
          {heading ?? 'The Blockmaze'}{' '}
          <span className="text-primary">{headingHighlight ?? 'Accountability'}</span>
          {' '}Model
        </h2>
        <p className="section-subtext">
          {subtext ?? 'Blockmaze addresses the accountability gap at its foundation by embedding issuer oversight directly at the protocol layer rather than leaving it to individual applications. It separates settlement from issuer responsibility, defining clear boundaries between governance controls and transaction finality within a compliant Web3 infrastructure.'}
        </p>
      </div>

      {/* Illustration + positioned services */}
      <div className="accountability-model-container">
        {/* Central SVG illustration */}
        <div className="accountability-model-visual">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/svg-accountablity.svg"
            alt="Blockmaze Accountability Model"
            className="accountability-model-img"
          />

          {/* Animated arc overlay */}
          <svg
            viewBox="0 0 1440 681"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="accountability-model-arcs"
            aria-hidden="true"
          >
            <path pathLength={1} className="arc-path arc-path-1" d="M1225 505.75C1225 226.846 998.904 0.75 720 0.75C441.096 0.75 215 226.846 215 505.75" stroke="url(#arc-g0)" strokeWidth="1.5" />
            <path pathLength={1} className="arc-path arc-path-2" d="M1130 504.25C1130 277.813 946.437 94.25 720 94.25C493.563 94.25 310 277.813 310 504.25" stroke="url(#arc-g1)" strokeWidth="1.5" />
            <path pathLength={1} className="arc-path arc-path-3" d="M1032 497.75C1032 325.437 892.313 185.75 720 185.75C547.687 185.75 408 325.437 408 497.75" stroke="url(#arc-g2)" strokeWidth="1.5" />
            <path pathLength={1} className="arc-path arc-path-4" d="M942 502.25C942 379.643 842.607 280.25 720 280.25C597.393 280.25 498 379.643 498 502.25" stroke="url(#arc-g3)" strokeWidth="1.5" />
            <defs>
              <linearGradient id="arc-g0" x1="720" y1="0.75" x2="720" y2="505.75" gradientUnits="userSpaceOnUse">
                <stop offset="0.323661" stopColor="#FFE3B1"/><stop offset="0.920298" stopColor="#CDE0FF" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="arc-g1" x1="720" y1="94.25" x2="720" y2="504.25" gradientUnits="userSpaceOnUse">
                <stop offset="0.323661" stopColor="#FFE3B1"/><stop offset="0.920298" stopColor="#CDE0FF" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="arc-g2" x1="720" y1="185.75" x2="720" y2="497.75" gradientUnits="userSpaceOnUse">
                <stop offset="0.323661" stopColor="#FFE3B1"/><stop offset="0.920298" stopColor="#CDE0FF" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="arc-g3" x1="720" y1="280.25" x2="720" y2="502.25" gradientUnits="userSpaceOnUse">
                <stop offset="0.323661" stopColor="#FFE3B1"/><stop offset="0.920298" stopColor="#CDE0FF" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Service items */}
        {activeServices.map((service, i) => (
          <div key={i} className={`accountability-item accountability-item--${service.position}`}>
            {(service.position === 'top-left' || service.position === 'bottom-left') && (
              <>
                <p className="accountability-item-text accountability-item-text--right">{service.text}</p>
                <div className="accountability-icon-box"><Image src={service.icon} alt="" width={40} height={40} /></div>
              </>
            )}
            {service.position === 'top-center' && (
              <div className="accountability-item-center">
                <div className="accountability-icon-box"><Image src={service.icon} alt="" width={40} height={40} /></div>
                <p className="accountability-item-text accountability-item-text--center">{service.text}</p>
              </div>
            )}
            {(service.position === 'top-right' || service.position === 'bottom-right') && (
              <>
                <div className="accountability-icon-box"><Image src={service.icon} alt="" width={40} height={40} /></div>
                <p className="accountability-item-text">{service.text}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
