// src/pages/services/UIUX.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import FlipCardUIUX from '@/components/ui/FlipCardUIUX'
import UiUxHero from '@/assets/uiuxhero.jpg'


/**
 * Services - UI / UX Page
 * Paste as src/pages/services/UIUX.jsx
 * Tailwind CSS + framer-motion expected in project
 */

const deliverables = [
  {
    title: "Web Design & Development",
    desc: "We create visually stunning, responsive and high-performance websites that align with your brand and convert visitors into customers.",
    img: "https://plus.unsplash.com/premium_vector-1712873279593-8ca46e4ff0e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
  },
  {
    title: "Brand Identity & Strategy",
    desc: "From logo design to tone of voice, we build cohesive brand identities that connect emotionally and make you unforgettable.",
    img: "https://images.unsplash.com/photo-1648260296289-ab882814a005?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzaWduJTIwc3RyYXRlZ3klMjBwbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Mobile App Design & Prototyping",
    desc: "We design and prototype user-focused mobile experiences that combine aesthetics with functionality to enhance user engagement.",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "SEO & Digital Marketing",
    desc: "Boost your online visibility and engagement through tailored SEO strategies, paid campaigns and result-driven marketing.",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "UI/UX Research & Testing",
    desc: "We apply user research, usability testing and data-driven design to craft intuitive and impactful digital experiences.",
    img: "https://images.unsplash.com/photo-1667422380246-3bed910ffae1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2ViJTIwZGVzaWduJTIwdGVzdGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Content & Social Media Management",
    desc: "Engage your audience with creative storytelling and data-backed content strategies across all major social platforms.",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
  },
];


  const tech = [
    /* Design & Research */
    {
      name: "Figma",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
    },
    {
      name: "FigJam",
      logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/figma.svg",
    },
    {
      name: "Sketch",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sketch/sketch-original.svg",
    },
    {
      name: "Adobe XD",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/xd/xd-plain.svg",
    },
    {
      name: "Illustrator",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/illustrator/illustrator-plain.svg",
    },
    {
      name: "Miro",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/miro.svg",
    },

    /* Prototyping & Motion */
    
    {
      name: "Figma Prototypes",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
    },

    /* Research & Testing */

    {
      name: "Hotjar",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hotjar.svg",
    },

    /* Handoff & Component System */
    {
      name: "Storybook",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/storybook/storybook-original.svg",
    },

    /* Collaboration & Delivery */
    {
      name: "GitHub",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    },
    {
      name: "Notion",
      logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/notion.svg",
    },
    {
      name: "Jira",
      logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/jira.svg",
    },
];
  
const points = [
  // split from your original H4 content into scan-friendly checklist items
  "UI/UX Design: This is short for User Interface and User Experience two of the most vital elements responsible for defining the way users interact with any digital platform, such as websites, mobile apps and software.",
  "Together, they ensure that every digital product is visually appealing, simple, engaging, and enjoyable to use.",
  "UI Design is about the look and interaction of a product (layouts, color selection, icon design and typography) ensuring small elements like buttons reflect brand identity while maintaining consistency, balance and clarity.",
  "UX Design focuses on the user's journey and satisfaction: research, behavior study, navigation patterns and designing flows that help users reach goals without effort.",
  "UI/UX Design is where creativity meets usability fusing artistic design with strategic thinking to create digital experiences that are stunning, natural to use and meaningful.",
  "At Skiez Digital, our UX/UI design philosophy revolves around understanding users, their needs and how they interact with digital products we focus on emotion, usability and measurable impact.",
  "As a creative UI/UX Design Agency, we blend innovative design thinking with business goals to deliver results that delight and engage.",
  "Our UI UX Design Service designs intuitive, engaging and visually appealing interfaces that make products both beautiful and functional across websites, mobile apps and enterprise platforms.",
  "We handle every step of the UI & UX design process user research, journey mapping, wireframing, prototyping and usability testing to ensure interactions feel effortless and memorable.",
  "As a leading UI/UX Design Agency, we don’t just design we innovate. Our UX designers enhance journeys while UI designers craft layouts that captivate and convert.",
];

export default function UIUX() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section
        className="relative w-full h-[420px] md:h-[520px] flex items-center"
        style={{
          backgroundImage:
            `url(${UiUxHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="UI UX design hero"
      >
        {/* dark overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <h1 className="text-3xl md:text-5xl lg:text-3xl font-extrabold leading-tight text-teal-400 mb-4">
            UI / UX DESIGN
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-base md:text-lg mb-6">
            UI/UX design services that create stunning, user-friendly and
            conversion-driven digital experiences to elevate your brand and
            boost online engagement.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-gray-700 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              Book a UX Audit
            </Link>
            <a href="#process" className="text-gray-200 hover:text-white">
              See our process
            </a>
          </div>
        </motion.div>
      </section>

      <section className="py-16 bg-white">
  <div className="max-w-5xl mx-auto px-6 md:px-10">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        What is <span className="text-teal-600">UI / UX Design</span>?
      </h2>

      {/* Intro */}
      <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10 text-justify">
        UI/UX Design combines creativity and usability to build digital experiences that are visually appealing and effortless to use.  
        At <span className="text-teal-600 font-semibold">Skiez Digital</span>, we blend research, strategy and aesthetics to design interfaces that engage, convert and inspire.
      </p>

      {/* Checklist */}
      <ul className="w-full text-justify">
        {points.map((text, idx) => (
          <li
            key={idx}
            className="flex items-start py-3 gap-4 hover:bg-teal-50/40 rounded-xl px-3 transition-all duration-200"
          >
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-teal-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>

            <p className="text-gray-800 leading-relaxed text-[16px] font-medium">
              {text}
            </p>
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
</section>


      {/* VALUE PROPOSITIONS */}
      {/* UI/UX — Professional feature trio */}
      <FlipCardUIUX />

      {/* PORTFOLIO HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-gray-900"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What We Deliver
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((d, idx) => (
            <motion.article
              key={idx}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1 bg-white"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.06 }}
            >
              {/* Image Section */}
              <div className="h-56 bg-gray-100">
                <img
                  src={d.img}
                  alt={d.title}
                  loading="lazy"
                  width="600"
                  height="400"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {d.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {d.desc}
                </p>
                <Link
                  to="/contact"
                  className="text-teal-600 font-medium hover:underline"
                >
                  Talk to our experts →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      {/* UI/UX PROCESS — Modern Professional Timeline */}
      <section
        id="process"
        className="relative bg-gradient-to-b from-teal-400 via-white to-white py-24 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-gray-900"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-100 to-cyan-100">
              UI / UX
            </span>{" "}
            Process
          </motion.h2>

          {/* Connecting line for desktop */}
          <div className="absolute hidden md:block top-[230px] left-1/2 transform -translate-x-1/2 w-[75%] h-[2px] bg-gradient-to-r from-teal-300/50 via-cyan-300/60 to-teal-300/50 rounded-full blur-sm" />

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {[
              {
                step: 1,
                title: "Discover",
                desc: "User research, stakeholder interviews, and analytics audits reveal key insights.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="5" />
                    <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
                  </svg>
                ),
              },
              {
                step: 2,
                title: "Define",
                desc: "Personas, journey maps and product requirements bring clarity to the solution.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" d="M3 7h18M3 12h18M3 17h18" />
                  </svg>
                ),
              },
              {
                step: 3,
                title: "Design",
                desc: "Wireframes, interactive prototypes and visual design align teams and users.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" d="M12 2l4 8-4 8-4-8 4-8z" />
                  </svg>
                ),
              },
              {
                step: 4,
                title: "Validate",
                desc: "Usability testing, iterations and engineering handoff for reliable implementation.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" d="M5 13l4 4L19 7" />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="relative bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group text-center px-6 py-10"
              >
                {/* Step number */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-white font-bold shadow-md">
                  {item.step}
                </div>

                {/* Icon */}
                <div className="mt-6 flex items-center justify-center text-teal-600 mb-3">
                  {item.icon}
                </div>

                {/* Content */}
                <h4 className="text-lg font-semibold mb-2 text-gray-900">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Accent line on hover */}
                <div className="absolute inset-x-8 bottom-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACKS */}

      <section className="py-16 border-t border-gray-100 bg-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h4 className="text-lg font-bold text-gray-700 uppercase tracking-wider mb-10">
            Our Tooling & Tech Stack
          </h4>

          {/* Gradient fade edges for depth */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          {/* Row 1 - Left to Right */}
          <div className="relative flex overflow-hidden mb-10">
            <div
              className="flex gap-10 animate-marquee whitespace-nowrap"
              style={{ animationDuration: "40s" }}
            >
              {tech.concat(tech).map((t, i) => (
                <div
                  key={`row1-${i}`}
                  className="flex flex-col items-center justify-center transition-transform hover:scale-110"
                >
                  <img
                    src={t.logo}
                    alt={t.name}
                    width="40"
                    height="40"
                    className="h-10 w-auto object-contain drop-shadow-md"
                    loading="lazy"
                  />
                  <span className="text-xs font-semibold text-gray-600 mt-2">
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="relative flex overflow-hidden">
            <div
              className="flex gap-10 animate-marquee-reverse whitespace-nowrap"
              style={{ animationDuration: "42s" }}
            >
              {tech.concat(tech).map((t, i) => (
                <div
                  key={`row2-${i}`}
                  className="flex flex-col items-center justify-center transition-transform hover:scale-110"
                >
                  <img
                    src={t.logo}
                    alt={t.name}
                    width="40"
                    height="40"
                    className="h-10 w-auto object-contain drop-shadow-md"
                    loading="lazy"
                  />
                  <span className="text-xs font-semibold text-gray-600 mt-2">
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animations */}
        <style>
          {`
    @keyframes marquee {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
    @keyframes marquee-reverse {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: flex;
      animation: marquee linear infinite;
    }
    .animate-marquee-reverse {
      display: flex;
      animation: marquee-reverse linear infinite;
    }
    .animate-marquee:hover,
    .animate-marquee-reverse:hover {
      animation-play-state: paused;
    }
    `}
        </style>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Title */}
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h3>

          {/* FAQ List */}
          <div className="space-y-6">
            {/* FAQ 1 */}
            <details className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <summary className="font-semibold text-gray-600 cursor-pointer text-lg">
                What is the main difference between User Interface (UI) design
                and User Experience (UX) design and why do projects need both?
              </summary>
              <div className="mt-3 text-teal-600 leading-relaxed">
                UI design focuses on visuals buttons, typography and color
                schemes while UX ensures that the journey is smooth, logical,
                and satisfying. Both are essential to create digital products
                that look beautiful{" "}
                <span className="text-teal-600 font-medium">and</span> function
                intuitively.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <summary className="font-semibold text-gray-600 cursor-pointer text-lg">
                What steps are involved in a standard UI/UX design process and
                how are client goals integrated throughout the project?
              </summary>
              <div className="mt-3 text-teal-600 leading-relaxed">
                Our process includes research, wireframes, prototypes, user
                testing and iteration. Client goals stay at the center we
                collaborate continuously to ensure the final design aligns with
                your vision and delivers measurable results.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <summary className="font-semibold text-gray-600 cursor-pointer text-lg">
                What measures do you take to guarantee the originality of my
                design and avoid plagiarism, while still using proven design
                principles?
              </summary>
              <div className="mt-3 text-teal-600 leading-relaxed">
                Every design we create is 100% custom for your brand we never
                copy from others. We combine ethical design practices with
                proven frameworks, ensuring your visuals are both unique and
                effective.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="py-20 bg-teal-300">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Ready to improve conversion with better UX?
            </h2>

            <p className="text-gray-600 text-base md:text-lg mb-6 max-w-2xl mx-auto">
              Book a UX audit and get a prioritized roadmap of improvements that
              increase conversions and reduce friction fast.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact"
                  aria-label="Book a UX audit"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:brightness-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-200"
                >
                  {/* calendar / audit icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Book audit
                </Link>
              </motion.div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+91 82200 43041"
                aria-label="Call to book UX audit"
                className="inline-flex items-center gap-2 text-gray-800 px-4 py-3 rounded-full font-medium hover:text-teal-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2 3h4l2 5-2 2a11 11 0 005 5l2-2 5 2v4a2 2 0 01-2 2c-10.493 0-19-8.507-19-19 0-1.105.895-2 2-2z"
                  />
                </svg>
                Or call +91 82200 43041
              </motion.a>
            </div>

            {/* Benefit / trust row */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-gray-600">
              <span className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-1 rounded-full font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4"
                  />
                </svg>
                Free 30-minute audit
              </span>

              <span className="text-gray-400">•</span>

              <span className="text-gray-600">
                Trusted by startups & enterprises
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
