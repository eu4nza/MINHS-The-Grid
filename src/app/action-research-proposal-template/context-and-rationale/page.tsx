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
            <Link href="/proposal/1">
              <Button
                variant="default"
                className="bg-white hover:bg-black/10 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Previous
              </Button>
            </Link>

            <Select
              defaultValue="1"
              onValueChange={(value) => {
                window.location.href = `/proposal/${value}`;
              }}
            >
              <SelectTrigger className="bg-white hover:bg-black/10 transition-all duration-300 cursor-pointer shadow-xs border-0">
                <SelectValue placeholder="Page" />
              </SelectTrigger>
              <SelectContent className="bg-white border-0 cursor-pointer">
                <SelectItem
                  value="1"
                  className="hover:bg-black/10 transition-all duration-300 cursor-pointer"
                >
                  I. Context and Rationale
                </SelectItem>
                <SelectItem
                  value="2"
                  className="hover:bg-black/10 transition-all duration-300 cursor-pointer"
                >
                  II. Action Research Questions
                </SelectItem>
                <SelectItem
                  value="3"
                  className="hover:bg-black/10 transition-all duration-300 cursor-pointer"
                >
                  Page 3
                </SelectItem>
                {/* Add more pages as needed */}
              </SelectContent>
            </Select>

            <Link href="/proposal/3">
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
            <p>
              Reading comprehension is a fundamental skill that influences
              students' success across all subject areas. In recent quarterly
              assessments at XYZ Elementary School, 45% of Grade 5 students
              scored below the proficiency level in reading comprehension.
              Informal interviews with teachers revealed that students struggle
              with inferring meaning, summarizing, and identifying main ideas in
              texts.
            </p>
            <p>
              Traditional instructional methods such as silent reading and
              teacher-centered questioning seem insufficient in addressing these
              comprehension gaps. Given this recurring concern, it is imperative
              to explore alternative instructional strategies that actively
              engage learners.
            </p>
            <p>
              Reciprocal Teaching is a collaborative learning strategy where
              students take turns assuming the role of teacher in small group
              reading sessions. The strategy focuses on four key reading
              strategies: predicting, questioning, clarifying, and summarizing.
              This approach has been recognized to improve comprehension and
              critical thinking in students.
            </p>
            <p>
              This action research seeks to determine whether the implementation
              of Reciprocal Teaching can significantly improve the reading
              comprehension skills of Grade 5 students.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
