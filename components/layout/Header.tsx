"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navigation/Navbar";
import MobileMenu from "@/components/navigation/MobileMenu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 header-white">
      <div className="mx-auto w-[80%] max-w-[1440px] flex items-center justify-between h-[71px]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/white-logo.svg"
            alt="Blockmaze Foundation"
            width={160}
            height={62}
            priority
            className="h-auto header-logo-dark"
          />
        </Link>

        {/* Desktop Navigation */}
        <Navbar />

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-[#0b0b0b] hover:text-[#ffb01e]"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
