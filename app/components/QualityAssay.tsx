"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ClipboardCheck,
  FlaskConical,
  Scale,
  ShieldCheck,
  FileCheck,
  Award,
  Building2,
  CheckCircle2,
} from "lucide-react";

const qualitySteps = [
  {
    id: "step-1",
    number: "01",
    title: "Independent Inspection",
    subtitle: "SGS / Bureau Veritas Verified",
    description:
      "Third-party inspection and physical verification form the baseline of our quality assurance protocols prior to shipment dispatch.",
    icon: ClipboardCheck,
    tag: "Physical Verification",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    badge: "100% Inspection Rate",
  },
  {
    id: "step-2",
    number: "02",
    title: "Laboratory Testing",
    subtitle: "Chemical & Composition Analysis",
    description:
      "Comprehensive lab testing evaluates exact chemical purity, moisture levels, and material specifications for every export batch.",
    icon: FlaskConical,
    tag: "Lab Analysis",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80",
    badge: "Certified ISO Standard",
  },
  {
    id: "step-3",
    number: "03",
    title: "Assay & Fire Analysis",
    subtitle: "99.9% Gold & Mineral Purity",
    description:
      "Advanced assay and fire-purity analysis ensure complete transaction transparency and exact karat/purity determination.",
    icon: ShieldCheck,
    tag: "Purity Seal",
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1200&q=80",
    badge: "Refinery Grade Purity",
  },
  {
    id: "step-4",
    number: "04",
    title: "Weight & Scale Verification",
    subtitle: "Calibrated Weighbridge Documentation",
    description:
      "Precision scale weighing and official weighbridge certificates eliminate scale discrepancies during port loading.",
    icon: Scale,
    tag: "Zero Discrepancy",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80",
    badge: "Calibrated Scale",
  },
];

export default function QualityAssay() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="quality-assay"
      className="relative overflow-hidden bg-[#F3F3F3] text-[#153B16] selection:bg-[#E5CC64] selection:text-[#153B16]"
    >
      <div className="relative z-10 mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28 xl:px-20">
        
        {/* SECTION HEADER */}
        <div className="mb-12 flex items-center justify-between border-b border-[#153B16]/20 pb-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#E5CC64] sm:w-14" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#153B16]">
              Quality Assurance & Compliance
            </span>
          </div>
          <span className="hidden font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#E5CC64] sm:block">
            BOG / INTERACTIVE VERIFICATION
          </span>
        </div>

        {/* INTRO */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-16">
          <div>
            <span className="text-[9px] font-mono font-bold uppercase tracking-[0.25em] text-[#E5CC64] bg-[#153B16] px-3 py-1 inline-block">
              Institutional Standard
            </span>
            <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-cinzel)] text-[36px] font-semibold leading-[1.08] text-[#153B16] sm:text-[48px]">
              Verified Quality. <br />
              <span className="text-[#E5CC64]">Documented Trade Integrity.</span>
            </h2>
          </div>
          <div className="border-l-2 border-[#E5CC64] pl-6">
            <p className="text-sm sm:text-base leading-relaxed font-medium text-[#153B16]/90">
              Hover over each step to preview our multi-tiered assaying, independent lab testing, and origin verification process.
            </p>
          </div>
        </div>

        {/* INTERACTIVE HOVER DISPLAY (GRID SPLIT) */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: INTERACTIVE STEPS LIST (7 COLUMNS) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {qualitySteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <div
                  key={step.id}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`group cursor-pointer border p-6 transition-all duration-300 relative ${
                    isActive
                      ? "bg-[#153B16] text-white border-[#153B16] shadow-xl translate-x-2"
                      : "bg-white text-[#153B16] border-[#153B16]/15 hover:border-[#153B16]/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span
                        className={`font-mono text-xs font-bold tracking-widest pt-1 ${
                          isActive ? "text-[#E5CC64]" : "text-[#153B16]/50"
                        }`}
                      >
                        {step.number}
                      </span>
                      <div>
                        <h3
                          className={`font-[family-name:var(--font-cinzel)] text-lg font-bold ${
                            isActive ? "text-white" : "text-[#153B16]"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p
                          className={`text-[10px] font-mono font-bold uppercase tracking-wider mt-0.5 ${
                            isActive ? "text-[#E5CC64]" : "text-[#153B16]/60"
                          }`}
                        >
                          {step.subtitle}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`p-2.5 rounded-none ${
                        isActive ? "bg-white/10 text-[#E5CC64]" : "bg-[#F3F3F3] text-[#153B16]"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Expanded description when active */}
                  {isActive && (
                    <p className="mt-4 text-xs leading-relaxed text-white/80 border-t border-white/10 pt-3 animate-fadeIn">
                      {step.description}
                    </p>
                  )}

                  {/* ACTIVE INDICATOR BAR */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#E5CC64]" />
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT: DYNAMIC IMAGE PREVIEW CARD (5 COLUMNS) */}
          <div className="lg:col-span-5 relative bg-[#153B16] border border-[#153B16]/20 overflow-hidden min-h-[420px] shadow-2xl flex flex-col justify-end">
            
            {/* DYNAMIC BACKGROUND IMAGE USING STANDARD HTML IMG */}
            {qualitySteps.map((step, index) => (
              <div
                key={step.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  activeStep === index ? "opacity-90 scale-100" : "opacity-0 scale-105 pointer-events-none"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#153B16] via-[#153B16]/40 to-transparent" />
              </div>
            ))}

            {/* OVERLAY INFORMATION BADGE */}
            <div className="relative z-10 p-8 text-white">
              <div className="inline-flex items-center gap-2 bg-[#E5CC64] text-[#153B16] px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-widest mb-3">
                <CheckCircle2 size={12} />
                <span>{qualitySteps[activeStep].badge}</span>
              </div>

              <h4 className="font-[family-name:var(--font-cinzel)] text-2xl font-bold">
                {qualitySteps[activeStep].title}
              </h4>
              <p className="text-white/80 text-xs mt-1 leading-relaxed">
                {qualitySteps[activeStep].description}
              </p>

              <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between text-[9px] font-mono text-[#E5CC64] uppercase tracking-widest">
                <span>{qualitySteps[activeStep].tag}</span>
                <span>STEP {qualitySteps[activeStep].number} OF 04</span>
              </div>
            </div>
          </div>

        </div>

        {/* DOCUMENTATION STRIP */}
        <div className="mt-12 bg-white border border-[#153B16]/15 grid gap-0 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#153B16]/15 shadow-sm">
          <div className="p-6 flex items-start gap-4">
            <div className="p-2.5 bg-[#153B16]/5 shrink-0">
              <FileCheck size={18} className="text-[#E5CC64]" />
            </div>
            <div>
              <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-[#153B16]">
                Product Specifications
              </span>
              <p className="mt-1 text-xs leading-relaxed text-[#153B16]/80">
                Detailed chemical & purity certificates issued per shipment.
              </p>
            </div>
          </div>

          <div className="p-6 flex items-start gap-4">
            <div className="p-2.5 bg-[#153B16]/5 shrink-0">
              <Award size={18} className="text-[#E5CC64]" />
            </div>
            <div>
              <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-[#153B16]">
                Quality Documentation
              </span>
              <p className="mt-1 text-xs leading-relaxed text-[#153B16]/80">
                Independent SGS / Alex Stewart assay reports attached.
              </p>
            </div>
          </div>

          <div className="p-6 flex items-start gap-4">
            <div className="p-2.5 bg-[#153B16]/5 shrink-0">
              <Building2 size={18} className="text-[#E5CC64]" />
            </div>
            <div>
              <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-[#153B16]">
                Refinery Certificates
              </span>
              <p className="mt-1 text-xs leading-relaxed text-[#153B16]/80">
                Official refinery purity seals & origin chain documentation.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA BAR */}
        <div className="mt-10 bg-[#153B16] p-8 sm:p-10 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b-2 border-[#E5CC64]">
          <div>
            <span className="text-[9px] font-mono font-bold uppercase tracking-[0.25em] text-[#E5CC64]">
              Institutional Procurement Protocol
            </span>
            <h3 className="font-[family-name:var(--font-cinzel)] text-xl sm:text-2xl font-semibold mt-1">
              Need Specific Assay Reports for Your Order?
            </h3>
          </div>

          <Link
            href="/quality-assay"
            className="group inline-flex items-center gap-3 bg-[#E5CC64] px-7 py-3.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#153B16] transition-all duration-300 hover:bg-white shrink-0"
          >
            Explore Quality Standards
            <ArrowUpRight
              size={14}
              className="text-[#153B16] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}