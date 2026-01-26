import { Link } from "react-router-dom";
import ShinyText from "./ShinyText";

export const TermsOfUse = () => {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="legal-container text-center">
            <div className="text-center">
            <Link to="/" className="about-link">Home</Link> / Terms of Use
            </div>

            <h1 className="main-heading about-heading-main text-center m-auto my-5">
            <ShinyText
                text="Terms of Use"
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
            These terms define how you can use ResourceX and what responsibilities apply.
          </p>
        </div>
      </section>

      <section className="legal-body">
        <div className="legal-container">
          <div className="legal-card">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By using this platform, you agree to these Terms. If you don’t agree, please don’t
              use the service.
            </p>

            <h2>2. Accounts</h2>
            <ul>
              <li>You are responsible for your login credentials.</li>
              <li>Provide accurate information during signup.</li>
              <li>We may suspend accounts for misuse or harmful behavior.</li>
            </ul>

            <h2>3. Allowed Use</h2>
            <ul>
              <li>Use resources for personal learning or internal team learning.</li>
              <li>Do not copy, resell, or redistribute paid/private content without permission.</li>
              <li>Do not attempt to hack, scrape, or break the platform.</li>
            </ul>

            <h2>4. Content & Copyright</h2>
            <p>
              All content (notes, templates, collections) is protected. You may use it for learning,
              but you cannot publish it as your own or sell it.
            </p>

            <h2>5. Payments (if applicable)</h2>
            <p>
              If you purchase any product, payments are handled through supported gateways. Refunds
              and cancellations depend on the product policy shown at purchase time.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              We provide content “as is”. We are not liable for damages arising from the use of
              this platform, to the maximum extent allowed by law.
            </p>

            <h2>7. Changes</h2>
            <p>
              We may update these Terms from time to time. Continued use after changes means you
              accept the updated Terms.
            </p>

            <h2>8. Contact</h2>
            <p>
              Questions about these Terms? Email{" "}
              <a href="mailto:contact@mywebsite.com">contact@mywebsite.com</a>.
            </p>

            <div className="legal-updated">Last updated: Jan 2026</div>
          </div>
        </div>
      </section>
    </main>
  );
}
