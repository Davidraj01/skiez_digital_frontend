// src/pages/services/MobileApp.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FlipCardAD from '@/components/ui/FlipCardAD'
import MobileAppHero from '@/assets/MobileAppHero.jpg'
/**
 * Mobile App Development — converted to UI/UX page style
 * - Keeps all original content verbatim (no text changes)
 * - Uses Tailwind + framer-motion for visual parity with UI/UX page
 */

const tech = [
  {
    name: "React Native",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    name: "Flutter",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
  },
  {
    name: "Kotlin",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg",
  },
  {
    name: "Swift",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg",
  },
  {
    name: "Figma",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
  },
  {
    name: "Redux",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  },
  {
    name: "Zustand",
    logo: "https://avatars.githubusercontent.com/u/105983615?s=200&v=4",
  },
  {
    name: "Firebase",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
  },
  {
    name: "GraphQL",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg",
  },
  {
    name: "Fastlane",
    logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/fastlane.svg",
  },
  {
    name: "App Store",
    logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/apple.svg",
  },
  {
    name: "Play Store",
    logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/googleplay.svg",
  },
  {
    name: "GitHub",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
  },
  {
    name: "Jira",
    logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/jira.svg",
  },
];

const techRow1 = tech.slice(0, Math.ceil(tech.length / 2));
const techRow2 = tech.slice(Math.ceil(tech.length / 2));

const deliverables = [
  {
    title: "Custom Mobile App Design & Development",
    desc: "Tailored, high-performance mobile apps built to meet your business goals with seamless UI and UX.",
    img: "https://images.unsplash.com/photo-1627757757997-369fb38812e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3VzdG9tJTIwbW9iaWxlJTIwYXBwcyUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Enterprise Mobile App Solutions",
    desc: "Robust and scalable enterprise-level mobile applications designed for efficiency, security and performance.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cross-Platform App Development",
    desc: "Build once, launch anywhere. Optimize development time and cost with shared codebases across iOS & Android.",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "App Testing & Quality Assurance",
    desc: "Comprehensive testing to ensure smooth performance, user friendliness and reliability before launch.",
    img: "https://media.istockphoto.com/id/2152919218/photo/mini-mobile-shop-with-setup-tools-strategies-to-improve-sales-and-profitability-3d-render.webp?a=1&b=1&s=612x612&w=0&k=20&c=1Iuu4zqV5jQnblaaWS6TtVZFYqhA7130sEJyvDGaf9A=",
  },
  {
    title: "App Maintenance & Support",
    desc: "Continuous monitoring, updates, optimization and feature improvements post-launch.",
    img: "https://media.istockphoto.com/id/2211911993/photo/isolated-smartphone-repair-service-icon.webp?a=1&b=1&s=612x612&w=0&k=20&c=8u6OOAuaL2rJqjbMav1-_O9oKBQ_q9Bmdn8ac9CjddQ=",
  },
];


const STEPS = [
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
    desc: "Component-driven development, automated tests and CI/CD for reliable releases.",
    accent: "Engineering",
  },
  {
    step: "4",
    title: "Launch & Support",
    desc: "Monitoring, performance optimisations and iterative improvements after launch.",
    accent: "Growth",
  },
];


export default function MobileApp() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO (UI/UX-style centered layout but keeping original hero text) */}
      <section
        className="relative w-full h-[460px] md:h-[560px] flex items-center"
        style={{
          backgroundImage:
            `url(${MobileAppHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="Mobile app development hero"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-transparent to-black/100" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center md:text-left"
        >
          <div className="max-w-2xl mx-auto md:mx-0">
            <h1 className="text-3xl md:text-5xl font-extrabold text-teal-300 leading-tight">
              Mobile App Development
            </h1>
            <p className="mt-4 text-gray-200">
              Skiez Digital offers expert mobile app development services with
              skilled developers, custom solutions and full support to grow
              your business efficiently.
            </p>
            <div className="mt-6 flex items-center gap-4 justify-center md:justify-start">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-6 py-3 rounded-full font-semibold shadow"
              >
                Build a Project
              </Link>
              
            </div>
          </div>
        </motion.div>
      </section>

      {/* WHAT IS APP DEVELOPMENT */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-6"
          >
            What is <span className="text-teal-600">App Development</span>?
          </motion.h2>

          <p className="text-gray-700 text-lg leading-relaxed text-justify max-w-4xl mx-auto">
            App development involves creating mobile and web applications
            designed to deliver smooth, efficient and engaging experiences. The
            process starts with planning and design, where ideas are
            conceptualized and visualized. Next, coding and development bring
            the app to life, ensuring it functions as intended. Testing follows
            to guarantee quality and usability before launch. Ultimately, app
            development helps businesses meet goals by enhancing performance and
            strengthening user connections with a reliable digital presence.
          </p>
        </div>
      </section>

      {/* PARTNER WITH SKIEZ DIGITAL */}
      <section className="py-14 bg-teal-300/50">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6"
          >
            Partner with <span className="text-teal-600">Skiez Digital</span>{" "}
            for Your Mobile App Needs
          </motion.h2>

          <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto text-justify">
            As a leading app development company, Skiez Digital is committed to
            transforming your vision into a powerful mobile presence. Our team
            combines creativity, technical excellence and industry know-how to
            deliver mobile solutions that drive tangible results. Whether you're
            a startup or an enterprise, our mobile app development services are
            built to scale your growth. Contact Skiez Digital today to bring
            your ideas to life with innovative, reliable and scalable mobile
            applications.
          </p>
        </div>
      </section>

      <FlipCardAD />

      {/* TOOLING (marquee) — kept exactly like UI/UX page style */}
      <section className="py-16 border-t border-gray-100 bg-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h4 className="text-lg font-bold text-gray-700 uppercase tracking-wider mb-10">
            Our Tooling & Tech Stack
          </h4>

          {/* Gradient fade edges for depth */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          <div className="relative flex overflow-hidden mb-10">
            <div
              className="flex gap-10 animate-marquee whitespace-nowrap"
              style={{ animationDuration: "40s" }}
            >
              {techRow1.concat(techRow1).map((t, i) => (
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

          <div className="relative flex overflow-hidden">
            <div
              className="flex gap-10 animate-marquee-reverse whitespace-nowrap"
              style={{ animationDuration: "42s" }}
            >
              {techRow2.concat(techRow2).map((t, i) => (
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
        <style>{`
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
        `}</style>
      </section>

      {/* WHAT WE DELIVER SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-gray-900"
        >
          What We <span className="text-teal-600">Deliver</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {deliverables.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition bg-white"
            >
              <div className="h-52 bg-gray-100">
                <img
                  src={d.img}
                  alt={d.title}
                  width="600"
                  height="400"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {d.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {d.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS / TIMELINE — preserved steps content but styled like UI/UX page */}
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
            {STEPS.map((item, idx) => (
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

      {/* FAQ — preserved content */}
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
                What platforms do you develop mobile apps for?
              </summary>
              <div className="mt-3 text-teal-600 leading-relaxed">
                We develop native apps for iOS and Android, plus cross-platform
                apps using frameworks like React Native and Flutter.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <summary className="font-semibold text-gray-600 cursor-pointer text-lg">
                How long does app development typically take?
              </summary>
              <div className="mt-3 text-teal-600 leading-relaxed">
                Development timelines vary from a few weeks to several months
                depending on app complexity and feature requirements.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <summary className="font-semibold text-gray-600 cursor-pointer text-lg">
                What factors affect the cost of app development?
              </summary>
              <div className="mt-3 text-teal-600 leading-relaxed">
                Costs depend on app complexity, design, features, platform
                choice and ongoing maintenance needs.
              </div>
            </details>
            <details className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <summary className="font-semibold text-gray-600 cursor-pointer text-lg">
                Do you provide support and updates after app launch?
              </summary>
              <div className="mt-3 text-teal-600 leading-relaxed">
                We offer ongoing maintenance and updates to keep your app
                compatible, secure and feature-rich post-launch.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA — preserved content but styled like UI/UX page CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to build a high-performing mobile app?
          </h3>
          <p className="text-gray-600 mb-6">
            Book a free discovery call we'll audit your idea and suggest a
            roadmap.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full font-semibold shadow"
            >
              Book discovery call
            </Link>
            <a href="tel:+91 82200 43041" className="text-gray-700">
              Or call +91 82200 43041
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
