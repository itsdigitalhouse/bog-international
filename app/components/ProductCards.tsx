import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Gem,
  Mountain,
  Layers3,
} from "lucide-react";

const products = [
  {
    number: "01",
    category: "Gold",
    title: "Gold Trading & Export",
    description:
      "Gold sourcing, international supply, trading, export, assay and refining coordination for international B2B buyers.",
    features: [
      "Gold Sourcing",
      "International Supply",
      "Trading & Export",
      "Assay & Refining Coordination",
    ],
    href: "/products/gold",
    icon: Gem,
  },
  {
    number: "02",
    category: "Copper",
    title: "Copper & Copper Cathodes",
    description:
      "Copper and Copper Cathodes for international B2B supply, trading and export across global markets.",
    features: [
      "Copper Cathodes",
      "B2B Supply",
      "International Trading",
      "Export Coordination",
    ],
    href: "/products/copper",
    icon: Mountain,
  },
  {
    number: "03",
    category: "Minerals",
    title: "Other Minerals & Commodities",
    description:
      "African-origin minerals and commodities supplied through structured international sourcing and B2B distribution.",
    features: [
      "African-Origin Resources",
      "Commodity Sourcing",
      "International B2B",
      "Expandable Portfolio",
    ],
    href: "/products/minerals",
    icon: Layers3,
  },
];

export default function ProductCards() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#153B16] text-[#F3F3F3]"
    >
      {/* =========================================================
          SUBTLE BACKGROUND
      ========================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(#E5CC64 1px, transparent 1px),
            linear-gradient(90deg, #E5CC64 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-[#E5CC64]/10 blur-[130px]" />


      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28 xl:px-20">


        {/* =======================================================
            SECTION HEADER
        ======================================================== */}

        <div className="mb-12 border-b border-[#E5CC64]/20 pb-6 sm:mb-16">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              <span className="h-px w-10 bg-[#E5CC64] sm:w-14" />

              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#E5CC64] sm:text-[10px]">
                Core Portfolio
              </span>

            </div>

            <span className="hidden font-mono text-[8px] uppercase tracking-[0.3em] text-white/50 sm:block">
              BOG / 03
            </span>

          </div>


          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.65fr] lg:items-end">

            <h2 className="max-w-3xl font-[family-name:var(--font-cinzel)] text-[36px] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-[44px] md:text-[48px] lg:text-[52px]">
              Our Products
              <br />
              <span className="text-[#E5CC64]">
                & Commodities
              </span>
            </h2>

            {/* Paragraph Text Updated to Pure White */}
            <p className="max-w-xl text-sm leading-7 text-white lg:pb-1 lg:text-right">
              Connecting African-origin resources with international B2B
              demand through structured sourcing, trading and export.
            </p>

          </div>

        </div>


        {/* =======================================================
            PRODUCT LIST
        ======================================================== */}

        <div className="border-t border-[#E5CC64]/20">

          {products.map((product) => {
            const Icon = product.icon;

            return (
              <article
                key={product.number}
                className="group grid border-b border-[#E5CC64]/20 py-8 transition-colors duration-300 hover:bg-[#E5CC64]/[0.035] sm:py-10 lg:grid-cols-[90px_1fr_1.1fr_190px] lg:items-center lg:gap-8"
              >

                {/* =================================================
                    NUMBER
                ================================================== */}

                <div className="mb-5 lg:mb-0">

                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#E5CC64]/70">
                    {product.number}
                  </span>

                </div>


                {/* =================================================
                    TITLE
                ================================================== */}

                <div className="flex items-start gap-4">

                  <div className="hidden h-10 w-10 shrink-0 items-center justify-center border border-[#E5CC64]/25 text-[#E5CC64] sm:flex">

                    <Icon
                      size={17}
                      strokeWidth={1.4}
                    />

                  </div>

                  <div>

                    <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#E5CC64]">
                      {product.category}
                    </span>

                    <h3 className="mt-2 max-w-md font-[family-name:var(--font-cinzel)] text-xl font-medium leading-tight text-white transition-colors duration-300 group-hover:text-[#E5CC64] sm:text-2xl">
                      {product.title}
                    </h3>

                  </div>

                </div>


                {/* =================================================
                    DESCRIPTION + FEATURES
                ================================================== */}

                <div className="mt-5 lg:mt-0">

                  {/* Paragraph Text Updated to Pure White */}
                  <p className="max-w-xl text-sm leading-6 text-white">
                    {product.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">

                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.14em] text-white/80"
                      >
                        <span className="h-1 w-1 rounded-full bg-[#E5CC64]" />
                        {feature}
                      </span>
                    ))}

                  </div>

                </div>


                {/* =================================================
                    LINK
                ================================================== */}

                <div className="mt-6 lg:mt-0 lg:text-right">

                  <Link
                    href={product.href}
                    className="group/link inline-flex items-center gap-3 border-b border-[#E5CC64]/40 pb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#E5CC64] transition-all duration-300 hover:border-[#E5CC64]"
                  >
                    Explore

                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />

                  </Link>

                </div>

              </article>
            );
          })}

        </div>


        {/* =======================================================
            COMMERCIAL CTA
        ======================================================== */}

        <div className="mt-12 flex flex-col gap-5 border border-[#E5CC64]/20 bg-[#F3F3F3]/[0.025] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#E5CC64]">
              International Buyers
            </span>

            <h3 className="mt-2 font-[family-name:var(--font-cinzel)] text-xl text-white sm:text-2xl">
              Have a specific commodity requirement?
            </h3>

          </div>


          <Link
            href="/request-offer"
            className="group inline-flex w-fit items-center gap-3 bg-[#E5CC64] px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#153B16] transition-all duration-300 hover:bg-[#F3F3F3]"
          >
            Request a Commercial Offer

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />

          </Link>

        </div>


        {/* =======================================================
            BOTTOM NOTE
        ======================================================== */}

        <div className="mt-6 flex items-center justify-between">

          <span className="text-[8px] uppercase tracking-[0.2em] text-white/60">
            African Origin • International Markets
          </span>

          <span className="font-mono text-[8px] tracking-[0.2em] text-[#E5CC64]/50">
            03 / 06
          </span>

        </div>

      </div>


      {/* Bottom accent */}

      <div className="absolute bottom-0 left-0 h-px w-full bg-[#E5CC64]/50" />

    </section>
  );
}