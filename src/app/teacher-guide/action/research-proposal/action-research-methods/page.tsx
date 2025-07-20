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
              <BreadcrumbLink href="/teacher-guide/action/research-proposal">
                Action Research Proposal
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>IV. Action Research Methods</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Title + Pagination with mobile stacking */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center w-full gap-y-4 xl:gap-y-0 mb-5">
          {/* Title */}
          <p className="text-2xl xl:text-6xl font-bold">
            Action Research Proposal
          </p>

          <div className="flex flex-row gap-2 sm:gap-4 w-auto">
            <Link href="/teacher-guide/action/research-proposal/proposed-innovation-intervention-and-strategy">
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
                window.location.href = `/teacher-guide/action/research-proposal/${value}`;
              }}
            >
              <SelectTrigger className=" bg-white hover:bg-black/10 transition-all duration-300 cursor-pointer shadow-xs border-black/5">
                <div className="truncate text-left w-[120px]">
                  <SelectValue placeholder="Page" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-white border-black/5 cursor-pointer">
                {[
                  ["context-and-rationale", "I. Context and Rationale"],
                  [
                    "action-research-questions",
                    "II. Action Research Questions",
                  ],
                  [
                    "proposed-innovation-intervention-and-strategy",
                    "III. Proposed Innovation, Intervention, and Strategy",
                  ],
                  ["action-research-methods", "IV. Action Research Methods"],
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
                  ["references", "V. References"],
                  ["annexes", "VI. Annexes"],
                  [
                    "annexes#research-instrument",
                    "\u00a0\u00a0\u00a0a. Research Instrument",
                  ],
                  [
                    "annexes#consent-form",
                    "\u00a0\u00a0\u00a0b. Sample Consent Form",
                  ],
                  [
                    "annexes#other-documents",
                    "\u00a0\u00a0\u00a0c. Other Documents as deemed relevant by the researcher(s)",
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

            <Link href="/teacher-guide/action/research-proposal/references">
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
            <div className="grid grid-cols-[2rem_auto] gap-x-5 text-2xl xl:text-4xl font-bold">
              <p className="text-right">IV.</p>
              <p>Action Research Methods</p>
            </div>

            <div className="py-6 flex flex-col gap-6">
              <div>
                <p className="text-xl font-bold">📌 Purpose:</p>
                <p>
                  To outline the research process, how participants are chosen,
                  how data will be gathered, and how it will be analyzed.
                </p>
              </div>

              <hr className="border-t border-gray-300" />

              {/* Section A */}
              <section
                id="research-design"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔹 a. Research Design</p>
                <p className="font-bold">✅ What to Include:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    Type of action research: Descriptive, Pre-experimental
                    (One-Group Pretest-Posttest), Qualitative
                  </li>
                  <li>Rationale for selecting the design</li>
                </ul>
                <p className="font-bold pt-2">🧾 Example:</p>
                <p>
                  This study will use a pre-experimental One-Group
                  Pretest-Posttest Design to measure the effect of gamified math
                  instruction on student performance.
                </p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section B */}
              <section
                id="participants-and-data-sources"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">
                  🔹 b. Participants and/or Other Sources of Data and
                  Information
                </p>
                <p className="font-bold">✅ What to Include:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Number of participants (e.g., 30 Grade 8 learners)</li>
                  <li>How and why they were chosen</li>
                  <li>
                    Relevant demographic details (gender, grade level, etc.)
                  </li>
                </ul>
                <p className="font-bold pt-2">🧾 Example:</p>
                <p>
                  The participants will be 32 Grade 7 students from Section B of
                  MINHS. They were chosen based on their below-average
                  performance in recent assessments on number operations.
                </p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section C */}
              <section
                id="data-gathering-method"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔹 c. Data Gathering Method</p>
                <p className="font-bold">✅ What to Include:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    Instruments/tools used (tests, surveys, checklists,
                    journals, interviews)
                  </li>
                  <li>Pretest and posttest structure</li>
                  <li>
                    Schedule and mode of collection (e.g., weekly, online or
                    printed)
                  </li>
                </ul>
                <p className="font-bold pt-2">🧾 Example:</p>
                <p>
                  A teacher-made 20-item test will be administered before and
                  after the intervention. Additionally, student reflections will
                  be collected weekly using Google Forms.
                </p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section D */}
              <section
                id="data-analysis-plan"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔹 d. Data Analysis Plan</p>
                <p className="font-bold">✅ What to Include:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Techniques to process the data:</li>
                  <ul className="list-disc list-inside ml-6">
                    <li>
                      <strong>Quantitative:</strong> Mean, gain scores,
                      frequency, t-test (optional)
                    </li>
                    <li>
                      <strong>Qualitative:</strong> Coding and thematic analysis
                    </li>
                  </ul>
                </ul>
                <p className="font-bold pt-2">🧾 Example:</p>
                <p>
                  Pretest and posttest results will be analyzed using mean gain
                  scores. Student reflections will undergo thematic analysis to
                  identify common experiences and feedback.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
