import Link from "next/link";

export default function CopperPage() {
  const specs = [
    { label: "Product", value: "Copper Cathodes (Grade A)" },
    { label: "Purity", value: "99.99% Cu (Rejection below 99.97%)" },
    { label: "Origin", value: "Verified African Mining Regions" },
    { label: "Standard", value: "BS EN 1978:1998 / LME Grade A Equivalent" },
    { label: "Packaging", value: "Bundled & Strapped for Maritime Export" },
    { label: "Delivery Terms", value: "CIF / FOB (Subject to Contract)" },
  ];

  return (
    <main className="min-h-screen bg-[#F3F3F3] text-[#153B16]">

      {/* Hero Section */}
      <section className="bg-[#153B16] text-[#F3F3F3] py-20 px-6 md:px-12 lg:px-20 border-b border-[#E5CC64]/20">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#E5CC64] text-xs sm:text-sm font-semibold tracking-widest uppercase border border-[#E5CC64]/40 px-3 py-1 rounded">
            Grade-A Commodities
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mt-4 mb-6">
            COPPER & COPPER CATHODES
          </h1>
          <p className="text-emerald-100/90 text-base sm:text-lg max-w-3xl leading-relaxed">
            Bhatia Ocean Gold International sources, trades, and coordinates the international B2B export of high-grade electrolytic copper cathodes to global industrial buyers.
          </p>
        </div>
      </section>

      {/* Specifications Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
          Product Specifications & Quality Standards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {specs.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <span className="text-xs font-bold text-[#E5CC64] uppercase tracking-wider block mb-1">
                {item.label}
              </span>
              <p className="font-bold text-lg text-[#153B16]">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Commercial & Compliance Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-xl border border-gray-200 shadow-sm">
          <div>
            <h3 className="text-2xl font-bold mb-4">Export Procedures & Logistics</h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
              Every copper shipment undergoes rigorous inspection and independent laboratory testing before loading. We ensure all export documentations, customs clearance, and origin verifications are handled in full compliance with international trade laws.
            </p>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-[#153B16] font-bold">✓</span> Full SGS or equivalent independent inspection
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#153B16] font-bold">✓</span> Secure packaging for international ocean freight
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#153B16] font-bold">✓</span> Clear origin and chain of custody documentation
              </li>
            </ul>
          </div>

          <div className="bg-[#153B16] text-[#F3F3F3] p-8 rounded-lg">
            <h4 className="text-xl font-bold text-[#E5CC64] mb-3">Submit Copper Requirement</h4>
            <p className="text-sm text-emerald-200/90 mb-6">
              Contact our trading desk with your target specifications, required volume (MT), and destination port for an official offer.
            </p>
            <Link
              href="/#offer"
              className="block text-center bg-[#E5CC64] text-[#153B16] font-bold py-3 px-6 rounded hover:bg-[#D4B74F] transition text-sm"
            >
              REQUEST COPPER OFFER
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}