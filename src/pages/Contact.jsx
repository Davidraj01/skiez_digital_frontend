// src/pages/Contact.jsx
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import { api } from "@/lib/api";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  
  
  useEffect(() => {
    document.title = "Contact Skiez Digital Marketing Experts Today";

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.setAttribute(
      "content",
      "Contact Skiez Digital to discuss custom digital marketing, web development, content marketing, social media and meta ads campaigns that can accelerate your brand’s online visibility and growth."
    );

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://www.skiezdigital.com/contact";
  }, []);



  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const formRef = useRef();

  const onSubmit = async (data) => {
    const tId = toast.loading("Sending your message…");

    try {
      // Save to our backend so it shows up in the admin panel
      await api.post("/contact", {
        name: data.name,
        email: data.email,
        subject: data.subject || "",
        message: data.message,
      });

      // Best-effort: also notify via EmailJS if configured
      if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
        const templateParams = {
          name: data.name,
          email: data.email,
          subject: data.subject || "New message from website",
          message: data.message,
        };
        emailjs
          .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
          .catch((err) => console.error("EmailJS error:", err));
      }

      toast.success("Message sent — we’ll be in touch!", { id: tId });
      reset();
    } catch (err) {
      console.error("Contact submit error:", err);
      const msg =
        err?.response?.data?.message || "Couldn’t send message. Try again later.";
      toast.error(msg, { id: tId });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0b1020] via-[#0f1724] to-[#071124] text-white flex items-center justify-center px-6 py-20">
      {/* NOTE: No <Toaster /> here; keep a single Toaster in App.jsx */}

      <motion.div
        aria-hidden
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.14 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center z-0"
      >
        {/* blob svg … (unchanged) */}
      </motion.div>

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-10">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-sky-400 text-transparent bg-clip-text">
            Let's Build Something Great Together
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Whether you have a project idea, want to collaborate, or simply want
            to say hi drop us a message! We’d love to hear from you.
          </p>

          <div className="space-y-3 text-gray-300">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-sky-400" /> info@skiezdigital.com
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-sky-400" /> +91 82200 43041
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-sky-400" /> Chengalpattu / Chennai, Tamil Nadu, India
            </p>
          </div>

          

          <div className="mt-6 rounded-xl overflow-hidden border border-white/10 shadow-lg">
            <iframe
              title="Skiez Digital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.5805581732207!2d80.00479207516041!3d12.67548392130107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52fdc460b7e4cd%3A0x229159a581c1cb0d!2sSkiez%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2sin!4v1762337149839!5m2!1sen!2sin"
              className="w-full h-56 border-0"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* RIGHT: Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/6 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-white/10"
        >
          <h3 className="text-2xl font-bold mb-2 text-sky-300">Contact Form</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2">Full Name</label>
              <input
                {...register("name", { required: true })}
                className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 focus:ring-2 focus:ring-sky-400 outline-none"
                placeholder="Your Name"
              />
              {errors.name && (
                <span className="text-red-400 text-sm">Name is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 focus:ring-2 focus:ring-sky-400 outline-none"
                placeholder="you@example.com"
              />
              {errors.email && (
                <span className="text-red-400 text-sm">Email is required</span>
              )}
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm mb-2">Subject</label>
            <input
              {...register("subject")}
              className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 focus:ring-2 focus:ring-sky-400 outline-none"
              placeholder="Project or subject"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm mb-2">Message</label>
            <textarea
              {...register("message", { required: true })}
              rows="6"
              className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 focus:ring-2 focus:ring-sky-400 outline-none resize-none"
              placeholder="Describe your project / request..."
            />
            {errors.message && (
              <span className="text-red-400 text-sm">Message is required</span>
            )}
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative group overflow-hidden px-6 py-3 rounded-md font-semibold bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-600 hover:to-sky-600 transition focus:outline-none disabled:opacity-60"
            >
              <span
                aria-hidden
                className="absolute inset-0 -z-10 opacity-60 blur-2xl group-hover:opacity-100 transition"
                style={{
                  background:
                    "linear-gradient(90deg,#ff7eb3,#af40ff,#00f2fe,#4facfe)",
                  mixBlendMode: "screen",
                }}
              />
              <span className="relative z-10">Send Message</span>
            </button>

            <div className="text-sm text-gray-300">
              Or email us at{" "}
              <a
                className="text-sky-300"
                href="mailto:info@skiezdigital.com"
              >
                info@skiezdigital.com
              </a>
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-400">
            Press Enter to submit. We typically reply within 24–48 hours.
          </div>
        </motion.form>
      </div>

      <CursorGlow />
    </section>
  );
}

/* CursorGlow unchanged */
function CursorGlow() {
  React.useEffect(() => {
    const dot = document.createElement("div");
    dot.id = "skiez-cursor-glow";
    document.body.appendChild(dot);
    function move(e) {
      dot.style.transform = `translate3d(${e.clientX - 12}px, ${
        e.clientY - 12
      }px, 0)`;
    }
    window.addEventListener("pointermove", move);
    return () => {
      window.removeEventListener("pointermove", move);
      dot.remove();
    };
  }, []);
  return (
    <style jsx="true" global="true">{`
      #skiez-cursor-glow {
        position: fixed;
        top: 0;
        left: 0;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        pointer-events: none;
        z-index: 99999;
        transform: translate3d(-50%, -50%, 0);
        transition: transform 0.05s linear;
        background: radial-gradient(
          circle at 50% 40%,
          rgba(255, 255, 255, 0.95) 0%,
          rgba(124, 58, 237, 0.6) 25%,
          rgba(14, 165, 233, 0.35) 55%,
          rgba(0, 0, 0, 0) 70%
        );
        mix-blend-mode: screen;
        backdrop-filter: blur(2px);
        opacity: 0.9;
        // ... (rest unchanged)
      }
      @media (max-width: 640px) {
        #skiez-cursor-glow {
          display: none;
        }
      }
    `}</style>
  );
}
