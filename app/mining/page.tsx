import Link from "next/link";

export default function MiningPage() {
  const pillars = [
    {
      title: "Exploration & Resource Assessment",
      desc: "Geological surveys, site evaluations, and resource estimation across mineral-rich African concessions.",
    },
    {
      title: "Sustainable Mine Management",
      desc: "Deploying modern extraction technology and structured operational protocols to maximize efficiency.",
    },
    {
      title: "Local Community Engagement",
      desc: "Building local capacity, ensuring fair labor standards, and contributing to regional socio-economic development.",
    },
    {
      title: "Environmental Stewardship",
      desc: "Strict compliance with environmental impact guidelines, land rehabilitation, and responsible tailings management.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F3F3F3] text-[#153B16]">

      {/* Hero Section */}
      <section className="bg-[#153B16] text-[#F3F3F3] py-20 px-6 md:px-12 lg:px-20 border-b border-[#E5CC64]/20">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#E5CC64] text-xs sm:text-sm font-semibold tracking-widest uppercase border border-[#E5CC64]/40 px-3 py-1 rounded">
            Upstream Operations
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            MINING & RESOURCE DEVELOPMENT
          </h1>
          <p className="text-emerald-100/90 text-base sm:text-lg max-w-3xl leading-relaxed">
            Bhatia Ocean Gold International actively engages in upstream mining developments, strategic concession partnerships, and sustainable resource extraction across Africa.
          </p>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
          Core Pillars of Our Mining Strategy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <span className="text-[#E5CC64] font-bold text-xl block mb-2">0{idx + 1}</span>
              <h3 className="font-bold text-xl mb-3 text-[#153B16]">{item.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Joint Venture Banner */}
        <div className="bg-[#153B16] text-[#F3F3F3] p-8 md:p-12 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-[#E5CC64] mb-3">
              Partnership & Joint Venture Opportunities
            </h3>
            <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed">
              We collaborate with concession owners, institutional investors, and technical equipment providers to scale mining capacity and streamline commodity supply chains.
            </p>
          </div>
          <Link
            href="/#offer"
            className="bg-[#E5CC64] text-[#153B16] font-bold py-4 px-8 rounded hover:bg-[#D4B74F] transition text-sm whitespace-nowrap"
          >
            DISCUSS PARTNERSHIP
          </Link>
        </div>
      </section>

    </main>
  );
}