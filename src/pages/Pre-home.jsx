import ShinyText from "./ShinyText";
export const PreHome = () => {
    return (
        <div className="pre-home-section position-relative">
            <div className="row mx-0">
                <div className="col-12 col-md-5 d-flex flex-column justify-content-center">
                    <h1 className="pre-main-heading mb-5">
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
                    <p className="sub-heading">
                        A curated library of cheat sheets, notes, and guides to help students and <br />
                        professionals learn faster and work smarter.
                    </p>
                    <div>
                    <button className="primary-button d-flex align-items-center justify-content-center gap-2 mt-4"><img width="24" className="invert-img" height="24" src="https://img.icons8.com/ios/50/rocket--v1.png" alt="rocket--v1"/> Explore Now</button>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                        <div className="position-relative width-135 height-50">
                            <img src="/person_1.jpg" alt="" className="pre-home-persons" />
                            <img src="/person_2.jpg" alt="" className="pre-home-persons" />
                            <img src="/person_3.jpg" alt="" className="pre-home-persons" />
                        </div>
                        <div className="d-flex flex-column">
                            <span className="user-count-pre">500+</span>
                            <span className="happy-heading">Happy Users</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <img src="/home.png" alt="" />
                </div>
            </div>
            <div className="resources-panel position-absolute top-100 start-50 translate-middle d-flex justify-content-around align-items-center shadow-sm">
                <div className="d-flex flex-column align-items-center border-end border-dark pe-5 panel-divider-1">
                    <span className="panel-heading">1500+</span>
                    <span className="panel-subheading">Resources Available</span>
                </div>
                <div className="d-flex flex-column align-items-center border-end border-dark px-5 panel-divider-2">
                    <span className="panel-heading">300+</span>
                    <span className="panel-subheading">Active Learners</span>
                </div>
                <div className="d-flex flex-column align-items-center ps-5 panel-divider-3">
                    <span className="panel-heading">50+</span>
                    <span className="panel-subheading">Categories Covered</span>
                </div>
            </div>
        </div>
    );
}