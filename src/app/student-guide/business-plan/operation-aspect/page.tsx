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
              <BreadcrumbPage>VII. Operation Aspect</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Title + Pagination with mobile stacking */}
        <div className="flex flex-col md:flex-row justify-between items-start xl:items-center w-full gap-y-4 xl:gap-y-0 mb-5">
          {/* Title */}
          <p className="text-2xl xl:text-6xl font-bold">Business Plan</p>

          <div className="flex flex-row gap-2 sm:gap-4 w-auto">
            <Link href="/student-guide/business-plan/management-aspect">
              <Button
                variant="default"
                className="w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Previous
              </Button>
            </Link>

            <Select
              defaultValue="operation-aspect"
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

            <Link href="/student-guide/business-plan/financial-aspect">
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
            <div className="grid grid-cols-[3rem_auto] gap-x-5 text-2xl xl:text-4xl font-bold">
              <p className="text-right">VII.</p>
              <p>Operation Aspect</p>
            </div>

            <div className="py-6 flex flex-col gap-6">
              <p>
                The operations aspect in a business plan describes how the
                company will deliver its products or services. It outlines the
                processes, systems, and resources needed to operate the business
                efficiently.
              </p>

              <div>
                <span className="font-bold">Key Components</span>
                <ul className="list-decimal list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">
                      Production or service delivery process:
                    </span>{" "}
                    Describes how products are made or services are delivered.
                  </li>
                  <li>
                    <span className="font-bold">Operations management:</span>{" "}
                    Outlines who manages operations and how they are overseen.
                  </li>
                  <li>
                    <span className="font-bold">
                      Supply chain and logistics:
                    </span>{" "}
                    Details how inputs are sourced, managed, and used in
                    operations.
                  </li>
                  <li>
                    <span className="font-bold">Facilities and equipment:</span>{" "}
                    Describes physical facilities, equipment, and technology
                    needed.
                  </li>
                  <li>
                    <span className="font-bold">
                      Quality control and management:
                    </span>{" "}
                    Outlines how quality will be ensured in products or
                    services.
                  </li>
                </ul>
              </div>

              <div>
                <span className="font-bold">
                  Importance of Operations Aspect
                </span>
                <ul className="list-decimal list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">
                      Efficiency and effectiveness:
                    </span>{" "}
                    A well-planned operations aspect helps ensure efficient and
                    effective delivery of products or services.
                  </li>
                  <li>
                    <span className="font-bold">Cost management:</span>{" "}
                    Operations planning impacts cost management and
                    profitability.
                  </li>
                  <li>
                    <span className="font-bold">Scalability:</span> Operations
                    plans may need to adapt as the business grows.
                  </li>
                </ul>
              </div>

              <div>
                <span className="font-bold">Considerations</span>
                <ul className="list-decimal list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">Adaptability to changes:</span>{" "}
                    Operations may need to adjust to changes in demand, supply
                    chains, or technology.
                  </li>
                  <li>
                    <span className="font-bold">Risk management:</span>{" "}
                    Operations planning should consider potential risks and
                    mitigation strategies.
                  </li>
                </ul>
              </div>

              <p>
                By outlining the operations aspect in a business plan, companies
                can ensure they have a solid plan for delivering products or
                services efficiently and effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
