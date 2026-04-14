'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Container from '@/components/layout/Container'

interface ProblemCard {
  icon: string
  title: string
  description: string
}

interface ProblemSliderProps {
  cards: ProblemCard[]
  heading?: string
  headingHighlight?: string
}

export default function ProblemSlider({
  cards,
  heading,
  headingHighlight,
}: ProblemSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [dragging, setDragging] = useState(false)
  const dragStartX = useRef(0)
  const dragScrollLeft = useRef(0)

  const scroll = (direction: number) => {
    trackRef.current?.scrollBy({ left: direction * 364, behavior: 'smooth' })
  }

  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return
    setDragging(true)
    dragStartX.current = e.pageX - trackRef.current.offsetLeft
    dragScrollLeft.current = trackRef.current.scrollLeft
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging || !trackRef.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    const walk = (x - dragStartX.current) * 1.5
    trackRef.current.scrollLeft = dragScrollLeft.current - walk
  }

  const onMouseUp = () => setDragging(false)
  const onMouseLeave = () => setDragging(false)

  const defaultHeading = 'The Accountability Gap in Existing'
  const defaultHighlight = 'Blockchain Networks'
  const displayHeading = heading ?? defaultHeading
  const displayHighlight = headingHighlight ?? defaultHighlight

  return (
    <Container>
      <div className="problem-slider-top">
        <div className="problem-slider-heading-col">
          <h2 className="section-heading">
            {displayHeading}{' '}
            <span className="text-primary">{displayHighlight}</span>
          </h2>
        </div>
        <div className="problem-slider-arrows">
          <button className="problem-slider-arrow" onClick={() => scroll(-1)} aria-label="Previous">
            &#8592;
          </button>
          <button className="problem-slider-arrow" onClick={() => scroll(1)} aria-label="Next">
            &#8594;
          </button>
        </div>
      </div>
      <div
        ref={trackRef}
        className={`problem-slider-track${dragging ? ' dragging' : ''}`}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        {cards.map((card) => (
          <div key={card.title} className="problem-slider-card">
            <div className="problem-slider-card-img">
              <Image src={card.icon} alt={card.title} width={340} height={220} draggable={false} />
            </div>
            <div className="problem-slider-card-body">
              <h4 className="problem-slider-card-title">{card.title}</h4>
              <p className="problem-slider-card-desc">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
