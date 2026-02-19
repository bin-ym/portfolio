// app/about/page.js

export default function About() {
    return (
      <div className="py-10 text-center">
        <h1 className="mb-6 text-4xl font-bold text-indigo-700">About Me</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          I’m a Computer Science grad passionate about building web apps with Next.js, Tailwind, and more. When I’m not coding, I’m [your hobby].
        </p>
      </div>
    );
  }