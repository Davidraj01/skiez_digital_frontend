import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ---------- Animated counter hook (safe to call inside components) ---------- */
function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = Number(target) || 0;
    if (end === 0) {
      setCount(0);
      return;
    }

    let start = 0;
    const fps = 60;
    const totalFrames = Math.round((duration / 1000) * fps);
    const increment = end / totalFrames;
    let frame = 0;

    const handle = setInterval(() => {
      frame++;
      start += increment;
      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(handle);
      } else {
        setCount(Number(start.toFixed(String(end).includes(".") ? 1 : 0)));
      }
    }, Math.round(1000 / fps));

    return () => clearInterval(handle);
  }, [target, duration]);

  // Show decimals if target had decimals
  return String(count);
}

/* ---------------- StatCard: uses hooks correctly ---------------- */
function StatCard({ label, value, suffix = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  // Only start counting when in view
  const count = useCountUp(inView ? value : 0, 1500);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex-1 text-center min-w-[150px] hover:shadow-lg transition"
    >
      <div className="text-3xl font-bold text-teal-600 mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </motion.div>
  );
}

/* ---------------- Main exported component ---------------- */
export default function IndustriesStatsSection() {
  const industries = [
    "SaaS & Startups",
    "E-commerce",
    "Healthcare",
    "Education",
    "Real Estate",
    "Finance",
  ];

  // numeric values for counting
  const stats = [
    { label: "Avg. Organic Growth", value: 120, suffix: "%" },
    { label: "Meta Ads ROI", value: 3.5, suffix: "x" },
    { label: "Avg. Conversion Lift", value: 28, suffix: "%" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="grid md:grid-cols-3 gap-10 items-start">
        {/* Industries */}
        <div>
          <h3 className="text-2xl font-extrabold mb-4 text-gray-900">
            Industries We Serve
          </h3>
          <ul className="space-y-2 text-gray-700">
            {industries.map((ins) => (
              <motion.li
                key={ins}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "#14b8a6",
                  color: "#ffffff",
                }}
                transition={{ duration: 0.18 }}
                className="bg-white cursor-pointer p-3 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
              >
                {ins}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-extrabold mb-4 text-gray-900">
            Campaign Results (Sample)
          </h3>

          <div className="flex flex-wrap gap-4">
            {stats.map((s, idx) => (
              <StatCard
                key={s.label}
                label={s.label}
                value={s.value}
                suffix={s.suffix}
                delay={idx * 0.12}
              />
            ))}
          </div>

          <p className="mt-6 text-sm text-gray-600">
            These are sample metrics demonstrating the type of growth our
            clients have experienced. Individual results vary by industry,
            budget and timeframe.
          </p>
        </div>
      </div>
    </section>
  );
}
