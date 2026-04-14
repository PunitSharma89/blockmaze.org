"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SanityNavItem } from "@/components/layout/HeaderClient";
import NavDropdown from "./NavDropdown";

interface NavbarProps {
  navItems: SanityNavItem[];
}

export default function Navbar({ navItems }: NavbarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  /** True when the current route matches this item or any of its children */
  const isActive = (item: SanityNavItem): boolean => {
    if (item.children) {
      return item.children.some(
        (child) =>
          pathname === child.href ||
          pathname.startsWith(child.href + "/")
      );
    }
    if (!item.href || item.href === "#") return false;
    return pathname === item.href || pathname.startsWith(item.href + "/");
  };

  return (
    /**
     * self-stretch  → nav fills the full 71 px header height
     * items-stretch → item wrapper divs also stretch to that height
     * gap-[20px]    → matches Figma spacing between nav items
     */
    <nav className="hidden lg:flex self-stretch items-stretch gap-[20px]">
      {navItems.map((item) => {
        const active = isActive(item);
        // .nav-link base styles + conditional .nav-link--active
        // These CSS classes live in globals.css and have higher specificity
        // than the generic "nav a { color:#0b0b0b }" rule.
        const cls = `nav-link${active ? " nav-link--active" : ""}`;

        return (
          <div
            key={item.label}
            className="relative flex items-stretch"
            onMouseEnter={() =>
              item.children ? setOpenDropdown(item.label) : undefined
            }
            onMouseLeave={() => setOpenDropdown(null)}
          >
            {item.children ? (
              <button
                className={cls}
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === item.label ? null : item.label
                  )
                }
              >
                {item.label}
                <svg
                  className={`w-[14px] h-[14px] flex-shrink-0 transition-transform ${
                    openDropdown === item.label ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            ) : (
              <Link href={item.href} className={cls}>
                {item.label}
              </Link>
            )}

            {item.children && (
              <NavDropdown
                items={item.children}
                isOpen={openDropdown === item.label}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}
