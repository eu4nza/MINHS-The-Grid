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
  const sections = [
    {
      label: "ABM",
      dropdown: [
        {
          label: "Abraham et al.pdf",
          href: "/sample-research/students/abm/Abraham_et_al.pdf",
        },
        {
          label: "Delica et al.pdf",
          href: "/sample-research/students/abm/Delica_et_al.pdf",
        },
        {
          label: "Ripalda, et al.pdf",
          href: "/sample-research/students/abm/Ripalda,_et_al.pdf",
        },
      ],
    },
    {
      label: "HUMSS1",
      dropdown: [
        {
          label: "Baldon et al.pdf",
          href: "/sample-research/students/humss1/Baldon_et_al.pdf",
        },
        {
          label: "Barrameda et al.pdf",
          href: "/sample-research/students/humss1/Barrameda_et_al.pdf",
        },
        {
          label: "Calibozo, et al.pdf",
          href: "/sample-research/students/humss1/Calibozo,_et_al.pdf",
        },
        {
          label: "Del Mundo et.al.pdf",
          href: "/sample-research/students/humss1/Del_Mundo_et.al.pdf",
        },
      ],
    },
    {
      label: "HUMSS3",
      dropdown: [
        {
          label: "Paglinawan, et al.docx",
          href: "/sample-research/students/humss3/Paglinawan,_et_al.docx",
        },
        {
          label: "Paaradero, et al.pdf",
          href: "/sample-research/students/humss3/Paradero,_et_al.pdf",
        },
        {
          label: "Vertudez, et al.pdf",
          href: "/sample-research/students/humss3/Vertudez,_et_al.pdf",
        },
      ],
    },
    {
      label: "STEM",
      dropdown: [
        {
          label: "Cerbito, et al.pdf",
          href: "/sample-research/students/stem/Cerbito,_et_al.pdf",
        },
        {
          label: "De guia, et al.pdf",
          href: "/sample-research/students/stem/De guia,_et_al.pdf",
        },
        {
          label: "Enriquez, et al.pd",
          href: "/sample-research/students/stem/Enriquez,_et_al.pdf",
        },
        {
          label: "Paglinawan, et al.pdf",
          href: "/sample-research/students/stem/Paglinawan,_et_al.pdf",
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
          <div>
            {sections.map((section) => {
              const [isDropdownOpen, setDropdownOpen] = useState(false);

              return (
                <div key={section.label}>
                  {/* Updated layout: flex on parent to align label and chevron */}
                  <div
                    className="flex w-max items-center cursor-pointer px-2 py-1 rounded-xl hover:bg-gray-200"
                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                  >
                    <p className="flex-1">{section.label}</p>
                    <motion.div
                      animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </div>

                  {/* Smooth open/close animation for dropdown */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: isDropdownOpen ? 1 : 0,
                      height: isDropdownOpen ? "auto" : 0,
                    }}
                    exit={{ opacity: 0, height: 0 }}
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
