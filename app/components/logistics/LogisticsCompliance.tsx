"use client";

import React from "react";

export default function LogisticsCompliance() {
  const complianceCards = [
    {
      code: "REG-01",
      category: "ORIGIN & QUALITY ASSURANCE",
      title: "Certificate of Origin & Phytosanitary",
      authority: "Government Trade & Agriculture Authorities",
      description:
        "Validation of agricultural products ensuring compliance with origin country exports and destination phytosanitary standards.",
      requirements: ["Government Phytosanitary Seal", "Chamber of Commerce Origin Verification", "Batch Inspection Reports"]
    },
    {
      code: "REG-02",
      category: "MINERAL & METAL COMPLIANCE",
      title: "Assay & Purity Verification",
      authority: "Independent Third-Party Laboratories (SGS / Alex Stewart)",
      description:
        "Rigorous lab testing and weight certification for gold, silver, copper, and minerals prior to customs export clearance.",
      requirements: ["Assay Certificate of Purity", "Independent Weight Certificate", "Customs Seal & Vault Staging"]
    },
    {
      code: "REG-03",
      category: "CUSTOMS & MARITIME DISPATCH",
      title: "Export Licensing & Port Clearance",
      authority: "Port Authorities (Mombasa / Toamasina / Dar es Salaam)",
      description:
        "Complete alignment of bill of lading (B/L), commercial invoices, and customs release documentation for international vessel loading.",
      requirements: ["Verified Export Licenses", "Clean Master Bill of Lading", "Customs Tariff Code (HS Code) Audit"]
    },
    {
      code: "REG-04",
      category: "DESTINATION IMPORT ALIGNMENT",
      title: "International Buyer Trade Terms",
      authority: "Destination Country Customs & Regulatory Bodies",
      description:
        "Ensuring all paperwork strictly mirrors buyer destination import codes to prevent port detention or customs clearance delays.",
      requirements: ["Commercial Invoice Matching", "Packing List Verification", "Letter of Credit (L/C) Compliance"]
    }
  ];

  return (
    <section className="relative w-full bg-[#153B16] text-[#FFFFFF] py-16 lg:py-24 border-b border-[#E5CC64]/20 selection:bg-[#E5CC64] selection:text-[#153B16]">
      
      {/* FULL WIDTH CONTAINER WITH FLUID EDGE PADDING */}
      <div className="w-full px-4 sm:px-8 lg:px-16 space-y-12 lg:space-y-16">
        
        {/* TOP SECTION IDENTIFIER */}
        <div className="flex items-center justify-between border-b border-[#FFFFFF]/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#E5CC64]">
              05 — LOGISTICS COMPLIANCE
            </span>
            <span className="h-[1px] w-12 bg-[#E5CC64] inline-block" />
          </div>
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#FFFFFF]/60 font-semibold hidden sm:inline-block">
            REGULATORY & CERTIFICATION FRAMEWORK
          </span>
        </div>

        {/* SECTION HEADER */}
        <div className="max-w-4xl space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-[family-name:var(--font-cinzel)] tracking-tight text-[#FFFFFF] uppercase leading-tight">
            Regulatory Compliance & <br />
            <span className="text-[#E5CC64]">Documentation Standards.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#FFFFFF]/80 font-sans leading-relaxed">
            International trade execution requires strict adherence to origin export laws, third-party assays, and destination port clearance standards.
          </p>
        </div>

        {/* 4-COLUMN COMPLIANCE LEDGER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {complianceCards.map((card) => (
            <div
              key={card.code}
              className="bg-[#1A451C] border border-[#E5CC64]/20 p-6 flex flex-col justify-between space-y-6 hover:border-[#E5CC64]/60 transition-all duration-200"
            >
              <div className="space-y-4">
                {/* HEADER TAGS */}
                <div className="flex items-center justify-between border-b border-[#FFFFFF]/10 pb-3">
                  <span className="text-[10px] font-mono font-bold text-[#153B16] bg-[#E5CC64] px-2 py-0.5 uppercase tracking-wider">
                    {card.code}
                  </span>
                  <span className="text-[9px] font-mono text-[#FFFFFF]/50 uppercase tracking-widest">
                    VERIFIED PROTOCOL
                  </span>
                </div>

                <span className="text-[10px] font-mono text-[#E5CC64] uppercase tracking-wider block font-semibold">
                  {card.category}
                </span>

                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#FFFFFF] leading-snug">
                  {card.title}
                </h3>

                <p className="text-xs text-[#FFFFFF]/75 font-sans leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* BOTTOM REQUIREMENTS LIST */}
              <div className="pt-4 border-t border-[#FFFFFF]/10 space-y-3">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-[#FFFFFF]/50 uppercase block">ISSUING / AUDIT BODY:</span>
                  <span className="text-xs font-mono text-[#E5CC64] font-semibold block">{card.authority}</span>
                </div>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[9px] font-mono text-[#FFFFFF]/50 uppercase block">MANDATORY DOCUMENTS:</span>
                  <ul className="space-y-1 text-[11px] font-sans text-[#FFFFFF]/80">
                    {card.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#E5CC64] rounded-full inline-block" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM STATEMENT LEDGER BANNER */}
        <div className="bg-[#1A451C] border-l-2 border-[#E5CC64] p-5 sm:p-6 text-xs font-mono text-[#FFFFFF] w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] text-[#E5CC64] uppercase font-bold tracking-widest block">
              ZERO-DEFECT DOCUMENTATION GUARANTEE
            </span>
            <p className="text-[#FFFFFF]/80 font-sans max-w-3xl">
              All export documentation is cross-audited against origin government mandates and destination customs requirements prior to vessel loading.
            </p>
          </div>
          <span className="text-[10px] font-mono text-[#153B16] bg-[#E5CC64] font-bold px-3 py-1.5 uppercase tracking-widest whitespace-nowrap">
            COMPLIANCE AUDITED
          </span>
        </div>

      </div>
    </section>
  );
}