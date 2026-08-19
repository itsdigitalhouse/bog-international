"use client";

import React, { useState } from "react";

interface SourcingFactor {
  number: string;
  id: string;
  title: string;
  query: string;
  detail: string;
}

export default function UgandaSourcingModel() {
  const [activeFactor, setActiveFactor] = useState<string | null>("01");

  const factors: SourcingFactor[] = [
    {
      number: "01",
      id: "01",
      title: "PRODUCT",
      query: "What does the buyer need?",
      detail:
        "Identification of the specific commodity, underlying trade class, and primary raw characteristics required for the commercial engagement.",
    },
    {
      number: "02",
      id: "02",
      title: "ORIGIN",
      query: "What origin or source requirements apply?",
      detail:
        "Assessment of Uganda-origin sourcing options, verifying regional extraction, harvesting, or local supply chain origin parameters.",
    },
    {
      number: "03",
      id: "03",
      title: "QUALITY",
      query: "What quality, grade or standard is required?",
      detail:
        "Evaluation against international trade standards, purity metrics, agricultural grades, or mineral assays requested by the buyer.",
    },
    {
      number: "04",
      id: "04",
      title: "SPECIFICATIONS",
      query: "What technical or commercial specifications must be met?",
      detail:
        "Verification of technical parameters, moisture levels, metal purity percentages, packaging standards, and processing requirements.",
    },
    {
      number: "05",
      id: "05",
      title: "QUANTITY",
      query: "What volume or quantity is required?",
      detail:
        "Matching required transaction volumes against current regional supply capacity, batch availability, and scalable fulfillment terms.",
    },
    {
      number: "06",
      id: "06",
      title: "PRICING & LOGISTICS",
      query: "What commercial terms, destination and logistics apply?",
      detail:
        "Aligning Incoterms, freight logistics, destination port requirements, commercial pricing structures, and customs compliance.",
    },
  ];

  const buyerRequirementFields = [
    { label: "COMMODITY / PRODUCT", code: "REQ-01" },
    { label: "REQUIRED QUANTITY", code: "REQ-02" },
    { label: "TECHNICAL SPECS", code: "REQ-03" },
    { label: "PREFERRED ORIGIN", code: "REQ-04" },
    { label: "DESTINATION PORT", code: "REQ-05" },
    { label: "ADDITIONAL TERMS", code: "REQ-06" },
  ];

  return (
    <section
      id="sourcing-framework"
      className="bg-[#153B16] text-[#F3F3F3] relative border-b border-[#E5CC64]/15 overflow-hidden py-16 lg:py-24"
    >
      {/* Structural Institutional Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="max-w-[1400px] h-full mx-auto grid grid-cols-12 px-6 sm:px-12 border-x border-[#F3F3F3]/20">
          <div className="col-span-12 lg:col-span-5 border-r border-[#F3F3F3]/20 h-full hidden lg:block"></div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
        {/* SECTION LABEL & SUB-LABEL */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#F3F3F3]/15 pb-4 mb-12 text-[11px] uppercase tracking-[0.25em] font-[family-name:var(--font-cinzel)] text-[#F3F3F3]/70">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 bg-[#E5CC64] inline-block"></span>
            <span className="font-bold text-[#F3F3F3]">
              04 — SOURCING MODEL
            </span>
          </div>
          <span className="hidden sm:inline tracking-[0.2em] text-[#E5CC64]">
            UGANDA SOURCING FRAMEWORK
          </span>
        </div>

        {/* MAIN EDITORIAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: Section Overview & Methodology context */}
          <div className="lg:col-span-5 lg:sticky lg:top-12 space-y-8 pr-0 lg:pr-4">
            <div className="space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#E5CC64] font-[family-name:var(--font-cinzel)] block">
                STRUCTURED PROCUREMENT METHODOLOGY
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F3F3F3] font-[family-name:var(--font-cinzel)] leading-tight uppercase">
                From Requirement <br />
                <span className="text-[#E5CC64] relative inline-block pt-1">
                  To Sourcing Opportunity
                </span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#F3F3F3]/80 leading-relaxed font-sans max-w-md">
              Every sourcing requirement begins with the buyer&apos;s specific
              product needs. Our Uganda operation assesses the relevant product,
              origin, quality, specifications, quantity, pricing and logistics
              to identify an appropriate sourcing opportunity.
            </p>

            {/* COMMERCIAL METHODOLOGY STATEMENT */}
            <div className="border-l-2 border-[#E5CC64] bg-[#F3F3F3]/5 p-5 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E5CC64] font-[family-name:var(--font-cinzel)] block">
                COMMERCIAL STATEMENT
              </span>
              <p className="text-xs text-[#F3F3F3]/90 font-sans italic leading-relaxed">
                &ldquo;The objective is not simply to identify a product, but to
                identify a sourcing opportunity that aligns with the
                buyer&apos;s requirements and the available market
                conditions.&rdquo;
              </p>
            </div>

            {/* UGANDA CONTEXT MINI CARD */}
            <div className="border border-[#F3F3F3]/15 bg-[#153B16]/80 p-4 space-y-2">
              <div className="flex items-center justify-between border-b border-[#F3F3F3]/10 pb-2">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#E5CC64] font-[family-name:var(--font-cinzel)]">
                  UGANDA SOURCING OPERATION
                </span>
                <span className="w-1.5 h-1.5 bg-[#E5CC64] rounded-full"></span>
              </div>
              <p className="text-[11px] font-bold text-[#F3F3F3] font-[family-name:var(--font-cinzel)] tracking-wide">
                BHATIA OCEAN GOLD (BOG INTERNATIONAL)
              </p>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono text-[#F3F3F3]/60 pt-1">
                <span>[ Minerals ]</span>
                <span>[ Agricultural Products ]</span>
                <span>[ Natural Resources ]</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Sequential Vertical Sourcing Progression */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F3F3F3]/50 font-[family-name:var(--font-cinzel)] pb-2 border-b border-[#F3F3F3]/15">
              EVALUATION PIPELINE (01 → 06)
            </div>

            <div className="relative pl-3 sm:pl-6 space-y-4">
              {/* Vertical Connecting Guide Line */}
              <div className="absolute left-[23px] sm:left-[35px] top-6 bottom-6 w-[1.5px] bg-gradient-to-b from-[#E5CC64] via-[#F3F3F3]/20 to-[#E5CC64]/40 -z-0"></div>

              {factors.map((factor, index) => {
                const isSelected = activeFactor === factor.id;
                return (
                  <div
                    key={factor.id}
                    onMouseEnter={() => setActiveFactor(factor.id)}
                    className={`relative z-10 p-5 sm:p-6 transition-all duration-300 border ${
                      isSelected
                        ? "bg-[#F3F3F3]/10 border-[#E5CC64] shadow-lg"
                        : "bg-[#153B16] border-[#F3F3F3]/15 hover:border-[#F3F3F3]/40"
                    }`}
                  >
                    <div className="flex items-start gap-4 sm:gap-6">
                      {/* Factor Index Badge */}
                      <div
                        className={`w-9 h-9 sm:w-11 sm:h-11 shrink-0 flex items-center justify-center font-mono font-bold text-xs sm:text-sm border transition-colors duration-300 ${
                          isSelected
                            ? "bg-[#E5CC64] text-[#153B16] border-[#E5CC64]"
                            : "bg-[#153B16] text-[#E5CC64] border-[#E5CC64]/40"
                        }`}
                      >
                        {factor.number}
                      </div>

                      {/* Content Stack */}
                      <div className="space-y-1.5 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-base sm:text-lg font-extrabold tracking-wider text-[#F3F3F3] font-[family-name:var(--font-cinzel)]">
                            {factor.title}
                          </h3>
                          <span className="text-[10px] font-mono text-[#E5CC64]/80 uppercase tracking-widest">
                            {factor.query}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-[#F3F3F3]/80 font-sans leading-relaxed pt-1">
                          {factor.detail}
                        </p>

                        {/* Progression Arrow Indicator */}
                        {index < factors.length - 1 && (
                          <div className="pt-2 text-right">
                            <span className="text-[10px] font-mono text-[#E5CC64]/50">
                              ↓ NEXT EVALUATION STEP
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* BUYER REQUIREMENTS: WHAT WE NEED TO KNOW */}
        <div className="mt-16 pt-10 border-t border-[#F3F3F3]/15 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#E5CC64] font-[family-name:var(--font-cinzel)] block">
                PREPARATION FOR INQUIRY
              </span>
              <h4 className="text-base sm:text-lg font-bold text-[#F3F3F3] font-[family-name:var(--font-cinzel)]">
                WHAT WE NEED TO KNOW
              </h4>
            </div>
            <p className="text-xs text-[#F3F3F3]/70 font-sans max-w-md">
              To evaluate a sourcing requirement efficiently, international
              buyers can provide the following operational parameters:
            </p>
          </div>

          {/* Refined Metadata Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {buyerRequirementFields.map((field) => (
              <div
                key={field.code}
                className="bg-[#F3F3F3]/5 border border-[#F3F3F3]/15 p-3 space-y-1 hover:border-[#E5CC64]/60 transition-colors"
              >
                <span className="text-[9px] font-mono text-[#E5CC64] block">
                  {field.code}
                </span>
                <span className="text-[11px] font-bold text-[#F3F3F3] font-[family-name:var(--font-cinzel)] tracking-wide block">
                  {field.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* IMPORTANT COMMERCIAL QUALIFICATION */}
        <div className="mt-12 text-center border-t border-[#F3F3F3]/10 pt-6">
          <p className="text-[11px] text-[#F3F3F3]/60 font-sans italic leading-relaxed max-w-3xl mx-auto">
            <strong className="not-italic text-[#E5CC64] font-mono uppercase tracking-wider">
              Commercial Qualification Notice:
            </strong>{" "}
            Sourcing opportunities are subject to product availability, origin,
            quality, specifications, quantity, pricing, logistics and applicable
            commercial requirements.
          </p>
        </div>
      </div>
    </section>
  );
}