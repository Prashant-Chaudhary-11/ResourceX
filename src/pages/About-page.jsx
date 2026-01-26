import { Link } from "react-router-dom";
import ShinyText from "./ShinyText";
export const About = () => {
  const stats = [
    { label: "Resources", value: "500+" },
    { label: "Collections", value: "80+" },
    { label: "Templates", value: "120+" },
    { label: "Learners", value: "10k+" },
  ];

  const values = [
    {
      title: "Quality first",
      desc: "We focus on clear, structured and exam-ready content so you waste less time searching.",
      icon: "https://img.icons8.com/ios-filled/50/checked--v1.png",
    },
    {
      title: "Made for speed",
      desc: "Cheat sheets, notes and curated collections designed for fast revision and quick learning.",
      icon: "https://img.icons8.com/ios-filled/50/rocket.png",
    },
    {
      title: "Simple & consistent",
      desc: "Clean UI, easy navigation, and resources organized like a real library.",
      icon: "https://img.icons8.com/ios-filled/50/idea.png",
    },
    {
      title: "Learner-centric",
      desc: "Built by learners, for learners. We understand what you need to succeed.",
      icon: "https://img.icons8.com/ios-filled/50/user--v1.png",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Pick what you need",
      desc: "Choose notes, cheat sheets, templates or curated collections based on your goal.",
    },
    {
      step: "02",
      title: "Learn with structure",
      desc: "Everything is organized topic-wise so you can learn without confusion.",
    },
    {
      step: "03",
      title: "Revise fast",
      desc: "Use quick references to revise in minutes and stay consistent daily.",
    },
  ];

  return (
    <>
      <main className="about-page">
        {/* HERO */}
        <div className="my-3">
          <div className="text-center"><Link to="/" className="about-link">Home</Link> / About Us</div>
          <h1 className="main-heading about-heading-main text-center w-75 m-auto my-5">
            <ShinyText
              text="Our story inspires every journey we create"
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
          <div className="text-center mb-5">
          <img src="/about.jpg" className="about-team-img m-auto" alt="" />
          </div>
          <div className="text-center">
              <div className="about-stats">
                  {stats.map((s) => (
                    <div key={s.label} className="about-stat">
                      <div className="about-stat-value">{s.value}</div>
                      <div className="about-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
          </div>
        </div>
        <section className="about-hero">
          <div className="">
            <div className="about-hero-grid">
              <div className="about-hero-left">
                <span className="blog-tag">About ResourceX</span>
                <h1 className="blog-title my-3">Our mission is to make learning faster, easier, and more effective for everyone.</h1>
                <p className="blog-paragraph">
                  At ResourceX, we believe that learning should be smart, not hard. Our platform is designed to provide students and professionals with high-quality, curated resources that help them achieve better results in less time. Whether you're looking for study notes, cheat sheets, templates, or curated collections, we've got you covered.
                </p>
                <p className="blog-paragraph">
                  Founded by a team of educators and tech enthusiasts, ResourceX was born out of the frustration of spending countless hours searching for reliable study materials. We wanted to create a one-stop solution that simplifies the learning process and empowers users to learn smarter.
                </p>
                <p className="blog-paragraph">
                  Today, ResourceX serves thousands of learners worldwide, providing them with the tools they need to succeed academically and professionally. Our commitment to quality, simplicity, and user-centric design drives everything we do.
                </p>
              </div>

              <div className="about-hero-right">
                <img src="/about.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="about-section">
          <div className="">
            <div className="about-section-head">
              <div className="row mx-0">
                  <div className="col-12 col-md-6 d-flex flex-column justify-content-between p-0">
                    <div>
                      <h1 className="blog-title my-3">What we focus on</h1>
                      <p className="blog-paragraph">
                        Simple, consistent and useful resources that actually help you finish topics faster.
                      </p>
                    </div>
                    <img src="/focus.png" alt="" />
                  </div>
                  <div className="col-12 col-md-6 p-0">
                    <div className="row mx-0">
                      {values.map((v) => (
                        <div className="col-6 col-md-6 mb-4">
                          <div key={v.title} className="about-card h-100">
                            <div className="about-card-icon">
                              <img width="22" height="22" src={v.icon} alt={v.title} />
                            </div>
                            <h3 className="about-h3">{v.title}</h3>
                            <p className="about-muted mt-2">{v.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>

      </main>
        {/* CTA */}
        <section className="about-cta">
          <div className="">
            <div className="about-cta-card d-flex flex-column justify-content-between align-items-center">
              <div className="text-center">
                <h2 className="about-h2">Ready to boost your learning?</h2>
                <p className="about-p">
                  Start with resources or collections and build a strong learning routine.
                </p>
              </div>

              <div className="about-cta-actions">
                <Link className="about-btn primary me-3" to="/resources">
                  Get Started
                </Link>
                <Link className="about-btn ghost bg-white" to="/collections">
                  View Collections
                </Link>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
