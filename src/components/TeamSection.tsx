import Image from "next/image";
export default function AboutSection() {
  return (
    <section
      id="team"
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/background/variant1_bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(255, 255, 255, 0.50)",
      }}
    >
      <div>
        <p className="pt-20 px-6 text-3xl xl:pt-32 xl:px-20 xl:text-6xl text-black font-bold">
          The Project Proponents
        </p>
        <div className="gap-10 py-10 xl:gap-40 xl:pt-30 flex flex-col xl:flex-row justify-center">
          <div className="gap-5 xl:gap-10 flex flex-col items-center">
            <div className="w-[150px] xl:w-[250px]">
              <Image
                src="/assets/team/Christianne_Roie_A._Carabeo.webp"
                alt="Christianne Roie A. Carabeo"
                width={250}
                height={250}
              />
            </div>
            <p className="w-[400px] text-base xl:text-lg bg-black px-5 py-2 text-white font-bold text-center">
              Christianne Roie A. Carabeo, MACDDS
              <br />
              Research Coordinator
            </p>
          </div>
          <div className="gap-5 xl:gap-10 flex flex-col items-center">
            <div className="w-[150px] xl:w-[250px]">
              <Image
                src="/assets/team/Ivy_Filipina_R._Toledo.webp"
                alt="Christianne Roie A. Carabeo"
                width={250}
                height={250}
              />
            </div>
            <p className="w-[400px] text-base xl:text-lg bg-black px-5 py-2 text-white font-bold text-center">
              Ivy Filipina R. Toledo, MBA
              <br />
              Entrepreneurship Coordinator
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
