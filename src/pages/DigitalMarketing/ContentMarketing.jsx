import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SiSemrush, SiGoogle, SiWordpress, SiNotion } from "react-icons/si";
import { FaQuoteLeft } from "react-icons/fa";

export default function ContentMarketing() {
  const services = [
    {
      title: "Content Strategy",
      text: "Topical research, content gap analysis and a 6–12 month editorial calendar aligned to business goals.",
      icon: "🗺️",
    },
    {
      title: "SEO Optimization Content",
      text: "Pillar pages, cluster strategy and keyword-optimized articles built for topical authority and rankings.",
      icon: "✍️",
    },
    {
      title: "Content Production",
      text: "Long-form articles, guides, video scripts and social snippets produced by experienced editors.",
      icon: "🎬",
    },
    {
      title: "Distribution & Amplification",
      text: "Email, social, syndication and PR outreach to get your content in front of audiences that convert.",
      icon: "📣",
    },
  ];

  const outcomes = [
    { label: "Organic Traffic Increase", value: "+78%" },
    { label: "Keyword Growth", value: "+140" },
    { label: "Lead Quality", value: "+34%" },
    { label: "Content Production", value: "150+ pieces" },
  ];

  const pillars = [
    {
      title: "Pillar & Cluster",
      desc: "Build semantic topic clusters that search engines and users understand.",
    },
    {
      title: "Content Ops",
      desc: "Workflow, briefs and standards to ship high-quality content at scale.",
    },
    {
      title: "Content Repurposing",
      desc: "Turn long form into short videos, social cards and newsletters to maximise ROAS.",
    },
  ];

  // ✅ Tools — Ahrefs uses official SVG (fix)
  const tools = [
    {
      key: "ahrefs",
      name: "Ahrefs",
      logo: "https://www.svgrepo.com/show/535119/a.svg",
    },
    {
      key: "semrush",
      name: "SEMrush",
      icon: SiSemrush,
    },
    {
      key: "google",
      name: "Google Analytics",
      icon: SiGoogle,
    },
    {
      key: "wordpress",
      name: "WordPress",
      icon: SiWordpress,
    },
    {
      key: "notion",
      name: "Notion",
      icon: SiNotion,
    },
  ];

  const svgFallback = `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='40'><rect width='100%' height='100%' fill='%23F3FCFB'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='10' fill='%23006666'>logo</text></svg>`
  )}`;


  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section
        className="relative flex items-center justify-center text-center h-[420px] md:h-[520px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1700776179/photo/video-marketing-online-advertising-influencer-marketing.webp?a=1&b=1&s=612x612&w=0&k=20&c=jlw7hkrsP3uU8b6mKRzxUcPCZ511gHmzCpzZyLROjRM=')",
        }}
        aria-label="Content marketing hero"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 max-w-4xl"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight text-white">
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-gray-200 bg-clip-text text-transparent">
              Content Marketing & Growth
            </span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-6">
            Create content that ranks, engages and converts backed by research
            and distribution playbooks.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-teal-500 to-gray-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              Plan a Content Audit
            </Link>
            <a
              href="tel:+91 82200 43041"
              className="text-gray-200 hover:text-white"
            >
              Or call: +91 82200 43041
            </a>
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Our Content Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="group p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:bg-teal-300/10 hover:border-teal-300"
            >
              <div className="text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:text-teal-600">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-900 transition-colors duration-300 group-hover:text-teal-700">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-800">
                {s.text}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="bg-gradient-to-r from-teal-500 to-white py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {outcomes.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="p-6 bg-white rounded-xl shadow-sm border border-gray-100"
            >
              <div className="text-3xl font-extrabold text-teal-600">
                {o.value}
              </div>
              <div className="text-sm text-gray-600 mt-1">{o.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-10"
        >
          Content Pillars
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TOOLS MARQUEE */}
      <section className="py-12 border-t border-gray-100 bg-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h4 className="text-lg font-bold text-gray-700 uppercase tracking-wider mb-8">
            Content Tools
          </h4>

          <div className="relative flex overflow-hidden mb-6">
            <div
              className="flex gap-10 animate-marquee whitespace-nowrap"
              style={{ animationDuration: "36s" }}
            >
              {[...tools, ...tools, ...tools].map((t, i) => (
                <div
                  key={`${t.key}-${i}`}
                  className="flex flex-col items-center justify-center transition-transform hover:scale-110 min-w-[120px]"
                >
                  {t.icon ? (
                    <t.icon className="h-10 w-10 text-teal-600" aria-hidden />
                  ) : (
                    <img
                      src={t.logo}
                      alt={t.name}
                      className="h-10 w-auto object-contain"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = svgFallback;
                      }}
                    />
                  )}
                  <span className="text-xs font-semibold text-gray-600 mt-2">
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          .animate-marquee {
            display: flex;
            width: calc(300%);
            animation: marquee linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
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
                What services does a content marketing agency offer?
              </summary>
              <div className="mt-3 text-teal-600 leading-relaxed">
                A content marketing agency provides content planning, creation,
                distribution, SEO optimization and performance measurement
                services tailored to your brand
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <summary className="font-semibold text-gray-600 cursor-pointer text-lg">
                How do you develop an effective content marketing strategy?
              </summary>
              <div className="mt-3 text-teal-600 leading-relaxed">
                Effective strategies include audience analysis, keyword
                research, competitor study, content planning and multi-channel
                distribution to maximize impact
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <summary className="font-semibold text-gray-600 cursor-pointer text-lg">
                What types of content are used in content marketing?
              </summary>
              <div className="mt-3 text-teal-600 leading-relaxed">
                Content types range from blog posts, social media content, and
                videos to infographics, e-books and SEO-driven website copy,
                designed to engage and educate
              </div>
            </details>
            <details className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <summary className="font-semibold text-gray-600 cursor-pointer text-lg">
                How does content marketing improve search engine rankings?
              </summary>
              <div className="mt-3 text-teal-600 leading-relaxed">
                By creating SEO-friendly content with targeted keywords,
                user-focused messaging and quality backlinks, content marketing
                boosts organic visibility and website traffic
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700 text-white overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center px-6 z-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-extrabold leading-tight mb-4"
          >
            Ready to scale content that converts?
          </motion.h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Book a content audit and we'll build a 90-day plan with quick wins
            and a scalable content ops playbook.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start a Content Audit
          </Link>
        </div>
      </section>
    </main>
  );
}
