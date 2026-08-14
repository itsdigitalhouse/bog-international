"use client";

const operationHighlights = [
  {
    title: "Concession Management",
    description:
      "Managing verified mineral concessions through structured acquisition, governmental coordination, title verification, and operational planning.",
  },
  {
    title: "Technical Assessment",
    description:
      "Supporting geological evaluation, field surveying, sampling, reserve assessment, and technical analysis before extraction activities proceed.",
  },
  {
    title: "Controlled Extraction",
    description:
      "Coordinating extraction activities through defined field procedures, appropriate machinery, production planning, and controlled mineral handling.",
  },
  {
    title: "Field Security & Transit",
    description:
      "Maintaining documented custody and secure movement of extracted material from field operations through processing, storage, and onward export.",
  },
];

export default function MiningOperations() {
  return (
    <section className="relative overflow-hidden bg-white py-20 text-[#153B16] lg:py-24">

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="
            absolute inset-0
            opacity-[0.025]
            bg-[radial-gradient(#153B16_1px,transparent_1px)]
            [background-size:24px_24px]
          "
        />

        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#E5CC64]/5 blur-3xl" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* =====================================================
              LEFT — MAIN POSITIONING
          ====================================================== */}

          <div className="space-y-6 lg:col-span-7">

            {/* Label */}

            <div className="inline-block">
              <span
                className="
                  border
                  border-[#E5CC64]/60
                  bg-[#E5CC64]/20
                  px-3
                  py-1
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#153B16]
                  font-mono
                "
              >
                CORE FIELD OPERATIONS
              </span>
            </div>


            {/* Heading */}

            <h2
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                font-bold
                uppercase
                leading-[1.04]
                text-[#153B16]
                font-[family-name:var(--font-cinzel)]
              "
            >
              Integrated Mining & Field Operations
            </h2>


            {/* Gold divider */}

            <div className="h-[3px] w-16 bg-[#E5CC64]" />


            {/* Paragraph 1 */}

            <p
              className="
                text-xs
                sm:text-sm
                md:text-base
                font-normal
                leading-relaxed
                text-black
              "
            >
              Bhatia Ocean Gold International structures its mining activities
              around verified mineral concessions, technical assessment,
              controlled extraction, and coordinated field management.
            </p>


            {/* Paragraph 2 */}

            <p
              className="
                text-xs
                sm:text-sm
                md:text-base
                font-normal
                leading-relaxed
                text-black
              "
            >
              From initial geological evaluation through extraction planning,
              mineral handling, security, and field-to-port movement, each
              operational stage is coordinated within defined commercial,
              technical, and regulatory parameters.
            </p>


            {/* =================================================
                HIGHLIGHT CARDS
            ================================================== */}

            <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">

              {operationHighlights.map((item) => (
                <div
                  key={item.title}
                  className="
                    border
                    border-gray-200
                    border-l-4
                    border-l-[#153B16]
                    bg-white
                    p-4
                    shadow-sm
                    transition-all
                    duration-300
                    hover:border-[#E5CC64]
                    hover:border-l-[#153B16]
                  "
                >

                  <h3
                    className="
                      mb-1
                      text-xs
                      font-bold
                      uppercase
                      text-[#153B16]
                      font-[family-name:var(--font-cinzel)]
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="text-[11px] leading-relaxed text-black sm:text-xs">
                    {item.description}
                  </p>

                </div>
              ))}

            </div>

          </div>


          {/* =====================================================
              RIGHT — OPERATING FRAMEWORK
          ====================================================== */}

          <div className="relative lg:col-span-5">

            <div
              className="
                relative
                z-10
                border-2
                border-[#E5CC64]
                bg-[#153B16]
                p-6
                text-white
                shadow-2xl
                sm:p-8
              "
            >

              {/* Top label */}

              <div className="mb-5 flex items-center justify-between border-b border-[#E5CC64]/30 pb-3">

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#E5CC64]
                    font-mono
                  "
                >
                  [ MINING OPERATIONS ]
                </span>

                <span className="h-2 w-2 rounded-full bg-[#E5CC64]" />

              </div>


              {/* Title */}

              <h3
                className="
                  mb-5
                  text-lg
                  font-bold
                  uppercase
                  leading-tight
                  text-white
                  font-[family-name:var(--font-cinzel)]
                "
              >
                Operating Framework
              </h3>


              {/* Operational stages */}

              <div className="space-y-5">

                {/* 01 */}

                <div className="flex items-start gap-3">

                  <span
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      bg-[#E5CC64]
                      text-[10px]
                      font-extrabold
                      text-[#153B16]
                    "
                  >
                    01
                  </span>

                  <div>
                    <strong
                      className="
                        block
                        text-[11px]
                        font-medium
                        uppercase
                        text-white
                        font-[family-name:var(--font-cinzel)]
                      "
                    >
                      Concession Verification
                    </strong>

                    <span className="mt-1 block text-xs leading-relaxed text-gray-300">
                      Establishing legal and operational basis before field
                      activity begins.
                    </span>
                  </div>

                </div>


                {/* 02 */}

                <div className="flex items-start gap-3">

                  <span
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      bg-[#E5CC64]
                      text-[10px]
                      font-extrabold
                      text-[#153B16]
                    "
                  >
                    02
                  </span>

                  <div>
                    <strong
                      className="
                        block
                        text-[11px]
                        font-medium
                        uppercase
                        text-white
                        font-[family-name:var(--font-cinzel)]
                      "
                    >
                      Technical Evaluation
                    </strong>

                    <span className="mt-1 block text-xs leading-relaxed text-gray-300">
                      Geological surveys, sampling, and technical assessment
                      support extraction planning.
                    </span>
                  </div>

                </div>


                {/* 03 */}

                <div className="flex items-start gap-3">

                  <span
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      bg-[#E5CC64]
                      text-[10px]
                      font-extrabold
                      text-[#153B16]
                    "
                  >
                    03
                  </span>

                  <div>
                    <strong
                      className="
                        block
                        text-[11px]
                        font-medium
                        uppercase
                        text-white
                        font-[family-name:var(--font-cinzel)]
                      "
                    >
                      Controlled Extraction
                    </strong>

                    <span className="mt-1 block text-xs leading-relaxed text-gray-300">
                      Field extraction is coordinated through defined handling
                      and production procedures.
                    </span>
                  </div>

                </div>


                {/* 04 */}

                <div className="flex items-start gap-3">

                  <span
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      bg-[#E5CC64]
                      text-[10px]
                      font-extrabold
                      text-[#153B16]
                    "
                  >
                    04
                  </span>

                  <div>
                    <strong
                      className="
                        block
                        text-[11px]
                        font-medium
                        uppercase
                        text-white
                        font-[family-name:var(--font-cinzel)]
                      "
                    >
                      Secure Field Movement
                    </strong>

                    <span className="mt-1 block text-xs leading-relaxed text-gray-300">
                      Material movement remains documented and controlled
                      through downstream logistics.
                    </span>
                  </div>

                </div>

              </div>


              {/* Bottom status */}

              <div
                className="
                  mt-7
                  border-t
                  border-white/10
                  pt-5
                  text-[10px]
                  font-mono
                  text-gray-300
                "
              >
                <div className="flex items-center justify-between">

                  <span>Operational Model</span>

                  <span className="font-bold text-[#E5CC64]">
                    FIELD-TO-PORT
                  </span>

                </div>
              </div>

            </div>


            {/* Background frame */}

            <div
              className="
                absolute
                -bottom-3
                -right-3
                hidden
                h-full
                w-full
                border-2
                border-[#E5CC64]/40
                sm:block
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
}