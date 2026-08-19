"use client";

import Link from "next/link";

const operations = [
  {
    number: "01",
    country: "UGANDA",
    region: "East Africa",
    entity: "Bhatia Ocean Gold",
    shortName: "BOG INTERNATIONAL",
    category: "Minerals · Agriculture · Natural Products",
    description:
      "Bhatia Ocean Gold International is our Uganda-based sourcing and trading operation, connecting regional resource opportunities with international B2B markets.",
    products: [
      "Gold",
      "Copper",
      "Vanilla",
      "Coffee",
      "Grains",
      "Beans",
      "Agricultural Products",
    ],
  },
  {
    number: "02",
    country: "MADAGASCAR",
    region: "Indian Ocean",
    entity: "Best Spices of Madagascar",
    shortName: "BMS",
    category: "Agricultural & Food Products",
    description:
      "Best Spices of Madagascar focuses on agricultural and food commodities sourced from Madagascar, forming the agricultural and food-products operation within the network.",
    products: [
      "Spices",
      "Vanilla",
      "Grains",
      "Beans",
      "Agricultural Products",
    ],
    secondaryEntity: {
      name: "ALDO PARTNERS",
      category: "Mining & Minerals",
      description:
        "A separate Madagascar operation focused on mining and natural-resource commodities.",
      products: [
        "Gold",
        "Chrome / Chromium",
        "Stones",
        "Mining & Minerals",
      ],
    },
  },
];

export default function OurGlobalOperations() {
  return (
    <section
      id="global-operations"
      className="relative w-full overflow-hidden bg-[#F3F3F3] text-[#153B16]"
    >
      {/* TOP ACCENT */}
      <div className="h-px w-full bg-[#E5CC64]" />

      <div className="w-full px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

          {/* LEFT */}

          <div>

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#E5CC64]" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#153B16]/50">
                Our Global Operations
              </span>
            </div>

            {/* MAIN HEADING */}

            <h2 className="max-w-4xl text-3xl font-semibold leading-[1.1] tracking-[-0.02em] sm:text-4xl lg:text-[44px]">

              <span className="text-[#153B16]">
                Uganda & Madagascar
              </span>

              <br />

              <span className="font-normal text-[#E5CC64]">
                Strategic Sourcing Solution
              </span>

            </h2>

          </div>


          {/* RIGHT */}

          <div className="lg:pl-10">

            {/* Updated Paragraphs to Black */}
            <p className="max-w-xl text-sm leading-7 text-black sm:text-[15px] sm:leading-7">
              Bhatia Ocean Gold International connects international buyers
              with strategic sourcing opportunities across Uganda and
              Madagascar through a professional international business
              network.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-black">
              Access to each market depends on product availability, origin,
              quality, specifications, quantity, pricing and logistics.
            </p>

          </div>

        </div>


        {/* =====================================================
            NETWORK INTRO STRIP
        ====================================================== */}

        <div className="mt-14 border-y border-[#153B16]/10 py-6">

          <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">

            {/* UGANDA */}

            <div>

              <span className="text-[7px] font-semibold uppercase tracking-[0.25em] text-[#153B16]/40">
                Strategic Market 01
              </span>

              <p className="mt-2 text-lg font-semibold tracking-wide text-[#153B16]">
                UGANDA
              </p>

              <p className="mt-1 text-xs text-[#153B16]/45">
                East Africa
              </p>

            </div>


            {/* CENTER */}

            <div className="hidden md:flex md:items-center md:gap-4">

              <span className="h-px w-10 bg-[#E5CC64]" />

              <span className="text-[7px] font-bold uppercase tracking-[0.22em] text-[#153B16]/45">
                One International Network
              </span>

              <span className="h-px w-10 bg-[#E5CC64]" />

            </div>


            {/* MADAGASCAR */}

            <div className="md:text-right">

              <span className="text-[7px] font-semibold uppercase tracking-[0.25em] text-[#153B16]/40">
                Strategic Market 02
              </span>

              <p className="mt-2 text-lg font-semibold tracking-wide text-[#153B16]">
                MADAGASCAR
              </p>

              <p className="mt-1 text-xs text-[#153B16]/45">
                Indian Ocean
              </p>

            </div>

          </div>

        </div>


        {/* =====================================================
            OPERATION CARDS
        ====================================================== */}

        <div className="mt-14 grid gap-6 lg:grid-cols-2">

          {operations.map((operation) => (
            <article
              key={operation.number}
              className="group relative overflow-hidden border border-[#153B16]/10 bg-white p-7 transition-all duration-500 hover:border-[#E5CC64]/70 sm:p-9 lg:p-10"
            >

              {/* BACKGROUND NUMBER */}

              <span className="pointer-events-none absolute -right-3 -top-5 font-[family-name:var(--font-cinzel)] text-[130px] leading-none text-[#153B16]/[0.025]">
                {operation.number}
              </span>


              {/* COUNTRY HEADER */}

              <div className="relative flex items-start justify-between">

                <div>

                  <span className="text-[7px] font-semibold uppercase tracking-[0.28em] text-[#153B16]/35">
                    {operation.number} / Regional Operation
                  </span>

                  <h3 className="mt-3 text-2xl font-semibold tracking-wide text-[#153B16] sm:text-3xl">
                    {operation.country}
                  </h3>

                  <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#E5CC64]">
                    {operation.region}
                  </p>

                </div>


                {/* LOCATION MARKER */}

                <div className="flex h-9 w-9 items-center justify-center border border-[#E5CC64]/50">
                  <span className="h-2 w-2 rounded-full bg-[#E5CC64]" />
                </div>

              </div>


              {/* ENTITY */}

              <div className="relative mt-9 border-l-2 border-[#E5CC64] pl-5">

                <p className="text-lg font-semibold tracking-wide text-[#153B16] sm:text-xl">
                  {operation.entity}
                </p>

                <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#153B16]/40">
                  {operation.shortName}
                </p>

                <p className="mt-3 text-[7px] font-semibold uppercase tracking-[0.16em] text-[#153B16]/40">
                  {operation.category}
                </p>

              </div>


              {/* DESCRIPTION (Updated to Black) */}

              <p className="relative mt-7 max-w-xl text-sm leading-7 text-black">
                {operation.description}
              </p>


              {/* PRODUCTS */}

              <div className="relative mt-8">

                <div className="mb-4 flex items-center gap-3">

                  <span className="h-px w-5 bg-[#E5CC64]" />

                  <span className="text-[7px] font-bold uppercase tracking-[0.24em] text-[#153B16]/40">
                    Main Product Categories
                  </span>

                </div>


                <div className="flex flex-wrap gap-x-5 gap-y-3">

                  {operation.products.map((product) => (
                    <span
                      key={product}
                      className="text-[7px] font-semibold uppercase tracking-[0.12em] text-[#153B16]/80"
                    >
                      {product}
                    </span>
                  ))}

                </div>

              </div>


              {/* SECOND MADAGASCAR ENTITY */}

              {operation.secondaryEntity && (
                <div className="relative mt-9 border-t border-[#153B16]/10 pt-7">

                  <div className="flex items-center gap-3">

                    <span className="h-px w-5 bg-[#E5CC64]" />

                    <span className="text-[7px] font-bold uppercase tracking-[0.24em] text-[#153B16]/40">
                      Separate Mining Operation
                    </span>

                  </div>


                  <h4 className="mt-4 text-lg font-semibold tracking-wide text-[#153B16]">
                    {operation.secondaryEntity.name}
                  </h4>

                  <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#E5CC64]">
                    {operation.secondaryEntity.category}
                  </p>

                  {/* Secondary Description Updated to Black */}
                  <p className="mt-3 text-sm leading-6 text-black">
                    {operation.secondaryEntity.description}
                  </p>


                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">

                    {operation.secondaryEntity.products.map((product) => (
                      <span
                        key={product}
                        className="text-[7px] font-semibold uppercase tracking-[0.12em] text-[#153B16]/80"
                      >
                        {product}
                      </span>
                    ))}

                  </div>

                </div>
              )}

            </article>
          ))}

        </div>


        {/* =====================================================
            NETWORK POSITIONING
        ====================================================== */}

        <div className="mt-6 border border-[#153B16]/10 bg-[#153B16] px-7 py-9 sm:px-10 sm:py-10 lg:px-12">

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            {/* LEFT */}

            <div>

              <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#E5CC64]">
                One Professional Network
              </p>

              <h3 className="mt-3 max-w-lg text-2xl font-semibold leading-tight text-[#F3F3F3] sm:text-3xl">
                Two strategic sourcing markets.
              </h3>

            </div>


            {/* RIGHT (Updated Dark Box Paragraphs to Pure White) */}

            <div>

              <p className="text-sm leading-7 text-white">
                International buyers can inquire about suitable products from
                Uganda or Madagascar depending on origin, availability,
                specifications, quantity, pricing and logistics.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/80">
                Each relevant company or operation handles products according
                to its own business activity and sourcing capability.
              </p>

            </div>

          </div>

        </div>


        {/* =====================================================
            COMMERCIAL CTA
        ====================================================== */}

        <div className="mt-10 flex flex-col gap-6 border-t border-[#153B16]/10 pt-8 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#153B16]/40">
              International Sourcing
            </p>

            {/* Footer CTA Paragraph Updated to Black */}
            <p className="mt-2 max-w-2xl text-sm leading-6 text-black">
              Tell us the product, quantity, specifications and preferred
              origin you require, and our team can identify the appropriate
              sourcing opportunity.
            </p>

          </div>


          <Link
            href="#offer"
            className="group inline-flex shrink-0 items-center gap-5 border border-[#153B16]/20 px-6 py-3.5 text-[8px] font-bold uppercase tracking-[0.2em] text-[#153B16] transition-all duration-300 hover:border-[#153B16] hover:bg-[#153B16] hover:text-[#E5CC64]"
          >
            Request A Sourcing Inquiry

            <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

          </Link>

        </div>

      </div>
    </section>
  );
}