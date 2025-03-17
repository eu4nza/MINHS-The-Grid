"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleNavigation = (id: string) => {
    const newUrl = `/#${id}`;
    setIsOpen(false);

    if (pathname !== "/") {
      router.push(newUrl);
    } else {
      window.history.pushState(null, "", newUrl);
      scrollToSection(id);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      scrollToSection(id);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
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
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md px-4 md:px-8 py-3 z-50">
      <div className="max-w-screen flex justify-between items-center">
        <Link href="/" className="flex flex-row items-center gap-2">
          <Image
            src="/assets/logo/minhs_logo.webp"
            alt="MINHS Logo"
            width={60}
            height={60}
            priority
            className="w-10 h-10 md:w-16 md:h-16"
          />
          <div className="flex flex-col font-bold text-sm md:text-lg">
            <p>Munting Ilog Integrated</p>
            <p>National High School</p>
          </div>
        </Link>

        {/* Desktop Buttons*/}
        <div className="hidden md:flex flex-row gap-6 ml-auto text-lg">
          <button
            onClick={() => handleNavigation("home")}
            className="hover:bg-gray-200 px-3 py-2 rounded transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation("about")}
            className="hover:bg-gray-200 px-3 py-2 rounded transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleNavigation("team")}
            className="hover:bg-gray-200 px-3 py-2 rounded transition-colors cursor-pointer"
          >
            Our Team
          </button>
          <button
            onClick={() => handleNavigation("resources")}
            className="hover:bg-gray-200 px-3 py-2 rounded transition-colors cursor-pointer"
          >
            Resources
          </button>
        </div>

        {/* Mobile Button*/}
        <motion.button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          initial={{ scale: 1 }}
          animate={{ scale: isOpen ? 1.2 : 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </motion.button>
      </div>

      {/* Mobile Buttons Menu*/}
      <div
        ref={menuRef}
        className={`absolute left-0 w-full bg-white shadow-xl ring-1 ring-gray-300 flex flex-col py-4 md:hidden transition-all duration-200 ease-out transform origin-top ${
          isOpen
            ? "scale-y-100 opacity-100 pointer-events-auto"
            : "scale-y-95 opacity-0 pointer-events-none"
        }`}
        style={{ top: "100%", zIndex: -1 }}
      >
        <button
          onClick={() => handleNavigation("home")}
          className="px-4 py-3 text-lg text-end"
        >
          Home
        </button>
        <button
          onClick={() => handleNavigation("about")}
          className="px-4 py-3 text-lg text-end"
        >
          About
        </button>
        <button
          onClick={() => handleNavigation("team")}
          className="px-4 py-3 text-lg text-end"
        >
          Our Team
        </button>
        <button
          onClick={() => handleNavigation("resources")}
          className="px-4 py-3 text-lg text-end"
        >
          Resources
        </button>
      </div>
    </header>
  );
}
