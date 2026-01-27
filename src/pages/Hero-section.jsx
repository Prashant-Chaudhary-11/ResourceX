import { Link } from "react-router-dom";
import Hero_img from "/hero.png";

export const Hero = () => {
    return (
        <div className="hero-section">
            <div className="row mx-0">
                <div className="col-md-6 columns col-12 p-4">
                    <img src={Hero_img} width="100%" alt="" />
                </div>
                <div className="col-md-6 columns col-12  p-4 d-flex flex-column justify-content-center">
                    <h1 className="hero-section-heading">Meet your all-in-one <br />resource hub for faster <br /> learning and better results</h1>
                    <p className="mt-3">Get high-quality study notes, cheat sheets, books, and templates—organized, clean, and instantly usable. Spend less time searching and more time learning.</p>
                    <ul className="p-0 my-3">
                        <li className="d-flex align-items-center gap-1 mb-2"><img width="20" height="20" src="https://img.icons8.com/glyph-neue/64/checked.png" alt="checked"/> Structured notes that explain topics in simple language</li>
                        <li className="d-flex align-items-center gap-1 mb-2"><img width="20" height="20" src="https://img.icons8.com/glyph-neue/64/checked.png" alt="checked"/> Cheat sheets for quick revision in minutes</li>
                        <li className="d-flex align-items-center gap-1 mb-2"><img width="20" height="20" src="https://img.icons8.com/glyph-neue/64/checked.png" alt="checked"/> Books & guides curated for exams and skill-building</li>
                        <li className="d-flex align-items-center gap-1 mb-2"><img width="20" height="20" src="https://img.icons8.com/glyph-neue/64/checked.png" alt="checked"/> Ready templates for resumes, projects, and productivity</li>
                    </ul>
                    <div className="mt-3">
                    <button className="primary-button"><Link to="/product">Discover the library</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
}