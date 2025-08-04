import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="team"
      className="min-h-screen bg-cover bg-center py-15 xl:py-20"
      style={{
        backgroundImage: "url('/assets/background/variant1_bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(255, 255, 255, 0.50)",
      }}
    >
      <div className="container mx-auto px-6 xl:px-20 flex flex-col h-full">
        {/* Title at top */}
        <p className="text-3xl xl:text-6xl text-black font-bold text-center xl:text-left mb-10">
          The Project Proponents
        </p>

        {/* Flexible centered content */}
        <div className="flex-grow flex justify-center items-center">
          <div className="flex flex-col xl:flex-row justify-center items-center xl:items-start gap-10 xl:gap-40">
            {/* Person 1 */}
            <div className="flex flex-col items-center gap-5 xl:gap-10">
              <div className="w-[150px] xl:w-[250px]">
                <Image
                  src="/assets/team/Christianne_Roie_A._Carabeo.webp"
                  alt="Christianne Roie A. Carabeo"
                  width={250}
                  height={250}
                />
              </div>
              <p className="w-full text-base xl:text-lg bg-black px-5 py-2 text-white font-bold text-center">
                Christianne Roie A. Carabeo, MACDDS
                <br />
                Research Coordinator
              </p>
            </div>

            {/* Person 2 */}
            <div className="flex flex-col items-center gap-5 xl:gap-10">
              <div className="w-[150px] xl:w-[250px]">
                <Image
                  src="/assets/team/Ivy_Filipina_R._Toledo.webp"
                  alt="Ivy Filipina R. Toledo"
                  width={250}
                  height={250}
                />
              </div>
              <p className="w-full text-base xl:text-lg bg-black px-5 py-2 text-white font-bold text-center">
                Ivy Filipina R. Toledo, MBA
                <br />
                Entrepreneurship Coordinator
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
