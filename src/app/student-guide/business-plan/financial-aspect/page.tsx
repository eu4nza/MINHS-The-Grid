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
              <BreadcrumbPage>VIII. Financial Aspect</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Title + Pagination with mobile stacking */}
        <div className="flex flex-col md:flex-row justify-between items-start xl:items-center w-full gap-y-4 xl:gap-y-0 mb-5">
          {/* Title */}
          <p className="text-2xl xl:text-6xl font-bold">Business Plan</p>

          <div className="flex flex-row gap-2 sm:gap-4 w-auto">
            <Link href="/student-guide/business-plan/operation-aspect">
              <Button
                variant="default"
                className="w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Previous
              </Button>
            </Link>

            <Select
              defaultValue="financial-aspect"
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

            <Link href="/student-guide/business-plan/socio-cultural-aspect">
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
            <div className="grid grid-cols-[3.5rem_auto] gap-x-5 text-2xl xl:text-4xl font-bold">
              <p className="text-right">VIII.</p>
              <p>Financial Aspect</p>
            </div>

            <div className="py-6 flex flex-col gap-6">
              <p>
                The financial aspect in a business plan outlines the company's
                financial projections, funding requirements, and strategies for
                managing finances.
              </p>

              <div>
                <span className="font-bold">Key Components</span>
                <ul className="list-decimal list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">Financial projections:</span>{" "}
                    Includes projected income statements, balance sheets, and
                    cash flow statements.
                  </li>
                  <li>
                    <span className="font-bold">Funding requirements:</span>{" "}
                    Outlines how much funding is needed, where it will come
                    from, and how it will be used.
                  </li>
                  <li>
                    <span className="font-bold">Revenue model:</span> Describes
                    how the company will generate revenue.
                  </li>
                  <li>
                    <span className="font-bold">Cost structure:</span> Details
                    fixed and variable costs, including cost of goods sold and
                    operating expenses.
                  </li>
                  <li>
                    <span className="font-bold">Financial management:</span>{" "}
                    Outlines how finances will be managed, including budgeting,
                    forecasting, and financial reporting.
                  </li>
                </ul>
              </div>

              <div>
                <span className="font-bold">
                  Importance of Financial Aspect
                </span>
                <ul className="list-decimal list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">Financial viability:</span> The
                    financial aspect helps determine if the business is
                    financially viable.
                  </li>
                  <li>
                    <span className="font-bold">Funding and investment:</span> A
                    solid financial plan is crucial for securing funding or
                    investment.
                  </li>
                  <li>
                    <span className="font-bold">Decision-making:</span>{" "}
                    Financial projections inform business decisions and
                    strategy.
                  </li>
                </ul>
              </div>

              <div>
                <span className="font-bold">Considerations</span>
                <ul className="list-decimal list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">Assumptions:</span> Financial
                    projections are based on assumptions about the market,
                    costs, and revenue.
                  </li>
                  <li>
                    <span className="font-bold">Risk analysis:</span> Financial
                    plans should consider potential financial risks and
                    mitigation strategies.
                  </li>
                </ul>
              </div>

              <p>
                By outlining the financial aspect in a business plan, companies
                can ensure they have a solid financial strategy and plan for
                managing finances effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
