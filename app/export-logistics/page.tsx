"use client";

import React from "react";
import LogisticsHero from "@/app/components/logistics/LogisticsHero";
import LogisticsOverview from "@/app/components/logistics/LogisticsOverview";
import LogisticsNetwork from "@/app/components/logistics/LogisticsNetwork";
import LogisticsProcess from "@/app/components/logistics/LogisticsProcess";
import LogisticsCompliance from "@/app/components/logistics/LogisticsCompliance";
import LogisticsCTA from "@/app/components/logistics/LogisticsCTA";

export default function ExportLogisticsPage() {
  return (
    <main className="min-h-screen bg-white text-[#153B16] font-sans selection:bg-[#E5CC64] selection:text-[#153B16]">
      <LogisticsHero />
      <LogisticsOverview />
      <LogisticsNetwork />
      <LogisticsProcess />
      <LogisticsCompliance />
      <LogisticsCTA />
    </main>
  );
}