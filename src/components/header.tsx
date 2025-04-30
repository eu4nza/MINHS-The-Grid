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

  const [hoverStyle, setHoverStyle] = useState({});
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      history.replaceState(null, "", "/");
    }
  };

  const handleNavigation = (id: string) => {
    const isOnHomePage = pathname === "/";
    setIsOpen(false);

    if (!isOnHomePage) {
      router.push(`/#${id}`);
    } else {
      scrollToSection(id);
    }
  };

  const handleHover = (e: React.MouseEvent) => {
    const navRect = navRef.current?.getBoundingClientRect();
    const target = e.currentTarget as HTMLElement;
    const targetRect = target.getBoundingClientRect();

    if (navRect) {
      setHoverStyle({
        left: targetRect.left - navRect.left,
        top: targetRect.top - navRect.top,
        width: targetRect.width,
        height: targetRect.height,
        opacity: 1,
      });
    }
  };

  const handleMouseLeave = () => {
    setHoverStyle((prev) => ({ ...prev, opacity: 0 }));
    setHoveredIndex(null);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && pathname === "/") {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.replace("#", "");
        scrollToSection(sectionId);
      }
    }
  }, [pathname]);

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

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Our Team", id: "team" },
    { label: "Resources", id: "resources" },
  ];

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

        {/* Desktop Nav with Hover Background Effect */}
        <div
          className="hidden md:flex relative flex-row gap-6 ml-auto text-lg"
          ref={navRef}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="absolute bg-black/10 rounded-lg transition-all duration-300 pointer-events-none"
            style={{
              ...hoverStyle,
              position: "absolute",
              transitionProperty: "all",
            }}
          />
          {navItems.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const dimOthers = hoveredIndex !== null && !isHovered;

            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                onMouseEnter={(e) => {
                  handleHover(e);
                  setHoveredIndex(index);
                }}
                className={`px-3 py-2 rounded-lg transition-colors relative z-10 cursor-pointer ${
                  dimOthers ? "text-black/50" : "text-black"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`absolute left-0 w-full bg-white shadow-xl ring-1 ring-gray-300 flex flex-col py-4 md:hidden transition-all duration-200 ease-out transform origin-top ${
          isOpen
            ? "scale-y-100 opacity-100 pointer-events-auto"
            : "scale-y-95 opacity-0 pointer-events-none"
        }`}
        style={{ top: "100%", zIndex: -1 }}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigation(item.id)}
            className="px-4 py-3 text-lg text-end"
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}
