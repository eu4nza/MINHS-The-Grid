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
              <BreadcrumbPage>IV. Scope and Limitations</BreadcrumbPage>
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
            <Link href="/teacher-guide/basic/research-proposal/research-questions">
              <Button
                variant="default"
                className="w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Previous
              </Button>
            </Link>

            <Select
              defaultValue="scope-and-limitations"
              onValueChange={(value) => {
                window.location.href = `/teacher-guide/basic/research-proposal/${value}`;
              }}
            >
              <SelectTrigger className=" bg-white hover:bg-black/10 transition-all duration-300 cursor-pointer shadow-xs border-black/5">
                <div className="truncate text-left w-[120px]">
                  <SelectValue placeholder="Page" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-white border-black/5 cursor-pointer">
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

            <Link href="/teacher-guide/basic/research-proposal/research-methodology">
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
              <p>Scope and Limitations</p>
            </div>

            <div className="py-6 flex flex-col gap-2">
              <p className="text-xl font-bold">📌 Purpose:</p>
              <p>To clarify what the study covers—and what it does not.</p>

              <p className="font-bold">✅ Guidelines:</p>

              <p className="font-bold pt-2">Scope:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  <span className="font-bold">Population:</span> Who or what is
                  being studied?
                </li>
                <li>
                  <span className="font-bold">Location:</span> Where will the
                  study take place?
                </li>
                <li>
                  <span className="font-bold">Timeframe:</span> What period does
                  it cover?
                </li>
                <li>
                  <span className="font-bold">Variables:</span> What are the key
                  concepts being measured?
                </li>
              </ul>

              <p className="font-bold pt-2">Limitations:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  <span className="font-bold">Design constraints:</span> Is it
                  cross-sectional, not longitudinal?
                </li>
                <li>
                  <span className="font-bold">Sample size:</span> Is it small or
                  non-representative?
                </li>
                <li>
                  <span className="font-bold">Bias or access issues:</span> Any
                  restrictions in collecting data?
                </li>
              </ul>

              <p className="font-bold pt-4">🧾 Example:</p>
              <p className="ml-4">
                This study focuses on public high school teachers in Chiang Rai,
                Thailand, during the 2024 academic year. It does not cover
                private institutions or primary-level education. Limitations
                include a small sample size and potential self-reporting bias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
