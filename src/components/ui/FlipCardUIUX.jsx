import React, { useState } from "react";
import { motion } from "framer-motion";

export default function UiUxFlipCards() {
  const [flipped, setFlipped] = useState(null);

  const cards = [
    {
      id: "first-impression",
      title: "Creates a Strong First Impression",
      desc: "A well-crafted UI/UX design instantly attracts users and sets a positive tone for how they perceive your brand or product.",
    },
    {
      id: "user-satisfaction",
      title: "Improves User Satisfaction",
      desc: "Good design ensures that users can easily navigate, find what they need, and enjoy a seamless digital experience, leading to higher satisfaction.",
    },
    {
      id: "brand-credibility",
      title: "Builds Brand Credibility",
      desc: "A polished and consistent interface reflects professionalism, helping users trust your brand and products.",
    },
    {
      id: "usability-accessibility",
      title: "Enhances Usability & Accessibility",
      desc: "UI/UX focuses on making digital products intuitive and user-friendly for everyone, including people with different levels of technical skill.",
    },
    {
      id: "reduce-costs",
      title: "Reduces Development Costs & Time",
      desc: "Investing in UI/UX early helps identify usability issues before development, saving time and money on future redesigns or fixes.",
    },
    {
      id: "user-retention",
      title: "Encourages User Retention",
      desc: "A smooth, enjoyable experience keeps users coming back, increasing long-term engagement and loyalty.",
    },
    {
      id: "competitive-advantage",
      title: "Gives a Competitive Advantage",
      desc: "In a crowded digital space, outstanding UI/UX helps your brand stand out and outperform competitors with better customer experiences.",
    },
    {
      id: "aligns-business-goals",
      title: "Aligns Design with Business Goals",
      desc: "UI/UX design bridges the gap between user needs and business objectives, ensuring that every interaction drives measurable results.",
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
          Why our UI / UX service stands out
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Research-led design, rapid validation and conversion-focused UX built
          to scale.
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
