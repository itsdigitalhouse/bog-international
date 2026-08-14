import MiningHero from "@/app/components/mining/MiningHero";
import MiningOperations from "@/app/components/mining/MiningOperations";
import MiningProcess from "@/app/components/mining/MiningProcess";
import MiningCTA from "@/app/components/mining/MiningCTA";

export const metadata = {
  title: "Mining & Field Operations | Bhatia Ocean Gold International",
  description: "Direct mineral concessions, technical assessment, mine development, and raw extraction across primary African mineral corridors.",
};

export default function MiningPage() {
  return (
    <main className="min-h-screen bg-[#F3F3F3] text-[#153B16]">
      <MiningHero />
      <MiningOperations />
      <MiningProcess />
      <MiningCTA />
    </main>
  );
}