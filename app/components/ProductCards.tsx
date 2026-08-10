import Link from "next/link";

export default function ProductCards() {
  const products = [
    {
      title: "GOLD TRADING & EXPORT",
      category: "Gold",
      desc: "Gold sourcing, supply, trading, refining coordination, assay, and bullion operations for international buyers.",
      link: "#offer",
      cta: "REQUEST GOLD OFFER"
    },
    {
      title: "COPPER & COPPER CATHODES",
      category: "Copper",
      desc: "High-grade Copper Cathodes trading and export with verified specifications, packaging, and documented origin.",
      link: "#offer",
      cta: "REQUEST COPPER OFFER"
    },
    {
      title: "OTHER MINERALS & COMMODITIES",
      category: "Minerals",
      desc: "Sourcing and international B2B distribution of verified African-origin minerals and industrial commodities.",
      link: "#offer",
      cta: "SUBMIT REQUIREMENT"
    }
  ];

  return (
    <section id="products" className="py-20 px-6 md:px-12 lg:px-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-[#153B16]/70 font-semibold uppercase tracking-widest text-sm">
            Core Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#153B16] mt-2">
            OUR PRODUCTS & COMMODITIES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#F3F3F3] border border-gray-200 rounded-lg p-8 flex flex-col justify-between hover:shadow-lg transition duration-300"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#153B16] bg-[#E5CC64] px-2.5 py-1 rounded">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-[#153B16] mt-4 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <Link
                href={item.link}
                className="block text-center bg-[#153B16] text-[#E5CC64] font-bold py-3 px-4 rounded hover:bg-opacity-95 text-sm tracking-wide transition"
              >
                {item.cta}
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}