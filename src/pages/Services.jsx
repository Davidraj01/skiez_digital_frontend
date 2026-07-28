import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { useEffect } from "react";

const services = [
  {
    title: "UI / UX Design",
    desc: "We design user-centered interfaces that are both visually appealing and easy to use, ensuring every click feels natural.",
    image:
      "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVpJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    link: "/services/ui-ux",
  },
  {
    title: "Web Development",
    desc: "Our expert developers craft fast, secure and responsive websites that provide seamless user experiences across all devices.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    link: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    desc: "From concept to code, we build intuitive, performance-driven mobile apps that scale and engage users worldwide.",
    image:
      "https://plus.unsplash.com/premium_photo-1722209813944-a4ee13b7bfd8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vYmlsZSUyMGFwcCUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    link: "/services/mobile-apps",
  },
  {
    title: "Digital Marketing",
    desc: "Boost your brand visibility with our strategic SEO and digital marketing campaigns that deliver measurable growth.",
    image:
      "https://plus.unsplash.com/premium_photo-1684179639925-954643b21585?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFNFTyUyMGFuZCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    link: "/services/seo-marketing",
  },
];

export default function Services() {

  
  useEffect(() => {
    if (typeof window === "undefined") return;

    document.title = "Digital Marketing, Web Development & Meta Ads Services";

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.setAttribute(
      "content",
      "Explore Skiez Digital services including digital marketing, social media marketing, content marketing, meta ads and web development designed to improve visibility, leads and brand growth."
    );

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://www.skiezdigital.com/services/";
  }, []);

  return (
    <div className="relative overflow-hidden bg-white">
      {/* 🌄 Hero Section with Background Image */}
      <section
        className="relative w-full h-[420px] md:h-[500px] flex mb-24 items-center justify-center text-center"
        style={{
          backgroundImage: `url(${"https://plus.unsplash.com/premium_photo-1680509034814-e733c5f873ac?q=80&w=1027&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`, // <-- image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text content */}
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-4xl font-extrabold mb-4 text-white leading-tight">
            <span className="bg-gradient-to-r from-teal-400 to-gray-200 bg-clip-text text-transparent">
              THE BEST DIGITAL MARKETING COMPANY IN CHENNAI
            </span>
          </h1>

          <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-6">
            {" "}
            <span className="text-teal-400 font-semibold">Skiez Digital</span>,
            offers expert digital marketing, UI/UX design, SEO, web development
            and social media services to boost visibility and grow your brand
            online.
          </p>

          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-teal-500 to-gray-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:brightness-110 transition"
          >
            Get a Free Consultation →
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-12 text-center md:text-left mb-20">
        <h2 className="text-4xl font-bold mb-6 text-center md:text-left bg-gradient-to-r from-teal-500 to-gray-700 bg-clip-text text-transparent">
          Who We Are
        </h2>
        <h4 className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
          <span className="font-semibold text-teal-600">Skiez Digital</span>, we
          don’t just create an online presence we build digital experiences that
          connect, engage and convert. In today’s competitive digital landscape,
          your brand’s online identity defines how customers perceive and trust
          you. That’s why we focus on designing meaningful, performance-driven
          digital strategies that deliver real growth and measurable results.
          <br />
          <br />
          As a full-service digital marketing agency in Chengalpattu,{" "}
          <span className="font-semibold text-teal-600">
            Skiez Digital
          </span>{" "}
          blends creativity, strategy, and technology to help businesses grow
          smarter and stronger. We create customized marketing plans tailored to
          your brand goals, combining the best of design, development and
          optimization to deliver impactful outcomes.
          <br />
          <br />
          Our expertise covers a wide range of services from digital marketing,
          web development, app development and UI/UX design. Each service is
          crafted with one goal in mind to help your business stand out, attract
          customers and build lasting relationships.
        </h4>
      </section>

      {/* 🧩 Zig-Zag Service Sections */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 space-y-24 pb-24">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className={`flex flex-col md:flex-row ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-10`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Image with gradient border glow */}
            <div className="relative flex-1 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-gray-400 rounded-2xl blur opacity-40 group-hover:opacity-60 transition"></div>
              <img
                src={s.image}
                alt={s.title}
                className="relative w-full h-[350px] object-cover rounded-2xl shadow-xl"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-gray-700 bg-clip-text text-transparent">
                {s.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
              <Link
                to={s.link}
                className="inline-block bg-gradient-to-r from-teal-500 to-gray-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:brightness-110 transition"
              >
                Explore More →
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      <section
        className="relative bg-cover bg-center bg-no-repeat py-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 via-[#134e4a]/60 to-[#0f172a]/80"></div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10 text-white">
          {/* Left Section */}
          <div className="text-center md:text-left max-w-lg">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
              Let’s improve your <span className="text-teal-400">Valuable</span>{" "}
              business!
            </h2>
            <p className="mt-3 text-gray-300 text-base md:text-lg">
              We turn your ideas into scalable digital experiences that drive
              growth, engagement and measurable results.
            </p>
          </div>

          {/* Middle Section */}
          <div className="text-center md:text-left">
            <p className="text-lg font-medium text-gray-200">Give us a ring</p>
            <a
              href="tel:+917550186096"
              className="inline-flex items-center gap-2 text-gray-100 hover:text-teal-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-teal-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2 5.5A2.5 2.5 0 014.5 3h2A2.5 2.5 0 019 5.5V8a2.5 2.5 0 01-2.5 2.5H4.5A2.5 2.5 0 012 8V5.5zm0 10A2.5 2.5 0 014.5 13h2A2.5 2.5 0 019 15.5V18a2.5 2.5 0 01-2.5 2.5H4.5A2.5 2.5 0 012 18v-2.5zm12-10A2.5 2.5 0 0116.5 3h2A2.5 2.5 0 0121 5.5V8a2.5 2.5 0 01-2.5 2.5h-2A2.5 2.5 0 0114 8V5.5zm0 10A2.5 2.5 0 0116.5 13h2A2.5 2.5 0 0121 15.5V18a2.5 2.5 0 01-2.5 2.5h-2A2.5 2.5 0 0114 18v-2.5z"
                />
              </svg>
              +91 82200 43041
            </a>
          </div>

          {/* Right Section */}
          <div>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-teal-500 to-gray-700 hover:from-teal-400 hover:to-gray-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300 ease-out"
            >
              Request a Quote
            </a>
          </div>
        </div>

        {/* Curved bottom effect */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fff"
            d="M0,32L60,48C120,64,240,96,360,85.3C480,75,600,21,720,16C840,11,960,53,1080,69.3C1200,85,1320,75,1380,69.3L1440,64V80H0Z"
          />
        </svg>
      </section>
    </div>
  );
}
