import React from "react";
import MadagascarHero from "./MadagascarHero";
import MadagascarOverview from "./MadagascarOverview";
import MadagascarOperations from "./MadagascarOperations";
import MadagascarSourcingModel from "./MadagascarSourcingModel";
import NetworkBanner from "./NetworkBanner";
import SourcingInquiryCTA from "./SourcingInquiryCTA";

export const metadata = {
  title: "Madagascar Sourcing | Bhatia Ocean Gold (BOG International)",
  description:
    "Explore strategic sourcing opportunities in Madagascar across Agricultural & Food Commodities (BMS) and Mining & Minerals (ALDO Partners).",
};

export default function MadagascarPage() {
  return (
    <main className="bg-[#153B16] min-h-screen text-[#F3F3F3] selection:bg-[#E5CC64] selection:text-[#153B16]">
      {/* 01 — Madagascar Hero */}
      <MadagascarHero />

      {/* 02 — Strategic Market Overview */}
      <MadagascarOverview />

      {/* 03 — Independent Specialized Operations */}
      <MadagascarOperations />

      {/* 04 — Sourcing Model & Process */}
      <MadagascarSourcingModel />

      {/* 05 — Global Sourcing Network Bridge */}
      <NetworkBanner
        currentMarket="MADAGASCAR"
        secondaryMarket="UGANDA"
        secondaryMarketPath="/global-sourcing/uganda"
        globalSourcingPath="/global-sourcing"
        hasUgandaPage={true}
      />

      {/* 06 — Commercial Sourcing Inquiry CTA */}
      <SourcingInquiryCTA
        marketName="Madagascar"
        inquiryPath="/contact"
        globalSourcingPath="/global-sourcing"
        heading="Looking to Source from Madagascar?"
        agroOperationName="BEST SPICES OF MADAGASCAR (BMS)"
        mineralOperationName="ALDO PARTNERS"
      />
    </main>
  );
}