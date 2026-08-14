"use client";

const processSteps = [
  {
    step: "01",
    phase: "PHASE I",
    title: "Exploration & Geological Survey",
    description:
      "Executing geological assessment, field surveying, sampling, and technical evaluation to identify and assess prospective gold, copper, and mineral deposits.",
    status: "FIELD ASSESSMENT",
  },
  {
    step: "02",
    phase: "PHASE II",
    title: "Concession Development & Extraction",
    description:
      "Coordinating concession development and mineral extraction through defined operational procedures, appropriate machinery, and controlled field activities.",
    status: "ACTIVE OPERATIONS",
  },
  {
    step: "03",
    phase: "PHASE III",
    title: "Primary Processing & Assay",
    description:
      "Managing initial mineral handling, processing, sampling, and assay procedures to establish material quality and prepare commodities for downstream processing.",
    status: "QUALITY CONTROL",
  },
  {
    step: "04",
    phase: "PHASE IV",
    title: "Chain of Custody & Export",
    description:
      "Coordinating documented material movement, secure transit, export preparation, and onward logistics from operational sites toward international destinations.",
    status: "GLOBAL DISPATCH",
  },
];

export default function MiningProcess() {
  return (
    <section className="relative overflow-hidden border-y border-[#153B16]/10 bg-[#F3F3F3] py-20 text-[#153B16] lg:py-24">

      {/* =========================================================
          VERY LIGHT MINING PROCESS BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0">

        {/* Mining Background Image */}
        <img
          src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2200&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            opacity-[1.055]
            grayscale
          "
        />

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-[#F3F3F3]/90" />

        {/* Soft Green / Gold Tint */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-[#153B16]/[0.025]
            via-transparent
            to-[#E5CC64]/[0.035]
          "
        />

        {/* Subtle Pattern */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            bg-[radial-gradient(#153B16_1px,transparent_1px)]
            [background-size:24px_24px]
          "
        />

      </div>


      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =======================================================
            SECTION HEADER
        ======================================================== */}

        <div className="mx-auto mb-16 max-w-5xl text-center">

          {/* Label */}
          <div className="mb-4 inline-block">
            <span
              className="
                border
                border-[#E5CC64]/60
                bg-[#E5CC64]/20
                px-3
                py-1
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#153B16]
                font-[family-name:var(--font-cinzel)]
                sm:text-xs
              "
            >
              END-TO-END OPERATIONAL WORKFLOW
            </span>
          </div>


          {/* Heading */}
          <h2
            className="
              mx-auto
              text-xl
              font-bold
              uppercase
              leading-[1.12]
              tracking-wide
              text-[#153B16]
              font-[family-name:var(--font-cinzel)]
              sm:text-3xl
              md:text-4xl
            "
          >
            From Raw Concession to{" "}
            <span className="text-[#E5CC64]">
              Global Delivery
            </span>
          </h2>


          {/* Gold Divider */}
          <div className="mx-auto mb-5 mt-5 h-[2px] w-16 bg-[#E5CC64]" />


          {/* Description */}
          <p
            className="
              mx-auto
              max-w-3xl
              text-xs
              font-light
              leading-relaxed
              text-black
              sm:text-sm
              md:text-base
            "
          >
            Our operational workflow connects field assessment, concession
            development, mineral handling, quality verification, and export
            coordination within one structured supply chain.
          </p>

        </div>


        {/* =======================================================
            PROCESS PIPELINE
        ======================================================== */}

        <div className="relative">

          {/* Desktop Connecting Line */}
          <div
            className="
              pointer-events-none
              absolute
              left-[12.5%]
              right-[12.5%]
              top-[31px]
              hidden
              h-px
              bg-[#E5CC64]/50
              lg:block
            "
          />


          {/* Process Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {processSteps.map((item) => (
              <div
                key={item.step}
                className="
                  group
                  relative
                  flex
                  min-h-[310px]
                  flex-col
                  overflow-hidden
                  border
                  border-[#153B16]/15
                  bg-white
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#E5CC64]
                  sm:p-7
                "
              >

                {/* Top Gold Accent */}
                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-[3px]
                    w-full
                    bg-[#E5CC64]
                    opacity-80
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />


                {/* =================================================
                    STEP INDICATOR
                ================================================== */}

                <div className="relative z-10 mb-7 flex items-center justify-between">

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      border
                      border-[#E5CC64]
                      bg-[#153B16]
                      text-[10px]
                      font-bold
                      text-[#E5CC64]
                      font-mono
                    "
                  >
                    {item.step}
                  </div>


                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#153B16]/50
                      font-mono
                    "
                  >
                    {item.phase}
                  </span>

                </div>


                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="flex-1">

                  <h3
                    className="
                      mb-3
                      text-base
                      font-bold
                      uppercase
                      leading-snug
                      text-[#153B16]
                      font-[family-name:var(--font-cinzel)]
                      sm:text-lg
                    "
                  >
                    {item.title}
                  </h3>


                  {/* Small Gold Line */}
                  <div
                    className="
                      mb-4
                      h-[2px]
                      w-10
                      bg-[#E5CC64]
                      transition-all
                      duration-300
                      group-hover:w-16
                    "
                  />


                  <p
                    className="
                      text-xs
                      font-light
                      leading-relaxed
                      text-black
                      sm:text-sm
                    "
                  >
                    {item.description}
                  </p>

                </div>


                {/* =================================================
                    STATUS
                ================================================== */}

                <div className="mt-6 border-t border-[#153B16]/10 pt-4">

                  <div className="flex items-center justify-between gap-3">

                    <span
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-wider
                        text-[#153B16]/50
                        font-mono
                      "
                    >
                      Operational Stage
                    </span>


                    <span
                      className="
                        border
                        border-[#E5CC64]/60
                        bg-[#E5CC64]/15
                        px-2
                        py-1
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-wider
                        text-[#153B16]
                        font-mono
                      "
                    >
                      {item.status}
                    </span>

                  </div>

                </div>


                {/* =================================================
                    WATERMARK NUMBER
                ================================================== */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    right-2
                    select-none
                    text-7xl
                    font-bold
                    text-[#153B16]/[0.025]
                    font-mono
                  "
                >
                  {item.step}
                </span>

              </div>
            ))}

          </div>

        </div>


        {/* =======================================================
            BOTTOM OPERATIONAL BAR
        ======================================================== */}

        <div
          className="
            mt-10
            border
            border-[#153B16]/10
            bg-white
            px-5
            py-5
            sm:px-7
          "
        >

          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-4
              text-center
              sm:flex-row
              sm:text-left
            "
          >

            {/* Left */}
            <div>

              <span
                className="
                  mb-1
                  block
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#E5CC64]
                  font-mono
                "
              >
                BOG OPERATIONAL MODEL
              </span>


              <p className="text-xs text-black sm:text-sm">
                A coordinated workflow connecting field operations with
                downstream commercial and export requirements.
              </p>

            </div>


            {/* Right */}
            <div
              className="
                shrink-0
                border-l-2
                border-[#E5CC64]
                pl-4
                text-left
              "
            >

              <span
                className="
                  block
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-[#153B16]
                  font-mono
                "
              >
                FIELD → PROCESSING → EXPORT
              </span>


              <span
                className="
                  mt-1
                  block
                  text-[9px]
                  uppercase
                  tracking-wider
                  text-black/50
                  font-mono
                "
              >
                Structured Supply Chain
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}