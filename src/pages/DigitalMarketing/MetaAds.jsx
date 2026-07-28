import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * Meta Ads — Skiez Digital
 * Design matches EmailMarketing.jsx (hero, grids, marquee, FAQ, CTA)
 * Route to use in App.jsx: /services/digital-marketing/meta-ads
 */

export default function MetaAds() {
  const heroBg =
    "https://images.unsplash.com/photo-1665799871677-f1fd17338b43?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWV0YSUyMGFkc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600";

  // --- What we do / feature cards (pulled from your copy) ---
  const features = [
    {
      icon: "🎯",
      title: "Precise Targeting",
      text: "Reach the right audience using demographics, interests, behaviours, custom & lookalike audiences.",
    },
    {
      icon: "🧠",
      title: "AI Optimisation & A/B Tests",
      text: "Leverage Meta’s AI, split tests and real-time dashboards to continually lift engagement & conversions.",
    },
    {
      icon: "🖼️",
      title: "Creative Formats",
      text: "Video, carousel, reels, stories & collection ads built to Meta specs so they load fast & look great.",
    },
    {
      icon: "📊",
      title: "Measurement & Scale",
      text: "Granular analytics, pixel/CAPI tracking and iterative scaling to maximise ROAS and lower CPA.",
    },
  ];

  // --- “Why Meta Ads” bullets (your H3/H4 section) ---
  const reasons = [
    {
      h3: "Wide Audience Reach",
      h4: "Reach billions across Facebook, Instagram, Messenger & Audience Network to maximise exposure.",
    },
    {
      h3: "Precise Targeting",
      h4: "Connect with ideal customers via demographics, interests, behaviours & custom/lookalike audiences.",
    },
    {
      h3: "Cost-Effective Advertising",
      h4: "Often lower CPC than other platforms budget-friendly for startups to enterprises.",
    },
    {
      h3: "Multiple Ad Formats",
      h4: "Video, carousel, reels, stories, collection & more match your objective with the right format.",
    },
    {
      h3: "Real-Time Performance Tracking",
      h4: "Transparent dashboards for spend, CTR, CVR, CPA & ROAS so you can optimise confidently.",
    },
    {
      h3: "Omni-Channel Integration",
      h4: "Complements SEO, Google Ads & email creating a seamless journey and stronger overall results.",
    },
    {
      h3: "Creative Flexibility",
      h4: "We follow Meta Ads specs so creatives are crisp, compliant and high-performing across placements.",
    },
    {
      h3: "Competitive Advantage",
      h4: "Deliver targeted messages to the users most likely to convert outrun competitors consistently.",
    },
  ];

  // --- Toolkit marquee logos (safe SVGs) ---
  const tools = [
    {
      name: "Meta Ads Manager",
      logo: "https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg",
    },
    {
      name: "Instagram",
      logo: "https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg",
    },
    {
      name: "Meta Business Suite",
      logo: "https://www.vectorlogo.zone/logos/facebook/facebook-tile.svg",
    },
    {
      name: "Meta Pixel / CAPI",
      logo: "https://www.svgrepo.com/show/431792/meta.svg",
    },
    {
      name: "Creator Studio",
      logo: "https://www.svgrepo.com/show/515696/creator-studio.svg",
    },
    {
      name: "Ads Library",
      logo: "https://www.svgrepo.com/show/422588/ads-advertising-color.svg",
    },
  ];

  const faq = [
    {
      q: "What is Meta Ads Manager?",
      a: "It’s the central platform to create, manage and analyse campaigns across Facebook, Instagram & Messenger including budgets, audiences, placements and reporting.",
    },
    {
      q: "Do you use the Meta Ads Library?",
      a: "Yes. We research competitor creatives, trends and compliance using the Ads Library to inspire better, compliant ads for your brand.",
    },
    {
      q: "Do you follow Meta Ads specs?",
      a: "Absolutely. We design to the latest image/video sizes, character limits and placement rules so ads render fast and perform well across devices.",
    },
  ];

  const svgFallback = `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='40'>
      <rect width='100%' height='100%' fill='%23F3FCFB'/>
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='10' fill='%23006666'>logo</text>
    </svg>`
  )}`;

  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section
        className="relative flex items-center justify-center text-center h-[420px] md:h-[520px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-label="Meta Ads hero"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70" />
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 max-w-4xl"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight text-white">
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-gray-200 bg-clip-text text-transparent">
              Meta Ads (Facebook & Instagram)
            </span>
          </h1>

          <p className="text-gray-200 text-lg md:text-xl mb-6">
            Meta Ads boost your business with wide reach, precise targeting,
            flexible formats, real-time tracking, cost-effective ads and a clear
            competitive edge.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-teal-500 to-gray-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              Book a Free Strategy Call
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

      {/* INTRO COPY */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-14">
        <div className="prose max-w-none prose-p:text-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Skiez Digital × Meta Ads
          </h2>
          <p className="text-gray-700">
            Skiez Digital has become a cornerstone of digital advertising,
            offering unparalleled reach across Facebook, Instagram, Messenger
            and the Audience Network. We specialise in Meta Ads Manager to
            create, manage and optimise campaigns that deliver measurable
            results tailored to your goals.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mt-8">
            What is Meta Ads Manager?
          </h3>
          <p>
            Meta Ads Manager is the central platform to set up, run and analyse
            campaigns. From audience targeting to budgets and placements, it
            gives comprehensive control and real-time insights so we can refine
            performance continuously.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mt-8">
            Exploring the Meta Ads Library
          </h3>
          <p>
            We use the Meta Ads Library to research competitor ads and market
            trends. This transparency helps us design compliant, innovative ads
            that resonate with your audience.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mt-8">
            Mastering Ads Manager Features
          </h3>
          <p>
            AI-driven optimisation, A/B testing and live dashboards enable
            ongoing improvements in CTR, CVR and CPA ensuring every rupee is
            tuned for ROI.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mt-8">
            Adhering to Meta Ads Specs
          </h3>
          <p>
            We build creatives to the latest specs (sizes, duration, character
            limits, placements) so your ads look professional, load fast and
            perform across devices.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mt-8">
            Why Choose Skiez Digital for Your Meta Ads?
          </h3>
          <p>
            Our experts combine deep platform knowledge with data-driven
            insights to craft strategies that grow your brand, increase
            conversions and improve retention whether you’re launching new
            products or expanding market reach.
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-6">
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
          {features.map((s, idx) => (
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
              <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-900 group-hover:text-teal-700">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm">{s.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* WHY YOU NEED META ADS */}
      <section className="py-16 bg-gradient-to-b from-teal-300 to-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-10"
          >
            WHY DO YOU NEED META ADS FOR YOUR BUSINESS
          </motion.h2>

          <ul className="max-w-4xl mx-auto">
            {reasons.map((p, idx) => (
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
                <div>
                  <h4 className="text-[16px] font-semibold text-gray-900">
                    {p.h3}
                  </h4>
                  <p className="text-gray-700">{p.h4}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TOOLKIT MARQUEE */}
      <section className="py-12 border-t border-gray-100 bg-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h4 className="text-lg font-bold text-gray-700 uppercase tracking-wider mb-8">
            Meta Ads Toolkit
          </h4>
          <div className="relative flex overflow-hidden mb-6">
            <div
              className="flex gap-16 animate-marquee whitespace-nowrap"
              style={{ animationDuration: "40s" }}
            >
              {[...tools, ...tools, ...tools].map((t, i) => (
                <div
                  key={`${t.name}-${i}`}
                  className="flex flex-col items-center justify-center transition-transform hover:scale-110 min-w-[120px]"
                >
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
                  <span className="text-xs font-semibold text-gray-600 mt-2">
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
          .animate-marquee { display:flex; width:calc(300%); animation: marquee 38s linear infinite; }
          .animate-marquee:hover { animation-play-state: paused; }
        `}</style>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h3>

          <div className="space-y-6">
            {faq.map((f, i) => (
              <details
                key={i}
                className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <summary className="font-semibold text-gray-600 cursor-pointer text-lg">
                  {f.q}
                </summary>
                <div className="mt-3 text-teal-600 leading-relaxed">{f.a}</div>
              </details>
            ))}
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
            Ready to scale with Meta Ads?
          </motion.h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            We’ll plan your audiences, creatives and budget strategy then
            optimise weekly for profitable growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Your Meta Ads Plan
          </Link>
        </div>
      </section>
    </main>
  );
}
