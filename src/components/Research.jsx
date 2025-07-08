import React from "react";
import { motion } from "framer-motion";

// Main App component to provide context and a scrollable area
const App = () => {
  return (
    <div className="bg-[#000319] min-h-screen">
      <Research />
    </div>
  );
};

/**
 * The Research component, showcasing academic and personal research projects.
 */
export const Research = () => {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        setMousePosition({ x: clientX, y: clientY });
    };

    return (
        <div 
            id="research" 
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
            <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center pb-10 font-sans font-bold">
                    Research Experience
                </h1>
                <p className="text-lg text-gray-400 mb-12">
                    An overview of my undergraduate thesis and findings.
                </p>

                {/* Research Card with a subtle entrance animation */}
                <motion.div 
                    className="bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-left max-w-3xl mx-auto shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex items-start gap-6">
                        {/* Research Icon */}
                        <div className="text-cyan-400 mt-1 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </div>
                        
                        {/* Research Details */}
                        <div>
                            <p className="text-sm font-semibold text-cyan-400 mb-2">UNDERGRAD THESIS | July ’23 – July ‘24</p>
                            <h3 className="text-2xl font-bold text-white">Manipulated Image Detection: Pixel-Wise and Patch-Based Analysis</h3>
                            
                            <ul className="list-disc pl-5 space-y-2 text-gray-300 mt-4">
                                <li>Developed LSTM-based pixel-level analysis for detecting subtle image manipulations.</li>
                                <li>Implemented a ConvNet architecture for patch-wise analysis of large alterations.</li>
                                <li>Achieved 92% accuracy in manipulated image detection using the LSTM-ConvNet hybrid model.</li>
                                <li>Leveraged statistical properties of images to enhance detection accuracy.</li>
                            </ul>

                            <div className="mt-6 flex items-center gap-4">
                                <a href="#" className="px-4 py-2 text-sm bg-cyan-500 text-black font-semibold rounded-md hover:bg-cyan-400 transition-colors">
                                    View Code
                                </a>
                                <a href="#" className="px-4 py-2 text-sm bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-600 transition-colors">
                                    Read Report
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default App;
