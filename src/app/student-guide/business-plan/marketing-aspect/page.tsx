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

export default function Page() {
  return (
    <main className="w-full min-h-screen bg-white">
      <div className="flex flex-col py-24 xl:py-32 relative gap-2 justify-center items-start w-full text-black px-5 xl:px-10">
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
              <BreadcrumbLink href="/student-guide/business-plan">
                Business Plan
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>V. Marketing Aspect</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Title + Pagination with mobile stacking */}
        <div className="flex flex-col md:flex-row justify-between items-start xl:items-center w-full gap-y-4 xl:gap-y-0 mb-5">
          {/* Title */}
          <p className="text-2xl xl:text-6xl font-bold">Business Plan</p>

          <div className="flex flex-row gap-2 sm:gap-4 w-auto">
            <Link href="/student-guide/business-plan/environmental-analysis">
              <Button
                variant="default"
                className="w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Previous
              </Button>
            </Link>

            <Select
              defaultValue="marketing-aspect"
              onValueChange={(value) => {
                window.location.href = `/student-guide/business-plan/${value}`;
              }}
            >
              <SelectTrigger className=" bg-white hover:bg-black/10 transition-all duration-300 cursor-pointer shadow-xs border-black/5">
                <div className="truncate text-left w-[120px]">
                  <SelectValue placeholder="Page" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-white border-0 cursor-pointer">
                {[
                  ["executive-summary", "I. Executive Summary"],
                  ["introduction", "II. Introduction"],
                  ["company-background", "III. Company Background"],
                  ["environmental-analysis", "IV. Environmental Analysis"],
                  ["marketing-aspect", "V. Marketing Aspect"],
                  ["management-aspect", "VI. Management Aspect"],
                  ["operation-aspect", "VII. Operation Aspect"],
                  ["financial-aspect", "VIII. Financial Aspect"],
                  ["socio-cultural-aspect", "IX. Socio Cultural Aspect"],
                ].map(([value, label]) => (
                  <SelectItem
                    key={value}
                    value={value}
                    className="hover:bg-black/10 transition-all duration-300 cursor-pointer whitespace-normal"
                  >
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Link href="/student-guide/business-plan/management-aspect">
              <Button
                variant="default"
                className="w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Next
              </Button>
            </Link>
          </div>
        </div>

        {/* Main content */}
        <div className="text-base p-6 xl:text-lg xl:p-12 w-full bg-white text-black border border-black/5 shadow-2xl rounded-lg">
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-[1.5rem_auto] gap-x-5 text-2xl xl:text-4xl font-bold">
              <p className="text-right">V.</p>
              <p>Marketing Aspect</p>
            </div>

            <div className="py-6 flex flex-col gap-6">
              <p>
                The marketing aspect in a business plan outlines how a company
                will promote its products or services to attract and retain
                customers. It serves as a roadmap for achieving business goals,
                guiding marketing efforts, and ensuring alignment with overall
                business objectives.
              </p>

              <div>
                <span className="font-bold">Key Components:</span>
                <ul className="list-decimal list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">Target Audience:</span>{" "}
                    Identifying demographics, psychographics, and buying
                    behaviors.
                  </li>
                  <li>
                    <span className="font-bold">Marketing Strategies:</span>{" "}
                    Product/service strategy, pricing, distribution, promotion,
                    and sales.
                  </li>
                  <li>
                    <span className="font-bold">Budget Allocation:</span>{" "}
                    Assigning resources to marketing activities.
                  </li>
                  <li>
                    <span className="font-bold">Metrics and Evaluation:</span>{" "}
                    Tracking progress and measuring success.
                  </li>
                </ul>
              </div>

              <div>
                <span className="font-bold">
                  3 Marketing Objectives Examples
                </span>
                <ul className="list-decimal list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">Increase Brand Awareness:</span>{" "}
                    Boost social media engagement by 50% within the next quarter
                    to reach a larger audience.
                  </li>
                  <li>
                    <span className="font-bold">Drive Sales:</span> Increase
                    online sales by 30% in the next six months through targeted
                    advertising and promotions.
                  </li>
                  <li>
                    <span className="font-bold">Generate Leads:</span> Produce
                    500 new leads per month through content marketing and email
                    campaigns.
                  </li>
                </ul>
              </div>

              <p>
                A well-structured marketing plan helps businesses stay focused,
                adapt to market changes, and achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
