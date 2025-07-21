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
              <BreadcrumbLink href="/student-guide/qualitative-research">
                Qualitative Research
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                VII. Chapter V: Summary, Conclusions, and Recommendations
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Title + Pagination with mobile stacking */}
        <div className="flex flex-col md:flex-row justify-between items-start xl:items-center w-full gap-y-4 xl:gap-y-0 mb-5">
          {/* Title */}
          <p className="text-2xl xl:text-6xl font-bold">Qualitative Research</p>

          <div className="flex flex-row gap-2 sm:gap-4 w-auto">
            <Link href="/student-guide/qualitative-research/presentation-and-analysis-of-data">
              <Button
                variant="default"
                className="w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Previous
              </Button>
            </Link>

            <Select
              defaultValue="summary-conclusions-recommendations"
              onValueChange={(value) => {
                window.location.href = `/student-guide/qualitative-research/${value}`;
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
                    "problem-and-background#scope-and-delimitation",
                    "\u00a0\u00a0\u00a0d. Scope and Delimitation",
                  ],
                  [
                    "problem-and-background#significance-of-the-study",
                    "\u00a0\u00a0\u00a0e. Significance of the Study",
                  ],
                  [
                    "problem-and-background#definition-of-terms",
                    "\u00a0\u00a0\u00a0f. Definition of Terms",
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
                    "research-methodology#data-construction-procedure",
                    "\u00a0\u00a0\u00a0f. Data Construction Procedure",
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

            <Link href="/student-guide/qualitative-research/references">
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
            <div className="grid grid-cols-[3rem_auto] gap-x-5 text-2xl xl:text-4xl font-bold">
              <p className="text-right">VII.</p>
              <p>Chapter V: Summary, Conclusions, and Recommendations</p>
            </div>

            <div className="py-6 flex flex-col gap-6">
              {/* Section A - Summary */}
              <section
                id="summary"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔹 a. Summary</p>
                <p>Re-state the purpose, method, and key findings.</p>
                <p className="font-bold pt-2">📝 Example:</p>
                <p>
                  This study aimed to explore the lived experiences of Cavite
                  public high school teachers during the transition to blended
                  learning. The research employed a qualitative phenomenological
                  approach to gain insights into the challenges and coping
                  strategies these teachers employed. Key findings revealed that
                  teachers faced significant barriers related to internet
                  infrastructure, training gaps, and institutional support.
                  However, they adapted by employing innovative teaching
                  strategies, including peer mentoring and online resource
                  sharing.
                </p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section B - Conclusion */}
              <section
                id="conclusion"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔹 b. Conclusion</p>
                <p>
                  Answer your research questions and reflect on the study’s
                  insights.
                </p>
                <p className="font-bold pt-2">📝 Example:</p>
                <p>This study addressed the following research questions:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    What are the challenges faced by teachers during the
                    transition to blended learning in Cavite?
                  </li>
                  <li>
                    What strategies have teachers adopted to cope with these
                    challenges?
                  </li>
                </ul>
                <p>
                  The findings revealed that limited internet access and
                  inadequate training were the most significant challenges.
                  However, teachers exhibited resilience by adapting their
                  teaching methods and seeking peer support. These insights
                  suggest that while blended learning presents hurdles,
                  teachers' resourcefulness and the importance of institutional
                  support play a crucial role in overcoming these barriers.
                </p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section C - Recommendations */}
              <section
                id="recommendations"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔹 c. Recommendations</p>
                <p>
                  Based on the findings, the following recommendations are
                  proposed:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">For Teachers:</span> Peer
                    mentoring programs should be developed to allow experienced
                    teachers to support those facing challenges in implementing
                    blended learning.
                  </li>
                  <li>
                    <span className="font-bold">For Schools:</span> Schools
                    should provide adequate infrastructure support, particularly
                    improving internet access and providing necessary hardware
                    to ensure effective blended learning.
                  </li>
                  <li>
                    <span className="font-bold">For DepEd:</span> Policies aimed
                    at improving teacher training for blended learning should be
                    introduced, including regular workshops, digital literacy
                    programs, and technical support to ensure teachers can
                    effectively use online tools in their classrooms.
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
