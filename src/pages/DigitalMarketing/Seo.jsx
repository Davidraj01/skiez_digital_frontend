// src/pages/services/SEO.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SEO() {
  const services = [
    {
      title: "Website SEO Audit",
      text: "Crawlability, indexability, structured data and Core Web Vitals fixes to ensure search engines can find and rank your pages.",
      icon: "🛠️",
    },
    {
      title: "Web-page Optimization",
      text: "Keyword-mapped content, semantic HTML, meta tags and schema to increase relevance and CTR.",
      icon: "✍️",
    },
    {
      title: "Content Strategy & Creation",
      text: "Topical clusters, pillar pages and conversion-focused content that ranks and converts visitors.",
      icon: "📚",
    },
    {
      title: "Link Building & Outreach",
      text: "High-quality editorial links, digital PR and outreach that move the needle without risking penalties.",
      icon: "🔗",
    },
    {
      title: "Keyword Analysis",
      text: "Local citations, review management and Google Business Profile optimization for higher local visibility.",
      icon: "📈",
    },
  ];

  const stats = [
    { label: "Avg Organic Traffic Growth", value: "+87%" },
    { label: "Average Keyword Gains", value: "+120" },
    { label: "Avg Conversion Lift", value: "23%" },
    { label: "Keyword Analysis", value: "Top" },
  ];

  

  const tools = [
    {
      name: "Google Analytics",
      logo: "https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg",
    },
    {
      name: "Lighthouse",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg",
    },
    {
      name: "Screaming Frog",
      logo: "https://avatars.githubusercontent.com/u/20387734?s=200&v=4",
    },
    {
      name: "Surfer SEO",
      logo: "https://avatars.githubusercontent.com/u/22769676?s=200&v=4",
    },
    {
      name: "Google My Business",
      logo: "https://www.vectorlogo.zone/logos/google/google-icon.svg",
    },
    {
      name: "Google Search Console",
      logo: "https://cdn.simpleicons.org/googlesearchconsole",
    },
    
    { name: "SEMrush", logo: "https://cdn.simpleicons.org/semrush" },
  ];

  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section
        className="relative flex items-center justify-center text-center h-[480px] md:h-[560px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_vector-1682310920702-50669014da8f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VhcmNoJTIwZW5naW5lJTIwb3B0aW1pemF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600')",
        }}
        aria-label="SEO hero"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white">
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-gray-200 bg-clip-text text-transparent">
              SEO
            </span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-6">
            Data-driven SEO that improves visibility, traffic and conversions
            tailored to your business.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-teal-500 to-gray-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              Start with a Free SEO Audit
            </Link>
            <a
              href="tel:+91 82200 40431"
              className="text-gray-200 hover:text-white"
            >
              Or call: +91 82200 40431
            </a>
          </div>
        </motion.div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Our SEO Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((s, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition"
            >
              <div className="text-3xl">{s.icon}</div>
              <h3 className="text-lg font-semibold mt-4 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.text}</p>
              <div className="mt-4">
                <Link
                  to="/contact"
                  className="text-teal-600 font-medium hover:underline"
                >
                  Get an audit →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gradient-to-r from-teal-500 to-white py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
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
      
      {/* TOOLS MARQUEE */}
      <section className="py-16 border-t border-gray-100 bg-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h4 className="text-lg font-bold text-gray-700 uppercase tracking-wider mb-10">
            Our SEO Toolkit
          </h4>

          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          <div className="relative flex overflow-hidden mb-6">
            <div
              className="flex gap-10 animate-marquee whitespace-nowrap"
              style={{ animationDuration: "36s" }}
            >
              {tools.concat(tools).map((t, i) => (
                <div
                  key={`tool1-${i}`}
                  className="flex flex-col items-center justify-center transition-transform hover:scale-110"
                >
                  <img
                    src={t.logo}
                    alt={t.name}
                    className="h-10 w-auto object-contain"
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

        <style>{`
          @keyframes marquee { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
          .animate-marquee { display:flex; animation: marquee linear infinite; }
          .animate-marquee:hover { animation-play-state: paused; }
        `}</style>
      </section>

      {/* PROCESS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold mb-10 text-gray-900"
        >
          How we approach SEO
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-200 hidden md:block" />

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Audit & Benchmark",
                desc: "Full technical & content audit, competitive gap analysis and KPI setting.",
                accent: "Analysis",
              },
              {
                step: "2",
                title: "Strategy & Roadmap",
                desc: "Prioritised roadmap with quick wins and long-term content plans.",
                accent: "Planning",
              },
              {
                step: "3",
                title: "Execution",
                desc: "Technical fixes, content production, on-page and outreach efforts aligned to roadmap.",
                accent: "Execution",
              },
              {
                step: "4",
                title: "Measure & Iterate",
                desc: "Weekly reporting, A/B tests and continuous optimisation for sustained growth.",
                accent: "Optimization",
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

      {/* WHY CHOOSE US */}
      <section className="relative py-20 bg-gradient-to-r from-[#f7fffc] via-white to-[#f8ffff] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
              Why choose{" "}
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Skiez Digital
              </span>{" "}
              for SEO
            </h2>
            <ul className="space-y-5">
              {[
                "Transparent reporting & ROI-driven goals.",
                "Technical-first with content excellence.",
                "White-hat link building and digital PR.",
                "Dedicated SEO specialist and weekly updates.",
              ].map((t, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-teal-100 text-teal-600 text-lg">
                    ✔️
                  </div>
                  <p className="leading-relaxed">{t}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We combine technical discipline with creative content to drive
                long-term organic growth. Each engagement begins with measurable
                KPIs and a roadmap you can trust.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
              >
                Request an SEO Audit →
              </Link>
            </div>
            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-gradient-to-tr from-teal-200/40 to-cyan-100/30 rounded-full blur-2xl" />
          </motion.div>
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
                What is SEO and why is it vital for my website?
              </summary>
              <div className="mt-3 text-teal-600 leading-relaxed">
                SEO, or Search Engine Optimization, improves your website’s
                ranking on search engines, increasing organic traffic and
                visibility.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <summary className="font-semibold text-gray-600 cursor-pointer text-lg">
                How long does it take to see results from SEO efforts?
              </summary>
              <div className="mt-3 text-teal-600 leading-relaxed">
                SEO results vary, but typically, noticeable improvements can
                appear within 3-6 months, depending on competition and strategy
                execution.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <summary className="font-semibold text-gray-600 cursor-pointer text-lg">
                What are the key differences between On-Page and Off-Page SEO?
              </summary>
              <div className="mt-3 text-teal-600 leading-relaxed">
                On-Page SEO involves optimizing content and structure, while
                Off-Page focuses on backlinks and authority building beyond your
                website.
              </div>
            </details>
            <details className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <summary className="font-semibold text-gray-600 cursor-pointer text-lg">
                How do I choose the right SEO agency for my business?
              </summary>
              <div className="mt-3 text-teal-600 leading-relaxed">
                Look for experience, proven results, transparent practices and
                a strategic approach aligned with your goals when selecting an
                SEO partner.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700 text-white overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center px-6 z-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
          >
            Ready to grow your organic traffic?
          </motion.h3>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Book a free audit and roadmap session we’ll show quick wins and a
            6‑month plan to scale your visibility.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Schedule a Free Audit
          </Link>
        </div>
      </section>
    </main>
  );
}
