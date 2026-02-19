// app/page.js

import Link from "next/link";
import Image from "next/image";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";     // Fixed: default import
import ContactSection from "@/components/ContactSection";

// Optional: Comment out HeroSection until you create the file
// import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      {/* Built-in Hero Section (your current one) */}
      <section id="top" className="py-20 text-center bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-between max-w-6xl px-4 mx-auto md:flex-row">
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-2xl text-gray-600 dark:text-gray-400">
              Hello, My Name Is
            </h2>
            <h1 className="mt-2 text-5xl font-extrabold text-indigo-600 dark:text-indigo-400">
              Binyam Tagel
            </h1>
            <p className="max-w-md mt-4 text-xl text-gray-600 dark:text-gray-300">
              Computer Science Grad | Full-Stack Developer
            </p>
            <Link
              href="/projects"
              className="inline-block px-8 py-4 mt-10 text-lg font-semibold text-white transition bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700"
            >
              View My Projects
            </Link>
          </div>
          <div className="flex justify-center mt-12 md:mt-0 md:w-1/2">
            <Image
              src="/images/my.jpg"
              alt="Binyam Tagel"
              width={450}
              height={450}
              className="object-cover shadow-2xl rounded-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Me */}
      <AboutSection />

      {/* Services */}
      <ServicesSection />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-200 dark:bg-gray-800">
        <p className="text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Binyam Tagel. All rights reserved.
        </p>
      </footer>
    </>
  );
}