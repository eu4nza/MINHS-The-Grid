"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Page() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const sections = [
    {
      label: "ABM",
      dropdown: [
        {
          label: "Breaking the Mold Young Entrepreneurs Startup Hurdles.pdf",
          href: "/sample-research/students/abm/breaking_the_mold_young_entrepreneurs_startup_hurdles.pdf",
        },
        {
          label: "Generational Shifts Family Business Strategies.pdf",
          href: "/sample-research/students/abm/generational_shifts_family_business_strategies.pdf",
        },
        {
          label: "Social Media Marketing Effect on SMEs.pdf",
          href: "/sample-research/students/abm/social_media_marketing_effect_on_smes.pdf",
        },
      ],
    },
    {
      label: "HUMSS1",
      dropdown: [
        {
          label: "Lifeline or Burden Senior Citizens Government Support.pdf",
          href: "/sample-research/students/humss1/lifeline_or_burden_senior_citizens_government_support.pdf",
        },
        {
          label: "Parenting in Digital Age Gen X vs Millennials.pdf",
          href: "/sample-research/students/humss1/parenting_in_digital_age_gen_x_vs_millennials.pdf",
        },
        {
          label:
            "Resilience in Single Parenting Challenges in Child Raising.pdf",
          href: "/sample-research/students/humss1/resilience_in_single_parenting_challenges_in_child_raising.pdf",
        },
        {
          label:
            "Voices from the Streets Police Reflections Young Offenders.pdf",
          href: "/sample-research/students/humss1/voices_from_the_streets_police_reflections_young_offenders.pdf",
        },
      ],
    },
    {
      label: "HUMSS3",
      dropdown: [
        {
          label: "Balancing Books and Work Experiences of Working Students.pdf",
          href: "/sample-research/students/humss3/balancing_books_and_work_experiences_of_working_students.pdf",
        },
        {
          label: "Beyond Survival Social Dynamics Youths in Foster Care.pdf",
          href: "/sample-research/students/humss3/beyond_survival_social_dynamics_youths_in_foster_care.pdf",
        },
        {
          label: "Conflict Resolution Gender Lens Womens Contributions.pdf",
          href: "/sample-research/students/humss3/conflict_resolution_gender_lens_womens_contributions.pdf",
        },
      ],
    },
    {
      label: "STEM",
      dropdown: [
        {
          label:
            "Ashes to Action Volcanic Impact Community Disaster Management.pdf",
          href: "/sample-research/students/stem/ashes_to_action_volcanic_impact_community_disaster_management.pdf",
        },
        {
          label: "Beyond the Counter Pharmacists Insights OTC Medication.pdf",
          href: "/sample-research/students/stem/beyond_the_counter_pharmacists_insights_otc_medication.pdf",
        },
        {
          label:
            "Navigating Digital Risks Technology Integration Factory Workers.pdf",
          href: "/sample-research/students/stem/navigating_digital_risks_technology_integration_factory_workers.pdf",
        },
        {
          label: "Parental Dilemma COVID-19 Boost Revaccination Attitudes.pdf",
          href: "/sample-research/students/stem/parental_dilemma_covid19_boost_revaccination_attitudes.pdf",
        },
      ],
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
              <BreadcrumbPage>Sample Research for Students</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <p className="flex justify-start text-left text-2xl lg:text-6xl font-bold mb-5">
          Sample Research for Students
        </p>

        <div className="text-base p-6 lg:text-lg lg:p-12 w-full bg-white text-black border-black/5 border-1 shadow-2xl inset-shadow-sm rounded-lg">
          <div className="flex flex-col gap-1">
            {sections.map((section) => {
              const isDropdownOpen = openDropdown === section.label;

              return (
                <div key={section.label}>
                  <div
                    className={`flex w-max items-center cursor-pointer px-2 py-1 rounded-xl transition-all duration-300 ${
                      isDropdownOpen ? "bg-gray-200" : "hover:bg-gray-200"
                    }`}
                    onClick={() =>
                      setOpenDropdown((prev) =>
                        prev === section.label ? null : section.label
                      )
                    }
                  >
                    <p className="flex-1">{section.label}</p>
                    <motion.div
                      animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: isDropdownOpen ? 1 : 0,
                      height: isDropdownOpen ? "auto" : 0,
                    }}
                    transition={{
                      opacity: { duration: 0.3, ease: "easeInOut" },
                      height: { duration: 0.3, ease: "easeInOut" },
                    }}
                    className="ml-4 overflow-hidden"
                  >
                    {isDropdownOpen &&
                      section.dropdown.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block hover:underline hover:text-blue-600 mb-1"
                        >
                          {link.label}
                        </a>
                      ))}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
