import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function QualityAssayPage() {
  return (
    <main className="min-h-screen bg-[#F3F3F3] text-[#153B16]">
      <Navbar />

      <section className="bg-[#153B16] text-[#F3F3F3] py-20 px-6 md:px-12 lg:px-20 border-b border-[#E5CC64]/20">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#E5CC64] text-xs sm:text-sm font-semibold tracking-widest uppercase border border-[#E5CC64]/40 px-3 py-1 rounded">
            Verification & Integrity
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            QUALITY ASSURANCE & ASSAY
          </h1>
          <p className="text-emerald-100/90 text-base sm:text-lg max-w-3xl leading-relaxed">
            Establishing absolute product purity, accurate weight verification, and certified assay documentation prior to export shipment.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="font-bold text-xl mb-3">Independent Laboratory Testing</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Third-party lab assaying to confirm metal purity levels (including 99.99% Grade-A Copper Cathodes & verified Gold fineness).</p>
        </div>
        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="font-bold text-xl mb-3">Weight Verification & Inspection</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Rigorous independent weighing, packing inspection, and official export documentation before loading.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}