import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Action Research Proposal Template",
};

export default function ActionResearchProposalTemplate() {
  return (
    <main
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/background/variant1_bg.webp')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="py-32 relative flex flex-col gap-2 justify-center items-start w-full text-white px-10">
        <span className="flex justify-start text-left text-6xl font-bold mb-5">
          Action Research Proposal Template
        </span>
        <div className="text-lg w-full bg-white text-black p-10 rounded-lg">
          <div className="grid grid-cols-[1.5rem_auto] gap-x-5">
            <span className="text-right">I.</span>
            <span>Context and Rationale</span>
            <span className="text-right">II.</span>
            <span>Action Research Questions</span>
            <span className="text-right">III.</span>
            <span>Proposed Innovation, Intervention, and Strategy</span>
            <span className="text-right">IV.</span>
            <span>Action Research Methods</span>
            <div className="col-span-2 grid grid-cols-[2rem_auto] pl-8 gap-x-5">
              <span className="text-right">a.</span>
              <span>Research Design</span>
              <span className="text-right">b.</span>
              <span>
                Participants and/or Other Sources of Data and Information
              </span>
              <span className="text-right">c.</span>
              <span>Data Gathering Method</span>
              <span className="text-right">d.</span>
              <span>Data Analysis Plan</span>
            </div>
            <span className="text-right">V.</span>
            <span>References</span>
            <span className="text-right">VI.</span>
            <span>Annexes</span>
            <div className="col-span-2 grid grid-cols-[2rem_auto] pl-8 gap-x-5">
              <span className="text-right">a.</span>
              <span>Research Instrument</span>
              <span className="text-right">b.</span>
              <span>Sample Consent Form</span>
              <span className="text-right">c.</span>
              <span>
                Other Documents as deemed relevant by the researcher(s)
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
