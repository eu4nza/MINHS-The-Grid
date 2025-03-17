"use client";
import Link from "next/link";
import Image from "next/image";
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

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  title,
  items,
  isOpen,
  setOpenMenu,
}) => {
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setOpenSubmenu(null);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setOpenMenu]);

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setOpenMenu(isOpen ? null : title)}
        className="flex justify-center items-center gap-2 w-54 py-6 md:w-70 md:py-12 text-xl font-bold bg-white rounded-2xl cursor-pointer hover:bg-gray-200 shadow-md text-center"
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
            className="absolute left-0 mt-2 w-54 md:w-70 bg-white shadow-lg border rounded-2xl z-50"
          >
            {items.map((item, index) => (
              <div key={index} className="relative">
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
                          className="mt-1 bg-white shadow-md rounded-2xl"
                        >
                          {item.subItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href || "#"}
                              className="block px-6 py-3 hover:bg-gray-200 rounded-2xl"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className="block px-6 py-3 hover:bg-gray-200 rounded-2xl"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function home() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  return (
    <main className="w-full h-full">
      {/* Home Section */}
      <section
        id="home"
        className="w-full h-screen bg-cover bg-center md:bg-cover md:bg-center"
        style={{
          backgroundImage: "url('/assets/background/variant1_bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pt-20 px-6 md:pt-32 md:px-20">
          <p className="text-5xl md:text-8xl text-white font-bold">The GRID</p>
          <p className="text-xl md:text-3xl text-black ">
            Guidelines for Research and Investigative Data
          </p>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-full h-screen bg-cover bg-center md:bg-cover md:bg-center"
        style={{
          backgroundImage: "url('/assets/background/variant2_bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="pt-20 px-6 md:pt-32 md:px-20 w-full flex justify-end">
          <div className="max-w-2xl">
            <p className="text-5xl md:text-8xl text-white font-bold">
              The GRID
            </p>
            <p className="text-xl md:text-3xl text-black">
              Guidelines for Research and Investigative Data
            </p>
            <p className="text-base md:text-xl text-white text-justify pt-4">
              Developed in 2023, GRID is a structured framework designed to
              assist students and teachers in conducting effective research. It
              provides essential principles to ensure accuracy, credibility, and
              ethical integrity as aligned with the mandate of the Department of
              Education in strengthening research and innovation among academic
              institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="w-full h-screen bg-cover bg-center md:bg-cover md:bg-center"
        style={{
          backgroundImage: "url('/assets/background/variant1_bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(255, 255, 255, 0.50)",
        }}
      >
        <p className="pt-20 px-6 text-3xl md:pt-32 md:px-20 md:text-6xl text-black font-bold">
          The Project Proponents
        </p>
        <div className="gap-10 py-10 md:gap-40 md:pt-30 flex flex-col md:flex-row justify-center">
          <div className="gap-5 md:gap-10 flex flex-col items-center">
            <div className="w-[150px] md:w-[250px]">
              <Image
                src="/assets/team/Christianne_Roie_A._Carabeo.webp"
                alt="Christianne Roie A. Carabeo"
                width={250}
                height={250}
                className="w-full h-auto"
              />
            </div>
            <p className="text-base md:text-lg bg-black px-5 py-2 text-white font-bold text-center">
              Christianne Roie A. Carabeo, MACDDS
              <br />
              Research Coordinator
            </p>
          </div>
          <div className="gap-5 md:gap-10 flex flex-col items-center">
            <div className="w-[150px] md:w-[250px]">
              <Image
                src="/assets/team/Ivy_Filipina_R._Toledo.webp"
                alt="Christianne Roie A. Carabeo"
                width={250}
                height={250}
                className="w-full h-auto"
              />
            </div>
            <p className="text-base md:text-lg bg-black px-5 py-2 text-white font-bold text-center">
              Ivy Filipina R. Toledo, MBA
              <br />
              Entrepreneurship Coordinator
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section
        id="resources"
        className="w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/background/variant1_bg.webp')",
          backgroundColor: "rgba(0, 0, 0, 0.50)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="pt-20 px-6 md:pt-32 md:px-20">
          <p className="text-3xl flex justify-center md:text-6xl md:justify-end text-white font-bold">
            Research Guides and Documents
          </p>
        </div>

        <div className="flex flex-col pt-20 gap-20 md:flex-row md:pt-70 md:gap-20 justify-center items-center">
          <DropdownMenu
            title="Teacher's Guide"
            items={[
              {
                label: "Basic",
                subItems: [
                  {
                    label: "Proposal Template",
                    href: "/basic-research-proposal-template",
                  },
                  {
                    label: "Full Paper Template",
                    href: "/completed-basic-research-template",
                  },
                ],
              },
              {
                label: "Action",
                subItems: [
                  {
                    label: "Proposal Template",
                    href: "/action-research-proposal-template",
                  },
                  {
                    label: "Full Paper Template",
                    href: "/completed-action-research-template",
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
              { label: "Qualitative", href: "/qualitative" },
              { label: "Quantitative", href: "/quantitative" },
              { label: "Business Plan", href: "/business-plan" },
            ]}
            isOpen={openMenu === "Student's Guide"}
            setOpenMenu={setOpenMenu}
          />

          <button className="hover:bg-gray-200 w-54 py-6 md:w-70 md:py-12 text-xl font-bold bg-white rounded-2xl cursor-pointer shadow-md">
            <Link href="/documents">
              <p>Documents</p>
            </Link>
          </button>
        </div>
      </section>
    </main>
  );
}
