"use client";

import React from "react";

export default function MadagascarOperations() {
  const bmsProducts = [
    { num: "01", name: "SPICES" },
    { num: "02", name: "GRAINS" },
    { num: "03", name: "BEANS" },
    { num: "04", name: "VANILLA" },
    { num: "05", name: "AGRICULTURAL PRODUCTS" },
    { num: "06", name: "OTHER FOOD & AGRICULTURAL COMMODITIES" },
  ];

  const aldoProducts = [
    { num: "01", name: "GOLD" },
    { num: "02", name: "CHROME / CHROMIUM" },
    { num: "03", name: "STONES" },
    { num: "04", name: "MINING-RELATED COMMODITIES" },
    { num: "05", name: "OTHER MINERAL RESOURCES" },
  ];

  return (
    <section
      id="madagascar-operations"
      className="bg-white text-[#153B16] relative border-b border-[#153B16]/20 overflow-hidden py-16 lg:py-24"
    >
      {/* Editorial Watermark & Grid Background */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[180px] sm:text-[280px] font-black text-[#153B16]/[0.03] font-[family-name:var(--font-cinzel)] select-none pointer-events-none leading-none pl-4 hidden sm:block">
        OPERATIONS
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
              03 — MADAGASCAR OPERATIONS
            </span>
          </div>
          <span className="hidden sm:inline tracking-[0.2em] font-mono text-[#153B16] font-extrabold">
            SPECIALIZED SOURCING ENTITIES
          </span>
        </div>

        {/* SECTION HEADING & INTRODUCTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#153B16] font-[family-name:var(--font-cinzel)] block">
              INDEPENDENT OPERATIONAL ENTITIES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#153B16] font-[family-name:var(--font-cinzel)] leading-tight uppercase">
              Two Specialized Operations. <br />
              <span className="text-[#153B16] relative inline-block pt-1">
                Two Distinct Capabilities.
                <span className="absolute bottom-0 left-0 w-20 h-[2.5px] bg-[#E5CC64]"></span>
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#153B16]/90 leading-relaxed font-sans font-medium">
              Madagascar sourcing activities are represented through specialized
              operations with distinct business focuses. Each entity handles the
              products and opportunities aligned with its respective sourcing
              capabilities and commercial activity.
            </p>
          </div>
        </div>

        {/* TWO DEDICATED OPERATION PANELS (#153B16 FULL CONTAINER) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* OPERATION 01 — BEST SPICES OF MADAGASCAR (BMS) */}
          <div className="bg-[#153B16] border border-[#153B16] p-6 sm:p-8 space-y-8 flex flex-col justify-between relative group hover:shadow-2xl transition-all duration-300">
            {/* Top Operational Metadata */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/20 pb-4">
                <span className="text-2xl font-black font-mono text-[#E5CC64]">
                  01
                </span>
                <div className="text-right">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#E5CC64] block font-bold">
                    ENTITY CATEGORY
                  </span>
                  <span className="text-[10px] font-bold font-mono text-white tracking-wider uppercase">
                    AGRICULTURAL & FOOD PRODUCTS
                  </span>
                </div>
              </div>

              {/* Entity Title & Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono text-[#153B16] bg-[#E5CC64] px-2 py-0.5 font-extrabold">
                    ENTITY
                  </span>
                  <span className="text-[10px] font-mono text-white/80 tracking-wider font-semibold">
                    ORIGIN: MADAGASCAR
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black font-[family-name:var(--font-cinzel)] text-white tracking-wide uppercase leading-tight">
                  BEST SPICES OF MADAGASCAR <br />
                  <span className="text-[#E5CC64] font-mono text-lg sm:text-xl">
                    (BMS)
                  </span>
                </h3>
              </div>

              {/* Paragraph Section with High Visibility */}
              <p className="text-xs sm:text-sm text-white/95 bg-[#1e4e1f] p-4 rounded border border-white/10 leading-relaxed font-sans font-normal">
                Best Spices of Madagascar (BMS) focuses primarily on agricultural and
                food commodities sourced from Madagascar, maintaining specialized local
                sourcing execution for regional agro-exports.
              </p>

              {/* Product Categories List */}
              <div className="space-y-3 pt-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E5CC64] font-bold block border-b border-white/20 pb-1">
                  PRODUCT CATEGORIES
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {bmsProducts.map((prod) => (
                    <div
                      key={prod.num}
                      className="bg-[#1e4e1f] border border-[#E5CC64]/40 p-2.5 flex items-center gap-3 shadow-sm rounded-sm"
                    >
                      <span className="text-[10px] font-mono font-bold text-[#153B16] bg-[#E5CC64] px-1.5 py-0.5 rounded-sm">
                        {prod.num}
                      </span>
                      <span className="text-[10px] font-mono text-white tracking-wider uppercase font-bold">
                        {prod.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Entity Footer Metadata */}
            <div className="pt-6 border-t border-white/20 flex items-center justify-between text-[10px] font-mono text-white/90 font-semibold">
              <span className="text-white">BUSINESS FOCUS: AGRO-COMMODITIES</span>
              <span className="text-[#153B16] font-bold bg-[#E5CC64] px-2 py-0.5">INDEPENDENT ENTITY</span>
            </div>
          </div>

          {/* OPERATION 02 — ALDO PARTNERS */}
          <div className="bg-[#153B16] border border-[#153B16] p-6 sm:p-8 space-y-8 flex flex-col justify-between relative group hover:shadow-2xl transition-all duration-300">
            {/* Top Operational Metadata */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/20 pb-4">
                <span className="text-2xl font-black font-mono text-[#E5CC64]">
                  02
                </span>
                <div className="text-right">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#E5CC64] block font-bold">
                    ENTITY CATEGORY
                  </span>
                  <span className="text-[10px] font-bold font-mono text-white tracking-wider uppercase">
                    MINING & MINERALS
                  </span>
                </div>
              </div>

              {/* Entity Title & Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono text-[#153B16] bg-[#E5CC64] px-2 py-0.5 font-extrabold">
                    ENTITY
                  </span>
                  <span className="text-[10px] font-mono text-white/80 tracking-wider font-semibold">
                    ORIGIN: MADAGASCAR
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black font-[family-name:var(--font-cinzel)] text-white tracking-wide uppercase leading-tight">
                  ALDO PARTNERS <br />
                  <span className="text-[#E5CC64] font-mono text-lg sm:text-xl">
                    [ MINING & NATURAL RESOURCES ]
                  </span>
                </h3>
              </div>

              {/* Paragraph Section with High Visibility */}
              <p className="text-xs sm:text-sm text-white/95 bg-[#1e4e1f] p-4 rounded border border-white/10 leading-relaxed font-sans font-normal">
                ALDO Partners operates separately within the mining and natural-resources
                sector in Madagascar, focusing on mineral extraction and specialized export
                commodities.
              </p>

              {/* Product Categories List */}
              <div className="space-y-3 pt-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E5CC64] font-bold block border-b border-white/20 pb-1">
                  PRODUCT CATEGORIES
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {aldoProducts.map((prod) => (
                    <div
                      key={prod.num}
                      className="bg-[#1e4e1f] border border-[#E5CC64]/40 p-2.5 flex items-center gap-3 shadow-sm rounded-sm"
                    >
                      <span className="text-[10px] font-mono font-bold text-[#153B16] bg-[#E5CC64] px-1.5 py-0.5 rounded-sm">
                        {prod.num}
                      </span>
                      <span className="text-[10px] font-mono text-white tracking-wider uppercase font-bold">
                        {prod.name}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-[10px] font-mono text-[#E5CC64] italic pt-1 font-semibold">
                  * Mineral sourcing opportunities are subject to availability and applicable legal regulations.
                </p>
              </div>
            </div>

            {/* Entity Footer Metadata */}
            <div className="pt-6 border-t border-white/20 flex items-center justify-between text-[10px] font-mono text-white/90 font-semibold">
              <span className="text-white">BUSINESS FOCUS: EXTRACTION & MINERALS</span>
              <span className="text-[#153B16] font-bold bg-[#E5CC64] px-2 py-0.5">INDEPENDENT ENTITY</span>
            </div>
          </div>
        </div>

        {/* BROADER COMMERCIAL QUALIFICATION STATEMENT */}
        <div className="bg-[#153B16] border border-[#E5CC64]/30 p-4 sm:p-6 text-center space-y-2 rounded-sm shadow-md">
          <span className="text-[9px] font-mono text-[#E5CC64] uppercase tracking-widest block font-bold">
            COMMERCIAL CREDIBILITY & REGULATORY NOTICE
          </span>
          <p className="text-xs text-white/90 font-sans max-w-4xl mx-auto leading-relaxed font-normal">
            Every sourcing requirement is assessed according to the relevant product, origin,
            quality, specifications, quantity, pricing, logistics and applicable legal requirements.
            Product availability, origin, quality, specifications, quantity, pricing and logistics
            may vary according to specific sourcing requirements.
          </p>
        </div>

        {/* TRANSITION TO SOURCING MODEL */}
        <div className="border-t border-[#153B16]/15 pt-8 text-center space-y-3">
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#153B16]/70 font-[family-name:var(--font-cinzel)] block">
            NEXT SECTION PREVIEW
          </span>
          <a
            href="#madagascar-sourcing-model"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] font-[family-name:var(--font-cinzel)] text-[#153B16] hover:text-[#E5CC64] transition-colors group"
          >
            <span>HOW MADAGASCAR SOURCING WORKS</span>
            <span className="text-[#153B16] font-bold group-hover:translate-x-1 transition-transform">
              ↓
            </span>
          </a>
          <p className="text-[11px] text-[#153B16]/80 font-sans font-medium">
            Understand the structured process for evaluating, routing, and executing sourcing requests.
          </p>
        </div>
      </div>
    </section>
  );
}