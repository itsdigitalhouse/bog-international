"use client";

import React, { useState } from "react";

export default function LogisticsNetwork() {
  const [selectedOrigin, setSelectedOrigin] = useState<"uganda" | "madagascar">("uganda");

  return (
    <section className="relative bg-[#F3F3F3] text-[#153B16] py-20 lg:py-28 border-b border-[#153B16]/10 selection:bg-[#E5CC64] selection:text-[#153B16]">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 space-y-16">
        
        {/* TOP SECTION IDENTIFIER */}
        <div className="flex items-center justify-between border-b border-[#153B16]/20 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#153B16]">
              03 — LOGISTICS NETWORK
            </span>
            <span className="h-[1px] w-8 bg-[#E5CC64] inline-block" />
          </div>
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#153B16]/60 font-semibold hidden sm:inline-block">
            SOURCING & TRADE CORRIDORS
          </span>
        </div>

        {/* SECTION HEADER: CONTROLLED & DIRECT */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-[family-name:var(--font-cinzel)] tracking-tight text-[#153B16] uppercase leading-tight">
            How Trade Moves: <br />
            <span className="text-[#153B16]">Origin to Global Destinations</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#153B16]/80 font-sans leading-relaxed">
            International logistics is not a static list—it is an active corridor linking specific origins to global buyers. Select an origin market below to examine its specific sourcing-to-export trade route.
          </p>
        </div>

        {/* INTERACTIVE ROUTE SWITCHER (CHANGES THE STORY) */}
        <div className="flex flex-wrap gap-4 border-b border-[#153B16]/15 pb-6">
          <button
            onClick={() => setSelectedOrigin("uganda")}
            className={`px-6 py-3 text-xs font-mono font-bold uppercase tracking-[0.2em] transition-all duration-200 border ${
              selectedOrigin === "uganda"
                ? "bg-[#153B16] text-[#FFFFFF] border-[#153B16]"
                : "bg-[#FFFFFF] text-[#153B16] border-[#153B16]/30 hover:border-[#153B16]"
            }`}
          >
            CORRIDOR 01: UGANDA (EAST AFRICA)
          </button>
          <button
            onClick={() => setSelectedOrigin("madagascar")}
            className={`px-6 py-3 text-xs font-mono font-bold uppercase tracking-[0.2em] transition-all duration-200 border ${
              selectedOrigin === "madagascar"
                ? "bg-[#153B16] text-[#FFFFFF] border-[#153B16]"
                : "bg-[#FFFFFF] text-[#153B16] border-[#153B16]/30 hover:border-[#153B16]"
            }`}
          >
            CORRIDOR 02: MADAGASCAR (INDIAN OCEAN)
          </button>
        </div>

        {/* VISUAL TRADE ROUTE STEP-BY-STEP MAP (HORIZONTAL PROCESS STORY) */}
        <div className="bg-[#FFFFFF] border border-[#153B16]/20 p-6 sm:p-10 space-y-8 shadow-sm">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#153B16]/10 pb-4">
            <div>
              <span className="text-[10px] font-mono text-[#153B16]/60 uppercase tracking-widest block">
                ACTIVE SOURCING ROUTE
              </span>
              <h3 className="text-base font-mono font-bold uppercase tracking-wider text-[#153B16] mt-0.5">
                {selectedOrigin === "uganda" ? "UGANDA ORIGIN CORRIDOR" : "MADAGASCAR ORIGIN CORRIDOR"}
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-[#E5CC64] bg-[#153B16] px-3 py-1 uppercase tracking-widest">
              {selectedOrigin === "uganda" ? "AGRO & MINERALS" : "METALS & SPECIALTY COMMODITIES"}
            </span>
          </div>

          {/* 4-STEP HORIZONTAL PIPELINE */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            
            {/* STEP 1 */}
            <div className="space-y-3 relative">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#153B16] text-[#E5CC64] text-[10px] font-mono font-bold flex items-center justify-center">
                  01
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#153B16]/60">
                  ORIGIN SOURCING
                </span>
              </div>
              <h4 className="text-xs font-mono font-bold uppercase text-[#153B16]">
                {selectedOrigin === "uganda" ? "Regional Collection" : "Local Producer Aggregation"}
              </h4>
              <p className="text-xs text-[#153B16]/80 leading-relaxed font-sans">
                {selectedOrigin === "uganda"
                  ? "Consolidation of agricultural goods and minerals within domestic hubs."
                  : "Direct alignment with verified local miners and specialized producers."}
              </p>
            </div>

            {/* STEP 2 */}
            <div className="space-y-3 relative">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#153B16] text-[#E5CC64] text-[10px] font-mono font-bold flex items-center justify-center">
                  02
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#153B16]/60">
                  SPECIFICATION & QUALITY
                </span>
              </div>
              <h4 className="text-xs font-mono font-bold uppercase text-[#153B16]">
                Inspection & Sorting
              </h4>
              <p className="text-xs text-[#153B16]/80 leading-relaxed font-sans">
                {selectedOrigin === "uganda"
                  ? "Moisture testing, grade classification, and international packing setup."
                  : "Assaying, mineral purity verification, and secure compliance sealing."}
              </p>
            </div>

            {/* STEP 3 */}
            <div className="space-y-3 relative">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#153B16] text-[#E5CC64] text-[10px] font-mono font-bold flex items-center justify-center">
                  03
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#153B16]/60">
                  EXPORT CLEARANCE
                </span>
              </div>
              <h4 className="text-xs font-mono font-bold uppercase text-[#153B16]">
                Port & Customs Dispatch
              </h4>
              <p className="text-xs text-[#153B16]/80 leading-relaxed font-sans">
                {selectedOrigin === "uganda"
                  ? "Mombasa / Dar es Salaam port route staging and phytosanitary clearance."
                  : "Antananarivo / Toamasina port export documentation and customs sign-off."}
              </p>
            </div>

            {/* STEP 4 */}
            <div className="space-y-3 relative">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#153B16] text-[#E5CC64] text-[10px] font-mono font-bold flex items-center justify-center">
                  04
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#153B16]/60">
                  DESTINATION DELIVERY
                </span>
              </div>
              <h4 className="text-xs font-mono font-bold uppercase text-[#153B16]">
                Global Buyer Transfer
              </h4>
              <p className="text-xs text-[#153B16]/80 leading-relaxed font-sans">
                Commercial delivery execution across Middle East, European, and Asian destination ports.
              </p>
            </div>

          </div>

        </div>

        {/* BOTTOM SUMMARY FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-xs font-mono text-[#153B16]">
          <div className="border-l-2 border-[#153B16] pl-4 space-y-1">
            <span className="text-[10px] text-[#153B16]/60 uppercase font-bold">TRANSACTION TYPE</span>
            <p className="font-sans font-medium text-[#153B16]/80">Bulk commodity contracts & spot sourcing orders</p>
          </div>
          <div className="border-l-2 border-[#153B16] pl-4 space-y-1">
            <span className="text-[10px] text-[#153B16]/60 uppercase font-bold">INCOTERMS SUPPORTED</span>
            <p className="font-sans font-medium text-[#153B16]/80">FOB, CFR, CIF negotiated per contract agreement</p>
          </div>
          <div className="border-l-2 border-[#153B16] pl-4 space-y-1">
            <span className="text-[10px] text-[#153B16]/60 uppercase font-bold">COMPLIANCE</span>
            <p className="font-sans font-medium text-[#153B16]/80">Origin certificates, bill of lading & trade documentation</p>
          </div>
        </div>

      </div>
    </section>
  );
}