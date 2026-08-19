"use client";

export default function UgandaHero() {
  const productsList = [
    "GOLD",
    "COPPER",
    "VANILLA",
    "COFFEE",
    "GRAINS",
    "BEANS",
    "AGRICULTURAL PRODUCTS",
  ];

  return (
    <section className="bg-[#F3F3F3] text-[#153B16] relative border-b border-[#153B16]/10 overflow-hidden">
      {/* Editorial Structural Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="max-w-[1400px] h-full mx-auto grid grid-cols-12 px-6 sm:px-12 border-x border-[#153B16]/10">
          <div className="col-span-12 lg:col-span-7 border-r border-[#153B16]/10 h-full hidden lg:block"></div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 py-10 md:py-14 relative z-10">
        {/* Top Technical Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-y-2 pb-4 border-b border-[#153B16]/15 text-[11px] uppercase tracking-[0.2em] font-[family-name:var(--font-cinzel)] text-[#153B16]/70">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 bg-[#E5CC64] inline-block"></span>
            <span className="font-bold text-[#153B16]">01 — UGANDA OPERATIONS</span>
          </div>
          <div className="flex items-center gap-4">
            <span>EAST AFRICA</span>
            <span className="hidden sm:inline text-[#E5CC64]">|</span>
            <span className="hidden sm:inline">SOURCE MARKET ID: UG-01</span>
          </div>
        </div>

        {/* Main Editorial Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center pt-8 pb-8">
          
          {/* LEFT: Content Block */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 pr-0 lg:pr-6">
            
            {/* Entity Branding */}
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#153B16]/60 font-medium block">
                PRIMARY SOURCING ENTITY
              </span>
              <h2 className="text-lg sm:text-xl font-bold tracking-wider text-[#153B16] font-[family-name:var(--font-cinzel)] uppercase">
                BHATIA OCEAN GOLD <span className="text-[#153B16]/60 font-semibold">(BOG INTERNATIONAL)</span>
              </h2>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#153B16] font-[family-name:var(--font-cinzel)] leading-[1.15] tracking-tight">
                Strategic Sourcing <br />
                <span className="relative inline-block pb-1">
                  from Uganda
                  <span className="absolute bottom-0 left-0 w-20 h-[2.5px] bg-[#E5CC64]"></span>
                </span>
              </h1>
              <p className="text-base sm:text-lg font-bold text-[#153B16] mt-2 font-[family-name:var(--font-cinzel)] tracking-wide">
                Minerals, Agricultural & Natural Products
              </p>
            </div>

            {/* Paragraph */}
            <p className="text-[#153B16]/80 text-sm sm:text-base leading-relaxed max-w-xl font-sans">
              Bhatia Ocean Gold (BOG International) is our Uganda-based sourcing and trading operation, connecting international buyers with opportunities across minerals, agricultural commodities and other natural-resource products.
            </p>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#sourcing-inquiry"
                className="group relative inline-flex items-center justify-center bg-[#153B16] text-[#F3F3F3] font-bold px-7 py-3.5 text-[11px] uppercase tracking-[0.2em] font-[family-name:var(--font-cinzel)] transition-all duration-300 hover:bg-[#113012] border border-[#153B16]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  REQUEST A SOURCING INQUIRY
                  <span className="w-1.5 h-1.5 bg-[#E5CC64] transition-transform duration-300 group-hover:scale-150"></span>
                </span>
              </a>

              <a
                href="#uganda-products"
                className="group inline-flex items-center justify-center border-2 border-[#153B16] text-[#153B16] font-bold px-7 py-3.5 text-[11px] uppercase tracking-[0.2em] font-[family-name:var(--font-cinzel)] transition-all duration-300 hover:bg-[#153B16]/5"
              >
                EXPLORE UGANDA PRODUCTS
                <span className="ml-2 text-[#E5CC64] font-bold transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>

          </div>

          {/* RIGHT: Compact Visual Box */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[380px] bg-[#153B16] border border-[#153B16]/20 overflow-hidden group shadow-sm">
              <img
                src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Uganda Natural Resource Sourcing Environment"
                className="w-full h-full object-cover object-center grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 opacity-75"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#153B16] via-[#153B16]/30 to-transparent"></div>

              <div className="absolute top-3.5 left-3.5 bg-[#F3F3F3]/90 border border-[#153B16]/20 backdrop-blur-sm px-3 py-1 text-[9px] tracking-widest text-[#153B16] font-bold uppercase font-[family-name:var(--font-cinzel)]">
                OPERATIONAL HUB: KAMPALA / REGIONAL ORIGINS
              </div>

              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex justify-between items-end text-[#F3F3F3] border-t border-[#E5CC64]/40 pt-2.5">
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-[#E5CC64]">SOURCING ENVIRONMENT</p>
                  <p className="text-xs font-bold font-[family-name:var(--font-cinzel)] tracking-wider">UGANDA NATURAL RESOURCES</p>
                </div>
                <span className="text-xs font-bold text-[#E5CC64] font-[family-name:var(--font-cinzel)]">01 / UG</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Restrained Product Category Strip */}
        <div className="mt-2 pt-4 border-t border-[#153B16]/15">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#153B16]/60 font-[family-name:var(--font-cinzel)] shrink-0">
              UGANDA PRODUCT CATEGORIES:
            </span>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold tracking-wider text-[#153B16] font-[family-name:var(--font-cinzel)]">
              {productsList.map((product, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="hover:text-[#153B16]/70 transition-colors cursor-default">{product}</span>
                  {idx < productsList.length - 1 && (
                    <span className="text-[#E5CC64] font-normal">•</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}