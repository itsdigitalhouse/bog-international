"use client";

import Link from "next/link";

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

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#153B16] text-[#F3F3F3]">

      {/* TOP GOLD ACCENT */}
      <div className="h-[2px] w-full bg-[#E5CC64]" />

      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-14 xl:px-20">

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div className="flex flex-col items-center py-16 text-center sm:py-18 lg:py-20">

          {/* EDITORIAL MARKER */}

          <div className="mb-7 flex items-center gap-3">

            <span className="h-px w-9 bg-[#E5CC64]/70" />

            <span className="font-mono text-[7px] uppercase tracking-[0.32em] text-[#E5CC64] sm:text-[8px]">
              International Commodities
            </span>

            <span className="h-px w-9 bg-[#E5CC64]/70" />

          </div>


          {/* BRAND */}

          <Link
            href="/"
            className="group inline-block"
          >

            <span className="block font-[family-name:var(--font-cinzel)] text-[24px] font-semibold tracking-[0.12em] text-[#E5CC64] transition-opacity duration-300 group-hover:opacity-75 sm:text-[29px]">
              BHATIA OCEAN GOLD
            </span>

            <span className="mt-2 block text-[7px] uppercase tracking-[0.46em] text-white/30 sm:text-[8px]">
              International Supply & Trade
            </span>

          </Link>


          {/* POSITIONING */}

          <p className="mt-7 max-w-[600px] font-[family-name:var(--font-cinzel)] text-[15px] font-medium leading-7 text-white/60 sm:text-[17px] sm:leading-8">

            African resources.

            <span className="mx-2 text-[#E5CC64]">
              Global markets.
            </span>

            Responsible trade.

          </p>


          {/* =================================================
              FULL SITE NAVIGATION
          ================================================== */}

          <div className="mt-10 w-full max-w-6xl border-y border-white/[0.08] py-5">

            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-8 lg:gap-x-9">

              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative text-[7px] font-semibold uppercase tracking-[0.17em] text-white/40 transition-colors duration-300 hover:text-[#E5CC64] sm:text-[8px]"
                >

                  {link.label}

                  <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#E5CC64] transition-all duration-300 group-hover:w-full" />

                </Link>
              ))}

            </nav>

          </div>


          {/* =================================================
              COMMERCIAL CTA
          ================================================== */}

          <Link
            href="#offer"
            className="group mt-10 inline-flex items-center gap-6 border border-[#E5CC64]/40 px-7 py-3.5 transition-all duration-400 hover:border-[#E5CC64] hover:bg-[#E5CC64]"
          >

            <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#E5CC64] transition-colors duration-300 group-hover:text-[#153B16]">
              Request A Commercial Offer
            </span>

            <span className="text-sm text-[#E5CC64] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#153B16]">
              ↗
            </span>

          </Link>


          {/* MICRO STATEMENT */}

          <p className="mt-7 text-[7px] uppercase tracking-[0.18em] text-white/20">
            Responsible sourcing · Verified quality · International trade
          </p>

        </div>


        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div className="border-t border-white/[0.08] py-5">

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

            <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-white/20 sm:text-[8px]">
              © {new Date().getFullYear()} Bhatia Ocean Gold International
            </p>


            <div className="flex items-center gap-5">

              {legalLinks.map((link, index) => (
                <div
                  key={link.href}
                  className="flex items-center gap-5"
                >

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