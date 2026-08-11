import React, { useState, useEffect, useCallback } from "react";

const DEFAULT_THEME = "hum-dark";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "hum" || saved === "hum-dark") return saved;
      return DEFAULT_THEME;
    }
    return DEFAULT_THEME;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    const meta = document.querySelector('meta[name="theme-color"]:not([media])');
    if (meta) {
      meta.setAttribute("content", theme === "hum-dark" ? "#141416" : "#fafafa");
    }
  }, [theme]);

  const toggle = useCallback(() => {
    const newTheme = theme === "hum" ? "hum-dark" : "hum";

    const styleId = "theme-transition-style";
    let styleEl = document.getElementById(styleId);
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = styleId;
      document.head.appendChild(styleEl);
    }

    styleEl.textContent = `
      ::view-transition-group(root) {
        animation-duration: 0.7s;
        animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }
      ::view-transition-new(root) {
        animation-name: reveal-theme;
      }
      ::view-transition-old(root) {
        animation: none;
        z-index: -1;
      }
      @keyframes reveal-theme {
        from { clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%); }
        to { clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%); }
      }
    `;

    const switchTheme = () => {
      setTheme(newTheme);
      setTimeout(() => {
        const el = document.getElementById(styleId);
        if (el) el.remove();
      }, 800);
    };

    if (document.startViewTransition) {
      document.startViewTransition(switchTheme);
    } else {
      switchTheme();
    }
  }, [theme]);

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "hum" ? "dark" : "light"} mode`}
      className="btn btn--soft btn--sm"
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "9999px",
        padding: 0,
        gap: 0,
        background: "var(--color-paper-2)",
        border: "1px solid var(--color-rule)",
        color: "var(--color-ink)",
      }}
    >
      {theme === "hum-dark" ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          <line x1="12" y1="3" x2="12" y2="12" />
          <line x1="12" y1="12" x2="17" y2="17" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
