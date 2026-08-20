"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  FileText,
  Search,
  Send,
  Globe2,
  X,
  CheckCircle2,
  Download,
  ChevronDown,
  PackageCheck,
  Ship,
} from "lucide-react";

// BUYER STEPS WITH DETAILED EXPANSION CONTENT & IMAGES
const buyerSteps = [
  {
    number: "01",
    title: "Share Your Requirement",
    description:
      "Tell us the commodity, specification, quantity and destination relevant to your requirement.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=600&q=80",
    requirements: [
      "Letter of Intent (LOI) / Specific ICPO",
      "Commodity Purity & Grade Specifications",
      "Monthly / Spot Target Volume (MT / KG)",
      "Target CIF/FOB Destination Port",
    ],
  },
  {
    number: "02",
    title: "Review & Verification",
    description:
      "We review the commercial requirement alongside the relevant documentation and transaction considerations.",
    icon: Search,
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80",
    requirements: [
      "KYB / Sanctions Clearance Check",
      "Mine & Warehouse Allocation Audit",
      "Assay Report & Provenance Check",
      "Banking / Settlement Structure Alignment",
    ],
  },
  {
    number: "03",
    title: "Proceed With The Offer",
    description:
      "Once the requirement is understood, the enquiry can move toward the appropriate commercial discussion.",
    icon: Send,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    requirements: [
      "Official Soft Corporate Offer (SCO) Issuance",
      "Contract Term Draft & SPA Agreement",
      "Logistics & Shipping Timeline Schedule",
      "First Shipment Trial Execution",
    ],
  },
];

// ACTIVE TRADE CORRIDORS
const tradeRoutes = [
  "Mombasa → Dubai (Gold & Minerals)",
  "Dar es Salaam → Rotterdam (Agro Metals)",
  "Kampala → Singapore (Raw Gold)",
  "Zanzibar → Shanghai (Spices & Agro)",
];

export default function ForBuyers() {
  const [activeStep, setActiveStep] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    commodity: "Gold",
    quantity: "",
    destination: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Thank you, ${formData.name}. Your commercial enquiry for ${formData.commodity} has been submitted successfully.`
    );
    setIsModalOpen(false);
  };

  return (
    <section
      id="buyers"
      className="relative overflow-hidden bg-white text-[#153B16]"
    >
      {/* BACKGROUND ACCENTS */}
      <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[480px] w-[480px] rounded-full border border-[#E5CC64]/20" />
      <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-[280px] w-[280px] rounded-full border border-[#E5CC64]/15" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-[35%] bg-[#F3F3F3]/60" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28 xl:px-20">
        
        {/* TOP LABEL */}
        <div className="flex items-center justify-between border-b border-[#153B16]/10 pb-5">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#E5CC64] sm:w-14" />
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-black sm:text-[10px]">
              For International Buyers
            </span>
          </div>
          <span className="hidden font-mono text-[8px] tracking-[0.3em] text-[#153B16]/20 sm:block">
            BOG / 06
          </span>
        </div>

        {/* HERO CONTENT */}
        <div className="grid gap-12 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24 lg:pt-16">
          {/* LEFT */}
          <div>
            <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#B79D32]">
              International Commodity Trade
            </span>

            <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-cinzel)] text-[34px] font-semibold leading-[1.08] tracking-[-0.025em] sm:text-[42px] md:text-[48px] lg:text-[56px]">
              Built for <br />
              <span className="text-[#B79D32]">International Buyers.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-black sm:text-base sm:leading-8">
              BOG connects qualified international demand with African-origin
              commodity supply through structured sourcing, trading and export
              coordination.
            </p>

            {/* QUICK PDF DOWNLOAD BUTTON */}
            <div className="mt-6">
              <button
                onClick={() =>
                  alert("Downloading BOG International Buyer Trade Guide (PDF)...")
                }
                className="inline-flex items-center gap-2 border border-[#153B16]/20 bg-[#F3F3F3] px-4 py-2.5 text-[9px] font-mono font-bold uppercase tracking-wider text-[#153B16] transition-colors hover:bg-[#153B16] hover:text-[#E5CC64]"
              >
                <Download size={13} className="text-[#B79D32]" />
                Download International Buyer Specification Guide (PDF)
              </button>
            </div>
          </div>

          {/* RIGHT — STATEMENT */}
          <div className="flex items-end lg:justify-end">
            <div className="max-w-sm border-l border-[#E5CC64] pl-6">
              <Globe2
                size={22}
                strokeWidth={1.2}
                className="mb-8 text-[#B79D32]"
              />
              <p className="font-[family-name:var(--font-cinzel)] text-xl font-medium leading-relaxed text-[#153B16] sm:text-2xl">
                African origin. <br />
                International reach. <br />
                Structured trade.
              </p>
            </div>
          </div>
        </div>

        {/* TRADE ROUTES STRIP */}
        <div className="mt-12 bg-[#153B16] p-4 text-white">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-widest text-[#E5CC64]">
              <Ship size={14} /> Active Export Routes:
            </span>
            <div className="flex flex-wrap gap-3">
              {tradeRoutes.map((route, i) => (
                <span
                  key={i}
                  className="border border-white/10 bg-white/10 px-3 py-1 font-mono text-[8px] uppercase tracking-wider text-white/90"
                >
                  {route}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* BUYER JOURNEY — INTERACTIVE ACCORDION / EXPANSION */}
        <div className="mt-12 border-y border-[#153B16]/10">
          {buyerSteps.map((step, index) => {
            const Icon = step.icon;
            const isOpen = activeStep === index;

            return (
              <div
                key={step.number}
                className={`group border-b border-[#153B16]/10 transition-all duration-300 ${
                  isOpen ? "bg-[#F3F3F3]/50" : ""
                }`}
              >
                <div
                  onClick={() => setActiveStep(isOpen ? null : index)}
                  className="grid cursor-pointer gap-6 px-2 py-8 sm:grid-cols-[70px_260px_1fr_auto] sm:items-center sm:gap-8"
                >
                  {/* NUMBER */}
                  <span className="font-mono text-[9px] tracking-[0.25em] text-[#B79D32]">
                    {step.number}
                  </span>

                  {/* TITLE */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center border transition-all duration-300 ${
                        isOpen
                          ? "border-[#E5CC64] bg-[#E5CC64]"
                          : "border-[#153B16]/10 group-hover:border-[#E5CC64] group-hover:bg-[#E5CC64]"
                      }`}
                    >
                      <Icon
                        size={16}
                        strokeWidth={1.3}
                        className="text-[#153B16]"
                      />
                    </div>
                    <h3 className="font-[family-name:var(--font-cinzel)] text-lg font-medium text-[#153B16] sm:text-xl">
                      {step.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="max-w-xl text-sm leading-6 text-black">
                    {step.description}
                  </p>

                  {/* TOGGLE INDICATOR */}
                  <div className="flex items-center gap-2">
                    <span className="hidden font-mono text-[8px] uppercase text-[#B79D32] sm:inline-block">
                      {isOpen ? "Hide Details" : "View Checklist"}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-[#153B16] transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#B79D32]" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* EXPANDABLE CONTENT WITH IMAGE */}
                {isOpen && (
                  <div className="pb-8 pl-4 pr-4 sm:pl-[350px] animate-fadeIn">
                    <div className="grid grid-cols-1 items-center gap-6 border-l-2 border-[#B79D32] bg-white p-5 shadow-sm md:grid-cols-[1fr_220px]">
                      <div>
                        <span className="font-mono text-[8px] font-bold uppercase tracking-wider text-[#B79D32]">
                          Step {step.number} Requirements & Checklist:
                        </span>
                        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {step.requirements.map((req, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-xs text-black"
                            >
                              <CheckCircle2
                                size={12}
                                className="shrink-0 text-[#B79D32]"
                              />
                              <span>{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* STEP IMAGE PREVIEW (FIXED TO STANDARD IMG TAG) */}
                      <div className="relative h-28 w-full overflow-hidden border border-[#153B16]/10">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* BOTTOM COMMERCIAL MESSAGE & MODAL TRIGGER */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-black">
              Start A Commercial Enquiry
            </span>

            <h3 className="mt-3 max-w-2xl font-[family-name:var(--font-cinzel)] text-2xl font-medium leading-tight sm:text-3xl">
              Tell us what you{" "}
              <span className="text-[#B79D32]">are looking for.</span>
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-6 text-black">
              Submit your requirement and provide the information needed for the
              next stage of the commercial discussion.
            </p>
          </div>

          {/* CTA MODAL TRIGGER */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex w-fit items-center gap-4 bg-[#153B16] px-7 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#F3F3F3] transition-all duration-300 hover:bg-[#E5CC64] hover:text-[#153B16]"
          >
            Submit Your Requirement
            <ArrowUpRight
              size={15}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>
        </div>

        {/* FOOT LABEL */}
        <div className="mt-10 flex items-center justify-between border-t border-[#153B16]/10 pt-5">
          <span className="text-[8px] uppercase tracking-[0.2em] text-[#153B16]/25">
            Sourcing • Trading • Export Coordination
          </span>
          <span className="font-mono text-[8px] tracking-[0.2em] text-[#153B16]/20">
            06 / 07
          </span>
        </div>
      </div>

      {/* GOLD ACCENT */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-[#E5CC64]/70" />

      {/* INTERACTIVE INQUIRY FORM MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-xl border border-[#153B16] bg-white p-6 shadow-2xl sm:p-8">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-5 top-5 p-1 text-[#153B16] transition-colors hover:bg-[#F3F3F3]"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2 border-b border-[#153B16]/15 pb-4">
              <PackageCheck size={20} className="text-[#B79D32]" />
              <div>
                <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#B79D32]">
                  Direct Buyer Portal
                </span>
                <h3 className="font-[family-name:var(--font-cinzel)] text-xl font-bold text-[#153B16]">
                  Submit Commercial Enquiry
                </h3>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block font-mono text-[9px] font-bold uppercase text-[#153B16]">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. John Doe"
                    className="w-full border border-[#153B16]/20 bg-[#F3F3F3] p-2.5 text-xs text-[#153B16] focus:border-[#B79D32] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block font-mono text-[9px] font-bold uppercase text-[#153B16]">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="e.g. Apex Global Trade"
                    className="w-full border border-[#153B16]/20 bg-[#F3F3F3] p-2.5 text-xs text-[#153B16] focus:border-[#B79D32] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block font-mono text-[9px] font-bold uppercase text-[#153B16]">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@company.com"
                    className="w-full border border-[#153B16]/20 bg-[#F3F3F3] p-2.5 text-xs text-[#153B16] focus:border-[#B79D32] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block font-mono text-[9px] font-bold uppercase text-[#153B16]">
                    Target Commodity *
                  </label>
                  <select
                    value={formData.commodity}
                    onChange={(e) =>
                      setFormData({ ...formData, commodity: e.target.value })
                    }
                    className="w-full border border-[#153B16]/20 bg-[#F3F3F3] p-2.5 text-xs text-[#153B16] focus:border-[#B79D32] focus:outline-none"
                  >
                    <option value="Gold">Gold Doré / Refined Gold</option>
                    <option value="Copper">Copper Cathodes / Ores</option>
                    <option value="Coltan">Coltan & Tantalite</option>
                    <option value="Agro">Agro Minerals & Spices</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block font-mono text-[9px] font-bold uppercase text-[#153B16]">
                    Required Quantity (MT/KG) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                    placeholder="e.g. 100 KG / 500 MT"
                    className="w-full border border-[#153B16]/20 bg-[#F3F3F3] p-2.5 text-xs text-[#153B16] focus:border-[#B79D32] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block font-mono text-[9px] font-bold uppercase text-[#153B16]">
                    Destination Port / Country *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.destination}
                    onChange={(e) =>
                      setFormData({ ...formData, destination: e.target.value })
                    }
                    placeholder="e.g. Dubai, UAE / Rotterdam"
                    className="w-full border border-[#153B16]/20 bg-[#F3F3F3] p-2.5 text-xs text-[#153B16] focus:border-[#B79D32] focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-[#153B16]/15 pt-4">
                <span className="font-mono text-[8px] uppercase text-[#153B16]/60">
                  BOG Trade Desk • Confidentiality Guaranteed
                </span>
                <button
                  type="submit"
                  className="bg-[#153B16] px-6 py-3 font-mono text-[9px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#B79D32] hover:text-[#153B16]"
                >
                  Submit Requirement
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}