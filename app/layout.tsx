import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Analytics from "@/components/ui/Analytics";
import "./globals.css";
import "./responsive.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main className="max-w-1920 mx-auto pt-[71px]">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
