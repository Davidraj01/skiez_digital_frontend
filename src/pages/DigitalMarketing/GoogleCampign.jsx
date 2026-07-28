import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// --- Assets (kept from your version) ---
const heroImg =
  "https://images.unsplash.com/photo-1762427354397-854a52e0ded7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBpZSUyMGNoYXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600";
const case1 =
  "https://media.istockphoto.com/id/2218829098/photo/marketing-funnel-lead-generation-or-sales-conversion-process-convert-leads-into-sales-digital.webp?a=1&b=1&s=612x612&w=0&k=20&c=dblaEwaVmYFeZHCQKub4lMs0rJ6YlkU2-Eit6fN78so=";
const case2 =
  "https://media.istockphoto.com/id/1359839724/photo/high-speed-logo-typography-3d-letters-3d-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=g96e6cTmNvP0BbIWuCuRauOq-LR2psHIXRsInrbfheY=";
const case3 =
  "https://media.istockphoto.com/id/1161081515/photo/leads-new-business-prospects-customers-words-3d-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=1Tz3UAJXgUGqKEk8Yx1wL_xDAbbDlCrbCkzWEhZILyM=";
const creativePreview =
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop";

export default function GoogleCampign() {
  const features = [
    {
      title: "Smart Keyword Targeting",
      text: "Laser-focused keyword research, negatives and match types to capture high intent and reduce wasted spend.",
      icon: "🎯",
    },
    {
      title: "Compelling Ad Creatives",
      text: "High-converting ad copy, assets and extensions aligned to your offer to boost CTR and Quality Score.",
      icon: "✍️",
    },
    {
      title: "Conversion Optimization",
      text: "Tracking, landing page alignment and iterative testing to lift CVR and maximize ROI.",
      icon: "📈",
    },
  ];

  const stats = [
    { label: "Avg. CTR Lift", value: "2.4×" },
    { label: "Avg. CPA Reduction", value: "35%" },
    { label: "Businesses Served", value: "10+" },
    { label: "Optimization Cycles", value: "Weekly" },
  ];

  const faqs = [
    {
      q: "What Types of Google Ad Campaigns Can Help Your Business Grow?",
      a: "Google offers Search, Display, Video, Shopping, App, Performance Max, Local and Discovery campaigns for targeted business growth.",
    },
    {
      q: "How Do Google Ads Enhance Brand Visibility and Generate Leads?",
      a: "Google Ads reach active audiences, increasing visibility, driving quality traffic and converting potential customers into valuable leads.",
    },
    {
      q: "Why Choose Skiez Digital for Google Ad Campaign Management?",
      a: "Skiez Digital delivers customized, data-driven Google Ad strategies ensuring higher ROI, better visibility, and consistent business growth.",
    },
  ];

  const whyPoints = [
    {
      h3: "Get Immediate Results",
      h4: "Google campaigns deliver fast visibility, boosting your business much quicker than organic SEO efforts.",
    },
    {
      h3: "Reach Your Target Audience",
      h4: "Target specific demographics, interests and behaviours to connect with users most likely to engage with your brand.",
    },
    {
      h3: "Control Your Advertising Costs",
      h4: "Set and adjust your budget at any time, ensuring you never overspend while maximizing campaign effectiveness.",
    },
    {
      h3: "Measure Campaign Performance",
      h4: "Google Ads provides real-time insights on clicks, conversions and ROI, enabling informed optimization decisions.",
    },
    {
      h3: "Improve Brand Visibility",
      h4: "Appear at the top of search results and relevant sites to increase brand awareness and trust.",
    },
    {
      h3: "Drive Quality Website Traffic",
      h4: "Attract visitors actively seeking products or services similar to yours, increasing the chances of conversion.",
    },
    {
      h3: "Stay Connected with Potential Customers",
      h4: "Retarget users who previously interacted with your site, encouraging repeat visits and boosting conversions.",
    },
    {
      h3: "Outperform Competitors",
      h4: "Use competitor data and bidding strategies to position your ads effectively and gain market advantage.",
    },
  ];

  const tools = [
    {
      name: "Google Ads",
      logo: "https://www.vectorlogo.zone/logos/google_ads/google_ads-icon.svg",
    },
    {
      name: "Google Analytics",
      logo: "https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg",
    },
    {
      name: "Google Tag Manager",
      logo: "https://www.svgrepo.com/show/353827/google-tag-manager.svg",
    },
    {
      name: "YouTube Ads",
      logo: "https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg",
    },
    {
      name: "Meta Ads",
      logo: "https://www.vectorlogo.zone/logos/facebook/facebook-tile.svg",
    },
    { name: "Semrush", logo: "https://cdn.simpleicons.org/semrush" },
    {
      name: "HubSpot",
      logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
    },
    {
      name: "Zapier",
      logo: "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      {/* ---------- HERO ---------- */}
      <section
        className="relative grid place-items-center h-[440px] md:h-[560px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-label="Google Campaign hero"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/70" />
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 px-6 text-center max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="text-white">Google </span>
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-gray-200 bg-clip-text text-transparent">
              Campaigns
            </span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mt-4">
            Skiez Digital creates expert Google Ads campaigns that boost
            visibility, drive leads, and maximize ROI with tailored, strategic
            advertising solutions.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-teal-500 to-gray-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-[1.03] transition"
            >
              Get a Free Consultation
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

      {/* ---------- INTRO ---------- */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Boost Your Business with Expert{" "}
              <span className="text-teal-500">Google Ads</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4">
              Skiez Digital understands that in the fast-paced digital market,
              an effective Google Ads campaign is essential for businesses
              seeking to increase online visibility, attract quality leads and
              drive sales. We launch and manage campaigns aligned to your
              objectives.
            </p>
          </motion.div>

          {/* two-column copy */}
          <div className="mt-12 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                What is a Google Ads (AdWords) Campaign?
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                A Google Ads campaign is a pay-per-click (PPC) method where ads
                appear on Google Search, YouTube, and partner sites. It reaches
                people actively searching for what you offer, ensuring your
                budget is used efficiently.
              </p>

              <h3 className="mt-6 text-2xl font-bold text-gray-900 mb-2">
                Advantages of Google Ads PPC
              </h3>
              <ul className="mt-3 space-y-3 text-justify">
                {[
                  {
                    t: "Maximize Your Ad Spend",
                    d: "Target the right audience at the right time with tight control on budget & bids.",
                  },
                  {
                    t: "Continuous Monitoring & Optimization",
                    d: "Weekly iterations using data-led decisions to steadily improve performance.",
                  },
                  {
                    t: "Improve Click-Through Rates (CTR)",
                    d: "Refined ad copy, intent-based keywords and assets to lift CTR.",
                  },
                  {
                    t: "Boost Conversions",
                    d: "End-to-end tracking and landing page alignment to turn clicks into customers.",
                  },
                  {
                    t: "Ensure Best ROI",
                    d: "Bid strategies, negatives and creative testing aimed at profitable growth.",
                  },
                ].map((it, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-teal-50 text-teal-700 border border-teal-100 text-sm">
                      ✓
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900">{it.t}</p>
                      <p className="text-gray-700">{it.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-200 to-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Comprehensive Campaign Management
              </h3>
              <p className="text-gray-700 leading-relaxed">
                From keyword research and competitor analysis to ad creation and
                performance monitoring, we manage every aspect of your Google
                advertising. Our analytics and optimization ensure your ads win
                more auctions, gain visibility and convert efficiently.
              </p>

              <h3 className="mt-6 text-2xl font-bold text-gray-900 mb-2">
                Why Partner with Skiez Digital?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Work with experts who stay ahead of Google’s innovations and
                best practices. We tailor every campaign to your market,
                increase your customer base and maintain a competitive edge.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                <span className="font-semibold text-teal-600">
                  Drive Growth and Maximize Results:
                </span>{" "}
                From startup to enterprise, our strategies deliver measurable
                revenue. Leverage Google Ads, optimise budget and accelerate
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- KEY CAPABILITIES ---------- */}
      <section className="py-18 md:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-10"
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
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="group p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {f.title}
                </h3>
                <p className="text-gray-600 mt-2">{f.text}</p>
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
        </div>
      </section>

      {/* ---------- IMPACT STATS ---------- */}
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

      {/* ---------- WHAT WE DELIVER ---------- */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-10"
        >
          What We Deliver
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "High-Converting Lead Campaigns",
              desc: "Inbound leads with optimized keyword strategy and conversion-focused landing pages.",
              img: case3,
            },
            {
              title: "Performance Max Scaling",
              desc: "Scale across Search, Display, YouTube and Maps using first-party audience signals.",
              img: case2,
            },
            {
              title: "Remarketing Funnels",
              desc: "Re-engage warm audiences with sequenced creatives to lift ROAS and CVR.",
              img: case1,
            },
          ].map((c, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-white border border-gray-100"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-1">{c.title}</h3>
                <p className="text-gray-600">{c.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ---------- TOOL MARQUEE ---------- */}
      <section className="py-16 border-y border-gray-100 bg-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h4 className="text-lg font-bold text-gray-700 uppercase tracking-wider mb-8">
            Tools We Use
          </h4>

          <div className="relative overflow-hidden">
            <div className="marquee-track flex gap-14">
              {[...tools, ...tools].map((t, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center hover:scale-110 transition-transform"
                >
                  <img
                    src={t.logo}
                    alt={t.name}
                    className="h-10 w-auto drop-shadow"
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
          .marquee-track { width:max-content; animation: marquee 22s linear infinite; }
          .marquee-track:hover { animation-play-state: paused; }
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        `}</style>
      </section>

      {/* ---------- CREATIVE PREVIEW ---------- */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <img
              src={creativePreview}
              alt="Ad creative & landing alignment"
              className="w-full h-[320px] object-cover"
              loading="lazy"
            />
          </div>
          <p className="text-center text-gray-500 text-sm mt-3">
            Creative & landing page alignment improves Quality Score, CTR and
            conversion rate.
          </p>
        </div>
      </section>

      {/* ---------- WHY YOU NEED ---------- */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-10"
          >
            WHY DO YOU NEED GOOGLE CAMPAIGNS FOR YOUR BUSINESS
          </motion.h2>

          <ul className="max-w-4xl mx-auto">
            {whyPoints.map((p, idx) => (
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

      {/* ---------- FAQ ---------- */}
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
            {faqs.map((f, i) => (
              <details
                key={i}
                className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <summary className="font-semibold text-gray-700 cursor-pointer text-lg">
                  {f.q}
                </summary>
                <div className="mt-3 text-teal-700 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="relative py-24 md:py-28 bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700 text-white overflow-hidden">
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center px-6 z-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Ready to launch{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
              profitable
            </span>{" "}
            Google campaigns?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-white/90 mt-4 max-w-2xl mx-auto"
          >
            Let’s turn your ad spend into measurable revenue. Speak with our
            Google Ads specialists today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Schedule a Call
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
