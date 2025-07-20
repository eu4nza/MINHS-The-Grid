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
  title: "Completed Action Research Paper",
};

export default function Page() {
  const sections = [
    {
      number: "I.",
      label: "Title Page (https://bit.ly/8thCC-templates)",
      href: "/teacher-guide/action/full-paper/title-page",
    },
    {
      number: "II.",
      label: "Abstract",
      href: "/teacher-guide/action/full-paper/abstract",
    },
    {
      number: "III.",
      label: "Acknowledgment",
      href: "/teacher-guide/action/full-paper/acknowledgment",
    },
    {
      number: "IV.",
      label: "Context and Rationale",
      href: "/teacher-guide/action/full-paper/context-and-rationale",
    },
    {
      number: "V.",
      label: "Action Research Questions",
      href: "/teacher-guide/action/full-paper/action-research-questions",
    },
    {
      number: "VI.",
      label: "Proposed Innovation, Intervention, and Strategy",
      href: "/teacher-guide/action/full-paper/proposed-innovation-intervention-and-strategy",
    },
    {
      number: "VII.",
      label: "Action Research Methods",
      href: "/teacher-guide/action/full-paper/action-research-methods",
      subsections: [
        {
          key: "a",
          label: "Research Design",
          anchor: "research-design",
        },
        {
          key: "b",
          label: "Participants and/or Other Sources of Data and Information",
          anchor: "participants-and-data-sources",
        },
        {
          key: "c",
          label: "Data Gathering Method",
          anchor: "data-gathering-method",
        },
        {
          key: "d",
          label: "Data Analysis Plan",
          anchor: "data-analysis-plan",
        },
      ],
    },
    {
      number: "VIII.",
      label: "Discussion of Results and Reflection",
      href: "/teacher-guide/action/full-paper/discussion-and-reflection",
    },
    {
      number: "IX.",
      label: "Action Plan",
      href: "/teacher-guide/action/full-paper/action-plan",
    },
    {
      number: "X.",
      label: "References",
      href: "/teacher-guide/action/full-paper/references",
    },
    {
      number: "XI.",
      label: "Annexes",
      href: "/teacher-guide/action/full-paper/annexes",
      subsections: [
        {
          key: "a",
          label: "Research Instrument",
          anchor: "research-instrument",
        },
        {
          key: "b",
          label:
            "Signed Declaration of Anti-Plagiarism and Absence of Conflict of Interest",
          anchor: "anti-plagiarism-declaration",
        },
        {
          key: "c",
          label: "Signed Declaration of AI Use (If applicable)",
          anchor: "ai-use-declaration",
        },
        {
          key: "d",
          label: "Other documents as deemed relevant by the researcher(s)",
          anchor: "other-documents",
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
              <BreadcrumbPage>Completed Action Research Paper</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <p className="flex justify-start text-left text-2xl lg:text-6xl font-bold mb-5">
          Completed Action Research Paper
        </p>

        <div className="text-base p-6 lg:text-lg lg:p-12 w-full bg-white text-black border-black/5 border-1 shadow-2xl inset-shadow-sm rounded-lg">
          <div>
            {sections.map(({ number, label, href, subsections }) => (
              <div key={number}>
                <Link
                  href={href}
                  className="grid grid-cols-[1.5rem_auto] gap-x-5 hover:underline hover:text-blue-600"
                >
                  <p className="text-right">{number}</p>
                  <p>{label}</p>
                </Link>
                {subsections?.map(({ key, label, anchor }) => (
                  <Link
                    key={key}
                    href={`${href}#${anchor}`}
                    className="grid grid-cols-[2rem_auto] pl-8 gap-x-5 hover:underline hover:text-blue-600"
                  >
                    <p className="text-right">{key}.</p>
                    <p>{label}</p>
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
