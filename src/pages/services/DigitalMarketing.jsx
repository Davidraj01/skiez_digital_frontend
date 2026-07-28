import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import IndustriesStatsSection from "@/components/IndustrialStats";

const topics = [
  {
    title: "SEO (Search Engine Optimization)",
    desc: "Improve organic visibility and drive qualified traffic with technical SEO, on-page optimization and content strategies tailored to your niche.",
    image:
      "https://plus.unsplash.com/premium_photo-1684225764999-3597a8da10ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    link: "/services/digital-marketing/seo",
  },
  {
    title: "Email Marketing",
    desc: "Build relationships and boost retention with targeted email flows, newsletters and automated campaigns that convert prospects into repeat customers.",
    image:
      "https://plus.unsplash.com/premium_photo-1682309572625-791e25352998?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RS1tYWlsJTIwbWFya2V0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    link: "/services/digital-marketing/email-marketing",
  },
  {
    title: "Content Marketing",
    desc: "Attract and educate your audience with SEO-friendly blog posts, guides, video scripts and content strategies that position your brand as an authority.",
    image:
      "https://media.istockphoto.com/id/1186285220/photo/content-marketing-news-social-media-websites-and-advertising-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=mkkaR_giex0Li_-Jx9vJpF5HdlYgBnGTtGuunqT2G-o=",
    link: "/services/digital-marketing/content-marketing",
  },
  {
    title: "Social Media Marketing",
    desc: "Grow brand awareness and engagement with platform-specific strategies, creative assets and community management across Instagram, LinkedIn, X and more.",
    image:
      "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    link: "/services/digital-marketing/social-media",
  },
  {
    title: "Meta Ads (Facebook & Instagram)",
    desc: "Run conversion-focused Meta ad campaigns with precise audience targeting, creative testing and ongoing optimization for maximum ROI.",
    image:
      "https://media.istockphoto.com/id/2098359215/photo/digital-marketing-concept-businessman-using-laptop-with-ads-dashboard-digital-marketing.webp?a=1&b=1&s=612x612&w=0&k=20&c=bo9P4L3HQM2cipWrh8W7_HwPYNnUdHKqucWnduQLge0=",
    link: "/services/digital-marketing/meta-ads",
  },
  {
    title: "Google Campaigns (Search & Display)",
    desc: "Capture demand with Search Ads and build awareness with Display and YouTube campaigns keyword strategy, bidding and conversion tracking included.",
    image:
      "https://images.unsplash.com/vector-1745065955144-6d0d06905350?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z29vZ2xlJTIwY2FtcGFpZ24lMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    link: "/services/digital-marketing/google-campaigns",
  },
];

const whyCards = [
  {
    title: "Data-Driven Strategy",
    text: "We use analytics and testing to make every decision measurable your campaigns improve over time.",
    icon: "📊",
  },
  {
    title: "Creative & Copy",
    text: "High-quality creative + persuasive copy that captures attention and converts.",
    icon: "🎨",
  },
  {
    title: "Dedicated Strategist",
    text: "A single point-of-contact who understands your goals and coordinates delivery.",
    icon: "🤝",
  },
  {
    title: "Transparent Reporting",
    text: "Clear dashboards and weekly reports so you always know what’s working.",
    icon: "🔍",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Audit & Discovery",
    desc: "Full-site and channel audit (SEO, paid ads, content & socials), competitor analysis and audience research to identify quick wins and long-term opportunities.",
    accent: "Research & Audit",
  },
  {
    step: "2",
    title: "Strategy & Roadmap",
    desc: "Define measurable goals (traffic, leads, CAC), select channels, set budgets and create a 90-day roadmap with KPIs and testing plans.",
    accent: "Channel Strategy",
  },
  {
    step: "3",
    title: "Creative & Setup",
    desc: "Produce high-converting creatives, landing pages and ad copy; implement tracking, pixels and analytics; setup campaign structures for testing.",
    accent: "Creative + Tracking",
  },
  {
    step: "4",
    title: "Launch & Optimize",
    desc: "Run phased launches with A/B tests, audience experiments and bid strategies iterate quickly to improve CTR, conversions and CAC.",
    accent: "Testing & Optimization",
  },
  {
    step: "5",
    title: "Reporting & Scale",
    desc: "Deliver transparent dashboards, weekly insights and tactical recommendations. Scale winners and refine the long-term growth strategy.",
    accent: "Reporting & Growth",
  },
];


const faqs = [
  {
    q: "How soon will I see results?",
    a: "You can expect measurable improvements in 4–8 weeks for paid campaigns and 3–6 months for organic SEO work.",
  },
  {
    q: "Do you create ad creatives?",
    a: "Yes we handle creatives, copy, A/B testing and landing pages end-to-end.",
  },
  {
    q: "What’s the minimum budget?",
    a: "We tailor to businesses of all sizes we’ll recommend budgets based on objectives during the free strategy call.",
  },
];

export default function DigitalMarketing() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Hero */}
      <section
        className="relative w-full h-[420px] md:h-[480px] flex items-center justify-center text-center mb-20"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1652679812/photo/digital-marketing-business-technology-website-advertisement-email-social-media-network-seo.webp?a=1&b=1&s=612x612&w=0&k=20&c=J8PY0VM1n_Sw-iUFQOm5AHE57CGsfj_o4-M4AMEmygw=')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-teal-500 leading-tight">
            Digital Marketing
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-6">
            Digital Marketing that helps your brand stand out increase
            visibility, reach the right audience and achieve real growth with
            smart SEO, social media and ads.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-teal-500 to-gray-600 text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:brightness-105 transition"
          >
            Get a Free Strategy Call →
          </a>
        </div>
      </section>

      {/* Zig-Zag Topic Sections */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 space-y-20 pb-12">
        {topics.map((t, i) => (
          <motion.div
            key={t.title}
            className={`flex flex-col md:flex-row ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-10`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="relative flex-1 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-gray-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition"></div>
              <img
                src={t.image}
                alt={t.title}
                className="relative w-full h-[320px] object-cover rounded-2xl shadow-xl"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-gray-700 bg-clip-text text-transparent">
                {t.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{t.desc}</p>
              <Link
                to={t.link}
                className="inline-block bg-gradient-to-r from-teal-500 to-gray-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:brightness-105 transition"
              >
                Learn More →
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Why Choose Us */}
      {/* ⚡ Upgraded Why Choose SKIEZ Digital Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-4 text-center text-gray-900"
        >
          Why Choose <span className="text-teal-600">SKIEZ Digital</span>
        </motion.h3>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          We blend strategy, creativity and technology to deliver measurable
          digital growth built for ambitious brands.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyCards.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* gradient border pulse */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400/10 via-gray-200/5 to-transparent opacity-0 group-hover:opacity-100 blur transition duration-500"></div>

              {/* icon */}
              <div className="relative z-10 flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-teal-50 to-white shadow-inner ring-1 ring-gray-100">
                <span className="text-3xl">{c.icon}</span>
              </div>

              {/* text */}
              <div className="relative z-10 text-center md:text-left">
                <h4 className="font-semibold text-gray-900 mb-2 text-lg group-hover:text-teal-600 transition">
                  {c.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {c.text}
                </p>
              </div>

              {/* subtle bottom gradient */}
              <div className="absolute bottom-0 left-0 w-full h-1 rounded-b-2xl bg-gradient-to-r from-teal-400 to-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold mb-10 text-gray-900"
        >
          Our Process -  How We Deliver Growth
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-200 hidden md:block" />

          <div className="space-y-8">
            {processSteps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="flex items-start gap-6"
                aria-labelledby={`process-${item.step}-title`}
              >
                {/* Step Indicator */}
                <div className="relative flex-shrink-0">
                  <div className="md:absolute md:-left-[44px] md:top-0 flex items-center justify-center w-12 h-12 rounded-full bg-teal-600 text-white font-semibold shadow-lg">
                    {item.step}
                  </div>

                  {/* Mobile Chip */}
                  <div className="block md:hidden">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold">
                        {item.step}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
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

                    {/* Subtle arrow */}
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

                  {/* Micro CTA */}
                  <div className="mt-4">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:underline"
                    >
                      Talk to a growth expert
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

      {/* Industries & Stats */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <IndustriesStatsSection />
      </section>

    

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <h3 className="text-2xl font-extrabold mb-6">
          Frequently Asked Questions
        </h3>
        <div className="space-y-3">
          {faqs.map((f, idx) => (
            <div
              key={f.q}
              className="bg-white border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                className="w-full px-5 py-4 text-left flex justify-between items-center"
              >
                <span className="font-medium text-gray-800">{f.q}</span>
                <span className="text-gray-500">
                  {openFAQ === idx ? "−" : "+"}
                </span>
              </button>
              {openFAQ === idx && (
                <div className="px-5 pb-4 pt-0 text-sm text-gray-700">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
