import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

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
          className="flex items-center text-muted-foreground hover:text-primary"
          aria-label={`Visit ${social.name}`}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
}