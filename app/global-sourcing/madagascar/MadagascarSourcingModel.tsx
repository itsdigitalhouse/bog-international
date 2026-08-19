"use client";

import React from "react";

export default function MadagascarSourcingModel() {
  const sourcingFactors = [
    {
      num: "01",
      title: "PRODUCT",
      desc: "Identification of the specific commodity, crop, or mineral material required.",
    },
    {
      num: "02",
      title: "ORIGIN",
      desc: "Verification of Madagascar regional origin and specific local sourcing parameters.",
    },
    {
      num: "03",
      title: "QUALITY",
      desc: "Assessment of required quality, grade, purity, or standardized industry benchmarks.",
    },
    {
      num: "04",
      title: "SPECIFICATIONS",
      desc: "Review of technical parameters, moisture levels, grain size, or mineral composition.",
    },
    {
      num: "05",
      title: "QUANTITY",
      desc: "Evaluation of required order volume, batch capacity, or ongoing supply schedule.",
    },
    {
      num: "06",
      title: "COMMERCIAL + LOGISTICS",
      desc: "Structuring target pricing, destination Incoterms, freight shipping, and regulatory compliance.",
    },
  ];

  const agroInquirySpecs = [
    { label: "PRODUCT", val: "Agro / Food Commodity" },
    { label: "GRADE / QUALITY", val: "Export Grade / Purity Standard" },
    { label: "QUANTITY", val: "Volume / Tonnage Requirements" },
  ];

  const mineralInquirySpecs = [
    { label: "MATERIAL TYPE", val: "Mineral / Natural Resource" },
    { label: "SPECIFICATIONS", val: "Composition / Grade Analysis" },
    { label: "REGULATIONS", val: "Permit & Export Compliance" },
  ];

  return (
    <section
      id="madagascar-sourcing-model"
      className="bg-white text-[#153B16] relative border-b border-[#153B16]/20 overflow-hidden py-16 lg:py-24"
    >
      {/* Editorial Watermark & Architectural Background Grid */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[180px] sm:text-[280px] font-black text-[#153B16]/[0.03] font-[family-name:var(--font-cinzel)] select-none pointer-events-none leading-none pl-4 hidden sm:block">
        FRAMEWORK
      </div>

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
              04 — SOURCING MODEL
            </span>
          </div>
          <span className="hidden sm:inline tracking-[0.2em] font-mono text-[#153B16] font-extrabold">
            MADAGASCAR SOURCING FRAMEWORK
          </span>
        </div>

        {/* SECTION HEADING & INTRODUCTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#153B16] font-[family-name:var(--font-cinzel)] block">
              METHODOLOGY & EVALUATION
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#153B16] font-[family-name:var(--font-cinzel)] leading-tight uppercase">
              From Buyer Requirement <br />
              <span className="text-[#153B16] relative inline-block pt-1">
                to Sourcing Opportunity.
                <span className="absolute bottom-0 left-0 w-20 h-[2.5px] bg-[#E5CC64]"></span>
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#153B16]/90 leading-relaxed font-sans font-medium">
              Madagascar sourcing requirements are assessed according to the product category,
              origin, quality, specifications, quantity, commercial requirements, logistics and
              applicable regulations. The appropriate local operation is then identified according
              to the nature of the requirement.
            </p>
          </div>
        </div>

        {/* CORE 6-FACTOR FRAMEWORK GRID */}
        <div className="space-y-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#153B16] font-bold block border-b border-[#153B16]/20 pb-2">
            6-FACTOR EVALUATION CRITERIA
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sourcingFactors.map((factor) => (
              <div
                key={factor.num}
                className="bg-[#153B16] border border-[#153B16] p-6 space-y-3 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group rounded-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-white/20 pb-2">
                    <span className="text-xl font-black font-mono text-[#E5CC64]">
                      {factor.num}
                    </span>
                    <span className="text-[9px] font-mono text-[#E5CC64] font-semibold">
                      EVALUATION STEP
                    </span>
                  </div>
                  <h3 className="text-sm font-bold font-[family-name:var(--font-cinzel)] tracking-wider uppercase text-white">
                    {factor.title}
                  </h3>
                  <p className="text-xs text-white/90 leading-relaxed font-sans font-normal">
                    {factor.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DUAL SOURCING PATH (DECISION TREE) */}
        <div className="bg-[#153B16] border border-[#153B16] p-6 sm:p-10 space-y-8 rounded-sm shadow-xl">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-[10px] font-mono text-[#E5CC64] uppercase tracking-widest block font-bold">
              CATEGORY ROUTING ARCHITECTURE
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-[family-name:var(--font-cinzel)] text-white uppercase tracking-wide">
              REQUIREMENT EVALUATION & ROUTING PATH
            </h3>
            <p className="text-xs text-white/80 font-sans font-normal">
              Upon initial technical assessment, the requirement is routed directly to the specialized operation handling that precise commodity class.
            </p>
          </div>

          {/* VISUAL ROUTING CONNECTOR */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative items-stretch pt-4">
            {/* PATH A: AGRICULTURE & FOOD */}
            <div className="bg-[#1e4e1f] border border-[#E5CC64]/40 p-6 space-y-6 flex flex-col justify-between relative group hover:border-[#E5CC64] transition-colors rounded-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/20 pb-3">
                  <span className="text-[10px] font-mono font-bold text-[#E5CC64] tracking-widest uppercase">
                    PATH 01
                  </span>
                  <span className="text-[9px] font-mono text-white bg-white/10 px-2 py-0.5 rounded-sm font-semibold">
                    AGRO-COMMODITIES
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-[#E5CC64] uppercase tracking-wider block font-bold">
                    PRODUCT CATEGORY MATCH
                  </span>
                  <h4 className="text-lg font-bold font-[family-name:var(--font-cinzel)] text-white uppercase">
                    AGRICULTURAL & FOOD PRODUCTS
                  </h4>
                </div>

                <div className="flex items-center justify-center py-2 text-[#E5CC64]">
                  <span className="font-mono text-xs uppercase tracking-widest font-bold">↓ ROUTED TO SPECIALIZED OPERATION ↓</span>
                </div>

                <div className="bg-[#153B16] border border-[#E5CC64]/50 p-4 text-center space-y-1 rounded-sm">
                  <span className="text-[9px] font-mono text-[#E5CC64] font-bold uppercase tracking-widest block">
                    OPERATIONAL ENTITY
                  </span>
                  <h5 className="text-base font-extrabold font-[family-name:var(--font-cinzel)] text-white uppercase">
                    BEST SPICES OF MADAGASCAR (BMS)
                  </h5>
                </div>
              </div>

              <p className="text-[11px] text-white/90 font-sans italic border-t border-white/20 pt-3">
                Handles evaluation, quality grading, and commercial export logistics for spices, vanilla, grains, and agricultural goods.
              </p>
            </div>

            {/* PATH B: MINING & MINERALS */}
            <div className="bg-[#1e4e1f] border border-[#E5CC64]/40 p-6 space-y-6 flex flex-col justify-between relative group hover:border-[#E5CC64] transition-colors rounded-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/20 pb-3">
                  <span className="text-[10px] font-mono font-bold text-[#E5CC64] tracking-widest uppercase">
                    PATH 02
                  </span>
                  <span className="text-[9px] font-mono text-white bg-white/10 px-2 py-0.5 rounded-sm font-semibold">
                    NATURAL RESOURCES
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-[#E5CC64] uppercase tracking-wider block font-bold">
                    PRODUCT CATEGORY MATCH
                  </span>
                  <h4 className="text-lg font-bold font-[family-name:var(--font-cinzel)] text-white uppercase">
                    MINING & MINERALS
                  </h4>
                </div>

                <div className="flex items-center justify-center py-2 text-[#E5CC64]">
                  <span className="font-mono text-xs uppercase tracking-widest font-bold">↓ ROUTED TO SPECIALIZED OPERATION ↓</span>
                </div>

                <div className="bg-[#153B16] border border-[#E5CC64]/50 p-4 text-center space-y-1 rounded-sm">
                  <span className="text-[9px] font-mono text-[#E5CC64] font-bold uppercase tracking-widest block">
                    OPERATIONAL ENTITY
                  </span>
                  <h5 className="text-base font-extrabold font-[family-name:var(--font-cinzel)] text-white uppercase">
                    ALDO PARTNERS
                  </h5>
                </div>
              </div>

              <div className="space-y-1 border-t border-white/20 pt-3">
                <p className="text-[11px] text-white/90 font-sans italic">
                  Handles specialized mineral assessment, extraction logistics, and commodity trade for gold, chrome, and stones.
                </p>
                <span className="text-[9px] font-mono text-[#E5CC64] block font-semibold">
                  * Subject to applicable regulatory compliance and permit availability.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* INQUIRY PREPARATION GUIDE & SPECIFICATION BREAKDOWN */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-[#153B16]/20 pt-12">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#153B16] font-[family-name:var(--font-cinzel)] block">
              BUYER PREPARATION GUIDE
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold font-[family-name:var(--font-cinzel)] text-[#153B16] uppercase leading-tight">
              WHAT TO INCLUDE IN YOUR INQUIRY
            </h3>
            <p className="text-xs text-[#153B16]/90 leading-relaxed font-sans font-medium">
              To expedite evaluation and match your requirement with the appropriate operation, buyers are encouraged to provide full specification parameters upfront.
            </p>

            <div className="bg-[#153B16] border-l-4 border-[#E5CC64] p-4 text-xs text-white/90 font-sans rounded-r-sm">
              The objective is to identify the appropriate sourcing opportunity based on the buyer&apos;s requirements and the capabilities of the relevant Madagascar operation.
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* AGRO SPEC CHECKLIST */}
            <div className="bg-[#153B16] border border-[#153B16] p-5 space-y-3 rounded-sm shadow-md">
              <span className="text-[10px] font-mono text-[#E5CC64] uppercase font-bold tracking-wider block border-b border-white/20 pb-1.5">
                AGRICULTURAL SOURCING PARAMETERS
              </span>
              <div className="space-y-2">
                {agroInquirySpecs.map((item, idx) => (
                  <div key={idx} className="flex flex-col text-[11px]">
                    <span className="font-mono text-[#E5CC64] text-[9px] font-bold">{item.label}</span>
                    <span className="font-semibold text-white">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* MINERAL SPEC CHECKLIST */}
            <div className="bg-[#153B16] border border-[#153B16] p-5 space-y-3 rounded-sm shadow-md">
              <span className="text-[10px] font-mono text-[#E5CC64] uppercase font-bold tracking-wider block border-b border-white/20 pb-1.5">
                MINERAL SOURCING PARAMETERS
              </span>
              <div className="space-y-2">
                {mineralInquirySpecs.map((item, idx) => (
                  <div key={idx} className="flex flex-col text-[11px]">
                    <span className="font-mono text-[#E5CC64] text-[9px] font-bold">{item.label}</span>
                    <span className="font-semibold text-white">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AVAILABILITY QUALIFICATION NOTE */}
        <div className="border-t border-[#153B16]/20 pt-6 text-center space-y-1">
          <p className="text-[10px] font-mono text-[#153B16]/80 italic max-w-4xl mx-auto leading-relaxed font-medium">
            * Specific sourcing opportunities are subject to availability, origin, quality, specifications, quantity, pricing, logistics and applicable requirements. For mineral-related products, availability is also subject to applicable legal regulations.
          </p>
        </div>
      </div>
    </section>
  );
}