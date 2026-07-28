// src/pages/About.jsx
import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FiSearch,
  FiGlobe,
  FiUsers,
  FiMail,
  FiSmartphone,
  FiCpu,
  FiTrendingUp,
  FiStar,
  FiChevronRight,
} from "react-icons/fi";
import FloatingWhatsapp from "@/components/FloatingWatsapp";



export default function AboutPage() {

  useEffect(() => {
    if (typeof window === "undefined") return;

    document.title = "About Skiez Digital Marketing Agency in Chennai";

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Discover how Skiez Digital blends digital marketing, social media, content marketing, meta ads and web development expertise to drive long-term online growth for modern businesses."
    );

    // ✅ Canonical
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://www.skiezdigital.com/about";
  }, []);


  return (
    <div className="bg-white text-gray-900 antialiased">
      <Helmet>
        <title>About — Skiez Digital</title>
        <meta
          name="description"
          content="Skiez Digital — creative meets measurable success. Since 2013, we help brands strengthen their online presence."
        />
      </Helmet>

      <HeroDoc />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ServicesDoc />
        <ProofDoc />
        <ApproachDoc />
        <CTA />
      </div>

      <footer className="text-center py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Skiez Digital — Creativity × Strategy ×
        Technology
      </footer>
    </div>
  );
}

/* ----------------- Hero ----------------- */

function HeroDoc() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 400], [0, -30]);

  return (
    <header className="relative overflow-hidden">
      <div className="absolute -left-24 -top-24 w-96 h-96 rounded-full bg-gradient-to-tr from-teal-400 via-teal-300 to-indigo-300 opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-gradient-to-br from-gray-400 to-teal-100 opacity-10 blur-2xl pointer-events-none" />

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 relative"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
              <FiStar /> Since 2013
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Your Trusted Partner for Digital Growth
            </h1>

            <div className="mt-6 text-lg text-gray-600 max-w-2xl space-y-4">
              <p>
                Welcome to Skiez Digital, where creativity meets measurable
                success. Since our inception in 2013, we’ve been dedicated to
                helping brands strengthen their online presence and achieve
                long-term growth.
              </p>
              <p>
                At Skiez Digital, we understand that digital marketing isn’t
                just about traffic or clicks — it’s about creating genuine
                connections, building brand trust, and delivering real business
                results.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white px-5 py-3 rounded-lg shadow-lg text-sm font-semibold transform hover:scale-[1.02] transition"
              >
                Talk to an expert
                <FiChevronRight />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-50"
              >
                Explore services
              </a>
            </div>
          </motion.div>

          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-0">
                <img
                  src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=1200&q=80"
                  alt="creative studio"
                  className="object-cover w-full h-40 sm:h-56"
                />
                <img
                  src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80"
                  alt="developer"
                  className="object-cover w-full h-40 sm:h-56"
                />
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
                  alt="meeting"
                  className="hidden sm:block object-cover w-full h-40 sm:h-56"
                />
              </div>

              <div className="p-6 bg-white">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      Full-service digital
                    </p>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Design + Marketing + Engineering
                    </h3>
                  </div>
                  <div className="text-sm text-teal-600 font-semibold flex items-center gap-2">
                    <FiTrendingUp /> Growth
                  </div>
                </div>

                <p className="mt-3 text-sm text-gray-600">
                  Case-driven strategies and measured execution for performance
                  that scales.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="text-xs px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-gray-600">
                    Data-driven
                  </span>
                  <span className="text-xs px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-gray-600">
                    White-hat
                  </span>
                  <span className="text-xs px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-gray-600">
                    Performance-first
                  </span>
                </div>
              </div>
            </div>

        
          </motion.div>
        </div>
      </div>

      <div className="-mt-10">
        <svg viewBox="0 0 1440 60" className="w-full h-16">
          <path fill="#FAFAFA" d="M0,0 L1440,0 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </header>
  );
}

/* ----------------- Services (from doc) ----------------- */

function ServicesDoc() {
  const services = [
    {
      title: "Search Engine Optimization (SEO):",
      body: "We help your website rank higher and attract high-quality visitors through strategic keyword research, on-page optimization, high-quality content creation, and credible link building. Our goal is to make your brand visible to those who matter most — your target audience.",
      icon: <FiSearch />,
      image:
        "https://plus.unsplash.com/premium_photo-1685283298465-e52e933a3312?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    },
    {
      title: "Google Ads & Meta (Facebook & Instagram) Advertising:",
      body: "Our paid ad campaigns are data-driven and ROI-focused. From crafting persuasive ad copies to managing budgets and analyzing performance, we ensure every campaign delivers meaningful results and drives conversions.",
      icon: <FiGlobe />,
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Social Media Marketing:",
      body: "We help you engage your audience with creative, consistent, and authentic content. Whether it’s managing pages, running campaigns, or collaborating with influencers, our social media strategies are designed to enhance engagement and brand loyalty.",
      icon: <FiUsers />,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Content Creation:",
      body: "Powerful content shapes strong brands. Our creative team develops blogs, videos, infographics, and other engaging materials that tell your story and position your business as an industry leader.",
      icon: <FiUsers />,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Email Marketing:",
      body: "Keep your customers connected with personalised, well-structured email campaigns. We design email journeys that nurture leads, increase engagement, and inspire action.",
      icon: <FiMail />,
      image:
        "https://images.unsplash.com/photo-1683117927786-f146451082fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZW1haWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    },
    {
      title: "UI/UX DESIGN",
      body: "Our designs focus on delivering smooth navigation, engaging visuals, and meaningful user experiences.\n\nWe ensure every interface is intuitive, responsive, and aligned with your brand identity.\n\nBy understanding user behavior, we create digital journeys that drive engagement and conversions.\n\nPartner with us for UI/UX design services that make your website stand out and perform flawlessly.",
      icon: <FiSmartphone />,
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "FULL STACK",
      body: "Our expert developers handle both frontend and backend to build responsive, secure, and scalable web solutions.\n\nUsing the latest technologies like React, Node.js, and MongoDB, we create fast, dynamic digital experiences.\n\nFrom design to deployment, we ensure seamless functionality and exceptional user experience.\n\nPartner with the best full-stack development Company to turn your ideas into high-performing digital products.",
      icon: <FiCpu />,
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "APP DEVELOPMENT",
      body: "Our App Development Services cover both Android, ensuring seamless performance and stunning design.\n\nWe blend creativity with cutting-edge technology to deliver apps that are fast, secure, and scalable.\n\nFrom concept to launch, our expert developers craft solutions tailored to your business goals.\n\nChoose the best App Development Company to transform your ideas into impactful digital experiences.",
      icon: <FiSmartphone />,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section id="services" className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">
            What We Do: Complete Digital Marketing Solutions
          </h2>
          <p className="text-gray-600 mt-1">
            We offer a full range of digital marketing services designed to meet
            your unique goals and help your business thrive online:
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <motion.article
            whileHover={{ y: -6 }}
            key={s.title}
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-40 object-cover"
                loading="lazy"
              />
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur rounded-lg p-2 border border-gray-100">
                <div className="text-teal-600">{s.icon}</div>
              </div>
            </div>
            <div className="p-6 pt-8">
              <h3 className="font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-3 whitespace-pre-line text-sm text-gray-600">
                {s.body}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
} 

/* ----------------- Proof / Why Choose ----------------- */

function ProofDoc() {
  return (
    <section className="mt-12 bg-gradient-to-r from-teal-300 to-white rounded-xl p-6 border border-gray-100">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-3xl font-bold tracking-wide text-gray-900">
            Why Choose Skiez Digital?
          </h3>
          <div className="mt-4 text-gray-700 max-w-xl space-y-8 leading-relaxed tracking-wide">
            <p>
              We’ve earned clients' trust by consistently delivering results and
              maintaining complete transparency. Here’s what sets us apart:
            </p>
            <ul className="text-[15px] text-gray-700 list-disc list-inside space-y-4 leading-relaxed">
              <li>
                <strong className="text-xl">Proven Results:</strong> We’ve
                helped businesses across industries grow traffic, leads, and
                revenue with strategies that work.
              </li>
              <li>
                <strong className="text-xl">Transparency:</strong> You’ll always
                know what’s happening. We provide detailed reports, honest
                insights, and clear communication throughout every project.
              </li>
              <li>
                <strong className="text-xl">Client-First Approach:</strong>{" "}
                Every strategy is built around your goals. We tailor our plans
                to match your brand’s needs for maximum impact.
              </li>
              <li>
                <strong className="text-xl">Experienced Team:</strong> Our
                digital experts stay up to date with the latest trends, ensuring
                your brand benefits from modern tools and proven practices.
              </li>
              <li>
                <strong className="text-xl">Ethical Standards:</strong> We
                follow white-hat methods and genuine marketing practices that
                protect your brand’s credibility and ensure sustainable success.
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-md border border-gray-100">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80"
            alt="team at work"
            className="w-full h-64 object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}


/* ----------------- Approach & Commitment ----------------- */

function ApproachDoc() {
  return (
    <section className="mt-12">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <h3 className="text-xl font-bold">Our Commitment</h3>
          <p className="mt-3 text-gray-600 text-justify">
            At Skiez Digital, we go beyond traditional marketing. We work as
            your strategic growth partner helping your business adapt,
            innovate, and thrive in an ever-evolving digital world.
          </p>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
            <h4 className="font-semibold">Our mission</h4>
            <p className="text-sm text-gray-600 mt-2">
              Our mission is simple: to empower your brand through creativity,
              strategy, and measurable outcomes that make a difference.
            </p>
          </div>

          <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
            <h4 className="font-semibold">Ready to Grow?</h4>
            <p className="text-sm text-gray-600 mt-2">
              Partner with a digital agency that values your growth as much as
              you do. Contact Skiez Digital today and take the next step toward
              transforming your brand with innovative, effective, and
              result-driven digital marketing strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------- Testimonials ----------------- */





/* ----------------- CTA ----------------- */

function CTA() {
  return (
    <section className="mt-12">
      <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-teal-600 to-teal-500 text-white p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">
              Ready to transform your digital growth?
            </h3>
            <p className="mt-2 text-teal-100 max-w-lg">
              Partner with Skiez Digital - creativity, strategy, and measurable
              outcomes.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-teal-700 px-5 py-3 rounded-lg shadow hover:scale-[1.02] transition"
            >
              Request proposal
            </a>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-4 py-3 rounded-lg"
            >
              Talk to sales
            </a>
          </div>
        </div>
      </div>
      <FloatingWhatsapp/>
    </section>

    
  );
}
