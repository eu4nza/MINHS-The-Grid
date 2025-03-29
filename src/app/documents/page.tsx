import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documents",
};

export default function CompletedBasicResearchTemplate() {
  return (
    <main className="w-full min-h-screen bg-white">
      <div className="flex flex-col py-24 md:py-32 relative gap-2 justify-center items-start w-full text-black px-10">
        <span className="flex justify-start text-left text-3xl md:text-6xl font-bold mb-5">
          Documents
        </span>
        <div className="text-base p-6 md:text-lg md:p-12 w-full bg-white text-black border-black/5 border-1 shadow-2xl inset-shadow-sm rounded-lg">
          <span className="text-center font-bold text-2xl md:text-4xl">
            Content is still not yet available.
          </span>
        </div>
      </div>
    </main>
  );
}
