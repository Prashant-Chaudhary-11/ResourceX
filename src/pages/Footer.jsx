export const Footer = () => {
    return (
        <footer className="footer-section px-5 py-5">
            {/* Big CTA */}
            <div className="footer-cta d-flex justify-content-between align-items-center mb-5">
                <h1 className="footer-title-behind">
                    LEVEL UP YOUR <br /> LEARNING JOURNEY
                </h1>
                <h1 className="footer-title">
                    LEVEL UP YOUR <br /> LEARNING JOURNEY
                </h1>

                <h2 className="logo text-white">
                    Resource
                    <span className="logo-x">
                        <span className="line line-left white-text"></span>
                        <span className="line line-right white-text"></span>
                    </span>
                </h2>
            </div>

            {/* Bottom Links */}
            <div className="row footer-links">
                <div className="col-md-3 col-6 mb-4">
                    <h5>Address</h5>
                    <p>
                        Remote-first <br />
                        India <br />
                        Learn from anywhere
                    </p>
                </div>

                <div className="col-md-3 col-6 mb-4">
                    <h5>Links</h5>
                    <ul>
                        <li>Resources</li>
                        <li>Collections</li>
                        <li>Templates</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div className="col-md-3 col-6 mb-4">
                    <h5>Legal</h5>
                    <ul>
                        <li>Privacy policy</li>
                        <li>Terms of use</li>
                        <li>Cookie policy</li>
                    </ul>
                </div>

                <div className="col-md-3 col-6 mb-4">
                    <h5>Contact</h5>
                    <p>
                        support@resourcex.com <br />
                        +91 9XXXXXXXXX
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom mt-4 d-flex justify-content-between">
                <small>© 2026 ResourceX. All rights reserved.</small>
                <small>Built for learners</small>
            </div>
        </footer>
    );
};
