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
              <BreadcrumbPage>I. Title Page</BreadcrumbPage>
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
            <Button
              variant="default"
              className="opacity-50 w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-not-allowed"
            >
              Previous
            </Button>

            <Select
              defaultValue="title-page"
              onValueChange={(value) => {
                window.location.href = `/teacher-guide/basic/full-paper/${value}`;
              }}
            >
              <SelectTrigger className=" bg-white hover:bg-black/10 transition-all duration-300 cursor-pointer shadow-xs border-black/5">
                <div className="truncate text-left w-[120px]">
                  <SelectValue placeholder="Page" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-white border-0 cursor-pointer">
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

            <Link href="/teacher-guide/basic/full-paper/abstract">
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
            <div className="grid grid-cols-[1rem_auto] gap-x-5 text-2xl xl:text-4xl font-bold">
              <p className="text-right">I.</p>
              <p>Title Page</p>
            </div>

            <div className="py-6 flex flex-col gap-6">
              <div>
                <p className="text-xl font-bold">
                  📌 Purpose of the Title Page:
                </p>
                <p>
                  To provide essential details about the research in a clean,
                  formal presentation.
                </p>
              </div>

              <hr className="border-t border-gray-300" />

              <div>
                <p className="font-bold">
                  🛠️ Steps to Create a Proper Title Page
                </p>
                <p className="text-sm">
                  <span className="font-bold">Note:</span> Always check your
                  institution’s or competition’s official template (like the 8th
                  CC Research template) before finalizing.
                </p>
              </div>

              <hr className="border-t border-gray-300" />

              {/* Section 1 */}
              <section
                id="title-of-study"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">1. Title of the Study</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    Must be <span className="font-bold">clear</span>,{" "}
                    <span className="font-bold">concise</span>, and{" "}
                    <span className="font-bold">specific</span>.
                  </li>
                  <li>
                    Should reflect the{" "}
                    <span className="font-bold">variables</span>,{" "}
                    <span className="font-bold">location</span>, and{" "}
                    <span className="font-bold">population</span>.
                  </li>
                  <li>Avoid vague or overly broad titles.</li>
                </ul>
                <p className="font-bold pt-2">🧾 Example (Cavite-based):</p>
                <p className="italic">
                  "A Quantitative Study on the Relationship Between Digital
                  Device Use and Academic Performance Among Senior High School
                  Students in Bacoor, Cavite"
                </p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section 2 */}
              <section
                id="name-of-researcher"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">
                  2. Name of the Researcher(s)
                </p>
                <p className="font-bold">
                  • Write the <span className="font-bold">complete name</span>{" "}
                  of the student researcher(s).
                </p>
                <p>
                  • If group work, list all members alphabetically or by
                  contribution order.
                </p>
                <p className="font-bold pt-2">🧾 Example:</p>
                <p>Juan Dela Cruz</p>
                <p>Maria Santos</p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section 3 */}
              <section
                id="grade-level-section"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">3. Grade Level and Section</p>
                <p>Example: Grade 12 – STEM A</p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section 4 */}
              <section
                id="school-name"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">4. School Name</p>
                <p>
                  • Include the <span className="font-bold">complete name</span>{" "}
                  of the school, including location if necessary.
                </p>
                <p className="font-bold pt-2">🧾 Example:</p>
                <p>Imus National High School</p>
                <p>Imus, Cavite</p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section 5 */}
              <section
                id="research-teacher-adviser"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">
                  5. Research Teacher / Adviser
                </p>
                <p>
                  • Include full name and academic designation (if applicable).
                </p>
                <p className="font-bold pt-2">🧾 Example:</p>
                <p>Mr. Jose R. Reyes, MAEd</p>
                <p>Research Adviser</p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section 6 */}
              <section
                id="date-submission"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">6. Date of Submission</p>
                <p>• Write the full date (e.g., July 2025 or July 19, 2025).</p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Section 7 */}
              <section
                id="institutional-logo"
                className="transition-colors duration-500 py-5 px-5"
              >
                <p className="text-xl font-bold">
                  7. Institutional Logo (if required)
                </p>
                <p>
                  • Place at the center top or upper-left/right corner,
                  depending on the template.
                </p>
              </section>

              <hr className="border-t border-gray-300" />

              {/* Additional Notes */}
              <div>
                <p className="text-xl font-bold">📌 Additional Notes:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    Use <span className="font-bold">Times New Roman</span> or{" "}
                    <span className="font-bold">Arial</span>, size{" "}
                    <span className="font-bold">12 or 14</span>.
                  </li>
                  <li>
                    Text should be{" "}
                    <span className="font-bold">
                      centered and single-spaced
                    </span>
                    .
                  </li>
                  <li>
                    Maintain <span className="font-bold">formal tone</span> and
                    consistency in formatting.
                  </li>
                  <li>
                    Follow the downloadable template from DepEd or your division
                    office when available.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
