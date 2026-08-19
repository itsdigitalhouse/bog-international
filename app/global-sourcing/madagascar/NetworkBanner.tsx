"use client";

import React from "react";
import Link from "next/link";

export interface NetworkBannerProps {
  currentMarket?: string;
  secondaryMarket?: string;
  secondaryMarketPath?: string;
  globalSourcingPath?: string;
  hasUgandaPage?: boolean;
}

export default function NetworkBanner({
  currentMarket = "MADAGASCAR",
  secondaryMarket = "UGANDA",
  secondaryMarketPath = "/global-sourcing/uganda",
  globalSourcingPath = "/global-sourcing",
  hasUgandaPage = true,
}: NetworkBannerProps) {
  return (
    <section
      id="network-banner"
      className="bg-[#153B16] text-[#F3F3F3] relative border-b border-[#E5CC64]/20 overflow-hidden py-16 lg:py-24"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="max-w-[1400px] h-full mx-auto grid grid-cols-12 px-6 sm:px-12 border-x border-[#F3F3F3]/20">
          <div className="col-span-12 lg:col-span-6 border-r border-[#F3F3F3]/20 h-full hidden lg:block"></div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10 space-y-12 lg:space-y-16">
        {/* SECTION LABEL & SUB-LABEL */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#F3F3F3]/15 pb-4 text-[11px] uppercase tracking-[0.25em] font-[family-name:var(--font-cinzel)] text-[#F3F3F3]/70">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 bg-[#E5CC64] inline-block"></span>
            <span className="font-bold text-[#F3F3F3]">
              05 — GLOBAL SOURCING NETWORK
            </span>
          </div>
          <span className="hidden sm:inline tracking-[0.2em] font-mono text-[#E5CC64]">
            {secondaryMarket} + {currentMarket}
          </span>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT COLUMN: EDITORIAL HEADING & CORE VALUE PROP */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#E5CC64] font-[family-name:var(--font-cinzel)] block">
                INTEGRATED INTERNATIONAL SOURCING
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F3F3F3] font-[family-name:var(--font-cinzel)] leading-tight uppercase">
                One International Network. <br />
                <span className="text-[#E5CC64] relative inline-block pt-1">
                  Multiple Sourcing Markets.
                  <span className="absolute bottom-0 left-0 w-20 h-[2.5px] bg-[#E5CC64]"></span>
                </span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#F3F3F3]/80 leading-relaxed font-sans max-w-2xl">
              Our broader international sourcing network connects strategic sourcing
              opportunities across {secondaryMarket.toLowerCase()} and {currentMarket.toLowerCase()}, allowing buyers to
              explore suitable products according to origin, availability, specifications,
              quality, quantity, pricing and logistics.
            </p>

            {/* STRONGEST COMMERCIAL STATEMENT */}
            <div className="bg-[#F3F3F3]/5 border-l-4 border-[#E5CC64] p-5 border-y border-r border-[#F3F3F3]/15 shadow-sm space-y-1">
              <span className="text-[9px] font-mono text-[#E5CC64] uppercase tracking-widest block font-bold">
                COMMERCIAL NETWORK BENEFIT
              </span>
              <p className="text-xs sm:text-sm text-[#F3F3F3] font-semibold font-sans leading-relaxed">
                If you are looking to source from {secondaryMarket} or {currentMarket}, our
                international network gives you access to both markets through one professional
                business relationship.
              </p>
            </div>

            {/* CTAS */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href={globalSourcingPath}
                className="inline-flex items-center gap-3 bg-[#E5CC64] text-[#153B16] px-6 py-3 text-xs font-bold font-[family-name:var(--font-cinzel)] uppercase tracking-[0.2em] hover:bg-[#f2db7a] transition-all duration-300 shadow-sm"
              >
                <span>EXPLORE GLOBAL SOURCING</span>
                <span className="font-mono text-sm font-black">→</span>
              </Link>

              {hasUgandaPage && (
                <Link
                  href={secondaryMarketPath}
                  className="inline-flex items-center gap-2 border border-[#F3F3F3]/30 px-5 py-3 text-xs font-bold font-[family-name:var(--font-cinzel)] uppercase tracking-[0.2em] text-[#F3F3F3] hover:border-[#E5CC64] hover:text-[#E5CC64] transition-all duration-300"
                >
                  <span>EXPLORE {secondaryMarket}</span>
                </Link>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: MINIMAL NETWORK DIAGRAM */}
          <div className="lg:col-span-5 bg-[#F3F3F3]/5 border border-[#F3F3F3]/15 p-6 sm:p-8 space-y-6">
            <div className="border-b border-[#F3F3F3]/15 pb-3 flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-[#E5CC64] uppercase tracking-wider">
                NETWORK VISUALIZATION
              </span>
              <span className="text-[9px] font-mono text-[#F3F3F3]/50">
                STRATEGIC RELATIONS
              </span>
            </div>

            <div className="py-4 space-y-4 relative">
              {/* NODE 1: MADAGASCAR */}
              <div className="bg-[#153B16] border border-[#E5CC64]/40 p-3.5 text-center relative z-10 shadow-sm">
                <span className="text-[9px] font-mono text-[#E5CC64] uppercase tracking-widest block">
                  STRATEGIC MARKET
                </span>
                <h3 className="text-sm font-black font-[family-name:var(--font-cinzel)] text-[#F3F3F3] tracking-widest">
                  MADAGASCAR
                </h3>
                <span className="text-[9px] font-mono text-[#F3F3F3]/60 uppercase tracking-wider block mt-0.5">
                  SPECIALIZED SOURCING OPERATIONS
                </span>
              </div>

              {/* CONNECTOR LINE 1 */}
              <div className="flex flex-col items-center justify-center -my-1">
                <div className="w-[1.5px] h-6 bg-[#E5CC64]"></div>
                <div className="w-2 h-2 rotate-45 border-r border-b border-[#E5CC64] -mt-1.5"></div>
              </div>

              {/* NODE 2: HUB / NETWORK */}
              <div className="bg-[#E5CC64] text-[#153B16] p-4 text-center relative z-10 shadow-md">
                <span className="text-[9px] font-mono uppercase tracking-widest block font-bold text-[#153B16]/80">
                  CENTRAL FACILITATION
                </span>
                <h3 className="text-base font-extrabold font-[family-name:var(--font-cinzel)] tracking-widest uppercase">
                  BHATIA OCEAN GOLD
                </h3>
                <span className="text-[10px] font-mono uppercase tracking-widest font-black block text-[#153B16]/90">
                  (BOG INTERNATIONAL)
                </span>
              </div>

              {/* CONNECTOR LINE 2 */}
              <div className="flex flex-col items-center justify-center -my-1">
                <div className="w-[1.5px] h-6 bg-[#E5CC64]"></div>
                <div className="w-2 h-2 rotate-45 border-r border-b border-[#E5CC64] -mt-1.5"></div>
              </div>

              {/* NODE 3: UGANDA */}
              <div className="bg-[#153B16] border border-[#F3F3F3]/30 p-3.5 text-center relative z-10 shadow-sm">
                <span className="text-[9px] font-mono text-[#E5CC64] uppercase tracking-widest block">
                  STRATEGIC MARKET
                </span>
                <h3 className="text-sm font-black font-[family-name:var(--font-cinzel)] text-[#F3F3F3] tracking-widest">
                  UGANDA
                </h3>
                <span className="text-[9px] font-mono text-[#F3F3F3]/60 uppercase tracking-wider block mt-0.5">
                  REGIONAL AGRO & MINERAL SOURCING
                </span>
              </div>
            </div>

            <p className="text-[10px] font-mono text-[#F3F3F3]/60 text-center italic border-t border-[#F3F3F3]/10 pt-3">
              Note: Visual depicts strategic commercial facilitation across network markets.
            </p>
          </div>
        </div>

        {/* COMPACT CLIENT BENEFIT EDITORIAL STRIP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-b border-[#F3F3F3]/15 py-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[9px] font-mono text-[#E5CC64] uppercase tracking-widest block">
              BENEFIT 01
            </span>
            <p className="text-xs sm:text-sm font-extrabold font-[family-name:var(--font-cinzel)] text-[#F3F3F3] uppercase tracking-wider">
              ONE PROFESSIONAL BUSINESS NETWORK
            </p>
          </div>

          <div className="space-y-1 text-center md:text-left border-t md:border-t-0 md:border-l border-[#F3F3F3]/15 pt-3 md:pt-0 md:pl-6">
            <span className="text-[9px] font-mono text-[#E5CC64] uppercase tracking-widest block">
              BENEFIT 02
            </span>
            <p className="text-xs sm:text-sm font-extrabold font-[family-name:var(--font-cinzel)] text-[#F3F3F3] uppercase tracking-wider">
              TWO STRATEGIC SOURCING MARKETS
            </p>
          </div>

          <div className="space-y-1 text-center md:text-left border-t md:border-t-0 md:border-l border-[#F3F3F3]/15 pt-3 md:pt-0 md:pl-6">
            <span className="text-[9px] font-mono text-[#E5CC64] uppercase tracking-widest block">
              BENEFIT 03
            </span>
            <p className="text-xs sm:text-sm font-extrabold font-[family-name:var(--font-cinzel)] text-[#F3F3F3] uppercase tracking-wider">
              MULTIPLE PRODUCT CATEGORIES
            </p>
          </div>
        </div>

        {/* TRANSITION TO FINAL INQUIRY CTA */}
        <div className="text-center space-y-2 pt-2">
          <p className="text-xs sm:text-sm text-[#F3F3F3]/80 font-sans max-w-3xl mx-auto leading-relaxed">
            Whether your requirement is sourced from Madagascar or Uganda, tell us what product and specifications you are looking for.
          </p>
          <span className="text-[#E5CC64] text-xs font-mono font-bold block pt-1">
            ↓ INITIATE SOURCING INQUIRY BELOW
          </span>
        </div>
      </div>
    </section>
  );
}