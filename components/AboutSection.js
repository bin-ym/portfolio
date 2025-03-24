// components/AboutSection.js
import Image from "next/image";
import { FaFileDownload } from "react-icons/fa";

export default function AboutSection() {
  const documents = [
    { name: "My CV", path: "/documents/Binyam_Tagel_CV.pdf" },
    { name: "Certificate of Completion - Dereja", path: "/documents/Dereja_certificate.pdf" }, // Updated filename
    { name: "Recommendation Letter", path: "/documents/Recommendation_letter.pdf" }, // Updated filename
  ];

  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="mb-8 text-3xl font-semibold text-center text-indigo-600 dark:text-indigo-400">
          Who Am I
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
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
          {/* Bio and Documents */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              Binyam Tagel
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              I’m a passionate web developer with a focus on creating user-friendly and visually appealing applications. With expertise in modern technologies like React, Next.js, and Tailwind CSS, I strive to build projects that are both functional and aesthetically pleasing. I’m always eager to learn new skills and take on challenging projects to grow as a developer.
            </p>
            <h4 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
              My Documents
            </h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}