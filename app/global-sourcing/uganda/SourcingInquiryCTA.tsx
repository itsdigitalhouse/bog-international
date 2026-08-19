"use client";

import React from "react";

export default function SourcingInquiryCTA() {
  const briefItems = [
    {
      label: "PRODUCT",
      code: "01",
      question: "What are you looking to source?",
      detail:
        "Specify commodity type (Gold, Copper, Vanilla, Coffee, Grains, Beans, etc.)",
    },
    {
      label: "QUANTITY",
      code: "02",
      question: "What quantity do you require?",
      detail: "Volume, batch requirement, or trial order capacity",
    },
    {
      label: "SPECIFICATIONS",
      code: "03",
      question: "What quality, grade or specifications apply?",
      detail:
        "Assay levels, purity %, agricultural grade, or processing standards",
    },
    {
      label: "PREFERRED ORIGIN",
      code: "04",
      question: "Uganda or another preferred origin?",
      detail: "Uganda regional origin or multi-origin requirements",
    },
    {
      label: "DESTINATION",
      code: "05",
      question: "Where does the product need to be delivered?",
      detail: "Target destination port, country, and preferred Incoterms",
    },
    {
      label: "ADDITIONAL REQUIREMENTS",
      code: "06",
      question: "Any commercial or logistical requirements?",
      detail: "Compliance, packaging, inspection, or delivery timelines",
    },
  ];

  return (
    <section
      id="sourcing-inquiry"
      className="bg-white text-black relative border-b border-[#153B16]/10 overflow-hidden py-16 lg:py-24"
    >
      {/* Background Subtle Watermark Number */}
      <div className="absolute right-4 bottom-0 text-[180px] sm:text-[260px] font-black text-black/[0.03] font-[family-name:var(--font-cinzel)] select-none pointer-events-none leading-none">
        06
      </div>

      {/* Structural Editorial Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="max-w-[1400px] h-full mx-auto grid grid-cols-12 px-6 sm:px-12 border-x border-black/20">
          <div className="col-span-12 lg:col-span-5 border-r border-black/20 h-full hidden lg:block"></div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
        {/* SECTION LABEL & SUB-LABEL */}
        <div className="flex flex-wrap items-center justify-between border-b border-black/15 pb-4 mb-12 text-xs uppercase tracking-[0.25em] font-[family-name:var(--font-cinzel)] text-black/80">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 bg-[#E5CC64] inline-block"></span>
            <span className="font-bold text-black">
              06 — SOURCING INQUIRY
            </span>
          </div>
          <span className="hidden sm:inline tracking-[0.2em] font-semibold text-black">
            UGANDA OPERATIONS
          </span>
        </div>

        {/* MAIN EDITORIAL CONVERSION GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: Large Direct Heading & Call to Action */}
          <div className="lg:col-span-5 lg:sticky lg:top-12 space-y-8 pr-0 lg:pr-4">
            <div className="space-y-3">
              <span className="text-xs uppercase font-bold tracking-[0.3em] text-black/70 font-[family-name:var(--font-cinzel)] block">
                COMMERCIAL INQUIRY INITIATION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black font-[family-name:var(--font-cinzel)] leading-[1.05] uppercase">
                Tell Us <br />
                What You <br />
                <span className="text-black relative inline-block pb-1">
                  Need.
                  <span className="absolute bottom-0 left-0 w-20 h-[3px] bg-[#E5CC64]"></span>
                </span>
              </h2>
            </div>

            {/* BADA PARAGRAPH TEXT IN BLACK */}
            <p className="text-base sm:text-lg text-black font-normal leading-relaxed font-sans max-w-md">
              Tell us what product, quantity, specifications and preferred
              origin you require. Our team will identify the appropriate sourcing
              opportunity and connect you with the relevant operation.
            </p>

            {/* ACTION BUTTONS */}
            <div className="pt-2 space-y-4">
              <a
                href="/contact"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center bg-[#153B16] text-[#F3F3F3] font-bold px-8 py-4 text-xs uppercase tracking-[0.2em] font-[family-name:var(--font-cinzel)] transition-all duration-300 hover:bg-[#1f5221] shadow-sm"
              >
                <span className="relative z-10 flex items-center gap-3">
                  SEND YOUR INQUIRY
                  <span className="w-2 h-2 bg-[#E5CC64] transition-transform duration-300 group-hover:scale-150"></span>
                </span>
              </a>

              <div>
                <a
                  href="/global-sourcing"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] font-[family-name:var(--font-cinzel)] text-black hover:text-[#153B16] transition-colors"
                >
                  <span>EXPLORE GLOBAL SOURCING NETWORK</span>
                  <span className="text-[#E5CC64] font-bold">→</span>
                </a>
              </div>
            </div>

            {/* COMMERCIAL NARRATIVE STATEMENT */}
            <div className="border-t border-black/10 pt-6 space-y-2">
              <span className="text-xs font-mono text-black font-bold uppercase tracking-wider block">
                FROM PRODUCT REQUIREMENT TO SOURCING OPPORTUNITY
              </span>
              <p className="text-sm text-black font-sans italic leading-relaxed">
                Need a different origin? Explore our broader international sourcing
                network across Uganda and Madagascar.
              </p>
            </div>

            {/* UGANDA CONTEXT MINI FOOTER */}
            <div className="bg-[#F3F3F3] border border-black/15 p-4 text-xs space-y-1">
              <span className="font-bold text-black font-[family-name:var(--font-cinzel)] block tracking-widest uppercase">
                UGANDA — BHATIA OCEAN GOLD (BOG INTERNATIONAL)
              </span>
              <p className="text-black font-sans font-medium">
                Minerals • Agricultural Products • Natural-Resource Commodities
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Professional Sourcing Brief Preview Panel */}
          <div className="lg:col-span-7 bg-[#F3F3F3] border border-black/15 p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-black/15 pb-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-black font-[family-name:var(--font-cinzel)]">
                SOURCING BRIEF — INFORMATION PREVIEW
              </span>
              <span className="text-xs font-mono text-black/70">
                [ NON-BINDING ASSESSMENT ]
              </span>
            </div>

            {/* Itemized Requirements Grid */}
            <div className="space-y-4">
              {briefItems.map((item) => (
                <div
                  key={item.code}
                  className="bg-white border border-black/15 p-5 transition-all duration-300 hover:border-black/50 hover:shadow-md group"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-mono font-bold text-black bg-[#E5CC64]/40 px-2 py-0.5">
                      {item.code}
                    </span>
                    <div className="space-y-1">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-black font-[family-name:var(--font-cinzel)] block group-hover:text-[#1f5221] transition-colors">
                        {item.label}
                      </span>
                      <p className="text-sm sm:text-base font-bold text-black font-sans">
                        {item.question}
                      </p>
                      <p className="text-xs sm:text-sm text-black/85 font-sans pt-0.5 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Form Redirection Note */}
            <div className="pt-2 text-center border-t border-black/10">
              <p className="text-xs sm:text-sm text-black font-sans italic">
                Submitting your requirement connects you directly with our
                commercial trade desk for evaluation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}