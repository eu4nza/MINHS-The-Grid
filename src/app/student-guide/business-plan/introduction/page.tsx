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
              <BreadcrumbPage>II. Introduction</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Title + Pagination with mobile stacking */}
        <div className="flex flex-col md:flex-row justify-between items-start xl:items-center w-full gap-y-4 xl:gap-y-0 mb-5">
          {/* Title */}
          <p className="text-2xl xl:text-6xl font-bold">Business Plan</p>

          <div className="flex flex-row gap-2 sm:gap-4 w-auto">
            <Link href="/student-guide/business-plan/executive-summary">
              <Button
                variant="default"
                className="w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Previous
              </Button>
            </Link>

            <Select
              defaultValue="introduction"
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

            <Link href="/student-guide/business-plan/company-background">
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
              <p className="text-right">II.</p>
              <p>Introduction</p>
            </div>

            <div className="py-6 flex flex-col gap-6">
              <p>
                The introduction part of a business plan provides an overview of
                the business, setting the stage for the rest of the plan.
              </p>

              <div>
                <span className="font-bold">Components of Introduction</span>
                <ul className="list-decimal list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">
                      Business name and description:
                    </span>{" "}
                    A brief introduction to the business, including its name,
                    products/services, and industry.
                  </li>
                  <li>
                    <span className="font-bold">Business purpose:</span> A
                    statement outlining the business's mission, vision, and
                    objectives.
                  </li>
                  <li>
                    <span className="font-bold">Background information:</span> A
                    brief history of the business, including its founding,
                    milestones, and key achievements.
                  </li>
                  <li>
                    <span className="font-bold">Business structure:</span> An
                    overview of the business's organizational structure,
                    including its ownership and management team.
                  </li>
                  <li>
                    <span className="font-bold">Objectives:</span> A statement
                    outlining the business's short-term and long-term goals.
                  </li>
                </ul>
              </div>

              <div>
                <span className="font-bold">Purpose of Introduction</span>
                <ul className="list-decimal list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">Provide context:</span> It sets
                    the stage for the rest of the business plan, providing
                    context for the reader.
                  </li>
                  <li>
                    <span className="font-bold">Establish credibility:</span> It
                    demonstrates the business's credibility and professionalism.
                  </li>
                  <li>
                    <span className="font-bold">Capture interest:</span> It
                    should engage the reader and encourage them to read further.
                    A well-written introduction provides a solid foundation for
                    the business plan, giving the reader a clear understanding
                    of the business and its goals.
                  </li>
                </ul>
              </div>

              <div>
                <span className="font-bold">Introduction</span>
                <p>
                  ABC Company is a locally-owned business dedicated to promoting
                  and selling authentic Filipino products. Founded in 2022, the
                  company aims to showcase the rich cultural heritage of the
                  Philippines through its unique and high-quality products.
                </p>
              </div>

              <div>
                <span className="font-bold">Mission</span>
                <p>
                  ABC Company's mission is to provide its customers with an
                  immersive experience of local Filipino culture through its
                  carefully curated products. The company strives to support
                  local artisans and farmers, while promoting sustainable and
                  responsible business practices.
                </p>
              </div>

              <div>
                <span className="font-bold">Products</span>
                <p>
                  The company offers a wide range of products, including
                  handmade crafts, local delicacies, and traditional clothing.
                  Its products are sourced from local communities, ensuring that
                  customers receive authentic and high-quality items.
                </p>
              </div>

              <div>
                <span className="font-bold">Goals</span>
                <p>
                  ABC Company's short-term goal is to establish a strong
                  presence in the local market, while its long-term goal is to
                  expand its reach to international markets. The company aims to
                  become a leading promoter of Filipino culture and products,
                  while creating economic opportunities for local communities.
                  This revised introduction maintains a professional tone and
                  provides a clear overview of ABC Company's mission, products,
                  and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
