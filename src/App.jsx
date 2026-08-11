import React, { useState, useEffect, useRef, useCallback } from "react";
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
  useFpsCap(60);

  const [initialLoadDone, setInitialLoadDone] = useState(false);
  const [animationReady, setAnimationReady] = useState(false);
  const navRef = useRef(null);

  // N10 floating-on-scroll morph
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    let ticking = false;
    function onScroll() {
      const floating = window.scrollY > 24;
      nav.classList.toggle("is-floating", floating);
      ticking = false;
    }
    function onMove() {
      if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
    }
    window.addEventListener("scroll", onMove, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onMove);
  }, [initialLoadDone]);

  const handleLoadingComplete = useCallback(() => {
    setInitialLoadDone(true);
    setTimeout(() => setAnimationReady(true), 100);
  }, []);

  return (
    <AnimationContext.Provider value={animationReady}>
      <ScrollToTop />
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
