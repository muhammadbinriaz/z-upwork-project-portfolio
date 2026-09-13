import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="section section--tight site-footer">
      <div className="container-page">
        {/* Statement */}
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            color: "var(--color-ink)",
            lineHeight: 1.1,
            maxWidth: "28ch",
            marginBottom: "var(--space-2xl)",
          }}
        >
          Let&apos;s scope your next agency project.
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "var(--space-lg)",
            paddingTop: "var(--space-xl)",
            borderTop: "1px solid var(--color-rule)",
          }}
        >
          {/* Wordmark */}
          <Link
            to="/"
            style={{
              fontFamily: "var(--font-wordmark)",
              fontSize: "var(--text-xl)",
              fontWeight: 400,
              color: "var(--color-ink)",
              textDecoration: "none",
              letterSpacing: "-0.015em",
            }}
          >
            GoLeadFinder
          </Link>

          {/* Links */}
          <div
            style={{
              display: "flex",
              gap: "var(--space-lg)",
              flexWrap: "wrap",
            }}
          >
            <Link to="/services" className="site-footer__link">
              Services
            </Link>
            <Link to="/portfolio" className="site-footer__link">
              Portfolio
            </Link>
            <Link to="/about" className="site-footer__link">
              About
            </Link>
            <Link to="/contact" className="site-footer__link">
              Contact
            </Link>
            <a
              href="https://www.upwork.com/freelancers/muhammadz67"
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer__link"
            >
              Upwork ↗
            </a>
          </div>
        </div>

        <p className="site-footer__copy">
          &copy; {new Date().getFullYear()} GoLeadFinder. B2B research and
          data projects delivered worldwide.
        </p>
      </div>
    </footer>
  );
};

export default Footer;