import React from "react";
import { motion } from "framer-motion";

// Main App component to provide context and a scrollable area
const App = () => {
  return (
    <div className="bg-[#000319] min-h-screen">
      <Education />
    </div>
  );
};

// Data for the education section
const educationData = [
  {
    degree: "MSc (Thesis) in Computer Science & Engineering",
    university: "Shahjalal University of Science and Technology (SUST)",
    date: "Jan 2025 - Present",
    details: "Focusing on advanced research and thesis work in a specialized area of computer science."
  },
  {
    degree: "B.Sc(Eng) in Computer Science & Engineering",
    university: "North East University, Bangladesh",
    date: "Graduated: June 2024",
    details: "Key coursework included Data Structures, Algorithms, Web Development, Database Management, and Artificial Intelligence."
  }
];

/**
 * The Education component, showcasing academic qualifications.
 */
export const Education = () => {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        setMousePosition({ x: clientX, y: clientY });
    };

    return (
        <div 
            id="education" 
            onMouseMove={handleMouseMove}
            className="relative bg-[#000319] text-white py-24 px-4 min-h-screen flex flex-col items-center justify-center overflow-hidden"
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
            <div className="relative z-10 w-full max-w-7xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 pb-3 text-center font-sans font-bold">
                    My Education
                </h1>
                <p className="text-lg text-gray-400 mb-12">
                    My academic background and qualifications.
                </p>

                {/* Grid container for the education cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {educationData.map((edu, index) => (
                    <EducationCard key={index} education={edu} />
                  ))}
                </div>
            </div>
        </div>
    );
};

/**
 * A reusable card component for displaying education details.
 */
const EducationCard = ({ education }) => {
  return (
    <motion.div 
      className="bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-left h-full shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-start gap-6">
        {/* Graduation Cap Icon */}
        <div className="text-cyan-400 mt-1 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        </div>
        
        {/* Education Details */}
        <div>
          <h3 className="text-xl font-bold text-white">{education.degree}</h3>
          <p className="text-lg text-gray-300 mt-1">{education.university}</p>
          <p className="text-md text-cyan-400 font-semibold mt-2">{education.date}</p>
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="text-gray-400">{education.details}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


export default App;
