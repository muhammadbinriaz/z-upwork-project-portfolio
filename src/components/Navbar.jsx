import React, { useState, useEffect, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = ({ navRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    if (!navRef?.current) return;
    navRef.current.classList.toggle("is-menu-open", menuOpen);
  }, [menuOpen, navRef]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") closeMenu();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeMenu]);

  const linkClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <>
      <header className="nav" ref={navRef} id="nav">
        <div className="nav__inner">
          <Link to="/" className="nav__brand" aria-label="GoLeadFinder — home">
            <span className="bub-mark" aria-hidden="true"></span>
            GoLeadFinder
          </Link>

          <nav className="nav__links" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClass}>
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="nav__actions">
            <ThemeToggle />
            <a
              href="https://www.upwork.com/freelancers/muhammadz67"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Muhammad Zaryab's Upwork profile (opens in new tab)"
              className="btn btn--mint btn--sm btn--hire"
            >
              Hire Me
            </a>
          </div>

          <button
            type="button"
            className="nav__toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="nav-mobile"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="nav__toggle-icon" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </header>

      <nav
        id="nav-mobile"
        className={`nav__mobile${menuOpen ? " is-open" : ""}`}
        aria-label="Mobile"
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={linkClass}
            onClick={closeMenu}
          >
            {link.name}
          </NavLink>
        ))}
        <div className="nav__mobile-cta">
          <a
            href="https://www.upwork.com/freelancers/muhammadz67"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--mint btn--block"
            onClick={closeMenu}
          >
            Hire Me on Upwork
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
