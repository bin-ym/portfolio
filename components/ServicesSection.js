// components/ServicesSection.js

import { FaPalette, FaCode, FaDesktop, FaUsers, FaRocket, FaTag } from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    {
      icon: <FaPalette className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />,
      title: "Creative Design",
      desc: "Leveraging modern tools to craft visually appealing and functional designs.",
    },
    {
      icon: <FaCode className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />,
      title: "Clean Code",
      desc: "Writing well-structured, maintainable, and efficient code.",
    },
    {
      icon: <FaDesktop className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />,
      title: "User Interface",
      desc: "Creating intuitive, user-friendly designs with a focus on usability.",
    },
    {
      icon: <FaUsers className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />,
      title: "User Experience",
      desc: "Understanding user needs to build enjoyable and efficient interfaces.",
    },
    {
      icon: <FaRocket className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />,
      title: "Fast Development",
      desc: "Delivering projects quickly without compromising quality.",
    },
    {
      icon: <FaTag className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />,
      title: "Branding",
      desc: "Building consistent branding through design and functionality.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl px-4 mx-auto text-center">
        <h2 className="mb-12 text-4xl font-bold text-indigo-600 dark:text-indigo-400">
          What I Can Do
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 transition-all duration-300 transform bg-white shadow-lg dark:bg-gray-800 rounded-xl hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-white">
                {service.title}
              </h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}