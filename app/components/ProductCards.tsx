"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

const products = [
  {
    id: "gold",
    number: "01",
    category: "PRECIOUS METALS",
    title: (
      <>
        Gold Trading & Refining <br />
        Coordination
      </>
    ),
    description:
      "Bathia Ocean Gold provides end-to-end gold sourcing, assaying, and export solutions. We connect primary African gold mining hubs with sovereign funds, bullion banks, and institutional international B2B buyers.",
    highlights: [
      "99.99% Purity Bullion & Doré Bars",
      "OECD & LBMA Responsible Sourcing Compliant",
      "Secure International Vaulting & Air Logistics",
      "Independent Assay Certification (SGS / Alex Stewart)",
    ],
    image: "/assets/gold-trading.jpeg",
    href: "/products/gold",
  },
  {
    id: "copper",
    number: "02",
    category: "BASE METALS",
    title: (
      <>
        Copper & High-Grade <br />
        Copper Cathodes
      </>
    ),
    description:
      "Direct trade execution and export management for high-purity Grade-A Copper Cathodes and industrial copper concentrates essential for global electronics and power infrastructure.",
    highlights: [
      "Electrolytic Copper Cathodes (Grade A, 99.99%)",
      "Bulk Vessel & Container Export Capabilities",
      "Direct Mine-Site Offtake Agreements",
      "Full CIF / FOB Supply Terms Available",
    ],
    image: "/assets/copper-cathodes.jpeg",
    href: "/products/copper",
  },
  {
    id: "minerals",
    number: "03",
    category: "INDUSTRIAL COMMODITIES",
    title: (
      <>
        Other Strategic Minerals <br />
        & Agro-Mining
      </>
    ),
    description:
      "Structured supply chains for raw industrial minerals, rare earth elements, and select agro-commodities sourced directly from verified African partners.",
    highlights: [
      "Lithium, Coltan, & Strategic Mineral Ores",
      "Traceable Supply Chain Integrity",
      "Custom Contractual Procurement & Sourcing",
      "End-to-End Export Logistics Coordination",
    ],
    image: "/assets/other-strategic-minerals.jpeg",
    href: "/products/minerals",
  },
];

export default function ProductCards() {
  const [activeTab, setActiveTab] = useState(0);
  const current = products[activeTab];

  return (
    <section id="products" className="relative bg-[#F9F9F9] text-[#153B16] py-20 lg:py-28 overflow-hidden selection:bg-[#E5CC64] selection:text-[#153B16]">
      
      {/* Background Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#153B16 1px, transparent 1px),
            linear-gradient(90deg, #153B16 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">
        
        {/* HEADER */}
        <div className="mb-12 border-b border-[#153B16]/15 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <span className="h-px w-10 bg-[#E5CC64]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#153B16]/70">
                Core Portfolio
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-cinzel)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#153B16]">
              Products & <span className="text-[#E5CC64]">Commodities</span>
            </h2>
          </div>

          {/* TAB SWITCHER */}
          <div className="flex flex-wrap gap-2 bg-white p-1.5 border border-[#153B16]/15 shadow-sm">
            {products.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === idx
                    ? "bg-[#153B16] text-[#E5CC64]"
                    : "text-[#153B16]/70 hover:text-[#153B16] hover:bg-[#153B16]/5"
                }`}
              >
                {item.number}. {item.id}
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT & IMAGE SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT: CONTENT AREA */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#153B16] font-bold border border-[#153B16]/20 bg-white px-2 py-0.5">
                {current.number}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E5CC64]">
                {current.category}
              </span>
            </div>

            <h3 className="font-[family-name:var(--font-cinzel)] text-2xl sm:text-3xl lg:text-4xl font-medium text-[#153B16] leading-tight">
              {current.title}
            </h3>

            <p className="text-sm sm:text-base leading-relaxed text-[#153B16]/85">
              {current.description}
            </p>

            {/* CONTENT BULLETS / HIGHLIGHTS */}
            <div className="pt-4 border-t border-[#153B16]/15">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#153B16]/60 block mb-4">
                Key Operational Specifications
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.highlights.map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#153B16] shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-[#153B16]/90 leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <Link
                href={current.href}
                className="group inline-flex items-center gap-3 bg-[#153B16] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F3F3F3] transition-all duration-300 hover:bg-[#E5CC64] hover:text-[#153B16]"
              >
                View Commodity Specs
                <ArrowUpRight size={14} className="text-[#E5CC64] transition-colors group-hover:text-[#153B16]" />
              </Link>

              <Link
                href="/request-offer"
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#153B16] hover:text-[#E5CC64] border-b border-[#153B16]/30 pb-1.5 transition-colors"
              >
                Request Offtake Contract
                <ArrowRight size={13} />
              </Link>
            </div>

          </div>

          {/* RIGHT: FEATURED IMAGE FRAME */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#153B16]/20 shadow-xl bg-white">
              <img
                src={current.image}
                alt="Commodity Visual"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#153B16]/80 via-transparent to-transparent opacity-80" />
              
              {/* Image Footer Badge */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
                <div>
                  <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#E5CC64] block">
                    Verified Origin
                  </span>
                  <span className="font-[family-name:var(--font-cinzel)] text-lg text-white">
                    East Africa Supply
                  </span>
                </div>
                <ShieldCheck size={24} className="text-[#E5CC64]" />
              </div>
            </div>

            {/* Accent Borders */}
            <div className="absolute -bottom-3 -right-3 h-16 w-16 border-b-2 border-r-2 border-[#E5CC64] pointer-events-none" />
            <div className="absolute -top-3 -left-3 h-16 w-16 border-t-2 border-l-2 border-[#153B16]/30 pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
}