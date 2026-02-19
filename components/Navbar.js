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
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
      <nav className="sticky top-0 z-50 p-4 bg-gray-800 shadow-lg">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="w-32 h-6 bg-gray-700 rounded animate-pulse" />
          <div className="w-8 h-8 bg-gray-700 rounded animate-pulse md:hidden" />
          <div className="items-center hidden space-x-6 md:flex" />
        </div>
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 z-50 border-b shadow-lg bg-gray-800/90 backdrop-blur-md border-gray-700/50">
      <div className="max-w-6xl px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/#top"
            className="text-2xl font-bold text-indigo-400 transition-colors duration-200 hover:text-indigo-300"
            onClick={() => setIsOpen(false)}
          >
            Binyam Tagel
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-300 transition-colors rounded-lg hover:text-white md:hidden focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>

          {/* Desktop & Mobile Menu */}
          <div
            className={`${
              isOpen
                ? "fixed inset-0 z-40 top-20 left-0 right-0 bg-gray-900/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-xl py-20"
                : "hidden"
            } md:static md:inset-auto md:bg-transparent md:flex md:flex-row md:items-center md:gap-8 md:text-base md:py-0`}
          >
            <Link
              href="/#top"
              className="flex items-center gap-2 px-4 py-2 text-gray-300 transition-all duration-200 rounded-lg hover:text-indigo-400 hover:bg-gray-700/50 md:hover:bg-transparent"
              onClick={() => setIsOpen(false)}
            >
              <FaHome className="w-5 h-5" /> Home
            </Link>
            <Link
              href="/projects"
              className="flex items-center gap-2 px-4 py-2 text-gray-300 transition-all duration-200 rounded-lg hover:text-indigo-400 hover:bg-gray-700/50 md:hover:bg-transparent"
              onClick={() => setIsOpen(false)}
            >
              <FaProjectDiagram className="w-5 h-5" /> Projects
            </Link>
            <Link
              href="/#about"
              className="flex items-center gap-2 px-4 py-2 text-gray-300 transition-all duration-200 rounded-lg hover:text-indigo-400 hover:bg-gray-700/50 md:hover:bg-transparent"
              onClick={() => setIsOpen(false)}
            >
              <FaUser className="w-5 h-5" /> About
            </Link>
            <Link
              href="/#contact"
              className="flex items-center gap-2 px-4 py-2 text-gray-300 transition-all duration-200 rounded-lg hover:text-indigo-400 hover:bg-gray-700/50 md:hover:bg-transparent"
              onClick={() => setIsOpen(false)}
            >
              <FaEnvelope className="w-5 h-5" /> Contact
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-3 transition-all duration-200 rounded-xl hover:bg-gray-700/50 dark:hover:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 ring-indigo-500/20 group"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <span className="inline-block transition-all duration-500 group-hover:rotate-180">
                {theme === "dark" ? (
                  <FaSun className="w-6 h-6 text-yellow-400" />
                ) : (
                  <FaMoon className="w-6 h-6 text-gray-200" />
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