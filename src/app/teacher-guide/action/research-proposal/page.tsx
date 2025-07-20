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
  title: "Action Research Proposal",
};

export default function Page() {
  const sections = [
    {
      number: "I.",
      label: "Context and Rationale",
      href: "/teacher-guide/action/research-proposal/context-and-rationale",
    },
    {
      number: "II.",
      label: "Action Research Questions",
      href: "/teacher-guide/action/research-proposal/action-research-questions",
    },
    {
      number: "III.",
      label: "Proposed Innovation, Intervention, and Strategy",
      href: "/teacher-guide/action/research-proposal/proposed-innovation-intervention-and-strategy",
    },
    {
      number: "IV.",
      label: "Action Research Methods",
      href: "/teacher-guide/action/research-proposal/action-research-methods",
      subsections: [
        {
          key: "a",
          label: "Research Design",
          href: "/teacher-guide/action/research-proposal/action-research-methods#research-design",
        },
        {
          key: "b",
          label: "Participants and/or Other Sources of Data and Information",
          href: "/teacher-guide/action/research-proposal/action-research-methods#participants-and-data-sources",
        },
        {
          key: "c",
          label: "Data Gathering Method",
          href: "/teacher-guide/action/research-proposal/action-research-methods#data-gathering-method",
        },
        {
          key: "d",
          label: "Data Analysis Plan",
          href: "/teacher-guide/action/research-proposal/action-research-methods#data-analysis-plan",
        },
      ],
    },
    {
      number: "V.",
      label: "References",
      href: "/teacher-guide/action/research-proposal/references",
    },
    {
      number: "VI.",
      label: "Annexes",
      href: "/teacher-guide/action/research-proposal/annexes",
      subsections: [
        {
          key: "a",
          label: "Research Instrument",
          href: "/teacher-guide/action/research-proposal/annexes#research-instrument",
        },
        {
          key: "b",
          label: "Sample Consent Form",
          href: "/teacher-guide/action/research-proposal/annexes#consent-form",
        },
        {
          key: "c",
          label: "Other Documents as deemed relevant by the researcher(s)",
          href: "/teacher-guide/action/research-proposal/annexes#other-documents",
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
              <BreadcrumbPage>Action Research Proposal</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <p className="flex justify-start text-left text-2xl lg:text-6xl font-bold mb-5">
          Action Research Proposal
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
