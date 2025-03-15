"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Function to scroll to section smoothly
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu
    }
  };

  // Function to update route and scroll
  const handleNavigation = (id: string) => {
    const newUrl = `/#${id}`;

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

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md md:shadow-lg px-6 md:px-10 py-3 z-50">
      <div className="max-w-screen flex justify-between items-center">
        <Link href="/" className="flex flex-row items-center gap-2">
          <Image
            src="/assets/logo/minhs_logo.webp"
            alt="MINHS Logo"
            width={60}
            height={60}
            priority
          />
          <div className="flex flex-col text-lg font-bold">
            <p>Munting Ilog Integrated</p>
            <p>National High School</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-20 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 w-full bg-white shadow-md flex flex-col py-4 md:hidden transition-all duration-200 ease-out transform origin-top ${
          isOpen
            ? "scale-y-100 opacity-100 pointer-events-auto"
            : "scale-y-95 opacity-0 pointer-events-none"
        }`}
        style={{ top: "100%", zIndex: -1 }}
      >
        <button
          onClick={() => handleNavigation("home")}
          className="px-4 py-3 text-lg text-start hover:bg-gray-200 cursor-pointer"
        >
          Home
        </button>
        <button
          onClick={() => handleNavigation("about")}
          className="px-4 py-3 text-lg text-start hover:bg-gray-200 cursor-pointer"
        >
          About
        </button>
        <button
          onClick={() => handleNavigation("team")}
          className="px-4 py-3 text-lg text-start hover:bg-gray-200 cursor-pointer"
        >
          Our Team
        </button>
        <button
          onClick={() => handleNavigation("resources")}
          className="px-4 py-3 text-lg text-start hover:bg-gray-200 cursor-pointer"
        >
          Resources
        </button>
      </div>
    </header>
  );
}
