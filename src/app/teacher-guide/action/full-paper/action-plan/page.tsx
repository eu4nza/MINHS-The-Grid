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
              <BreadcrumbPage>IX. Action Plan</BreadcrumbPage>
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
            <Link href="/teacher-guide/action/full-paper/discussion-and-reflection">
              <Button
                variant="default"
                className="w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Previous
              </Button>
            </Link>

            <Select
              defaultValue="action-plan"
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

            <Link href="/teacher-guide/action/full-paper/references">
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
              <p className="text-right">IX.</p>
              <p>Action Plan</p>
            </div>

            <div className="py-6 flex flex-col gap-2">
              <p className="text-xl font-bold">📌 Purpose:</p>
              <p>Describes next steps based on findings.</p>

              <p className="font-bold">✅ What to Include:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Plans for sustaining or scaling the intervention</li>
                <li>Training or materials needed</li>
                <li>Timetable for next steps</li>
                <li>Persons-in-charge</li>
              </ul>

              <p className="pt-4 font-bold">Optional Table Format:</p>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-black/10 text-left text-sm xl:text-base">
                  <thead className="bg-gray-100 font-bold">
                    <tr>
                      <th className="border border-black/10 px-4 py-2">
                        Activity
                      </th>
                      <th className="border border-black/10 px-4 py-2">
                        Timeline
                      </th>
                      <th className="border border-black/10 px-4 py-2">
                        Responsible Person
                      </th>
                      <th className="border border-black/10 px-4 py-2">
                        Resources Needed
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-black/10 px-4 py-2">
                        Conduct peer tutoring training
                      </td>
                      <td className="border border-black/10 px-4 py-2">
                        Aug 2025
                      </td>
                      <td className="border border-black/10 px-4 py-2">
                        Teacher Researcher
                      </td>
                      <td className="border border-black/10 px-4 py-2">
                        Modules, schedule
                      </td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
