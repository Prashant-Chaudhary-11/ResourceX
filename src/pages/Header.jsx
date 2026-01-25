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
      <h2 className="logo">
        Resource
        <span className="logo-x">
          <span className="line line-left"></span>
          <span className="line line-right"></span>
        </span>
      </h2>

      {/* Desktop Nav */}
      <nav className="header_navigation desktop-nav">
        <Link to="/">Home</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/collections">Collections</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </nav>

      <div className="header-actions d-flex align-items-center">
        <button className="primary-button d-flex align-items-center gap-1 desktop-cta">
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/doodle/48/circled-play--v1.png"
            alt="rocket"
          />
          Get Started
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

            <button className="mobile-close" aria-label="Close menu" onClick={closeMenu}>
              ✕
            </button>
          </div>

          {/* Accordion sections (like screenshot) */}
          <div className="mobile-sheet-body">
            <button className="mobile-acc" onClick={() => toggleSection("products")}>
              <span>Products</span>
              <span className={`chev ${openSection === "products" ? "up" : ""}`}>⌄</span>
            </button>
            <div className={`mobile-acc-panel ${openSection === "products" ? "open" : ""}`}>
              <Link to="/resources" onClick={closeMenu}>Study Notes</Link>
              <Link to="/resources" onClick={closeMenu}>Cheat Sheets</Link>
              <Link to="/collections" onClick={closeMenu}>Collections</Link>
              <Link to="/templates" onClick={closeMenu}>Templates</Link>
            </div>

            <button className="mobile-acc" onClick={() => toggleSection("platform")}>
              <span>Platform</span>
              <span className={`chev ${openSection === "platform" ? "up" : ""}`}>⌄</span>
            </button>
            <div className={`mobile-acc-panel ${openSection === "platform" ? "open" : ""}`}>
              <Link to="/about" onClick={closeMenu}>How it works</Link>
              <Link to="/about" onClick={closeMenu}>Pricing</Link>
              <Link to="/about" onClick={closeMenu}>FAQ</Link>
            </div>

            <button className="mobile-acc" onClick={() => toggleSection("resources")}>
              <span>Resources</span>
              <span className={`chev ${openSection === "resources" ? "up" : ""}`}>⌄</span>
            </button>
            <div className={`mobile-acc-panel ${openSection === "resources" ? "open" : ""}`}>
              <Link to="/blog" onClick={closeMenu}>Blog</Link>
              <Link to="/collections" onClick={closeMenu}>Collections</Link>
              <Link to="/categories" onClick={closeMenu}>Categories</Link>
            </div>

            {/* Normal links */}
            <div className="mobile-links">
              <Link to="/" onClick={closeMenu}>Home</Link>
              <Link to="/about" onClick={closeMenu}>About</Link>
              <Link to="/blog" onClick={closeMenu}>Contact</Link>
            </div>

            <button className="primary-button mobile-cta" onClick={closeMenu}>
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/doodle/48/circled-play--v1.png"
                alt="rocket"
              />
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
