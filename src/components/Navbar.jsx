import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const THRESHOLD = 80;
    let ticking = false;

    const update = () => {
      const next = window.scrollY > THRESHOLD;
      if (next !== isFloating) {
        setIsFloating(next);
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isFloating]);

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50`}
      style={{
        paddingBlock: isFloating ? "var(--space-2xs)" : "0",
        backgroundColor: isFloating
          ? "transparent"
          : "color-mix(in oklch, var(--color-paper) 92%, transparent)",
        borderBottom: isFloating
          ? "1px solid transparent"
          : "1px solid var(--color-rule)",
        backdropFilter: isFloating ? "blur(0)" : "saturate(1.4) blur(14px)",
        WebkitBackdropFilter: isFloating ? "blur(0)" : "saturate(1.4) blur(14px)",
        transition: "padding-block 520ms var(--ease-out), background-color 520ms var(--ease-out), border-color 520ms var(--ease-out), backdrop-filter 520ms var(--ease-out)",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{
          maxWidth: isFloating ? "58rem" : "80rem",
          minHeight: isFloating ? "52px" : "60px",
          paddingBlock: isFloating ? "4px" : "12px",
          paddingInline: "clamp(1rem, 4vw, 2rem)",
          borderRadius: isFloating ? "var(--radius-full)" : "0",
          backgroundColor: isFloating
            ? "color-mix(in oklch, var(--color-paper-2) 88%, transparent)"
            : "transparent",
          backdropFilter: isFloating ? "blur(18px)" : "blur(0)",
          WebkitBackdropFilter: isFloating ? "blur(18px)" : "blur(0)",
          boxShadow: isFloating
            ? "0 8px 32px var(--color-shadow), 0 0 0 1px var(--color-rule) inset"
            : "none",
          transform: isFloating ? "translateY(12px)" : "translateY(0)",
          transition: "max-width 520ms var(--ease-out), min-height 520ms var(--ease-out), padding-block 520ms var(--ease-out), border-radius 520ms var(--ease-out), background-color 520ms var(--ease-out), backdrop-filter 520ms var(--ease-out), box-shadow 520ms var(--ease-out), transform 520ms var(--ease-out)",
        }}
      >
        {/* Wordmark */}
        <Link
          to="/"
          style={{
            fontFamily: "var(--font-wordmark)",
            fontWeight: 400,
            fontSize: "var(--text-lg)",
            color: "var(--color-ink)",
            letterSpacing: "-0.015em",
            textDecoration: "none",
          }}
        >
          Zaryab Lead Solutions
        </Link>

        {/* Desktop links */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="text-sm font-medium whitespace-nowrap"
              style={({ isActive }) => ({
                color: isActive ? "var(--color-accent)" : "var(--color-muted)",
                transition: "color 180ms var(--ease-out)",
              })}
              onMouseEnter={(e) => {
                e.target.style.color = "var(--color-ink)";
              }}
              onMouseLeave={(e) => {
                if (!e.target.className?.includes?.("active")) {
                  e.target.style.color = "var(--color-muted)";
                }
              }}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA + Theme toggle + Mobile toggle */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://www.upwork.com/freelancers/~01a1b2c3d4e5f6g7h8"
            target="_blank"
            rel="noopener noreferrer"
            className="chip"
          >
            Hire Me
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              if (menu) menu.classList.toggle("hidden");
            }}
            aria-label="Toggle menu"
            style={{ color: "var(--color-muted)" }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 5h14M3 10h14M3 15h14" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className="hidden md:hidden"
        style={{
          padding: "var(--space-sm)",
          marginTop: "var(--space-xs)",
          marginInline: "clamp(1rem, 4vw, 2rem)",
          backgroundColor: "color-mix(in oklch, var(--color-paper-2) 95%, transparent)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--color-rule)",
        }}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                if (menu) menu.classList.add("hidden");
              }}
              className="text-sm font-medium py-2 px-3 rounded-md"
              style={({ isActive }) => ({
                color: isActive ? "var(--color-accent)" : "var(--color-muted)",
                backgroundColor: isActive
                  ? "var(--color-paper-3)"
                  : "transparent",
                transition: "color 180ms var(--ease-out), background-color 180ms var(--ease-out)",
              })}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;