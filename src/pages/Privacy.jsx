import React, { useMemo, useState, useEffect } from "react";

/** Skiez Digital — Privacy Policy (Enhanced UI, your exact content) */

const sections = [
  { id: "applicability", label: "1) Applicability" },
  { id: "data-we-collect", label: "2) Data We Collect" },
  { id: "purpose", label: "3) Purpose of Data Collection" },
  { id: "consent-rights", label: "4) Consent & User Rights" },
  { id: "disclosure", label: "5) Disclosure of Information" },
  { id: "security", label: "6) Data Security Measures" },
  { id: "retention", label: "7) Data Retention" },
  { id: "cookies", label: "8) Cookies & Tracking" },
  { id: "grievance", label: "9) Grievance Officer" },
  { id: "children", label: "10) Children Privacy" },
  { id: "updates", label: "11) Updates to this Policy" },
  { id: "contact", label: "12) Contact Us" },
];

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-teal-300 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
    {children}
  </span>
);

const H2 = ({ id, children }) => (
  <h2
    id={id}
    className="scroll-mt-28 text-2xl font-semibold text-gray-900 mt-10 mb-4"
  >
    {children}
  </h2>
);

const Divider = () => <div className="h-px w-full bg-gray-200 my-8" />;

const BackToTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 rounded-full bg-teal-600 px-4 py-3 text-white shadow-lg hover:bg-teal-700 focus:outline-none"
      aria-label="Back to top"
      title="Back to top"
    >
      ↑
    </button>
  );
};

const Privacy = () => {
  const lastUpdated = useMemo(() => "[21.05.2025]", []);
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-teal-400 to-teal-600 opacity-90" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 text-white">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                Privacy Policy – Skiez Digital
              </h1>
              <p className="mt-3 max-w-2xl text-white/90">
                Effective Date: <strong>{lastUpdated}</strong>
              </p>
              <div className="mt-4 flex items-center gap-3">
                <Badge>Skiez Digital</Badge>
                <Badge>www.skiezdigital.com</Badge>
              </div>
            </div>
          </div>
        </div>
        {/* wave */}
        <svg
          className="text-white/90"
          viewBox="0 0 1440 90"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,96L80,80C160,64,320,32,480,21.3C640,11,800,21,960,26.7C1120,32,1280,32,1360,32L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
        </svg>
      </section>

      {/* Content + TOC */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* TOC */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-24 rounded-xl border border-gray-200 p-4">
              <p className="text-sm font-semibold text-gray-900 mb-3">
                On this page
              </p>
              <nav className="space-y-2">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block text-sm text-gray-600 hover:text-teal-700"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(s.id)
                        ?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      window.history.replaceState(null, "", `#${s.id}`);
                    }}
                  >
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main */}
          <article className="lg:col-span-9 leading-relaxed text-gray-700">
            {/* Intro paragraph (from your page) */}
            <p className="text-gray-700">
              Welcome to Skiez Digital (“we”, “our”, or “us”). We are a digital
              solutions company based in India, specializing in Digital
              Marketing, Website Development and Mobile App Development. This
              Privacy Policy explains how we collect, use, disclose and
              safeguard your personal data in accordance with applicable Indian
              laws, including the Information Technology Act, 2000, and related
              rules.
            </p>

            <H2 id="applicability">1. Applicability</H2>
            <p className="mb-4">This Privacy Policy applies to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>
                Users visiting our website or using our mobile applications
              </li>
              <li>
                Clients who engage with us for digital marketing or development
                services
              </li>
              <li>
                All personal data collected by Skiez Digital through online or
                offline means
              </li>
            </ul>

            <H2 id="data-we-collect">2. Data We Collect</H2>

            <p className="font-medium mb-2">A. Personal Information</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name, Email Address, Contact Number</li>
              <li>Business name, Address, and Designation</li>
              <li>Login Credentials (if applicable)</li>
            </ul>

            <p className="font-medium mb-2">
              B. Sensitive Personal Data or Information (SPDI) (as per IT Rules,
              2011)
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Financial details (when making payments through third-party
                gateways)
              </li>
              <li>Any passwords submitted for account access</li>
              <li>
                Other SPDI required for a specific service (collected with
                explicit consent)
              </li>
            </ul>

            <p className="font-medium mb-2">
              C. Technical &amp; Usage Information
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>IP address, Device type, Operating System</li>
              <li>Browser type, Access time, pages visited</li>
              <li>Cookies and Related tracking data</li>
            </ul>

            <H2 id="purpose">3. Purpose of Data Collection</H2>
            <ul className="list-disc pl-6 mb-6">
              <li>Delivering and Customizing services</li>
              <li>Client communication and Project execution</li>
              <li>Improving website and Application performance</li>
              <li>Digital marketing Activities with your consent</li>
              <li>Legal and Regulatory compliance</li>
            </ul>

            <H2 id="consent-rights">4. Consent and User Rights</H2>
            <p className="mb-4">
              In line with the Digital Personal Data Protection Act, 2023, we
              follow the principles of consent-based data processing. You have
              the right to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Know what personal data is being collected</li>
              <li>Withdraw consent at any time</li>
              <li>
                Request deletion of your data, unless required to retain it
                under law
              </li>
              <li>File a grievance or complaint regarding misuse of data</li>
            </ul>
            <p className="mb-6">
              You may exercise your rights by writing to us at{" "}
              <strong>privacy@skiezdigital.com</strong>.
            </p>

            <H2 id="disclosure">5. Disclosure of Information</H2>
            <p className="mb-4">
              We do not sell or rent your personal data. However, we may share
              your data:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                With service providers (e.g., Hosting, Analytics, Payment
                Processors)
              </li>
              <li>
                With affiliates or consultants assisting with project delivery
              </li>
              <li>As required by law, regulation, or Governmental Authority</li>
            </ul>
            <p className="mb-6">
              All third parties are contractually bound to ensure data
              confidentiality and security.
            </p>

            <H2 id="security">6. Data Security Measures</H2>
            <p className="mb-4">
              We comply with the Reasonable Security Practices and Procedures
              under the IT Rules, 2011, including:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>SSL encryption for data transfer</li>
              <li>Secure servers and firewalls</li>
              <li>Internal data access restrictions</li>
              <li>Regular audits and system testing</li>
            </ul>
            <p className="mb-6">
              We take reasonable steps to ensure your data is not misused,
              altered, or accessed without authorization.
            </p>

            <H2 id="retention">7. Data Retention</H2>
            <p className="mb-4">
              We retain personal data only as long as necessary:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>To fulfil the purpose it was collected for</li>
              <li>
                To comply with legal, contractual, or regulatory obligations
              </li>
              <li>For archival and record-keeping (where allowed)</li>
            </ul>

            <H2 id="cookies">8. Cookies and Tracking Technologies</H2>
            <p className="mb-4">We use cookies to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Personalize your browsing experience</li>
              <li>Understand user behaviour and improve our site</li>
              <li>Serve you relevant ads via third-party platforms</li>
            </ul>
            <p className="mb-6">
              You may disable cookies in your browser, but it may affect certain
              website functions.
            </p>

            <H2 id="grievance">9. Grievance Officer</H2>
            <p className="mb-6">
              In accordance with Indian law, we have appointed a Grievance
              Officer.
              <br />
              <strong>Name:</strong> Dr. S. S. David Raj, MBA(HR), M.Phil.
              (Labour Studies), BL, PhD.
              <br />
              <strong>Email:</strong> grievance@skiezdigital.com
              <br />
              <strong>Designation:</strong> Grievance Officer, Skiez Digital
              <br />
              <strong>Response Time:</strong> Within 15 business days
            </p>

            <H2 id="children">10. Children Privacy</H2>
            <p className="mb-6">
              Our services are not intended for individuals under the age of 18.
              We do not knowingly collect personal data from minors without
              parental consent.
            </p>

            <H2 id="updates">11. Updates to this Policy</H2>
            <p className="mb-6">
              We may update this Privacy Policy from time to time. When we do,
              we will update the “Effective Date” at the top. We encourage you
              to review this page periodically.
            </p>

            <H2 id="contact">12. Contact Us</H2>
            <p className="mb-6">
              Skiez Digital
              <br />
              <strong>Email:</strong> privacy@skiezdigital.com
              <br />
              <strong>Website:</strong> www.skiezdigital.com
              <br />
              <strong>Address:</strong> 81/5, 6th Street, Near Amma Park,
              Shanthi Nagar, Chengalpattu 603003.
            </p>

            <Divider />

            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Skiez Digital. All rights reserved.
            </p>
          </article>
        </div>
      </section>

      <BackToTop />
    </div>
  );
};

export default Privacy;
