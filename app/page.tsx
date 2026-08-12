import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import ProductCards from "./components/ProductCards";
import QualityAssay from "./components/QualityAssay";
import Compliance from "./components/Compliance";
import ForBuyers from "./components/ForBuyers";
import RequestOfferForm from "./components/RequestOfferForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3F3F3] relative flex flex-col justify-between">
      
      <article id="content">
        <Hero />
        <WhoWeAre />
        <ProductCards />
        <QualityAssay />
        <Compliance />
        <ForBuyers />
        <RequestOfferForm />
      </article>

    </main>
  );
}