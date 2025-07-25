import React from "react";
import { motion } from "framer-motion";

// Main App component to provide context and a scrollable area
const App = () => {
  return (
    <div className="bg-[#000319] min-h-screen">
      {/* You would place this section alongside your others */}
      <Achievements />
    </div>
  );
};

/**
 * The Achievements component, for highlighting competitions and certifications.
 */
export const Achievements = () => {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        setMousePosition({ x: clientX, y: clientY });
    };

    return (
        <div 
            id="achievements" 
            onMouseMove={handleMouseMove}
            className="relative bg-[#000319] text-white py-24 px-4 overflow-hidden"
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
            <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center pb-10 font-sans font-bold">
                    Achievements & Certifications
                </h1>
                <p className="text-lg text-gray-400 mb-12">
                    Highlights of my competitive and continuous learning journey.
                </p>

                {/* Grid container for all achievement cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* ICPC Achievement Card */}
                    <motion.div 
                        className="bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-left shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex items-start gap-6">
                            <div className="text-cyan-400 mt-1 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-cyan-400 mb-2">COMPETITIVE PROGRAMMING</p>
                                <h3 className="text-2xl font-bold text-white">ACM ICPC Dhaka Regional</h3>
                                <p className="text-lg text-gray-300 mt-1">Participant, 2023</p>
                                <div className="mt-4 pt-4 border-t border-gray-700">
                                    <p className="text-gray-400">Competed against top universities in the prestigious International Collegiate Programming Contest.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Certifications Section Wrapper */}
                    <div className="space-y-8">
                        {/* Machine Learning Specialization */}
                        <a href="https://coursera.org/share/ea7a2fe6066cd22085b1e42e3d5f80e2" target="_blank" rel="noopener noreferrer" className="block group">
                            <motion.div 
                                className="bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-left shadow-lg transition-colors duration-300 group-hover:border-cyan-400"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="text-cyan-400 mt-1 flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6-4l-6 6-6-6" /></svg>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white">Machine Learning Specialization</h4>
                                            <p className="text-md text-gray-300">Coursera</p>
                                        </div>
                                    </div>
                                    <div className="text-gray-500 group-hover:text-cyan-400 transition-transform duration-300 group-hover:rotate-45">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                    </div>
                                </div>
                            </motion.div>
                        </a>

                        {/* Deep Learning Specialization */}
                        <a href="https://coursera.org/share/c619a92dba0833e3c98f1bf118fbdaf6" target="_blank" rel="noopener noreferrer" className="block group">
                            <motion.div 
                                className="bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-left shadow-lg transition-colors duration-300 group-hover:border-cyan-400"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="text-cyan-400 mt-1 flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6-4l-6 6-6-6" /></svg>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white">Deep Learning Specialization</h4>
                                            <p className="text-md text-gray-300">Coursera</p>
                                        </div>
                                    </div>
                                    <div className="text-gray-500 group-hover:text-cyan-400 transition-transform duration-300 group-hover:rotate-45">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                    </div>
                                </div>
                            </motion.div>
                        </a>
                        
                        {/* A-Z Machine Learning */}
                        <a href="#" target="_blank" rel="noopener noreferrer" className="block group">
                            <motion.div 
                                className="bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-left shadow-lg transition-colors duration-300 group-hover:border-cyan-400"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="text-cyan-400 mt-1 flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6-4l-6 6-6-6" /></svg>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white">Machine Learning A-Z</h4>
                                            <p className="text-md text-gray-300">Udemy</p>
                                        </div>
                                    </div>
                                    <div className="text-gray-500 group-hover:text-cyan-400 transition-transform duration-300 group-hover:rotate-45">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                    </div>
                                </div>
                            </motion.div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
