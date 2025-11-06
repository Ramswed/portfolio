import React from "react";
import { Link, useLocation } from "react-router-dom";
import AnimatedLogo from "./AnimatedLogo";

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">
              <AnimatedLogo />
            </Link>
          </div>
          <ul className="nav-menu">
            <li>
              <Link
                to="/all-work"
                className={`nav-link ${isActive("/all-work") ? "active" : ""}`}
              >
                PROJETS
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`nav-link ${isActive("/about") ? "active" : ""}`}
              >
                À PROPOS
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`nav-link ${isActive("/contact") ? "active" : ""}`}
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
            >
              GITHUB
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
