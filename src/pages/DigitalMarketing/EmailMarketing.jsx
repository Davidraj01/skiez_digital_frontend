// src/pages/services/EmailMarketing.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SiMailchimp, SiSendgrid, SiHubspot } from "react-icons/si";

export default function EmailMarketing() {
  const services = [
    {
      title: "Strategy & Calendar",
      text: "Audience segmentation, campaign calendar and funnel mapping to drive engagement and revenue.",
      icon: "📅",
    },
    {
      title: "Lifecycle Automation",
      text: "Welcome flows, cart abandonment, re-engagement and win-back automations that convert.",
      icon: "🤖",
    },
    {
      title: "Creative & Copy",
      text: "High-performing subject lines, mobile-first templates and A/B testing for measurable lifts.",
      icon: "✍️",
    },
    {
      title: "Deliverability & Data",
      text: "Warm-up, DKIM/SPF configuration, inbox placement monitoring and list hygiene best practices.",
      icon: "📈",
    },
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Increased ROI",
      text: "Drive higher lifetime value from your customers with segmented campaigns and automation.",
    },
    {
      icon: "📊",
      title: "Real-time Analytics",
      text: "Track open rates, click-throughs and revenue attribution with detailed dashboards.",
    },
    {
      icon: "🧠",
      title: "Smarter Automation",
      text: "AI-based send-time optimization and predictive segmentation to enhance engagement.",
    },
    {
      icon: "⚙️",
      title: "Seamless Integration",
      text: "Connect with your CRM, CMS and e-commerce platforms for unified marketing workflows.",
    },
  ];

  const tools = [
    { key: "mailchimp", name: "Mailchimp", icon: SiMailchimp },
    { key: "sendgrid", name: "SendGrid", icon: SiSendgrid },
    { key: "hubspot", name: "HubSpot", icon: SiHubspot },
    {
      key: "klaviyo",
      name: "Klaviyo",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Klaviyo-primary-logo-charcoal.svg/1200px-Klaviyo-primary-logo-charcoal.svg.png?20240325140001",
    },
    {
      key: "postmark",
      name: "Postmark",
      logo: "https://www.vectorlogo.zone/logos/postmarkapp/postmarkapp-icon.svg",
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
            "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1800&q=80')",
        }}
        aria-label="Email marketing hero"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 max-w-4xl"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight text-white">
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-gray-200 bg-clip-text text-transparent">
              Email Marketing & Automation
            </span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-6">
            Build revenue-driving email experiences automated, personalised
            and measurable.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-teal-500 to-gray-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              Request an Audit
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

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          What we do
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

      {/* BENEFITS SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 bg-gradient-to-b from-teal-300 to-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-10"
        >
          Why Email Marketing Works
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TOOLS MARQUEE - Endless Loop */}
      <section className="py-12 border-t border-gray-100 bg-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h4 className="text-lg font-bold text-gray-700 uppercase tracking-wider mb-8">
            Email & ESP Toolkit
          </h4>
          <div className="relative flex overflow-hidden mb-6">
            <div
              className="flex gap-16 animate-marquee whitespace-nowrap"
              style={{ animationDuration: "40s" }}
            >
              {[...tools, ...tools, ...tools].map((t, i) => (
                <div
                  key={`${t.key}-${i}`}
                  className="flex flex-col items-center justify-center transition-transform hover:scale-110 min-w-[120px]"
                >
                  {t.icon ? (
                    <t.icon className="h-10 w-10" aria-hidden />
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
          .animate-marquee:hover { animation-play-state: paused; }
        `}</style>
      </section>

      {/* PROCESS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900"
        >
          How we run email programs
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="font-semibold text-lg mb-2">Plan & Segment</h4>
            <p className="text-gray-600">
              Audience mapping, list hygiene and segmentation strategy to
              increase relevance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="font-semibold text-lg mb-2">Build & Automate</h4>
            <p className="text-gray-600">
              Templates, dynamic content and lifecycle automations to scale
              communications.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="font-semibold text-lg mb-2">Measure & Iterate</h4>
            <p className="text-gray-600">
              Dashboarding, attribution and A/B testing to grow engagement and
              revenue.
            </p>
          </div>
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
                What types of campaigns can I run with email marketing?
              </summary>
              <div className="mt-3 text-teal-600 leading-relaxed">
                You can run promotions, product launches, event invitations,
                feedback requests and more to engage your audience effectively.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <summary className="font-semibold text-gray-600 cursor-pointer text-lg">
                How does segmentation and automation improve email marketing?
              </summary>
              <div className="mt-3 text-teal-600 leading-relaxed">
                Segmentation and automation deliver personalized, timely content
                to specific groups, increasing open rates and click-through
                rates.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <summary className="font-semibold text-gray-600 cursor-pointer text-lg">
                What should be included in a winning email marketing strategy?
              </summary>
              <div className="mt-3 text-teal-600 leading-relaxed">
                A strong strategy involves audience analysis, content creation,
                automated workflows and performance tracking.
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
            Ready to turn emails into a revenue machine?
          </motion.h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Book a free audit and we'll show a roadmap with quick wins and a
            growth plan for the next 90 days.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start an Email Audit
          </Link>
        </div>
      </section>
    </main>
  );
}
