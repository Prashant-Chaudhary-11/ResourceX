import Silk from "../components/Silk";

export const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Silk background */}
      <div className="footer-silk-bg">
        <Silk 
        speed={5}
    scale={1}
    color="#072929"
    noiseIntensity={1.5}
    rotation={0}/>
      </div>

      {/* Content */}
      <div className="footer-content px-5 py-5">
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

        <div className="row footer-links">
          <div className="col-md-3 col-6 mb-4">
            <h5>Address</h5>
            <p>Remote-first<br/>India<br/>Learn from anywhere</p>
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
            <p>support@resourcex.com<br/>+91 9XXXXXXXXX</p>
          </div>
        </div>

        <div className="footer-bottom mt-4 d-flex justify-content-between">
          <small>© 2026 ResourceX. All rights reserved.</small>
          <small>Built for learners</small>
        </div>
      </div>
    </footer>
  );
};
