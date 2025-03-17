import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basic Research Proposal Template",
};

export default function BasicResearchProposalTemplate() {
  return (
    <main className="w-full min-h-screen bg-black">
      <div className="flex flex-col py-24 md:py-32 relative gap-2 justify-center items-start w-full text-white px-10">
        <span className="flex justify-start text-left text-3xl md:text-6xl font-bold mb-5">
          Basic Research Proposal Template
        </span>
        <div className="text-base p-6 md:text-lg md:p-12 w-full bg-white text-black rounded-lg">
          <div className="grid grid-cols-[1.5rem_auto] gap-x-5">
            <span className="text-right">I.</span>
            <span>Introduction and Rationale</span>
            <span className="text-right">II.</span>
            <span>Literature Review</span>
            <span className="text-right">III.</span>
            <span>Research Questions</span>
            <span className="text-right">IV.</span>
            <span>Scope and Limitations</span>
            <span className="text-right">V.</span>
            <span>Research Methodology</span>
            <div className="col-span-2 grid grid-cols-[2rem_auto] pl-8 gap-x-5">
              <span className="text-right">a.</span>
              <span>Research Design</span>
              <span className="text-right">b.</span>
              <span>Sampling</span>
              <span className="text-right">c.</span>
              <span>Data Collection</span>
              <span className="text-right">d.</span>
              <span>Ethical Issues</span>
              <span className="text-right">e.</span>
              <span>Data Analysis</span>
            </div>
            <span className="text-right">VI.</span>
            <span>References</span>
            <span className="text-right">VII.</span>
            <span>Annexes</span>
            <div className="col-span-2 grid grid-cols-[2rem_auto] pl-8 gap-x-5">
              <span className="text-right">a.</span>
              <span>Research Instrument</span>
              <span className="text-right">b.</span>
              <span>Sample Consent Form</span>
              <span className="text-right">c.</span>
              <span>
                Other documents as deemed relevant by the researcher(s)
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
