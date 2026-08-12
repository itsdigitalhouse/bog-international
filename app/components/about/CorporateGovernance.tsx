"use client";

const governancePoints = [
  {
    title: "OECD Due Diligence Framework",
    description: "Full compliance with OECD guidelines for mineral sourcing from conflict-affected and high-risk regions to guarantee ethical trade pathways.",
    tag: "Ethical Sourcing",
    code: "OECD-COMPLIANT"
  },
  {
    title: "Rigorous KYC & AML Vetting",
    description: "Mandatory Know Your Customer (KYC) and Anti-Money Laundering (AML) verifications conducted for all global commercial counterparties prior to contract signing.",
    tag: "Legal Security",
    code: "AML-VERIFIED"
  },
  {
    title: "Full Provenance & Chain of Custody",
    description: "Complete document tracking mapping raw commodities from licensed concessions through transit corridors straight to the final port of discharge.",
    tag: "Transparency",
    code: "ORIGIN-MAPPED"
  },
  {
    title: "Independent Accredited Assay",
    description: "Purity certifications and chemical assays executed strictly by independent, state-recognized inspection authorities (SGS, Alex Stewart, Ministry Labs).",
    tag: "Quality Assurance",
    code: "SGS-VERIFIED"
  },
  {
    title: "ESG & Responsible Mining Standards",
    description: "Enforcing strict environmental and social governance standards to prevent labor exploitation and promote safe environmental extraction practices.",
    tag: "Sustainability",
    code: "ESG-AUDITED"
  },
  {
    title: "Institutional Banking & Escrow Protocols",
    description: "Transactions executed strictly through top-tier international banking institutions utilizing secure DLC, SBLC, and escrow settlement structures.",
    tag: "Financial Control",
    code: "BANK-SECURED"
  }
];

export default function CorporateGovernance() {
  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] text-[#153B16] overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#153B16] text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase font-[family-name:var(--font-cinzel)] bg-[#E5CC64]/20 border border-[#E5CC64]/60 px-3.5 py-1">
              REGULATORY & COMPLIANCE FRAMEWORK
            </span>
          </div>

          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#153B16] font-[family-name:var(--font-cinzel)] uppercase mx-auto leading-[0.95] tracking-wide">
            Corporate Governance & Compliance
          </h2>

          <div className="w-16 h-[2px] bg-[#E5CC64] mx-auto mt-5 mb-5" />

          <p className="text-xs sm:text-sm md:text-base text-gray-700 font-light max-w-3xl mx-auto leading-relaxed">
            Operating in international raw mineral trade requires absolute legal clarity, verified origin tracking, and strict risk management. Bhatia Ocean Gold International enforces non-negotiable regulatory standards to ensure secure, seamless transactions for global buyers.
          </p>
        </div>

        {/* Governance Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-12">
          
          {/* Left Highlight Box: Strategic Governance Mandate */}
          <div className="lg:col-span-4 bg-[#153B16] text-white p-8 sm:p-10 border-2 border-[#E5CC64] flex flex-col justify-between shadow-2xl relative group">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E5CC64]/30">
                <span className="text-[#E5CC64] text-[10px] font-mono font-bold tracking-[0.2em] uppercase">
                  [ GOVERNANCE MANDATE ]
                </span>
                <span className="w-2 h-2 rounded-full bg-[#E5CC64] animate-ping" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-cinzel)] text-white uppercase mb-4 leading-tight">
                Zero Tolerance Policy for Unverified Supply
              </h3>

              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light mb-6">
                BOG strictly rejects unverified secondary brokers and non-compliant concessions. Every consignment undergoes mandatory government ministry cross-checks, legal export licensing, and independent laboratory testing before movement protocols commence.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs font-mono text-gray-300">
                <div className="flex items-center justify-between">
                  <span>Legal Export Clearances:</span>
                  <span className="text-[#E5CC64] font-bold">100% Certified</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>AML Protocol Status:</span>
                  <span className="text-[#E5CC64] font-bold">Strict Enforcement</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Assay Protocol:</span>
                  <span className="text-[#E5CC64] font-bold">State Laboratory</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-8 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#E5CC64]">
              <span>BANKING & TRADE LEGAL STANDARD</span>
              <span>FULLY AUDITED</span>
            </div>
          </div>

          {/* Right Cards Grid: 6 Pillars */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {governancePoints.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#2e4e20] text-white p-6 border border-[#E5CC64]/30 hover:border-[#E5CC64] transition-all duration-300 flex flex-col justify-between group shadow-md hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                    <span className="text-[10px] font-mono text-[#E5CC64] bg-[#153B16] px-2.5 py-0.5 border border-[#E5CC64]/40 uppercase tracking-wider">
                      {item.tag}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#E5CC64]/60 group-hover:text-[#E5CC64] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold font-[family-name:var(--font-cinzel)] uppercase mb-2 group-hover:text-[#E5CC64] transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs text-gray-200 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-gray-300 font-mono">
                  <span>Status: Verified</span>
                  <span className="text-[#E5CC64] font-bold">[{item.code}]</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Corporate Trust Bar */}
        <div className="max-w-7xl mx-auto bg-[#F8F9FA] border-2 border-[#153B16]/10 p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <span className="block text-xl sm:text-2xl font-bold font-mono text-[#153B16]">100%</span>
            <span className="text-[10px] sm:text-xs text-gray-600 font-bold uppercase tracking-wider">Traceable Supply Chains</span>
          </div>
          <div>
            <span className="block text-xl sm:text-2xl font-bold font-mono text-[#153B16]">OECD</span>
            <span className="text-[10px] sm:text-xs text-gray-600 font-bold uppercase tracking-wider">Due Diligence Standards</span>
          </div>
          <div>
            <span className="block text-xl sm:text-2xl font-bold font-mono text-[#153B16]">SGS / Ministry</span>
            <span className="text-[10px] sm:text-xs text-gray-600 font-bold uppercase tracking-wider">Independent Assays</span>
          </div>
          <div>
            <span className="block text-xl sm:text-2xl font-bold font-mono text-[#153B16]">CIF / FOB</span>
            <span className="text-[10px] sm:text-xs text-gray-600 font-bold uppercase tracking-wider">International Trade Contracts</span>
          </div>
        </div>

      </div>
    </section>
  );
}