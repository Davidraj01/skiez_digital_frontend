// src/components/Navbar.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Link } from "react-router-dom";
import logo from "/skiez-logo.png";

const MotionLink = motion(Link);

const LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "UI / UX Design", href: "/services/ui-ux" },
      { label: "Mobile Apps", href: "/services/mobile-apps" },
      {
        label: "Digital Marketing",
        href: "/services/seo-marketing",
        children: [
          { label: "SEO", href: "/services/digital-marketing/seo" },
          {
            label: "Email Marketing",
            href: "/services/digital-marketing/email-marketing",
          },
          {
            label: "Content Marketing",
            href: "/services/digital-marketing/content-marketing",
          },
          {
            label: "Social Media Marketing",
            href: "/services/digital-marketing/social-media",
          },
          {
            label: "Meta Ads",
            href: "/services/digital-marketing/meta-ads"
          },
          {
            label: "Google Campaigns",
            href: "/services/digital-marketing/google-campaigns",
          },
        ],
      },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Careers", href:"/careers"},
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return isMobile;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const [openDropdown, setOpenDropdown] = useState(null); // first-level open label (desktop)
  const [openNested, setOpenNested] = useState(null); // second-level open label (desktop)
  const [mobileOpenMap, setMobileOpenMap] = useState({});
  const closeTimerRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  useEffect(() => {
    if (!isMobile && open) setOpen(false);
  }, [isMobile, open]);

  useEffect(() => {
    function onDocClick(e) {
      if (
        !e.target.closest("[data-dd-panel]") &&
        !e.target.closest("[data-dd-button]")
      ) {
        setOpenDropdown(null);
        setOpenNested(null);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  function toggleMobileSub(label) {
    setMobileOpenMap((m) => ({ ...m, [label]: !m[label] }));
  }

  function clearCloseTimer() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function scheduleClose(delay = 150) {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
      setOpenNested(null);
      closeTimerRef.current = null;
    }, delay);
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[99999] isolate">
        <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200">
          <div className="mx-auto max-w-[1200px] px-6 md:px-12 flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center rounded-md bg-white p-1 shadow-sm">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-22 h-14 object-contain"
                />
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-8 text-lg font-semibold text-slate-700">
                {LINKS.map((l) => {
                  if (!l.children) {
                    return (
                      <li key={l.href}>
                        <Link
                          to={l.href}
                          className="relative hover:text-slate-900 transition-colors group"
                        >
                          {l.label}
                          <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-indigo-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </Link>
                      </li>
                    );
                  }

                  const isOpen = openDropdown === l.label;

                  // wrap parent + panels in a container which manages hover/timeouts
                  return (
                    <li
                      key={l.href}
                      className="relative"
                      onMouseEnter={() => {
                        clearCloseTimer();
                        setOpenDropdown(l.label);
                      }}
                      onMouseLeave={() => {
                        scheduleClose(150);
                      }}
                    >
                      {/* Parent button */}
                      <a
                        href="/services/"
                        data-dd-button
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        onFocus={() => {
                          clearCloseTimer();
                          setOpenDropdown("Services");
                        }}
                        onBlur={() => {
                          scheduleClose(120);
                        }}
                        onMouseEnter={() => {
                          clearCloseTimer();
                          setOpenDropdown("Services");
                        }}
                        className="flex items-center gap-2 group text-slate-700 hover:text-slate-900 transition"
                      >
                        Services
                        <svg
                          className="w-3 h-3 mt-0.5 text-slate-500 group-hover:text-slate-700"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.24 4a.75.75 0 01-1.04 0l-4.24-4a.75.75 0 01-.02-1.06z" />
                        </svg>
                      </a>

                      {/* First-level Dropdown panel */}
                      <div
                        data-dd-panel
                        role="menu"
                        className={clsx(
                          "absolute left-0 top-full mt-0 w-64 rounded-md bg-white border border-slate-200 shadow-lg transition-all duration-150 z-50",
                          isOpen
                            ? "opacity-100 pointer-events-auto translate-y-0"
                            : "opacity-0 pointer-events-none -translate-y-1",
                        )}
                      >
                        <ul className="py-2">
                          {l.children.map((c) => {
                            const hasNested = !!c.children;
                            const nestedOpen = openNested === c.label;
                            return (
                              <li
                                key={c.href}
                                className="relative"
                                onMouseEnter={() => {
                                  clearCloseTimer();
                                  if (hasNested) setOpenNested(c.label);
                                }}
                                onMouseLeave={() => {
                                  // schedule only closing nested (keeps first-level visible while moving)
                                  clearCloseTimer();
                                  closeTimerRef.current = setTimeout(() => {
                                    setOpenNested(null);
                                  }, 120);
                                }}
                              >
                                <div className="flex items-center justify-between">
                                  <Link
                                    to={c.href}
                                    className="block w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition"
                                    onClick={() => {
                                      setOpenDropdown(null);
                                      setOpenNested(null);
                                    }}
                                  >
                                    {c.label}
                                  </Link>

                                  {/* caret to indicate nested */}
                                  {hasNested && (
                                    <button
                                      type="button"
                                      className="absolute right-2 top-2 text-slate-400 hover:text-slate-600"
                                      aria-haspopup="true"
                                      aria-expanded={nestedOpen}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        // toggle nested on click (useful for touchpad)
                                        setOpenNested((cur) =>
                                          cur === c.label ? null : c.label,
                                        );
                                      }}
                                    >
                                      <svg
                                        className="w-4 h-4"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden
                                      >
                                        <path d="M6 8l4 4 4-4" />
                                      </svg>
                                    </button>
                                  )}
                                </div>

                                {/* Nested panel (desktop) — positioned flush to parent with no accidental gap */}
                                {hasNested && (
                                  <div
                                    data-dd-panel
                                    role="menu"
                                    className={clsx(
                                      "absolute left-full top-0 ml-0 w-56 rounded-md bg-white border border-slate-200 shadow-lg transition-all duration-150 z-50",
                                      nestedOpen
                                        ? "opacity-100 pointer-events-auto translate-x-0"
                                        : "opacity-0 pointer-events-none -translate-x-1",
                                    )}
                                    onMouseEnter={() => {
                                      clearCloseTimer();
                                      setOpenNested(c.label);
                                    }}
                                    onMouseLeave={() => {
                                      scheduleClose(120);
                                    }}
                                  >
                                    <ul className="py-2">
                                      {c.children.map((gc) => (
                                        <li key={gc.href}>
                                          <Link
                                            to={gc.href}
                                            className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition"
                                            onClick={() => {
                                              setOpenDropdown(null);
                                              setOpenNested(null);
                                            }}
                                          >
                                            {gc.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Mobile toggle */}
            {isMobile && (
              <div className="flex items-center gap-2">
                <button
                  className="p-2 rounded-md bg-slate-100 text-slate-700 shadow-sm"
                  onClick={() => setOpen((o) => !o)}
                  aria-label={open ? "Close menu" : "Open menu"}
                >
                  {open ? (
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div aria-hidden className="h-16" />

      {/* Mobile menu (unchanged) */}
      <AnimatePresence>
        {isMobile && open && (
          <motion.aside
            className="fixed inset-0 z-50 block pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative mx-auto max-w-[1000px] w-full h-[60vh] max-h-[85vh] overflow-y-auto rounded-b-2xl bg-white shadow-2xl p-6 md:p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <Link to="/">
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-12 h-12 object-contain"
                  />
                </Link>
                <button
                  className="p-2 rounded-md bg-slate-100 text-slate-700 shadow-sm"
                  onClick={() => setOpen(false)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {LINKS.map((l, i) => {
                  if (!l.children) {
                    return (
                      <MotionLink
                        key={l.href}
                        to={l.href}
                        onClick={() => setOpen(false)}
                        className="text-2xl font-semibold text-slate-700 hover:text-indigo-500 transition px-2 py-2 rounded-md"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * i }}
                      >
                        {l.label}
                      </MotionLink>
                    );
                  }

                  const isOpenMobile = !!mobileOpenMap[l.label];

                  return (
                    <div key={l.href} className="px-2">
                      <button
                        onClick={() => toggleMobileSub(l.label)}
                        className="w-full text-left text-2xl font-semibold text-slate-700 hover:text-indigo-500 transition flex items-center justify-between py-2"
                        aria-expanded={isOpenMobile}
                      >
                        <span>{l.label}</span>
                        <svg
                          className={clsx(
                            "w-5 h-5 transition-transform",
                            isOpenMobile ? "rotate-180" : "rotate-0"
                          )}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.24 4a.75.75 0 01-1.04 0l-4.24-4a.75.75 0 01-.02-1.06z" />
                        </svg>
                      </button>

                      <div
                        className={clsx(
                          "mt-2 pl-4 overflow-hidden transition-all",
                          isOpenMobile ? "max-h-[800px]" : "max-h-0"
                        )}
                      >
                        {l.children.map((c, ci) => {
                          const isOpenChild = !!mobileOpenMap[c.label];
                          if (!c.children) {
                            return (
                              <MotionLink
                                key={c.href}
                                to={c.href}
                                onClick={() => setOpen(false)}
                                className="block py-2 text-lg text-slate-600 hover:text-indigo-500 transition"
                                initial={{ opacity: 0, x: -6 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.02 * ci }}
                              >
                                {c.label}
                              </MotionLink>
                            );
                          }

                          // c has nested children (e.g. Digital Marketing)
                          return (
                            <div key={c.href} className="mt-2">
                              <button
                                onClick={() => toggleMobileSub(c.label)}
                                className="w-full text-left text-lg font-semibold text-slate-700 hover:text-indigo-500 transition flex items-center justify-between py-2"
                                aria-expanded={isOpenChild}
                              >
                                <span className="text-lg">{c.label}</span>
                                <svg
                                  className={clsx(
                                    "w-4 h-4 transition-transform",
                                    isOpenChild ? "rotate-180" : "rotate-0"
                                  )}
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.24 4a.75.75 0 01-1.04 0l-4.24-4a.75.75 0 01-.02-1.06z" />
                                </svg>
                              </button>

                              <div
                                className={clsx(
                                  "mt-2 pl-4 overflow-hidden transition-all",
                                  isOpenChild ? "max-h-[600px]" : "max-h-0"
                                )}
                              >
                                {c.children.map((gc, gidx) => (
                                  <MotionLink
                                    key={gc.href}
                                    to={gc.href}
                                    onClick={() => setOpen(false)}
                                    className="block py-2 text-base text-slate-600 hover:text-indigo-500 transition"
                                    initial={{ opacity: 0, x: -6 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.01 * gidx }}
                                  >
                                    {gc.label}
                                  </MotionLink>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </nav>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
