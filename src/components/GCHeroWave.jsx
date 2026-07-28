// src/components/HeroCowork.jsx
import React from "react";
import { motion } from "framer-motion";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import HeroFont from "./HeroFont";

const slideFromLeft = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 2.0, ease: [0.16, 1, 0.3, 1] },
  },
};
const fadeSlideRight = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 2.0, ease: [0.16, 1, 0.3, 1] },
  },
};
const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

export default function HeroCowork() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-24">
      {/* Waves — ONLY from md+ (completely hidden on mobile) */}
      <div className="hidden md:block">
        <WaveRightBig />
        <WaveRightMid />
      </div>
      <WaveBottomDivider />

      {/* Lamps */}
      {/* small lamp on mobile */}
      <div className="md:hidden pointer-events-none absolute top-2 right-2 z-0 opacity-70">
        <Lamp className="scale-75" />
      </div>
      {/* larger lamps on md+ */}
      <div className="pointer-events-none absolute top-2 right-32 hidden md:block z-0">
        <Lamp />
      </div>
      <div className="pointer-events-none absolute top-0 right-64 hidden lg:block z-0">
        <Lamp />
      </div>
      <div className="pointer-events-none absolute top-4 right-8 hidden lg:block z-0">
        <Lamp />
      </div>

      {/* Main hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            animate="show"
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-6"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 mb-4"
            >
              Best Digital Marketing Agency in{" "}
              <span className="inline-block align-baseline ml-2">
                <HeroFont
                  text="Chennai"
                  inline
                  minFontSize={50}
                  textColor="#06B7A0"
                  scale={false}
                />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-slate-600 max-w-xl leading-relaxed"
            >
              Grow your business with Skiez Digital Chennai’s top digital
              marketing agency for SEO, social media marketing, website
              development, and app solutions.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <InteractiveHoverButton
                to="/services"
                className="bg-teal-500 border-teal-600 text-white"
              >
                Our Services
              </InteractiveHoverButton>
            </motion.div>
          </motion.div>
          <WaveMobileInline/>

          <motion.div
            variants={fadeSlideRight}
            initial="hidden"
            animate="show"
            viewport={{ once: true, amount: 0.5 }}
            className="relative"
          >
            <div className="flex justify-center md:justify-end">
              <img
                src="/vector1.webp"
                alt="Coworking illustration"
                width="760"
                height="500"
                className="w-[440px] md:w-[600px] lg:w-[680px] xl:w-[760px] max-w-full object-contain select-none drop-shadow-xl"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Lamps ------------------------------- */
function Lamp({ className = "" }) {
  return (
    <svg
      width="40"
      height="120"
      viewBox="0 0 40 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <rect x="19" y="0" width="2" height="62" fill="#0B122D" />
      <path
        d="M10 62h20c3 0 5 2.5 5 5.5V76H5v-8.5C5 64.5 7 62 10 62Z"
        fill="#0B122D"
      />
      <rect x="7" y="76" width="26" height="6" rx="3" fill="#ffd666" />
    </svg>
  );
}

/* ------------------------------- Waves (md+) ------------------------------- */
function WaveRightBig() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute z-0 right-[-6%] top-16 w-[640px] h-[420px] md:w-[860px] md:h-[520px] opacity-80"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        className="fill-teal-700"
        d="M0,256L60,245.3C120,235,240,213,360,192C480,171,600,149,720,144C840,139,960,149,1080,165.3C1200,181,1320,203,1380,213.3L1440,224L1440,0L0,0Z"
      />
    </svg>
  );
}

function WaveRightMid() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute z-0 right-[-10%] top-32 w-[600px] h-[380px] md:w-[800px] md:h-[460px] opacity-70"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        className="fill-teal-100"
        d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,229.3C672,245,768,235,864,213.3C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,0L0,0Z"
      />
    </svg>
  );
}

function WaveBottomDivider() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute z-0 bottom-0 left-0 w-full h-[160px] md:h-[200px]"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill="#F1F5F7"
        d="M0,224L60,218.7C120,213,240,203,360,170.7C480,139,600,85,720,90.7C840,96,960,160,1080,176C1200,192,1320,160,1380,144L1440,128L1440,320L0,320Z"
      />
    </svg>
  );
}


function WaveMobileInline() {
  return (
    <svg
      aria-hidden="true"
      className="md:hidden block w-full h-[96px] mt-4"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <defs>
        {/* soft fade so the top edge never clashes with text */}
        <linearGradient id="mfade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopOpacity="0" />
          <stop offset="40%" stopOpacity="0.3" />
          <stop offset="100%" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        fill="url(#mfade)"
        className="fill-teal-200"
        d="M0,256L60,245.3C120,235,240,213,360,192C480,171,600,149,720,144C840,139,960,149,1080,165.3C1200,181,1320,203,1380,213.3L1440,224V0H0Z"
      />
    </svg>
  );
}
