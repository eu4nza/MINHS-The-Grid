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
                V. Chapter III: Research Methodology
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
            <Link href="/student-guide/quantitative-research/review-of-literature">
              <Button
                variant="default"
                className="w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Previous
              </Button>
            </Link>

            <Select
              defaultValue="research-methodology"
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

            <Link href="/student-guide/quantitative-research/presentation-and-analysis-of-data">
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
              <p className="text-right">V.</p>
              <p>Chapter III: Research Methodology</p>
            </div>

            <div className="py-6 flex flex-col gap-6">
              {/* Section a - Research Design */}
              <section
                id="research-design"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔹 a. Research Design</p>
                <p>
                  Describe the approach (e.g., descriptive, correlational,
                  experimental).
                </p>
                <p className="font-bold pt-2">📝 Example:</p>
                <p>
                  This study used a{" "}
                  <span className="font-bold">
                    descriptive-correlational design
                  </span>{" "}
                  to determine the relationship between study habits and
                  academic performance.
                </p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section b - Research Locale */}
              <section
                id="research-locale"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔹 b. Research Locale</p>
                <p>
                  Describe where the study was conducted, including background
                  on the schools.
                </p>
                <p className="font-bold pt-2">📝 Example:</p>
                <p>
                  Two public secondary schools in Bacoor, Cavite were selected
                  due to their large student population and accessibility.
                </p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section c - Population and Sample */}
              <section
                id="population-and-sample"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔹 c. Population and Sample</p>
                <p>
                  Define the total population and how many will participate.
                </p>
                <p className="font-bold pt-2">📝 Example:</p>
                <p>
                  The population consisted of 300 Grade 10 students. A sample of
                  150 was selected based on Slovin’s formula with a 5% margin of
                  error.
                </p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section d - Sampling Technique */}
              <section
                id="sampling-technique"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔹 d. Sampling Technique</p>
                <p>Specify method: simple random, stratified, cluster, etc.</p>
                <p className="font-bold pt-2">📝 Example:</p>
                <p>
                  Stratified random sampling was used to ensure equal
                  representation of male and female students from each class
                  section.
                </p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section e - Research Instrument */}
              <section
                id="research-instrument"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔹 e. Research Instrument</p>
                <p>Describe the questionnaire or test used. Include:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Number of items</li>
                  <li>Scales (e.g., Likert)</li>
                  <li>Validation (by experts)</li>
                  <li>Reliability test (e.g., Cronbach's alpha)</li>
                </ul>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section f - Data Collection Procedure */}
              <section
                id="data-collection-procedure"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">
                  🔹 f. Data Collection Procedure
                </p>
                <p>Explain the steps:</p>
                <ol className="list-decimal list-inside space-y-1 ml-4">
                  <li>Seek approval from school authorities</li>
                  <li>Distribute consent forms</li>
                  <li>Administer the instrument</li>
                  <li>Retrieve and encode data</li>
                </ol>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section g - Data Analysis Procedure */}
              <section
                id="data-analysis-procedure"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">
                  🔹 g. Data Analysis Procedure
                </p>
                <p>
                  List and explain{" "}
                  <span className="font-bold">statistical tools</span> used:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">Descriptive stats</span>: mean,
                    frequency, percentage
                  </li>
                  <li>
                    <span className="font-bold">Inferential stats</span>:
                    Pearson r, chi-square, t-test, ANOVA
                  </li>
                </ul>
                <p className="pt-2">
                  Mention software used (e.g., SPSS, Excel).
                </p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section h - Ethical Considerations */}
              <section
                id="ethical-considerations"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">
                  🔹 h. Ethical Considerations
                </p>
                <p>Ensure the following:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">Voluntary participation:</span>{" "}
                    Participation was voluntary, with the option to withdraw at
                    any time without penalty.
                  </li>
                  <li>
                    <span className="font-bold">Informed consent:</span>{" "}
                    Participants were fully informed about the purpose, process,
                    and potential risks of the study.
                  </li>
                  <li>
                    <span className="font-bold">Anonymity:</span> All
                    participants’ identities were kept confidential.
                  </li>
                  <li>
                    <span className="font-bold">Data protection:</span> Data was
                    securely stored, and access was limited to authorized
                    personnel only.
                  </li>
                </ul>
                <p className="pt-2">
                  Include proof like signed consent forms and letters from
                  school principals.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
