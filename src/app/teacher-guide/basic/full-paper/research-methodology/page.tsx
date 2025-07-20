"use client";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Page() {
  return (
    <main className="w-full min-h-screen bg-white">
      <div className="flex flex-col py-24 xl:py-32 relative gap-2 justify-center items-start w-full text-black px-5 xl:px-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/#resources">Resources</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/teacher-guide/basic/full-paper">
                Completed Basic Research Paper
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>VIII. Research Methodology</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Title + Pagination with mobile stacking */}
        <div className="flex flex-col md:flex-row justify-between items-start xl:items-center w-full gap-y-4 xl:gap-y-0 mb-5">
          {/* Title */}
          <p className="text-2xl xl:text-6xl font-bold">
            Completed Basic Research Paper
          </p>

          <div className="flex flex-row gap-2 sm:gap-4 w-auto">
            <Link href="/teacher-guide/basic/full-paper/scope-and-limitations">
              <Button
                variant="default"
                className="w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Previous
              </Button>
            </Link>

            <Select
              defaultValue="research-methodology"
              onValueChange={(value) => {
                window.location.href = `/teacher-guide/basic/full-paper/${value}`;
              }}
            >
              <SelectTrigger className=" bg-white hover:bg-black/10 transition-all duration-300 cursor-pointer shadow-xs border-black/5">
                <div className="truncate text-left w-[120px]">
                  <SelectValue placeholder="Page" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-white border-0 cursor-pointer">
                {[
                  ["I. Title Page", "title-page"],
                  ["II. Abstract", "abstract"],
                  ["III. Acknowledgment", "acknowledgment"],
                  [
                    "IV. Introduction and Rationale",
                    "introduction-and-rationale",
                  ],
                  ["V. Literature Review", "literature-review"],
                  ["VI. Research Questions", "research-questions"],
                  ["VII. Scope and Limitations", "scope-and-limitations"],
                  ["VIII. Research Methodology", "research-methodology"],
                  [
                    "\u00a0\u00a0\u00a0a. Research Design",
                    "research-methodology#research-design",
                  ],
                  [
                    "\u00a0\u00a0\u00a0b. Sampling",
                    "research-methodology#sampling",
                  ],
                  [
                    "\u00a0\u00a0\u00a0c. Data Collection",
                    "research-methodology#data-collection",
                  ],
                  [
                    "\u00a0\u00a0\u00a0d. Ethical Issues",
                    "research-methodology#ethical-issues",
                  ],
                  [
                    "\u00a0\u00a0\u00a0e. Data Analysis",
                    "research-methodology#data-analysis",
                  ],
                  [
                    "IX. Discussion of Results and Recommendation",
                    "discussion-and-recommendation",
                  ],
                  [
                    "X. Dissemination and Advocacy",
                    "dissemination-and-advocacy",
                  ],
                  ["XI. References", "references"],
                  ["XII. Annexes", "annexes"],
                  [
                    "\u00a0\u00a0\u00a0a. Research Instrument",
                    "annexes#research-instrument",
                  ],
                  [
                    "\u00a0\u00a0\u00a0b. Signed Declaration of Anti-Plagiarism and Absence of Conflict of Interest",
                    "annexes#anti-plagiarism-declaration",
                  ],
                  [
                    "\u00a0\u00a0\u00a0c. Signed Declaration of AI Use (If applicable)",
                    "annexes#ai-use-declaration",
                  ],
                  [
                    "\u00a0\u00a0\u00a0d. Other Documents",
                    "annexes#other-documents",
                  ],
                ].map(([label, value]) => (
                  <SelectItem
                    key={value}
                    value={value}
                    className="hover:bg-black/10 transition-all duration-300 cursor-pointer whitespace-normal"
                  >
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Link href="/teacher-guide/basic/full-paper/discussion-and-recommendation">
              <Button
                variant="default"
                className="w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Next
              </Button>
            </Link>
          </div>
        </div>

        {/* Main content */}
        <div className="text-base p-6 xl:text-lg xl:p-12 w-full bg-white text-black border border-black/5 shadow-2xl rounded-lg">
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-[3rem_auto] gap-x-5 text-2xl xl:text-4xl font-bold">
              <p className="text-right">VIII.</p>
              <p>Research Methodology</p>
            </div>

            <div className="py-6 flex flex-col gap-6">
              {/* Research Design Section */}
              <section
                id="research-design"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔍 a. Research Design</p>
                <p className="font-bold">✅ What to Include:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    Describe the type of study:
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>
                        <strong>Quantitative:</strong> descriptive,
                        correlational, quasi-experimental
                      </li>
                      <li>
                        <strong>Qualitative:</strong> case study,
                        phenomenological, etc.
                      </li>
                    </ul>
                  </li>
                </ul>
                <p className="font-bold pt-2">🧾 Example:</p>
                <p>
                  A descriptive-correlational design was used to explore the
                  relationship between two variables.
                </p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Sampling Section */}
              <section
                id="sampling"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔍 b. Sampling</p>
                <p className="font-bold">✅ What to Include:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>State the population and sample size.</li>
                  <li>Use Slovin’s formula (for quantitative studies).</li>
                  <li>
                    Sampling technique: random, purposive, stratified, etc.
                  </li>
                </ul>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Data Collection Section */}
              <section
                id="data-collection"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔍 c. Data Collection</p>
                <p className="font-bold">✅ What to Include:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>How the data was collected (e.g., survey, interview)</li>
                  <li>Tools used (e.g., questionnaire)</li>
                  <li>Duration and process</li>
                </ul>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Ethical Issues Section */}
              <section
                id="ethical-issues"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔍 d. Ethical Issues</p>
                <p className="font-bold">✅ What to Include:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Voluntary participation</li>
                  <li>Informed consent</li>
                  <li>Anonymity and confidentiality</li>
                  <li>Research permit (if required)</li>
                </ul>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Data Analysis Section */}
              <section
                id="data-analysis"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔍 e. Data Analysis</p>
                <p className="font-bold">✅ What to Include:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    <strong>Quantitative:</strong>
                  </li>
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>Descriptive (mean, percentage)</li>
                    <li>Inferential (Pearson r, t-test, chi-square)</li>
                  </ul>
                  <li>
                    <strong>Qualitative:</strong>
                  </li>
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>Thematic analysis</li>
                    <li>Coding and theme development</li>
                  </ul>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
