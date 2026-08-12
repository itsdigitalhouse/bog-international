import AboutHero from "../components/about/AboutHero";
import ExecutiveOverview from "../components/about/ExecutiveOverview";
import CorePillars from "../components/about/CorePillars";
import CorporateGovernance from "../components/about/CorporateGovernance";
import AboutCTA from "../components/about/AboutCTA";

export const metadata = {
  title: "About Us | Bhatia Ocean Gold International",
  description: "Learn about Bhatia Ocean Gold International - direct African mineral sourcing, gold bullion trading, copper export, and B2B supply chain compliance.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <AboutHero />
      <ExecutiveOverview />
      <CorePillars />
      <CorporateGovernance />
      <AboutCTA />
    </main>
  );
}