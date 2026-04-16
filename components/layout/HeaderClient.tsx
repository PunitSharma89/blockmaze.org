"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navigation/Navbar";
import MobileMenu from "@/components/navigation/MobileMenu";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export interface NavChild {
  label: string;
  href: string;
  external?: boolean;
}

export interface SanityNavItem {
  label: string;
  href: string;
  mobileLabel?: string;
  external?: boolean;
  children?: NavChild[];
}

interface HeaderClientProps {
  logoAlt: string;
  navItems: SanityNavItem[];
}

export default function HeaderClient({ logoAlt, navItems }: HeaderClientProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 header-white">
      <div className="mx-auto px-4 xl:px-0 xl:w-[80%] max-w-[1596px] flex items-center justify-between h-[71px]">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/images/Logo.png"
            alt={logoAlt}
            width={160}
            height={62}
            priority
            className="h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <Navbar navItems={navItems} />

        {/* Language Switcher + Mobile Hamburger */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            className="lg:hidden p-2 hover:text-primary"
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
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
      />
    </header>
  );
}
