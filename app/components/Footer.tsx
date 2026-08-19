"use client";

import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

// ==========================================
// BRAND SVG ICONS
// ==========================================

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="1em" height="1em">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.57 6.33 6.33 0 0 0 9.33 22a6.33 6.33 0 0 0 6.33-6.33V9.05a8.16 8.16 0 0 0 4.88 1.6V7.2a4.85 4.85 0 0 1-.95-.51z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

// ==========================================
// LINKS CONFIG
// ==========================================

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Mining & Operations", href: "/mining" },
  { label: "Products & Commodities", href: "/products" },
  { label: "Quality & Assay", href: "/quality-assay" },
  { label: "Compliance", href: "/compliance" },
  { label: "For Buyers", href: "/for-buyers" },
  { label: "Investors & Relations", href: "/investors-relations" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

const socialLinks = [
  { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
  { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
  { icon: TikTokIcon, href: "https://tiktok.com", label: "TikTok" },
  { icon: YoutubeIcon, href: "https://youtube.com", label: "YouTube" },
  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#153B16] text-[#F3F3F3]">

      {/* TOP GOLD ACCENT */}
      <div className="h-[2px] w-full bg-[#E5CC64]" />

      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-14 xl:px-20">

        {/* MAIN FOOTER */}
        <div className="flex flex-col items-center py-16 text-center sm:py-20">

          {/* EDITORIAL MARKER */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#E5CC64]/70" />
            <span className="font-mono text-[7px] uppercase tracking-[0.32em] text-[#E5CC64] sm:text-[8px]">
              International Commodities
            </span>
            <span className="h-px w-9 bg-[#E5CC64]/70" />
          </div>

          {/* BRAND */}
          <Link href="/" className="group inline-block">
            <span className="block font-[family-name:var(--font-cinzel)] text-[28px] font-bold tracking-[0.14em] text-[#E5CC64] transition-opacity duration-300 group-hover:opacity-75 sm:text-[34px] md:text-[40px]">
              BHATIA OCEAN GOLD
            </span>
            <span className="mt-1.5 block text-[8px] uppercase tracking-[0.46em] text-white/40 sm:text-[9.5px]">
              International Supply & Trade
            </span>
          </Link>

          {/* POSITIONING */}
          <p className="mt-6 max-w-[600px] font-[family-name:var(--font-cinzel)] text-[14px] font-medium leading-6 text-white/60 sm:text-[16px]">
            African resources.
            <span className="mx-2 text-[#E5CC64]">
              Global markets.
            </span>
            Responsible trade.
          </p>

          {/* ADDRESS & CONTACT INFO */}
          <div className="mt-7 flex flex-col items-center justify-center gap-3.5 text-xs text-white/70 sm:flex-row sm:gap-7">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#E5CC64]" />
              <span>Kampala, Uganda / Dubai, UAE</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={14} className="text-[#E5CC64]" />
              <a href="mailto:info@bhatiaoceangold.com" className="transition hover:text-[#E5CC64]">
                info@bhatiaoceangold.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={14} className="text-[#E5CC64]" />
              <a href="tel:+256000000000" className="transition hover:text-[#E5CC64]">
                +256 000 000 000
              </a>
            </div>
          </div>

          {/* SOCIAL MEDIA ICONS */}
          <div className="mt-7 flex items-center justify-center gap-3.5">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-8.5 w-8.5 items-center justify-center border border-[#E5CC64]/30 text-[#E5CC64] transition-all duration-300 hover:border-[#E5CC64] hover:bg-[#E5CC64] hover:text-[#153B16]"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              );
            })}
          </div>

          {/* NAVIGATION */}
          <div className="mt-8 w-full max-w-6xl border-y border-white/[0.08] py-5">
            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 sm:gap-x-8">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative text-[7.5px] font-semibold uppercase tracking-[0.17em] text-white/40 transition-colors duration-300 hover:text-[#E5CC64] sm:text-[8.5px]"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#E5CC64] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>
          </div>

          {/* COMMERCIAL CTA */}
          <Link
            href="#offer"
            className="group mt-8 inline-flex items-center gap-5 border border-[#E5CC64]/40 px-6 py-3 transition-all duration-400 hover:border-[#E5CC64] hover:bg-[#E5CC64]"
          >
            <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#E5CC64] transition-colors duration-300 group-hover:text-[#153B16]">
              Request A Commercial Offer
            </span>
            <span className="text-xs text-[#E5CC64] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#153B16]">
              ↗
            </span>
          </Link>

          {/* MICRO STATEMENT */}
          <p className="mt-5 text-[7px] uppercase tracking-[0.18em] text-white/20">
            Responsible sourcing · Verified quality · International trade
          </p>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/[0.08] py-5">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-white/20 sm:text-[8px]">
              © {new Date().getFullYear()} Bhatia Ocean Gold International
            </p>

            <div className="flex items-center gap-4.5">
              {legalLinks.map((link, index) => (
                <div key={link.href} className="flex items-center gap-4.5">
                  <Link
                    href={link.href}
                    className="text-[7px] uppercase tracking-[0.16em] text-white/20 transition-colors duration-300 hover:text-[#E5CC64] sm:text-[8px]"
                  >
                    {link.label}
                  </Link>

                  {index !== legalLinks.length - 1 && (
                    <span className="h-[2px] w-[2px] rounded-full bg-[#E5CC64]/40" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM GOLD LINE */}
      <div className="h-px w-full bg-[#E5CC64] opacity-70" />

    </footer>
  );
}