"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[620px] w-full overflow-hidden bg-[#153B16] text-[#F3F3F3] sm:min-h-[660px] lg:min-h-[700px]">

      {/* =========================================================
          HERO IMAGE
      ========================================================== */}

      <div className="absolute inset-0">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://cdn.marblism.com/FxTxiwErKis.webp')",
          }}
        />

        {/* Main green overlay */}
        <div className="absolute inset-0 bg-[#153B16]/75" />

        {/* Left content protection */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#153B16] via-[#153B16]/85 to-[#153B16]/35" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#153B16] to-transparent" />

      </div>


      {/* =========================================================
          TECHNICAL GRID
      ========================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(#E5CC64 1px, transparent 1px),
            linear-gradient(90deg, #E5CC64 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />


      {/* =========================================================
          GOLD AMBIENT LIGHT
      ========================================================== */}

      <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#E5CC64]/10 blur-[130px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#E5CC64]/5 blur-[120px]" />


      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1600px] items-center px-5 py-20 sm:min-h-[660px] sm:px-8 sm:py-24 lg:min-h-[700px] lg:px-14 lg:py-24 xl:px-20">

        <div className="w-full max-w-6xl">


          {/* =====================================================
              EYEBROW
          ====================================================== */}

          <div className="mb-5 flex items-center gap-4 sm:mb-6">

            <span className="h-px w-10 bg-[#E5CC64] sm:w-14" />

            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#E5CC64] sm:text-[10px]">
              Bhatia Ocean Gold International
            </span>

          </div>


          {/* =====================================================
              MAIN H1
          ====================================================== */}

          <h1 className="max-w-4xl font-[family-name:var(--font-cinzel)] text-[32px] font-semibold leading-[1.05] tracking-[-0.02em] text-[#F3F3F3] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[62px]">

            Connecting

            <span className="text-[#E5CC64]">
              {" "}African
            </span>

            <br />

            Resources with

            <br />

            <span className="text-[#E5CC64]">
              Global Markets.
            </span>

          </h1>


          {/* =====================================================
              POSITIONING + DESCRIPTION
          ====================================================== */}

          <div className="mt-5 max-w-2xl sm:mt-6">

            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F3F3F3]/70 sm:text-xs">
              International Mining • Minerals • Commodities Trading & Export
            </p>

            <p className="mt-4 max-w-xl text-sm leading-6 text-[#F3F3F3]/65 sm:mt-5 sm:text-base sm:leading-7">
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

            {/* Products */}

            <Link
              href="/products"
              className="group inline-flex w-fit items-center justify-center gap-3 bg-[#E5CC64] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#153B16] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F3F3F3] sm:px-7"
            >
              Our Products

              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />

            </Link>


            {/* Request Offer */}

            <Link
              href="/request-offer"
              className="group inline-flex w-fit items-center justify-center gap-3 border border-[#E5CC64]/50 bg-[#153B16]/30 px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F3F3F3] backdrop-blur-sm transition-all duration-300 hover:border-[#E5CC64] hover:bg-[#E5CC64]/10 hover:text-[#E5CC64] sm:px-7"
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

          <div className="mt-12 border-t border-[#E5CC64]/20 pt-5 sm:mt-14">

            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">


              {/* Label */}

              <div className="flex items-center gap-3">

                <span className="h-1.5 w-1.5 rounded-full bg-[#E5CC64]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#F3F3F3]/40">
                  Explore BOG
                </span>

              </div>


              {/* Internal Links */}

              <nav className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-8">

                <Link
                  href="/products/gold"
                  className="group flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#F3F3F3]/70 transition-colors hover:text-[#E5CC64]"
                >
                  Gold

                  <ArrowRight
                    size={11}
                    className="text-[#E5CC64] transition-transform group-hover:translate-x-1"
                  />

                </Link>


                <Link
                  href="/products/copper"
                  className="group flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#F3F3F3]/70 transition-colors hover:text-[#E5CC64]"
                >
                  Copper & Cathodes

                  <ArrowRight
                    size={11}
                    className="text-[#E5CC64] transition-transform group-hover:translate-x-1"
                  />

                </Link>


                <Link
                  href="/mining"
                  className="group flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#F3F3F3]/70 transition-colors hover:text-[#E5CC64]"
                >
                  Mining

                  <ArrowRight
                    size={11}
                    className="text-[#E5CC64] transition-transform group-hover:translate-x-1"
                  />

                </Link>


                <Link
                  href="/international-trading"
                  className="group flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#F3F3F3]/70 transition-colors hover:text-[#E5CC64]"
                >
                  International Trading

                  <ArrowRight
                    size={11}
                    className="text-[#E5CC64] transition-transform group-hover:translate-x-1"
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

            <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#F3F3F3]/30">
              BOG / 01
            </span>

            <div className="h-16 w-px bg-gradient-to-b from-[#E5CC64] to-transparent" />

            <span className="rotate-90 font-mono text-[7px] uppercase tracking-[0.3em] text-[#F3F3F3]/25">
              Africa → Global Markets
            </span>

          </div>

        </div>

      </div>


      {/* =========================================================
          BOTTOM BRAND STRIP
      ========================================================== */}

      <div className="absolute bottom-0 left-0 z-20 w-full border-t border-[#E5CC64]/15 bg-[#153B16]/80 backdrop-blur-md">

        <div className="mx-auto flex max-w-[1600px] flex-col gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-14 xl:px-20">

          <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#F3F3F3]/35">
            International B2B Commodity Supply
          </span>

          <div className="flex items-center gap-5 text-[8px] font-bold uppercase tracking-[0.2em] text-[#F3F3F3]/35">

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