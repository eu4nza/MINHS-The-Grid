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
                VI. Chapter IV: Presentation and Analysis of Data
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Title + Pagination with mobile stacking */}
        <div className="flex flex-col md:flex-row justify-between items-start xl:items-center w-full gap-y-4 xl:gap-y-0 mb-5">
          {/* Title */}
          <p className="text-2xl xl:text-6xl font-bold">Qualitative Research</p>

          <div className="flex flex-row gap-2 sm:gap-4 w-auto">
            <Link href="/student-guide/qualitative-research/research-methodology">
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

            <Link href="/student-guide/qualitative-research/summary-conclusions-recommendations">
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
              {/* Section A - Results and Findings */}
              <section
                id="results-findings"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔹 a. Results and Findings</p>
                <p>
                  Present your findings by theme. Use narrative style with
                  direct quotes from participants to illustrate the themes.
                </p>
                <p>
                  <span className="font-bold">Example Themes:</span>
                </p>

                <ol className="list-decimal list-inside space-y-1 ml-4">
                  <li>
                    <span className="font-bold">
                      Limited Internet Infrastructure
                    </span>
                    <p>
                      Many participants cited poor internet connectivity as a
                      major challenge in implementing blended learning
                      effectively. As one teacher mentioned:
                    </p>
                    <blockquote className="italic px-5 py-2 border-l-4 border-gray-600 pt-2">
                      "We often face slow internet, which makes it difficult for
                      students to access online resources and participate in
                      live sessions."
                    </blockquote>
                    <p className="pt-2">
                      This lack of infrastructure was particularly evident in
                      rural areas, where internet providers struggle to deliver
                      stable and fast services.
                    </p>
                  </li>

                  <li className="pt-2">
                    <span className="font-bold">
                      Adaptive Teaching Practices
                    </span>
                    <p>
                      Teachers demonstrated flexibility in adapting to blended
                      learning models. Some mentioned how they modified their
                      teaching styles:
                    </p>
                    <blockquote className="italic px-5 py-2 border-l-4 border-gray-600 pt-2">
                      "I had to switch to using more offline materials and
                      pre-recorded lessons to cater to students without internet
                      access."
                    </blockquote>
                    <p className="pt-2">
                      This approach highlights the creativity and adaptability
                      of teachers in navigating the blended learning
                      environment.
                    </p>
                  </li>

                  <li className="pt-2">
                    <span className="font-bold">
                      Lack of Institutional Support
                    </span>
                    <p>
                      Another prominent theme was the lack of institutional
                      support. Teachers expressed that although they were
                      expected to implement blended learning, they lacked proper
                      training and resources:
                    </p>
                    <blockquote className="italic px-5 py-2 border-l-4 border-gray-600 pt-2">
                      "While the school administration emphasizes online
                      learning, there is little support in terms of training or
                      access to digital tools."
                    </blockquote>
                    <p className="pt-2">
                      This issue was mentioned by several participants,
                      underlining the gap between policy expectations and
                      practical support at the institutional level.
                    </p>
                  </li>
                </ol>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section B - Discussion */}
              <section
                id="discussion"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔹 b. Discussion</p>
                <p>
                  In this section, we connect the study's findings to existing
                  literature and highlight key insights.
                </p>
                <p>
                  <span className="font-bold">Key Points:</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    <span className="font-bold">Confirmations:</span> Several
                    findings confirm existing literature on the challenges of
                    blended learning in public schools. For instance, studies
                    have highlighted the critical role of internet
                    infrastructure in the successful implementation of blended
                    learning. Our findings align with these, confirming that
                    unreliable internet is a significant barrier.
                  </li>
                  <li>
                    <span className="font-bold">
                      Contradictions or New Insights:
                    </span>{" "}
                    While much of the literature emphasizes training deficits,
                    our study found that teachers, despite lacking formal
                    training, have become quite resourceful and innovative in
                    adapting their teaching methods. This contradicts the
                    general narrative that teachers are unable to effectively
                    implement blended learning without proper training.
                  </li>
                  <li>
                    <span className="font-bold">
                      Implications for Education in Cavite:
                    </span>{" "}
                    The study reveals significant gaps in institutional support,
                    particularly in rural areas. This highlights the need for
                    policy makers in Cavite to prioritize investments in
                    internet infrastructure and teacher training programs.
                    Addressing these issues could lead to more equitable and
                    effective blended learning outcomes across the region.
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
