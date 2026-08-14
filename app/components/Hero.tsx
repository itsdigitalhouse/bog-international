"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] w-full overflow-hidden text-[#153B16] border-b border-[#153B16]/10 flex items-center">

      {/* =========================================================
          HERO IMAGE (Pure Original Background)
      ========================================================== */}

      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://cdn.marblism.com/FxTxiwErKis.webp')",
          }}
        />
        {/* Subtle Dark Gradient Left side only to protect Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent pointer-events-none" />
      </div>


      {/* =========================================================
          TECHNICAL GRID PATTERN
      ========================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(#E5CC64 1px, transparent 1px),
            linear-gradient(90deg, #E5CC64 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />


      {/* =========================================================
          MAIN CONTENT (High Contrast Luxury Card)
      ========================================================== */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] items-center px-5 py-10 sm:px-8 sm:py-12 lg:px-14 xl:px-20 pb-16">

        {/* Content Box with Glassmorphic Protection */}
        <div className="w-full max-w-3xl bg-[#153B16]/85 backdrop-blur-md p-6 sm:p-8 lg:p-10 border border-[#E5CC64]/30 shadow-2xl rounded-sm">


          {/* =====================================================
              EYEBROW
          ====================================================== */}

          <div className="mb-3 flex items-center gap-3 sm:mb-4">

            <span className="h-px w-8 bg-[#E5CC64] sm:w-12" />

            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#E5CC64] sm:text-[10px] bg-[#E5CC64]/10 px-2.5 py-0.5 border border-[#E5CC64]/30">
              Bhatia Ocean Gold International
            </span>

          </div>


          {/* =====================================================
              MAIN H1
          ====================================================== */}

          <h1 className="max-w-2xl font-[family-name:var(--font-cinzel)] text-[28px] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-[36px] md:text-[42px] lg:text-[48px] uppercase">

            Connecting

            <span className="text-[#E5CC64]">
              {" "}African{" "}
            </span>

            Resources with

            <span className="text-[#E5CC64]">
              {" "}Global Markets.
            </span>

          </h1>


          {/* =====================================================
              POSITIONING + DESCRIPTION
          ====================================================== */}

          <div className="mt-4 pt-3 border-t border-white/10">

            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-200 sm:text-[11px]">
              International Mining • Minerals • Commodities Trading & Export
            </p>

            <p className="mt-2 text-xs leading-5 text-gray-300 sm:text-sm sm:leading-6 font-light">
              Bhatia Ocean Gold International connects African-origin
              resources with international demand through responsible
              sourcing, commodity trading, and B2B supply.
            </p>

          </div>


          {/* =====================================================
              CTA BUTTONS
          ====================================================== */}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">

            {/* Primary Button */}

            <Link
              href="/products"
              className="group inline-flex w-fit items-center justify-center gap-2.5 bg-[#E5CC64] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#153B16] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white sm:px-6 shadow-md"
            >
              Our Products

              <ArrowUpRight
                size={14}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />

            </Link>


            {/* Secondary Button */}

            <Link
              href="/request-offer"
              className="group inline-flex w-fit items-center justify-center gap-2.5 border border-[#E5CC64]/50 bg-white/10 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md transition-all duration-300 hover:border-[#E5CC64] hover:bg-[#E5CC64]/20 sm:px-6 shadow-md"
            >
              Request an Offer

              <ArrowUpRight
                size={14}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />

            </Link>

          </div>


          {/* =====================================================
              COMMODITY NAVIGATION
          ====================================================== */}

          <div className="mt-6 border-t border-white/10 pt-3">

            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">


              {/* Label */}

              <div className="flex items-center gap-2">

                <span className="h-1.5 w-1.5 rounded-full bg-[#E5CC64]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-gray-300">
                  Explore BOG
                </span>

              </div>


              {/* Internal Links */}

              <nav className="flex flex-wrap gap-x-5 gap-y-2">

                <Link
                  href="/products/gold"
                  className="group flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-gray-200 transition-colors hover:text-[#E5CC64]"
                >
                  Gold

                  <ArrowRight
                    size={10}
                    className="text-[#E5CC64] transition-transform group-hover:translate-x-1"
                  />

                </Link>


                <Link
                  href="/products/copper"
                  className="group flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-gray-200 transition-colors hover:text-[#E5CC64]"
                >
                  Copper & Cathodes

                  <ArrowRight
                    size={10}
                    className="text-[#E5CC64] transition-transform group-hover:translate-x-1"
                  />

                </Link>


                <Link
                  href="/mining"
                  className="group flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-gray-200 transition-colors hover:text-[#E5CC64]"
                >
                  Mining

                  <ArrowRight
                    size={10}
                    className="text-[#E5CC64] transition-transform group-hover:translate-x-1"
                  />

                </Link>


                <Link
                  href="/international-trading"
                  className="group flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-gray-200 transition-colors hover:text-[#E5CC64]"
                >
                  International Trading

                  <ArrowRight
                    size={10}
                    className="text-[#E5CC64] transition-transform group-hover:translate-x-1"
                  />

                </Link>

              </nav>

            </div>

          </div>

        </div>

      </div>


      {/* =========================================================
          BOTTOM BRAND STRIP
      ========================================================== */}

      <div className="absolute bottom-0 left-0 z-20 w-full border-t border-[#E5CC64]/20 bg-[#153B16]/90 backdrop-blur-md">

        <div className="mx-auto flex max-w-[1600px] flex-col gap-2 px-5 py-2 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-14 xl:px-20">

          <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-gray-300">
            International B2B Commodity Supply
          </span>

          <div className="flex items-center gap-4 text-[8px] font-bold uppercase tracking-[0.2em] text-[#E5CC64]">

            <span>Gold</span>

            <span className="h-1 w-1 rounded-full bg-[#E5CC64]" />

            <span>Copper</span>

            <span className="h-1 w-1 rounded-full bg-[#E5CC64]" />

            <span>Minerals</span>

          </div>

        </div>

      </div>

    </section>
  );
}