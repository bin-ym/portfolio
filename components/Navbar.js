"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaHome, FaProjectDiagram, FaUser, FaEnvelope, FaSun, FaMoon, FaBars, FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaCode, FaPaintBrush, FaSearch, FaPalette, FaDesktop, FaUsers, FaRocket, FaTag, FaFileDownload } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  }, [mounted, pathname]);

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 p-4 bg-gray-800 shadow-lg">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <Link href="/#top" className="text-2xl font-bold text-indigo-400">
          Binyam Tagel
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 md:hidden focus:outline-none"
        >
          <FaBars />
        </button>

        {/* Links */}
        <div className={`flex items-center space-x-6 md:flex md:space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
          <Link href="/#top" className="flex items-center text-gray-300 transition hover:text-indigo-400">
            <FaHome className="mr-2" /> Home
          </Link>
          <Link href="/projects" className="flex items-center text-gray-300 transition hover:text-indigo-400">
            <FaProjectDiagram className="mr-2" /> Projects
          </Link>
          <Link href="/#about" className="flex items-center text-gray-300 transition hover:text-indigo-400">
            <FaUser className="mr-2" /> About
          </Link>
          <Link href="/#contact" className="flex items-center text-gray-300 transition hover:text-indigo-400">
            <FaEnvelope className="mr-2" /> Contact
          </Link>

          {/* Dark/Light Mode Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-gray-300 transition bg-gray-700 rounded-full hover:bg-gray-600"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export function SocialLinks() {
  return (
    <div className="flex justify-center gap-4 mt-8">
      {[
        { name: "Email", link: "mailto:binyam.tagel@gmail.com", icon: <FaEnvelope /> },
        { name: "Instagram", link: "https://instagram.com/bin_ym", icon: <FaInstagram /> },
        { name: "Facebook", link: "https://web.facebook.com/guto.bini/", icon: <FaFacebook /> },
        { name: "LinkedIn", link: "https://www.linkedin.com/in/binyam-tagel/", icon: <FaLinkedin /> },
        { name: "GitHub", link: "https://github.com/bin-ym", icon: <FaGithub /> },
      ].map((social) => (
        <Link
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-600 dark:text-gray-400 dark:hover:text-indigo-400 hover:text-indigo-600"
          aria-label={`Visit ${social.name}`}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="top" className="relative w-full h-[60vh] flex items-center justify-center bg-gray-800 text-white">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-semibold md:text-6xl">Welcome to My Portfolio</h1>
        <p className="mb-8 text-lg">Crafting exceptional experiences with code and creativity.</p>
        <Image
          src="/images/my.jpg"
          alt="Binyam Tagel"
          width={400}
          height={400}
          className="mx-auto rounded-full shadow-lg"
          layout="intrinsic"
          priority
        />
      </div>
    </section>
  );
}

export function ServicesSection() {
  const services = [
    {
      icon: <FaPalette className="text-indigo-600 dark:text-indigo-400" />,
      title: "Creative Design",
      desc: "Leveraging modern tools to craft visually appealing and functional designs.",
    },
    {
      icon: <FaCode className="text-indigo-600 dark:text-indigo-400" />,
      title: "Clean Code",
      desc: "Writing well-structured, maintainable, and efficient code.",
    },
    {
      icon: <FaDesktop className="text-indigo-600 dark:text-indigo-400" />,
      title: "User Interface",
      desc: "Creating intuitive, user-friendly designs with a focus on usability.",
    },
    {
      icon: <FaUsers className="text-indigo-600 dark:text-indigo-400" />,
      title: "User Experience",
      desc: "Understanding user needs to build enjoyable and efficient interfaces.",
    },
    {
      icon: <FaRocket className="text-indigo-600 dark:text-indigo-400" />,
      title: "Fast Development",
      desc: "Delivering projects quickly without compromising quality.",
    },
    {
      icon: <FaTag className="text-indigo-600 dark:text-indigo-400" />,
      title: "Branding",
      desc: "Building consistent branding through design and functionality.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="mb-8 text-3xl font-semibold text-indigo-600 dark:text-indigo-400">What I Can Do</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 transition transform bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-xl hover:scale-105"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  const documents = [
    { name: "My CV", path: "/documents/Binyam_Tagel_CV.pdf" },
    { name: "Certificate of Completion - Dereja", path: "/documents/Dereja_certificate.pdf" }, // Updated filename
    { name: "Recommendation Letter", path: "/documents/Recommendation_letter.pdf" }, // Updated filename
  ];

  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-semibold text-center text-indigo-600 dark:text-indigo-400">
          Who Am I
        </h2>
        <div className="flex flex-col items-center gap-8 md:flex-row">
          {/* Image */}
          <div className="w-full md:w-1/3">
            <Image
              src="/images/ym.jpg"
              alt="Binyam Tagel"
              width={300}
              height={300}
              className="mx-auto rounded-full shadow-lg"
              priority
            />
          </div>
          {/* Bio and Documents
          <div className="w-full text-center md:w-2/3 md:text-left">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              Binyam Tagel
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              I’m a passionate web developer with a focus on creating user-friendly and visually appealing applications. With expertise in modern technologies like React, Next.js, and Tailwind CSS, I strive to build projects that are both functional and aesthetically pleasing. I’m always eager to learn new skills and take on challenging projects to grow as a developer.
            </p>
            <h4 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
              My Documents
            </h4>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              {documents.map((doc) => (
                <a
                  key={doc.name}
                  href={doc.path}
                  download
                  className="inline-flex items-center px-4 py-2 font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                >
                  <FaFileDownload className="mr-2" /> {doc.name}
                </a>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}