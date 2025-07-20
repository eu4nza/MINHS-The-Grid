export default function HomeSection() {
  return (
    <section
      id="home"
      className="bg-cover bg-center lg:bg-cover lg:bg-center"
      style={{
        backgroundImage: "url('/assets/background/variant1_bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-screen">
        <div className="pt-20 px-6 lg:pt-32 lg:px-20">
          <p className="text-5xl lg:text-8xl text-white font-bold">The GRID</p>
          <p className="text-xl lg:text-3xl text-black ">
            Guidelines for Research and Investigative Data
          </p>
        </div>
      </div>
    </section>
  );
}
