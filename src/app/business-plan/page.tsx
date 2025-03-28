import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Plan",
};

export default function BusinessPlan() {
  return (
    <main className="w-full min-h-screen bg-white">
      <div className="flex flex-col py-24 md:py-32 relative gap-2 justify-center items-start w-full text-black px-10">
        <span className="flex justify-start text-left text-3xl md:text-6xl font-bold mb-5">
          Business Plan
        </span>
        <div className="text-base p-6 md:text-lg md:p-12 w-full bg-white text-black border-black/5 border-1 shadow-2xl rounded-lg">
          <div className="grid grid-cols-[1.5rem_auto] gap-x-5">
            <span className="text-right">I.</span>
            <span>Executive Summary</span>
            <span className="text-right">II.</span>
            <span>Introduction</span>
            <span className="text-right">III.</span>
            <span>Company Background</span>
            <span className="text-right">IV.</span>
            <span>Environmental Analysis</span>
            <span className="text-right">V.</span>
            <span>Marketing Aspect</span>
            <span className="text-right">VI.</span>
            <span>Management Aspect</span>
            <span className="text-right">VII.</span>
            <span>Operation Aspect</span>
            <span className="text-right">VIII.</span>
            <span>Financial Aspect</span>
            <span className="text-right">IX.</span>
            <span>Socio Cultural Aspect</span>
          </div>
        </div>
      </div>
    </main>
  );
}
