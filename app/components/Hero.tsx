"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[620px] w-full overflow-hidden bg-[#FAF7F2] text-[#153B16] sm:min-h-[660px] lg:min-h-[700px] border-b border-[#153B16]/10">

      {/* =========================================================
          HERO IMAGE (Light Soft Overlay)
      ========================================================== */}

      <div className="absolute inset-0">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://cdn.marblism.com/FxTxiwErKis.webp')",
          }}
        />

        {/* Soft Light Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/90 to-transparent" />

        {/* Bottom subtle fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#FAF7F2] to-transparent" />

      </div>


      {/* =========================================================
          TECHNICAL GRID PATTERN
      ========================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(#153B16 1px, transparent 1px),
            linear-gradient(90deg, #153B16 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />


      {/* =========================================================
          GOLD AMBIENT LIGHT (LIGHT THEME)
      ========================================================== */}

      <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#E5CC64]/20 blur-[130px]" />


      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1600px] items-center px-5 py-20 sm:min-h-[660px] sm:px-8 sm:py-24 lg:min-h-[700px] lg:px-14 lg:py-24 xl:px-20">

        <div className="w-full max-w-6xl">


          {/* =====================================================
              EYEBROW
          ====================================================== */}

          <div className="mb-5 flex items-center gap-4 sm:mb-6">

            <span className="h-px w-10 bg-[#b09630] sm:w-14" />

            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#b09630] sm:text-[10px] bg-[#E5CC64]/20 px-3 py-1 border border-[#E5CC64]/50">
              Bhatia Ocean Gold International
            </span>

          </div>


          {/* =====================================================
              MAIN H1
          ====================================================== */}

          <h1 className="max-w-4xl font-[family-name:var(--font-cinzel)] text-[32px] font-semibold leading-[1.05] tracking-[-0.02em] text-[#153B16] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[62px]">

            Connecting

            <span className="text-[#b09630]">
              {" "}African
            </span>

            <br />

            Resources with

            <br />

            <span className="text-[#b09630]">
              Global Markets.
            </span>

          </h1>


          {/* =====================================================
              POSITIONING + DESCRIPTION
          ====================================================== */}

          <div className="mt-5 max-w-2xl sm:mt-6">

            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#153B16]/80 sm:text-xs">
              International Mining • Minerals • Commodities Trading & Export
            </p>

            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-700 sm:mt-5 sm:text-base sm:leading-7 font-light">
              Bhatia Ocean Gold International connects African-origin
              resources with international demand through responsible
              sourcing, commodity trading, export coordination and
              international B2B supply.
            </p>

          </div>


          {/* =====================================================
              CTA BUTTONS
          ====================================================== */}

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">

            {/* Primary Button */}

            <Link
              href="/products"
              className="group inline-flex w-fit items-center justify-center gap-3 bg-[#153B16] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#FAF7F2] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b09630] sm:px-7 shadow-md"
            >
              Our Products

              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />

            </Link>


            {/* Secondary Button */}

            <Link
              href="/request-offer"
              className="group inline-flex w-fit items-center justify-center gap-3 border border-[#153B16]/30 bg-white/80 px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#153B16] backdrop-blur-md transition-all duration-300 hover:border-[#153B16] hover:bg-[#153B16] hover:text-white sm:px-7 shadow-sm"
            >
              Request an Offer

              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />

            </Link>

          </div>


          {/* =====================================================
              COMMODITY NAVIGATION
          ====================================================== */}

          <div className="mt-12 border-t border-[#153B16]/15 pt-5 sm:mt-14">

            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">


              {/* Label */}

              <div className="flex items-center gap-3">

                <span className="h-1.5 w-1.5 rounded-full bg-[#b09630]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#153B16]/60">
                  Explore BOG
                </span>

              </div>


              {/* Internal Links */}

              <nav className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-8">

                <Link
                  href="/products/gold"
                  className="group flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#153B16]/80 transition-colors hover:text-[#b09630]"
                >
                  Gold

                  <ArrowRight
                    size={11}
                    className="text-[#b09630] transition-transform group-hover:translate-x-1"
                  />

                </Link>


                <Link
                  href="/products/copper"
                  className="group flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#153B16]/80 transition-colors hover:text-[#b09630]"
                >
                  Copper & Cathodes

                  <ArrowRight
                    size={11}
                    className="text-[#b09630] transition-transform group-hover:translate-x-1"
                  />

                </Link>


                <Link
                  href="/mining"
                  className="group flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#153B16]/80 transition-colors hover:text-[#b09630]"
                >
                  Mining

                  <ArrowRight
                    size={11}
                    className="text-[#b09630] transition-transform group-hover:translate-x-1"
                  />

                </Link>


                <Link
                  href="/international-trading"
                  className="group flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#153B16]/80 transition-colors hover:text-[#b09630]"
                >
                  International Trading

                  <ArrowRight
                    size={11}
                    className="text-[#b09630] transition-transform group-hover:translate-x-1"
                  />

                </Link>

              </nav>

            </div>

          </div>

        </div>


        {/* =======================================================
            DESKTOP SIDE INDEX
        ======================================================== */}

        <div className="absolute bottom-20 right-8 hidden xl:block">

          <div className="flex flex-col items-end gap-3">

            <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#153B16]/40">
              BOG / 01
            </span>

            <div className="h-16 w-px bg-gradient-to-b from-[#b09630] to-transparent" />

            <span className="rotate-90 font-mono text-[7px] uppercase tracking-[0.3em] text-[#153B16]/40">
              Africa → Global Markets
            </span>

          </div>

        </div>

      </div>


      {/* =========================================================
          BOTTOM BRAND STRIP
      ========================================================== */}

      <div className="absolute bottom-0 left-0 z-20 w-full border-t border-[#153B16]/10 bg-white/70 backdrop-blur-md">

        <div className="mx-auto flex max-w-[1600px] flex-col gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-14 xl:px-20">

          <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#153B16]/60">
            International B2B Commodity Supply
          </span>

          <div className="flex items-center gap-5 text-[8px] font-bold uppercase tracking-[0.2em] text-[#153B16]/70">

            <span>Gold</span>

            <span className="h-1 w-1 rounded-full bg-[#b09630]" />

            <span>Copper</span>

            <span className="h-1 w-1 rounded-full bg-[#b09630]" />

            <span>Minerals</span>

          </div>

        </div>

      </div>

    </section>
  );
}