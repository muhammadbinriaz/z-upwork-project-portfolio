import React, { useState, useEffect, useRef, useCallback } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Loading from "./components/Loading";
import TransitionOverlay from "./components/TransitionOverlay";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import useLenis from "./hooks/useLenis";
import useFpsCap from "./hooks/useFpsCap";
import { cover, reveal, isTransitioning } from "./lib/transition";
import { resetScroll } from "./lib/scroll";
import { prefersReducedMotion } from "./lib/motion";

function ScrollToTop({ navRef }) {
  const { pathname } = useLocation();

  useEffect(() => {
    navRef.current?.classList.remove("is-floating");
    if (!isTransitioning()) resetScroll();
  }, [pathname, navRef]);

  return null;
}

export const AnimationContext = React.createContext(false);

const APP_PATHS = new Set(["/", "/services", "/portfolio", "/about", "/contact"]);

function App() {
  const lenisRef = useLenis();
  useFpsCap(60);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);

  const [initialLoadDone, setInitialLoadDone] = useState(() => {
    if (location.pathname !== "/") return true;
    return prefersReducedMotion();
  });
  const [animationReady, setAnimationReady] = useState(() => prefersReducedMotion());

  useEffect(() => {
    if (!initialLoadDone) return;
    const nav = navRef.current;
    if (!nav) return;

    let ticking = false;
    function onScroll() {
      nav.classList.toggle("is-floating", window.scrollY > 24);
      ticking = false;
    }
    function onMove() {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    }
    window.addEventListener("scroll", onMove, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onMove);
  }, [initialLoadDone]);

  const handleLoadingComplete = useCallback(() => {
    setInitialLoadDone(true);
    window.setTimeout(() => setAnimationReady(true), 120);
  }, []);

  // Capture phase so we run before React Router's Link navigate
  useEffect(() => {
    function onClick(e) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      const link = e.target.closest?.("a[href]");
      if (!link) return;
      if (link.target === "_blank" || link.hasAttribute("download")) return;

      const hrefAttr = link.getAttribute("href");
      if (!hrefAttr || hrefAttr.startsWith("mailto:") || hrefAttr.startsWith("tel:")) return;
      if (hrefAttr.startsWith("http") || hrefAttr.startsWith("//")) return;

      let url;
      try {
        url = new URL(hrefAttr, window.location.origin);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;
      if (!APP_PATHS.has(url.pathname)) return;

      // Same path + hash only → let the browser/scroll handle it
      if (url.pathname === window.location.pathname) {
        if (url.hash) return;
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      if (isTransitioning()) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      const next = url.pathname + url.search + url.hash;
      cover().then(() => navigate(next));
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [navigate]);

  // After route lands, lift the cover (short hold so fill can settle)
  useEffect(() => {
    if (!initialLoadDone || !isTransitioning()) return;
    const delay = window.matchMedia("(max-width: 768px)").matches ? 120 : 200;
    const id = window.setTimeout(() => {
      reveal();
    }, delay);
    return () => window.clearTimeout(id);
  }, [location.pathname, initialLoadDone]);

  return (
    <AnimationContext.Provider value={animationReady}>
      <TransitionOverlay />
      <ScrollToTop navRef={navRef} />
      {!initialLoadDone && <Loading onComplete={handleLoadingComplete} />}

      {initialLoadDone && (
        <div style={{ position: "relative", zIndex: 1 }}>
          <Navbar navRef={navRef} />
          <main id="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </AnimationContext.Provider>
  );
}

export default App;
