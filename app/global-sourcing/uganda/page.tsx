import UgandaHero from "./UgandaHero";
import UgandaOverview from "./UgandaOverview";
import UgandaProducts from "./UgandaProducts";
import UgandaSourcingModel from "./UgandaSourcingModel";
import NetworkBanner from "./NetworkBanner";
import SourcingInquiryCTA from "./SourcingInquiryCTA";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#153B16]">
      <UgandaHero />
      <UgandaOverview />
      <UgandaProducts />
      <UgandaSourcingModel />
      <NetworkBanner />
      <SourcingInquiryCTA />
    </main>
  );
}