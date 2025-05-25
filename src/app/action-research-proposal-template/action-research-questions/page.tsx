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

export default function ActionResearchProposalTemplate() {
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
              <BreadcrumbLink href="/action-research-proposal-template">
                Action Research Proposal Template
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>II. Action Research Questions</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Title + Pagination */}
        <div className="flex flex-row items-center justify-between w-full mb-5">
          <p className="text-3xl md:text-6xl font-bold">
            Action Research Proposal Template
          </p>
          <div className="flex items-center gap-2">
            <Link href="/action-research-proposal-template/context-and-rationale">
              <Button
                variant="default"
                className="bg-white hover:bg-black/10 shadow-2xl rounded-lg transition-all duration-300 cursor-pointer"
              >
                Previous
              </Button>
            </Link>

            <Select
              defaultValue="action-research-questions"
              onValueChange={(value) => {
                window.location.href = `/action-research-proposal-template/${value}`;
              }}
            >
              <SelectTrigger className="bg-white hover:bg-black/10 transition-all duration-300 cursor-pointer shadow-xs border-0">
                <SelectValue placeholder="Page" />
              </SelectTrigger>
              <SelectContent className="bg-white border-0 cursor-pointer">
                <SelectItem
                  value="context-and-rationale"
                  className="hover:bg-black/10 transition-all duration-300 cursor-pointer"
                >
                  I. Context and Rationale
                </SelectItem>
                <SelectItem
                  value="action-research-questions"
                  className="hover:bg-black/10 transition-all duration-300 cursor-pointer"
                >
                  II. Action Research Questions
                </SelectItem>
                <SelectItem
                  value="proposed-innovation-intervention-and-strategy"
                  className="hover:bg-black/10 transition-all duration-300 cursor-pointer"
                >
                  III. Proposed Innovation, Intervention, and Strategy
                </SelectItem>
                <SelectItem
                  value="action-research-methods"
                  className="hover:bg-black/10 transition-all duration-300 cursor-pointer"
                >
                  IV. Action Research Methods
                </SelectItem>
                <SelectItem
                  value="research-design"
                  className="hover:bg-black/10 transition-all duration-300 cursor-pointer"
                >
                  IV. a. Research Design
                </SelectItem>
                <SelectItem
                  value="participants-and-sources-of-data"
                  className="hover:bg-black/10 transition-all duration-300 cursor-pointer"
                >
                  IV. b. Participants and/or Other Sources of Data and
                  Information
                </SelectItem>
                <SelectItem
                  value="data-gathering-method"
                  className="hover:bg-black/10 transition-all duration-300 cursor-pointer"
                >
                  IV. c. Data Gathering Method
                </SelectItem>
                <SelectItem
                  value="data-analysis-plan"
                  className="hover:bg-black/10 transition-all duration-300 cursor-pointer"
                >
                  IV. d. Data Analysis Plan
                </SelectItem>
                <SelectItem
                  value="references"
                  className="hover:bg-black/10 transition-all duration-300 cursor-pointer"
                >
                  V. References
                </SelectItem>
                <SelectItem
                  value="annexes"
                  className="hover:bg-black/10 transition-all duration-300 cursor-pointer"
                >
                  VI. Annexes
                </SelectItem>
                <SelectItem
                  value="research-instrument"
                  className="hover:bg-black/10 transition-all duration-300 cursor-pointer"
                >
                  VI. a. Research Instrument
                </SelectItem>
                <SelectItem
                  value="sample-consent-form"
                  className="hover:bg-black/10 transition-all duration-300 cursor-pointer"
                >
                  VI. b. Sample Consent Form
                </SelectItem>
                <SelectItem
                  value="other-documents"
                  className="hover:bg-black/10 transition-all duration-300 cursor-pointer"
                >
                  VI. c. Other Documents as deemed relevant by the researcher(s)
                </SelectItem>
              </SelectContent>
            </Select>

            <Link href="/action-research-proposal-template/action-research-questions">
              <Button
                variant="default"
                className="bg-white hover:bg-black/10 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Next
              </Button>
            </Link>
          </div>
        </div>

        {/* Main content */}
        <div className="text-base p-6 md:text-lg md:p-12 w-full bg-white text-black border border-black/5 shadow-2xl rounded-lg">
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-[1.5rem_auto] gap-x-5 text-4xl font-bold">
              <p className="text-right">II.</p>
              <p>Action Research Questions</p>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <p className="font-bold">Purpose:</p>
              <p>To define the focus of the research clearly.</p>
            </div>
            <p className="font-bold">What to include:</p>
            <div className="grid grid-cols-[1.5rem_auto]">
              <p>●</p>
              <div className="flex flex-row gap-1 items-center">
                <p className="font-bold">Main Research Question:</p>
                <p>The central question your research aims to answer.</p>
              </div>
            </div>
            <div className="grid grid-cols-[1.5rem_auto]">
              <p>●</p>
              <div className="flex flex-row gap-1 items-center">
                <p className="font-bold">Sub-questions:</p>
                <p>
                  Specific, measurable questions that support the main inquiry.
                </p>
              </div>
            </div>
            <p className="italic">Example:</p>
            <div className="grid grid-cols-[1.5rem_auto]">
              <p>●</p>
              <div className="flex flex-row gap-1 items-center">
                <p className="font-bold">Main:</p>
                <p>
                  How does [intervention] affect student engagement in
                  [subject/grade level]?
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[1.5rem_auto]">
              <p>●</p>
              <p className="font-bold">Sub-questions:</p>
            </div>
            <div className="col-p-2 grid grid-cols-[2rem_auto] pl-8">
              <p>1. </p>
              <p>What was the level of engagement before the intervention?</p>
            </div>
            <div className="col-p-2 grid grid-cols-[2rem_auto] pl-8">
              <p>2. </p>
              <p>What changes are observed after implementing the strategy?</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
