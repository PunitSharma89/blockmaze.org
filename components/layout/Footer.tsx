import Link from "next/link";
import Image from "next/image";
import { sanityFetch } from "@/lib/sanity";
import { siteSettingsQuery } from "@/lib/queries";

interface SiteSettings {
  footerDescription?: string;
  footerEmail?: string;
  footerCompanyHeading?: string;
  footerCompanyLinks?: { label: string; href: string }[];
  footerQuickLinksHeading?: string;
  footerQuickLinks?: { label: string; href: string }[];
  footerCopyrightLeft?: string;
  footerCopyrightRight?: string;
}

export default async function Footer({ locale = "en" }: { locale?: string }) {
  const settings = await sanityFetch<SiteSettings>(siteSettingsQuery, { locale });

  const companyLinks = settings?.footerCompanyLinks ?? [];
  const quickLinks = settings?.footerQuickLinks ?? [];

  return (
    <footer className="footer">
      {/* Decorative bubble */}
      <div className="footer-bubble-wrap">
        <Image
          src="/images/footer-bubble-1.png"
          alt=""
          width={1024}
          height={514}
          className="footer-bubble-img"
          aria-hidden="true"
        />
      </div>

      {/* Main content */}
      <div className="footer-inner">
        <div className="footer-top">
          {/* Left — logo + description + email */}
          <div className="footer-brand">
            <Link href="/">
              <Image
                src="/images/Logo.png"
                alt="Blockmaze Foundation"
                width={722}
                height={85}
                className="footer-logo"
              />
            </Link>
            <p className="footer-desc">
              {settings?.footerDescription}
            </p>
            <a href={`mailto:${settings?.footerEmail}`} className="footer-email">
              <Image
                src="/images/footer-mail.svg"
                alt="Email"
                width={24}
                height={24}
              />
              <span>{settings?.footerEmail}</span>
            </a>
          </div>

          {/* Right — link columns */}
          <div className="footer-links">
            <div className="footer-link-col">
              <h4 className="footer-link-heading">{settings?.footerCompanyHeading}</h4>
              <ul className="footer-link-list">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-link-col">
              <h4 className="footer-link-heading">{settings?.footerQuickLinksHeading}</h4>
              <ul className="footer-link-list">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>{settings?.footerCopyrightLeft}</span>
          <span>{settings?.footerCopyrightRight}</span>
        </div>
      </div>
    </footer>
  );
}
