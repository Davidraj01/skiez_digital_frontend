import React, { useState } from "react";
import { motion } from "framer-motion";

export default function WDFlipCards() {
  const [flipped, setFlipped] = useState(null);

  const cards = [
    {
      id: "brand-identity",
      title: "Build Strong Brand Identity",
      desc: "A well-developed website reflects your brand’s personality and values, helping you establish a professional and credible online presence.",
    },
    {
      id: "global-reach",
      title: "Increase Your Reach",
      desc: "Web development enables your business to reach a wider audience beyond geographical limits, opening possibilities in local and global markets.",
    },
    {
      id: "customer-engagement",
      title: "Enhance Customer Engagement",
      desc: "An intuitive, responsive website improves customer interaction and satisfaction by providing easy navigation and fast-loading pages.",
    },
    {
      id: "boost-sales",
      title: "Boost Sales and Conversions",
      desc: "Custom web solutions guide visitors through the buying process with tools like CTAs, product pages, and secure payment gateways to increase sales.",
    },
    {
      id: "automate-processes",
      title: "Automate Business Processes",
      desc: "Web applications streamline your operations by automating orders, support, and communications, saving time and reducing workload.",
    },
    {
      id: "seo-visibility",
      title: "Improve Visibility with SEO",
      desc: "A properly developed website is optimized for search engines, helping your business rank higher and attract organic traffic.",
    },
    {
      id: "competitive-edge",
      title: "Stay Ahead of Competitors",
      desc: "Having a modern, functional website allows you to stand out in a crowded marketplace and capture more market share.",
    },
  ];

  // Defensive: only render cards that have a title (prevents blank placeholders)
  const visibleCards = cards.filter(
    (c) => c && c.title && c.title.trim() !== ""
  );

  const toggleFlip = (id) => setFlipped((p) => (p === id ? null : id));
  const handleKey = (e, id) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip(id);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-12 py-24">
      <motion.header
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Why our Web Development service stands out
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Custom web development that boosts online visibility, improves user
          experience, and drives measurable business growth.
        </p>
      </motion.header>

      {/* Responsive grid: 1 column mobile, 2 on md, 3 on lg */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {visibleCards.map((card, i) => {
          // fallback id if user omitted it for some reason
          const id = card.id && card.id.trim() !== "" ? card.id : `card-${i}`;
          const isFlipped = flipped === id;

          return (
            <motion.article
              key={id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ translateY: -6 }}
              className={`relative card rounded-2xl shadow-sm transition-transform duration-300 focus-within:shadow-lg border border-gray-200 ${
                isFlipped ? "is-flipped" : ""
              }`}
              tabIndex={0}
              role="button"
              aria-labelledby={`${id}-title`}
              aria-expanded={isFlipped}
              onClick={() => toggleFlip(id)}
              onKeyDown={(e) => handleKey(e, id)}
            >
              {/* top accent */}
              <div className="absolute inset-x-6 -top-3 flex justify-start pointer-events-none z-30">
                <div className="w-14 h-0.5 rounded bg-gradient-to-r from-teal-400 to-cyan-400" />
              </div>

              {/* FLIP WRAPPER */}
              <div className="cardInner min-h-[180px]">
                {/* FRONT face */}
                <div className="cardFace cardFront">
                  <div
                    className="h-full w-full rounded-2xl overflow-hidden bg-teal-300 flex items-center p-6"
                    // style={{ backgroundColor: "rgb(45 212 191)" }}
                  >
                    <div className="flex-1">
                      <h3
                        id={`${id}-title`}
                        className="text-xl font-semibold"
                        style={{ color: "#0f172a" }}
                      >
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* BACK face */}
                <div className="cardFace cardBack">
                  <div className="h-full w-full rounded-2xl overflow-hidden p-6 bg-white flex items-start">
                    <div className="flex-1">
                      <p
                        className="text-base leading-relaxed"
                        style={{ color: "#0f172a" }}
                      >
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Scoped CSS for 3D flip and face stacking */}
      <style>{`
        .card { perspective: 1000px; cursor: pointer; }
        .cardInner {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.55s ease;
        }

        /* flip when hovered, focused, or toggled with .is-flipped */
        .card:hover .cardInner,
        .card:focus-within .cardInner,
        .card.is-flipped .cardInner {
          transform: rotateY(180deg);
        }

        .cardFace {
          position: absolute;
          inset: 0;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          display: block;
        }

        .cardFront {
          transform: rotateY(0deg);
          z-index: 2; /* front on initial state */
        }

        .cardBack {
          transform: rotateY(180deg);
          z-index: 1;
        }

        /* When flipped, ensure back side sits above */
        .card.is-flipped .cardBack { z-index: 3; }

        /* keep rounded corners and hide overflow */
        .card > .cardInner > .cardFace > div { border-radius: 0.75rem; overflow: hidden; height: 100%; }

        /* ensure accent remains visible */
        .card .z-30 { z-index: 40; }
      `}</style>
    </section>
  );
}
