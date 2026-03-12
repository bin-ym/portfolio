// app/contact/page.js

import Link from "next/link";

export default function Contact() {
  return (
    <div className="max-w-4xl py-20 mx-auto text-center">
      <h2 className="mb-6 text-3xl font-bold text-indigo-600 dark:text-indigo-400">
        Get in Touch
      </h2>
      <p className="mb-8 text-muted-foreground">
        I’d love to hear from you! Reach out via email or connect with me on
        social media.
      </p>
      <a
        href="mailto:binyam.tagel@gmail.com"
        className="inline-block px-6 py-3 font-semibold text-white transition bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700"
      >
        Email Me
      </a>
      <div className="flex justify-center gap-4 mt-8">
        {[
          { name: "Instagram", link: "https://instagram.com" },
          { name: "Facebook", link: "https://facebook.com" },
          { name: "LinkedIn", link: "https://linkedin.com" },
        ].map((social) => (
          <Link
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            {social.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
