import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Analytics from "@/components/ui/Analytics";
import "./globals.css";
import "./responsive.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

const SUPPORTED_LOCALES = ["en", "ar", "es", "fr"];

export const metadata: Metadata = {
  title: {
    default:
      "Blockmaze Foundation | Layer 0 Protocol Governance & Accountability Layer",
    template: "%s | Blockmaze Foundation",
  },
  description:
    "The Blockmaze foundation maintains Layer-0 protocol governance, issuer registries, token standards, and proof enforcement for real-world asset issuance.",
  metadataBase: new URL("https://blockmaze.org"),
  openGraph: {
    siteName: "Blockmaze Foundation",
    type: "website",
    locale: "en_US",
  },
};

async function getLocaleAndMessages() {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  const locale = SUPPORTED_LOCALES.includes(cookieLocale ?? "")
    ? (cookieLocale as string)
    : "en";

  let messages = {};
  try {
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch {
    try {
      messages = (await import("../messages/en.json")).default;
    } catch {
      messages = {};
    }
  }

  return { locale, messages };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { locale, messages } = await getLocaleAndMessages();
  const isRtl = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      className={inter.variable}
    >
      <body className="font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header locale={locale} />
          <main className="max-w-1920 mx-auto pt-[71px]">{children}</main>
          <Footer locale={locale} />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
