// components/ContactSection.js

"use client";

import { useState } from "react";
import { FaEnvelope, FaTimes } from "react-icons/fa";
import { SocialLinks } from "@/components/SocialLinks";

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, message } = formData;
    const subject = encodeURIComponent(`Message from ${name} via Portfolio`);
    const body = encodeURIComponent(message); // Only include the message in the body
    window.location.href = `mailto:binyam.tagel@gmail.com?subject=${subject}&body=${body}`;
    setIsModalOpen(false); // Close the modal after submission
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <section
      id="contact"
      className="py-20 text-center bg-background text-foreground"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-4 text-4xl font-bold text-indigo-600 dark:text-indigo-400">
          Let’s Work Together on Your Next Project
        </h2>
        <p className="mb-8 text-muted-foreground">
          Collaboration is key! Let’s join forces and build something amazing.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-block px-6 py-3 font-semibold text-white transition bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700"
        >
          Contact Me
        </button>
        <SocialLinks />

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-full max-w-md p-6 border rounded-lg shadow-lg bg-card text-card-foreground border-border">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
              >
                <FaTimes />
              </button>
              <h3 className="mb-4 text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-left text-foreground"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg bg-muted text-foreground border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-left text-foreground"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg bg-muted text-foreground border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-left text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 border rounded-lg bg-muted text-foreground border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 font-semibold text-white transition bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
