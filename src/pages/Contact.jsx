import React from "react";
import ContactComponent from "../components/Contact";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section
        className="section--hero section--gradient"
        style={{
          paddingBlockEnd: "var(--space-2xl)",
          borderBottom: "1px solid var(--color-rule)",
        }}
      >
        <div
          className="gradient-orb gradient-orb--top-right"
          aria-hidden="true"
        />
        <div
          className="container-page"
          style={{ position: "relative", zIndex: 1 }}
        >
          <h1 style={{ color: "var(--color-ink)" }}>Get In Touch</h1>
          <p
            style={{
              fontSize: "var(--text-lg)",
              color: "var(--color-muted)",
              maxWidth: "55ch",
              marginTop: "var(--space-sm)",
            }}
          >
            Ready to get accurate B2B leads that your sales team can actually
            use? Send me a message or book a consultation.
          </p>
        </div>
      </section>

      <ContactComponent />

      {/* Quick Links — Stacking Cards */}
      <section style={{ position: 'relative' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>

          {/* Upwork Card */}
          <div className="sticky top-0" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
            <a
              href="https://www.upwork.com/freelancers/muhammadz67"
              target="_blank"
              rel="noopener noreferrer"
              className="card--gradient"
              style={{
                transform: 'rotate(2deg)',
                width: 'min(88vw, 34rem)',
                borderRadius: 'var(--radius-xl)',
                backgroundColor: 'var(--color-paper-2)',
                border: '1px solid var(--color-rule)',
                padding: 'clamp(2.5rem, 6vw, 4rem)',
                boxShadow: '0 20px 60px var(--color-shadow)',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--space-xl)',
                textAlign: 'center',
                position: 'relative',
                isolation: 'isolate',
                transition: 'border-color 220ms var(--ease-out), transform 220ms var(--ease-out)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.transform = 'rotate(2deg) translateY(-4px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-rule)'; e.currentTarget.style.transform = 'rotate(2deg)' }}
            >
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-md)' }}>
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  backgroundColor: 'color-mix(in oklch, var(--color-accent) 18%, transparent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
                  </svg>
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--color-ink)', fontFamily: 'var(--font-display)', lineHeight: 1.1 }}>
                  Hire on Upwork
                </h2>
                <div style={{ width: '40px', height: '3px', borderRadius: '2px', backgroundColor: 'var(--color-accent)', opacity: 0.6 }} />
                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-muted)', lineHeight: 1.6, maxWidth: '28ch' }}>
                  View my profile with 128+ completed projects, 5.0 rating, and verified client reviews.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {['Top Rated Plus', '128 Projects', '5.0 Rating', 'Verified'].map(t => (
                    <span key={t} style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', border: '1px solid var(--color-rule)', borderRadius: 'var(--radius-full)', padding: '4px 12px' }}>{t}</span>
                  ))}
                </div>
                <span className="chip" style={{ marginTop: 'var(--space-sm)' }}>
                  View Profile →
                </span>
              </div>
            </a>
          </div>

          {/* Services Card */}
          <div className="sticky top-0" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
            <Link
              to="/services"
              className="card--gradient"
              style={{
                transform: 'rotate(-2deg)',
                width: 'min(88vw, 34rem)',
                borderRadius: 'var(--radius-xl)',
                backgroundColor: 'var(--color-paper-2)',
                border: '1px solid var(--color-rule)',
                padding: 'clamp(2.5rem, 6vw, 4rem)',
                boxShadow: '0 20px 60px var(--color-shadow)',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--space-xl)',
                textAlign: 'center',
                position: 'relative',
                isolation: 'isolate',
                transition: 'border-color 220ms var(--ease-out), transform 220ms var(--ease-out)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.transform = 'rotate(-2deg) translateY(-4px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-rule)'; e.currentTarget.style.transform = 'rotate(-2deg)' }}
            >
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-md)' }}>
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  backgroundColor: 'color-mix(in oklch, var(--color-accent) 18%, transparent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" />
                  </svg>
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--color-ink)', fontFamily: 'var(--font-display)', lineHeight: 1.1 }}>
                  View Services
                </h2>
                <div style={{ width: '40px', height: '3px', borderRadius: '2px', backgroundColor: 'var(--color-accent)', opacity: 0.6 }} />
                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-muted)', lineHeight: 1.6, maxWidth: '28ch' }}>
                  B2B lead generation, contact research, data enrichment, email lists, CRM cleanup, and more.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {['Lead Gen', 'Research', 'Data', 'CRM', 'Email'].map(t => (
                    <span key={t} style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', border: '1px solid var(--color-rule)', borderRadius: 'var(--radius-full)', padding: '4px 12px' }}>{t}</span>
                  ))}
                </div>
                <span className="chip chip--outline" style={{ marginTop: 'var(--space-sm)' }}>
                  Browse Services →
                </span>
              </div>
            </Link>
          </div>

          {/* Email Card */}
          <div className="sticky top-0" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
            <a
              href="mailto:zaryabmuhammad@goleadfinder.com"
              className="card--gradient"
              style={{
                transform: 'rotate(2.5deg)',
                width: 'min(88vw, 34rem)',
                borderRadius: 'var(--radius-xl)',
                backgroundColor: 'var(--color-paper-2)',
                border: '1px solid var(--color-rule)',
                padding: 'clamp(2.5rem, 6vw, 4rem)',
                boxShadow: '0 20px 60px var(--color-shadow)',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--space-xl)',
                textAlign: 'center',
                position: 'relative',
                isolation: 'isolate',
                transition: 'border-color 220ms var(--ease-out), transform 220ms var(--ease-out)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.transform = 'rotate(2.5deg) translateY(-4px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-rule)'; e.currentTarget.style.transform = 'rotate(2.5deg)' }}
            >
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-md)' }}>
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  backgroundColor: 'color-mix(in oklch, var(--color-accent) 18%, transparent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--color-ink)', fontFamily: 'var(--font-display)', lineHeight: 1.1 }}>
                  Email Directly
                </h2>
                <div style={{ width: '40px', height: '3px', borderRadius: '2px', backgroundColor: 'var(--color-accent)', opacity: 0.6 }} />
                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-muted)', lineHeight: 1.6, maxWidth: '28ch' }}>
                  Reach out for custom project inquiries, bulk orders, or ongoing lead generation partnerships.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {['Custom Projects', 'Bulk Orders', 'Partnerships'].map(t => (
                    <span key={t} style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', border: '1px solid var(--color-rule)', borderRadius: 'var(--radius-full)', padding: '4px 12px' }}>{t}</span>
                  ))}
                </div>
                <span className="chip" style={{ marginTop: 'var(--space-sm)' }}>
                  Send Email →
                </span>
              </div>
            </a>
          </div>

        </div>
        <div style={{ height: '20vh' }} />
      </section>

      {/* Trust Strip */}
      <section className="section--tight" style={{ borderTop: "1px solid var(--color-rule)" }}>
        <div className="container-page">
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(2rem, 6vw, 6rem)',
            flexWrap: 'wrap',
            textAlign: 'center',
          }}>
            {[
              { value: '128', label: 'Projects' },
              { value: '5.0', label: 'Rating' },
              { value: '7+', label: 'Years' },
              { value: '0-4hrs', label: 'Response' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="stat-figure" style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-xs)' }}>
                  {stat.value}
                </div>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;