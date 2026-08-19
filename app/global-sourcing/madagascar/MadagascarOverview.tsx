"use client";

import React from "react";

export default function MadagascarOverview() {
  return (
    <section
      id="madagascar-overview"
      className="bg-white text-[#153B16] relative border-b border-[#153B16]/20 py-20 lg:py-28 w-full overflow-hidden"
    >
      {/* Background Editorial Watermark */}
      <div className="absolute left-[-2%] bottom-[-5%] text-[180px] sm:text-[280px] lg:text-[380px] font-black text-[#153B16]/[0.02] font-[family-name:var(--font-cinzel)] select-none pointer-events-none leading-none z-0">
        OVERVIEW
      </div>

      {/* Subtle Background Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="w-full h-full mx-auto grid grid-cols-12 px-4 sm:px-8 lg:px-12 border-x border-[#153B16]/10">
          <div className="col-span-6 border-r border-[#153B16]/10 h-full hidden lg:block"></div>
        </div>
      </div>

      {/* Complete Full Width Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10 space-y-12">
        {/* SECTION LABEL & TOP STRIP */}
        <div className="flex flex-wrap items-center justify-between border-b-2 border-[#153B16]/20 pb-3 text-[10px] uppercase tracking-[0.25em] font-[family-name:var(--font-cinzel)]">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 bg-[#153B16] inline-block shadow-sm"></span>
            <span className="font-extrabold text-[#153B16]">
              02 — MARKET OVERVIEW
            </span>
          </div>
          <div className="flex items-center gap-3 text-[9px] tracking-[0.2em] font-mono font-bold text-[#153B16]">
            <span className="bg-[#153B16]/5 px-2 py-0.5 rounded border border-[#153B16]/10">STRATEGIC HUB</span>
            <span className="text-[#153B16]/30">•</span>
            <span className="text-[#E5CC64] bg-[#153B16] px-2 py-0.5 rounded font-extrabold">INDIAN OCEAN REGION</span>
          </div>
        </div>

        {/* SECTION HEADLINE & INTRO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
          {/* Headline Column */}
          <div className="lg:col-span-5 space-y-3">
            <div className="inline-flex items-center gap-2 text-[9px] uppercase font-bold tracking-[0.25em] text-[#153B16] font-[family-name:var(--font-cinzel)] bg-[#153B16]/5 px-2.5 py-1 border-l-2 border-[#153B16]">
              REGIONAL CAPACITY & RESOURCE POTENTIAL
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#153B16] font-[family-name:var(--font-cinzel)] leading-[1.1] uppercase">
              A Key Origin for <br />
              <span className="relative inline-block pb-1 text-[#153B16]">
                Global Commodities.
                <span className="absolute bottom-0 left-0 w-24 h-[3px] bg-[#E5CC64]"></span>
              </span>
            </h2>
          </div>

          {/* Description Column */}
          <div className="lg:col-span-7 space-y-4 border-l-2 border-[#153B16]/15 pl-5 lg:pl-8">
            <p className="text-xs sm:text-sm text-black leading-relaxed font-sans font-normal">
              Madagascar represents a unique strategic origin in global trade, holding rich reserves of high-value agricultural produce, exotic spices, and critical mineral resources. Its geographic position in the Indian Ocean provides direct maritime access to international supply chains across Europe, Asia, and the Americas.
            </p>
            <p className="text-xs sm:text-sm text-black leading-relaxed font-sans font-normal">
              To navigate local market dynamics effectively, operations are structured through dedicated entities—ensuring regulatory compliance, direct origin procurement, and streamlined export logistics for both agricultural commodities and mineral resources.
            </p>
          </div>
        </div>

        {/* 3-COLUMN PREMIUM CARDS STRIP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2 w-full">
          {/* Card 1 */}
          <div className="group relative bg-[#F9F9F9] border-2 border-[#153B16]/20 p-5 lg:p-6 space-y-2.5 transition-all duration-300 hover:border-[#153B16] hover:bg-white hover:shadow-xl">
            <div className="flex items-center justify-between text-[9px] font-mono text-[#153B16] font-bold pb-2 border-b border-[#153B16]/10">
              <span className="tracking-widest">[ 01 ] ORIGIN ADVANTAGE</span>
              <span className="bg-[#153B16] text-[#F3F3F3] px-2 py-0.5 rounded text-[8px] font-mono">[ BMS ]</span>
            </div>
            
            <div className="text-xs sm:text-sm font-bold font-[family-name:var(--font-cinzel)] text-[#153B16] tracking-wider uppercase">
              Premium Agro Products
            </div>
            
            <p className="text-[11px] sm:text-xs text-black font-sans leading-relaxed font-normal">
              Home to world-renowned Madagascar Bourbon Vanilla, cloves, essential oils, and specialized pulses cultivated under ideal tropical conditions.
            </p>

            {/* Bottom Accent */}
            <div className="pt-3 flex items-center justify-between text-[9px] font-mono font-bold text-[#153B16]">
              <span className="group-hover:text-[#E5CC64] transition-colors">AGRICULTURAL SECTOR</span>
              <span>→</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-[#F9F9F9] border-2 border-[#153B16]/20 p-5 lg:p-6 space-y-2.5 transition-all duration-300 hover:border-[#153B16] hover:bg-white hover:shadow-xl">
            <div className="flex items-center justify-between text-[9px] font-mono text-[#153B16] font-bold pb-2 border-b border-[#153B16]/10">
              <span className="tracking-widest">[ 02 ] MINERAL WEALTH</span>
              <span className="bg-[#153B16] text-[#F3F3F3] px-2 py-0.5 rounded text-[8px] font-mono">[ ALDO ]</span>
            </div>
            
            <div className="text-xs sm:text-sm font-bold font-[family-name:var(--font-cinzel)] text-[#153B16] tracking-wider uppercase">
              Rich Mineral Extraction
            </div>
            
            <p className="text-[11px] sm:text-xs text-black font-sans leading-relaxed font-normal">
              Abundant reserves of gold, high-grade chromium, graphite, and industrial minerals crucial for international industrial demand.
            </p>

            {/* Bottom Accent */}
            <div className="pt-3 flex items-center justify-between text-[9px] font-mono font-bold text-[#153B16]">
              <span className="group-hover:text-[#E5CC64] transition-colors">MINING SECTOR</span>
              <span>→</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-[#F9F9F9] border-2 border-[#153B16]/20 p-5 lg:p-6 space-y-2.5 transition-all duration-300 hover:border-[#153B16] hover:bg-white hover:shadow-xl">
            <div className="flex items-center justify-between text-[9px] font-mono text-[#153B16] font-bold pb-2 border-b border-[#153B16]/10">
              <span className="tracking-widest">[ 03 ] LOGISTICS HUB</span>
              <span className="bg-[#153B16] text-[#F3F3F3] px-2 py-0.5 rounded text-[8px] font-mono">[ NETWORK ]</span>
            </div>
            
            <div className="text-xs sm:text-sm font-bold font-[family-name:var(--font-cinzel)] text-[#153B16] tracking-wider uppercase">
              Direct Export Infrastructure
            </div>
            
            <p className="text-[11px] sm:text-xs text-black font-sans leading-relaxed font-normal">
              Established port connections and local sourcing infrastructure allowing seamless containerized shipping and bulk commodity transport.
            </p>

            {/* Bottom Accent */}
            <div className="pt-3 flex items-center justify-between text-[9px] font-mono font-bold text-[#153B16]">
              <span className="group-hover:text-[#E5CC64] transition-colors">EXPORT INFRASTRUCTURE</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}