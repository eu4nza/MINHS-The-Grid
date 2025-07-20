"use client";
import Link from "next/link";
import { useEffect } from "react";
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
  useEffect(() => {
    const applyHighlight = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const id = hash.slice(1);
      const el = document.getElementById(id);

      if (el) {
        el.classList.add("bg-yellow-100");

        // Smoothly remove after 2 seconds
        setTimeout(() => {
          el.classList.remove("bg-yellow-100");
        }, 2000);
      }
    };

    // Run on load
    applyHighlight();

    // Run when hash changes
    window.addEventListener("hashchange", applyHighlight);

    return () => {
      window.removeEventListener("hashchange", applyHighlight);
    };
  }, []);
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
              <BreadcrumbLink href="/teacher-guide/action/full-paper">
                Completed Action Research Paper
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>VII. Action Research Methods</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Title + Pagination with mobile stacking */}
        <div className="flex flex-col md:flex-row justify-between items-start xl:items-center w-full gap-y-4 xl:gap-y-0 mb-5">
          {/* Title */}
          <p className="text-2xl xl:text-6xl font-bold">
            Completed Action Research Paper
          </p>

          <div className="flex flex-row gap-2 sm:gap-4 w-auto">
            <Link href="/teacher-guide/action/full-paper/proposed-innovation-intervention-and-strategy">
              <Button
                variant="default"
                className="w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Previous
              </Button>
            </Link>

            <Select
              defaultValue="action-research-methods"
              onValueChange={(value) => {
                window.location.href = `/teacher-guide/action/full-paper/${value}`;
              }}
            >
              <SelectTrigger className=" bg-white hover:bg-black/10 transition-all duration-300 cursor-pointer shadow-xs border-black/5">
                <div className="truncate text-left w-[120px]">
                  <SelectValue placeholder="Page" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-white border-0 cursor-pointer">
                {[
                  [
                    "title-page",
                    "I. Title Page (https://bit.ly/8thCC-templates)",
                  ],
                  ["abstract", "II. Abstract"],
                  ["acknowledgment", "III. Acknowledgment"],
                  ["context-and-rationale", "IV. Context and Rationale"],
                  ["action-research-questions", "V. Action Research Questions"],
                  [
                    "proposed-innovation-intervention-and-strategy",
                    "VI. Proposed Innovation, Intervention, and Strategy",
                  ],
                  ["action-research-methods", "VII. Action Research Methods"],
                  [
                    "action-research-methods#research-design",
                    "\u00a0\u00a0\u00a0a. Research Design",
                  ],
                  [
                    "action-research-methods#participants-and-data-sources",
                    "\u00a0\u00a0\u00a0b. Participants and/or Other Sources of Data and Information",
                  ],
                  [
                    "action-research-methods#data-gathering-method",
                    "\u00a0\u00a0\u00a0c. Data Gathering Method",
                  ],
                  [
                    "action-research-methods#data-analysis-plan",
                    "\u00a0\u00a0\u00a0d. Data Analysis Plan",
                  ],
                  [
                    "discussion-and-reflection",
                    "VIII. Discussion of Results and Reflection",
                  ],
                  ["action-plan", "IX. Action Plan"],
                  ["references", "X. References"],
                  ["annexes", "XI. Annexes"],
                  [
                    "annexes#research-instrument",
                    "\u00a0\u00a0\u00a0a. Research Instrument",
                  ],
                  [
                    "annexes#anti-plagiarism-declaration",
                    "\u00a0\u00a0\u00a0b. Signed Declaration of Anti-Plagiarism and Absence of Conflict of Interest",
                  ],
                  [
                    "annexes#ai-use-declaration",
                    "\u00a0\u00a0\u00a0c. Signed Declaration of AI Use (If applicable)",
                  ],
                  [
                    "annexes#other-documents",
                    "\u00a0\u00a0\u00a0d. Other documents as deemed relevant by the researcher(s)",
                  ],
                ].map(([value, label]) => (
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

            <Link href="/teacher-guide/action/full-paper/discussion-and-reflection">
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
              <p className="text-right">VII.</p>
              <p>Action Research Methods</p>
            </div>

            <div className="py-6 flex flex-col gap-6">
              <div>
                <p className="text-xl font-bold">📌 Purpose:</p>
                <p>
                  To outline the research process, including participant
                  selection, data collection methods, and how the data will be
                  analyzed.
                </p>
              </div>

              <hr className="border-t border-gray-300" />

              {/* Section A */}
              <section
                id="research-design"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔍 a. Research Design</p>
                <p className="font-bold">✅ What to Include:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    Type of research (e.g., One-Group Pretest-Posttest Design)
                  </li>
                  <li>Justification for its use</li>
                </ul>
                <p className="font-bold pt-2">🧾 Example:</p>
                <p>
                  This research used a pre-experimental design to assess the
                  effect of peer tutoring on student performance.
                </p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section B */}
              <section
                id="participants-and-data-sources"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">
                  🔍 b. Participants and/or Other Sources of Data
                </p>
                <p className="font-bold">✅ What to Include:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Who are the participants? (e.g., 25 Grade 9 students)</li>
                  <li>Why and how they were selected</li>
                  <li>
                    Other data sources (e.g., teacher journals, test results)
                  </li>
                </ul>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section C */}
              <section
                id="data-gathering-method"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔍 c. Data Gathering Method</p>
                <p className="font-bold">✅ What to Include:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Tools: pretests/posttests, surveys, reflection forms</li>
                  <li>Process: when and how data were collected</li>
                  <li>Duration of intervention</li>
                </ul>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section D */}
              <section
                id="data-analysis-plan"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔍 d. Data Analysis Plan</p>
                <p className="font-bold">✅ What to Include:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>How the data were processed:</li>
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>
                      <strong>Quantitative:</strong> mean scores, gain scores,
                      frequency counts
                    </li>
                    <li>
                      <strong>Qualitative:</strong> coding, thematic analysis
                    </li>
                  </ul>
                  <li>Software or manual method</li>
                </ul>
                <p className="font-bold pt-2">🧾 Example:</p>
                <p>
                  The researcher computed the mean gain score from pretest and
                  posttest results to determine improvement.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
