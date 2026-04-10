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
  return (
    <div className="accountability-section">
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
          <Image
            src="/images/model-sv.svg"
            alt="Blockmaze Accountability Model"
            width={1012}
            height={681}
            className="accountability-model-img"
            priority
          />
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
