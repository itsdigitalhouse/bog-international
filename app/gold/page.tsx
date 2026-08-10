import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export default function GoldPage() {
  const goldFeatures = [
    {
      title: "Gold Sourcing & Mining Integration",
      desc: "Direct integration with licensed mining operations across key East African hubs, ensuring legally compliant and ethical supply chains.",
    },
    {
      title: "Assay & Quality Verification",
      desc: "Independent laboratory assaying and purity verification for all dorè bars and refined gold prior to international delivery.",
    },
    {
      title: "Refinery Coordination",
      desc: "Structured logistics and refining agreements with LBMA-accredited and certified international refineries.",
    },
    {
      title: "Secure Export & Logistics",
      desc: "End-to-end chain of custody management, international air freight, security transport, and full export clearance handling.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F3F3F3] text-[#153B16]">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#153B16] text-[#F3F3F3] py-20 px-6 md:px-12 lg:px-20 border-b border-[#E5CC64]/20">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#E5CC64] text-xs sm:text-sm font-semibold tracking-widest uppercase border border-[#E5CC64]/40 px-3 py-1 rounded">
            Precious Metals
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            GOLD TRADING, SOURCING & BULLION
          </h1>
          <p className="text-emerald-100/90 text-base sm:text-lg max-w-3xl leading-relaxed">
            Bhatia Ocean Gold International connects African mineral reserves with global bullion markets, refineries, and institutional buyers through ethically verified sourcing models.
          </p>
        </div>
      </section>

      {/* Key Operations Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
          Our Gold Supply Chain & Operations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {goldFeatures.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <span className="text-[#E5CC64] font-bold text-xl block mb-2">0{idx + 1}</span>
              <h3 className="font-bold text-xl mb-3 text-[#153B16]">{item.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Responsible Sourcing Banner */}
        <div className="bg-[#153B16] text-[#F3F3F3] p-8 md:p-12 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-[#E5CC64] mb-3">
              Responsible Sourcing & Traceability
            </h3>
            <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed">
              We strictly adhere to OECD due diligence guidance for responsible supply chains of minerals from high-risk areas. All gold transactions include complete chain-of-custody documentation and origin certification.
            </p>
          </div>
          <Link
            href="/#offer"
            className="bg-[#E5CC64] text-[#153B16] font-bold py-4 px-8 rounded hover:bg-[#D4B74F] transition text-sm whitespace-nowrap"
          >
            SUBMIT B2B ENQUIRY
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}