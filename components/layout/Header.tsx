import { sanityFetch } from "@/lib/sanity";
import { siteSettingsQuery } from "@/lib/queries";
import HeaderClient, { type SanityNavItem } from "./HeaderClient";

interface HeaderSettings {
  logoAlt?: string;
  navItems?: SanityNavItem[];
}

export default async function Header({ locale = "en" }: { locale?: string }) {
  const settings = await sanityFetch<HeaderSettings>(siteSettingsQuery, { locale });

  return (
    <HeaderClient
      logoAlt={settings?.logoAlt ?? "Blockmaze Foundation"}
      navItems={settings?.navItems ?? []}
    />
  );
}
