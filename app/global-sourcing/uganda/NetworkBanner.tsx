"use client";

import React from "react";

export default function NetworkBanner() {
  return (
    <section
      id="global-network-banner"
      className="bg-[#F3F3F3] text-[#153B16] relative border-b border-[#153B16]/10 overflow-hidden py-16 lg:py-24"
    >
      {/* Editorial Structural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="max-w-[1400px] h-full mx-auto grid grid-cols-12 px-6 sm:px-12 border-x border-[#153B16]/10">
          <div className="col-span-12 lg:col-span-6 border-r border-[#153B16]/10 h-full hidden lg:block"></div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
        {/* SECTION LABEL & SUB-LABEL */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#153B16]/15 pb-4 mb-12 text-[11px] uppercase tracking-[0.25em] font-[family-name:var(--font-cinzel)] text-[#153B16]/70">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 bg-[#E5CC64] inline-block"></span>
            <span className="font-bold text-[#153B16]">
              05 — GLOBAL SOURCING NETWORK
            </span>
          </div>
          <span className="hidden sm:inline tracking-[0.2em] text-[#153B16]/60">
            UGANDA + MADAGASCAR
          </span>
        </div>

        {/* MAIN EDITORIAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: Strategic Message & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#153B16]/60 font-[family-name:var(--font-cinzel)] block">
                STRATEGIC NETWORK BRIDGE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#153B16] font-[family-name:var(--font-cinzel)] leading-tight uppercase">
                One International Network. <br />
                <span className="text-[#153B16] relative inline-block pt-1">
                  Multiple Sourcing Markets.
                  <span className="absolute bottom-0 left-0 w-20 h-[2.5px] bg-[#E5CC64]"></span>
                </span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#153B16]/80 leading-relaxed font-sans max-w-xl">
              Bhatia Ocean Gold (BOG International) operates within a broader
              international sourcing and trading network connecting Uganda and
              Madagascar. Depending on product availability, origin, quality,
              specifications, quantity, pricing and logistics, suitable
              sourcing opportunities may be identified through the appropriate
              market and operation.
            </p>

            {/* COMMERCIAL NEXT STEP STATEMENT */}
            <div className="bg-white border-l-2 border-[#E5CC64] p-5 shadow-sm space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E5CC64] bg-[#153B16] px-2 py-0.5 font-[family-name:var(--font-cinzel)] inline-block mb-1">
                LOOKING BEYOND UGANDA?
              </span>
              <p className="text-xs text-[#153B16]/85 font-sans leading-relaxed">
                Our broader international sourcing network connects buyers with
                strategic opportunities across Uganda and Madagascar.
              </p>
            </div>

            {/* ACTION BUTTONS (PRIMARY & SECONDARY) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="/global-sourcing"
                className="group relative inline-flex items-center justify-center bg-[#153B16] text-[#F3F3F3] font-bold px-7 py-3.5 text-[11px] uppercase tracking-[0.2em] font-[family-name:var(--font-cinzel)] transition-all duration-300 hover:bg-[#1f5221]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  EXPLORE GLOBAL SOURCING
                  <span className="w-1.5 h-1.5 bg-[#E5CC64] transition-transform duration-300 group-hover:scale-150"></span>
                </span>
              </a>

              <a
                href="/global-sourcing/madagascar"
                className="inline-flex items-center justify-center bg-transparent border border-[#153B16]/30 text-[#153B16] font-bold px-6 py-3.5 text-[11px] uppercase tracking-[0.2em] font-[family-name:var(--font-cinzel)] transition-all duration-300 hover:border-[#153B16] hover:bg-[#153B16]/5"
              >
                <span>EXPLORE MADAGASCAR</span>
                <span className="ml-2 text-[#E5CC64] font-bold">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Minimal Network Entity Visualisation */}
          <div className="lg:col-span-6 bg-white border border-[#153B16]/15 p-6 sm:p-8 relative shadow-sm">
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#153B16]/60 font-[family-name:var(--font-cinzel)] pb-4 border-b border-[#153B16]/10 flex items-center justify-between">
              <span>INTERNATIONAL NETWORK STRUCTURE</span>
              <span className="text-[#E5CC64] font-mono text-[9px]">[ SEPARATE ENTITIES ]</span>
            </div>

            <div className="py-8 relative space-y-8 max-w-md mx-auto">
              {/* Central Connecting Line */}
              <div className="absolute left-[20px] top-10 bottom-10 w-[1.5px] bg-gradient-to-b from-[#153B16] via-[#E5CC64] to-[#153B16] z-0"></div>

              {/* NODE 01: UGANDA MARKET */}
              <div className="relative z-10 pl-10 group">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-[1.5px] bg-[#153B16]"></div>
                <div className="absolute left-[17px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#153B16] border-2 border-[#E5CC64]"></div>

                <div className="bg-[#F3F3F3] border border-[#153B16]/20 p-4 transition-all duration-300 group-hover:border-[#153B16] group-hover:shadow-md">
                  <span className="text-[9px] font-mono font-bold text-[#E5CC64] uppercase tracking-widest block mb-0.5">
                    MARKET 01 — EAST AFRICA
                  </span>
                  <h3 className="text-sm font-extrabold text-[#153B16] font-[family-name:var(--font-cinzel)] tracking-wider">
                    UGANDA OPERATION
                  </h3>
                  <p className="text-[11px] text-[#153B16]/70 font-sans mt-1">
                    Bhatia Ocean Gold (BOG International)
                  </p>
                </div>
              </div>

              {/* HUB NODE: GLOBAL SOURCING NETWORK */}
              <div className="relative z-10 pl-10">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-[1.5px] bg-[#E5CC64]"></div>
                <div className="absolute left-[15px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#E5CC64] rounded-full border-2 border-[#153B16]"></div>

                <div className="bg-[#153B16] text-[#F3F3F3] border border-[#E5CC64]/40 p-4 shadow-sm">
                  <span className="text-[9px] font-mono font-bold text-[#E5CC64] uppercase tracking-widest block mb-0.5">
                    OVERARCHING TRADING FRAMEWORK
                  </span>
                  <h3 className="text-sm font-extrabold text-[#F3F3F3] font-[family-name:var(--font-cinzel)] tracking-wider">
                    GLOBAL SOURCING NETWORK
                  </h3>
                  <p className="text-[11px] text-[#F3F3F3]/70 font-sans mt-1">
                    Integrated Commercial & Logistics Coordination
                  </p>
                </div>
              </div>

              {/* NODE 02: MADAGASCAR MARKET */}
              <div className="relative z-10 pl-10 group">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-[1.5px] bg-[#153B16]"></div>
                <div className="absolute left-[17px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#153B16] border-2 border-[#E5CC64]"></div>

                <div className="bg-[#F3F3F3] border border-[#153B16]/20 p-4 transition-all duration-300 group-hover:border-[#153B16] group-hover:shadow-md">
                  <span className="text-[9px] font-mono font-bold text-[#E5CC64] uppercase tracking-widest block mb-0.5">
                    MARKET 02 — INDIAN OCEAN
                  </span>
                  <h3 className="text-sm font-extrabold text-[#153B16] font-[family-name:var(--font-cinzel)] tracking-wider">
                    MADAGASCAR OPERATION
                  </h3>
                  <p className="text-[11px] text-[#153B16]/70 font-sans mt-1">
                    BMS & ALDO PARTNERS
                  </p>
                </div>
              </div>
            </div>

            {/* LEGAL / ENTITY CLARITY DISCLAIMER */}
            <div className="pt-4 border-t border-[#153B16]/10 text-center">
              <p className="text-[10px] text-[#153B16]/60 font-sans italic">
                Network participants operate under separate entity structures
                and independent commercial management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}