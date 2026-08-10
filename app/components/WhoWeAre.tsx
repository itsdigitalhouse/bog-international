export default function WhoWeAre() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-20 bg-[#F3F3F3] text-[#153B16]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div>
          <span className="text-[#153B16]/70 font-semibold uppercase tracking-widest text-sm">
            About Bhatia Ocean Gold
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">
            Who We Are
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#153B16]/90 mb-6">
            Bhatia Ocean Gold International is an international commodities company connecting African resources with global markets through responsible sourcing, commodity trading, export coordination, and international B2B supply.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="p-4 border-l-4 border-[#E5CC64] bg-white shadow-sm">
              <h3 className="font-bold text-lg">Mining</h3>
              <p className="text-sm text-gray-600">Resource projects & development</p>
            </div>
            <div className="p-4 border-l-4 border-[#E5CC64] bg-white shadow-sm">
              <h3 className="font-bold text-lg">Gold</h3>
              <p className="text-sm text-gray-600">Sourcing, trading & bullion</p>
            </div>
            <div className="p-4 border-l-4 border-[#E5CC64] bg-white shadow-sm">
              <h3 className="font-bold text-lg">Copper</h3>
              <p className="text-sm text-gray-600">Copper Cathodes & B2B export</p>
            </div>
            <div className="p-4 border-l-4 border-[#E5CC64] bg-white shadow-sm">
              <h3 className="font-bold text-lg">Commodities</h3>
              <p className="text-sm text-gray-600">African-origin minerals</p>
            </div>
          </div>
        </div>

        <div className="bg-[#153B16] text-[#F3F3F3] p-8 md:p-12 rounded-lg shadow-xl relative overflow-hidden">
          <h3 className="text-2xl font-bold mb-4 text-[#E5CC64]">
            International B2B Supply
          </h3>
          <p className="text-emerald-100/90 leading-relaxed mb-6">
            We focus on connecting commodity supply with international demand. Our operations are grounded in regulatory compliance, assay verification, and complete supply chain transparency.
          </p>
          <ul className="space-y-3 text-sm text-emerald-200">
            <li className="flex items-center gap-2">
              <span className="text-[#E5CC64]">✓</span> KYC / AML Compliance
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#E5CC64]">✓</span> Independent Laboratory Assay
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#E5CC64]">✓</span> End-to-End Export Coordination
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}