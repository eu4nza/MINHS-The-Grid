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
              <BreadcrumbPage>IV. Environmental Analysis</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Title + Pagination with mobile stacking */}
        <div className="flex flex-col md:flex-row justify-between items-start xl:items-center w-full gap-y-4 xl:gap-y-0 mb-5">
          {/* Title */}
          <p className="text-2xl xl:text-6xl font-bold">Business Plan</p>

          <div className="flex flex-row gap-2 sm:gap-4 w-auto">
            <Link href="/student-guide/business-plan/company-background">
              <Button
                variant="default"
                className="w-[100px] bg-white hover:bg-black/10 border border-black/5 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Previous
              </Button>
            </Link>

            <Select
              defaultValue="environmental-analysis"
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

            <Link href="/student-guide/business-plan/marketing-aspect">
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
            <div className="grid grid-cols-[2.5rem_auto] gap-x-5 text-2xl xl:text-4xl font-bold">
              <p className="text-right">IV.</p>
              <p>Environmental Analysis</p>
            </div>

            <div className="py-6 flex flex-col gap-6">
              <p>
                Environmental analysis in business planning is a systematic
                evaluation of external and internal factors that can impact an
                organization's operations, strategies, and performance. It helps
                businesses identify opportunities, threats, and trends that can
                inform strategic decisions.
              </p>

              <div>
                <span className="font-bold">
                  Key Components of Environmental Analysis
                </span>
                <p>
                  <span className="font-bold">
                    I. Macro-Environmental Factors:
                  </span>
                </p>
                <ul className="list-decimal list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">Political Factors:</span>{" "}
                    government policies, regulations, and stability.
                  </li>
                  <li>
                    <span className="font-bold">Economic Factors:</span>{" "}
                    inflation rates, exchange rates, and economic growth.
                  </li>
                  <li>
                    <span className="font-bold">
                      Social and Cultural Factors:
                    </span>{" "}
                    demographic changes, cultural trends, and lifestyle shifts.
                  </li>
                  <li>
                    <span className="font-bold">Technological Factors:</span>{" "}
                    innovations, technological advancements, and R&D activity.
                  </li>
                  <li>
                    <span className="font-bold">Environmental Factors:</span>{" "}
                    climate change, ecological concerns, and sustainability
                    efforts.
                  </li>
                  <li>
                    <span className="font-bold">Legal Factors:</span> employment
                    laws, consumer protection laws, and health and safety
                    regulations.
                  </li>
                </ul>

                <p>
                  <span className="font-bold">
                    II. Micro-Environmental Factors:
                  </span>
                </p>
                <ul className="list-decimal list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">Competitors:</span> market
                    competition and rivalries.
                  </li>
                  <li>
                    <span className="font-bold">Customers:</span> consumer
                    behavior, preferences, and needs.
                  </li>
                  <li>
                    <span className="font-bold">Suppliers:</span> supply chain
                    management and logistics.
                  </li>
                </ul>
              </div>

              <div>
                <span className="font-bold">
                  Steps to Conduct Environmental Analysis
                </span>
                <ul className="list-decimal list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">Define Objectives:</span>{" "}
                    Determine the purpose and scope of the analysis.
                  </li>
                  <li>
                    <span className="font-bold">Gather Data:</span> Collect
                    relevant information on macro and micro-environmental
                    factors.
                  </li>
                  <li>
                    <span className="font-bold">Analyze Data:</span> Use tools
                    like SWOT analysis, PESTLE analysis, and competitive
                    analysis to identify opportunities, threats, strengths, and
                    weaknesses.
                  </li>
                  <li>
                    <span className="font-bold">
                      Identify Opportunities and Threats:
                    </span>{" "}
                    Determine potential opportunities and threats based on the
                    analysis.
                  </li>
                  <li>
                    <span className="font-bold">Develop Strategies:</span>{" "}
                    Create strategies to capitalize on opportunities and
                    mitigate threats.
                  </li>
                </ul>
              </div>

              <div>
                <span className="font-bold">Tools and Techniques</span>
                <ul className="list-decimal list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">SWOT Analysis:</span> Identifies
                    strengths, weaknesses, opportunities, and threats.
                  </li>
                  <li>
                    <span className="font-bold">PESTLE Analysis:</span> Examines
                    political, economic, social, technological, legal, and
                    environmental factors.
                  </li>
                  <li>
                    <span className="font-bold">
                      Competitive Position Matrix (CPM):
                    </span>{" "}
                    Evaluates competitive dynamics.
                  </li>
                  <li>
                    <span className="font-bold">
                      Environmental Threat and Opportunity Profile (ETOP):
                    </span>{" "}
                    Systematically lists and evaluates environmental factors
                    based on potential impact and probability of occurrence.
                  </li>
                </ul>
              </div>

              <div>
                <span className="font-bold">Environmental Analysis</span>
                <p>
                  <span className="font-bold">Macro-Environmental Factors</span>
                </p>
                <p>
                  <span className="font-bold">Political Factors:</span> ABC
                  Company must comply with environmental regulations and
                  standards set by the government. For instance, the company has
                  implemented sustainable practices to reduce its environmental
                  footprint, adhering to local and global standards.
                </p>
                <p>
                  <span className="font-bold">Economic Factors:</span> The
                  company's investment in energy-efficient technologies and
                  waste management systems has led to significant cost savings
                  and improved profitability.
                </p>
                <p>
                  <span className="font-bold">
                    Social and Cultural Factors:
                  </span>{" "}
                  ABC Company has fostered a culture of sustainability within
                  the organization, engaging employees in environmental
                  initiatives and promoting eco-friendly products.
                </p>
                <p>
                  <span className="font-bold">Technological Factors:</span> The
                  company has leveraged technology to optimize production
                  processes, reduce waste, and develop sustainable products.
                </p>
                <p>
                  <span className="font-bold">Environmental Factors:</span> ABC
                  Company has implemented various initiatives to reduce its
                  environmental impact, including reducing greenhouse gas
                  emissions, water consumption, and waste generation.
                </p>
                <p>
                  <span className="font-bold">Legal Factors:</span> The company
                  ensures compliance with environmental laws and regulations,
                  conducting regular audits to maintain transparency and
                  accountability.
                </p>

                <p>
                  <span className="font-bold">Micro-Environmental Factors</span>
                </p>
                <p>
                  <span className="font-bold">Competitors:</span> ABC Company
                  operates in a competitive industry where sustainability is
                  becoming increasingly important. The company has
                  differentiated itself by prioritizing environmental
                  responsibility.
                </p>
                <p>
                  <span className="font-bold">Customers:</span> ABC Company's
                  customers are increasingly demanding eco-friendly products,
                  driving the company to innovate and expand its sustainable
                  product line.
                </p>
                <p>
                  <span className="font-bold">Suppliers:</span> The company has
                  collaborated with suppliers to ensure sustainability
                  throughout its supply chain, promoting responsible sourcing
                  and reducing environmental impact.
                </p>
              </div>

              <div>
                <span className="font-bold">SWOT Analysis</span>
                <ul className="list-decimal list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">Strengths:</span> ABC Company's
                    commitment to sustainability has enhanced its brand
                    reputation and stakeholder trust. The company's innovative
                    products and processes have improved efficiency and reduced
                    waste.
                  </li>
                  <li>
                    <span className="font-bold">Weaknesses:</span> The company
                    may face challenges in balancing sustainability initiatives
                    with profitability, requiring careful evaluation of return
                    on investment.
                  </li>
                  <li>
                    <span className="font-bold">Opportunities:</span> Growing
                    demand for eco-friendly products presents opportunities for
                    ABC Company to expand its market share and drive growth.
                  </li>
                  <li>
                    <span className="font-bold">Threats:</span> Regulatory
                    changes or environmental disasters could impact the
                    company's operations and reputation.
                  </li>
                </ul>
              </div>

              <div>
                <span className="font-bold">Life Cycle Analysis</span>
                <p>
                  ABC Company's life cycle analysis reveals opportunities for
                  improvement in:
                </p>
                <ul className="list-decimal list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">Raw Material Extraction:</span>{" "}
                    Sourcing sustainable materials and reducing waste.
                  </li>
                  <li>
                    <span className="font-bold">Production:</span> Optimizing
                    processes to minimize energy consumption and emissions.
                  </li>
                  <li>
                    <span className="font-bold">Use and Disposal:</span>{" "}
                    Designing products for recyclability and reusability.
                  </li>
                </ul>
              </div>

              <div>
                <span className="font-bold">
                  Adaptation and Mitigation Measures
                </span>
                <p>
                  ABC Company has implemented various measures to adapt to and
                  mitigate environmental impacts, including the following:
                </p>
                <ul className="list-decimal list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-bold">Clean Technologies:</span>{" "}
                    Investing in energy-efficient technologies and renewable
                    energy sources.
                  </li>
                  <li>
                    <span className="font-bold">Energy Efficiency:</span>{" "}
                    Optimizing production processes to reduce energy
                    consumption.
                  </li>
                  <li>
                    <span className="font-bold">Sustainability Training:</span>{" "}
                    Educating employees on sustainable practices and promoting a
                    culture of environmental responsibility.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
