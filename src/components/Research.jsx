import React from "react";
import { motion } from "framer-motion";

// Main App component to provide context and a scrollable area
const App = () => {
  return (
    <div className="bg-[#000319] min-h-screen font-sans">
      <Research />
    </div>
  );
};

/**
 * The Research component, showcasing academic and personal research projects.
 * Responsive padding and typography added for better mobile layout.
 */
export const Research = () => {
  return (
    <div 
      id="research"
      className="relative bg-[#000319] text-white py-16 px-2 sm:px-4 min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Static Grid Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '3rem 3rem',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 pb-8 font-bold">
          Research Experience
        </h1>
        <p className="text-base sm:text-lg text-gray-400 mb-8">
          An overview of my undergraduate thesis and findings.
        </p>

        {/* Research Card */}
        <motion.div 
          className="bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 sm:p-6 md:p-8 text-left max-w-3xl mx-auto shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-start gap-3 sm:gap-4">
            {/* Research Icon */}
            <div className="text-cyan-400 mt-1 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 sm:h-10 sm:w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5a2 2 0 002 2h2a2 2 0 002-2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>

            {/* Research Details */}
            <div>
              <p className="text-sm font-semibold text-cyan-400 mb-2">
                UNDERGRAD THESIS | July ’23 – July ‘24
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Manipulated Image Detection: Pixel-Wise & Patch-Based Analysis
              </h3>

              <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-gray-300 mt-4">
                <li>Developed LSTM-based pixel-level analysis for detecting subtle manipulations.</li>
                <li>Implemented a ConvNet for patch-wise analysis of larger alterations.</li>
                <li>Achieved 92% detection accuracy with an LSTM-ConvNet hybrid model.</li>
                <li>Leveraged image statistics to further boost detection performance.</li>
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="https://www.kaggle.com/code/ahmadakil/manipulated-image-detection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-4 py-2 text-sm bg-cyan-500 text-black font-semibold rounded-md hover:bg-cyan-400 transition-colors"
                >
                  View Code
                </a>
                <a
                  href="https://drive.google.com/file/d/1a5bwbC8RhtM0d46VIOB9X2YAMBdVT2ok/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-4 py-2 text-sm bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-600 transition-colors"
                >
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
