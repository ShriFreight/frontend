import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://shrifreightadvisory.com";

export const viewport: Viewport = {
  themeColor: "#0f5045",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Shri Freight Advisory | International Logistics & Customs Consulting",
    template: "%s | Shri Freight Advisory",
  },
  description:
    "Shri Freight Advisory (OPC) Private Limited is a Kolkata-based logistics advisory firm simplifying global trade through customs compliance, duty optimization, courier & cargo solutions, and technology.",
  keywords: [
    "Shri Freight Advisory",
    "freight forwarding India",
    "customs advisory Kolkata",
    "international courier consulting",
    "logistics advisory",
    "import export consultant",
    "HS classification",
    "duty optimization",
    "cargo clearance India",
    "global trade compliance",
  ],
  authors: [{ name: "Shri Freight Advisory (OPC) Private Limited" }],
  creator: "Shri Freight Advisory (OPC) Private Limited",
  publisher: "Shri Freight Advisory (OPC) Private Limited",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Shri Freight Advisory",
    title:
      "Shri Freight Advisory | International Logistics & Customs Consulting",
    description:
      "Revolutionizing global trade through compliance, connectivity & technology — end-to-end advisory for SMEs, exporters and D2C brands.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Shri Freight Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Freight Advisory",
    description:
      "Customs advisory, duty optimization & global logistics network for SMEs and D2C exporters.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", rel: "icon" },
      { url: "/icons/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/icons/favicon.svg",
        color: "#0f5045",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "Shri Freight",
    statusBarStyle: "default",
  },
  other: {
    "msapplication-TileColor": "#0f5045",
    "msapplication-TileImage": "/icons/icon-192.png",
  },
  category: "Logistics",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Shri Freight Advisory (OPC) Private Limited",
  alternateName: "Shri Freight Advisory",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Kolkata-based logistics advisory firm delivering end-to-end solutions for courier, cargo, and international trade operations.",
  email: "info.shrifreightadvisory@gmail.com",
  telephone: "+91-8481982892",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit No 328, P S Abacus, Action Area II E, Hatiara",
    addressLocality: "New Town, Kolkata",
    addressRegion: "West Bengal",
    postalCode: "700157",
    addressCountry: "IN",
  },
  areaServed: ["IN", "US", "EU", "AE", "AP"],
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand-800 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
