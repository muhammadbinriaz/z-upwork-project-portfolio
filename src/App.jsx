import React, { useState, useEffect, useCallback, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import useLenis from "./hooks/useLenis";
import useFpsCap from "./hooks/useFpsCap";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export const AnimationContext = React.createContext(false);

function App() {
  useLenis();
  useFpsCap(60); // Cap all animations at 50fps
  const [phase, setPhase] = useState("loading");
  const [animationReady, setAnimationReady] = useState(false);
  const location = useLocation();
  const contentRef = useRef(null);
  const currentPathRef = useRef(location.pathname);
  const isFirstLoad = useRef(true);

  // Global cursor spotlight tracking
  useEffect(() => {
    const isTouch = window.matchMedia(
      "(hover: none) and (pointer: coarse)",
    ).matches;
    if (isTouch) return;

    const spotlight = document.getElementById("global-spotlight");
    if (!spotlight) return;

    const onMove = (e) => {
      spotlight.style.setProperty("--mx", `${e.clientX}px`);
      spotlight.style.setProperty("--my", `${e.clientY}px`);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      if (contentRef.current) {
        contentRef.current.style.display = "none";
      }
      return;
    }

    if (currentPathRef.current !== location.pathname) {
      setAnimationReady(false);
      if (contentRef.current) {
        contentRef.current.style.display = "none";
      }
      setPhase("loading");
      currentPathRef.current = location.pathname;
    }
  }, [location.pathname]);

  const handleLoadingComplete = useCallback(() => {
    if (contentRef.current) {
      contentRef.current.style.display = "block";
    }
    setPhase("content");
    setTimeout(() => setAnimationReady(true), 100);
  }, []);

  return (
    <AnimationContext.Provider value={animationReady}>
      <ScrollToTop />

      {/* Global aurora gradient background — follows cursor on desktop */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <div className="hero-bg" />
        <div className="hero-spotlight" id="global-spotlight" />
        <div className="mobile-static-gradient" id="global-mobile-gradient" />
      </div>

      {phase === "loading" && <Loading onComplete={handleLoadingComplete} />}

      <div
        ref={contentRef}
        style={{ position: "relative", zIndex: 1, display: "none" }}
      >
        <Navbar />
        <main>
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
    </AnimationContext.Provider>
  );
}

export default App;
