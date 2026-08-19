"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fields = [
  {
    label: "Full Name",
    name: "name",
    type: "text",
    placeholder: "Your name",
  },
  {
    label: "Business Email",
    name: "email",
    type: "email",
    placeholder: "you@company.com",
  },
  {
    label: "Company",
    name: "company",
    type: "text",
    placeholder: "Company name",
  },
];

export default function ContactEnquiry() {
  return (
    <section
      id="enquiry"
      className="bg-[#F3F3F3] py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#E5CC64]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#153B16]">
                Send an Enquiry
              </span>
            </div>

            <h2 className="mt-7 max-w-xl text-3xl font-medium leading-[1.08] tracking-[-0.03em] text-[#153B16] sm:text-[40px] lg:text-[46px]">
              Tell us what
              <span className="block">
                you need.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-[16px] leading-8 text-[#153B16]">
              Provide a few details about your requirement and our team will
              review the enquiry and determine the appropriate next step.
            </p>

            <div className="mt-9 border-l-2 border-[#E5CC64] pl-5">
              <p className="text-[14px] leading-7 text-[#153B16]">
                For mineral sourcing enquiries, including gold, copper,
                copper cathodes and selected commodities, please provide as
                much relevant information as possible.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white p-7 sm:p-10 lg:p-12"
          >
            <form className="space-y-8">

              {/* Basic Fields */}
              <div className="grid gap-8 sm:grid-cols-2">
                {fields.map((field, index) => (
                  <div
                    key={field.name}
                    className={index === 2 ? "sm:col-span-2" : ""}
                  >
                    <label
                      htmlFor={field.name}
                      className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#153B16]"
                    >
                      {field.label}
                    </label>

                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="mt-3 w-full border-0 border-b border-[#153B16]/20 bg-transparent px-0 py-3 text-[15px] text-[#153B16] outline-none placeholder:text-[#153B16]/35 focus:border-[#E5CC64]"
                    />
                  </div>
                ))}
              </div>

              {/* Requirement */}
              <div>
                <label
                  htmlFor="requirement"
                  className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#153B16]"
                >
                  Your Requirement
                </label>

                <textarea
                  id="requirement"
                  name="requirement"
                  rows={5}
                  placeholder="Tell us about the product, quantity, specification, destination or other relevant requirements."
                  className="mt-3 w-full resize-none border border-[#153B16]/15 bg-[#F3F3F3] px-4 py-4 text-[15px] leading-7 text-[#153B16] outline-none placeholder:text-[#153B16]/35 focus:border-[#E5CC64]"
                />
              </div>

              {/* Product */}
              <div>
                <label
                  htmlFor="product"
                  className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#153B16]"
                >
                  Product Interest
                </label>

                <select
                  id="product"
                  name="product"
                  defaultValue=""
                  className="mt-3 w-full border-0 border-b border-[#153B16]/20 bg-transparent px-0 py-3 text-[15px] text-[#153B16] outline-none focus:border-[#E5CC64]"
                >
                  <option value="" disabled>
                    Select a product
                  </option>
                  <option value="gold">Gold</option>
                  <option value="copper">Copper</option>
                  <option value="copper-cathodes">
                    Copper Cathodes
                  </option>
                  <option value="other-minerals">
                    Other Minerals & Commodities
                  </option>
                </select>
              </div>

              {/* Submit */}
              <div className="flex flex-col gap-5 border-t border-[#153B16]/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-[11px] leading-5 text-[#153B16]/55">
                  By submitting this enquiry, you confirm that the information
                  provided is accurate and relates to a genuine business
                  requirement.
                </p>

                <button
                  type="submit"
                  className="group inline-flex shrink-0 items-center justify-center gap-3 bg-[#153B16] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#153B16]/90"
                >
                  Submit Enquiry

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}