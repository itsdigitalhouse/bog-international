"use client";

const pillars = [
  {
    number: "01",
    title: "Mining & Exploration Field Operations",
    description: "Direct involvement in mineral concessions, technical assessment, mine development, and raw extraction across primary African mineral corridors.",
  },
  {
    number: "02",
    title: "Gold Dorè & Bullion Procurement",
    description: "Responsible sourcing of gold doré bars and unrefined gold bullion, coordinated with government-certified assayers and international refiners.",
  },
  {
    number: "03",
    title: "Copper Cathodes & Industrial Minerals",
    description: "Bulk commercial supply of Grade-A Copper Cathodes (99.99%) and industrial grade copper derivatives for global manufacturing buyers.",
  },
  {
    number: "04",
    title: "Export Logistics & Customs Execution",
    description: "Complete handling of export taxes, customs clearance, secure transit security, vaulting, and international air/sea cargo movement.",
  },
  {
    number: "05",
    title: "Quality Control & Independent Assay",
    description: "Rigorous purity and mass verification in coordination with accredited inspection authorities (SGS/Alex Stewart/Ministry Labs).",
  },
  {
    number: "06",
    title: "International Compliance & Governance",
    description: "Adherence to OECD due diligence guidelines for conflict-free supply chains, transparent banking protocols, and international trade law.",
  },
];

export default function CorePillars() {
  return (
    <section className="py-20 lg:py-24 bg-[#153B16] text-white border-y-2 border-[#E5CC64]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#E5CC64] text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase font-[family-name:var(--font-cinzel)] bg-[#E5CC64]/10 border border-[#E5CC64]/30 px-3 py-1">
              OPERATIONAL PILLARS
            </span>
          </div>

          {/* Heading matching AboutHero size */}
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-cinzel)] uppercase mx-auto leading-[0.95] tracking-wide">
            Core Commercial Capabilities
          </h2>

          <div className="w-16 h-[2px] bg-[#E5CC64] mx-auto mt-5 mb-5" />

          {/* Expanded Paragraph */}
          <p className="text-xs sm:text-sm md:text-base text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
            Bhatia Ocean Gold International maintains end-to-end operational control over the mineral supply chain. By managing extraction protocols, field inspection, assay accuracy, and customs logistics directly, we eliminate operational risk and ensure seamless delivery for global industrial institutions.
          </p>
        </div>

        {/* 100% Width Horizontal Containers with #2e4e20 background */}
        <div className="space-y-4 w-full">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#2e4e20] border border-[#E5CC64]/20 p-6 sm:p-8 w-full relative overflow-hidden group transition-all duration-300 hover:border-[#E5CC64]/60 hover:shadow-xl"
            >
              {/* Gold Side Accent Bar */}
              <div className="absolute left-0 top-0 h-full w-[3px] bg-[#E5CC64] opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Content Block */}
              <div className="w-full">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 pb-3 border-b border-white/10">
                  <span className="text-xl sm:text-2xl font-mono font-bold text-[#E5CC64]">
                    {item.number}
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white font-[family-name:var(--font-cinzel)] uppercase leading-snug group-hover:text-[#E5CC64] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Watermark Number */}
              <span className="absolute -bottom-2 -right-1 text-5xl sm:text-6xl font-mono font-extrabold text-white/5 pointer-events-none select-none group-hover:text-[#E5CC64]/10 transition-colors">
                {item.number}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}