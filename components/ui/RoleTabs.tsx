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

  return (
    <div className="usecase-card">
      {/* Left panel — active role detail */}
      <div className="usecase-detail">
        <div className="usecase-detail-content">
          <div className="usecase-detail-icon-wrap">
            <Image src={current.icon} alt="" width={32} height={32} />
          </div>
          <h3 className="usecase-detail-title">{current.title}</h3>
          <p className="usecase-detail-desc">{current.description}</p>
        </div>
        <span className="usecase-detail-num">
          {String(active + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Right panel — 3×2 tab grid */}
      <div className="usecase-tabs">
        <div className="usecase-tabs-row">
          {roles.slice(0, 3).map((role, i) => (
            <button
              key={i}
              className={`usecase-tab ${active === i ? 'usecase-tab--active' : ''}`}
              onClick={() => setActive(i)}
            >
              <Image src={role.icon} alt="" width={32} height={32} />
              <span className="usecase-tab-title">{role.title}</span>
            </button>
          ))}
        </div>
        <div className="usecase-tabs-row">
          {roles.slice(3, 6).map((role, i) => (
            <button
              key={i + 3}
              className={`usecase-tab ${active === i + 3 ? 'usecase-tab--active' : ''}`}
              onClick={() => setActive(i + 3)}
            >
              <Image src={role.icon} alt="" width={32} height={32} />
              <span className="usecase-tab-title">{role.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
