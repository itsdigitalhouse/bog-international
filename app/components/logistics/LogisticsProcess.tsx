"use client";

import React, { useState } from "react";

export default function LogisticsProcess() {
  const [activeStage, setActiveStage] = useState<0 | 1 | 2>(0);

  const stages = [
    {
      id: "STAGE 01",
      title: "Commercial & Origin Alignment",
      subtitle: "CONTRACT & SPECIFICATION SETUP",
      desc: "Evaluating commodity parameters, purity/grade specifications, target quantities, and establishing agreed commercial terms (Incoterms) prior to origin execution.",
      protocols: [
        { label: "SPECIFICATION AUDIT", detail: "Quality grade & moisture tolerance verification against buyer contract." },
        { label: "INCOTERMS STRUCTURE", detail: "FOB, CFR, or CIF risk allocation defined per transaction." },
        { label: "ORIGIN FEASIBILITY", detail: "Supply availability check across Uganda or Madagascar corridors." }
      ]
    },
    {
      id: "STAGE 02",
      title: "Documentation & Export Handling",
      subtitle: "COMPLIANCE & DISPATCH STAGING",
      desc: "Coordinating export permits, certificates of origin, quality inspection reports, and customs documentation necessary for seamless port dispatch.",
      protocols: [
        { label: "QUALITY CERTIFICATION", detail: "Independent assaying, phytosanitary seals, and weight certificates." },
        { label: "CUSTOMS CLEARANCE", detail: "Export license alignment and origin customs documentation sign-off." },
        { label: "SHIPMENT BOOKING", detail: "Container/vessel allocation and transport dispatch staging." }
      ]
    },
    {
      id: "STAGE 03",
      title: "Transit & Destination Transfer",
      subtitle: "FULFILLMENT & HANDOVER",
      desc: "Monitoring movement from origin port through to destination receipt, ensuring documentation accuracy aligns with buyer import requirements.",
      protocols: [
        { label: "TRANSPORT ADVICE", detail: "Bill of Lading issuance and vessel tracking notification." },
        { label: "IMPORT ALIGNMENT", detail: "Destination port regulatory compliance and customs document transfer." },
        { label: "SETTLEMENT COMPLETION", detail: "Final commercial invoice reconciliation and buyer delivery receipt." }
      ]
    }
  ];

  return (
    <section className="relative w-full bg-[#FFFFFF] text-[#153B16] py-16 lg:py-24 border-b border-[#153B16]/10 selection:bg-[#E5CC64] selection:text-[#153B16]">
      
      {/* FULL WIDTH CONTAINER WITH FLUID EDGE PADDING */}
      <div className="w-full px-4 sm:px-8 lg:px-16 space-y-12 lg:space-y-16">
        
        {/* TOP SECTION IDENTIFIER */}
        <div className="flex items-center justify-between border-b border-[#153B16]/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#153B16]">
              04 — LOGISTICS PROCESS
            </span>
            <span className="h-[1px] w-12 bg-[#E5CC64] inline-block" />
          </div>
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#153B16]/60 font-semibold hidden sm:inline-block">
            OPERATIONAL PROTOCOL MATRIX
          </span>
        </div>

        {/* SECTION HEADER */}
        <div className="max-w-4xl space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-[family-name:var(--font-cinzel)] tracking-tight text-[#153B16] uppercase leading-tight">
            A Structured Approach <br />
            <span className="text-[#153B16]">to International Movement.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#153B16]/80 font-sans leading-relaxed">
            Every commodity transaction follows a strict 3-stage execution protocol to ensure physical supply matches commercial expectations.
          </p>
        </div>

        {/* TOP STAGE SELECTOR (FULL WIDTH 3-COLUMN INTERACTIVE HEADER) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 w-full">
          {stages.map((stage, idx) => (
            <button
              key={stage.id}
              onClick={() => setActiveStage(idx as 0 | 1 | 2)}
              className={`p-6 text-left border transition-all duration-200 w-full ${
                activeStage === idx
                  ? "bg-[#153B16] text-[#FFFFFF] border-[#153B16] shadow-sm"
                  : "bg-[#FFFFFF] text-[#153B16] border-[#153B16]/20 hover:border-[#153B16]"
              }`}
            >
              <div className="flex items-center justify-between border-b pb-3 mb-3 border-current/20">
                <span className={`text-[10px] font-mono font-bold tracking-widest uppercase ${
                  activeStage === idx ? "text-[#E5CC64]" : "text-[#153B16]"
                }`}>
                  {stage.id}
                </span>
                <span className="text-[9px] font-mono uppercase opacity-60">
                  {idx === 0 ? "PHASE I" : idx === 1 ? "PHASE II" : "PHASE III"}
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider">
                {stage.title}
              </h3>
            </button>
          ))}
        </div>

        {/* ACTIVE STAGE DETAIL DISPLAY (FULL WIDTH PROTOCOL BOX) */}
        <div className="bg-[#F3F3F3] border border-[#153B16]/20 p-6 sm:p-10 lg:p-12 space-y-8 w-full">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#153B16]/15 pb-4">
            <div>
              <span className="text-[10px] font-mono text-[#153B16]/60 uppercase tracking-widest block">
                ACTIVE EXECUTION PHASE &bull; {stages[activeStage].id}
              </span>
              <h3 className="text-base sm:text-lg font-mono font-bold uppercase tracking-wider text-[#153B16] mt-0.5">
                {stages[activeStage].title}
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-[#E5CC64] bg-[#153B16] px-3 py-1 uppercase tracking-widest">
              {stages[activeStage].subtitle}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#153B16]/85 font-sans leading-relaxed max-w-4xl">
            {stages[activeStage].desc}
          </p>

          {/* PROTOCOLS BREAKDOWN GRID (FLUID 3-COLUMNS) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 w-full">
            {stages[activeStage].protocols.map((item, i) => (
              <div key={i} className="bg-[#FFFFFF] border border-[#153B16]/15 p-5 space-y-2">
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#E5CC64] bg-[#153B16] px-2 py-0.5 inline-block">
                  PROTOCOL 0{i + 1}
                </span>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#153B16]">
                  {item.label}
                </h4>
                <p className="text-xs text-[#153B16]/80 font-sans leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* BOTTOM FULL WIDTH STATEMENT */}
        <div className="bg-[#FFFFFF] border-l-2 border-[#153B16] p-4 sm:p-6 text-xs font-mono text-[#153B16] w-full">
          <p className="text-[#153B16]/80 font-sans">
            <strong className="font-mono text-[#153B16] uppercase">COMMERCIAL ACCURACY:</strong> Logistics protocols are tailored to specific product grades and buyer destination regulations to eliminate delays at port customs.
          </p>
        </div>

      </div>
    </section>
  );
}