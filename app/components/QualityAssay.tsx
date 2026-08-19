import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardCheck,
  FlaskConical,
  Scale,
  ShieldCheck,
} from "lucide-react";

const qualitySteps = [
  {
    number: "01",
    title: "Independent Inspection",
    description:
      "Independent inspection and verification form part of the quality assurance process.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Laboratory Testing",
    description:
      "Laboratory testing is used to assess the documented characteristics and quality of the material.",
    icon: FlaskConical,
  },
  {
    number: "03",
    title: "Assay & Analysis",
    description:
      "Assay and purity analysis support transparent product evaluation, particularly for gold.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Weight Verification",
    description:
      "Weight verification and supporting documentation help maintain clarity throughout the transaction.",
    icon: Scale,
  },
];

export default function QualityAssay() {
  return (
    <section
      id="quality-assay"
      className="relative overflow-hidden bg-[#F3F3F3] text-[#153B16]"
    >
      {/* =========================================================
          SUBTLE BACKGROUND GRID
      ========================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(#153B16 1px, transparent 1px),
            linear-gradient(90deg, #153B16 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-[#E5CC64]/10 blur-[120px]" />


      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28 xl:px-20">


        {/* =======================================================
            SECTION HEADER
        ======================================================== */}

        <div className="mb-12 flex items-center justify-between border-b border-[#153B16]/15 pb-5 sm:mb-16">

          <div className="flex items-center gap-4">

            <span className="h-px w-10 bg-[#E5CC64] sm:w-14" />

            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-black sm:text-[10px]">
              Quality & Verification
            </span>

          </div>

          <span className="hidden font-mono text-[8px] uppercase tracking-[0.3em] text-[#153B16]/30 sm:block">
            BOG / 04
          </span>

        </div>


        {/* =======================================================
            INTRO
        ======================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-16">

          <div>

            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#153B16]/40">
              Quality Assurance
            </span>

            <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-cinzel)] text-[36px] font-semibold leading-[1.08] tracking-[-0.02em] text-[#153B16] sm:text-[44px] md:text-[48px] lg:text-[52px]">

              Verified Quality.
              <br />

              <span className="text-[#E5CC64]">
                Documented Trade.
              </span>

            </h2>

          </div>


          <div className="lg:pb-1">

            {/* Updated to Solid Black */}
            <p className="max-w-xl text-sm leading-7 text-black sm:text-base sm:leading-8">
              BOG emphasizes quality assurance, independent inspection,
              laboratory testing, assay, purity and weight verification,
              supported by appropriate documentation.
            </p>

          </div>

        </div>


        {/* =======================================================
            QUALITY PROCESS
        ======================================================== */}

        <div className="mt-14 border-t border-[#153B16]/15">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

            {qualitySteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className={`group relative border-b border-[#153B16]/15 p-6 transition-colors duration-300 hover:bg-[#153B16] sm:p-8 lg:border-b-0 ${
                    index !== qualitySteps.length - 1
                      ? "lg:border-r lg:border-[#153B16]/15"
                      : ""
                  }`}
                >

                  {/* Number */}

                  <div className="flex items-center justify-between">

                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#E5CC64]">
                      {step.number}
                    </span>

                    <Icon
                      size={18}
                      strokeWidth={1.4}
                      className="text-[#153B16]/35 transition-colors duration-300 group-hover:text-[#E5CC64]"
                    />

                  </div>


                  {/* Title */}

                  <h3 className="mt-12 font-[family-name:var(--font-cinzel)] text-xl font-medium leading-tight text-[#153B16] transition-colors duration-300 group-hover:text-[#F3F3F3] sm:text-2xl">
                    {step.title}
                  </h3>


                  {/* Description (Updated to Black, retains light text on hover) */}

                  <p className="mt-4 text-sm leading-6 text-black transition-colors duration-300 group-hover:text-[#F3F3F3]/80">
                    {step.description}
                  </p>


                  {/* Bottom indicator */}

                  <div className="mt-8 h-px w-8 bg-[#E5CC64] transition-all duration-500 group-hover:w-full" />

                </div>
              );
            })}

          </div>

        </div>


        {/* =======================================================
            DOCUMENTATION STRIP
        ======================================================== */}

        <div className="mt-10 grid gap-0 border border-[#153B16]/15 sm:grid-cols-3">

          <div className="border-b border-[#153B16]/15 p-6 sm:border-b-0 sm:border-r">

            <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#153B16]/40">
              Product Information
            </span>

            {/* Updated to Solid Black */}
            <p className="mt-2 text-sm leading-6 text-black">
              Product specifications and relevant quality information.
            </p>

          </div>


          <div className="border-b border-[#153B16]/15 p-6 sm:border-b-0 sm:border-r">

            <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#153B16]/40">
              Quality Documentation
            </span>

            {/* Updated to Solid Black */}
            <p className="mt-2 text-sm leading-6 text-black">
              Supporting documentation for transparent product evaluation.
            </p>

          </div>


          <div className="p-6">

            <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#153B16]/40">
              Refinery Documentation
            </span>

            {/* Updated to Solid Black */}
            <p className="mt-2 text-sm leading-6 text-black">
              Relevant refinery documentation where applicable.
            </p>

          </div>

        </div>


        {/* =======================================================
            CTA
        ======================================================== */}

        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#153B16]/40">
              Quality & Assay
            </span>

            {/* Updated to Solid Black */}
            <p className="mt-2 text-sm text-black">
              Learn more about our approach to product verification.
            </p>

          </div>


          <Link
            href="/quality-assay"
            className="group inline-flex w-fit items-center gap-3 bg-[#153B16] px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#F3F3F3] transition-all duration-300 hover:bg-[#E5CC64] hover:text-[#153B16]"
          >
            View Quality & Assay

            <ArrowUpRight
              size={14}
              className="text-[#E5CC64] transition-colors duration-300 group-hover:text-[#153B16]"
            />

          </Link>

        </div>


        {/* =======================================================
            BOTTOM LABEL
        ======================================================== */}

        <div className="mt-8 flex items-center justify-between">

          <span className="text-[8px] uppercase tracking-[0.2em] text-[#153B16]/25">
            Quality • Assay • Verification • Documentation
          </span>

          <span className="font-mono text-[8px] tracking-[0.2em] text-[#153B16]/35">
            04 / 06
          </span>

        </div>

      </div>


      {/* Bottom accent */}

      <div className="absolute bottom-0 left-0 h-px w-full bg-[#E5CC64]/60" />

    </section>
  );
}