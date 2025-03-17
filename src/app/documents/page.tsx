import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documents",
};

export default function CompletedBasicResearchTemplate() {
  return (
    <main className="w-full min-h-screen bg-black">
      <div className="flex flex-col py-24 md:py-32 relative gap-2 justify-center items-start w-full text-white px-10">
        <span className="flex justify-start text-left text-3xl md:text-6xl font-bold mb-5">
          Documents
        </span>
        <div className="text-base p-6 md:text-lg md:p-12 flex flex-col w-full bg-white text-black rounded-lg">
          <span className="text-center font-bold text-2xl md:text-4xl">
            Content is still not yet available.
          </span>
        </div>
      </div>
    </main>
  );
}
