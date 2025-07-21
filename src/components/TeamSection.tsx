import Image from "next/image";
export default function AboutSection() {
  return (
    <section
      id="team"
      className="bg-cover bg-center lg:bg-cover lg:bg-center"
      style={{
        backgroundImage: "url('/assets/background/variant1_bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(255, 255, 255, 0.50)",
      }}
    >
      <div className="h-screen">
        <p className="pt-20 px-6 text-3xl lg:pt-32 lg:px-20 lg:text-6xl text-black font-bold">
          The Project Proponents
        </p>
        <div className="gap-10 py-10 lg:gap-40 lg:pt-30 flex flex-col lg:flex-row justify-center">
          <div className="gap-5 lg:gap-10 flex flex-col items-center">
            <div className="w-[150px] lg:w-[250px]">
              <Image
                src="/assets/team/Christianne_Roie_A._Carabeo.webp"
                alt="Christianne Roie A. Carabeo"
                width={250}
                height={250}
              />
            </div>
            <p className="w-[400px] text-base lg:text-lg bg-black px-5 py-2 text-white font-bold text-center">
              Christianne Roie A. Carabeo, MACDDS
              <br />
              Research Coordinator
            </p>
          </div>
          <div className="gap-5 lg:gap-10 flex flex-col items-center">
            <div className="w-[150px] lg:w-[250px]">
              <Image
                src="/assets/team/Ivy_Filipina_R._Toledo.webp"
                alt="Christianne Roie A. Carabeo"
                width={250}
                height={250}
              />
            </div>
            <p className="w-[400px] text-base lg:text-lg bg-black px-5 py-2 text-white font-bold text-center">
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
