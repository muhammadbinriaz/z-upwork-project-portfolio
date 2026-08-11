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
    const root = document.documentElement;
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      root.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      root.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      root.style.overflow = "";
    };
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

  const linkClass = ({ isActive }) =>
    isActive ? "nav__mobile-link active" : "nav__mobile-link";

  return (
    <>
      <header className="nav" ref={navRef} id="nav">
        <div className="nav__inner">
          <Link to="/" className="nav__brand nav__brand--clonix" aria-label="GoLeadFinder — home">
            GoLeadFinder
          </Link>

          <nav className="nav__links" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
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
              className="btn btn--ink btn--sm btn--hire"
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
            <span className="nav__toggle-label" aria-hidden="true">
              {menuOpen ? "Close" : "Menu"}
            </span>
            <span className="nav__toggle-icon" aria-hidden="true">
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </header>

      <div
        id="nav-mobile"
        className={`nav__mobile${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen || undefined}
      >
        <div className="nav__mobile-panel">
          <div className="nav__mobile-head">
            <Link
              to="/"
              className="nav__brand nav__brand--mobile nav__brand--clonix"
              onClick={closeMenu}
            >
              GoLeadFinder
            </Link>
            <button
              type="button"
              className="nav__mobile-close"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <span className="nav__mobile-close-text">Close</span>
              <span className="nav__mobile-close-icon" aria-hidden="true">
                <span></span>
                <span></span>
              </span>
            </button>
          </div>

          <nav className="nav__mobile-body" aria-label="Mobile">
            <p className="nav__mobile-eyebrow">
              <span className="eyebrow__dot eyebrow__dot--accent"></span>
              Navigate
            </p>
            <div className="nav__mobile-links">
              {navLinks.map((link, i) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={linkClass}
                  onClick={closeMenu}
                  style={{ "--i": i }}
                >
                  <span className="nav__mobile-link-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="nav__mobile-link-label">{link.name}</span>
                  <span className="nav__mobile-link-arrow" aria-hidden="true">
                    →
                  </span>
                </NavLink>
              ))}
            </div>
          </nav>

          <div className="nav__mobile-foot">
            <p className="nav__mobile-eyebrow nav__mobile-eyebrow--foot">
              <span className="eyebrow__dot eyebrow__dot--accent"></span>
              Connect
            </p>
            <div className="nav__mobile-connect">
              <a
                href="mailto:zaryabmuhammad@goleadfinder.com"
                className="nav__mobile-connect-link"
                onClick={closeMenu}
              >
                zaryabmuhammad@goleadfinder.com
              </a>
              <a
                href="https://www.upwork.com/freelancers/muhammadz67"
                target="_blank"
                rel="noopener noreferrer"
                className="nav__mobile-connect-link"
                onClick={closeMenu}
              >
                Upwork profile ↗
              </a>
            </div>
            <div className="nav__mobile-actions">
              <ThemeToggle />
              <a
                href="https://www.upwork.com/freelancers/muhammadz67"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ink btn--block"
                onClick={closeMenu}
              >
                Hire Me on Upwork
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
