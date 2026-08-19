"use client";

import React from "react";
import Link from "next/link";

export default function LogisticsHero() {
  return (
    <section className="relative bg-[#FFFFFF] text-[#153B16] py-16 sm:py-24 lg:py-32 border-b border-[#153B16]/10 selection:bg-[#E5CC64] selection:text-[#153B16] overflow-hidden">
      
      {/* EDITORIAL GRID LINES (FINE STRUCTURAL BORDERS) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="max-w-[1360px] h-full mx-auto grid grid-cols-12 px-6 sm:px-10 border-x border-[#153B16]/10">
          <div className="col-span-12 lg:col-span-7 border-r border-[#153B16]/10 h-full hidden lg:block" />
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 relative z-10 space-y-12 sm:space-y-16">
        
        {/* SECTION LABEL HEADER */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#153B16]/15 pb-4 text-[11px] font-mono tracking-[0.25em] uppercase text-[#153B16]">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[#E5CC64] inline-block" />
            <span className="font-bold tracking-[0.3em]">01 — LOGISTICS</span>
          </div>
          <span className="tracking-[0.2em] text-[#153B16]/70 text-[10px] font-semibold">
            INTERNATIONAL SOURCING & TRADE
          </span>
        </div>

        {/* 55/45 EDITORIAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: MAIN MESSAGING, CONTENT & CTAS (55%) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* HEADINGS BLOCK */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[family-name:var(--font-cinzel)] tracking-tight leading-[1.08] text-[#153B16] uppercase">
                From Source <br />
                <span className="relative inline-block">
                  to Destination.
                  <span className="absolute bottom-1 left-0 w-full h-[2px] bg-[#E5CC64]" />
                </span>
              </h1>

              <h2 className="text-sm sm:text-base text-[#153B16] font-mono font-bold uppercase tracking-[0.15em] pt-2 border-l-2 border-[#153B16] pl-4">
                Supporting the movement of sourced commodities across international markets.
              </h2>
            </div>

            {/* BODY CONTENT */}
            <div className="space-y-4 text-xs sm:text-sm text-[#153B16]/85 leading-relaxed font-sans max-w-2xl">
              <p>
                International sourcing does not end at the point of origin. Product requirements, documentation, shipment planning, destination requirements and commercial considerations must work together to support an efficient transaction.
              </p>
              <p>
                The logistics section of the BOG International website should present this process clearly, helping international buyers understand how sourcing and movement requirements connect across the broader trading process.
              </p>
            </div>

            {/* BUSINESS STATEMENT CALLOUT */}
            <div className="bg-[#F3F3F3] border-l-2 border-[#153B16] p-5 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#153B16] block">
                LOGISTICS AS PART OF THE SOURCING PROCESS
              </span>
              <p className="text-xs text-[#153B16]/80 leading-relaxed font-sans">
                From origin coordination to destination requirements, each transaction is considered according to the product, quantity, specifications, documentation and logistics involved.
              </p>
            </div>

            {/* ACTION CTAS */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#FFFFFF] border border-[#153B16] text-[#153B16] px-8 py-4 text-xs font-mono font-bold uppercase tracking-[0.2em] hover:bg-[#153B16] hover:text-[#FFFFFF] transition-colors duration-200 shadow-sm rounded-none text-center"
              >
                REQUEST A LOGISTICS INQUIRY
              </Link>

              <Link
                href="/global-sourcing"
                className="inline-flex items-center justify-center gap-2 text-[#153B16] font-mono font-bold text-xs uppercase tracking-[0.18em] hover:text-[#153B16]/70 transition-colors py-2 group"
              >
                <span>EXPLORE GLOBAL SOURCING</span>
                <span className="text-[#E5CC64] text-sm font-black transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

          </div>

          {/* RIGHT SIDE: TYPOGRAPHY-LED PROCESS COMPOSITION (45%) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* STRUCTURED PROCESS FRAMEWORK CARD */}
            <div className="bg-[#FFFFFF] border border-[#153B16]/20 p-6 sm:p-8 space-y-6 relative shadow-sm">
              <div className="flex items-center justify-between border-b border-[#153B16]/10 pb-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#153B16]">
                  TRANSACTION FRAMEWORK
                </span>
                <span className="text-[9px] font-mono text-[#153B16]/60 uppercase tracking-widest">
                  BOG INTERNATIONAL
                </span>
              </div>

              {/* FLOW STEP 1 */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#153B16]">
                  <span className="uppercase tracking-wider">01 — SOURCE</span>
                  <span className="text-[10px] text-[#153B16]/70 font-normal">ORIGIN MARKETS</span>
                </div>
                <p className="text-xs text-[#153B16]/80 font-sans pl-6 border-l border-[#153B16]/20">
                  Uganda &bull; Madagascar origin coordination
                </p>
              </div>

              <div className="text-center text-[#153B16]/30 font-mono text-xs leading-none">↓</div>

              {/* FLOW STEP 2 */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#153B16]">
                  <span className="uppercase tracking-wider">02 — PRODUCT</span>
                  <span className="text-[10px] text-[#153B16]/70 font-normal">COMMODITY SPECIFICATIONS</span>
                </div>
                <p className="text-xs text-[#153B16]/80 font-sans pl-6 border-l border-[#153B16]/20">
                  Grade, quality and quantity alignment
                </p>
              </div>

              <div className="text-center text-[#153B16]/30 font-mono text-xs leading-none">↓</div>

              {/* FLOW STEP 3 */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#153B16]">
                  <span className="uppercase tracking-wider">03 — DOCUMENTATION</span>
                  <span className="text-[10px] text-[#153B16]/70 font-normal">COMPLIANCE & TERMS</span>
                </div>
                <p className="text-xs text-[#153B16]/80 font-sans pl-6 border-l border-[#153B16]/20">
                  Commercial, export and shipment documentation
                </p>
              </div>

              <div className="text-center text-[#153B16]/30 font-mono text-xs leading-none">↓</div>

              {/* FLOW STEP 4 */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#153B16]">
                  <span className="uppercase tracking-wider">04 — DESTINATION</span>
                  <span className="text-[10px] text-[#153B16]/70 font-normal">INTERNATIONAL BUYERS</span>
                </div>
                <p className="text-xs text-[#153B16]/80 font-sans pl-6 border-l border-[#153B16]/20">
                  Delivery requirements and commercial fulfillment
                </p>
              </div>
            </div>

            {/* OPTIONAL DOCUMENTARY IMAGE (SUBTLE & CONTROLLED) */}
            <div className="relative border border-[#153B16]/20 bg-[#F3F3F3] p-1.5">
              <div className="relative h-[180px] sm:h-[200px] w-full overflow-hidden bg-[#153B16]/10">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1000"
                  alt="International commodity cargo container terminal"
                  className="w-full h-full object-cover grayscale contrast-125 opacity-90"
                />
                <div className="absolute inset-0 bg-[#153B16]/10 mix-blend-multiply" />
              </div>
              <div className="pt-2 px-1 flex items-center justify-between text-[9px] font-mono text-[#153B16]/70 uppercase tracking-widest">
                <span>INTERNATIONAL PORT OPERATIONS</span>
                <span>TRADE LOGISTICS</span>
              </div>
            </div>

          </div>

        </div>

        {/* SOURCE MARKETS STRIP (CONTEXTUAL BUSINESS INFORMATION) */}
        <div className="bg-[#F3F3F3] border-t border-[#153B16]/20 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-xs font-mono text-[#153B16]">
          
          <div className="md:col-span-4 space-y-1">
            <span className="text-[10px] text-[#153B16]/60 uppercase tracking-widest block font-bold">
              SOURCE MARKETS
            </span>
            <span className="font-bold tracking-wider text-sm block font-[family-name:var(--font-cinzel)] uppercase text-[#153B16]">
              UGANDA &bull; MADAGASCAR
            </span>
          </div>

          <div className="md:col-span-5 space-y-1 md:border-l border-[#153B16]/15 md:pl-6">
            <span className="text-[10px] text-[#153B16]/60 uppercase tracking-widest block font-bold">
              BUSINESS FOCUS
            </span>
            <p className="text-xs font-sans text-[#153B16]/80">
              Connecting sourcing opportunities with international buyer requirements.
            </p>
          </div>

          <div className="md:col-span-3 space-y-1 md:text-right border-t md:border-t-0 border-[#153B16]/10 pt-4 md:pt-0">
            <span className="text-[10px] text-[#153B16]/60 uppercase tracking-widest block font-bold">
              DESTINATION
            </span>
            <span className="font-bold tracking-wider text-xs block uppercase text-[#153B16]">
              GLOBAL BUYERS
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}