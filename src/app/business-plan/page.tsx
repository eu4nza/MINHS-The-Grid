import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Plan",
};

export default function BusinessPlan() {
  return (
    <main className="w-full min-h-screen bg-black">
      <div className="py-32 relative flex flex-col gap-2 justify-center items-start w-full text-white px-10">
        <span className="flex justify-start text-left text-6xl font-bold mb-5">
          Business Plan
        </span>
        <div className="text-lg w-full bg-white text-black p-10 rounded-lg">
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
