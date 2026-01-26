import { useEffect, useRef } from "react";
import ShinyText from "./ShinyText";
let FeaturedCardsArray = [
  {
    title: "Learn faster, not harder",
    description:
      "Optimize your study sessions with techniques backed by cognitive science to boost retention and understanding.",
    image: "https://img.icons8.com/ios/50/plus-math--v1.png",
  },
  {
    title: "Curated resources, zero clutter",
    description:
      "Access handpicked materials tailored to your learning goals, eliminating distractions and enhancing focus.",
    image: "https://img.icons8.com/ios/50/plus-math--v1.png",
  },
  {
    title: "Everything in one place",
    description:
      "Consolidate your study materials, notes, and resources in a single, easy-to-navigate platform for seamless learning.",
    image: "https://img.icons8.com/ios/50/plus-math--v1.png",
  },
];

export const FeaturedCards = () => {
  return (
    <section className="pixis-section position-relative">
      <div className="pixis-sticky">
        {/* <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>For Techies!</h1>
          <button className="primary-button">Explore Resources</button>
        </div> */}
        <div className="text-center position-relative headings-section">
          <h1 className="main-heading mb-4">
                      <ShinyText
                          text="Smarter learning for modern minds"
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
          <p className="featured-subtext text-center mb-5">
            A curated library of study notes, cheat sheets, templates, and learning tools
            designed to help you learn smarter, build faster, and grow consistently.
          </p>
        </div>


        <div className="cards-layer position-relative">
          {/* <h2 className="featured-cards-heading big-heading">
            Smarter learning for <br /> modern minds
          </h2> */}
          {FeaturedCardsArray.map((card, index) => (
            <div
              key={index}
              className={`featured-cards shadow-sm card-${index}`}
            >
              {/* FRONT */}
              <div className="featured-layer front">
                <h3>{card.title}</h3>
                <img className="featured-icon" src={card.image} />
              </div>

              {/* BACK */}
              <div className="featured-layer back">
                <h5 className="featured-hover-heading">
                  {card.description}
                </h5>
                <img
                  className="featured-icon back-icon"
                  src="https://img.icons8.com/external-outline-berkahicon/64/external-book-linely-literacy-outline-berkahicon-5.png"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
