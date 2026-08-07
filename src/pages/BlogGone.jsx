// src/pages/BlogGone.jsx
// The public blog is temporarily taken down. Blog.jsx / BlogPost.jsx are kept
// intact (unrouted) for when the blog comes back — see App.jsx.
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function BlogGone() {
  useEffect(() => {
    document.title = "301 Moved Permanently | Skiez Digital";

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "The Skiez Digital blog is currently unavailable. Explore our services or head back home."
    );

    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex, follow");

    const canonical = document.querySelector("link[rel='canonical']");
    if (canonical) canonical.remove();
  }, []);

  return (
    <main className="relative min-h-[80vh] overflow-hidden bg-white flex items-center justify-center px-6 py-24 text-center">
      {/* Ambient theme accents, matched to the site's teal/cyan palette */}
      <div className="absolute -left-24 -top-24 w-96 h-96 rounded-full bg-gradient-to-tr from-teal-400 via-teal-300 to-cyan-300 opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-gradient-to-br from-gray-400 to-teal-100 opacity-10 blur-2xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-xl"
      >
        <span className="text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
          301
        </span>

        <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-400 mx-auto mt-5 mb-8 rounded-full" />

        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          This page has moved
        </h1>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Our blog is offline for now while we work on something better.
          In the meantime, explore our services or get in touch with the team.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-teal-500 to-gray-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:brightness-110 transition"
          >
            Back to Home
          </Link>
          <Link
            to="/services"
            className="inline-block px-8 py-3 rounded-full font-semibold text-teal-700 border border-teal-200 hover:bg-teal-50 transition"
          >
            View Our Services
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
