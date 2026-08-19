import ForBuyersHero from "../components/ForBuyers/ForBuyersHero";
import BuyerSourcing from "../components/ForBuyers/BuyerSourcing";
import BuyerApproach from "../components/ForBuyers/BuyerApproach";
import BuyerProcess from "../components/ForBuyers/BuyerProcess";
import BuyerRequirements from "../components/ForBuyers/BuyerRequirements";
import BuyerTrust from "../components/ForBuyers/BuyerTrust";
import ForBuyersCTA from "../components/ForBuyers/ForBuyersCTA";


export default function ForBuyersPage() {
  return (
    <>

      <main>
        <ForBuyersHero />

        <BuyerSourcing />

        <BuyerApproach />

        <BuyerProcess />

        <BuyerRequirements />

        <BuyerTrust />

        <ForBuyersCTA />
      </main>
    </>
  );
}