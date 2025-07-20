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

export default function ContextAndRationale() {
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
              <BreadcrumbPage>I. Context and Rationale</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Title + Pagination */}
        <div className="flex flex-row items-center justify-between w-full mb-5">
          <p className="text-3xl md:text-6xl font-bold">
            Action Research Proposal Template
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="default"
              className="bg-white hover:bg-black/10 shadow-2xl rounded-lg transition-all duration-300 cursor-not-allowed"
            >
              Previous
            </Button>

            <Select
              defaultValue="context-and-rationale"
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
              <p className="text-right">I.</p>
              <p>Context and Rationale</p>
            </div>

            <div className="py-6 flex flex-col gap-2">
              <div className="grid grid-cols-[1.5rem_auto] text-2xl">
                <p className="font-bold">1.</p>
                <p className="font-bold">Context of the Research</p>
              </div>

              <p>
                This part explains the background—where your research is
                situated in the broader academic or real-world landscape.
              </p>

              <p className="font-bold">What to include:</p>

              <div className="grid grid-cols-[1.5rem_auto]">
                <p>●</p>
                <div className="flex flex-row gap-1">
                  <p className="font-bold">General background</p>
                  <p>on the topic.</p>
                </div>
              </div>

              <div className="grid grid-cols-[1.5rem_auto]">
                <p>●</p>
                <div className="flex flex-row gap-1">
                  <p className="font-bold">Current state of knowledge</p>
                  <p>or relevant literature (briefly).</p>
                </div>
              </div>

              <div className="grid grid-cols-[1.5rem_auto]">
                <p>●</p>
                <div className="flex flex-row gap-1">
                  <p className="font-bold">Trends, issues, or gaps</p>
                  <p>in the field.</p>
                </div>
              </div>

              <div className="grid grid-cols-[1.5rem_auto]">
                <p>●</p>
                <div className="flex flex-row gap-1">
                  <p className="font-bold">Why the topic is relevant now</p>
                  <p>(social, scientific, or policy importance).</p>
                </div>
              </div>

              <p className="font-bold">Example:</p>

              <div className="grid grid-cols-[0.25rem_auto] items-start gap-4">
                <div className="bg-gray-400 w-1 h-full"></div>
                <p>
                  In recent years, social media has become a dominant form of
                  communication, especially among youth. Numerous studies have
                  explored its influence on self-esteem and mental health.
                  However, limited research has examined how platform-specific
                  features—such as Instagram’s visual-centric design—shape body
                  image perceptions among adolescents.
                </p>
              </div>
            </div>

            <div className="py-6 flex flex-col gap-2">
              <div className="grid grid-cols-[1.5rem_auto] text-2xl">
                <p className="font-bold">2.</p>
                <p className="font-bold">Rationale of the Research</p>
              </div>

              <p>
                This explains why the study is necessary—your justification.
              </p>

              <p className="font-bold">What to include:</p>

              <div className="grid grid-cols-[1.5rem_auto]">
                <p>●</p>
                <div className="flex flex-row gap-1">
                  <p>The</p>
                  <p className="font-bold">problem or gap</p>
                  <p>your study addresses.</p>
                </div>
              </div>

              <div className="grid grid-cols-[1.5rem_auto]">
                <p>●</p>
                <div className="flex flex-row gap-1">
                  <p>The</p>
                  <p className="font-bold">importance or contribution</p>
                  <p>of your research.</p>
                </div>
              </div>

              <div className="grid grid-cols-[1.5rem_auto]">
                <p>●</p>
                <div className="flex flex-row gap-1">
                  <p>How your study will</p>
                  <p className="font-bold">benefit</p>
                  <p>the field or society.</p>
                </div>
              </div>

              <div className="grid grid-cols-[1.5rem_auto]">
                <p>●</p>
                <div className="flex flex-row gap-1">
                  <p>If applicable, a</p>
                  <p className="font-bold">brief statement of originality.</p>
                </div>
              </div>

              <p className="font-bold">Example:</p>

              <div className="grid grid-cols-[0.25rem_auto] items-start gap-4">
                <div className="bg-gray-400 w-1 h-full"></div>
                <p>
                  This study addresses a critical gap by focusing on the
                  psychological effects of Instagram usage, rather than social
                  media in general. Understanding the link between visual
                  content and body image can inform mental health interventions
                  and media literacy programs for teenagers.
                </p>
              </div>
            </div>

            <div className="py-6 flex flex-col gap-2">
              <p className="font-bold text-2xl">Putting It All Together</p>
              <p>
                When combined, the context and rationale might look like this:
              </p>

              <div className="grid grid-cols-[0.25rem_auto] items-start gap-4">
                <div className="bg-gray-400 w-1 h-full"></div>
                <p>
                  Digital technology has transformed how individuals interact,
                  with social media platforms now playing a central role in
                  everyday communication. While extensive research exists on
                  social media's effects on mental health, specific attention to
                  visually-driven platforms like Instagram remains limited. As
                  adolescents are particularly vulnerable to body image issues,
                  this research investigates how Instagram’s visual nature
                  influences their self-perception. By addressing this gap, the
                  study aims to contribute to both academic understanding and
                  practical approaches for youth mental health support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
