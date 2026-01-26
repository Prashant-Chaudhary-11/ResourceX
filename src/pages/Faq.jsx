import { useMemo, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShinyText from "./ShinyText";

const FAQS = [
  {
    q: "Who can use this platform?",
    a: "Anyone who wants structured resources like notes, cheat sheets, collections, and templates can use this platform.",
  },
  {
    q: "Is there a minimum age requirement to join?",
    a: "Yes. You should be at least 13 years old to create an account. (You can adjust this as per your policy.)",
  },
  {
    q: "How do I create an account?",
    a: "Click on Get Started, enter your email and password, then verify your email to activate your account.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept UPI, debit/credit cards, net banking, and other supported payment gateways depending on your region.",
  },
  {
    q: "How do I update my profile information?",
    a: "Go to Profile settings, edit your details, and click Save. Your changes will be updated instantly.",
  },
  {
    q: "Are there any age restrictions to use this platform?",
    a: "If you are under 18, please use the platform under parental guidance as per the terms.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen, item.a]);

  return (
    <div className={`faq-acc ${isOpen ? "open" : ""}`}>
      <button className="faq-row" type="button" onClick={onToggle} aria-expanded={isOpen}>
        <span className="faq-row-text">{item.q}</span>
        <span className="faq-row-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path
              d="M9 18 15 12 9 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div className="faq-panel" style={{ maxHeight: height }}>
        <div ref={contentRef} className="faq-panel-inner">
          {item.a}
        </div>
      </div>
    </div>
  );
}

export const Faq = () => {
  const [q, setQ] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return FAQS;
    return FAQS.filter((x) => x.q.toLowerCase().includes(t));
  }, [q]);

  // If search changes, close any open accordion (optional but feels clean)
  useEffect(() => {
    setOpenIndex(null);
  }, [q]);

  return (
    <main className="faq-page">
      {/* HERO */}
      <section className="faq-hero">
        <div className="faq-hero-inner">
          <div className="text-center">
            <Link to="/" className="about-link">Home</Link> / Faq
          </div>

          <h1 className="main-heading about-heading-main text-center w-75 m-auto my-5">
            <ShinyText
              text="How can we help you?"
              speed={3.5}
              delay={0}
              color="#072929"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
            />
          </h1>

          <p>
            Welcome to our Help Center! Here, you&apos;ll find answers to frequently
            asked questions, helpful guides, and useful tips to assist you in getting
            the most out of our platform.
          </p>

          <div className="faq-search mt-5">
            <span className="faq-search-icon" aria-hidden="true">
              <img width="24" height="24" src="https://img.icons8.com/ios/50/search--v1.png" alt="search" />
            </span>

            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search"
              aria-label="Search FAQs"
            />
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="faq-body">
        <div className="faq-body-inner">
          <div className="faq-left">
            <span className="blog-tag">Support</span>
            <h2 className="faq-title">FAQS</h2>
            <div className="faq-desc">
              Have questions? We&apos;ve got answers! Check out our Frequently Asked Questions
              (FAQs) to find quick solutions to common queries. Save time and get the
              information you need right here.
            </div>
          </div>

          <div className="faq-right">
            {filtered.map((item, idx) => (
              <FaqItem
                key={item.q}
                item={item}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex((p) => (p === idx ? null : idx))}
              />
            ))}

            {filtered.length === 0 && (
              <div className="faq-empty">No results found.</div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
