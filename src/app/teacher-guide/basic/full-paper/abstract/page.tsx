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
              <BreadcrumbPage>II. Abstract</BreadcrumbPage>
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
            <Link href="/teacher-guide/basic/full-paper/title-page">
              <Button
                variant="default"
                className="w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Previous
              </Button>
            </Link>

            <Select
              defaultValue="abstract"
              onValueChange={(value) => {
                window.location.href = `/teacher-guide/basic/full-paper/${value}`;
              }}
            >
              <SelectTrigger className=" bg-white hover:bg-black/10 transition-all duration-300 cursor-pointer shadow-xs border-black/5">
                <div className="truncate text-left w-[120px]">
                  <SelectValue placeholder="Page" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-white border-black/5 cursor-pointer">
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

            <Link href="/teacher-guide/basic/full-paper/acknowledgment">
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
              <p>Abstract</p>
            </div>

            <div className="py-6 flex flex-col gap-6">
              {/* Purpose Section */}
              <div>
                <p className="text-xl font-bold">📌 Purpose:</p>
                <p>Summarizes the entire research (150–250 words) covering:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Introduction of the topic</li>
                  <li>Research problem</li>
                  <li>Methodology</li>
                  <li>Key findings</li>
                  <li>Conclusion and recommendation</li>
                </ul>
              </div>

              <hr className="border-t border-gray-300" />

              {/* Steps Section */}
              <div>
                <p className="font-bold">🛠️ Steps:</p>
                <ol className="list-decimal list-inside ml-4 space-y-1">
                  <li className="font-bold">Start with the topic context.</li>
                  <li className="font-bold">State the research objective.</li>
                  <li>
                    <span className="font-bold">
                      Briefly describe the methodology
                    </span>{" "}
                    (research design, sample, tool).
                  </li>
                  <li className="font-bold">Summarize the results.</li>
                  <li className="font-bold">
                    End with implications or recommendations.
                  </li>
                </ol>
              </div>

              <hr className="border-t border-gray-300" />

              {/* Example Section */}
              <div>
                <p className="font-bold">📝 Example (Cavite-based):</p>
                <p>
                  This study investigated the relationship between time
                  management and academic performance among senior high school
                  students in Imus City, Cavite. A quantitative correlational
                  research design was used, and 120 students from three public
                  schools were surveyed using a validated questionnaire. The
                  data were analyzed using Pearson correlation. Results revealed
                  a significant positive relationship between effective time
                  management and academic performance. This suggests that
                  schools should integrate time management training into their
                  academic support programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
