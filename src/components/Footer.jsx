import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        paddingBlockStart: "var(--space-4xl)",
        paddingBlockEnd: "var(--space-xl)",
      }}
    >
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
          Let's build your next prospect list.
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
            <Link
              to="/services"
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--color-muted)",
              }}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--color-muted)",
              }}
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--color-muted)",
              }}
            >
              About
            </Link>
            <Link
              to="/contact"
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--color-muted)",
              }}
            >
              Contact
            </Link>
            <a
              href="https://www.upwork.com/freelancers/muhammadz67"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--color-muted)",
              }}
            >
              Upwork ↗
            </a>
          </div>
        </div>

        <p
          style={{
            marginTop: "var(--space-xl)",
            fontSize: "var(--text-xs)",
            color: "var(--color-muted)",
          }}
        >
          &copy; {new Date().getFullYear()} Zaryab Lead Solutions. Available for
          freelance projects worldwide.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
