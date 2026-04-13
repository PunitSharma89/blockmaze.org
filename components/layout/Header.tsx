import { sanityFetch } from "@/lib/sanity";
import { siteSettingsQuery } from "@/lib/queries";
import HeaderClient, { type SanityNavItem } from "./HeaderClient";

interface HeaderSettings {
  logoAlt?: string;
  navItems?: SanityNavItem[];
}

export default async function Header() {
  const settings = await sanityFetch<HeaderSettings>(siteSettingsQuery);

  return (
    <HeaderClient
      logoAlt={settings?.logoAlt ?? "Blockmaze Foundation"}
      navItems={settings?.navItems ?? []}
    />
  );
}
