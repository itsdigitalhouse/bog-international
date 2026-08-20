"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  FileCheck2,
  SearchCheck,
  Globe2,
  Lock,
  CheckCircle2,
  BadgeCheck,
  X,
  FileText,
  Download,
} from "lucide-react";

// COMPLIANCE PILLARS WITH DETAILED DOCUMENTS FOR MODAL
const compliancePillars = [
  {
    id: "kyc-kyb",
    number: "01",
    title: "KYC / KYB Protocols",
    subtitle: "Counterparty Verification",
    description:
      "Structured identification and verification of buyers, sellers, and ultimate beneficial owners (UBO) before agreement execution.",
    icon: ShieldCheck,
    status: "Verified Onboarding",
    subItems: ["UBO Identification", "Corporate Registry Checks", "PEP & Sanctions Screening"],
    requiredDocs: [
      "Certificate of Incorporation / Trade License",
      "Articles of Association & Memorandum",
      "Passport copies of Ultimate Beneficial Owners (UBO > 10%)",
      "Official Bank Reference Letter / Comfort Letter",
      "Completed BOG KYB Onboarding Questionnaire",
    ],
  },
  {
    id: "aml-cft",
    number: "02",
    title: "AML / CFT Standards",
    subtitle: "Financial Integrity",
    description:
      "Rigorous anti-money laundering protocols aligned with international banking and commodity transaction regulatory guidelines.",
    icon: SearchCheck,
    status: "Active Monitoring",
    subItems: ["Transaction Monitoring", "Source of Funds Audit", "Institutional Risk Assessment"],
    requiredDocs: [
      "Proof of Source of Funds (Bank Statement / Financial Audit)",
      "Anti-Money Laundering (AML) Compliance Declaration",
      "World-Check / Dow Jones Sanctions Screening Clearance",
      "Authorized Signatory Power of Attorney (PoA)",
    ],
  },
  {
    id: "chain-custody",
    number: "03",
    title: "Chain of Custody",
    subtitle: "Provenance & Ownership",
    description:
      "End-to-end trace verification of origin, mining concessions, and clear title ownership documentation for all mineral shipments.",
    icon: FileCheck2,
    status: "OECD Compliant",
    subItems: ["Mine Site Traceability", "Export License Verification", "Clean Title Guarantee"],
    requiredDocs: [
      "Official Mine Concession / Production License",
      "Government Assay & Export Tax Clearance Certificate",
      "Commercial Invoice & Detailed Packing List",
      "Chain of Ownership & Title Transfer Documentation",
      "SGS / Alex Stewart Third-Party Inspection Certificate",
    ],
  },
  {
    id: "export-regulatory",
    number: "04",
    title: "Global Export Regulatory",
    subtitle: "Trade & Customs Compliance",
    description:
      "Full alignment with international trade customs, export duties, and official cross-border shipping certifications.",
    icon: Globe2,
    status: "Full Documentation",
    subItems: ["Customs Clearance Docs", "Certificate of Origin", "Chamber of Commerce Validated"],
    requiredDocs: [
      "Chamber of Commerce Certificate of Origin",
      "Customs Export Declaration & Clearance Release",
      "Air Waybill (AWB) / Ocean Bill of Lading (B/L)",
      "Customs Bond & Transit Insurance Cover",
    ],
  },
];

export default function Compliance() {
  const [activePillar, setActivePillar] = useState(0);
  const [modalData, setModalData] = useState<typeof compliancePillars[0] | null>(null);

  return (
    <section
      id="compliance"
      className="relative overflow-hidden bg-[#F3F3F3] text-[#153B16] selection:bg-[#E5CC64] selection:text-[#153B16]"
    >
      {/* BACKGROUND GRID */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(#153B16 1px, transparent 1px),
              linear-gradient(90deg, #153B16 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28 xl:px-20">
        
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-[#153B16]/15 pb-5">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#E5CC64] sm:w-14" />
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#153B16] sm:text-[10px]">
              Regulatory Assurance & Responsible Sourcing
            </span>
          </div>
          <span className="hidden font-mono text-[8px] tracking-[0.3em] text-[#153B16]/30 sm:block">
            BOG / COMPLIANCE PROTOCOL
          </span>
        </div>

        {/* INTRODUCTION */}
        <div className="grid gap-8 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          <div>
            <span className="text-[8px] font-mono font-bold uppercase tracking-[0.28em] text-[#153B16]/60 bg-[#E5CC64]/30 px-2.5 py-1 inline-block">
              Institutional Trade Security
            </span>
            <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-cinzel)] text-[34px] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[42px] md:text-[46px] lg:text-[52px]">
              Responsible Trade <br />
              <span className="text-[#B79D32]">Built on Uncompromising Compliance.</span>
            </h2>
          </div>

          <div className="lg:pb-1 border-l-2 border-[#153B16]/10 pl-6">
            <p className="max-w-xl text-sm leading-7 text-[#153B16]/90 sm:text-base sm:leading-8 font-medium">
              Bhatia Ocean Gold enforces international AML, KYC, and supply chain due diligence standards to safeguard buyers, investors, and regulatory partners across global jurisdictions.
            </p>
          </div>
        </div>

        {/* MAIN COMPLIANCE LAYOUT */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12 items-stretch">
          
          {/* LEFT — CORE ASSURANCE DASHBOARD CARD */}
          <div className="relative min-h-[480px] bg-[#153B16] p-8 text-[#F3F3F3] sm:p-10 flex flex-col justify-between shadow-xl border border-[#153B16]">
            
            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-[#E5CC64]/20 pb-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#E5CC64] font-bold">
                  Compliance Framework
                </span>
                <div className="inline-flex items-center gap-1.5 bg-[#E5CC64]/10 border border-[#E5CC64]/30 px-2.5 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E5CC64] animate-pulse" />
                  <span className="text-[8px] font-mono font-bold text-[#E5CC64] uppercase tracking-wider">
                    Audit Ready
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="max-w-md font-[family-name:var(--font-cinzel)] text-2xl font-medium leading-tight sm:text-3xl text-white">
                  Zero Tolerance for Non-Compliant Commodities.
                </h3>
                <p className="mt-4 text-xs leading-relaxed text-white/80">
                  Every mineral and agro trade processed through BOG undergoes multi-layered legal, financial, and origin verification before contract finalization.
                </p>
              </div>
            </div>

            {/* LIVE VERIFICATION METRICS & DOWNLOAD CTA */}
            <div className="relative z-10 mt-8 space-y-4">
              <div className="bg-black/20 p-5 border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/70 font-mono text-[10px] uppercase">KYC/KYB Clearance Rate</span>
                  <span className="text-[#E5CC64] font-bold font-mono">100% Verified</span>
                </div>
                <div className="w-full bg-white/10 h-1">
                  <div className="bg-[#E5CC64] h-1 w-full" />
                </div>
                <div className="flex items-center justify-between text-[10px] text-white/60 pt-1 font-mono">
                  <span>Refinery & Banking Protocol</span>
                  <span>OECD & FATF Aligned</span>
                </div>
              </div>

              {/* QUICK POLICY DOWNLOAD BUTTON */}
              <button 
                onClick={() => alert("Downloading BOG Institutional Compliance Dossier (PDF)...")}
                className="w-full flex items-center justify-between bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-3 text-white text-[10px] font-mono font-bold uppercase tracking-wider transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Download size={14} className="text-[#E5CC64]" />
                  Download BOG Compliance Policy (PDF)
                </span>
                <span className="text-[9px] text-[#E5CC64]">2.4 MB</span>
              </button>
            </div>

            <div className="relative z-10 mt-6 pt-4 border-t border-[#E5CC64]/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Lock size={14} className="text-[#E5CC64]" />
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-white/90">
                  Institutional Security Standard
                </span>
              </div>
              <BadgeCheck size={18} className="text-[#E5CC64]" />
            </div>
          </div>

          {/* RIGHT — INTERACTIVE REGULATORY PILLARS */}
          <div className="bg-white border border-[#153B16]/15 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
            <div className="divide-y divide-[#153B16]/15">
              {compliancePillars.map((item, index) => {
                const Icon = item.icon;
                const isActive = activePillar === index;

                return (
                  <div
                    key={item.number}
                    onMouseEnter={() => setActivePillar(index)}
                    className={`group py-6 transition-all duration-300 cursor-pointer ${
                      isActive ? "pl-2" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <span className="font-mono text-xs font-bold text-[#B79D32] pt-1">
                          {item.number}
                        </span>
                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className="font-[family-name:var(--font-cinzel)] text-lg font-bold text-[#153B16]">
                              {item.title}
                            </h3>
                            <span className="hidden sm:inline-block text-[8px] font-mono font-bold uppercase text-[#153B16]/50 bg-[#F3F3F3] px-2 py-0.5">
                              {item.status}
                            </span>
                          </div>
                          <p className="text-[10px] font-mono uppercase tracking-wider text-[#B79D32] mt-0.5 font-semibold">
                            {item.subtitle}
                          </p>
                          <p className="mt-2 text-xs leading-relaxed text-[#153B16]/80 max-w-xl">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className={`p-2.5 transition-colors shrink-0 ${
                        isActive ? "bg-[#153B16] text-[#E5CC64]" : "bg-[#F3F3F3] text-[#153B16]"
                      }`}>
                        <Icon size={18} />
                      </div>
                    </div>

                    {/* SUB-ITEMS BADGES & VIEW DOCUMENTS TRIGGER */}
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-2 pl-8 pt-1">
                      <div className="flex flex-wrap gap-2">
                        {item.subItems.map((sub, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 text-[9px] font-mono text-[#153B16] bg-[#F3F3F3] border border-[#153B16]/10 px-2.5 py-1"
                          >
                            <CheckCircle2 size={10} className="text-[#B79D32]" />
                            {sub}
                          </span>
                        ))}
                      </div>

                      {/* TRIGGER CHECKLIST MODAL */}
                      <button
                        onClick={() => setModalData(item)}
                        className="inline-flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase text-[#153B16] hover:text-[#B79D32] underline underline-offset-4 transition-colors pt-2 sm:pt-0"
                      >
                        <FileText size={12} />
                        View Required Docs
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* BOTTOM CTA BAR */}
        <div className="mt-12 bg-[#153B16] p-8 sm:p-10 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b-2 border-[#E5CC64]">
          <div>
            <span className="text-[9px] font-mono font-bold uppercase tracking-[0.25em] text-[#E5CC64]">
              Institutional Due Diligence
            </span>
            <h3 className="font-[family-name:var(--font-cinzel)] text-xl sm:text-2xl font-semibold mt-1">
              Ready to Initiate KYB & Trade Verification?
            </h3>
          </div>

          <Link
            href="/compliance"
            className="group inline-flex items-center gap-3 bg-[#E5CC64] px-7 py-3.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#153B16] transition-all duration-300 hover:bg-white shrink-0"
          >
            Submit KYB Inquiry
            <ArrowUpRight
              size={14}
              className="text-[#153B16] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

      </div>

      {/* DOCUMENT CHECKLIST MODAL */}
      {modalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white border border-[#153B16] max-w-xl w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setModalData(null)}
              className="absolute right-5 top-5 p-1 text-[#153B16] hover:bg-[#F3F3F3] transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2 border-b border-[#153B16]/15 pb-4">
              <FileText size={18} className="text-[#B79D32]" />
              <div>
                <span className="text-[9px] font-mono font-bold uppercase text-[#B79D32] tracking-wider">
                  Required Documentation Checklist
                </span>
                <h3 className="font-[family-name:var(--font-cinzel)] text-xl font-bold text-[#153B16]">
                  {modalData.title}
                </h3>
              </div>
            </div>

            <p className="text-xs text-[#153B16]/80 mt-4 leading-relaxed">
              To complete verification under {modalData.title}, trade partners must submit the following certified documentation:
            </p>

            <ul className="mt-4 space-y-2.5">
              {modalData.requiredDocs.map((doc, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-[#153B16] bg-[#F3F3F3] p-3 border-l-2 border-[#153B16]">
                  <CheckCircle2 size={14} className="text-[#B79D32] shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-[#153B16]/15 flex items-center justify-between">
              <span className="text-[9px] font-mono text-[#153B16]/60 uppercase">
                BOG Compliance Division
              </span>
              <button
                onClick={() => setModalData(null)}
                className="bg-[#153B16] text-white text-[9px] font-mono font-bold uppercase px-4 py-2 tracking-wider hover:bg-[#B79D32] hover:text-[#153B16] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}