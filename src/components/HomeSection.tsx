export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen bg-cover bg-center py-15 xl:py-20"
      style={{
        backgroundImage: "url('/assets/background/variant1_bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container px-6 xl:px-20">
        <p className="text-5xl xl:text-8xl text-white font-bold">The GRID</p>
        <p className="text-xl xl:text-3xl text-black">
          Guidelines for Research and Investigative Data
        </p>
      </div>
    </section>
  );
}
