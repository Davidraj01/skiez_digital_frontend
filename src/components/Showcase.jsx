import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { api, assetUrl } from "@/lib/api";

// --- 3D CARD COMPONENT ---
const TiltCard = ({ project }) => {
  const ref = useRef(null);

  // Mouse Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth Dampening
  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transformPerspective: "1000px",
      }}
      className="group relative h-full w-full rounded-xl transition-all duration-200"
    >
      <motion.div
        style={{
          rotateX: useMotionTemplate`${mouseY.get() / 20}deg`,
          rotateY: useMotionTemplate`${mouseX.get() / -20}deg`,
        }}
        className="relative h-full w-full rounded-xl border border-slate-800 bg-slate-950/50 p-6 backdrop-blur-sm transition-colors group-hover:border-teal-500/50 group-hover:bg-slate-900/80"
      >
        {/* INNER GLOW SPOTLIGHT */}
        <div className="absolute inset-0 -z-10 bg-teal-500/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

        {/* IMAGE CONTAINER */}
        <div className="relative mb-6 h-48 w-full overflow-hidden rounded-lg bg-slate-900 shadow-2xl">
          <div className="absolute inset-0 z-10 bg-slate-950/10 group-hover:bg-transparent transition-colors duration-300" />
          <img
            src={assetUrl(project.image)}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-2 right-2 z-20">
            <span className="flex items-center gap-1 rounded-full border border-teal-500/20 bg-slate-950/60 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-300 backdrop-blur-md">
              {project.category}
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition-colors">
              {project.title}
            </h3>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${project.title} live site`}
              className="rounded-full bg-slate-800 p-2 text-slate-400 transition-all hover:bg-teal-500 hover:text-white"
            >
              <ArrowUpRight size={18} />
            </a>
          </div>

          <p className="text-sm leading-relaxed text-slate-400">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded bg-slate-800/50 px-2 py-1 text-[10px] font-medium text-slate-300 border border-slate-700/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
const Showcase = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api
      .get("/works")
      .then((res) => setProjects(res.data.works))
      .catch(() => setProjects([]));
  }, []);

  if (!projects.length) return null;

  return (
    <section
      className="relative overflow-hidden bg-slate-950 py-32"
      id="showcase"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-teal-600/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* HEADER */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-300 mb-6 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Skiez Digital Labs
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl text-4xl font-black tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            Selected{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-200 to-white">
              Works
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-slate-400"
          >
            Engineering digital dominance with pixel-perfect precision.
            Experience the next generation of web interfaces.
          </motion.p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TiltCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
