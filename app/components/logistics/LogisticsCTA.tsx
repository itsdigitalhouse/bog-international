"use client";

import React, { useState } from "react";

export default function LogisticsCTA() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What Incoterms do you support for international shipments?",
      a: "We primarily operate under FOB (Free On Board), CFR (Cost and Freight), and CIF (Cost, Insurance, and Freight) depending on commodity type, origin port clearance, and destination agreement."
    },
    {
      q: "How is product quality and purity verified prior to shipment?",
      a: "All shipments undergo mandatory third-party independent assaying and quality checks (such as SGS or Alex Stewart) at the port of origin before export clearance docs are finalized."
    },
    {
      q: "Which major origin corridors do you directly operate from?",
      a: "Our primary sourcing and export corridors are centered around East Africa (Uganda) and the Indian Ocean (Madagascar), routed through major maritime hubs including Mombasa and Toamasina."
    }
  ];

  return (
    <section className="relative w-full bg-[#FFFFFF] text-[#153B16] py-16 lg:py-24 border-b border-[#153B16]/10 selection:bg-[#E5CC64] selection:text-[#153B16]">
      
      {/* FULL WIDTH CONTAINER WITH FLUID PADDING */}
      <div className="w-full px-4 sm:px-8 lg:px-16 space-y-16">
        
        {/* TOP SECTION IDENTIFIER */}
        <div className="flex items-center justify-between border-b border-[#153B16]/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#153B16]">
              06 — COMMERCIAL INQUIRY & TERMINAL
            </span>
            <span className="h-[1px] w-12 bg-[#E5CC64] inline-block" />
          </div>
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#153B16]/60 font-semibold hidden sm:inline-block">
            DIRECT TRADE ENGAGEMENT
          </span>
        </div>

        {/* TWO COLUMN GRID: LEFT CTA FORM / RIGHT FAQ ACCORDION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: INQUIRY TERMINAL FORM (7 COLS) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#153B16]/60 block">
                COMMERCIAL INQUIRY
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-[family-name:var(--font-cinzel)] tracking-tight text-[#153B16] uppercase leading-tight">
                Initiate Trade & <br />
                <span className="text-[#153B16]">Logistics Alignment.</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#153B16]/80 font-sans leading-relaxed">
                Submit contractual parameters or sourcing inquiries directly to our trade logistics desk for commodity execution and route staging.
              </p>
            </div>

            {/* HIGH-DENSITY FORM (LIGHT STYLING) */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[#153B16]/70 block font-semibold">
                    FULL NAME / REPRESENTATIVE *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#F3F3F3] border border-[#153B16]/20 text-xs font-mono text-[#153B16] p-3 focus:outline-none focus:border-[#153B16] placeholder-[#153B16]/40"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[#153B16]/70 block font-semibold">
                    CORPORATE EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="trade@company.com"
                    className="w-full bg-[#F3F3F3] border border-[#153B16]/20 text-xs font-mono text-[#153B16] p-3 focus:outline-none focus:border-[#153B16] placeholder-[#153B16]/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[#153B16]/70 block font-semibold">
                    TARGET COMMODITY *
                  </label>
                  <select className="w-full bg-[#F3F3F3] border border-[#153B16]/20 text-xs font-mono text-[#153B16] p-3 focus:outline-none focus:border-[#153B16]">
                    <option value="agro">Agro Commodities</option>
                    <option value="gold">Gold & Precious Metals</option>
                    <option value="copper">Copper & Industrial Minerals</option>
                    <option value="other">General Sourcing Inquiry</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[#153B16]/70 block font-semibold">
                    PREFERRED INCOTERMS
                  </label>
                  <select className="w-full bg-[#F3F3F3] border border-[#153B16]/20 text-xs font-mono text-[#153B16] p-3 focus:outline-none focus:border-[#153B16]">
                    <option value="fob">FOB (Free On Board)</option>
                    <option value="cif">CIF (Cost, Insurance & Freight)</option>
                    <option value="cfr">CFR (Cost & Freight)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase tracking-widest text-[#153B16]/70 block font-semibold">
                  SPECIFICATIONS & VOLUME DETAILS
                </label>
                <textarea
                  rows={4}
                  placeholder="Detail target purity, tonnage/volume requirements, or destination port specifications..."
                  className="w-full bg-[#F3F3F3] border border-[#153B16]/20 text-xs font-mono text-[#153B16] p-3 focus:outline-none focus:border-[#153B16] placeholder-[#153B16]/40 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-[#153B16] text-[#FFFFFF] font-mono font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-[#E5CC64] hover:text-[#153B16] transition-all duration-200"
              >
                SUBMIT TRADE INQUIRY &rarr;
              </button>
            </form>
          </div>

          {/* RIGHT COLUMN: FREQUENTLY ASKED QUESTIONS (5 COLS) */}
          <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-[#153B16]/15 lg:pl-10">
            <div className="space-y-1 border-b border-[#153B16]/10 pb-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#153B16]/60 block">
                LOGISTICS PROTOCOLS FAQ
              </span>
              <h3 className="text-lg font-mono font-bold uppercase text-[#153B16]">
                Operational Clarity
              </h3>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-[#F3F3F3] border border-[#153B16]/15 transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-[#153B16]"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#153B16] ml-2 font-bold">{openFaq === idx ? "−" : "+"}</span>
                  </button>

                  {openFaq === idx && (
                    <div className="px-4 pb-4 text-xs font-sans text-[#153B16]/80 border-t border-[#153B16]/10 pt-3 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* DIRECT CONTACT CORNER */}
            <div className="bg-[#F3F3F3] border-l-2 border-[#153B16] p-4 text-xs font-mono text-[#153B16] space-y-1">
              <span className="text-[9px] text-[#153B16]/60 uppercase font-bold block">DIRECT DESK SUPPORT</span>
              <p className="font-sans text-[#153B16]/80">Need custom contract structuring? Contact our logistics desk directly for technical documentation guidance.</p>
            </div>
          </div>

        </div>

        {/* BOTTOM FULL WIDTH FOOTER BAR */}
        <div className="border-t border-[#153B16]/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-[#153B16]/60">
          <span>&copy; BATHIA OCEAN GOLD (BOG) &bull; LOGISTICS & TRADE EXECUTION</span>
          <span className="uppercase tracking-widest text-[#153B16] font-semibold">UGANDA &bull; MADAGASCAR &bull; GLOBAL CORRIDORS</span>
        </div>

      </div>
    </section>
  );
}