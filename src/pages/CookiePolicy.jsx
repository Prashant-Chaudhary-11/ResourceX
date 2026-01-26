import { Link } from "react-router-dom";
import ShinyText from "./ShinyText";

export const CookiePolicy = () => {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="legal-container text-center">
            <div className="text-center">
            <Link to="/" className="about-link">Home</Link> / Cookie Policy
            </div>

            <h1 className="main-heading about-heading-main text-center m-auto my-5">
            <ShinyText
                text="Cookie Policy"
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
            This policy explains how cookies and similar technologies are used on ResourceX.
          </p>
        </div>
      </section>

      <section className="legal-body">
        <div className="legal-container">
          <div className="legal-card">
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small files stored on your device that help websites remember preferences,
              improve performance, and provide a better experience.
            </p>

            <h2>2. Types of Cookies We Use</h2>
            <ul>
              <li><b>Essential cookies:</b> required for login and core site features.</li>
              <li><b>Preference cookies:</b> remember settings like theme or language.</li>
              <li><b>Analytics cookies:</b> help us understand usage and improve UX.</li>
            </ul>

            <h2>3. Managing Cookies</h2>
            <p>
              You can control cookies via your browser settings. Disabling cookies may cause some
              features to stop working properly.
            </p>

            <h2>4. Third-Party Cookies</h2>
            <p>
              Some services (analytics, payments) may set their own cookies. We only use trusted
              providers and limit usage to what is necessary.
            </p>

            <h2>5. Contact</h2>
            <p>
              For questions about cookies, email{" "}
              <a href="mailto:contact@mywebsite.com">contact@mywebsite.com</a>.
            </p>

            <div className="legal-updated">Last updated: Jan 2026</div>
          </div>
        </div>
      </section>
    </main>
  );
}
