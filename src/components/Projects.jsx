import React from "react";
import { motion } from "framer-motion";

// Main App component to provide context and a scrollable area
const App = () => {
  return (
    <div className="bg-[#000319] min-h-screen">
      <Projects />
    </div>
  );
};

// --- SVG Icons for Technologies ---
const icons = {
  react: <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="w-6 h-6 text-[#61DAFB]"><circle cx="0" cy="0" r="2.05" fill="currentColor"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse></g></svg>,
  tailwindcss: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 154" className="w-6 h-6"><path fill="#38BDF8" d="M128 0C93.867 0 72.533 17.333 64 52c-8.533 34.667-32 52-64 52s-64-17.333-64-52c0-34.667 21.333-52 64-52s85.333 17.333 64 52z" transform="translate(0 25)"></path><path fill="#38BDF8" d="M128 0C93.867 0 72.533 17.333 64 52c-8.533 34.667-32 52-64 52s-64-17.333-64-52c0-34.667 21.333-52 64-52s85.333 17.333 64 52z" transform="translate(128 77)"></path></svg>,
  mongodb: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-6 h-6"><path fill="#4DB33D" d="M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0zm-20.57 38.452c2.18-1.34 4.8-1.34 6.98 0l60.85 37.36c2.18 1.34 3.49 3.73 3.49 6.29v74.72c0 2.56-1.31 4.95-3.49 6.29l-60.85 37.36c-2.18 1.34-4.8 1.34-6.98 0l-60.85-37.36c-2.18-1.34-3.49-3.73-3.49-6.29V82.102c0-2.56 1.31-4.95 3.49-6.29l60.85-37.36z"></path><path fill="#FFFFFF" d="M128.012 118.018c-17.18 0-31.104 13.924-31.104 31.104 0 17.18 13.924 31.104 31.104 31.104 17.18 0 31.104-13.924 31.104-31.104.001-17.18-13.923-31.104-31.104-31.104zm-4.34 44.978V96.47c17.18-4.34 29.964-4.34 42.748 0v21.7c-12.784-5.48-25.568-5.48-38.408 0v29.826c-1.44-.24-2.88-.24-4.34 0z"></path></svg>,
  firebase: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-6 h-6"><path fill="#FFCA28" d="M3.13 11.33l-.11-.21l-1.92-3.53l.06-.12l1.97 3.86z"></path><path fill="#FFA000" d="M12.87 11.33l-6.27-10.9l-3.47 6.37l1.97 3.86l7.77.67z"></path><path fill="#F57C00" d="m.99 7.59l2.14 3.74l7.77.67l.21-1.07l-9.15-3.34z"></path><path fill="#FFCA28" d="M12.87 11.33l.21-1.07l-2.05-8.2l-1.42 2.62l3.26 6.65z"></path></svg>,
  javascript: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6"><path fill="#F7DF1E" d="M0 0h32v32H0z"></path><path d="M21.533 23.548c.633.363 1.393.618 2.22.618c.98 0 1.62-.33 1.62-.93c0-.585-.435-.84-1.515-1.185l-1.08-.345c-1.77-.585-2.955-1.62-2.955-3.555c0-1.89 1.44-3.33 3.6-3.33c1.47 0 2.61.495 3.48 1.005l-1.29 2.01c-.54-.33-1.155-.555-1.92-.555c-.75 0-1.185.315-1.185.78c0 .525.39.75 1.29.99l1.08.345c2.16.69 3.24 1.725 3.24 3.66c0 2.16-1.695 3.63-4.065 3.63c-1.83 0-3.225-.66-4.2-1.26l1.26-2.055zM12.358 23.998c.84.555 1.74.84 2.895.84c2.55 0 4.125-1.56 4.125-5.16v-8.52h-3.15v8.1c0 2.25-.84 3.3-2.175 3.3c-.9 0-1.545-.39-2.025-1.095l-1.695 1.485z"></path></svg>,
  vite: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-6 h-6"><path fill="#646CFF" d="M256 32.2v191.5L128 256l-22.6-7.1l-7.1-22.6l-22.6-7.1L53.1 197l-22.6-7.1L7.9 167.3L0 128l7.9-39.3l22.6-22.6l22.6-7.1L75.7 37l22.6-7.1L128 0l22.6 7.1l7.1 22.6l22.6 7.1l22.6 7.1l22.6 7.1l22.6 7.1z"></path><path fill="#FFFFFF" d="M128 0l-22.6 7.1l-7.1 22.6l-22.6 7.1L53.1 59.4L30.5 82L7.9 121.3L0 128l7.9 6.7l22.6 39.3l22.6 22.6l22.6 7.1l22.6 7.1L128 256l128-32.2V32.2L128 0z" opacity=".1"></path><path fill="#FFC107" d="M185.5 32.2l-57.5 176.4l-57.5-176.4h34.8l22.7 74.4l22.7-74.4z"></path></svg>,
};

const projectsData = [
  {
    title: "EduFlex: An Online Learning Platform",
    description: "A comprehensive online learning platform offering courses, quizzes, and user-friendly navigation, built with modern web technologies.",
    technologies: ["react", "tailwindcss", "mongodb", "firebase"],
    imageUrl: "https://i.ibb.co/JRG3wSgt/Gemini-Generated-Image-oby8joby8joby8jo.png",
    liveLink: "https://event-explorer-cdca0.web.app/",
    codeLink: "https://github.com/ahmadakil67/eduflex",
  },
  {
    title: "Roomies: A Roommate Finding Website",
    description: "A full-stack app to help users find compatible roommates, featuring real-time interaction and secure authentication.",
    technologies: ["react", "tailwindcss", "mongodb", "firebase"],
    imageUrl: "https://i.ibb.co/My07gv8C/Gemini-Generated-Image-8xcoc88xcoc88xco.png",
    liveLink: "#",
    codeLink: "https://github.com/ahmadakil67/rommies-client",
  },
  {
    title: "Phudu: A Doctor Appointment Website",
    description: "An interactive web application for booking doctor appointments, built with a focus on user-friendly design and functionality.",
    technologies: ["javascript", "react", "tailwindcss", "vite"],
    imageUrl: "https://i.ibb.co/CsYqbCmc/Gemini-Generated-Image-l1mn8yl1mn8yl1mn.png",
    liveLink: "https://wide-eyed-frogs.surge.sh/",
    codeLink: "https://github.com/ahmadakil67/Phudu",
  },
];

/**
 * The main Projects component.
 */
export const Projects = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <div 
      id="projects" 
      onMouseMove={handleMouseMove}
      className="relative bg-[#000319] text-white py-20 px-4 overflow-hidden"
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

      {/* Content container, layered on top of the background */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center pb-10 font-sans font-bold">
          Selected Projects
        </h1>
        <p className="text-lg text-gray-400 text-center mb-12 md:mb-20">
          A selection of my work, showcasing my skills in web development.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * A project card with a spotlight hover effect.
 */
const ProjectCard = ({ project }) => {
  const divRef = React.useRef(null);
  const [isFocused, setIsFocused] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = React.useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full rounded-2xl border border-gray-700 bg-gray-900 p-6 shadow-lg transition-all duration-300 hover:border-cyan-400/50"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px at ${position.x}px ${position.y}px, rgba(0, 255, 255, 0.1), transparent 80%)`,
        }}
      />
      <div className="relative z-10">
        <img 
          src={project.imageUrl} 
          alt={`${project.title} screenshot`} 
          className="w-full h-48 rounded-lg object-cover mb-4"
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/000319/FFFFFF?text=Image+Not+Found'; }}
        />
        <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h3>
        <p className="text-sm text-gray-300 mb-4 h-16">{project.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.technologies.map((techKey) => (
              <div key={techKey} className="text-gray-400 hover:text-white transition-colors">
                {icons[techKey] || techKey}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-3 py-1 text-sm bg-cyan-500 text-black font-semibold rounded-md hover:bg-cyan-400 transition-colors">
              Live
            </a>
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="px-3 py-1 text-sm bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-600 transition-colors">
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
