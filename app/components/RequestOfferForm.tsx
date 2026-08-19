"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function RequestOfferForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="offer"
      className="relative overflow-hidden border-t border-[#153B16]/10 bg-[#F3F3F3] text-[#153B16]"
    >
      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(21,59,22,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(21,59,22,0.035)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28 xl:px-20">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-14 flex items-center justify-between border-b border-[#153B16]/10 pb-5">

          <div className="flex items-center gap-4">

            <span className="h-px w-10 bg-[#E5CC64] sm:w-14" />

            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#153B16]/50 sm:text-[10px]">
              Commercial Enquiry
            </span>

          </div>

          <span className="hidden font-mono text-[8px] tracking-[0.25em] text-[#153B16]/20 sm:block">
            BOG / 07
          </span>

        </div>


        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">

          {/* =================================================
              LEFT — EDITORIAL
          ================================================== */}

          <div>

            <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#B79D32]">
              Start A Conversation
            </p>

            <h2 className="mt-5 max-w-xl font-[family-name:var(--font-cinzel)] text-[34px] font-semibold leading-[1.08] tracking-[-0.02em] sm:text-[42px] md:text-[48px]">

              Ready to discuss
              <br />

              <span className="text-[#B79D32]">
                your requirement?
              </span>

            </h2>

            {/* FIXED PARAGRAPH */}
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#153B16]/70 sm:text-base sm:leading-8">
              Tell us what you are looking for and provide the essential commercial details. Our team will review your requirement and determine the appropriate next steps for execution.
            </p>


            {/* Commodity strip */}

            <div className="mt-10 flex flex-wrap border-y border-[#153B16]/10">

              <div className="border-r border-[#153B16]/10 px-5 py-4 pl-0">
                <span className="block text-[8px] uppercase tracking-[0.2em] text-[#153B16]/35">
                  01
                </span>

                <span className="mt-1 block font-[family-name:var(--font-cinzel)] text-sm">
                  Gold
                </span>
              </div>


              <div className="border-r border-[#153B16]/10 px-5 py-4">
                <span className="block text-[8px] uppercase tracking-[0.2em] text-[#153B16]/35">
                  02
                </span>

                <span className="mt-1 block font-[family-name:var(--font-cinzel)] text-sm">
                  Copper
                </span>
              </div>


              <div className="px-5 py-4">
                <span className="block text-[8px] uppercase tracking-[0.2em] text-[#153B16]/35">
                  03
                </span>

                <span className="mt-1 block font-[family-name:var(--font-cinzel)] text-sm">
                  Minerals
                </span>
              </div>

            </div>


            {/* Small statement / Paragraph */}

            <div className="mt-10 max-w-md border-l border-[#E5CC64] pl-5">

              <p className="font-[family-name:var(--font-cinzel)] text-base leading-snug text-[#153B16]/90 sm:text-lg">
                Structured enquiries tailored for international commodity trade and strategic partnerships.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT — FORM
          ================================================== */}

          <div className="relative">

            <div className="bg-[#153B16] p-5 sm:p-7 md:p-8 lg:p-9">

              {/* Form heading */}

              <div className="mb-7 flex items-end justify-between border-b border-white/10 pb-5">

                <div>

                  <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#E5CC64]">
                    Request An Offer
                  </span>

                  <h3 className="mt-2 font-[family-name:var(--font-cinzel)] text-xl text-white sm:text-2xl">
                    Your Requirement
                  </h3>

                </div>

                <span className="font-mono text-[8px] tracking-[0.2em] text-white/20">
                  RFQ
                </span>

              </div>


              {submitted ? (

                /* =================================================
                    SUCCESS
                ================================================== */

                <div className="flex min-h-[390px] flex-col items-center justify-center px-4 text-center">

                  <div className="flex h-14 w-14 items-center justify-center border border-[#E5CC64]/40">

                    <CheckCircle2
                      size={25}
                      strokeWidth={1.2}
                      className="text-[#E5CC64]"
                    />

                  </div>

                  <h3 className="mt-6 font-[family-name:var(--font-cinzel)] text-2xl text-white">
                    Enquiry Received
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">
                    Your requirement has been submitted successfully. Our desk will contact you shortly.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-7 border border-[#E5CC64]/40 px-5 py-3 text-[8px] font-bold uppercase tracking-[0.2em] text-[#E5CC64] transition hover:bg-[#E5CC64] hover:text-[#153B16]"
                  >
                    Submit Another Enquiry
                  </button>

                </div>

              ) : (

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  {/* =========================================
                      COMPANY + NAME
                  ========================================== */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>

                      <label
                        htmlFor="company"
                        className="mb-2 block text-[8px] font-bold uppercase tracking-[0.18em] text-white/45"
                      >
                        Company Name
                      </label>

                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        placeholder="Company"
                        className="h-11 w-full border border-white/10 bg-[#F3F3F3] px-3.5 text-sm text-[#153B16] outline-none transition placeholder:text-[#153B16]/30 focus:border-[#E5CC64]"
                      />

                    </div>


                    <div>

                      <label
                        htmlFor="contactName"
                        className="mb-2 block text-[8px] font-bold uppercase tracking-[0.18em] text-white/45"
                      >
                        Contact Person
                      </label>

                      <input
                        id="contactName"
                        name="contactName"
                        type="text"
                        required
                        placeholder="Full name"
                        className="h-11 w-full border border-white/10 bg-[#F3F3F3] px-3.5 text-sm text-[#153B16] outline-none transition placeholder:text-[#153B16]/30 focus:border-[#E5CC64]"
                      />

                    </div>

                  </div>


                  {/* =========================================
                      EMAIL + COUNTRY
                  ========================================== */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>

                      <label
                        htmlFor="email"
                        className="mb-2 block text-[8px] font-bold uppercase tracking-[0.18em] text-white/45"
                      >
                        Business Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="name@company.com"
                        className="h-11 w-full border border-white/10 bg-[#F3F3F3] px-3.5 text-sm text-[#153B16] outline-none transition placeholder:text-[#153B16]/30 focus:border-[#E5CC64]"
                      />

                    </div>


                    <div>

                      <label
                        htmlFor="country"
                        className="mb-2 block text-[8px] font-bold uppercase tracking-[0.18em] text-white/45"
                      >
                        Destination
                      </label>

                      <input
                        id="country"
                        name="country"
                        type="text"
                        required
                        placeholder="Country"
                        className="h-11 w-full border border-white/10 bg-[#F3F3F3] px-3.5 text-sm text-[#153B16] outline-none transition placeholder:text-[#153B16]/30 focus:border-[#E5CC64]"
                      />

                    </div>

                  </div>


                  {/* =========================================
                      COMMODITY
                  ========================================== */}

                  <div>

                    <label
                      htmlFor="commodity"
                      className="mb-2 block text-[8px] font-bold uppercase tracking-[0.18em] text-white/45"
                    >
                      Commodity
                    </label>

                    <select
                      id="commodity"
                      name="commodity"
                      required
                      defaultValue=""
                      className="h-11 w-full border border-white/10 bg-[#F3F3F3] px-3.5 text-sm text-[#153B16] outline-none transition focus:border-[#E5CC64]"
                    >

                      <option value="" disabled>
                        Select commodity
                      </option>

                      <option value="gold">
                        Gold
                      </option>

                      <option value="copper">
                        Copper / Copper Cathodes
                      </option>

                      <option value="minerals">
                        Other Minerals
                      </option>

                    </select>

                  </div>


                  {/* =========================================
                      REQUIREMENT
                  ========================================== */}

                  <div>

                    <label
                      htmlFor="requirement"
                      className="mb-2 block text-[8px] font-bold uppercase tracking-[0.18em] text-white/45"
                    >
                      Requirement
                    </label>

                    <textarea
                      id="requirement"
                      name="requirement"
                      required
                      rows={4}
                      placeholder="Quantity, specification, destination or other relevant details..."
                      className="w-full resize-none border border-white/10 bg-[#F3F3F3] px-3.5 py-3 text-sm leading-6 text-[#153B16] outline-none transition placeholder:text-[#153B16]/30 focus:border-[#E5CC64]"
                    />

                  </div>


                  {/* =========================================
                      SUBMIT
                  ========================================== */}

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 bg-[#E5CC64] px-6 py-4 text-[8px] font-bold uppercase tracking-[0.22em] text-[#153B16] transition-all duration-300 hover:bg-[#f1dc7a]"
                  >

                    Submit Commercial Enquiry

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />

                  </button>


                  <p className="text-center text-[8px] leading-4 text-white/35">
                    Please provide accurate commercial information for review.
                  </p>

                </form>

              )}

            </div>

          </div>

        </div>


        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div className="mt-12 flex items-center justify-between border-t border-[#153B16]/10 pt-5">

          <span className="text-[8px] uppercase tracking-[0.2em] text-[#153B16]/40">
            International B2B Commodity Enquiries
          </span>

          <span className="font-mono text-[8px] tracking-[0.2em] text-[#153B16]/20">
            07 / 07
          </span>

        </div>

      </div>


      {/* Bottom accent */}

      <div className="absolute bottom-0 left-0 h-px w-full bg-[#E5CC64]/70" />

    </section>
  );
}