import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Quantitative Research",
};

export default function Page() {
  const sections = [
    {
      number: "I.",
      label: "Abstract",
      href: "/student-guide/quantitative-research/abstract",
    },
    {
      number: "II.",
      label: "Acknowledgement",
      href: "/student-guide/quantitative-research/acknowledgment",
    },
    {
      number: "III.",
      label: "Chapter I: The Problem and Its Background",
      href: "/student-guide/quantitative-research/problem-and-background",
      subsections: [
        {
          key: "a",
          label: "Introduction",
          href: "/student-guide/quantitative-research/problem-and-background#introduction",
        },
        {
          key: "b",
          label: "Background of the Study",
          href: "/student-guide/quantitative-research/problem-and-background#background-of-the-study",
        },
        {
          key: "c",
          label: "Statement of the Problem",
          href: "/student-guide/quantitative-research/problem-and-background#statement-of-the-problem",
        },
        {
          key: "d",
          label: "Hypothesis",
          href: "/student-guide/quantitative-research/problem-and-background#hypothesis",
        },
        {
          key: "e",
          label: "Scope and Delimitation",
          href: "/student-guide/quantitative-research/problem-and-background#scope-and-delimitation",
        },
        {
          key: "f",
          label: "Significance of the Study",
          href: "/student-guide/quantitative-research/problem-and-background#significance-of-the-study",
        },
        {
          key: "g",
          label: "Definition of Terms",
          href: "/student-guide/quantitative-research/problem-and-background#definition-of-terms",
        },
      ],
    },
    {
      number: "IV.",
      label: "Chapter II: Review of Related Literature and Studies",
      href: "/student-guide/quantitative-research/review-of-literature",
      subsections: [
        {
          key: "a",
          label: "Related Literature",
          href: "/student-guide/quantitative-research/review-of-literature#related-literature",
        },
        {
          key: "b",
          label: "Related Studies",
          href: "/student-guide/quantitative-research/review-of-literature#related-studies",
        },
        {
          key: "c",
          label: "Synthesis",
          href: "/student-guide/quantitative-research/review-of-literature#synthesis",
        },
      ],
    },
    {
      number: "V.",
      label: "Chapter III: Research Methodology",
      href: "/student-guide/quantitative-research/research-methodology",
      subsections: [
        {
          key: "a",
          label: "Research Design",
          href: "/student-guide/quantitative-research/research-methodology#research-design",
        },
        {
          key: "b",
          label: "Research Locale",
          href: "/student-guide/quantitative-research/research-methodology#research-locale",
        },
        {
          key: "c",
          label: "Population and Sample",
          href: "/student-guide/quantitative-research/research-methodology#population-and-sample",
        },
        {
          key: "d",
          label: "Sampling Technique",
          href: "/student-guide/quantitative-research/research-methodology#sampling-technique",
        },
        {
          key: "e",
          label: "Research Instrument",
          href: "/student-guide/quantitative-research/research-methodology#research-instrument",
        },
        {
          key: "f",
          label: "Data Collection Procedure",
          href: "/student-guide/quantitative-research/research-methodology#data-collection-procedure",
        },
        {
          key: "g",
          label: "Data Analysis Procedure",
          href: "/student-guide/quantitative-research/research-methodology#data-analysis-procedure",
        },
        {
          key: "h",
          label: "Ethical Considerations",
          href: "/student-guide/quantitative-research/research-methodology#ethical-considerations",
        },
      ],
    },
    {
      number: "VI.",
      label: "Chapter IV: Presentation and Analysis of Data",
      href: "/student-guide/quantitative-research/presentation-and-analysis-of-data",
      subsections: [
        {
          key: "a",
          label: "Results and Findings",
          href: "/student-guide/quantitative-research/presentation-and-analysis-of-data#results-and-findings",
        },
        {
          key: "b",
          label: "Discussion",
          href: "/student-guide/quantitative-research/presentation-and-analysis-of-data#discussion",
        },
      ],
    },
    {
      number: "VII.",
      label: "Chapter V: Summary, Conclusions, and Recommendations",
      href: "/student-guide/quantitative-research/summary-conclusions-recommendations",
      subsections: [
        {
          key: "a",
          label: "Summary",
          href: "/student-guide/quantitative-research/summary-conclusions-recommendations#summary",
        },
        {
          key: "b",
          label: "Conclusion",
          href: "/student-guide/quantitative-research/summary-conclusions-recommendations#conclusion",
        },
        {
          key: "c",
          label: "Recommendations",
          href: "/student-guide/quantitative-research/summary-conclusions-recommendations#recommendations",
        },
      ],
    },
    {
      number: "VIII.",
      label: "References",
      href: "/student-guide/quantitative-research/references",
    },
    {
      number: "IX.",
      label: "Annexes",
      href: "/student-guide/quantitative-research/annexes",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-white">
      <div className="flex flex-col py-24 lg:py-32 relative gap-2 justify-center items-start w-full text-black px-5 lg:px-10">
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
              <BreadcrumbPage>Quantitative Research</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <p className="flex justify-start text-left text-2xl lg:text-6xl font-bold mb-5">
          Quantitative Research
        </p>

        <div className="text-base p-6 lg:text-lg lg:p-12 w-full bg-white text-black border-black/5 border-1 shadow-2xl inset-shadow-sm rounded-lg">
          <div>
            {sections.map((section) => (
              <div key={section.number}>
                <Link
                  href={section.href}
                  className="grid grid-cols-[1.5rem_auto] gap-x-5 hover:underline hover:text-blue-600"
                >
                  <p className="text-right">{section.number}</p>
                  <p>{section.label}</p>
                </Link>
                {section.subsections?.map((sub) => (
                  <Link
                    key={sub.key}
                    href={sub.href}
                    className="grid grid-cols-[2rem_auto] pl-8 gap-x-5 hover:underline hover:text-blue-600"
                  >
                    <p className="text-right">{sub.key}.</p>
                    <p>{sub.label}</p>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
