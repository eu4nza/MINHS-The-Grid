export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen bg-cover bg-center py-15 xl:py-20"
      style={{
        backgroundImage: "url('/assets/background/variant2_bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="px-6 xl:px-20">
        <div className="w-full flex justify-end">
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
            <p className="text-base xl:text-xl text-white text-justify pt-4">
              This technology-based innovation and research dashboard is an
              invaluable tool for guiding students and teachers through the
              often complex and overwhelming process of conducting research. By
              providing a centralized platform with easy access to essential
              resources such as writing guides, templates and documents,
              students and teachers of MIINHS can efficiently navigate their way
              through the vast sea of information available. This dashboard not
              only streamlines the research process but also serves as a
              valuable learning aid by helping the school community to develop
              research projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
