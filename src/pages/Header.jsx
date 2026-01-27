import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSection(null);
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);

    // lock body scroll when menu open
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleSection = (name) => {
    setOpenSection((prev) => (prev === name ? null : name));
  };

  return (
    <header className="header d-flex justify-content-between align-items-center py-3">
      <Link to="/"><h2 className="logo">
        Resource
        <span className="logo-x">
          <span className="line line-left"></span>
          <span className="line line-right"></span>
        </span>
      </h2></Link>

      {/* Desktop Nav */}
      {/* Desktop Nav */}
      <nav className="header_navigation desktop-nav">
        <Link to="/">Home</Link>

        {/* Products Dropdown */}
        <div className="nav-dd">
          <button className="nav-dd-btn" type="button">
            Product <span className="nav-dd-caret">▾</span>
          </button>
          <div className="nav-dd-menu">
            <Link to="/study-notes">Study Notes</Link>
            <Link to="/cheat-sheets">Cheat Sheets</Link>
            <Link to="/collections">Collections</Link>
            <Link to="/templates">Templates</Link>
          </div>
        </div>

        {/* Platform Dropdown */}
        <div className="nav-dd">
          <button className="nav-dd-btn" type="button">
            Platform <span className="nav-dd-caret">▾</span>
          </button>
          <div className="nav-dd-menu">
            {/* <Link to="/about">How it works</Link> */}
            <Link to="/pricing">Pricing</Link>
            <Link to="/faq">FAQ</Link>
          </div>
        </div>

        {/* Resources Dropdown */}
        {/* <div className="nav-dd">
          <button className="nav-dd-btn" type="button">
            Resources <span className="nav-dd-caret">▾</span>
          </button>
          <div className="nav-dd-menu">
            <Link to="/blog">Blog</Link>
            <Link to="/collections">Collections</Link>
            <Link to="/categories">Categories</Link>
          </div>
        </div> */}

        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>


      <div className="header-actions d-flex align-items-center">
        <button className="primary-button d-flex align-items-center gap-1 desktop-cta">
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/doodle/48/circled-play--v1.png"
            alt="rocket"
          />
          <Link to="/product">Get Started</Link>
        </button>

        {/* Hamburger (mobile only via CSS) */}
        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
        >
          <img
            width="28"
            height="28"
            src="https://img.icons8.com/ios/50/menu--v1.png"
            alt="menu"
          />
        </button>
      </div>

      {/* FULLSCREEN Mobile Menu */}
      <div className={`mobile-sheet ${isOpen ? "open" : ""}`}>
        <div className="mobile-sheet-backdrop" onClick={closeMenu} />

        <div className="mobile-sheet-panel">
          {/* Top bar */}
          <div className="mobile-sheet-top">
            <div className="mobile-sheet-brand">
              {/* <span className="brand-dot" /> */}
              <span className="brand-text">ResourceX</span>
            </div>

            <button className="mobile-close p-0" aria-label="Close menu" onClick={closeMenu}>
              <img width="24" height="24" src="https://img.icons8.com/ios/50/delete-sign--v1.png" alt="delete-sign--v1" />
            </button>
          </div>

          {/* Accordion sections (like screenshot) */}
          <div className="mobile-sheet-body">
            <button className="mobile-acc" onClick={() => toggleSection("products")}>
              <span>Products</span>
              <span className={`chev ${openSection === "products" ? "up" : ""}`}><img width="20" height="20" src="https://img.icons8.com/ios/50/expand-arrow--v1.png" alt="expand-arrow--v1" /></span>
            </button>
            <div className={`mobile-acc-panel ${openSection === "products" ? "open" : ""}`}>
              <Link to="/study-notes" onClick={closeMenu}>Study Notes</Link>
              <Link to="/cheat-sheets" onClick={closeMenu}>Cheat Sheets</Link>
              <Link to="/collections" onClick={closeMenu}>Collections</Link>
              <Link to="/templates" onClick={closeMenu}>Templates</Link>
            </div>

            <button className="mobile-acc" onClick={() => toggleSection("platform")}>
              <span>Platform</span>
              <span className={`chev ${openSection === "platform" ? "up" : ""}`}><img width="20" height="20" src="https://img.icons8.com/ios/50/expand-arrow--v1.png" alt="expand-arrow--v1" /></span>
            </button>
            <div className={`mobile-acc-panel ${openSection === "platform" ? "open" : ""}`}>
              {/* <Link to="/about" onClick={closeMenu}>How it works</Link> */}
              <Link to="/pricing" onClick={closeMenu}>Pricing</Link>
              <Link to="/faq" onClick={closeMenu}>FAQ</Link>
            </div>

            {/* <button className="mobile-acc" onClick={() => toggleSection("resources")}>
              <span>Resources</span>
              <span className={`chev ${openSection === "resources" ? "up" : ""}`}><img width="20" height="20" src="https://img.icons8.com/ios/50/expand-arrow--v1.png" alt="expand-arrow--v1" /></span>
            </button> */}
            {/* <div className={`mobile-acc-panel ${openSection === "resources" ? "open" : ""}`}>
              <Link to="/blog" onClick={closeMenu}>Blog</Link>
              <Link to="/collections" onClick={closeMenu}>Collections</Link>
              <Link to="/categories" onClick={closeMenu}>Categories</Link>
            </div> */}

            {/* Normal links */}
            <div className="mobile-links">
              <Link to="/" className="header-links" onClick={closeMenu}><span>Home</span></Link>
              <Link to="/blog" className="header-links" onClick={closeMenu}><span>Blog</span></Link>
              <Link to="/about" className="header-links" onClick={closeMenu}><span>About</span></Link>
              <Link to="/contact" className="header-links" onClick={closeMenu}><span>Contact</span></Link>
            </div>

            <div>
              <button className="primary-button mobile-cta" onClick={closeMenu}>
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/doodle/48/circled-play--v1.png"
                  alt="rocket"
                />
                <Link to="/product">Get Started</Link>
              </button>
            </div>

            {/* Social icons (mobile only) */}
            <div className="mobile-social">
              <a
                className="social-pill"
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-glyphs/30/instagram-new.png"
                  alt="instagram"
                />
              </a>

              <a
                className="social-pill"
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-glyphs/30/linkedin.png"
                  alt="linkedin"
                />
              </a>

              <a
                className="social-pill"
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
              >
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-glyphs/30/twitterx.png"
                  alt="x"
                />
              </a>

              <a
                className="social-pill"
                href="https://youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-glyphs/30/youtube-play.png"
                  alt="youtube"
                />
              </a>

              <a
                className="social-pill"
                href="mailto:hello@yourdomain.com"
                aria-label="Email"
              >
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-glyphs/30/new-post.png"
                  alt="email"
                />
              </a>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};
