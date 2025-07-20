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
  title: "Basic Research Proposal",
};

export default function Page() {
  const sections = [
    {
      number: "I.",
      label: "Introduction and Rationale",
      href: "/teacher-guide/basic/research-proposal/introduction-and-rationale",
    },
    {
      number: "II.",
      label: "Literature Review",
      href: "/teacher-guide/basic/research-proposal/literature-review",
    },
    {
      number: "III.",
      label: "Research Questions",
      href: "/teacher-guide/basic/research-proposal/research-questions",
    },
    {
      number: "IV.",
      label: "Scope and Limitations",
      href: "/teacher-guide/basic/research-proposal/scope-and-limitations",
    },
    {
      number: "V.",
      label: "Research Methodology",
      href: "/teacher-guide/basic/research-proposal/research-methodology",
      subsections: [
        {
          key: "a",
          label: "Research Design",
          href: "/teacher-guide/basic/research-proposal/research-methodology#research-design",
        },
        {
          key: "b",
          label: "Sampling",
          href: "/teacher-guide/basic/research-proposal/research-methodology#sampling",
        },
        {
          key: "c",
          label: "Data Collection",
          href: "/teacher-guide/basic/research-proposal/research-methodology#data-collection",
        },
        {
          key: "d",
          label: "Ethical Issues",
          href: "/teacher-guide/basic/research-proposal/research-methodology#ethical-issues",
        },
        {
          key: "e",
          label: "Data Analysis",
          href: "/teacher-guide/basic/research-proposal/research-methodology#data-analysis",
        },
      ],
    },
    {
      number: "VI.",
      label: "References",
      href: "/teacher-guide/basic/research-proposal/references",
    },
    {
      number: "VII.",
      label: "Annexes",
      href: "/teacher-guide/basic/research-proposal/annexes",
      subsections: [
        {
          key: "a",
          label: "Research Instrument",
          href: "/teacher-guide/basic/research-proposal/annexes#research-instrument",
        },
        {
          key: "b",
          label: "Sample Consent Form",
          href: "/teacher-guide/basic/research-proposal/annexes#consent-form",
        },
        {
          key: "c",
          label: "Other documents as deemed relevant by the researcher(s)",
          href: "/teacher-guide/basic/research-proposal/annexes#other-documents",
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
              <BreadcrumbPage>Basic Research Proposal</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <p className="flex justify-start text-left text-2xl lg:text-6xl font-bold mb-5">
          Basic Research Proposal
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
