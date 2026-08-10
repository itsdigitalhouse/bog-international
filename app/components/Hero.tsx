import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#153B16] text-[#F3F3F3] relative overflow-hidden py-24 px-6 md:px-12 lg:px-20 border-b border-[#E5CC64]/20">
      <div className="max-w-7xl mx-auto flex flex-col items-start justify-center min-h-[65vh]">
        
        <span className="text-[#E5CC64] text-sm md:text-base font-semibold tracking-widest uppercase mb-4 border border-[#E5CC64]/40 px-3 py-1 rounded">
          International B2B Commodities Partner
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl">
          BHATIA OCEAN GOLD <br />
          <span className="text-[#E5CC64]">INTERNATIONAL</span>
        </h1>

        <h2 className="text-xl sm:text-2xl font-medium text-emerald-100 mb-4 max-w-3xl">
          Mining · Minerals · Commodities International Trading & Export
        </h2>

        <p className="text-base sm:text-lg text-emerald-200/80 mb-10 max-w-2xl">
          Connecting African Resources with Global Markets.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="#products"
            className="bg-[#E5CC64] text-[#153B16] font-bold px-8 py-4 rounded hover:bg-[#D4B74F] text-center transition shadow-lg"
          >
            OUR PRODUCTS
          </Link>
          <Link
            href="#offer"
            className="border-2 border-[#E5CC64] text-[#E5CC64] font-bold px-8 py-4 rounded hover:bg-[#E5CC64] hover:text-[#153B16] text-center transition"
          >
            CONTACT US / REQUEST AN OFFER
          </Link>
        </div>

      </div>
    </section>
  );
}