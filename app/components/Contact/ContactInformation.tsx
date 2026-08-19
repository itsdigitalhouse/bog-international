"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "info@bog-international.com",
    href: "mailto:info@bog-international.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "Contact our team",
    href: "/contact#enquiry",
  },
  {
    icon: MapPin,
    label: "Head Office",
    value: "Uganda",
    href: "#location",
  },
];

export default function ContactInformation() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#E5CC64]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#153B16]">
                Get In Touch
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="max-w-3xl text-3xl font-medium leading-[1.08] tracking-[-0.03em] text-[#153B16] sm:text-[40px] lg:text-[46px]">
              Direct access to our
              <span className="block">
                business team.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-[16px] leading-8 text-[#153B16]">
              For mineral sourcing, buyer enquiries, partnerships and other
              business matters, you can reach our team through the channels
              below.
            </p>
          </motion.div>
        </div>

        {/* Contact Details */}
        <div className="mt-16 border-y border-[#153B16]/15">
          <div className="grid md:grid-cols-3">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className={`group relative px-1 py-9 sm:px-8 sm:py-10 ${
                    index !== contactDetails.length - 1
                      ? "border-b border-[#153B16]/15 md:border-b-0 md:border-r"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center border border-[#153B16]/15">
                      <Icon
                        size={17}
                        strokeWidth={1.5}
                        className="text-[#153B16]"
                      />
                    </div>

                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#E5CC64]">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-7 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#153B16]/50">
                    {item.label}
                  </p>

                  <Link
                    href={item.href}
                    className="group/link mt-2 inline-flex items-center gap-2 text-[15px] font-medium text-[#153B16]"
                  >
                    {item.value}

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.7}
                      className="opacity-0 transition-all duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:opacity-100"
                    />
                  </Link>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#E5CC64] transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Small Closing Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-7 flex items-center gap-3"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#E5CC64]" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#153B16]/45">
            International business enquiries welcome
          </span>
        </motion.div>
      </div>
    </section>
  );
}