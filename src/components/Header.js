import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AnimatedLogo from "./AnimatedLogo";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/" onClick={closeMenu}>
              <AnimatedLogo />
            </Link>
          </div>
          <button
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
          >
            <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          </button>
          <div className={`nav-menu-wrapper ${isMenuOpen ? "open" : ""}`}>
            <ul className="nav-menu">
              <li>
                <Link
                  to="/all-work"
                  className={`nav-link ${isActive("/all-work") ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  PROJETS
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`nav-link ${isActive("/about") ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  À PROPOS
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  ME CONTACTER
                </Link>
              </li>
            </ul>
            <div className="nav-github">
              <a
                href="https://github.com/Ramswed"
                target="_blank"
                rel="noopener noreferrer"
                className="github-button"
                onClick={closeMenu}
              >
                GITHUB
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
