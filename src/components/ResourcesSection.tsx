"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface DropdownItem {
  label: string;
  href?: string;
  subItems?: DropdownItem[];
}

interface DropdownMenuProps {
  title: string;
  items: DropdownItem[];
  isOpen: boolean;
  setOpenMenu: (menu: string | null) => void;
}

const NestedMenu: React.FC<{
  items: DropdownItem[];
  level?: number;
}> = ({ items, level = 0 }) => {
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  return (
    <div className={`pl-${level * 4}`}>
      {items.map((item, index) => (
        <div key={index}>
          {item.subItems ? (
            <>
              <button
                onClick={() =>
                  setOpenSubmenu(openSubmenu === index ? null : index)
                }
                className="w-full text-left px-6 py-3 hover:bg-gray-200 flex justify-between items-center rounded-2xl cursor-pointer"
              >
                {item.label}
                <motion.span
                  animate={{ rotate: openSubmenu === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} />
                </motion.span>
              </button>
              <AnimatePresence>
                {openSubmenu === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="ml-4"
                  >
                    <NestedMenu items={item.subItems} level={level + 1} />
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <a
              href={item.href || "#"}
              target={item.href?.endsWith(".docx") ? "_blank" : "_self"}
              rel={item.href?.endsWith(".docx") ? "noopener noreferrer" : ""}
              className="block px-6 py-3 hover:bg-gray-200 rounded-2xl"
            >
              {item.label}
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  title,
  items,
  isOpen,
  setOpenMenu,
}) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setOpenMenu]);

  return (
    <div ref={menuRef}>
      <button
        onClick={() => setOpenMenu(isOpen ? null : title)}
        className="flex justify-center items-center gap-2 w-[300px] px-6 py-6 xl:px-12 xl:py-12 text-xl font-bold bg-white rounded-2xl cursor-pointer hover:bg-gray-200 shadow-md text-center"
      >
        {title}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-2 w-[300px] overflow-auto bg-white shadow-xl border rounded-2xl z-50 p-4"
          >
            <NestedMenu items={items} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ResourcesSection() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <section
      id="resources"
      className={`h-screen bg-cover bg-center transition-all ${
        openMenu === "Sample Research" ? "pb-40" : ""
      }`}
      style={{
        backgroundImage: "url('/assets/background/variant1_bg.webp')",
        backgroundColor: "rgba(0, 0, 0, 0.50)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="container mx-auto">
        {/* Title stays at the top */}
        <p className="text-3xl text-white font-bold text-center xl:text-right xl:text-6xl pt-10 xl:pt-20">
          Research Guides and Documents
        </p>
      </div>

      {/* Centered dropdowns wrapper */}
      <div className="flex justify-center items-center w-full h-[calc(100vh-10rem)]">
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-15 justify-center items-center">
          <DropdownMenu
            title="Teacher's Guide"
            items={[
              {
                label: "Basic",
                subItems: [
                  {
                    label: "Research Proposal",
                    href: "/teacher-guide/basic/research-proposal",
                  },
                  {
                    label: "Full Paper",
                    href: "/teacher-guide/basic/full-paper",
                  },
                ],
              },
              {
                label: "Action",
                subItems: [
                  {
                    label: "Research Proposal",
                    href: "/teacher-guide/action/research-proposal",
                  },
                  {
                    label: "Full Paper",
                    href: "/teacher-guide/action/full-paper",
                  },
                ],
              },
            ]}
            isOpen={openMenu === "Teacher's Guide"}
            setOpenMenu={setOpenMenu}
          />
          <DropdownMenu
            title="Student's Guide"
            items={[
              {
                label: "Qualitative",
                href: "/student-guide/qualitative-research",
              },
              {
                label: "Quantitative",
                href: "/student-guide/quantitative-research",
              },
              { label: "Business Plan", href: "/student-guide/business-plan" },
            ]}
            isOpen={openMenu === "Student's Guide"}
            setOpenMenu={setOpenMenu}
          />
          <DropdownMenu
            title="Templates"
            items={[
              {
                label: "Basic Research Template (docx)",
                href: "/templates/Basic_Research_Template.docx",
              },
              {
                label: "Business Plan Template (docx)",
                href: "/templates/Business_Plan_Template.docx",
              },
            ]}
            isOpen={openMenu === "Templates"}
            setOpenMenu={setOpenMenu}
          />
          <DropdownMenu
            title="Sample Research"
            items={[
              {
                label: "Teachers",
                href: "/sample-research/teachers",
              },
              {
                label: "Students",
                href: "/sample-research/students",
              },
            ]}
            isOpen={openMenu === "Sample Research"}
            setOpenMenu={setOpenMenu}
          />
        </div>
      </div>
    </section>
  );
}
