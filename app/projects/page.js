"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { isGithubLink } from "@/utils/linkType";
import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../../data/projects";

const itemsPerPage = 6;

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const paginatedProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="min-h-screen transition-colors duration-300 bg-background text-foreground">
      <div className="max-w-6xl px-4 py-10 mx-auto">
        <h2 className="mb-10 text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400">
          My Projects
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginatedProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/projects/${project.id}`} className="block">
                <div className="p-6 transition border rounded-lg shadow-md bg-card text-card-foreground border-border hover:shadow-xl">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={192}
                    className="object-cover w-full mb-4 rounded-md"
                    priority
                  />

                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {project.name}
                  </h3>

                  <p className="mb-4 text-muted-foreground">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-md dark:bg-indigo-900 dark:text-indigo-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-2 font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800"
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
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 text-white bg-indigo-600 rounded-lg disabled:opacity-50 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            Previous
          </button>

          <span className="py-2 text-lg font-semibold text-foreground">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-white bg-indigo-600 rounded-lg disabled:opacity-50 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
