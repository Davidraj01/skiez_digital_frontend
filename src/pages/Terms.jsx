import React, { useMemo, useState, useEffect } from "react";

const sections = [
  { id: "scope", label: "1) Scope of Services" },
  { id: "client", label: "2) Client Responsibilities" },
  { id: "payments", label: "3) Payments and Invoicing" },
  { id: "ip", label: "4) Intellectual Property" },
  { id: "confidentiality", label: "5) Confidentiality" },
  { id: "revisions", label: "6) Revisions & Change Requests" },
  { id: "liability", label: "7) Limitation of Liability" },
  { id: "warranty", label: "8) Service Warranties" },
  { id: "termination", label: "9) Termination of Services" },
  { id: "law", label: "10) Dispute Resolution & Governing Law" },
  { id: "force", label: "11) Force Majeure" },
  { id: "updates", label: "12) Updates to Terms" },
  { id: "contact", label: "13) Contact Information" },
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
    >
      ↑
    </button>
  );
};

const Terms = () => {
  const lastUpdated = useMemo(() => "21 May, 2025", []);

  return (
    <div className="bg-white text-gray-800">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-teal-400 to-teal-600 opacity-95" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 text-white">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-3 max-w-2xl text-white/90">
            These Terms govern your use of Skiez Digital’s website, services,
            products, and platforms.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <Badge>Skiez Digital</Badge>
            <Badge>Effective Date: {lastUpdated}</Badge>
          </div>
        </div>

        <svg
          className="text-white/90"
          viewBox="0 0 1440 90"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,96L80,80C160,64,320,32,480,21.3C640,11,800,21,960,26.7C1120,32,1280,32,1360,32L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
        </svg>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* TOC */}
          <aside className="lg:col-span-3">
            <div className="sticky top-24 rounded-xl border border-gray-200 p-4">
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
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <article className="lg:col-span-9 leading-relaxed text-gray-700 space-y-6">
            <p>
              Welcome to Skiez Digital ("Company", "we", "our", or "us"). By
              using our services, you agree to these Terms and our Privacy
              Policy. If you do not agree, you may not access or use our
              services.
            </p>

            <H2 id="scope">1. Scope of Services</H2>
            <p>Skiez Digital offers services including, but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Digital marketing (SEO, SEM, Social Media Marketing, Email
                Campaigns)
              </li>
              <li>Website Development and Design</li>
              <li>Mobile App Development (iOS, Android, Cross-platform)</li>
              <li>Branding and UI/UX Consulting</li>
              <li>Maintenance, Hosting & Analytics Support</li>
            </ul>
            <p>All services require written approval or signed agreements.</p>

            <H2 id="client">2. Client Responsibilities</H2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and timely project inputs</li>
              <li>Make payments as scheduled</li>
              <li>Review deliverables within reasonable timelines</li>
              <li>Ensure legal ownership of shared content and materials</li>
            </ul>

            <H2 id="payments">3. Payments and Invoicing</H2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All fees are outlined in quotations or agreements</li>
              <li>
                Payments may be advance, milestone-based, or subscription-based
              </li>
              <li>
                Late payments beyond 7 days may result in service suspension
              </li>
              <li>GST or taxes apply unless otherwise stated</li>
            </ul>

            <H2 id="ip">4. Intellectual Property</H2>
            <p>
              <strong>A. Client-Owned Content:</strong> All branding, content,
              or data you provide remains yours.
            </p>
            <p>
              <strong>B. Skiez Digital Work:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                We retain ownership of source code, strategies, and proprietary
                tools until full payment is completed.
              </li>
              <li>After full payment, usage rights transfer to the client.</li>
              <li>
                We may showcase work in portfolios unless restricted in writing.
              </li>
            </ul>

            <H2 id="confidentiality">5. Confidentiality</H2>
            <p>
              Both parties agree to maintain strict confidentiality regarding
              any proprietary or sensitive business information shared during
              the project. Neither party shall disclose such information to
              third parties without prior written consent.
            </p>

            <H2 id="revisions">6. Revisions & Change Requests</H2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Minor revisions are included per agreement.</li>
              <li>
                Major changes may incur additional cost and timeline extensions.
              </li>
            </ul>

            <H2 id="liability">7. Limitation of Liability</H2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We are not liable for indirect or consequential damages.</li>
              <li>
                Liability is limited to the amount paid for the disputed
                service.
              </li>
            </ul>

            <H2 id="warranty">8. Service Warranties</H2>
            <ul className="list-disc pl-6 space-y-2">
              <li>No guarantee of rankings or financial outcomes.</li>
              <li>Not liable for third-party platform issues.</li>
              <li>Post-delivery support requires separate agreement.</li>
            </ul>

            <H2 id="termination">9. Termination of Services</H2>
            <p>
              Either party may terminate for breach or non-payment. Outstanding
              dues must be cleared.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>There is a breach of agreed terms .</li>
              <li>There is non-payment for services .</li>
              <li>
                The client becomes insolvent or engages in unlawful activity.
              </li>
            </ul>

            <H2 id="law">10. Dispute Resolution & Governing Law</H2>
            <p>
              These Terms shall be governed by the laws of India. Any disputes
              shall be resolved through mutual negotiation, and if unresolved,
              shall be subject to the exclusive jurisdiction of the courts of
              [Insert City, India – e.g., Chennai, Bengaluru].
            </p>

            <H2 id="force">11. Force Majeure</H2>
            <p>
              We are not liable for delays or failure to perform our obligations
              due to causes beyond our reasonable control, including natural
              disasters, wars, internet disruptions, or government restrictions.
            </p>

            <H2 id="updates">12. Updates to Terms</H2>
            <p>
              Skiez Digital may revise these Terms at any time. Updates will be
              posted on our website with a revised “Effective Date.” Continued
              use of our services after changes implies your acceptance. .
            </p>

            <H2 id="contact">13. Contact Information</H2>
            <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
              <p>
                <strong>Email:</strong> privacy@skiezdigital.com
              </p>
              <p>
                <strong>Website:</strong> www.skiezdigital.com
              </p>
              <p>
                <strong>Address:</strong> 81/5, 6th Street, Near Amma Park,
                Shanthi Nagar, Chengalpattu 603003.
              </p>
            </div>

            <p className="text-sm text-gray-500 mt-10">
              © {new Date().getFullYear()} Skiez Digital. All rights reserved.
            </p>
          </article>
        </div>
      </section>

      
    </div>
  );
};

export default Terms;
