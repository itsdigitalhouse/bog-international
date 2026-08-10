import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export default function CommoditiesPage() {
  const futureCommodities = [
    { title: "Chromium Ore", cat: "Minerals", status: "Approval Pending" },
    { title: "African Cloves", cat: "Agricultural Commodities", status: "Future Expansion" },
    { title: "Vanilla", cat: "Agricultural Commodities", status: "Future Expansion" },
    { title: "Coffee", cat: "Agricultural Commodities", status: "Future Expansion" },
  ];

  return (
    <main className="min-h-screen bg-[#F3F3F3] text-[#153B16]">
      <Navbar />

      <section className="bg-[#153B16] text-[#F3F3F3] py-20 px-6 md:px-12 lg:px-20 border-b border-[#E5CC64]/20">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#E5CC64] text-xs sm:text-sm font-semibold tracking-widest uppercase border border-[#E5CC64]/40 px-3 py-1 rounded">
            Scalable Expansion
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            OTHER MINERALS & COMMODITIES
          </h1>
          <p className="text-emerald-100/90 text-base sm:text-lg max-w-3xl leading-relaxed">
            Expanding African agricultural and mineral supply networks for international markets under strict compliance and quality verification.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {futureCommodities.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#E5CC64] bg-[#153B16] px-2 py-0.5 rounded">
                  {item.cat}
                </span>
                <h3 className="font-bold text-xl mt-3 mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 mb-4">{item.status}</p>
              </div>
              <Link
                href="/for-buyers"
                className="text-xs font-bold text-[#153B16] hover:text-[#E5CC64] transition underline"
              >
                Inquire Commercial Terms &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}