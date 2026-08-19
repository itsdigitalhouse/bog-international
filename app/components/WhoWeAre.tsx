import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F3F3F3] text-[#153B16]"
    >
      {/* =========================================================
          BACKGROUND DETAIL
      ========================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(#153B16 1px, transparent 1px),
            linear-gradient(90deg, #153B16 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#E5CC64]/10 blur-[120px]" />


      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28 xl:px-20">


        {/* =======================================================
            SECTION HEADER
        ======================================================== */}

        <div className="mb-14 flex items-center justify-between border-b border-[#153B16]/15 pb-5 sm:mb-16">

          <div className="flex items-center gap-4">

            <span className="h-px w-10 bg-[#E5CC64] sm:w-14" />

            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#153B16]/60 sm:text-[10px]">
              About Bhatia Ocean Gold
            </span>

          </div>

          <span className="hidden font-mono text-[8px] uppercase tracking-[0.3em] text-[#153B16]/30 sm:block">
            BOG / 02
          </span>

        </div>


        {/* =======================================================
            MAIN EDITORIAL GRID
        ======================================================== */}

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">


          {/* =====================================================
              IMAGE SIDE
          ====================================================== */}

          <div className="relative">

            {/* Image frame */}

            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#153B16] sm:aspect-[5/4] lg:aspect-[4/5]">

              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1400&q=85"
                alt="Mining and natural resources landscape"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Green overlay */}

              <div className="absolute inset-0 bg-[#153B16]/25" />

              {/* Gradient */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#153B16]/80 via-transparent to-transparent" />


              {/* Image label */}

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

                <div className="flex items-end justify-between">

                  <div>

                    <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#E5CC64]">
                      Resource to Market
                    </span>

                    <p className="mt-2 max-w-xs font-[family-name:var(--font-cinzel)] text-lg leading-tight text-[#F3F3F3] sm:text-xl">
                      African resources.
                      <br />
                      Global demand.
                    </p>

                  </div>

                  <span className="font-mono text-[8px] tracking-[0.2em] text-[#F3F3F3]/50">
                    02 / 06
                  </span>

                </div>

              </div>

            </div>


            {/* Gold corner detail */}

            <div className="absolute -bottom-3 -right-3 h-20 w-20 border-b border-r border-[#E5CC64] sm:-bottom-4 sm:-right-4 sm:h-24 sm:w-24" />

            <div className="absolute -left-3 -top-3 h-14 w-14 border-l border-t border-[#E5CC64]/60 sm:-left-4 sm:-top-4 sm:h-16 sm:w-16" />

          </div>


          {/* =====================================================
              CONTENT SIDE
          ====================================================== */}

          <div>


            {/* Small heading */}

            <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#153B16]/45">
              Who We Are
            </span>


            {/* Main heading */}

            <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-cinzel)] text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] text-[#153B16] sm:text-[42px] md:text-[48px] lg:text-[54px]">

              An International
              <br />

              <span className="text-[#E5CC64]">
                Commodities Company.
              </span>

            </h2>


            {/* Description (Updated to Black) */}

            <p className="mt-6 max-w-2xl text-sm leading-7 text-black sm:text-base sm:leading-8">
              Bhatia Ocean Gold International connects African resources
              with global markets through responsible sourcing, commodity
              trading, export coordination and international B2B supply.
            </p>


            <p className="mt-4 max-w-2xl text-sm leading-7 text-black sm:text-base sm:leading-8">
              Our business focus spans mining, gold, copper, minerals,
              commodity trading, international trading and export.
            </p>


            {/* =================================================
                BUSINESS AREAS
            ================================================== */}

            <div className="mt-10 grid grid-cols-2 border-l border-t border-[#153B16]/15 sm:grid-cols-4">

              {[
                {
                  label: "Mining",
                  href: "/mining",
                },
                {
                  label: "Gold",
                  href: "/products/gold",
                },
                {
                  label: "Copper",
                  href: "/products/copper",
                },
                {
                  label: "Minerals",
                  href: "/products/minerals",
                },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group border-b border-r border-[#153B16]/15 p-4 transition-colors duration-300 hover:bg-[#153B16] sm:p-5"
                >

                  <div className="flex items-center justify-between">

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#153B16] transition-colors group-hover:text-[#E5CC64]">
                      {item.label}
                    </span>

                    <ArrowUpRight
                      size={13}
                      className="text-[#E5CC64] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />

                  </div>

                </Link>
              ))}

            </div>


            {/* =================================================
                CTA AREA
            ================================================== */}

            <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">

              <Link
                href="/about"
                className="group inline-flex w-fit items-center gap-3 bg-[#153B16] px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#F3F3F3] transition-all duration-300 hover:bg-[#E5CC64] hover:text-[#153B16]"
              >
                Our Company

                <ArrowUpRight
                  size={14}
                  className="text-[#E5CC64] transition-colors group-hover:text-[#153B16]"
                />

              </Link>


              <Link
                href="/international-trading"
                className="group inline-flex w-fit items-center gap-2 border-b border-[#153B16]/25 pb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#153B16] transition-colors hover:border-[#E5CC64] hover:text-[#153B16]"
              >
                How We Operate

                <ArrowRight
                  size={13}
                  className="text-[#E5CC64] transition-transform duration-300 group-hover:translate-x-1"
                />

              </Link>

            </div>

          </div>

        </div>


        {/* =======================================================
            BOTTOM POSITIONING STRIP
        ======================================================== */}

        <div className="mt-16 grid border-y border-[#153B16]/15 sm:grid-cols-3">

          <div className="border-b border-[#153B16]/15 py-5 sm:border-b-0 sm:border-r sm:px-6 lg:px-8">

            <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#153B16]/40">
              Our Focus
            </span>

            <p className="mt-2 font-[family-name:var(--font-cinzel)] text-lg text-[#153B16]">
              Resources
            </p>

          </div>


          <div className="border-b border-[#153B16]/15 py-5 sm:border-b-0 sm:border-r sm:px-6 lg:px-8">

            <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#153B16]/40">
              Our Market
            </span>

            <p className="mt-2 font-[family-name:var(--font-cinzel)] text-lg text-[#153B16]">
              Global B2B
            </p>

          </div>


          <div className="py-5 sm:px-6 lg:px-8">

            <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#153B16]/40">
              Our Direction
            </span>

            <p className="mt-2 font-[family-name:var(--font-cinzel)] text-lg text-[#153B16]">
              Africa → Global Markets
            </p>

          </div>

        </div>

      </div>


      {/* Bottom gold accent */}

      <div className="absolute bottom-0 left-0 h-px w-full bg-[#E5CC64]" />

    </section>
  );
}