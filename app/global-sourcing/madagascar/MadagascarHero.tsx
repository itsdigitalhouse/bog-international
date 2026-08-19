"use client";

import React from "react";

export default function MadagascarHero() {
  return (
    <section
      id="madagascar-hero"
      className="bg-[#F3F3F3] text-[#153B16] relative border-b border-[#153B16]/15 overflow-hidden pt-12 pb-8 lg:pt-16 lg:pb-10 w-full"
    >
      {/* Background Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[140px] sm:text-[220px] lg:text-[300px] font-black text-[#153B16]/[0.03] font-[family-name:var(--font-cinzel)] select-none pointer-events-none leading-none pr-4 hidden sm:block">
        MDG
      </div>

      {/* Complete Full Width Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10 space-y-6 lg:space-y-8">
        {/* SECTION LABEL & COUNTRY IDENTIFIER */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#153B16]/20 pb-2.5 text-[10px] uppercase tracking-[0.25em] font-[family-name:var(--font-cinzel)] text-[#153B16]/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#153B16] inline-block"></span>
            <span className="font-extrabold text-[#153B16]">
              01 — MADAGASCAR OPERATIONS
            </span>
          </div>
          <div className="flex items-center gap-3 text-[9px] tracking-[0.2em] text-[#153B16] font-mono font-bold">
            <span>INDIAN OCEAN HUB</span>
            <span className="text-[#153B16]/40">•</span>
            <span>STRATEGIC SOURCING MARKET</span>
          </div>
        </div>

        {/* MAIN EDITORIAL HERO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center w-full">
          {/* LEFT COLUMN: Strategic Headline & Messaging */}
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-2">
              <span className="text-[9px] uppercase font-bold tracking-[0.25em] text-[#153B16]/80 font-[family-name:var(--font-cinzel)] block">
                GLOBAL SOURCING NETWORK — MADAGASCAR
              </span>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#153B16] font-[family-name:var(--font-cinzel)] leading-[1.08] uppercase">
                Strategic Sourcing <br />
                <span className="relative inline-block pb-0.5 text-[#153B16]">
                  from Madagascar.
                  <span className="absolute bottom-0 left-0 w-24 h-[3px] bg-[#153B16]"></span>
                </span>
              </h1>

              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-[#153B16] font-[family-name:var(--font-cinzel)] pt-1">
                Agricultural, Food, Mining & Mineral Products
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#153B16]/85 leading-relaxed font-sans w-full">
              Madagascar provides access to specialized agricultural, food, mining and
              mineral commodities through a broader international sourcing network,
              with the relevant products handled by the appropriate local operation.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center bg-[#153B16] text-[#F3F3F3] font-bold px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-[family-name:var(--font-cinzel)] transition-all duration-300 hover:bg-[#153B16]/90 shadow-sm"
              >
                <span className="relative z-10 flex items-center gap-2">
                  REQUEST A SOURCING INQUIRY
                  <span className="w-1.5 h-1.5 bg-[#E5CC64]"></span>
                </span>
              </a>

              <a
                href="#madagascar-operations"
                className="inline-flex items-center justify-center bg-white border border-[#153B16]/30 text-[#153B16] font-bold px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-[family-name:var(--font-cinzel)] transition-all duration-300 hover:border-[#153B16] hover:bg-[#153B16]/5 shadow-sm"
              >
                <span>EXPLORE OPERATIONS</span>
                <span className="ml-1.5 font-bold text-[#153B16]">↓</span>
              </a>
            </div>

            {/* TWO SPECIALIZED OPERATIONS DUAL METADATA STRIP */}
            <div className="border-t border-[#153B16]/20 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              <div className="bg-white border-l-4 border-[#153B16] border border-[#153B16]/15 p-3 space-y-0.5 shadow-sm">
                <div className="flex items-center justify-between text-[9px] font-mono text-[#153B16] font-bold">
                  <span>AGRICULTURAL & FOOD</span>
                  <span className="bg-[#153B16]/10 px-1.5 py-0.5 rounded font-mono">[ BMS ]</span>
                </div>
                <div className="text-xs font-bold font-[family-name:var(--font-cinzel)] text-[#153B16] tracking-wider">
                  BEST SPICES OF MADAGASCAR
                </div>
                <p className="text-[10px] text-[#153B16]/80 font-sans">
                  Vanilla, Spices, Grains & Food Commodities
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#153B16] border border-[#153B16]/15 p-3 space-y-0.5 shadow-sm">
                <div className="flex items-center justify-between text-[9px] font-mono text-[#153B16] font-bold">
                  <span>MINING & MINERALS</span>
                  <span className="bg-[#153B16]/10 px-1.5 py-0.5 rounded font-mono">[ ALDO ]</span>
                </div>
                <div className="text-xs font-bold font-[family-name:var(--font-cinzel)] text-[#153B16] tracking-wider">
                  ALDO PARTNERS
                </div>
                <p className="text-[10px] text-[#153B16]/80 font-sans">
                  Gold, Chromium, Minerals & Extraction Sourcing
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Full Width Compact Sourcing Visual */}
          <div className="lg:col-span-6 w-full">
            <div className="relative border border-[#153B16]/20 bg-white p-2 h-[280px] sm:h-[320px] lg:h-[350px] w-full overflow-hidden shadow-sm group">
              <div className="relative w-full h-full bg-[#153B16] overflow-hidden border border-[#153B16]/15">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop"
                  alt="Madagascar Commercial Commodity Sourcing"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#153B16]/95 via-transparent to-[#153B16]/30 pointer-events-none"></div>

                {/* Technical Overlay Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[9px] font-mono text-[#F3F3F3] bg-[#153B16]/90 backdrop-blur-sm p-2 border border-[#F3F3F3]/20">
                  <span className="flex items-center gap-1.5 font-bold">
                    <span className="w-1.5 h-1.5 bg-[#E5CC64] rounded-full animate-pulse"></span>
                    ORIGIN: MADAGASCAR
                  </span>
                  <span className="text-[#E5CC64] font-bold">SPECIALIZED OPERATIONS</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#153B16]/95 border border-[#F3F3F3]/20 space-y-0.5">
                  <span className="text-[8px] font-mono text-[#E5CC64] uppercase tracking-widest block font-bold">
                    STRUCTURED DUAL-ENTITY HUB
                  </span>
                  <p className="text-[11px] text-[#F3F3F3] font-sans leading-snug">
                    BMS handles food & agriculture. ALDO Partners manages mining & minerals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM PRODUCT INDICATORS CATEGORY STRIP */}
        <div className="border-t border-[#153B16]/20 pt-4 w-full">
          <div className="flex items-center justify-between pb-2 text-[9px] font-mono text-[#153B16] uppercase tracking-wider font-bold">
            <span>MADAGASCAR PRODUCT CAPABILITIES</span>
            <span className="hidden sm:inline">[ RAW & PROCESSED COMMODITIES ]</span>
          </div>

          <div className="bg-white border border-[#153B16]/20 p-3 text-[11px] sm:text-xs font-mono tracking-widest text-[#153B16] flex flex-wrap items-center justify-center sm:justify-between gap-y-1.5 gap-x-3 shadow-sm font-bold w-full">
            <span>SPICES</span>
            <span className="text-[#153B16]/30">•</span>
            <span>GRAINS</span>
            <span className="text-[#153B16]/30">•</span>
            <span>BEANS</span>
            <span className="text-[#153B16]/30">•</span>
            <span>VANILLA</span>
            <span className="text-[#153B16]/30">•</span>
            <span className="text-[#153B16] font-black underline underline-offset-4 decoration-[#E5CC64]">GOLD</span>
            <span className="text-[#153B16]/30">•</span>
            <span>CHROME / CHROMIUM</span>
            <span className="text-[#153B16]/30">•</span>
            <span>STONES & MINERALS</span>
          </div>
        </div>
      </div>
    </section>
  );
}