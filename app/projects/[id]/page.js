// app/projects/[id]/page.js

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaGlobe, FaArrowLeft } from "react-icons/fa";
import { isGithubLink } from "@/utils/linkType";
import { projects } from "../../../data/projects"; // Import projects data

export default function ProjectPage({ params }) {
  const { id } = params; // Extract project ID from params

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="py-20 text-center text-gray-800 dark:text-white">
          Project not found
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl px-4 py-10 mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold text-indigo-600 dark:text-indigo-400">
          {project.name}
        </h2>
        <Image
          src={project.image}
          alt={project.name}
          width={800}
          height={256}
          className="object-cover w-full h-64 mx-auto mb-6 rounded-md"
        />
        <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
          {project.desc}
        </p>
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-md dark:bg-indigo-900 dark:text-indigo-200"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-center gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            {isGithubLink(project.link) ? (
              <>
                <FaGithub className="mr-2" /> View on GitHub
              </>
            ) : (
              <>
                <FaGlobe className="mr-2" /> Visit Website
              </>
            )}
          </a>

          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 font-semibold text-indigo-600 border border-indigo-600 rounded-lg dark:text-indigo-400 dark:border-indigo-400 dark:hover:text-indigo-300 dark:hover:border-indigo-300 hover:text-indigo-800 hover:border-indigo-800"
          >
            <FaArrowLeft className="mr-2" /> Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

// Generate static paths for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
