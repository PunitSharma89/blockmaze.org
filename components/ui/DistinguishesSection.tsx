'use client'

import Image from 'next/image'
import Container from '@/components/layout/Container'

interface Card {
  icon: string
  title: string
  description: string
}

export default function DistinguishesSection({ cards }: { cards: Card[] }) {
  // Split cards into pairs for the 3-row × 2-col grid
  const rows = [
    [cards[0], cards[1]],
    [cards[2], cards[3]],
    [cards[4], cards[5]],
  ]

  return (
    <section className="ds-section">
      <Container>
        <div className="ds-box">

          {/* Background radial glow */}
          <div className="ds-bg-glow" aria-hidden="true" />

          <div className="ds-layout">

            {/* LEFT: pill + heading + desc + coin */}
            <div className="ds-left">
              <div className="ds-left-text">
                <span className="ds-pill">Primary USPs</span>
                <h2 className="ds-heading">What Distinguishes Blockmaze</h2>
                <p className="ds-subtext">
                  Blockmaze embeds issuer accountability at the protocol root
                  rather than relying on application-level controls. Its
                  architecture separates settlement from oversight, defines
                  structured issuer admission, and applies standardized token
                  behavior across connected chains.
                </p>
              </div>
              <div className="ds-coin-wrap">
                <Image
                  src="/images/coin-12.png"
                  alt="Blockmaze coin"
                  width={248}
                  height={252}
                  className="ds-coin-img"
                />
              </div>
            </div>

            {/* RIGHT: 3×2 feature grid */}
            <div className="ds-right">
              {rows.map((row, ri) => (
                <div key={ri} className="ds-row">
                  {row.map((card) => (
                    <div key={card.title} className="ds-feature">
                      <div className="ds-feature-top">
                        <div className="ds-icon-wrap">
                          <Image
                            src={card.icon}
                            alt={card.title}
                            width={44}
                            height={44}
                          />
                        </div>
                        <h4 className="ds-feature-title">{card.title}</h4>
                      </div>
                      <p className="ds-feature-desc">{card.description}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}
