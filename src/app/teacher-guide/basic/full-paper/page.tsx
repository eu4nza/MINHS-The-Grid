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
  title: "Completed Basic Research Paper",
};

export default function Page() {
  const sections = [
    {
      number: "I.",
      label: "Title Page",
      href: "/teacher-guide/basic/full-paper/title-page",
    },
    {
      number: "II.",
      label: "Abstract",
      href: "/teacher-guide/basic/full-paper/abstract",
    },
    {
      number: "III.",
      label: "Acknowledgment",
      href: "/teacher-guide/basic/full-paper/acknowledgment",
    },
    {
      number: "IV.",
      label: "Introduction and Rationale",
      href: "/teacher-guide/basic/full-paper/introduction-and-rationale",
    },
    {
      number: "V.",
      label: "Literature Review",
      href: "/teacher-guide/basic/full-paper/literature-review",
    },
    {
      number: "VI.",
      label: "Research Questions",
      href: "/teacher-guide/basic/full-paper/research-questions",
    },
    {
      number: "VII.",
      label: "Scope and Limitations",
      href: "/teacher-guide/basic/full-paper/scope-and-limitations",
    },
    {
      number: "VIII.",
      label: "Research Methodology",
      href: "/teacher-guide/basic/full-paper/research-methodology",
      subsections: [
        {
          key: "a",
          label: "Research Design",
          href: "/teacher-guide/basic/full-paper/research-methodology#research-design",
        },
        {
          key: "b",
          label: "Sampling",
          href: "/teacher-guide/basic/full-paper/research-methodology#sampling",
        },
        {
          key: "c",
          label: "Data Collection",
          href: "/teacher-guide/basic/full-paper/research-methodology#data-collection",
        },
        {
          key: "d",
          label: "Ethical Issues",
          href: "/teacher-guide/basic/full-paper/research-methodology#ethical-issues",
        },
        {
          key: "e",
          label: "Data Analysis",
          href: "/teacher-guide/basic/full-paper/research-methodology#data-analysis",
        },
      ],
    },
    {
      number: "IX.",
      label: "Discussion of Results and Recommendation",
      href: "/teacher-guide/basic/full-paper/discussion-and-recommendation",
    },
    {
      number: "X.",
      label: "Dissemination and Advocacy",
      href: "/teacher-guide/basic/full-paper/dissemination-and-advocacy",
    },
    {
      number: "XI.",
      label: "References",
      href: "/teacher-guide/basic/full-paper/references",
    },
    {
      number: "XII.",
      label: "Annexes",
      href: "/teacher-guide/basic/full-paper/annexes",
      subsections: [
        {
          key: "a",
          label: "Research Instrument",
          href: "/teacher-guide/basic/full-paper/annexes#research-instrument",
        },
        {
          key: "b",
          label:
            "Signed Declaration of Anti-Plagiarism and Absence of Conflict of Interest",
          href: "/teacher-guide/basic/full-paper/annexes#anti-plagiarism-declaration",
        },
        {
          key: "c",
          label: "Signed Declaration of AI Use (If applicable)",
          href: "/teacher-guide/basic/full-paper/annexes#ai-use-declaration",
        },
        {
          key: "d",
          label: "Other Documents",
          href: "/teacher-guide/basic/full-paper/annexes#other-documents",
        },
      ],
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
              <BreadcrumbPage>Completed Basic Research Paper</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <p className="flex justify-start text-left text-2xl lg:text-6xl font-bold mb-5">
          Completed Basic Research Paper
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
