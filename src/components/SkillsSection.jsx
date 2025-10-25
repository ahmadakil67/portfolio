import React from "react";

/**
 * SkillsSection (polished)
 * - Glass panel + gradient hairline borders on cards
 * - Softer spotlight with fallbacks
 * - Animated tab highlight + stronger focus rings
 * - Motion respects prefers-reduced-motion
 */

const TABS = [
  { key: "frontend", label: "Frontend" },
  { key: "backend",  label: "Backend"  },
  { key: "database", label: "Database" },
  { key: "tools",    label: "Tools"    },
  { key: "ml",       label: "ML/DL Tech" },
];

const SKILLS = {
  frontend: [
    { name: "JavaScript",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", dark: true },
    { name: "TailwindCSS",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Shadcn UI",    icon: "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/favicon.ico" },
    { name: "Material UI",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
    { name: "HTML5",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Redux",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  ],
  backend: [
    { name: "Node.js",             icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express",             icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg", dark: true },
    { name: "Mongoose",            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "REST API",            icon: "https://cdn-icons-png.flaticon.com/512/8463/8463607.png" },
    { name: "JWT Authentication",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg" },
    { name: "Python",              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  ],
  database: [
    { name: "PostgreSQL",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Firebase",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  ],
  tools: [
    { name: "Git",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", dark: true },
    { name: "Vercel",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", dark: true },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Apidog",  icon: "https://apidog.com/favicon.ico" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Figma",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "pgAdmin", icon: "https://avatars.githubusercontent.com/u/16511703?s=200&v=4" },
  ],
  ml: [
    { name: "PyTorch",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "TensorFlow",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "Keras",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
    { name: "scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
    { name: "Pandas",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "NumPy",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "OpenCV",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  ],
};

function cx(...args) {
  return args.filter(Boolean).join(" ");
}

export default function SkillsSection() {
  const [active, setActive] = React.useState(TABS[0].key);
  const [mouse, setMouse] = React.useState({ x: 0, y: 0 });

  const onKeyDown = (e) => {
    const idx = TABS.findIndex((t) => t.key === active);
    if (e.key === "ArrowRight") setActive(TABS[(idx + 1) % TABS.length].key);
    if (e.key === "ArrowLeft")  setActive(TABS[(idx - 1 + TABS.length) % TABS.length].key);
  };

  const items = SKILLS[active] || [];

  return (
    <section
      id="skills"
      onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
      className="relative bg-[#000319] text-white overflow-hidden"
      aria-labelledby="skills-heading"
    >
      {/* Background grid + spotlight */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "3rem 3rem",
          maskImage: `radial-gradient(240px 240px at ${mouse.x}px ${mouse.y}px, rgba(0,0,0,0.85) 0%, transparent 65%)`,
          WebkitMaskImage: `radial-gradient(240px 240px at ${mouse.x}px ${mouse.y}px, rgba(0,0,0,0.85) 0%, transparent 65%)`,
        }}
        aria-hidden
      />

      {/* Glass container */}
      <div className="relative min-h-[60vh] py-16 sm:py-20 flex flex-col justify-center">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <header className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200 mb-4">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-300" />
              Capabilities
            </div>
            <h2
              id="skills-heading"
              className="text-3xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600"
            >
              Skills & Tooling
            </h2>
            <p className="mt-3 text-gray-300/90">
              Snap between categories. Hover to highlight. Fully keyboard-accessible.
            </p>
          </header>

          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Skills categories"
            onKeyDown={onKeyDown}
            className="relative mx-auto mb-8 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-1.5"
          >
            <div className="grid grid-cols-5 gap-1">
              {TABS.map((tab) => {
                const isActive = active === tab.key;
                return (
                  <button
                    key={tab.key}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${tab.key}`}
                    onClick={() => setActive(tab.key)}
                    className={cx(
                      "relative px-3 py-2 rounded-xl text-sm font-medium transition-all outline-none",
                      "focus-visible:ring-2 focus-visible:ring-cyan-400/70",
                      isActive
                        ? "text-cyan-200"
                        : "text-gray-300 hover:text-white"
                    )}
                  >
                    {/* animated background highlight */}
                    <span
                      className={cx(
                        "absolute inset-0 -z-10 rounded-xl",
                        "transition-all",
                        isActive
                          ? "bg-cyan-500/15 border border-cyan-400/30 shadow-[0_0_24px_rgba(34,211,238,0.18)]"
                          : "bg-transparent"
                      )}
                      aria-hidden
                    />
                    <span>{tab.label}</span>
                    <span className="ml-2 text-[11px] text-white/60 align-middle">{SKILLS[tab.key].length}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Panel */}
          <div
            id={`panel-${active}`}
            role="tabpanel"
            aria-live="polite"
            className="rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-sm p-4 sm:p-5"
          >
            {/* Grid of skill cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
              {items.map((s, i) => (
                <SkillCard key={s.name} skill={s} delay={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Local keyframes + reduced motion */}
        <style>{`
          @keyframes cardIn { 
            0%   { opacity:0; transform: translateY(8px) scale(.985); } 
            100% { opacity:1; transform: translateY(0)    scale(1);    } 
          }
          @keyframes shine { 
            0%   { background-position: -200% 0; } 
            100% { background-position:  200% 0; } 
          }
          @media (prefers-reduced-motion: reduce) {
            * { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

const SkillCard = React.memo(function SkillCard({ skill, delay }) {
  return (
    <div
      className="group relative overflow-hidden rounded-xl p-4 flex items-center gap-3 transition-all
                 bg-gradient-to-b from-white/[0.07] to-white/[0.03]
                 border border-white/10 hover:border-cyan-400/40 hover:from-cyan-400/10 hover:to-cyan-400/5
                 hover:-translate-y-[3px] focus-within:-translate-y-[3px]"
      style={{ animation: `cardIn .45s ${Math.min(delay * 45, 420)}ms both` }}
      title={skill.name}
      tabIndex={0}
    >
      {/* subtle corner highlight */}
      <span
        className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100"
        aria-hidden
      />

      {/* icon */}
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-lg bg-black/20 flex items-center justify-center">
        <img
          src={skill.icon}
          alt={skill.name}
          className={cx(
            "w-7 h-7 object-contain",
            skill.dark ? "invert brightness-90" : ""
          )}
          loading="lazy"
          onError={(e) => { e.currentTarget.style.opacity = 0.4; }}
        />
      </div>

      {/* meta */}
      <div className="flex-1 min-w-0">
        <div className="text-[13.5px] font-semibold text-neutral-100 tracking-wide truncate">
          {skill.name}
        </div>

        {/* shimmer bar */}
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

      {/* focus ring overlay for keyboard users */}
      <span
        className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-cyan-400/60 ring-offset-0 transition
                   group-focus-within:ring-2"
        aria-hidden
      />
    </div>
  );
});
