import type { Metadata } from "next";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Sample Research for Teachers",
};

export default function Page() {
  const sections = [
    {
      label: "Brain Based Learning Vocabulary Recall and Retention.pdf",
      href: "/sample-research/teachers/brain_based_learning_vocabulary_recall_and_retention.pdf",
    },
    {
      label: "ESL Experiences Vietnamese Chinese Students DepEd Cavite.pdf",
      href: "/sample-research/teachers/esl_experiences_vietnamese_chinese_students_deped_cavite.pdf",
    },
    {
      label: "Faculty Perception Online Teaching Competency.pdf",
      href: "/sample-research/teachers/faculty_perception_online_teaching_competency.pdf",
    },
    {
      label:
        "Literacy Strategies Across Curriculum Faculty Development Plan.pdf",
      href: "/sample-research/teachers/literacy_strategies_across_curriculum_faculty_development_plan.pdf",
    },
    {
      label: "Research Abstracts Region IV-A Mapping DepEd Research Agenda.pdf",
      href: "/sample-research/teachers/research_abstracts_region_iv_a_mapping_deped_research_agenda.pdf",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-white">
      <div className="flex flex-col py-24 lg:py-32 relative gap-2 justify-center items-start w-full text-black px-5 lg:px-10">
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
              <BreadcrumbPage>Sample Research for Teachers</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <p className="flex justify-start text-left text-2xl lg:text-6xl font-bold mb-5">
          Sample Research for Teachers
        </p>

        <div className="text-base p-6 lg:text-lg lg:p-12 w-full bg-white text-black border-black/5 border-1 shadow-2xl inset-shadow-sm rounded-lg">
          <div>
            {sections.map((section) => (
              <div key={section.label}>
                <a
                  href={section.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:underline hover:text-blue-600 mb-2"
                >
                  <p>{section.label}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
