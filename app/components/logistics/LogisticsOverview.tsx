"use client";

import React from "react";

export default function LogisticsOverview() {
  return (
    <section className="relative bg-[#FFFFFF] text-[#153B16] py-16 lg:py-24 border-b border-[#153B16]/10 selection:bg-[#E5CC64] selection:text-[#153B16]">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 space-y-12 lg:space-y-16">
        
        {/* TOP SECTION IDENTIFIER */}
        <div className="flex items-center justify-between border-b border-[#153B16]/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#153B16]">
              02 — LOGISTICS OVERVIEW
            </span>
            <span className="h-[1px] w-8 bg-[#E5CC64] inline-block" />
          </div>
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#153B16]/60 font-semibold hidden sm:inline-block">
            THE ROLE OF LOGISTICS
          </span>
        </div>

        {/* 2-COLUMN MAIN EDITORIAL LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT SIDE: HEADINGS & METADATA */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            {/* REDUCED HEADING SIZE */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-[family-name:var(--font-cinzel)] tracking-tight leading-[1.15] text-[#153B16] uppercase">
              Connecting Sourcing <br />
              <span className="relative inline-block text-[#153B16]">
                with International
                <span className="block">Delivery.</span>
              </span>
            </h2>

            {/* METADATA STRIP */}
            <div className="pt-6 border-t border-[#153B16]/15 grid grid-cols-3 gap-4 text-[10px] font-mono text-[#153B16]">
              <div>
                <span className="text-[#153B16]/50 block uppercase font-bold text-[9px]">SOURCE</span>
                <span className="font-bold uppercase tracking-wider block mt-1">UGANDA &bull; MADAGASCAR</span>
              </div>
              <div>
                <span className="text-[#153B16]/50 block uppercase font-bold text-[9px]">FOCUS</span>
                <span className="font-bold uppercase tracking-wider block mt-1">COMMODITY SOURCING</span>
              </div>
              <div>
                <span className="text-[#153B16]/50 block uppercase font-bold text-[9px]">DESTINATION</span>
                <span className="font-bold uppercase tracking-wider block mt-1">GLOBAL BUYERS</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: CONTENT & 4 CONSIDERATIONS */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* EXPLANATORY PARAGRAPHS */}
            <div className="space-y-4 text-xs sm:text-sm text-[#153B16]/85 leading-relaxed font-sans max-w-2xl">
              <p className="text-sm sm:text-base text-[#153B16] font-normal leading-relaxed">
                International commodity sourcing involves more than identifying the right product and origin. The movement of goods from source to destination requires careful consideration of product requirements, documentation, shipment planning and the commercial conditions of the transaction.
              </p>
              <p>
                For BOG International, logistics forms part of the broader sourcing and trading process — helping connect origin-market requirements with the practical needs of international buyers.
              </p>
            </div>

            {/* EDITORIAL STATEMENT PAUSE */}
            <div className="py-5 border-y-2 border-[#153B16] my-6">
              <p className="text-lg sm:text-xl font-extrabold font-[family-name:var(--font-cinzel)] uppercase tracking-tight text-[#153B16]">
                LOGISTICS IS PART OF <br />
                <span className="text-[#E5CC64] bg-[#153B16] px-2 py-0.5 inline-block mt-1">
                  THE SOURCING PROCESS.
                </span>
              </p>
            </div>

            {/* THE LOGISTICS CONSIDERATIONS LIST */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#153B16] border-b border-[#153B16]/15 pb-2">
                THE LOGISTICS CONSIDERATIONS
              </h3>

              <div className="divide-y divide-[#153B16]/15 border-b border-[#153B16]/15">
                
                {/* 01 */}
                <div className="group py-4 transition-colors duration-200 hover:bg-[#F3F3F3] px-3 -mx-3">
                  <div className="flex gap-4 sm:gap-6 items-start">
                    <span className="text-xs font-mono font-bold text-[#153B16] group-hover:text-[#E5CC64] transition-colors pt-0.5">
                      01
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-[#153B16]">
                        PRODUCT REQUIREMENTS
                      </h4>
                      <p className="text-xs text-[#153B16]/80 font-sans leading-relaxed">
                        Understanding the commodity, specifications, quality and quantity required.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 02 */}
                <div className="group py-4 transition-colors duration-200 hover:bg-[#F3F3F3] px-3 -mx-3">
                  <div className="flex gap-4 sm:gap-6 items-start">
                    <span className="text-xs font-mono font-bold text-[#153B16] group-hover:text-[#E5CC64] transition-colors pt-0.5">
                      02
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-[#153B16]">
                        ORIGIN COORDINATION
                      </h4>
                      <p className="text-xs text-[#153B16]/80 font-sans leading-relaxed">
                        Aligning sourcing requirements with the relevant origin market and available supply.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 03 */}
                <div className="group py-4 transition-colors duration-200 hover:bg-[#F3F3F3] px-3 -mx-3">
                  <div className="flex gap-4 sm:gap-6 items-start">
                    <span className="text-xs font-mono font-bold text-[#153B16] group-hover:text-[#E5CC64] transition-colors pt-0.5">
                      03
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-[#153B16]">
                        DOCUMENTATION & SHIPMENT
                      </h4>
                      <p className="text-xs text-[#153B16]/80 font-sans leading-relaxed">
                        Considering the documentation and shipment requirements associated with the transaction.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 04 */}
                <div className="group py-4 transition-colors duration-200 hover:bg-[#F3F3F3] px-3 -mx-3">
                  <div className="flex gap-4 sm:gap-6 items-start">
                    <span className="text-xs font-mono font-bold text-[#153B16] group-hover:text-[#E5CC64] transition-colors pt-0.5">
                      04
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-[#153B16]">
                        DESTINATION REQUIREMENTS
                      </h4>
                      <p className="text-xs text-[#153B16]/80 font-sans leading-relaxed">
                        Taking account of the buyer's destination, delivery requirements and applicable logistics considerations.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* BOTTOM STATEMENT */}
            <div className="bg-[#F3F3F3] border-l-2 border-[#153B16] p-4">
              <p className="text-xs text-[#153B16]/80 leading-relaxed font-sans">
                Each transaction may require a different combination of sourcing, documentation, shipment and destination considerations depending on the product and buyer requirements.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}