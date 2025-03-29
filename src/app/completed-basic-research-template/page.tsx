import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Completed Basic Research Template",
};

export default function CompletedBasicResearchTemplate() {
  return (
    <main className="w-full min-h-screen bg-white">
      <div className="flex flex-col py-24 md:py-32 relative gap-2 justify-center items-start w-full text-black px-10">
        <span className="flex justify-start text-left text-3xl md:text-6xl font-bold mb-5">
          Completed Basic Research Template
        </span>
        <div className="text-base p-6 md:text-lg md:p-12 w-full bg-white text-black border-black/5 border-1 shadow-2xl inset-shadow-sm rounded-lg">
          <div className="grid grid-cols-[1.5rem_auto] gap-x-5">
            <span className="text-right">I.</span>
            <span>
              Title Page (
              <a
                href="https://bit.ly/8thCC-templates"
                target="_blank"
                className="text-blue-400"
              >
                https://bit.ly/8thCC-templates
              </a>
              )
            </span>
            <span className="text-right">II.</span>
            <span>Abstract</span>
            <span className="text-right">III.</span>
            <span>Acknowledgment</span>
            <span className="text-right">IV.</span>
            <span>Introduction and Rationale</span>
            <span className="text-right">V.</span>
            <span>Literature Review</span>
            <span className="text-right">VI.</span>
            <span>Research Questions</span>
            <span className="text-right">VII.</span>
            <span>Scope and Limitations</span>
            <span className="text-right">VIII.</span>
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
            <span className="text-right">IX.</span>
            <span>Discussion of Results and Recommendation</span>
            <span className="text-right">X.</span>
            <span>Dissemination and Advocacy</span>
            <span className="text-right">XI.</span>
            <span>References</span>
            <span className="text-right">XII.</span>
            <span>Annexes</span>
            <div className="col-span-2 grid grid-cols-[2rem_auto] pl-8 gap-x-5">
              <span className="text-right">a.</span>
              <span>Research Instrument</span>
              <span className="text-right">b.</span>
              <span>
                Signed Declaration of Anti-Plagiarism and Absence of Conflict of
                Interest
              </span>
              <span className="text-right">c.</span>
              <span>Signed Declaration of AI Use (If applicable)</span>
              <span className="text-right">d.</span>
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
