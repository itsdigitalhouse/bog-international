"use client";

import React from "react";
import Link from "next/link";

export interface SourcingInquiryCTAProps {
  marketName?: string;
  inquiryPath?: string;
  globalSourcingPath?: string;
  heading?: string;
  description?: string;
  agroOperationName?: string;
  mineralOperationName?: string;
  backgroundImageUrl?: string;
}

export default function SourcingInquiryCTA({
  marketName = "Madagascar",
  inquiryPath = "/contact",
  globalSourcingPath = "/global-sourcing",
  heading = "Looking to Source from Madagascar?",
  description = "Tell us the product, quantity, specifications, preferred origin and destination you require. Our team can assess the appropriate sourcing opportunity and connect the requirement with the relevant Madagascar operation.",
  agroOperationName = "BEST SPICES OF MADAGASCAR (BMS)",
  mineralOperationName = "ALDO PARTNERS",
  backgroundImageUrl = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000",
}: SourcingInquiryCTAProps) {
  const briefRequirements = [
    {
      title: "PRODUCT",
      detail: "What commodity or product are you looking to source?",
    },
    {
      title: "QUANTITY",
      detail: "What volume or metric tonnage do you require?",
    },
    {
      title: "SPECIFICATIONS",
      detail: "What quality, grade or technical specifications apply?",
    },
    {
      title: "PREFERRED ORIGIN",
      detail: `${marketName} or another preferred strategic origin?`,
    },
    {
      title: "DESTINATION",
      detail: "Where does the product need to be delivered (Incoterms)?",
    },
    {
      title: "ADDITIONAL REQUIREMENTS",
      detail: "Any specific commercial, regulatory or logistical requirements?",
    },
  ];

  return (
    <section
      id="sourcing-inquiry-cta"
      className="bg-white text-[#153B16] relative border-b border-[#153B16]/20 overflow-hidden py-16 lg:py-24"
    >
      {/* VISIBLE BACKGROUND IMAGE LAYER (INCREASED OPACITY TO 35%) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      />

      {/* SOFT OVERLAY TO MAINTAIN TEXT READABILITY */}
      <div className="absolute inset-0 bg-white/40 pointer-events-none" />

      {/* BACKGROUND ARCHITECTURAL GRID LINES */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="max-w-[1400px] h-full mx-auto grid grid-cols-12 px-6 sm:px-12 border-x border-[#153B16]/10">
          <div className="col-span-12 lg:col-span-6 border-r border-[#153B16]/10 h-full hidden lg:block"></div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10 space-y-12 lg:space-y-16">
        {/* SECTION LABEL & SUB-LABEL */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#153B16]/15 pb-4 text-[11px] uppercase tracking-[0.25em] font-[family-name:var(--font-cinzel)] text-[#153B16]/80">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 bg-[#153B16] inline-block"></span>
            <span className="font-bold text-[#153B16]">
              06 — SOURCING INQUIRY
            </span>
          </div>
          <span className="hidden sm:inline tracking-[0.2em] font-mono text-[#153B16] font-extrabold">
            {marketName.toUpperCase()} OPERATIONS
          </span>
        </div>

        {/* MAIN COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT COLUMN: PRIMARY INQUIRY STATEMENT & CTAS */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#153B16] font-[family-name:var(--font-cinzel)] block">
                COMMERCIAL INQUIRY FACILITATION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#153B16] font-[family-name:var(--font-cinzel)] leading-tight uppercase">
                {heading}
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#153B16]/90 leading-relaxed font-sans font-medium max-w-xl">
              {description}
            </p>

            {/* PRIMARY & SECONDARY ACTIONS */}
            <div className="space-y-4 pt-2">
              <Link
                href={inquiryPath}
                className="inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-[#153B16] text-white px-8 py-4 text-xs sm:text-sm font-bold font-[family-name:var(--font-cinzel)] uppercase tracking-[0.2em] hover:bg-[#1e4e1f] transition-all duration-300 shadow-md group rounded-sm"
              >
                <span>SEND YOUR INQUIRY</span>
                <span className="font-mono text-sm font-black text-[#E5CC64] group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>

              {/* SECONDARY MARKET CONNECTION */}
              <div className="pt-3 border-t border-[#153B16]/15 space-y-1">
                <span className="text-[10px] font-mono text-[#153B16]/70 uppercase tracking-wider block font-semibold">
                  Need another sourcing market?
                </span>
                <Link
                  href={globalSourcingPath}
                  className="inline-flex items-center gap-2 text-xs font-bold font-[family-name:var(--font-cinzel)] uppercase tracking-[0.15em] text-[#153B16] hover:underline"
                >
                  <span>EXPLORE GLOBAL SOURCING</span>
                  <span className="font-mono text-[#153B16] font-bold">→</span>
                </Link>
                <p className="text-[10px] text-[#153B16]/70 font-sans font-medium">
                  Our broader network connects sourcing opportunities across Madagascar and Uganda.
                </p>
              </div>
            </div>

            {/* CLOSING NETWORK STATEMENT */}
            <div className="bg-[#153B16] border-l-4 border-[#E5CC64] p-4 text-white rounded-r-sm shadow-md">
              <p className="text-xs font-bold font-[family-name:var(--font-cinzel)] text-[#E5CC64] uppercase tracking-wider">
                One professional business relationship.
              </p>
              <p className="text-[11px] text-white/90 font-sans pt-0.5">
                Access to strategic sourcing opportunities across {marketName} and the broader international network.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: SOURCING BRIEF GUIDE & OPERATION ROUTING */}
          <div className="lg:col-span-6 space-y-6">
            {/* WHAT TO INCLUDE BRIEF PANEL */}
            <div className="bg-[#153B16] border border-[#153B16] p-6 sm:p-8 space-y-6 shadow-xl rounded-sm">
              <div className="border-b border-white/20 pb-3 flex items-center justify-between">
                <h3 className="text-xs sm:text-sm font-extrabold font-[family-name:var(--font-cinzel)] text-[#E5CC64] uppercase tracking-widest">
                  WHAT TO INCLUDE IN YOUR INQUIRY
                </h3>
                <span className="text-[9px] font-mono text-[#E5CC64] font-semibold">
                  SOURCING BRIEF
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {briefRequirements.map((req, idx) => (
                  <div
                    key={idx}
                    className="bg-[#1e4e1f] border border-[#E5CC64]/30 p-3 space-y-1 rounded-sm"
                  >
                    <span className="text-[9px] font-mono font-bold text-[#E5CC64] uppercase tracking-wider block">
                      {req.title}
                    </span>
                    <p className="text-[11px] text-white/90 font-sans leading-tight font-normal">
                      {req.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* OPERATION ROUTING INDICATOR */}
            <div className="bg-[#153B16] border border-[#153B16] p-5 space-y-3 shadow-xl rounded-sm">
              <span className="text-[9px] font-mono text-[#E5CC64] uppercase tracking-widest block font-bold">
                AUTOMATIC REQUIREMENT ROUTING
              </span>

              <div className="space-y-2 text-[11px] font-mono">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#1e4e1f] p-2.5 border border-[#E5CC64]/30 gap-1 sm:gap-0 rounded-sm">
                  <span className="text-white font-sans text-xs font-medium">AGRICULTURAL & FOOD PRODUCTS</span>
                  <span className="text-[#E5CC64] font-bold">→ {agroOperationName}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#1e4e1f] p-2.5 border border-[#E5CC64]/30 gap-1 sm:gap-0 rounded-sm">
                  <span className="text-white font-sans text-xs font-medium">MINING & MINERALS</span>
                  <span className="text-[#E5CC64] font-bold">→ {mineralOperationName}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COMMERCIAL QUALIFICATION NOTE */}
        <div className="border-t border-[#153B16]/20 pt-6 text-center space-y-1">
          <p className="text-[10px] font-mono text-[#153B16]/80 italic max-w-4xl mx-auto leading-relaxed font-medium">
            * Specific sourcing opportunities are subject to product availability, origin, quality, specifications, quantity, pricing, logistics and applicable legal regulations. Mining and mineral opportunities are also subject to applicable regulatory compliance.
          </p>
        </div>
      </div>
    </section>
  );
}