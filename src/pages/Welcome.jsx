import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { Explosion } from "./Explosion";
import { Cards } from "./Cards";
import ShinyText from "./ShinyText";

const cards_details = [
    {
        id: 1,
        title: "Cheat Sheets",
        description: "Quick-reference guides for fast revision across multiple subjects.",
        description_small: "Bite-sized learning aids",
        link: "/",
        image: "/img_1.png",
    },
    {
        id: 2,
        title: "Study Notes",
        description: "Well-organized notes to help you understand concepts clearly and easily.",
        description_small: "Concise and clear notes",
        link: "/",
        image: "/study_notes.png",
    },
    {
        id: 3,
        title: "Learning Collections",
        description: "Topic-based bundles designed for focused learning paths.",
        description_small: "Discover a wide range of resources",
        link: "/",
        image: "/books.png",
    },
    {
        id: 4,
        title: "Templates & Tools",
        description: "Ready-to-use templates for resumes, projects, and productivity.",
        description_small: "Enhance your productivity",
        link: "/",
        image: "/resume_1.png",
    },
];

export const Welcome = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const onScroll = () => setScrollY(window.scrollY || 0);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        AOS.init();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="welcome-section">
            <div className="text-center position-relative headings-section">
                <h1 className="main-heading mb-5">
                    <ShinyText
                        text="Welcome to the Ultimate Hub for Learning Resources"
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

                {/* <Explosion explosion_clsss="home-hero-heading__explosions" /> */}

                <p className="sub-heading">
                    A curated library of cheat sheets, notes, and guides to help students and <br />
                    professionals learn faster and work smarter.
                </p>
            </div>

            <div className="row mx-0">
                {cards_details.map((card, index) => (
                    <Cards
                        key={card.id}
                        index={index}
                        scrollY={scrollY}
                        title={card.title}
                        description={card.description}
                        link={card.link}
                        image={card.image}
                        description_small={card.description_small}
                    />
                ))}
            </div>
        </div>
    );
};
