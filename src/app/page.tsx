import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full">
      {/* Home Section */}
      <section
        id="home"
        className="w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/background/variant1_bg.webp')",
        }}
      >
        <div className="py-32 px-20">
          <p className="text-white text-8xl font-bold">The GRID</p>
          <p className="text-black text-3xl">
            Guidelines for Research and Investigative Data
          </p>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/background/variant2_bg.webp')",
          backgroundColor: "rgba(0, 0, 0, 0.25)", // Transparent overlay
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="py-32 px-20 w-full flex justify-end">
          <div className="max-w-2xl">
            <p className="text-white text-8xl font-bold">The GRID</p>
            <p className="text-black text-3xl">
              Guidelines for Research and Investigative Data
            </p>
            <p className="text-white text-xl text-justify pt-4">
              Developed in 2023, GRID is a structured framework designed to
              assist students and teachers in conducting effective research. It
              provides essential principles to ensure accuracy, credibility, and
              ethical integrity as aligned with the mandate of the Department of
              Education in strengthening research and innovation among academic
              institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/background/variant1_bg.webp')",
          backgroundColor: "rgba(255, 255, 255, 0.50)", // Transparent overlay
          backgroundBlendMode: "overlay",
        }}
      >
        <p className="py-32 px-20 text-black text-6xl font-bold">
          The Project Proponents
        </p>
        <div className="flex flex-row justify-center gap-40 pt-10">
          <div className="flex flex-col items-center gap-10">
            <Image
              src="/assets/team/Christianne_Roie_A._Carabeo.webp"
              alt="Christianne Roie A. Carabeo"
              width={250}
              height={250}
            />
            <p className="bg-black px-5 py-2 text-white text-lg font-bold text-center">
              Christianne Roie A. Carabeo, MACDDS
              <br />
              Research Coordinator
            </p>
          </div>
          <div className="flex flex-col items-center gap-10">
            <Image
              src="/assets/team/Ivy_Filipina_R._Toledo.webp"
              alt="Christianne Roie A. Carabeo"
              width={250}
              height={250}
            />
            <p className="bg-black px-9 py-2 text-white text-lg font-bold text-center">
              Ivy Filipina R. Toledo, MBA
              <br />
              Entrepreneurship Coordinator
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section
        id="resources"
        className="w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/background/variant2_bg.webp')",
        }}
      >
        <div className="py-32 px-20 flex justify-end">
          <p className="text-white text-6xl font-bold">
            Research Guides and Documents
          </p>
        </div>
      </section>
    </main>
  );
}
