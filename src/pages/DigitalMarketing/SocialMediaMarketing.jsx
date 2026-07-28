// src/pages/services/SocialMediaMarketing.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import canvaLogo from "../../assets/canva.png";
import { api, assetUrl } from "@/lib/api";

export default function SocialMediaMarketing() {
  const [preview, setPreview] = useState(null);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    api
      .get("/social-posts")
      .then((res) => setGallery(res.data.posts))
      .catch(() => setGallery([]));
  }, []);

  const services = [
    {
      title: "Strategy & Calendar",
      desc: "Audience-first content calendar, channel mix and campaign planning.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Creative Production",
      desc: "Short-form video, carousel posts, reels and stories designed for engagement.",
      img: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Community & Engagement",
      desc: "Community management, moderation and influencer outreach to build social proof.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Paid Social",
      desc: "Campaign setup, creative testing and ROAS optimisation across Meta and Instagram.",
      img: "https://images.unsplash.com/photo-1740174459726-8c57d8366061?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFpZCUyMHNvY2lhbCUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    },
  ];


  const highlights = [
    {
      title: "Trend Spotting",
      desc: "We analyse emerging platform trends and adapt them into your content plan before they peak.",
      icon: "🔎",
    },
    {
      title: "UGC Integration",
      desc: "We blend influencer and user-generated content to humanize your brand and boost credibility.",
      icon: "🤝",
    },
    {
      title: "Analytics & Optimization",
      desc: "Deep dive reporting on CTR, engagement and conversion metrics to refine strategy each month.",
      icon: "📊",
    },
  ];


  const tools = [
    {
      name: "Canva",
      logo: canvaLogo,
    },
    {
      name: "Light Room",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/768px-Adobe_Photoshop_Lightroom_CC_logo.svg.png?20200616120137",
    },
    {
      name: "Meta Ads",
      logo: "https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg",
    },
    {
      name: "publer",
      logo: "https://cdn.brandfetch.io/idt2HRhezv/w/180/h/180/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B",
    },
    {
      name: "Hootsuite",
      logo: "https://cdn.brandfetch.io/id9Up4qFxi/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    },
    
  ];

  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section
        className="relative h-[480px] md:h-[600px] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1643503640904-75c1a2093570?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvY2lhbCUyMG1lZGlhJTIwbWFya2V0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600')",
        }}
        aria-label="Social media marketing hero"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content Centered */}
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold text-white"
          >
            Social Media Marketing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="text-gray-200 mt-4 max-w-2xl mx-auto"
          >
            Creative-first social campaigns, audience building and paid
            amplification to drive measurable growth.
          </motion.p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold shadow"
            >
              Start a Campaign
            </Link>

            
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          What we do
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden"
            >
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 bg-gradient-to-b from-teal-50 to-white">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Recent creative highlights
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((post, i) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="overflow-hidden rounded-2xl shadow-md bg-white"
            >
              <img
                src={assetUrl(post.image)}
                alt={post.caption || "Social media creative"}
                className="w-full h-56 object-cover cursor-pointer"
                onClick={() => setPreview(assetUrl(post.image))}
              />
            </motion.div>
          ))}
        </div>

        {/* ✅ Full Screen Preview */}
        {preview && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setPreview(null)}
          >
            <img
              src={preview}
              alt="preview"
              className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        )}
      </section>

      {/* SOCIAL MEDIA HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Social Media Highlights
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <div className="text-4xl mb-3">{h.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{h.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TOOLS */}
      <section className="py-12 border-t border-gray-100 bg-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h4 className="text-lg font-bold text-gray-700 uppercase tracking-wider mb-8">
            Tooling & partners
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
            {tools.map((t, i) => (
              <div key={i} className="flex items-center justify-center p-4">
                <img
                  src={t.logo}
                  alt={t.name}
                  className="h-10 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
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
                What's social media marketing and why is it important for my
                business?
              </summary>
              <div className="mt-3 text-teal-600 leading-relaxed">
                Social media marketing uses platforms like Facebook and
                Instagram to increase brand mindfulness, engage cult, and drive
                deals
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <summary className="font-semibold text-gray-600 cursor-pointer text-lg">
                How do I choose the stylish social media marketing strategy?
              </summary>
              <div className="mt-3 text-teal-600 leading-relaxed">
                A acclimatized strategy depends on your pretensions, target
                followership, and platform preferences. Research and analytics
                help identify the right approach
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <summary className="font-semibold text-gray-600 cursor-pointer text-lg">
                What social media marketing services should I invest in?
              </summary>
              <div className="mt-3 text-teal-600 leading-relaxed">
                Invest in content creation, paid advertising, influencer
                hookups, community operation, and analytics to maximize results.
              </div>
            </details>
            <details className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <summary className="font-semibold text-gray-600 cursor-pointer text-lg">
                How does a social media marketing agency ameliorate my online
                presence?
              </summary>
              <div className="mt-3 text-teal-600 leading-relaxed">
                An agency brings moxie, tools, and experience to produce
                effective juggernauts that enhance reach, engagement, and
                transformations
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700 text-white overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center px-6 z-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-extrabold leading-tight mb-4"
          >
            Ready to make your brand social-first?
          </motion.h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's build scroll-stopping creative and campaigns that bring
            measurable results. Book a free strategy call.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Schedule a Strategy Call
          </Link>
        </div>
      </section>
    </main>
  );
}
