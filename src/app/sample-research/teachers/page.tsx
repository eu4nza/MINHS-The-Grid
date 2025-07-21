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
  title: "Sample Research for Teachers",
};

export default function Page() {
  const sections = [
    {
      label: "Aguilar_East 2.docx",
      href: "/sample-research/teachers/Aguilar_East_2.docx",
    },
    {
      label: "Carabeo_East.pdf",
      href: "/sample-research/teachers/Carabeo_East.pdf",
    },
    {
      label: "CARABEO_Understanding ESL Experiences.docx",
      href: "/sample-research/teachers/CARABEO_Understanding_ESL_Experiences.docx",
    },
    {
      label: "Content Analysis of Research Abstracts from Region IV.docx",
      href: "/sample-research/teachers/Content_Analysis_of_Research_Abstracts_from_Region_IV.docx",
    },
    {
      label: "Diquit_CID.docx",
      href: "/sample-research/teachers/Diquit_CID.docx",
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
              <BreadcrumbPage>Sample Research for Teachers</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <p className="flex justify-start text-left text-2xl lg:text-6xl font-bold mb-5">
          Sample Research for Teachers
        </p>

        <div className="text-base p-6 lg:text-lg lg:p-12 w-full bg-white text-black border-black/5 border-1 shadow-2xl inset-shadow-sm rounded-lg">
          <div>
            {sections.map((section) => (
              <div key={section.label}>
                <a
                  href={section.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:underline hover:text-blue-600 mb-2"
                >
                  <p>{section.label}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
