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
              <BreadcrumbLink href="/teacher-guide/action/research-proposal">
                Action Research Proposal
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>II. Action Research Questions</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Title + Pagination with mobile stacking */}
        <div className="flex flex-col md:flex-row justify-between items-start xl:items-center w-full gap-y-4 xl:gap-y-0 mb-5">
          {/* Title */}
          <p className="text-2xl xl:text-6xl font-bold">
            Action Research Proposal
          </p>

          <div className="flex flex-row gap-2 sm:gap-4 w-auto">
            <Link href="/teacher-guide/action/research-proposal/context-and-rationale">
              <Button
                variant="default"
                className="w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Previous
              </Button>
            </Link>

            <Select
              defaultValue="action-research-questions"
              onValueChange={(value) => {
                window.location.href = `/teacher-guide/action/research-proposal/${value}`;
              }}
            >
              <SelectTrigger className=" bg-white hover:bg-black/10 transition-all duration-300 cursor-pointer shadow-xs border-black/5">
                <div className="truncate text-left w-[120px]">
                  <SelectValue placeholder="Page" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-white border-0 cursor-pointer">
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

            <Link href="/teacher-guide/action/research-proposal/proposed-innovation-intervention-and-strategy">
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
              <p className="text-right">II.</p>
              <p>Action Research Questions</p>
            </div>

            <div className="py-6 flex flex-col gap-2">
              <p className="text-xl font-bold">📌 Purpose:</p>
              <p>
                To guide your investigation by stating the questions your
                research will answer.
              </p>

              <p className="font-bold">✅ What to Include:</p>

              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>2 to 3 clear, measurable, and researchable questions</li>
                <li>
                  Use WH-questions like <em>What</em>, <em>How</em>,{" "}
                  <em>To what extent</em>
                </li>
              </ul>

              <p className="text-xl font-bold pt-6">🛠️ Steps:</p>

              <div className="grid grid-cols-[1.5rem_auto] gap-y-2">
                <p className="ml-2">1.</p>
                <p>Refer to your problem.</p>

                <p className="ml-2">2.</p>
                <div>
                  <p>Formulate questions about:</p>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>The current situation (diagnostic)</li>
                    <li>The effectiveness of your intervention</li>
                    <li>The perceptions of stakeholders</li>
                  </ul>
                </div>
              </div>

              <p className="text-xl font-bold pt-6">🧾 Example:</p>

              <ul className="list-decimal list-inside ml-4 space-y-1">
                <li>
                  What are the common difficulties faced by Grade 8 students in
                  understanding fractions?
                </li>
                <li>
                  How effective is the use of math games in improving mastery of
                  fractions?
                </li>
                <li>
                  What are the students' perceptions of using math games in
                  class?
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
