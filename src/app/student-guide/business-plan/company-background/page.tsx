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
              <BreadcrumbPage>III. Company Background</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Title + Pagination with mobile stacking */}
        <div className="flex flex-col md:flex-row justify-between items-start xl:items-center w-full gap-y-4 xl:gap-y-0 mb-5">
          {/* Title */}
          <p className="text-2xl xl:text-6xl font-bold">Business Plan</p>

          <div className="flex flex-row gap-2 sm:gap-4 w-auto">
            <Link href="/student-guide/business-plan/introduction">
              <Button
                variant="default"
                className="w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Previous
              </Button>
            </Link>

            <Select
              defaultValue="company-background"
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

            <Link href="/student-guide/business-plan/environmental-analysis">
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
            <div className="grid grid-cols-[2rem_auto] gap-x-5 text-2xl xl:text-4xl font-bold">
              <p className="text-right">III.</p>
              <p>Company Background</p>
            </div>

            <div className="py-6 flex flex-col gap-6">
              <p>
                Company Background in a business plan provides an overview of
                the company's history, structure, and key elements that shape
                its identity and operations.
              </p>

              <div>
                <span className="font-bold">
                  Components of Company Background
                </span>
                <ul className="list-decimal list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">Company History:</span> Describe
                    the company's founding, milestones, and significant events.
                  </li>
                  <li>
                    <span className="font-bold">Mission Statement:</span>{" "}
                    Outline the company's purpose, values, and objectives.
                  </li>
                  <li>
                    <span className="font-bold">Ownership Structure:</span>{" "}
                    Specify the company's ownership type (e.g., sole
                    proprietorship, partnership, corporation) and key
                    stakeholders.
                  </li>
                  <li>
                    <span className="font-bold">Management Team:</span>{" "}
                    Introduce key team members, highlighting their experience,
                    skills, and roles.
                  </li>
                  <li>
                    <span className="font-bold">Location and Facilities:</span>{" "}
                    Describe the company's location, facilities, and equipment.
                  </li>
                  <li>
                    <span className="font-bold">Key Partnerships:</span> Mention
                    any significant partnerships, suppliers, or distributors.
                  </li>
                </ul>
              </div>

              <div>
                <span className="font-bold">
                  How to Write Company Background
                </span>
                <ul className="list-decimal list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">
                      Start with a brief overview:
                    </span>{" "}
                    Begin with a concise introduction to the company, including
                    its name, industry, and purpose.
                  </li>
                  <li>
                    <span className="font-bold">
                      Provide historical context:
                    </span>{" "}
                    Describe the company's history, including its founding,
                    major milestones, and significant events.
                  </li>
                  <li>
                    <span className="font-bold">
                      Outline the company's structure:
                    </span>{" "}
                    Specify the company's ownership structure, management team,
                    and key stakeholders.
                  </li>
                  <li>
                    <span className="font-bold">Highlight key strengths:</span>{" "}
                    Emphasize the company's unique strengths, such as its team,
                    products, or services.
                  </li>
                  <li>
                    <span className="font-bold">Keep it concise:</span> Ensure
                    the company background is brief and focused on essential
                    information.
                  </li>
                </ul>
              </div>

              <div>
                <span className="font-bold">Company Background</span>
                <p>
                  ABC Company was founded in 20xx with a mission to promote and
                  sell authentic Filipino products. The company is owned and
                  operated by its founder, [Name], who has a passion for
                  preserving local culture. The management team consists of
                  experienced professionals in marketing, sales, and product
                  development. The company is headquartered in [Location] and
                  has established partnerships with local artisans and
                  suppliers. This company background provides a solid foundation
                  for understanding ABC Company's identity and operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
