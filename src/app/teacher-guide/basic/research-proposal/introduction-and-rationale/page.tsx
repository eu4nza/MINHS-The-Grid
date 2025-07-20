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
              <BreadcrumbPage>I. Action and Rationale</BreadcrumbPage>
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
            <Button
              variant="default"
              className="opacity-50 w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-not-allowed"
            >
              Previous
            </Button>

            <Select
              defaultValue="introduction-and-rationale"
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

            <Link href="/teacher-guide/basic/research-proposal/literature-review">
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
              <p className="text-right">I.</p>
              <p>Introduction and Rationale</p>
            </div>

            <div className="py-6 flex flex-col gap-2">
              <p>
                Introduces the research topic, provides context, and states the
                purpose of the study.
              </p>
              <p className="text-xl font-bold">📌 Purpose:</p>
              <p>
                To set the stage for your study and justify why it is worth
                doing.
              </p>

              <p className="font-bold">✅ Guidelines:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  <span className="font-bold">
                    Introduce the general topic:
                  </span>{" "}
                  Begin with a broad statement about the area of study.
                </li>
                <li>
                  <span className="font-bold">Contextualize the problem:</span>{" "}
                  Provide facts, statistics, or a brief history to support
                  relevance.
                </li>
                <li>
                  <span className="font-bold">State the research gap:</span>{" "}
                  Show what has not been done or what remains unclear in
                  existing research.
                </li>
                <li>
                  <span className="font-bold">
                    Present your study’s purpose:
                  </span>{" "}
                  Clarify what the study will investigate.
                </li>
                <li>
                  <span className="font-bold">
                    End with objectives or a thesis:
                  </span>{" "}
                  Clearly state what your research intends to achieve.
                </li>
              </ul>

              <p className="font-bold  pt-6">🧾 Example:</p>
              <p className="ml-4">
                Despite the growing use of digital learning tools, many rural
                schools in Southeast Asia struggle to integrate technology
                effectively into teaching. Existing literature focuses mostly on
                urban areas, leaving a gap in understanding of rural education
                contexts. This study aims to investigate the barriers and
                opportunities in implementing e-learning in rural schools of
                Northern Thailand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
