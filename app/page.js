import Link from "next/link";
import Image from "next/image";
import ContactSection from "../components/ContactSection";
import {
  ServicesSection,
} from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import {
  FaPalette,
  FaCode,
  FaDesktop,
  FaUsers,
  FaRocket,
  FaTag,
} from "react-icons/fa"; // Add icons

export default function Home() {
  return (
    <div id="top">
      {/* Hero Section */}
      <section className="py-20 text-center bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-between max-w-6xl mx-auto md:flex-row">
          <div className="text-left md:w-1/2">
            <h2 className="text-2xl text-gray-600 dark:text-gray-400">
              Hello, My Name Is
            </h2>
            <h1 className="mt-2 text-5xl font-extrabold text-indigo-600 dark:text-indigo-400">
              Binyam Tagel
            </h1>
            <p className="max-w-md mt-4 text-xl text-gray-600 dark:text-gray-300">
              Computer Science Grad | Full-Stack Developer | Building cool stuff
              with code
            </p>
            <Link
              href="/projects"
              className="inline-block px-6 py-3 mt-8 font-semibold text-white transition bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700"
            >
              View My Projects
            </Link>
          </div>
          <div className="mt-8 md:w-1/2 md:mt-0">
            <Image
              src="/images/my.jpg"
              alt="Binyam Tagel"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <AboutSection />
      {/* What I Can Do Section */}
      <ServicesSection />
      {/* Let's Work Together Section */}
      <ContactSection />
    </div>
  );
}
