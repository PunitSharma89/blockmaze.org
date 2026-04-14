'use client'

import { useState } from 'react'
import Image from 'next/image'

interface RoleItem {
  icon: string
  title: string
  description: string
}

export default function RoleTabs({ roles }: { roles: RoleItem[] }) {
  const [active, setActive] = useState(0)
  const current = roles[active]
  const leftRoles  = roles.slice(0, 3)
  const rightRoles = roles.slice(3, 6)

  return (
    <section className="role-tabs-section">
      <div className="role-tabs-card">

        {/* Ambient grid overlay */}
        <div className="role-tabs-grid" />
        {/* Radial amber glow from top center */}
        <div className="role-tabs-glow" />

        {/* Heading */}
        <div className="role-tabs-heading-wrap">
          <h2 className="role-tabs-heading">
            The Role of the{' '}
            <span className="text-primary">Blockmaze Foundation</span>
          </h2>
        </div>

        {/* 3-column layout */}
        <div className="role-tabs-layout">

          {/* Left column — roles 0–2 */}
          <div className="role-tabs-col">
            {leftRoles.map((role, i) => (
              <button
                key={i}
                className={`role-tab-btn${active === i ? ' role-tab-btn--active' : ''}`}
                onClick={() => setActive(i)}
              >
                {role.title}
              </button>
            ))}
          </div>

          {/* Center card — shows active role */}
          <div className="role-tabs-center">
            <div className="role-tabs-center-body">
              <h3 className="role-tabs-center-title">{current.title}</h3>
              <p className="role-tabs-center-desc">{current.description}</p>
            </div>
            <div className="role-tabs-center-img-wrap">
              <Image
                key={active}
                src={current.icon}
                alt={current.title}
                width={474}
                height={280}
                className="role-tabs-center-img"
              />
            </div>
          </div>

          {/* Right column — roles 3–5 */}
          <div className="role-tabs-col">
            {rightRoles.map((role, i) => (
              <button
                key={i + 3}
                className={`role-tab-btn${active === i + 3 ? ' role-tab-btn--active' : ''}`}
                onClick={() => setActive(i + 3)}
              >
                {role.title}
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
