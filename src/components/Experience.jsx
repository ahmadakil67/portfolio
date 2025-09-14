import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Main App component to provide context and a scrollable area
const App = () => {
  return (
    <div className="bg-[#000319] min-h-screen">
      <Experience />
    </div>
  );
};

// The data for the experience section
const experienceData = [
  {
    title: "Software Engineering Intern",
    company: "Creativise Tech Solutions",
    date: "June 2025 - Present",
    description: [
      "Working with Next.js and Tailwind CSS for modern, responsive front-end development.",
      "Collaborating within a team environment using Git and GitHub for version control and code management.",
      "Gaining hands-on experience with CI/CD pipelines for automated testing and deployment.",
    ],
    badge: "Internship",
  },
  // You can add more experience items here to see the timeline grow
];

/**
 * The main Experience component featuring the Tracing Beam and Grid Background effect.
 */
export const Experience = () => {
  const ref = useRef(null);
  const [scrollYProgress, setScrollYProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Effect for the tracing beam scroll animation
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const { top, height } = el.getBoundingClientRect();
      const elementTop = window.scrollY + top;
      const elementHeight = height;
      const viewportHeight = window.innerHeight;

      const start = elementTop - viewportHeight;
      const end = elementTop + elementHeight - viewportHeight;
      const currentScroll = window.scrollY;
      
      let progress = (currentScroll - start) / (end - start + viewportHeight);
      progress = Math.max(0, Math.min(1, progress));
      setScrollYProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handler for the mouse-following spotlight effect
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <div 
      id="experience" 
      onMouseMove={handleMouseMove}
      className="relative bg-[#000319] text-white p-4 md:p-8 overflow-hidden"
    >
      {/* The Grid and Spotlight Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '3rem 3rem',
          maskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 60%)`,
          WebkitMaskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 60%)`,
        }}
      />

      {/* Container for the main content, layered on top of the background */}
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center pb-10 font-sans font-bold">
          Work Experience
        </h1>

        {/* The container for the tracing beam and content */}
        <div ref={ref} className="relative w-full max-w-4xl mx-auto">
          {/* The Tracing Beam SVG */}
          <div className="absolute left-4 md:left-8 top-3 h-full w-px bg-gray-700">
            <motion.div
              style={{ height: `${scrollYProgress * 100}%` }}
              className="absolute top-0 left-0 h-full w-full shadow-lg"
              animate={{
                background: [
                  "linear-gradient(to bottom, transparent 0%, #4ade80 50%, #3b82f6 100%)",
                  "linear-gradient(to bottom, transparent 0%, #3b82f6 50%, #8b5cf6 100%)",
                  "linear-gradient(to bottom, transparent 0%, #8b5cf6 50%, #ec4899 100%)",
                  "linear-gradient(to bottom, transparent 0%, #ec4899 50%, #f59e0b 100%)",
                  "linear-gradient(to bottom, transparent 0%, #f59e0b 50%, #4ade80 100%)",
                ],
                transition: { duration: 5, repeat: Infinity, ease: "linear" }
              }}
            />
          </div>

          {/* The Experience Content */}
          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div key={`experience-${index}`} className="relative pl-12 md:pl-20">
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-cyan-400 border-2 border-gray-800"></div>
                <div className="p-6 rounded-xl border border-gray-700 bg-gray-900 bg-opacity-50 backdrop-blur-sm shadow-lg hover:border-cyan-400 transition-colors duration-300">
                  <p className="text-sm font-semibold text-cyan-400 mb-1">{item.date}</p>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <p className="text-lg text-gray-400 mb-4">{item.company}</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    {item.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <div className="absolute top-4 right-4 text-xs font-bold uppercase tracking-wider bg-cyan-400 text-gray-900 px-2 py-1 rounded-full">
                    {item.badge}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
