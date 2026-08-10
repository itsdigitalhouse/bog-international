import type { Metadata } from "next";
import { Cinzel, Manrope } from "next/font/google";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import "./globals.css";

// Configure Cinzel font for Headings (700)
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-cinzel",
});

// Configure Manrope font for Body / Paragraphs (300)
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Bhatia Ocean Gold International | Mining, Minerals & Commodities Trading",
  description:
    "Bhatia Ocean Gold International (BOG) is a premier commodities trading and export company connecting African resources with global markets. Specializing in Gold, Copper Cathodes, and international B2B minerals supply.",
  keywords: [
    "Gold Trading Company",
    "Gold Export Company",
    "African Gold Supplier",
    "Copper Cathodes Supplier",
    "Copper Export Africa",
    "African Minerals Trading",
    "International Commodity Trading",
    "Bhatia Ocean Gold International",
  ],
  authors: [{ name: "Bhatia Ocean Gold International" }],
  openGraph: {
    title: "Bhatia Ocean Gold International | Global Commodities Partner",
    description:
      "Connecting African Gold, Copper Cathodes, and Minerals with International Markets.",
    type: "website",
    locale: "en_US",
    siteName: "Bhatia Ocean Gold International",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${cinzel.variable} ${manrope.variable}`}
    >
      <body className="antialiased bg-[#F3F3F3] text-[#153B16] selection:bg-[#E5CC64] selection:text-[#153B16] font-sans">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}