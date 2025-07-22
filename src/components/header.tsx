"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const [hoverStyle, setHoverStyle] = useState({});
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const didManualScrollRef = useRef(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      didManualScrollRef.current = true;
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      history.replaceState(null, "", "/");

      // Immediately hide header after scroll
      setTimeout(() => {
        setIsAtTop(false);
      }, 400);
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

  // Handle hash-based scroll on page load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.replace("#", "");
        const scrollToHashSection = () => {
          const section = document.getElementById(sectionId);
          if (section) {
            didManualScrollRef.current = true;
            const headerHeight =
              document.querySelector("header")?.clientHeight || 0;
            const sectionTop =
              section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: sectionTop - headerHeight,
              behavior: "smooth",
            });
            setIsAtTop(false);
          }
        };

        setTimeout(scrollToHashSection, 300);
      }
    }
  }, [pathname]);

  // Detect clicks outside the mobile menu
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

  // Show/hide header based on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show if at top
      if (currentScrollY <= 1) {
        setIsAtTop(true);
        lastScrollY = currentScrollY;
        return;
      }

      // Skip manual scroll once
      if (didManualScrollRef.current) {
        didManualScrollRef.current = false;
        setIsAtTop(false);
        lastScrollY = currentScrollY;
        return;
      }

      // Scroll direction logic
      if (currentScrollY < lastScrollY) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ New: Detect browser back/forward and restore header if at top
  useEffect(() => {
    const handlePopState = () => {
      setTimeout(() => {
        if (window.scrollY <= 1) {
          setIsAtTop(true);
          didManualScrollRef.current = false;
        }
      }, 100);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Our Team", id: "team" },
    { label: "Resources", id: "resources" },
  ];

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isAtTop ? 0 : -100 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full bg-white shadow-md px-4 xl:px-8 py-2 z-50"
    >
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo/minhs_logo.webp"
            alt="MINHS Logo"
            width={48}
            height={48}
            priority
            className="w-8 h-8 xl:w-12 xl:h-12"
          />
          <div className="flex flex-col font-bold text-xs xl:text-base leading-tight">
            <p>Munting Ilog Integrated</p>
            <p>National High School</p>
          </div>
        </Link>

        <div
          className="hidden xl:flex relative gap-4 text-base"
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
                className={`px-3 py-1.5 rounded-lg transition-colors relative z-10 cursor-pointer ${
                  dimOthers ? "text-black/50" : "text-black"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <motion.button
          className="xl:hidden"
          onClick={() => setIsOpen(!isOpen)}
          initial={{ scale: 1 }}
          animate={{ scale: isOpen ? 1.2 : 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </motion.button>
      </div>

      {/* Mobile Dropdown */}
      <div
        ref={menuRef}
        className={`absolute left-0 w-full bg-white shadow-xl ring-1 ring-gray-300 flex flex-col py-3 xl:hidden transition-all duration-200 ease-out transform origin-top ${
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
            className="px-4 py-2 text-base text-end"
          >
            {item.label}
          </button>
        ))}
      </div>
    </motion.header>
  );
}
