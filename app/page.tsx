import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import ProductCards from "./components/ProductCards";
import Compliance from "./components/Compliance";
import RequestOfferForm from "./components/RequestOfferForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3F3F3]">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <ProductCards />
      <Compliance />
      <RequestOfferForm />
      <Footer />
    </main>
  );
}