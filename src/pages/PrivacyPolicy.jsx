import { Link } from "react-router-dom";
import ShinyText from "./ShinyText";

export const PrivacyPolicy = () => {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="legal-hero-inner text-center">
          <div className="text-center">
            <Link to="/" className="about-link">Home</Link> / Privacy Policy
          </div>

          <h1 className="main-heading about-heading-main text-center m-auto my-5">
            <ShinyText
              text="Privacy Policy"
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
            This page explains what data we collect, why we collect it, and how we keep it safe.
          </p>
        </div>
      </section>

      <section className="legal-body">
        <div className="legal-container">
          <div className="legal-card">
            <h2>1. Information We Collect</h2>
            <ul>
              <li><b>Account data:</b> name, email, and basic profile details.</li>
              <li><b>Usage data:</b> pages visited, clicks, and feature usage for improvement.</li>
              <li><b>Device data:</b> browser type, IP address (approx), and language settings.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To provide and improve the platform features.</li>
              <li>To personalize content and recommend resources.</li>
              <li>To communicate updates, support replies, and important notices.</li>
            </ul>

            <h2>3. Data Sharing</h2>
            <p>
              We do not sell your personal data. We may share limited data with trusted services
              (like hosting, analytics, payment providers) only to run the platform.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We use reasonable security practices (encryption, access controls, and monitoring)
              to protect your data, but no system is 100% secure.
            </p>

            <h2>5. Your Rights</h2>
            <ul>
              <li>Access, correct, or delete your account information.</li>
              <li>Opt-out of marketing emails anytime.</li>
              <li>Request information about your stored data.</li>
            </ul>

            <h2>6. Contact</h2>
            <p>
              If you have questions about this Privacy Policy, contact us at{" "}
              <a href="mailto:contact@mywebsite.com">contact@mywebsite.com</a>.
            </p>

            <div className="legal-updated">Last updated: Jan 2026</div>
          </div>
        </div>
      </section>
    </main>
  );
}
