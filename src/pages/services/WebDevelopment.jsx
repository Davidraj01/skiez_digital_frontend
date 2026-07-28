// src/pages/services/WebDevelopment.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import webdev from "@/assets/web-development.jpg"
import FlipCardWD from '@/components/ui/FlipCardWD'

export default function WebDevelopment() {
  const features = [
    {
      title: "Custom Web Applications",
      text: "Bespoke apps built to your requirements with scalable architecture and clean APIs.",
      icon: "🧩",
    },
    {
      title: "E-commerce Platforms",
      text: "High-converting online stores with secure payments, inventory & analytics.",
      icon: "🛒",
    },
    {
      title: "Performance Optimization",
      text: "Core Web Vitals improvements, image optimization and caching for lightning speed.",
      icon: "⚡",
    },
  ];

  const stats = [
    { label: "Projects Delivered", value: "12+" },
    { label: "Average Speed Gain", value: "3x" },
    { label: "Avg Conversion Lift", value: "27%" },
    { label: "Support Hours", value: "24/7" },
  ];

  const caseStudies = [
    {
      title: "Data-Driven Growth",
      summary:
        "We combine analytics and creative strategies to help brands achieve measurable results and scalable growth.",
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Seamless User Experience",
      summary:
        "Our design-first approach ensures intuitive navigation, faster performance, and meaningful user engagement across all devices.",
      img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMGV4cGVyaWVuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    },
    {
      title: "Integrated Marketing Solutions",
      summary:
        "From SEO and content to ads and automation, we deliver a unified digital ecosystem for consistent brand performance.",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  // 🧠 Replace your existing `const tech = [...]` with this:
  const tech = [
    // Core Web
    {
      name: "HTML5",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {

      name: "TypeScript",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },

    // Libraries & Frameworks
    {
      name: "React",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    },
    {
      name: "Next.js",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Vue.js",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
    },
    {
      name: "Angular",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg",
    },
    {
      name: "Svelte",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/svelte/svelte-original.svg",
    },

    // Styling & UI
    {
      name: "Tailwind CSS",
      logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
      name: "Bootstrap",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original-wordmark.svg",
    },
    {
      name: "Sass",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
    },
    {
      name: "Material UI",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg",
    },

    // Build Tools
    {
      name: "Vite",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vite/vite-original.svg",
    },
    {
      name: "Webpack",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/webpack/webpack-original.svg",
    },
    {
      name: "Babel",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/babel/babel-original.svg",
    },
    {
      name: "ESLint",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/eslint/eslint-original.svg",
    },

    // State Management
    {
      name: "Redux",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    },
    {
      name: "Zustand",
      logo: "https://avatars.githubusercontent.com/u/105983615?s=200&v=4",
    },

    // Utilities / Deployment
    {
      name: "Git",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    },
    {
      name: "Figma",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
    },
  ];

  const points = [
    "Custom website design that aligns with your brand identity",
    "Robust web application development for dynamic user experiences",
    "E-commerce development to boost your online sales",
    "Maintenance and support to keep your site optimized and secure",
    "SEO-friendly development practices for improved search rankings",
  ];

  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section
        className="relative flex items-center justify-center text-center h-[480px] md:h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${webdev})`,
        }}
        aria-label="Web development hero"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-white">
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-gray-200 bg-clip-text text-transparent">
              Web Development
            </span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-6">
            Skiez Digital: Premier Web Development Company Elevating Your Online
            Presence
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-teal-500 to-gray-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              Get a Free Consultation
            </Link>
            <a
              href="tel:+919876543210"
              className="text-gray-200 hover:text-white"
            >
              Or call: +91 82200 43041
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
              Why Web Development in{" "}
              <span className="text-teal-400"> Skiez Digital</span>?
            </h2>

            {/* Intro */}
            <p className="text-lg text-gray-700 leading-relaxed max-w-full mx-auto mb-10 text-justify">
              Skiez Digital, a leading web development company dedicated to
              transforming your digital vision into reality. Our comprehensive
              web development services combine creativity, technology and
              strategy to build custom websites and applications that drive
              business growth. As a top web development agency, we specialize in
              delivering innovative web design and development solutions
              tailored to your unique needs.<br></br>
              <br></br>
              <span className="text-teal-600 font-semibold">Skiez Digital</span>
              , Web development involves building and maintaining websites and
              web apps accessible online. It combines designing the site’s
              structure, coding its features, and ensuring smooth user
              interaction. This field covers both front-end work (what users
              see) and back-end processes (server, database management). Common
              languages used include HTML, CSS and JavaScript to create
              responsive and interactive sites. Overall, web development turns
              digital concepts into practical and engaging online experiences
            </p>

            {/* Checklist */}
            <ul className="max-w-4xl mx-auto text-justify">
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
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

      <FlipCardWD />

      {/* KEY SERVICES — 3 columns */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Key Capabilities
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition"
            >
              <div className="text-3xl">{f.icon}</div>
              <h3 className="text-xl font-semibold mt-4 mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.text}</p>
              <div className="mt-4">
                <Link
                  to="/contact"
                  className="text-teal-600 font-medium hover:underline"
                >
                  Talk to an expert →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="bg-gradient-to-r from-teal-50 to-white py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="p-6 bg-white rounded-xl shadow-sm border border-gray-100"
            >
              <div className="text-3xl font-extrabold text-teal-600">
                {s.value}
              </div>
              <div className="text-sm text-gray-600 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          What We Deliver
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((c, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-teal-side hover:border-teal-500/40"
            >
              <div className="h-44 bg-gray-200">
                <img
                  src={c.img}
                  alt={c.title}
                  width="600"
                  height="400"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-gray-600 mb-4">{c.summary}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
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

      {/* PROCESS (compact) */}
      {/* HOW WE WORK — professional timeline */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold mb-10 text-gray-900"
        >
          How we work
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-200 hidden md:block" />

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Discovery",
                desc: "Workshops, stakeholder interviews and market research to define goals & KPIs.",
                accent: "Research",
              },
              {
                step: "2",
                title: "Design",
                desc: "Interactive prototypes, user testing and UI systems for rapid feedback cycles.",
                accent: "Prototyping",
              },
              {
                step: "3",
                title: "Build",
                desc: "Component-driven development, automated tests, and CI/CD for reliable releases.",
                accent: "Engineering",
              },
              {
                step: "4",
                title: "Launch & Support",
                desc: "Monitoring, performance optimisations and iterative improvements after launch.",
                accent: "Growth",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="flex items-start gap-6"
                aria-labelledby={`process-${item.step}-title`}
              >
                {/* Step indicator */}
                <div className="relative flex-shrink-0">
                  <div className="md:absolute md:-left-[44px] md:top-0 flex items-center justify-center w-12 h-12 rounded-full bg-teal-600 text-white font-semibold shadow-lg">
                    {item.step}
                  </div>

                  {/* small accent chip for mobile (visible on small screens) */}
                  <div className="block md:hidden">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold">
                        {item.step}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3
                        id={`process-${item.step}-title`}
                        className="text-lg font-semibold text-gray-900"
                      >
                        {item.title}
                      </h3>
                      <div className="text-sm text-teal-600 font-medium mt-1">
                        {item.accent}
                      </div>
                    </div>
                    {/* subtle arrow / icon */}
                    <svg
                      className="w-6 h-6 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* optional micro-CTA */}
                  <div className="mt-4">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:underline"
                    >
                      Talk to an expert
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14M12 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      {/* WHY CLIENTS PICK SKIEZ DIGITAL */}
      <section className="relative py-24 bg-gradient-to-r from-[#f7fffc] via-white to-[#f8ffff] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text + Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900 leading-tight">
              Why clients choose{" "}
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Skiez Digital
              </span>
            </h2>

            <ul className="space-y-5">
              {[
                {
                  icon: "👨‍💼",
                  text: "Dedicated project manager & weekly progress milestones.",
                },
                {
                  icon: "⚡",
                  text: "Focus on performance, SEO and measurable conversions.",
                },
                {
                  icon: "💡",
                  text: "Transparent pricing and clear delivery timelines.",
                },
                {
                  icon: "🔍",
                  text: "Data-driven design decisions backed by analytics insights.",
                },
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-teal-100 text-teal-600 text-lg">
                    {item.icon}
                  </div>
                  <p className="leading-relaxed">{item.text}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Description + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We don’t just build websites we craft digital experiences that
                perform. From UX strategy to conversion optimization, our goal
                is to turn visitors into loyal customers through data-backed
                design and precision development.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
              >
                Start your project →
              </Link>
            </div>

            {/* Background accent blob */}
            <div className="absolute -z-10 -top-10 -right-10 w-48 h-48 bg-gradient-to-tr from-teal-200/40 to-cyan-100/30 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </section>

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
                What services does web development include?
              </summary>
              <div className="mt-3 text-teal-600 leading-relaxed">
                Web development services cover designing websites, rendering,
                integrating CMS, setting upe- commerce and ongoing point
                conservation
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <summary className="font-semibold text-gray-600 cursor-pointer text-lg">
                What is the duration of build a website?
              </summary>
              <div className="mt-3 text-teal-600 leading-relaxed">
                The website development process can take anywhere from a
                numerous weeks to several months based on its design complexity
                and specific conditions.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <summary className="font-semibold text-gray-600 cursor-pointer text-lg">
                Do you produce mobile- responsive websites?
              </summary>
              <div className="mt-3 text-teal-600 leading-relaxed">
                Yes, all websites we develop are fully responsive, icing smooth
                user experience across mobile, tablet and desktop bias
              </div>
            </details>
            <details className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <summary className="font-semibold text-gray-600 cursor-pointer text-lg">
                Is website conservation included after launch?
              </summary>
              <div className="mt-3 text-teal-600 leading-relaxed">
                Yes, we give ongoing conservation including regular updates,
                security patches, backups and performance optimizations post-
                launch
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* FINAL CTA SECTION */}
      <section className="relative py-28 bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700 text-white overflow-hidden">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-52 h-52 bg-white/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <div className="relative max-w-4xl mx-auto text-center px-6 z-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
          >
            Ready to build a{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
              fast, secure
            </span>{" "}
            & high converting website?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-white/90 mb-10 max-w-2xl mx-auto"
          >
            Let’s turn your ideas into a powerful online experience that drives
            real business growth. Our experts will guide you through every step.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 10h.01M12 10h.01M16 10h.01M21 16a2 2 0 01-2 2H5l-2 2V6a2 2 0 012-2h14a2 2 0 012 2v10z"
                />
              </svg>
              Schedule a Call
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
