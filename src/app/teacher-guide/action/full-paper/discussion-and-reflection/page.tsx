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
              <BreadcrumbLink href="/teacher-guide/action/full-paper">
                Completed Action Research Paper
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                VIII. Discussion of Results and Reflection
              </BreadcrumbPage>
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
            <Link href="/teacher-guide/action/full-paper/action-research-methods">
              <Button
                variant="default"
                className="w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Previous
              </Button>
            </Link>

            <Select
              defaultValue="discussion-and-reflection"
              onValueChange={(value) => {
                window.location.href = `/teacher-guide/action/full-paper/${value}`;
              }}
            >
              <SelectTrigger className=" bg-white hover:bg-black/10 transition-all duration-300 cursor-pointer shadow-xs border-black/5">
                <div className="truncate text-left w-[120px]">
                  <SelectValue placeholder="Page" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-white border-black/5 cursor-pointer">
                {[
                  ["title-page", "I. Title Page"],
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

            <Link href="/teacher-guide/action/full-paper/action-plan">
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
            <div className="grid grid-cols-[3.5rem_auto] gap-x-5 text-2xl xl:text-4xl font-bold">
              <p className="text-right">VIII.</p>
              <p>Discussion of Results and Reflection</p>
            </div>

            <div className="py-6 flex flex-col gap-2">
              <p className="text-xl font-bold">📌 Purpose:</p>
              <p>Presents findings and reflects on their meaning.</p>

              <p className="font-bold">✅ What to Include:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Pretest vs. posttest results (with tables if needed)</li>
                <li>Student/teacher feedback (summarized)</li>
                <li>Patterns or themes (if qualitative)</li>
                <li>
                  <span className="font-bold">Reflection:</span>
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>Was the intervention effective?</li>
                    <li>What worked well?</li>
                    <li>What didn’t?</li>
                    <li>What would you do differently?</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
