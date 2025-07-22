export default function AboutSection() {
  return (
    <section
      id="about"
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/background/variant2_bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.25)",
      }}
    >
      <div>
        <div className="pt-20 px-6 xl:pt-32 xl:px-20 w-full flex justify-end">
          <div className="max-w-2xl">
            <p className="text-5xl xl:text-8xl text-white font-bold">
              The GRID
            </p>
            <p className="text-xl xl:text-3xl text-black">
              Guidelines for Research and Investigative Data
            </p>
            <p className="text-base xl:text-xl text-white text-justify pt-4">
              Developed in 2023, GRID is a structured framework designed to
              assist students and teachers in conducting effective research. It
              provides essential principles to ensure accuracy, credibility, and
              ethical integrity as aligned with the mandate of the Department of
              Education in strengthening research and innovation among academic
              institutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
