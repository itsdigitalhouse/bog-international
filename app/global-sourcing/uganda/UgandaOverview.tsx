"use client";

import React from "react";

export default function UgandaOverview() {
  const sourcingDecisionFactors = [
    "Product Availability",
    "Origin & Traceability",
    "Quality & Grade",
    "Technical Specifications",
    "Required Quantity",
    "Competitive Pricing",
    "Export Logistics",
  ];

  return (
    <section className="bg-[#F3F3F3] text-[#153B16] relative border-b border-[#153B16]/10 overflow-hidden py-16 lg:py-24">
      {/* Editorial Structural Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="max-w-[1400px] h-full mx-auto grid grid-cols-12 px-6 sm:px-12 border-x border-[#153B16]/10">
          <div className="col-span-12 lg:col-span-5 border-r border-[#153B16]/10 h-full hidden lg:block"></div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* SECTION LABEL */}
        <div className="flex items-center justify-between border-b border-[#153B16]/15 pb-4 mb-10 text-[11px] uppercase tracking-[0.25em] font-[family-name:var(--font-cinzel)] text-[#153B16]/70">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 bg-[#E5CC64] inline-block"></span>
            <span className="font-bold text-[#153B16]">02 — UGANDA OPERATION</span>
          </div>
          <span className="hidden sm:inline tracking-[0.2em] text-[#153B16]/60">
            UGANDA-BASED SOURCING & TRADING
          </span>
        </div>

        {/* MAIN ASYMMETRIC EDITORIAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Large Statement Block & Info Rail */}
          <div className="lg:col-span-5 space-y-8 pr-0 lg:pr-6">
            
            {/* Visual Anchor / Institutional Identity */}
            <div className="border-l-2 border-[#E5CC64] pl-6 py-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#153B16]/60 font-[family-name:var(--font-cinzel)]">
                OPERATIONAL BASE
              </p>
              <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#153B16] font-[family-name:var(--font-cinzel)] mt-1">
                UGANDA
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5CC64] font-[family-name:var(--font-cinzel)] mt-0.5">
                SOURCE MARKET // 01
              </p>
            </div>

            {/* Typography-Driven Information Rail */}
            <div className="bg-[#153B16] text-[#F3F3F3] p-6 sm:p-8 space-y-6 border border-[#153B16]">
              <div className="border-b border-[#F3F3F3]/15 pb-4">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#E5CC64] block font-[family-name:var(--font-cinzel)]">
                  PRIMARY ENTITY
                </span>
                <span className="text-base font-bold tracking-wider font-[family-name:var(--font-cinzel)] mt-0.5 block">
                  BHATIA OCEAN GOLD
                </span>
                <span className="text-xs text-[#F3F3F3]/70 font-semibold tracking-widest block font-[family-name:var(--font-cinzel)]">
                  (BOG INTERNATIONAL)
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 border-b border-[#F3F3F3]/15 pb-4 text-[10px] tracking-wider uppercase font-[family-name:var(--font-cinzel)]">
                <div>
                  <span className="text-[#E5CC64] block">FOCUS AREA</span>
                  <span className="text-[#F3F3F3]/90 font-bold block mt-1">
                    MINERALS, AGRO & NATURAL RESOURCES
                  </span>
                </div>
                <div>
                  <span className="text-[#E5CC64] block">COMMERCIAL AUDIENCE</span>
                  <span className="text-[#F3F3F3]/90 font-bold block mt-1">
                    INTERNATIONAL BUYERS
                  </span>
                </div>
              </div>

              {/* Process Visual Rail (UGANDA -> SOURCE -> QUALITY -> SPECIFICATIONS -> INTERNATIONAL BUYER) */}
              <div className="pt-2 space-y-3">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#E5CC64] block font-[family-name:var(--font-cinzel)]">
                  SOURCING PIPELINE
                </span>
                <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold tracking-widest text-[#F3F3F3] font-[family-name:var(--font-cinzel)]">
                  <span>UGANDA</span>
                  <span className="text-[#E5CC64]">→</span>
                  <span>SOURCE</span>
                  <span className="text-[#E5CC64]">→</span>
                  <span>QUALITY</span>
                  <span className="text-[#E5CC64]">→</span>
                  <span>SPECIFICATIONS</span>
                  <span className="text-[#E5CC64]">→</span>
                  <span className="text-[#E5CC64]">BUYER</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Operational Content & Commercial Logic */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Entity Identification & Main Heading */}
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#153B16]/60 font-bold font-[family-name:var(--font-cinzel)] block">
                BHATIA OCEAN GOLD (BOG INTERNATIONAL)
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#153B16] font-[family-name:var(--font-cinzel)] leading-[1.15] tracking-tight">
                Uganda-Based Sourcing. <br />
                <span className="text-[#153B16] relative inline-block">
                  International Reach.
                  <span className="absolute bottom-0 left-0 w-24 h-[2px] bg-[#E5CC64]"></span>
                </span>
              </h2>
            </div>

            {/* Primary Content Message */}
            <div className="space-y-4 text-sm sm:text-base text-[#153B16]/85 leading-relaxed font-sans">
              <p className="font-semibold text-[#153B16] text-base sm:text-lg border-l-2 border-[#153B16] pl-4">
                Bhatia Ocean Gold (BOG International) is our Uganda-based sourcing and trading operation, with activities covering minerals, agricultural commodities and other natural-resource products.
              </p>
              <p>
                Operating directly from Uganda, BOG International serves as a structured commercial interface for international buyers looking to evaluate and procure suitable commodities directly from origin. We work with global counterparties seeking verified products structured around clear commercial and technical requirements.
              </p>
            </div>

            {/* EDITORIAL FEATURE: Typographic Accent Statement */}
            <div className="bg-[#153B16]/5 border border-[#153B16]/15 p-6 relative my-6">
              <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#E5CC64]"></span>
              <blockquote className="text-base sm:text-lg font-bold font-[family-name:var(--font-cinzel)] text-[#153B16] leading-snug">
                “Uganda is our <span className="text-[#153B16] bg-[#E5CC64]/30 px-1 py-0.5">primary sourcing market</span> for minerals, agricultural commodities and other natural-resource products.”
              </blockquote>
            </div>

            {/* Commercial Evaluation Decision Factors */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#153B16] font-[family-name:var(--font-cinzel)]">
                COMMERCIAL EVALUATION & SOURCING DECISIONS
              </h3>
              <p className="text-xs text-[#153B16]/75 font-sans leading-relaxed">
                Sourcing inquiries and trade engagements are structured around specific counterparty criteria to ensure alignment with international standards:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                {sourcingDecisionFactors.map((factor, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white border border-[#153B16]/10 px-3 py-2 text-[11px] font-semibold tracking-wider font-[family-name:var(--font-cinzel)] text-[#153B16]"
                  >
                    <span className="w-1.5 h-1.5 bg-[#E5CC64] shrink-0"></span>
                    <span>{factor}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Category Focus Statement (No product lists, just categories) */}
            <div className="pt-6 border-t border-[#153B16]/15">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#153B16]/60 font-[family-name:var(--font-cinzel)] block mb-2">
                CORE SOURCING PILLARS
              </span>
              <div className="text-xl sm:text-2xl font-black tracking-wider text-[#153B16] font-[family-name:var(--font-cinzel)] flex flex-wrap gap-x-4 gap-y-1">
                <span>MINERALS</span>
                <span className="text-[#E5CC64] font-normal">•</span>
                <span>AGRICULTURAL</span>
                <span className="text-[#E5CC64] font-normal">•</span>
                <span>NATURAL PRODUCTS</span>
              </div>
            </div>

          </div>

        </div>

        {/* TRANSITION TO NEXT SECTION: UgandaProducts */}
        <div className="mt-16 pt-8 border-t border-[#153B16]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#153B16]/60 font-[family-name:var(--font-cinzel)]">
              NEXT SECTION
            </p>
            <p className="text-sm font-bold font-[family-name:var(--font-cinzel)] text-[#153B16] tracking-wide mt-0.5">
              Explore the categories sourced through our Uganda operation.
            </p>
          </div>

          <a
            href="#uganda-products"
            className="group inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] font-[family-name:var(--font-cinzel)] text-[#153B16] hover:text-[#153B16]/80 transition-all"
          >
            <span>UGANDA SOURCING CATEGORIES</span>
            <span className="w-7 h-7 bg-[#153B16] text-[#E5CC64] flex items-center justify-center transition-transform duration-300 group-hover:translate-y-1">
              ↓
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}