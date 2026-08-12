import RequestOfferForm from "@/app/components/RequestOfferForm";

export default function ForBuyersPage() {
  return (
    <main className="min-h-screen bg-[#F3F3F3] text-[#153B16]">

      <section className="bg-[#153B16] text-[#F3F3F3] py-20 px-6 md:px-12 lg:px-20 border-b border-[#E5CC64]/20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            LOOKING FOR RELIABLE AFRICAN-ORIGIN COMMODITIES?
          </h1>
          <p className="text-[#E5CC64] text-lg sm:text-xl font-semibold mb-6">
            Gold | Copper | Copper Cathodes | Other Minerals & Commodities
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
        <div className="bg-white p-6 sm:p-10 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">SUBMIT YOUR COMMERCIAL REQUIREMENT</h2>
          <RequestOfferForm />
        </div>
      </section>

    </main>
  );
}