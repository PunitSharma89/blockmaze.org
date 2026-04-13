"use client";

import { useState } from "react";
import Link from "next/link";
import type { SanityNavItem } from "@/components/layout/HeaderClient";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: SanityNavItem[];
}

export default function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((l) => l !== label)
        : [...prev, label]
    );
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Slide-out menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 transform transition-transform duration-300 lg:hidden overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="p-2 text-gray-dark hover:text-primary"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation items */}
        <nav className="px-4 pb-8">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-gray-100">
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleExpanded(item.label)}
                    className="flex items-center justify-between w-full py-3 text-sm font-medium text-gray-dark"
                  >
                    <span>{item.mobileLabel ?? item.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        expandedItems.includes(item.label) ? "rotate-180" : ""
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
                  {expandedItems.includes(item.label) && (
                    <div className="pb-2 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          target={child.external ? "_blank" : undefined}
                          rel={child.external ? "noopener noreferrer" : undefined}
                          onClick={onClose}
                          className="block py-2 text-sm text-gray-DEFAULT hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-3 text-sm font-medium text-gray-dark hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
