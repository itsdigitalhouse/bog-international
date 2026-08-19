import type { Metadata, Viewport } from "next";
import { Cinzel, Manrope } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-cinzel",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#153B16",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bhatiaoceangold.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bhatia Ocean Gold International | Mining, Minerals & Commodities Trading",
    template: "%s | Bhatia Ocean Gold International",
  },
  description:
    "Bhatia Ocean Gold International (BOG) is a premier international mining, minerals, and commodities export company connecting verified African resources with global B2B markets.",
  keywords: [
    "Gold Trading Company",
    "Gold Export Company Uganda",
    "African Gold Supplier",
    "Copper Cathodes Supplier",
    "Copper Export Africa",
    "African Minerals Trading",
    "International Commodity Trading",
    "Bhatia Ocean Gold International",
    "BOG Minerals",
  ],
  authors: [{ name: "Bhatia Ocean Gold International" }],
  creator: "Bhatia Ocean Gold International",
  publisher: "Bhatia Ocean Gold International",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Bhatia Ocean Gold International | Global Commodities Partner",
    description:
      "Connecting African Gold, Copper Cathodes, and Verified Minerals with International B2B Markets.",
    url: siteUrl,
    siteName: "Bhatia Ocean Gold International",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bhatia Ocean Gold International",
    alternateName: "BOG International",
    url: siteUrl,
    logo: `${siteUrl}/favicon.ico`,
    description:
      "International mining, minerals, commodities trading, and export coordination company connecting African resources with global markets.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Uganda",
    },
    knowsAbout: [
      "Gold Sourcing and Export",
      "Copper Cathodes B2B Trading",
      "Mineral Quality Assurance & Assay",
      "AML/KYC Export Compliance",
    ],
  };

  return (
    <html
      lang="en"
      className={`scroll-smooth ${cinzel.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body 
        suppressHydrationWarning
        className="antialiased bg-[#F3F3F3] text-[#153B16] selection:bg-[#E5CC64] selection:text-[#153B16] font-sans overflow-x-hidden flex flex-col min-h-screen"
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}