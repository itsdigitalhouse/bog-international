export default function RequestOfferForm() {
  return (
    <section id="offer" className="py-20 px-6 md:px-12 lg:px-20 bg-[#153B16] text-[#F3F3F3]">
      <div className="max-w-4xl mx-auto bg-emerald-950/60 p-8 md:p-12 rounded-xl border border-[#E5CC64]/30 shadow-2xl">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E5CC64] mb-3">
            REQUEST A COMMERCIAL OFFER
          </h2>
          <p className="text-emerald-200 text-sm sm:text-base">
            Submit your commercial requirement to receive an official response from our trading team.
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-200 mb-2">
              Company Name *
            </label>
            <input 
              type="text" 
              required
              className="w-full bg-[#F3F3F3] text-[#153B16] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#E5CC64]"
              placeholder="e.g. Global Trade Ltd"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-200 mb-2">
              Country *
            </label>
            <input 
              type="text" 
              required
              className="w-full bg-[#F3F3F3] text-[#153B16] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#E5CC64]"
              placeholder="e.g. United Arab Emirates"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-200 mb-2">
              Contact Person *
            </label>
            <input 
              type="text" 
              required
              className="w-full bg-[#F3F3F3] text-[#153B16] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#E5CC64]"
              placeholder="Full Name"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-200 mb-2">
              Email Address *
            </label>
            <input 
              type="email" 
              required
              className="w-full bg-[#F3F3F3] text-[#153B16] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#E5CC64]"
              placeholder="corporate@company.com"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-200 mb-2">
              Product Required *
            </label>
            <select className="w-full bg-[#F3F3F3] text-[#153B16] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#E5CC64]">
              <option>Gold Bullion / Sourcing</option>
              <option>Copper Cathodes</option>
              <option>Other Minerals</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-200 mb-2">
              Required Quantity *
            </label>
            <input 
              type="text" 
              required
              className="w-full bg-[#F3F3F3] text-[#153B16] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#E5CC64]"
              placeholder="e.g. 500 Metric Tons / Monthly"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-200 mb-2">
              Destination Country / Port
            </label>
            <input 
              type="text" 
              className="w-full bg-[#F3F3F3] text-[#153B16] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#E5CC64]"
              placeholder="Target destination"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-200 mb-2">
              Message / Specification Requirements
            </label>
            <textarea 
              rows={4}
              className="w-full bg-[#F3F3F3] text-[#153B16] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#E5CC64]"
              placeholder="Detail your specs, CIF/FOB preference, etc."
            ></textarea>
          </div>

          <div className="md:col-span-2 mt-4">
            <button 
              type="submit"
              className="w-full bg-[#E5CC64] text-[#153B16] font-extrabold py-4 rounded hover:bg-[#D4B74F] transition text-center tracking-wider uppercase shadow-lg"
            >
              Submit Commercial Enquiry
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}