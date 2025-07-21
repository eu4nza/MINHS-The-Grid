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
              <BreadcrumbPage>I. Abstract</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Title + Pagination with mobile stacking */}
        <div className="flex flex-col md:flex-row justify-between items-start xl:items-center w-full gap-y-4 xl:gap-y-0 mb-5">
          {/* Title */}
          <p className="text-2xl xl:text-6xl font-bold">Business Plan</p>

          <div className="flex flex-row gap-2 sm:gap-4 w-auto">
            <Button
              variant="default"
              className="opacity-50 w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-not-allowed"
            >
              Previous
            </Button>

            <Select
              defaultValue="executive-summary"
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

            <Link href="/student-guide/business-plan/introduction">
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
            <div className="grid grid-cols-[1rem_auto] gap-x-5 text-2xl xl:text-4xl font-bold">
              <p className="text-right">I.</p>
              <p>Executive Summary</p>
            </div>

            <div className="py-6 flex flex-col gap-6">
              <p>
                An executive summary is a concise overview of a business plan,
                typically 1-2 pages in length. It provides a brief summary of
                the key points, highlighting the main aspects of the business,
                including:
              </p>
              <div>
                <span className="font-bold">Key Components</span>
                <ul className="list-decimal list-inside ml-4 space-y-1">
                  <li>
                    Business description. A brief overview of the business,
                    including its mission, products/services, and target market.
                  </li>
                  <li>
                    Market analysis. A summary of the market opportunity, target
                    audience, and competitive landscape.
                  </li>
                  <li>
                    Unique value proposition. A description of what sets the
                    business apart from others.
                  </li>
                  <li>
                    Management team: A brief introduction to the key team
                    members and their relevant experience.
                  </li>
                  <li>
                    Financial projections. A summary of the business's financial
                    goals and projections.
                  </li>
                  <li>
                    Funding requirements. An overview of the funding needed to
                    launch or grow the business.
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  <span className="font-bold">Purpose</span>
                </p>
                <p>The executive summary serves several purposes: </p>
                <ul className="list-decimal list-inside ml-4 space-y-1">
                  <li>
                    Grab the reader's attention. It should entice the reader to
                    read the full business plan.
                  </li>
                  <li>
                    Provide a concise overview. It should give the reader a
                    quick understanding of the business and its potential.
                  </li>
                  <li>
                    Set the tone. It should reflect the tone and style of the
                    business plan. A well-crafted executive summary is essential
                    for capturing the reader's attention and conveying the
                    business's value proposition.
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  <span className="font-bold">Executive Summary</span>
                </p>
                <p>
                  ABC Company is a locally-owned business that promotes and
                  sells authentic Filipino products. The company's mission is to
                  provide customers with an immersive experience of local
                  Filipino culture through high-quality products, while
                  supporting local artisans and farmers.
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold">Business Overview</span>
                </p>
                <p>
                  ABC Company offers a wide range of products, including
                  handmade crafts, local delicacies, and traditional clothing.
                  The company's products are sourced from local communities,
                  ensuring authenticity and quality. It aims to establish a span
                  presence in the local market and expand its reach to
                  international markets.
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold">Market Opportunity</span>
                </p>
                <p>
                  The demand for authentic Filipino products is growing, driven
                  by increasing interest in local culture and heritage. ABC
                  Company is well-positioned to capitalize on this trend, with a
                  unique value proposition that combines high-quality products
                  with a commitment to supporting local communities.
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold">Financial Projections</span>
                </p>
                <p>
                  The company projects significant revenue growth over the next
                  three years, with a focus on increasing its online presence
                  and expanding its product line. Its financial projections
                  indicate that it will achieve profitability within the first
                  two years of operation.
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold">Funding Requirements</span>
                </p>
                <p>
                  ABC Company is seeking funding to support the launch and
                  growth of its business. The funds will be used to develop its
                  online platform, source products from local communities, and
                  implement marketing and sales strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
