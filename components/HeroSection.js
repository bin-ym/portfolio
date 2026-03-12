// components/HeroSection.js
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="top" className="py-20 bg-background text-foreground">
      <div className="flex flex-col items-center justify-between max-w-6xl px-4 mx-auto md:flex-row">
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-2xl text-muted-foreground">
            Hello, My Name Is
          </h2>
          <h1 className="mt-2 text-5xl font-extrabold text-indigo-600 dark:text-indigo-400">
            Binyam Tagel
          </h1>
          <p className="max-w-md mt-4 text-xl text-muted-foreground">
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
  );
}
