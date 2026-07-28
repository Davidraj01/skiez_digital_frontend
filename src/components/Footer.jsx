import React from "react";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer
      className="bg-[#0f1724] text-gray-300 pt-16 pb-6"
      style={{ position: "relative", zIndex: 40 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand & Description */}
          <div className="col-span-2">
            <img
              src="/skiez-logo.png"
              alt="Skiez Digital Logo"
              className="h-14 w-22 mb-5 rounded-lg"
              style={{ display: "block" }}
            />

            <p className="text-gray-400 leading-relaxed mb-6">
              We provide creative digital solutions from web development and
              marketing to data-driven growth strategies empowering businesses
              to scale globally.
            </p>

            <div className="text-sm space-y-2">
              <p>
                <span className="font-semibold text-white">WhatsApp:</span> +91
                82200 43041
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                info@SkiezDigital.com
              </p>
            </div>
          </div>

          {/* Hire Resources */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Hire Resources
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-sky-400 transition">Hire Designer</li>
              <li className="hover:text-sky-400 transition">Hire Developer</li>
              <li className="hover:text-sky-400 transition">
                Hire Digital Marketer
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-sky-400 transition">
                Customized Web Applications
              </li>
              <li className="hover:text-sky-400 transition">E-commerce</li>
            </ul>
          </div>
        </div>

        {/* Middle Section: Quick Links & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-gray-700">
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/about" className="hover:text-sky-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-sky-400 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-sky-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="hover:text-sky-400 transition"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h4>
            <p className="text-gray-400 mb-3">
              <span className="font-semibold text-white">Enquiries:</span>{" "}
              info@skiezDigital.com
            </p>

            <h5 className="text-white font-semibold text-md mb-3">
              Connect With Us:
            </h5>

            {/* Social Media Icons (protective wrapper class) */}
            <div className="footer-social-wrapper flex gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61574152816624"
                target="_blank"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0d65d9] transition flex items-center justify-center"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.9h-2.3V22c4.78-.75 8.44-4.91 8.44-9.93z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/skiezdigital2025/"
                target="_blank"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-600 transition flex items-center justify-center"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M12 7a5 5 0 100 10 5 5 0 000-10z"></path>
                  <circle cx="17.5" cy="6.5" r="1.5"></circle>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#cc0000] transition flex items-center justify-center"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M21.6 7.2s-.2-1.6-.8-2.3c-.7-1-1.5-1-1.9-1.1C16.6 3.5 12 3.5 12 3.5h-.1s-4.6 0-6.8.3c-.4.1-1.2.1-1.9 1.1-.6.7-.8 2.3-.8 2.3S2 9 2 10.8v2.4C2 15 2.4 16.9 2.4 16.9s.2 1.6.8 2.3c.7 1 1.6 1 2 1.1 1.6.2 6.6.3 6.6.3s4.6 0 6.8-.3c.4-.1 1.2-.1 1.9-1.1.6-.7.8-2.3.8-2.3s.4-2 .4-3.8v-2.4c0-1.8-.4-3.6-.4-3.6z" />
                  <path fill="#fff" d="M9.8 15.1l5.4-3.1-5.4-3.1v6.2z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0d8bd9] transition flex items-center justify-center"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M22 5.9c-.6.3-1.2.6-1.9.7.7-.4 1.2-1 1.4-1.7-.6.4-1.4.7-2.1.8-.6-.6-1.4-1-2.2-1A4 4 0 0012 8.4c0 .3 0 .7.1 1C8 9.2 5 7.4 3 4.7c-.4.7-.6 1.4-.6 2.2 0 1.5.8 2.9 2.1 3.7-.5 0-1-.2-1.5-.4 0 1.9 1.3 3.6 3.2 4-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3 2.3A8 8 0 014 19.3c1.9 1.2 4.2 1.9 6.7 1.9 8 0 12.4-6.5 12.4-12.1v-.6c.9-.6 1.6-1.4 2-2.3-.8.4-1.7.7-2.6.7z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/skiezdigital-marketing/posts/?feedView=all"
                target="_blank"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#004182] transition flex items-center justify-center"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M4.98 3.5a2.5 2.5 0 11-.02 0zM3 8.98h4v12H3zM9 8.98h3.8v1.6h.1c.5-.9 1.9-1.8 3.8-1.8 4 0 4.7 2.6 4.7 6v6.2h-4v-5.5c0-1.3 0-3-1.9-3-1.9 0-2.2 1.5-2.2 2.9v5.6H9z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Contact Address
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              <span className="font-semibold text-white">India:</span> No: 81/5,
              6th street, Shanthi Nagar, Chengalpattu District, Tamilnadu 603
              003.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-6 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Skiez Digital. All Rights Reserved.</p>
          <ul className="flex gap-6 mt-3 md:mt-0">
            <li>
              <a href="/privacy" className="hover:text-sky-400 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms-and-conditions"
                className="hover:text-sky-400 transition"
              >
                Terms
              </a>
            </li>
            <li>
              <a href="/public/sitemap.xml" className="hover:text-sky-400 transition">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
