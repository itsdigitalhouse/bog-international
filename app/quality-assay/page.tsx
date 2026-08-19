import QualityAssayHero from "../components/quality-assay/QualityAssayHero";
import QualityOverview from "../components/quality-assay/QualityOverview";
import AssayProcess from "../components/quality-assay/AssayProcess";
import QualityVerification from "../components/quality-assay/QualityVerification";
import DocumentationTraceability from "../components/quality-assay/DocumentationTraceability";
import QualityAssayCTA from "../components/quality-assay/QualityAssayCTA";

export const metadata = {
  title: "Quality & Assay Verification | Bathia Ocean Gold",
  description:
    "Rigorous international assaying, purity verification, and supply chain traceability standards for gold, minerals, and agro commodities.",
};

export default function QualityAssayPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#153B16] overflow-x-hidden selection:bg-[#E5CC64] selection:text-[#153B16]">
      {/* 01 — HERO SECTION (DARK GREEN) */}
      <QualityAssayHero />

      {/* 02 — OVERVIEW SECTION (LIGHT WHITE) */}
      <QualityOverview />

      {/* 03 — ASSAY PROCESS PIPELINE (DARK GREEN) */}
      <AssayProcess />

      {/* 04 — THIRD-PARTY VERIFICATION & LABS (LIGHT WHITE) */}
      <QualityVerification />

      {/* 05 — DOCUMENTATION & TRACEABILITY (DARK GREEN) */}
      <DocumentationTraceability />

      {/* 06 — FINAL CTA & COMMERCIAL TERMINAL (LIGHT WHITE) */}
      <QualityAssayCTA />
    </main>
  );
}