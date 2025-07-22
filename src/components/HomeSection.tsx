export default function HomeSection() {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/background/variant1_bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <div className="pt-20 px-6 xl:pt-32 xl:px-20">
          <p className="text-5xl xl:text-8xl text-white font-bold">The GRID</p>
          <p className="text-xl xl:text-3xl text-black ">
            Guidelines for Research and Investigative Data
          </p>
        </div>
      </div>
    </section>
  );
}
