import React from "react";
import myPhoto from "../assets/myProfessionalPhoto.jpg";

export default function Home() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <div
      id="home"
      onMouseMove={handleMouseMove}
      className="relative bg-[#000319] text-white p-6 sm:p-8 flex flex-col items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Background grid + spotlight */}
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

      {/* Vertical Social Links */}
      <div className="fixed left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-20">
        <div className="flex flex-col items-center gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/ahmadakil67"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-cyan-400 hover:scale-110 transition-all duration-200"
            aria-label="GitHub Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/akil67"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-cyan-400 hover:scale-110 transition-all duration-200"
            aria-label="LinkedIn Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>

          {/* Email */}
          <a
            href="mailto:ferozbinakil@gmail.com"
            className="text-red-500 hover:text-cyan-400 hover:scale-110 transition-all duration-200"
            aria-label="Email Me"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>

          {/* Phone */}
          <a
            href="tel:+8801751578424"
            className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200"
            aria-label="Call Me"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.15 8.63 19.79 19.79 0 0 1 0 0.18 2 2 0 0 1 2 0h3a2 2 0 0 1 2 1.72c.12.81.32 1.6.59 2.36a2 2 0 0 1-.45 2.11L6.91 7.09a16 16 0 0 0 9 9l.91-.91a2 2 0 0 1 2.11-.45c.76.27 1.55.47 2.36.59A2 2 0 0 1 22 16.92z"></path></svg>
          </a>
        </div>
      </div>

      {/* Main content (fade-in on mount) */}
      <div
        className={[
          "relative z-10 flex flex-col md:flex-row-reverse items-center justify-center gap-10 text-center md:text-left",
          "transition-all duration-700 ease-out",
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        ].join(" ")}
      >
        {/* Photo wrapper (floating animation) */}
        <div
          className="relative"
          style={{
            animation: "floatSlow 6s ease-in-out infinite",
          }}
        >
          <img
            src={myPhoto}
            alt="Ahmad Akil"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full object-cover border border-cyan-500/50 shadow-lg transition-transform duration-300 ease-out hover:scale-105"
          />
          {/* soft glow pulse */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              animation: "glowPulse 4s ease-in-out infinite",
              boxShadow: "0 0 0 rgba(34,211,238,0.0)",
            }}
          />
        </div>

        {/* Text content */}
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
            Portfolio of <br />
            <span className="text-[#CBACF9] inline-block transition-transform duration-500 will-change-transform hover:translate-x-1">
              Ahmad Akil
            </span>
          </h1>

          <p className="font-semibold text-lg sm:text-xl md:text-2xl mt-6 sm:mt-8">
            Hi, I'm Ahmad Akil, a full stack web developer.
          </p>

                    {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1ODChTGwfNN81siVJij4TjcQojpxBSWFv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-6 py-3 bg-cyan-500/20 border border-cyan-400 rounded-full 
                       text-cyan-300 font-semibold hover:bg-cyan-500/30 hover:scale-105 transition-all duration-300"
          >
            View Resume
          </a>
        </div>
      </div>

      {/* Local keyframes (no Tailwind config needed) */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 0 rgba(34,211,238,0.0); }
          50% { box-shadow: 0 0 36px rgba(34,211,238,0.35); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="floatSlow"], [style*="glowPulse"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
