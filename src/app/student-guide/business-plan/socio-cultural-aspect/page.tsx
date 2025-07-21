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
              <BreadcrumbPage>IX. Socio Cultural Aspect</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Title + Pagination with mobile stacking */}
        <div className="flex flex-col md:flex-row justify-between items-start xl:items-center w-full gap-y-4 xl:gap-y-0 mb-5">
          {/* Title */}
          <p className="text-2xl xl:text-6xl font-bold">Business Plan</p>

          <div className="flex flex-row gap-2 sm:gap-4 w-auto">
            <Link href="/student-guide/business-plan/financial-aspect">
              <Button
                variant="default"
                className="w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Previous
              </Button>
            </Link>

            <Select
              defaultValue="socio-cultural-aspect"
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

            <Button
              variant="default"
              className="opacity-50 w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-not-allowed"
            >
              Next
            </Button>
          </div>
        </div>

        {/* Main content */}
        <div className="text-base p-6 xl:text-lg xl:p-12 w-full bg-white text-black border border-black/5 shadow-2xl rounded-lg">
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-[2.5rem_auto] gap-x-5 text-2xl xl:text-4xl font-bold">
              <p className="text-right">IX.</p>
              <p>Sociocultural Aspect</p>
            </div>

            <div className="py-6 flex flex-col gap-6">
              <p>
                The sociocultural aspect in a business plan considers the social
                and cultural factors that can impact the business's operations,
                marketing, and overall success.
              </p>

              <div>
                <span className="font-bold">Key Considerations</span>
                <ul className="list-decimal list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">
                      Target market demographics:
                    </span>{" "}
                    Understanding the demographics, values, and preferences of
                    the target market.
                  </li>
                  <li>
                    <span className="font-bold">
                      Cultural norms and values:
                    </span>{" "}
                    Awareness of cultural norms, values, and customs that can
                    affect business operations or marketing.
                  </li>
                  <li>
                    <span className="font-bold">
                      Social trends and influences:
                    </span>{" "}
                    Considering social trends that could impact the business or
                    its products/services.
                  </li>
                  <li>
                    <span className="font-bold">
                      Community relations and impact:
                    </span>{" "}
                    How the business interacts with and impacts the local
                    community.
                  </li>
                </ul>
              </div>

              <div>
                <span className="font-bold">
                  Importance of Sociocultural Aspect
                </span>
                <ul className="list-decimal list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">Market understanding:</span>{" "}
                    Understanding sociocultural factors helps tailor
                    products/services to the target market.
                  </li>
                  <li>
                    <span className="font-bold">Effective marketing:</span>{" "}
                    Sociocultural awareness informs marketing strategies that
                    resonate with the target audience.
                  </li>
                  <li>
                    <span className="font-bold">Community engagement:</span>{" "}
                    Considering sociocultural aspects can help build positive
                    relationships with the community.
                  </li>
                </ul>
              </div>

              <div>
                <span className="font-bold">Considerations</span>
                <ul className="list-decimal list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">Adaptability:</span> Businesses
                    may need to adapt to changing sociocultural trends or
                    differences in various markets.
                  </li>
                  <li>
                    <span className="font-bold">Sensitivity and respect:</span>{" "}
                    Showing sensitivity and respect for cultural differences can
                    enhance business relationships and reputation.
                  </li>
                </ul>
              </div>

              <p>
                By considering the sociocultural aspect in a business plan,
                companies can better understand their target market, tailor
                their strategies, and build positive relationships with the
                community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
