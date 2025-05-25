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
  title: "Action Research Proposal Template",
};

export default function arpt() {
  return (
    <main className="w-full min-h-screen bg-white">
      <div className="flex flex-col py-24 md:py-32 relative gap-2 justify-center items-start w-full text-black px-10">
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
              <BreadcrumbPage>Action Research Proposal Template</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <p className="flex justify-start text-left text-3xl md:text-6xl font-bold mb-5">
          Action Research Proposal Template
        </p>
        <div className="text-base p-6 md:text-lg md:p-12 w-full bg-white text-black border-black/5 border-1 shadow-2xl inset-shadow-sm rounded-lg">
          <div>
            <Link
              href="/action-research-proposal-template/context-and-rationale"
              className="grid grid-cols-[1.5rem_auto] gap-x-5 hover:underline hover:text-blue-600"
            >
              <p className="text-right">I.</p>
              <p>Context and Rationale</p>
            </Link>
            <Link
              href="/action-research-proposal-template/action-research-questions"
              className="grid grid-cols-[1.5rem_auto] gap-x-5 hover:underline hover:text-blue-600"
            >
              <p className="text-right">II.</p>
              <p>Action Research Questions</p>
            </Link>
            <Link
              href="/action-research-proposal-template/proposed-innovation-intervention-and-strategy"
              className="grid grid-cols-[1.5rem_auto] gap-x-5 hover:underline hover:text-blue-600"
            >
              <p className="text-right">III.</p>
              <p>Proposed Innovation, Intervention, and Strategy</p>
            </Link>
            <Link
              href="/action-research-proposal-template/action-research-methods"
              className="grid grid-cols-[1.5rem_auto] gap-x-5 hover:underline hover:text-blue-600"
            >
              <p className="text-right">IV.</p>
              <p>Action Research Methods</p>
            </Link>
            <div>
              <Link
                href="/action-research-proposal-template/research-design"
                className="col-p-2 grid grid-cols-[2rem_auto] pl-8 gap-x-5 hover:underline hover:text-blue-600"
              >
                <p className="text-right">a.</p>
                <p>Research Design</p>
              </Link>
              <Link
                href="/action-research-proposal-template/participants-and-sources-of-data"
                className="col-p-2 grid grid-cols-[2rem_auto] pl-8 gap-x-5 hover:underline hover:text-blue-600"
              >
                <p className="text-right">b.</p>
                <p>Participants and/or Other Sources of Data and Information</p>
              </Link>
              <Link
                href="/action-research-proposal-template/data-gathering-method"
                className="col-p-2 grid grid-cols-[2rem_auto] pl-8 gap-x-5 hover:underline hover:text-blue-600"
              >
                <p className="text-right">c.</p>
                <p>Data Gathering Method</p>
              </Link>
              <Link
                href="/action-research-proposal-template/data-analysis-plan"
                className="col-p-2 grid grid-cols-[2rem_auto] pl-8 gap-x-5 hover:underline hover:text-blue-600"
              >
                <p className="text-right">d.</p>
                <p>Data Analysis Plan</p>
              </Link>
            </div>
            <Link
              href="/action-research-proposal-template/references"
              className="grid grid-cols-[1.5rem_auto] gap-x-5 hover:underline hover:text-blue-600"
            >
              <p className="text-right">V.</p>
              <p>References</p>
            </Link>
            <Link
              href="/action-research-proposal-template/annexes"
              className="grid grid-cols-[1.5rem_auto] gap-x-5 hover:underline hover:text-blue-600"
            >
              <p className="text-right">VI.</p>
              <p>Annexes</p>
            </Link>
            <div>
              <Link
                href="/action-research-proposal-template/research-instrument"
                className="col-p-2 grid grid-cols-[2rem_auto] pl-8 gap-x-5 hover:underline hover:text-blue-600"
              >
                <p className="text-right">a.</p>
                <p>Research Instrument</p>
              </Link>
              <Link
                href="/action-research-proposal-template/sample-consent-form"
                className="col-p-2 grid grid-cols-[2rem_auto] pl-8 gap-x-5 hover:underline hover:text-blue-600"
              >
                <p className="text-right">b.</p>
                <p>Sample Consent Form</p>
              </Link>
              <Link
                href="/action-research-proposal-template/other-documents"
                className="col-p-2 grid grid-cols-[2rem_auto] pl-8 gap-x-5 hover:underline hover:text-blue-600"
              >
                <p className="text-right">c.</p>
                <p>Other Documents as deemed relevant by the researcher(s)</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
