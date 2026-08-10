import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RequestOfferForm from "@/app/components/RequestOfferForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F3F3F3] text-[#153B16]">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-[#153B16] text-[#F3F3F3] py-20 px-6 md:px-12 lg:px-20 border-b border-[#E5CC64]/20">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#E5CC64] text-xs sm:text-sm font-semibold tracking-widest uppercase border border-[#E5CC64]/40 px-3 py-1 rounded">
            Trading Desk & Corporate Office
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            CONTACT US
          </h1>
          <p className="text-emerald-100/90 text-base sm:text-lg max-w-3xl leading-relaxed">
            Get in touch with Bhatia Ocean Gold International for commercial B2B enquiries, gold bullion sourcing, copper cathode supply, or joint venture mining opportunities.
          </p>
        </div>
      </section>

      {/* Contact Info & Direct Enquiry Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-bold text-xl mb-3 text-[#153B16]">Official Email</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-2">For general, trade, and commercial offers:</p>
            <p className="font-bold text-base text-[#153B16]">info@bhatiaoceangold.com</p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-bold text-xl mb-3 text-[#153B16]">Operations & Sourcing</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-2">Primary Sourcing & Mining Hub:</p>
            <p className="font-bold text-base text-[#153B16]">Uganda & East Africa Region</p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-bold text-xl mb-3 text-[#153B16]">Compliance Desk</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-2">For KYC, KYB, and assay verification:</p>
            <p className="font-bold text-base text-[#153B16]">compliance@bhatiaoceangold.com</p>
          </div>
        </div>

        {/* Embedded Request Form */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-2 sm:p-6">
          <RequestOfferForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}