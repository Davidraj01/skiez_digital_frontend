import React, { useEffect } from "react";
import Hero from "../components/Hero";
import CardContainer from "../components/CardContainer";
import StackHome from "../components/StackHome";
import { motion } from "framer-motion";
import HomeSection from "@/components/HomeSection";
import GCHeroWave from "@/components/GCHeroWave";
import Showcase from "@/components/Showcase";

const Home = () => {

  
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Title
    document.title = "Skiez Digital Marketing for Web Development & Growth";

    // Meta description
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Skiez Digital is a Chennai agency driving brand growth with smart marketing, social media, web dev and ads. We focus on delivering measurable business results.",
    );

    // ✅ Canonical
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://www.skiezdigital.com/";
  }, []);

  return (
    <>
      {/* Hero Section */}
      <GCHeroWave />

      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
        >
          SKIEZ{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
            Digital
          </span>{" "}
          Empowering Businesses with{" "}
          <span className="text-gray-900">Data-Driven Growth</span>
        </motion.h2>

        {/* Accent line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-400 mx-auto mt-5 mb-8 rounded-full"
        ></motion.div>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto text-justify"
        >
          <span className="font-semibold text-gray-900">Skiez Digital</span>, we
          are a performance-driven digital marketing agency based in Chennai,
          committed to helping businesses transform into powerful online brands.
          Our approach combines{" "}
          <span className="font-semibold text-gray-900">
            data-driven strategies
          </span>{" "}
          with creative precision to empower startups, SMEs, and enterprises
          alike. We focus on enhancing your brand visibility, driving measurable
          engagement and delivering sustainable growth in today’s competitive
          digital landscape.
        </motion.p>
      </section>

      <CardContainer />
      <StackHome />
      <HomeSection />
      <Showcase />
    </>
  );
};

export default Home;
