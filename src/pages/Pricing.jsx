import { useMemo, useState } from "react";
import ShinyText from "./ShinyText";
import { Link } from "react-router-dom";

export const Pricing = () => {
  const [billing, setBilling] = useState("annual"); // "monthly" | "annual"

  const savePercent = 35;

  const plans = useMemo(() => {
    const isAnnual = billing === "annual";

    return [
      {
        name: "Free",
        price: "$0",
        unit: "Per user/month, billed annually",
        subtitle: "For your hobby projects",
        features: [
          "Free e-mail alerts",
          "3-minute checks",
          "Automatic data enrichment",
          "10 monitors",
          "Up to 3 seats",
        ],
        cta: "Get started for free",
        tone: "light",
      },
      {
        name: "Pro",
        badge: "Popular",
        price: isAnnual ? "$85" : "$120",
        unit: isAnnual ? "Per user/month, billed annually" : "Per user/month, billed monthly",
        subtitle: "Great for small businesses",
        features: [
          "Unlimited phone calls",
          "30 second checks",
          "Single-user account",
          "20 monitors",
          "Up to 6 seats",
        ],
        cta: "Get started with Pro",
        tone: "light",
      },
      {
        name: "Enterprise",
        price: "Custom",
        unit: "Per user/month, billed annually",
        subtitle: "For multiple teams",
        features: [
          "Everything in Pro",
          "Up to 5 team members",
          "100 monitors",
          "15 status pages",
          "200+ integrations",
        ],
        cta: "Get started with Enterprise",
        tone: "dark",
      },
    ];
  }, [billing]);

  return (
    <main className="pricing-page">
      {/* Header */}
      <section className="legal-hero">
        <div className="legal-container text-center">
            <div className="text-center">
            <Link to="/" className="about-link">Home</Link> / Plans and Pricing
            </div>

            <h1 className="main-heading about-heading-main text-center m-auto my-5">
            <ShinyText
                text="Plans and Pricing"
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
            Receive unlimited credits when you pay yearly, and <br />
            save on your plan.
          </p>
        </div>
      </section>
      <section className="pricing-hero">
        <div className="pricing-container">

          {/* Toggle */}
          <div className="billing-toggle" role="tablist" aria-label="Billing toggle">
            <button
              type="button"
              className={`billing-btn ${billing === "monthly" ? "active" : ""}`}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>

            <button
              type="button"
              className={`billing-btn ${billing === "annual" ? "active" : ""}`}
              onClick={() => setBilling("annual")}
            >
              Annual
              <span className="billing-save">Save {savePercent}%</span>
            </button>
          </div>

          {/* Cards */}
          <div className="pricing-grid">
            {plans.map((p) => (
              <div key={p.name} className={`price-card ${p.tone === "dark" ? "dark" : ""}`}>
                <div className="card-top">
                  <div className="card-name">
                    {p.name}
                    {p.badge && <span className="card-badge">{p.badge}</span>}
                  </div>
                </div>

                <div className="card-price">{p.price}</div>
                <div className="card-unit">{p.unit}</div>

                <div className="card-divider" />

                <div className="card-sub">{p.subtitle}</div>

                <ul className="card-features">
                  {p.features.map((f) => (
                    <li key={f}>
                      <img width="22" height="22" src="https://img.icons8.com/ios-filled/50/checked-2--v1.png" alt="checked-checkbox"/>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button type="button" className={`card-cta mt-4 ${p.tone === "dark" ? "dark" : ""}`}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
