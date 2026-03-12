// components/Navbar.js

"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaProjectDiagram,
  FaUser,
  FaEnvelope,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const currentTheme = theme === "system" ? resolvedTheme : theme;

  // Mount effect - only render after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Smooth scroll to hash on route change
  useEffect(() => {
    if (!mounted) return;
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [mounted, pathname]);

  if (!mounted) {
    // Show skeleton during hydration
    return (
      <nav className="sticky top-0 z-50 p-4 border-b shadow-lg bg-background/90 backdrop-blur-md border-border">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="w-32 h-6 rounded bg-muted animate-pulse" />
          <div className="w-8 h-8 rounded bg-muted animate-pulse md:hidden" />
          <div className="items-center hidden space-x-6 md:flex" />
        </div>
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 z-50 border-b shadow-lg bg-background/90 backdrop-blur-md border-border">
      <div className="max-w-6xl px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/#top"
            className="text-2xl font-bold transition-colors duration-200 text-primary hover:opacity-90"
            onClick={() => setIsOpen(false)}
          >
            Binyam Tagel
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 transition-colors rounded-lg text-muted-foreground hover:text-foreground md:hidden focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>

          {/* Desktop & Mobile Menu */}
          <div
            className={`${
              isOpen
                ? "fixed inset-0 z-40 top-20 left-0 right-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-xl py-20"
                : "hidden"
            } md:static md:inset-auto md:bg-transparent md:flex md:flex-row md:items-center md:gap-8 md:text-base md:py-0`}
          >
            <Link
              href="/#top"
              className="flex items-center gap-2 px-4 py-2 transition-all duration-200 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 md:hover:bg-transparent"
              onClick={() => setIsOpen(false)}
            >
              <FaHome className="w-5 h-5" /> Home
            </Link>
            <Link
              href="/projects"
              className="flex items-center gap-2 px-4 py-2 transition-all duration-200 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 md:hover:bg-transparent"
              onClick={() => setIsOpen(false)}
            >
              <FaProjectDiagram className="w-5 h-5" /> Projects
            </Link>
            <Link
              href="/#about"
              className="flex items-center gap-2 px-4 py-2 transition-all duration-200 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 md:hover:bg-transparent"
              onClick={() => setIsOpen(false)}
            >
              <FaUser className="w-5 h-5" /> About
            </Link>
            <Link
              href="/#contact"
              className="flex items-center gap-2 px-4 py-2 transition-all duration-200 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 md:hover:bg-transparent"
              onClick={() => setIsOpen(false)}
            >
              <FaEnvelope className="w-5 h-5" /> Contact
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={() =>
                setTheme(currentTheme === "dark" ? "light" : "dark")
              }
              className="p-3 transition-all duration-200 rounded-xl hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary ring-primary/20 group"
            >
              <span className="inline-block transition-all duration-500 group-hover:rotate-180">
                {currentTheme === "dark" ? (
                  <FaSun className="w-6 h-6 text-yellow-400" />
                ) : (
                  <FaMoon className="w-6 h-6 text-muted-foreground" />
                )}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/50 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </nav>
  );
}
