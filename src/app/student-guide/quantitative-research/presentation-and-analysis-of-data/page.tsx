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
                VI. Chapter IV: Presentation and Analysis of Data
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
            <Link href="/student-guide/quantitative-research/research-methodology">
              <Button
                variant="default"
                className="w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Previous
              </Button>
            </Link>

            <Select
              defaultValue="presentation-and-analysis-of-data"
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

            <Link href="/student-guide/quantitative-research/summary-conclusions-recommendations">
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
              <p className="text-right">VI.</p>
              <p>Chapter IV: Presentation and Analysis of Data</p>
            </div>

            <div className="py-6 flex flex-col gap-6">
              {/* Section a - Results and Findings */}
              <section
                id="results-and-findings"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔹 a. Results and Findings</p>
                <p>
                  Present data in{" "}
                  <span className="font-bold">tables and charts</span>:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    Include{" "}
                    <span className="font-bold">
                      titles, labels, and analysis
                    </span>
                  </li>
                  <li>Interpret results briefly per table</li>
                </ul>

                <p className="pt-4">
                  In this study, the data collected from teachers were organized
                  and analyzed in various tables and charts. The following
                  sections provide a breakdown of the key findings:
                </p>
                <p className="font-bold pt-2">📝 Example:</p>

                {/* Example Table */}
                <div className="overflow-x-auto py-4">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 p-2">Theme</th>
                        <th className="border border-gray-300 p-2">
                          Frequency
                        </th>
                        <th className="border border-gray-300 p-2">
                          Percentage
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">
                          Limited Internet Infrastructure
                        </td>
                        <td className="border border-gray-300 p-2">25</td>
                        <td className="border border-gray-300 p-2">50%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">
                          Adaptive Teaching Practices
                        </td>
                        <td className="border border-gray-300 p-2">15</td>
                        <td className="border border-gray-300 p-2">30%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">
                          Lack of Institutional Support
                        </td>
                        <td className="border border-gray-300 p-2">10</td>
                        <td className="border border-gray-300 p-2">20%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="pt-4">
                  The data indicates that the most commonly reported challenge
                  among teachers was limited internet infrastructure, which was
                  mentioned by 50% of participants. Adaptive teaching practices
                  were also noted as a significant strategy, with 30% of
                  respondents highlighting this as a key approach in navigating
                  blended learning.
                </p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section b - Discussion */}
              <section
                id="discussion"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔹 b. Discussion</p>
                <p>Interpret results in detail:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Relate back to the research questions</li>
                  <li>Compare with previous studies</li>
                  <li>Explain unexpected findings</li>
                </ul>

                <p className="pt-4">
                  In this section, the results from the previous section are
                  analyzed in relation to the research questions. Key findings
                  from the data are discussed, and comparisons are made with
                  existing literature on the topic.
                </p>

                <p className="font-bold pt-2">📝 Example:</p>

                <p className="pt-2">
                  <span className="font-bold">Research Question 1:</span> What
                  are the challenges faced by teachers in implementing blended
                  learning?
                </p>
                <p>
                  The results confirm that inadequate internet infrastructure
                  remains a major challenge. Previous studies on blended
                  learning have also emphasized this issue, with several citing
                  poor internet connectivity as a barrier to effective teaching.
                  The findings from this study align with these results,
                  underlining the need for more reliable internet access in
                  rural areas.
                </p>

                <p className="pt-2">
                  <span className="font-bold">Research Question 2:</span> How do
                  teachers adapt their teaching practices to overcome these
                  challenges?
                </p>
                <p>
                  The theme of adaptive teaching practices was another
                  significant finding. While many studies highlight the
                  importance of teacher training in blended learning, this study
                  revealed that teachers, despite lacking formal training, have
                  adapted their teaching methods by incorporating offline
                  materials and pre-recorded lessons. This contrasts with
                  previous literature that often assumes teachers are unable to
                  adapt without formal training, suggesting a potential area for
                  future research.
                </p>

                <p className="pt-2">
                  <span className="font-bold">Unexpected Findings:</span> One
                  unexpected result was the significant lack of institutional
                  support. Many participants reported that while the
                  administration emphasized blended learning, there was little
                  support in terms of training or providing necessary resources.
                  This finding calls attention to the gap between policy
                  expectations and the resources provided to teachers, which has
                  not been as thoroughly explored in existing studies.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
