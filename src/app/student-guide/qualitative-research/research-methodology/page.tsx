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
                V. Chapter III: Research Methodology
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Title + Pagination with mobile stacking */}
        <div className="flex flex-col md:flex-row justify-between items-start xl:items-center w-full gap-y-4 xl:gap-y-0 mb-5">
          {/* Title */}
          <p className="text-2xl xl:text-6xl font-bold">Qualitative Research</p>

          <div className="flex flex-row gap-2 sm:gap-4 w-auto">
            <Link href="/student-guide/qualitative-research/review-of-literature">
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

            <Link href="/student-guide/qualitative-research/presentation-and-analysis-of-data">
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
              <p>Research Methods</p>
            </div>

            <div className="py-6 flex flex-col gap-6">
              {/* Section A - Research Design */}
              <section
                id="research-design"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔹 a. Research Design</p>
                <p>
                  Use a qualitative phenomenological or case study design.
                  Explain why.
                </p>
                <p className="font-bold pt-2">📝 Example:</p>
                <p>
                  This study used a phenomenological approach to understand the
                  lived experiences of Cavite public high school teachers. A
                  phenomenological design was chosen because it allows the
                  researcher to explore and describe the essence of experiences
                  from the perspective of those who have lived them.
                </p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section B - Research Locale */}
              <section
                id="research-locale"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔹 b. Research Locale</p>
                <p>Describe where the study takes place.</p>{" "}
                <p className="font-bold pt-2">📝 Example:</p>
                <p>
                  The study was conducted in three public high schools across
                  Imus, Tanza, and General Trias, Cavite. These locations were
                  selected due to their geographic diversity and varying levels
                  of access to resources and technology.
                </p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section C - Population and Sample */}
              <section
                id="population-and-sample"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔹 c. Population and Sample</p>
                <p>
                  Define your target group and how many participants were
                  included.
                </p>
                <p className="font-bold pt-2">📝 Example:</p>
                <p>
                  The study focused on{" "}
                  <span className="font-bold">
                    15 public high school teachers
                  </span>{" "}
                  from the three selected schools in Cavite. These teachers were
                  selected for their experience in implementing blended learning
                  in their classrooms.
                </p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section D - Sampling Technique */}
              <section
                id="sampling-technique"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔹 d. Sampling Technique</p>
                <p>
                  For qualitative studies, use purposive or snowball sampling.
                  Justify why: You need teachers with experience in blended
                  learning.
                </p>
                <p>
                  Purposive sampling was used in this study, as it allows the
                  selection of participants who have direct experience with the
                  topic of interest—in this case, teachers with experience in
                  blended learning. This technique ensured that the participants
                  could provide the detailed and relevant insights needed for
                  the study.
                </p>
                <p className="pt-2">
                  <span className="font-bold">Justification:</span> Teachers who
                  have actively engaged in blended learning were deliberately
                  chosen because their perspectives would offer the most useful
                  data for understanding the challenges and successes of blended
                  learning strategies.
                </p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section E - Research Instrument */}
              <section
                id="research-instrument"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">🔹 e. Research Instrument</p>
                <p>
                  Describe your tool—usually an{" "}
                  <span className="font-bold">interview guide</span>.
                </p>
                <p className="font-bold pt-2">📝 Example:</p>
                <p>
                  Semi-structured interviews with open-ended questions focusing
                  on the teachers' experiences, challenges, and strategies in
                  implementing blended learning. This instrument allows the
                  researcher to explore themes in depth while also providing
                  flexibility to probe further into specific areas of interest.
                </p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section F - Data Construction Procedure */}
              <section
                id="data-construction-procedure"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">
                  🔹 f. Data Construction Procedure
                </p>
                <p>Explain how you collected your data.</p>
                <ol className="list-decimal list-inside space-y-1 ml-4">
                  <li>
                    Secure permission from the Department of Education (DepEd)
                    and the participating schools.
                  </li>
                  <li>
                    Conduct interviews (either face-to-face or online, depending
                    on participant availability).
                  </li>
                  <li>
                    Record the interviews with the consent of the participants.
                  </li>
                  <li>Transcribe the recorded interviews for analysis.</li>
                </ol>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section G - Analysis of Information */}
              <section
                id="analysis-of-information"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">
                  🔹 g. Analysis of Information
                </p>
                <p>Explain how you analyzed the data.</p>
                <p className="pt-2">
                  The data was analyzed using{" "}
                  <span className="font-bold">thematic analysis</span>. The
                  steps in thematic analysis include:
                </p>
                <ol className="list-decimal list-inside space-y-1 ml-4">
                  <li>
                    Familiarization with the data (reading through the
                    transcripts).
                  </li>
                  <li>
                    Coding (identifying significant patterns and features in the
                    data).
                  </li>
                  <li>
                    Identifying themes (grouping related codes to form broader
                    categories).
                  </li>
                  <li>
                    Interpreting themes (drawing conclusions about the overall
                    meaning of the data).
                  </li>
                </ol>
                <p className="pt-2">
                  <span className="font-bold">Tools:</span> Data was analyzed
                  manually, though software tools like NVivo could be used for
                  more complex analyses.
                </p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section H - Ethical Considerations */}
              <section
                id="ethical-considerations"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">
                  🔹 h. Ethical Considerations
                </p>
                <p>
                  Ethical considerations are a key component of any research
                  study. For this study, the following ethical principles were
                  ensured:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">Informed consent:</span>{" "}
                    Participants were fully informed about the purpose, process,
                    and potential risks of the study.
                  </li>
                  <li>
                    <span className="font-bold">Voluntary participation:</span>{" "}
                    Participation was completely voluntary, with the option to
                    withdraw at any time without penalty.
                  </li>
                  <li>
                    <span className="font-bold">Confidentiality:</span> All
                    participants' identities and data were kept confidential and
                    anonymized in the study.
                  </li>
                  <li>
                    <span className="font-bold">Data protection:</span> Data was
                    securely stored, and access was limited to authorized
                    personnel only.
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
