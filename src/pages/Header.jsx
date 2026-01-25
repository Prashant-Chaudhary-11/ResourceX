import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Optional: close menu when route changes (link click)
  const handleNavClick = () => setIsOpen(false);

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
        <Link to="/" onClick={handleNavClick}>Home</Link>
        <Link to="/resources" onClick={handleNavClick}>Resources</Link>
        <Link to="/categories" onClick={handleNavClick}>Categories</Link>
        <Link to="/collections" onClick={handleNavClick}>Collections</Link>
        <Link to="/blog" onClick={handleNavClick}>Blog</Link>
        <Link to="/about" onClick={handleNavClick}>About</Link>
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

        {/* Mobile Hamburger */}
        <button
          className={`hamburger p-0 d-none align-items-center justify-content-center ${isOpen ? "open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((p) => !p)}
        >
          <img width="30" height="30" src="https://img.icons8.com/ios/50/menu--v1.png" alt="menu--v1"/>
        </button>
      </div>

      {/* Mobile Menu (overlay + panel) */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-backdrop" onClick={() => setIsOpen(false)} />
        <div className="mobile-panel">
          <nav className="mobile-nav">
            <Link to="/" onClick={handleNavClick}>Home</Link>
            <Link to="/resources" onClick={handleNavClick}>Resources</Link>
            <Link to="/categories" onClick={handleNavClick}>Categories</Link>
            <Link to="/collections" onClick={handleNavClick}>Collections</Link>
            <Link to="/blog" onClick={handleNavClick}>Blog</Link>
            <Link to="/about" onClick={handleNavClick}>About</Link>
          </nav>

          <button className="primary-button d-flex align-items-center gap-1 mobile-cta">
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
    </header>
  );
};
