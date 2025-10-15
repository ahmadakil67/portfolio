import React from "react";

/**
 * SkillsSection (JS) — matches Home section look & feel
 * - Same bg color (#000319), grid overlay, moving spotlight mask
 * - Cyan accent system consistent with Home
 * - Accessible tabs + animated cards
 */

const TABS = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "tools", label: "Tools" },
  { key: "ml", label: "ML/DL Tech" },
];

const SKILLS = {
  frontend: [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", dark: true },
    { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg", dark: true },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  ],
  database: [
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  ],
  tools: [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", dark: true },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", dark: true },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  ],
  ml: [
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
    { name: "scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  ],
};

function cx() {
  return Array.from(arguments).filter(Boolean).join(" ");
}

export default function SkillsSection() {
  const [active, setActive] = React.useState(TABS[0].key);
  const [mouse, setMouse] = React.useState({ x: 0, y: 0 });

  const onKeyDown = (e) => {
    const idx = TABS.findIndex((t) => t.key === active);
    if (e.key === "ArrowRight") setActive(TABS[(idx + 1) % TABS.length].key);
    if (e.key === "ArrowLeft") setActive(TABS[(idx - 1 + TABS.length) % TABS.length].key);
  };

  const items = SKILLS[active] || [];

  return (
    <section
      id="skills"
      onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
      className="relative bg-[#000319] text-white overflow-hidden"
    >
      {/* Match Home padding + vertical rhythm */}
      <div className="relative min-h-[60vh] py-16 sm:py-20 flex flex-col justify-center">
        {/* Background grid + spotlight (same as Home) */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "3rem 3rem",
            maskImage: `radial-gradient(circle at ${mouse.x}px ${mouse.y}px, black 20%, transparent 60%)`,
            WebkitMaskImage: `radial-gradient(circle at ${mouse.x}px ${mouse.y}px, black 20%, transparent 60%)`,
          }}
          aria-hidden
        />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <header className="flex flex-col items-center text-center gap-3 mb-8">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
              Skills & Tooling
            </h2>
            <p className="text-gray-300/90">
              Snap between categories. Hover to highlight. Fully keyboard-accessible.
            </p>
          </header>

          {/* Tabs (cyan accents to match Home) */}
          <div
            role="tablist"
            aria-label="Skills categories"
            onKeyDown={onKeyDown}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8"
          >
            {TABS.map((tab) => (
              <button
                key={tab.key}
                role="tab"
                aria-selected={active === tab.key}
                aria-controls={`panel-${tab.key}`}
                onClick={() => setActive(tab.key)}
                className={cx(
                  "px-4 py-2 rounded-full border text-sm font-medium transition-all backdrop-blur",
                  active === tab.key
                    ? "bg-cyan-500/20 border-cyan-400/40 text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.25)]"
                    : "bg-white/5 border-white/10 text-gray-200 hover:bg-white/10 hover:border-white/20"
                )}
              >
                <span>{tab.label}</span>
                <span className="ml-2 text-xs text-white/60">{SKILLS[tab.key].length}</span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div
            id={`panel-${active}`}
            role="tabpanel"
            aria-live="polite"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5"
          >
            {items.map((s, i) => (
              <SkillCard key={s.name} skill={s} delay={i} />
            ))}
          </div>
        </div>

        {/* Local keyframes (scoped) */}
        <style>{`
          @keyframes cardIn { 0% { opacity:0; transform: translateY(8px) scale(.98); } 100% { opacity:1; transform: translateY(0) scale(1); } }
          @keyframes shine { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        `}</style>
      </div>
    </section>
  );
}

function SkillCard({ skill, delay }) {
  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 flex items-center gap-3
                 transition-all hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/10"
      style={{ animation: `cardIn .4s ${Math.min(delay * 40, 400)}ms both` }}
      title={skill.name}
    >
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0">
        <img
          src={skill.icon}
          alt={skill.name}
          className={"w-full h-full object-contain " + (skill.dark ? "invert brightness-90" : "")}
          loading="lazy"
        />
      </div>
      <div className="flex-1">
        <div className="text-sm font-semibold text-neutral-100 tracking-wide">{skill.name}</div>
        <div className="mt-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full w-1/2 rounded-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(34,211,238,0), rgba(34,211,238,.55), rgba(34,211,238,0))",
              backgroundSize: "200% 100%",
              animation: "shine 2.2s linear infinite",
            }}
          />
        </div>
      </div>
    </div>
  );
}
