import { useEffect, useRef } from "react";

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
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      const total = rect.height - vh;
      const scrolled = -rect.top;
      const t = Math.min(Math.max(scrolled / total, 0), 1);

      /* Heading right -> left */
      const startX = 40;
      const endX = -140;
      const x = startX + (endX - startX) * t;
      headingRef.current.style.transform = `translate(${x}vw, -50%)`;

      /* Cards rotate + float */
      cardRefs.current.forEach((card, i) => {
        const rotateBase = [-10, 10, -7][i];
        const rotateDelta = [20, -25, 15][i];
        const yDelta = [-40, 30, -20][i];
        const xDelta = [30, -20, 18][i];

        const r = rotateBase + rotateDelta * t;
        const y = yDelta * t;
        const x = xDelta * t;

        card.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pixis-section" ref={sectionRef}>
      <div className="pixis-sticky">
        <h2 className="featured-cards-heading big-heading" ref={headingRef}>
          Smarter learning for modern minds
        </h2>

        <div className="cards-layer">
          {FeaturedCardsArray.map((card, index) => (
            <div
              key={index}
              className={`featured-cards card-${index}`}
              ref={(el) => (cardRefs.current[index] = el)}
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
