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
  title: "Business Plan",
};

export default function Page() {
  const sections = [
    {
      number: "I.",
      label: "Executive Summary",
      href: "/student-guide/business-plan/executive-summary",
    },
    {
      number: "II.",
      label: "Introduction",
      href: "/student-guide/business-plan/introduction",
    },
    {
      number: "III.",
      label: "Company Background",
      href: "/student-guide/business-plan/company-background",
    },
    {
      number: "IV.",
      label: "Environmental Analysis",
      href: "/student-guide/business-plan/environmental-analysis",
    },
    {
      number: "V.",
      label: "Marketing Aspect",
      href: "/student-guide/business-plan/marketing-aspect",
    },
    {
      number: "VI.",
      label: "Management Aspect",
      href: "/student-guide/business-plan/management-aspect",
    },
    {
      number: "VII.",
      label: "Operation Aspect",
      href: "/student-guide/business-plan/operation-aspect",
    },
    {
      number: "VIII.",
      label: "Financial Aspect",
      href: "/student-guide/business-plan/financial-aspect",
    },
    {
      number: "IX.",
      label: "Socio Cultural Aspect",
      href: "/student-guide/business-plan/socio-cultural-aspect",
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
              <BreadcrumbPage>Business Plan</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <p className="flex justify-start text-left text-2xl lg:text-6xl font-bold mb-5">
          Business Plan
        </p>

        <div className="text-base p-6 lg:text-lg lg:p-12 w-full bg-white text-black border-black/5 border-1 shadow-2xl inset-shadow-sm rounded-lg">
          <div>
            {sections.map((section) => (
              <div key={section.number}>
                <Link
                  href={section.href}
                  className="grid grid-cols-[1.5rem_auto] gap-x-5 hover:underline hover:text-blue-600"
                >
                  <span className="text-right">{section.number}</span>
                  <span>{section.label}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
