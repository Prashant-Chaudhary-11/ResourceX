// import { Explosion } from "./Explosion";
import { Collectioncards } from "./Collection-cards";
import cheat_sheet from "/col-1.png";
import coder from "/col-2.png";
import resume1 from "/col-3.png";
import book_stack from "/col-4.png";
import template from "/col-5.png";
import visual_guide from "/col-6.png";
import clock from "/col-7.png";
import checklist from "/col-8.png";

const cards_details = [
    {
        id: 1,
        title: "Students improved exam preparation by 40%",
        description: "Using structured notes and revision cheat sheets.",
        description_small: "Better focus. Better results.",
        link: "/",
        image: cheat_sheet
    },
    {
        id: 2,
        title: "Developers saved hours with quick references",
        description: "Frontend and backend cheat sheets for coding.",
        description_small: "Less searching. More building.",
        link: "/",
        image: coder
    },
    {
        id: 3,
        title: "Job seekers built resumes 2x faster",
        description: "With ready-to-use resume templates.",
        description_small: "Career-ready in minutes.",
        link: "/",
        image: resume1
    },
    {
        id: 4,
        title: "Learners completed topics with focused collections",
        description: "Curated learning paths for guided study.",
        description_small: "No more random learning.",
        link: "/",
        image: book_stack
    },
    {
        id: 5,
        title: "Professionals boosted productivity with tools",
        description: "Smart templates and planners for daily work.",
        description_small: "Work smarter, not longer.",
        link: "/",
        image: template
    },
    {
        id: 6,
        title: "Concepts became clearer with visual guides",
        description: "Simple examples for faster understanding.",
        description_small: "Clarity in every topic.",
        link: "/",
        image: visual_guide
    },
    {
        id: 7,
        title: "Revision time reduced with smart summaries",
        description: "Short notes built for last-minute revision.",
        description_small: "Quick recap, strong recall.",
        link: "/",
        image: clock
    },
    {
        id: 8,
        title: "Daily practice improved consistency",
        description: "Practice sets and checklists to build habits.",
        description_small: "Small steps. Big progress.",
        link: "/",
        image: checklist
    },
];

export const Collection = () => {
    return (
        <div className="feature-section">
            <div className="text-center position-relative headings-section">
                <h1 className="main-heading mb-5">
                    Empowering smarter learning <br /> for everyone
                </h1>
                {/* <Explosion explosion_clsss="home-hero-heading__explosions" /> */}
                <p className="sub-heading">
                    Helping students and professionals achieve better results with curated resources.
                </p>
            </div>
            <div className="impact-marquee">
                <div className="mx-0 collection-moving-section row">
                    {cards_details.map((card, index) => (
                        <Collectioncards
                            key={card.id}
                            index={card.id-1}
                            title={card.title}
                            description={card.description}
                            link={card.link}
                            image={card.image}
                            description_small={card.description_small}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

