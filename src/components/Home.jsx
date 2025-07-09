import React from "react";

const skills = [
  // --- Web Development Skills ---
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },

  {
    name: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
];

export default function Home() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <div
      id="home"
      onMouseMove={handleMouseMove}
      className="relative bg-[#000319] text-white p-6 sm:p-8 flex flex-col items-center justify-center h-screen overflow-hidden"
    >
      {/* The Grid and Spotlight Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "3rem 3rem",
          maskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 60%)`,
          WebkitMaskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 60%)`,
        }}
      />

      {/* Vertical Social Links on the left */}
      <div className="fixed left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-20">
        <div className="flex flex-col items-center gap-6">
          {/* GitHub Link */}
          <a
            href="https://github.com/ahmadakil67"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200"
            aria-label="GitHub Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/akil67"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200"
            aria-label="LinkedIn Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          {/* Email Link */}
          <a
            href="mailto:ferozbinakil@gmail.com"
            className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200"
            aria-label="Email Me"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
          <a
            href="tel:+8801751578424"
            className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200"
            aria-label="Call Me"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.15 8.63 19.79 19.79 0 0 1 0 0.18 2 2 0 0 1 2 0h3a2 2 0 0 1 2 1.72c.12.81.32 1.6.59 2.36a2 2 0 0 1-.45 2.11L6.91 7.09a16 16 0 0 0 9 9l.91-.91a2 2 0 0 1 2.11-.45c.76.27 1.55.47 2.36.59A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Portfolio of <br />
          <span className="pl-10 sm:pl-10 md:pl-10 text-[#CBACF9]">
            Ahmad Akil
          </span>
        </h1>

        <p className="font-semibold text-lg sm:text-xl md:text-2xl mt-6 sm:mt-8 text-center">
          Hi, I'm Ahmad Akil, a full stack software engineer.
        </p>

        {/* --- Engaging Skills Section --- */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl z-10 group">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="relative flex flex-col items-center transition-all duration-300 ease-in-out cursor-pointer 
                 group-hover:opacity-50 hover:!opacity-100 
                 hover:-translate-y-3 hover:scale-110"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain ${
                  skill.name === "Express" ? "filter brightness-0 invert" : ""
                }`}
              />
              <span className="mt-1 text-sm text-gray-300 group-hover:text-gray-500 hover:text-cyan-400">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
