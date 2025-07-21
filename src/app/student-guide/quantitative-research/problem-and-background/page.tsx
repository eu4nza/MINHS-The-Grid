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
              <BreadcrumbLink href="/student-guide/quantitative-research">
                Quantitative Research
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                III. Chapter I: The Problem and Its Background
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Title + Pagination with mobile stacking */}
        <div className="flex flex-col md:flex-row justify-between items-start xl:items-center w-full gap-y-4 xl:gap-y-0 mb-5">
          {/* Title */}
          <p className="text-2xl xl:text-6xl font-bold">
            Quantitative Research
          </p>

          <div className="flex flex-row gap-2 sm:gap-4 w-auto">
            <Link href="/student-guide/quantitative-research/acknowledgment">
              <Button
                variant="default"
                className="w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Previous
              </Button>
            </Link>

            <Select
              defaultValue="problem-and-background"
              onValueChange={(value) => {
                window.location.href = `/student-guide/quantitative-research/${value}`;
              }}
            >
              <SelectTrigger className=" bg-white hover:bg-black/10 transition-all duration-300 cursor-pointer shadow-xs border-black/5">
                <div className="truncate text-left w-[120px]">
                  <SelectValue placeholder="Page" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-white border-0 cursor-pointer">
                {[
                  ["abstract", "I. Abstract"],
                  ["acknowledgment", "II. Acknowledgment"],
                  [
                    "problem-and-background",
                    "III. Chapter I: The Problem and Its Background",
                  ],
                  [
                    "problem-and-background#introduction",
                    "\u00a0\u00a0\u00a0a. Introduction",
                  ],
                  [
                    "problem-and-background#background-of-the-study",
                    "\u00a0\u00a0\u00a0b. Background of the Study",
                  ],
                  [
                    "problem-and-background#statement-of-the-problem",
                    "\u00a0\u00a0\u00a0c. Statement of the Problem",
                  ],
                  [
                    "problem-and-background#hypothesis",
                    "\u00a0\u00a0\u00a0d. Hypothesis",
                  ],
                  [
                    "problem-and-background#scope-and-delimitation",
                    "\u00a0\u00a0\u00a0e. Scope and Delimitation",
                  ],
                  [
                    "problem-and-background#significance-of-the-study",
                    "\u00a0\u00a0\u00a0f. Significance of the Study",
                  ],
                  [
                    "problem-and-background#definition-of-terms",
                    "\u00a0\u00a0\u00a0g. Definition of Terms",
                  ],
                  [
                    "review-of-literature",
                    "IV. Chapter II: Review of Related Literature and Studies",
                  ],
                  [
                    "review-of-literature#related-literature",
                    "\u00a0\u00a0\u00a0a. Related Literature",
                  ],
                  [
                    "review-of-literature#related-studies",
                    "\u00a0\u00a0\u00a0b. Related Studies",
                  ],
                  [
                    "review-of-literature#synthesis",
                    "\u00a0\u00a0\u00a0c. Synthesis",
                  ],
                  [
                    "research-methodology",
                    "V. Chapter III: Research Methodology",
                  ],
                  [
                    "research-methodology#research-design",
                    "\u00a0\u00a0\u00a0a. Research Design",
                  ],
                  [
                    "research-methodology#research-locale",
                    "\u00a0\u00a0\u00a0b. Research Locale",
                  ],
                  [
                    "research-methodology#population-and-sample",
                    "\u00a0\u00a0\u00a0c. Population and Sample",
                  ],
                  [
                    "research-methodology#sampling-technique",
                    "\u00a0\u00a0\u00a0d. Sampling Technique",
                  ],
                  [
                    "research-methodology#research-instrument",
                    "\u00a0\u00a0\u00a0e. Research Instrument",
                  ],
                  [
                    "research-methodology#data-collection-procedure",
                    "\u00a0\u00a0\u00a0f. Data Collection Procedure",
                  ],
                  [
                    "research-methodology#analysis-of-information",
                    "\u00a0\u00a0\u00a0g. Analysis of Information",
                  ],
                  [
                    "research-methodology#ethical-considerations",
                    "\u00a0\u00a0\u00a0h. Ethical Considerations",
                  ],
                  [
                    "presentation-and-analysis-of-data",
                    "VI. Chapter IV: Presentation and Analysis of Data",
                  ],
                  [
                    "presentation-and-analysis-of-data#results-and-findings",
                    "\u00a0\u00a0\u00a0a. Results and Findings",
                  ],
                  [
                    "presentation-and-analysis-of-data#discussion",
                    "\u00a0\u00a0\u00a0b. Discussion",
                  ],
                  [
                    "summary-conclusions-recommendations",
                    "VII. Chapter V: Summary, Conclusions, and Recommendations",
                  ],
                  [
                    "summary-conclusions-recommendations#summary",
                    "\u00a0\u00a0\u00a0a. Summary",
                  ],
                  [
                    "summary-conclusions-recommendations#conclusion",
                    "\u00a0\u00a0\u00a0b. Conclusion",
                  ],
                  [
                    "summary-conclusions-recommendations#recommendations",
                    "\u00a0\u00a0\u00a0c. Recommendations",
                  ],
                  ["references", "VIII. References"],
                  ["annexes", "IX. Annexes"],
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

            <Link href="/student-guide/quantitative-research/review-of-literature">
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
              <p className="text-right">III.</p>
              <p>Chapter I: The Problem and Its Background</p>
            </div>

            <div className="py-6 flex flex-col gap-6">
              {/* Section a - Introduction */}
              <section
                id="introduction"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔹 a. Introduction</p>
                <p>
                  Give a general overview of the topic. Start broad (e.g.,
                  academic challenges in the Philippines), then narrow down to
                  Cavite and your specific variable (e.g., study habits,
                  learning modality, etc.).
                </p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section b - Background of the Study */}
              <section
                id="background-of-the-study"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">
                  🔹 b. Background of the Study
                </p>
                <p>Provide deeper context, including:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Local data (DepEd Cavite statistics)</li>
                  <li>Relevant policies (e.g., K–12, MATATAG curriculum)</li>
                  <li>Previous studies or national issues</li>
                </ul>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section c - Statement of the Problem */}
              <section
                id="statement-of-the-problem"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">
                  🔹 c. Statement of the Problem
                </p>
                <p>Clearly define what your research wants to find out.</p>
                <p>
                  <span className="font-bold">Main Problem:</span>
                  <br />
                  What is the relationship between study habits and academic
                  performance among Grade 10 students in selected Cavite public
                  high schools?
                </p>
                <p>
                  <span className="font-bold">Sub-Problems:</span>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>What is the level of study habits of the respondents?</li>
                  <li>What is their level of academic performance?</li>
                  <li>
                    Is there a significant relationship between study habits and
                    academic performance?
                  </li>
                </ul>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section d - Hypothesis */}
              <section
                id="hypothesis"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔹 d. Hypothesis</p>
                <p>
                  For quantitative studies, state the null (Ho) and alternative
                  (Ha) hypotheses.
                </p>
                <span className="font-bold">📝 Example:</span>
                <p>
                  <span className="font-bold">Ho:</span> There is no significant
                  relationship between study habits and academic performance.
                </p>
                <p>
                  <span className="font-bold">Ha:</span> There is a significant
                  relationship between study habits and academic performance.
                </p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section e - Scope and Delimitation */}
              <section
                id="scope-and-delimitation"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">
                  🔹 e. Scope and Delimitation
                </p>
                <p>Define the limits of your study:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">Scope:</span> who, where, when,
                    what
                  </li>
                  <li>
                    <span className="font-bold">Delimitation:</span> what you
                    excluded and why
                  </li>
                </ul>
                <span className="font-bold">📝 Example:</span>
                <p>
                  This study is limited to 150 Grade 10 students from two public
                  schools in Bacoor, Cavite, during SY 2024–2025. It does not
                  include other grade levels or private schools.
                </p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section f - Significance of the Study */}
              <section
                id="significance-of-the-study"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">
                  🔹 f. Significance of the Study
                </p>
                <p>Explain who benefits and how:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">Students</span> – improved
                    academic habits
                  </li>
                  <li>
                    <span className="font-bold">Teachers</span> – insights for
                    intervention
                  </li>
                  <li>
                    <span className="font-bold">DepEd</span> – data-driven
                    policy
                  </li>
                  <li>
                    <span className="font-bold">Researchers</span> – adds to
                    local literature
                  </li>
                </ul>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section g - Definition of Terms */}
              <section
                id="definition-of-terms"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔹 g. Definition of Terms</p>
                <p>Clarify how technical terms are used in your study.</p>
                <span className="font-bold">📝 Example:</span>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">Study Habits</span> – frequency
                    and manner of reviewing academic materials
                  </li>
                  <li>
                    <span className="font-bold">Academic Performance</span> –
                    General Weighted Average (GWA) from the last grading period
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
