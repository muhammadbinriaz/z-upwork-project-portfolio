import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-clonix">
      <div className="container-page footer-clonix__inner">
        <div className="footer-clonix__cta">
          <p className="footer-clonix__eyebrow">
            <span className="hero-clonix__slash">//</span> Work with us
          </p>
          <h2 className="footer-clonix__title">
            Ready to build your next prospect list?
          </h2>
          <Link to="/contact" className="btn btn--ink btn--md">
            Get in touch
          </Link>
        </div>

        <div className="footer-clonix__grid">
          <div>
            <Link to="/" className="footer-clonix__brand">
              GoLeadFinder
            </Link>
            <p className="footer-clonix__tagline">
              B2B lead generation &amp; contact research — CRM-ready data for
              sales teams worldwide.
            </p>
          </div>

          <div>
            <p className="footer-clonix__col-label">Navigate</p>
            <nav className="footer-clonix__links" aria-label="Footer">
              <Link to="/services">Services</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          <div>
            <p className="footer-clonix__col-label">Connect</p>
            <div className="footer-clonix__links">
              <a href="mailto:zaryabmuhammad@goleadfinder.com">
                zaryabmuhammad@goleadfinder.com
              </a>
              <a
                href="https://www.upwork.com/freelancers/muhammadz67"
                target="_blank"
                rel="noopener noreferrer"
              >
                Upwork ↗
              </a>
            </div>
          </div>
        </div>

        <p className="footer-clonix__copy">
          &copy; {new Date().getFullYear()} GoLeadFinder. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
