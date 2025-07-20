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
              <BreadcrumbLink href="/teacher-guide/basic/research-proposal">
                Basic Research Proposal
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>VII. Annexes</BreadcrumbPage>
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
            <Link href="/teacher-guide/basic/research-proposal/references">
              <Button
                variant="default"
                className="w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Previous
              </Button>
            </Link>

            <Select
              defaultValue="annexes"
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

            <Button
              variant="default"
              className="opacity-50 w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-not-allowed"
            >
              Next
            </Button>
          </div>
        </div>

        {/* Main content */}
        <div className="text-base p-6 xl:text-lg xl:p-12 w-full bg-white text-black border border-black/5 shadow-2xl rounded-lg">
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-[2rem_auto] gap-x-5 text-2xl xl:text-4xl font-bold">
              <p className="text-right">VII.</p>
              <p>Annexes</p>
            </div>

            <div className="py-6 flex flex-col gap-6">
              <div>
                <p className="text-xl font-bold">📌 Purpose:</p>
                <p>
                  To provide supplementary materials that support your research
                  and facilitate its implementation.
                </p>
              </div>

              <hr className="border-t border-gray-300" />

              {/* Section A */}
              <section
                id="research-instrument"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔹 a. Research Instrument</p>
                <p className="font-bold">Include:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Full survey/questionnaire</li>
                  <li>Interview guide</li>
                  <li>Observation checklist</li>
                </ul>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section B */}
              <section
                id="consent-form"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔹 b. Sample Consent Form</p>
                <p className="font-bold">Must include:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Study title</li>
                  <li>Purpose</li>
                  <li>Voluntary participation clause</li>
                  <li>Confidentiality clause</li>
                  <li>Contact info and signature line</li>
                </ul>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section C */}
              <section
                id="other-documents"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">
                  🔹 c. Other Relevant Documents
                </p>
                <p className="font-bold">Examples:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    Approval letters (e.g., from schools, Division Office if
                    applicable)
                  </li>
                  <li>Sample schedules or timelines</li>
                  <li>Additional tables or figures relevant to your study</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
