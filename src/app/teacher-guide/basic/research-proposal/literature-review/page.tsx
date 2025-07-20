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
              <BreadcrumbLink href="/teacher-guide/basic/research-proposal">
                Basic Research Proposal
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>II. Literature Review</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Title + Pagination with mobile stacking */}
        <div className="flex flex-col md:flex-row justify-between items-start xl:items-center w-full gap-y-4 xl:gap-y-0 mb-5">
          {/* Title */}
          <p className="text-2xl xl:text-6xl font-bold">
            Basic Research Proposal
          </p>

          <div className="flex flex-row gap-2 sm:gap-4 w-auto">
            <Link href="/teacher-guide/basic/research-proposal/introduction-and-rationale">
              <Button
                variant="default"
                className="w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Previous
              </Button>
            </Link>

            <Select
              defaultValue="literature-review"
              onValueChange={(value) => {
                window.location.href = `/teacher-guide/basic/research-proposal/${value}`;
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
                    "introduction-and-rationale",
                    "I. Introduction and Rationale",
                  ],
                  ["literature-review", "II. Literature Review"],
                  ["research-questions", "III. Research Questions"],
                  ["scope-and-limitations", "IV. Scope and Limitations"],
                  ["research-methodology", "V. Research Methodology"],
                  [
                    "research-methodology#research-design",
                    "\u00a0\u00a0\u00a0a. Research Design",
                  ],
                  [
                    "research-methodology#sampling",
                    "\u00a0\u00a0\u00a0b. Sampling",
                  ],
                  [
                    "research-methodology#data-collection",
                    "\u00a0\u00a0\u00a0c. Data Collection",
                  ],
                  [
                    "research-methodology#ethical-issues",
                    "\u00a0\u00a0\u00a0d. Ethical Issues",
                  ],
                  [
                    "research-methodology#data-analysis",
                    "\u00a0\u00a0\u00a0e. Data Analysis",
                  ],
                  ["references", "VI. References"],
                  ["annexes", "VII. Annexes"],
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
                    "\u00a0\u00a0\u00a0c. Other documents as deemed relevant by the researcher(s)",
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

            <Link href="/teacher-guide/basic/research-proposal/research-questions">
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
            <div className="grid grid-cols-[1.5rem_auto] gap-x-5 text-2xl xl:text-4xl font-bold">
              <p className="text-right">II.</p>
              <p>Literature Review</p>
            </div>

            <div className="py-6 flex flex-col gap-2">
              <p>
                Reviews existing research on the topic to understand current
                knowledge, identify gaps, and contextualize the study.
              </p>
              <p className="text-xl font-bold">📌 Purpose:</p>
              <p>
                To summarize, analyze, and synthesize existing research to build
                a foundation for your study.
              </p>

              <p className="font-bold">✅ Guidelines:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li className="font-bold">
                  Organize thematically or chronologically.
                </li>
                <li>
                  <span className="font-bold">Summarize findings</span> from key
                  studies.
                </li>
                <li>
                  <span className="font-bold">Identify patterns</span>,
                  contradictions, and gaps.
                </li>
                <li>
                  <span className="font-bold">Critically evaluate</span> methods
                  or conclusions of past studies.
                </li>
                <li>
                  <span className="font-bold">End with a synthesis</span>{" "}
                  connecting the literature to your research.
                </li>
              </ul>

              <p className="font-bold pt-4">💡 Tips:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Use a minimum of 5–10 scholarly sources.</li>
                <li>Paraphrase and cite properly.</li>
                <li>Avoid simply listing studies.</li>
              </ul>

              <p className="font-bold pt-4">🧾 Example Section Structure:</p>
              <ul className="list-decimal list-inside ml-4 space-y-1">
                <li>History and Evolution of the Topic</li>
                <li>Current Trends or Findings</li>
                <li>Gaps in the Literature</li>
                <li>Relevance to Your Study</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
