export default function Compliance() {
  return (
    <section id="compliance" className="py-20 px-6 md:px-12 lg:px-20 bg-[#F3F3F3] text-[#153B16]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#153B16]/70 font-semibold uppercase tracking-widest text-sm">
            Trust & Quality Assurance
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            COMPLIANCE & RESPONSIBLE SOURCING
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
            Establishing absolute credibility with international buyers, refineries, and banking partners through structured compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-[#E5CC64] text-3xl font-bold mb-3">01</div>
            <h3 className="font-bold text-lg mb-2">KYC / KYB Verification</h3>
            <p className="text-sm text-gray-600">Strict Know Your Customer and Business verification processes for all partners.</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-[#E5CC64] text-3xl font-bold mb-3">02</div>
            <h3 className="font-bold text-lg mb-2">AML / CFT Compliant</h3>
            <p className="text-sm text-gray-600">Adherence to international Anti-Money Laundering regulatory standards.</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-[#E5CC64] text-3xl font-bold mb-3">03</div>
            <h3 className="font-bold text-lg mb-2">Independent Assay</h3>
            <p className="text-sm text-gray-600">Third-party lab testing, purity assay, and weight verification for Gold & Copper.</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-[#E5CC64] text-3xl font-bold mb-3">04</div>
            <h3 className="font-bold text-lg mb-2">Export Documentation</h3>
            <p className="text-sm text-gray-600">Complete origin verification and official export authorization handling.</p>
          </div>
        </div>
      </div>
    </section>
  );
}