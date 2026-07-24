import React from 'react'
import ServicesComponent from '../components/Services'
import Tools from '../components/Tools'
import Contact from '../components/Contact'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
      <section
        className="section--hero section--gradient"
        style={{ paddingBlockEnd: 'var(--space-2xl)', borderBottom: '1px solid var(--color-rule)' }}
      >
        <div className="gradient-orb gradient-orb--top-right" aria-hidden="true" />
        <div className="container-page" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: 'var(--color-ink)' }}>
            Services
          </h1>
          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-muted)',
              maxWidth: '55ch',
              marginTop: 'var(--space-sm)',
            }}
          >
            Comprehensive B2B lead generation and data research services tailored
            to your business needs.
          </p>
        </div>
      </section>

      <ServicesComponent />
      <Tools />

      {/* Rates — Two stacking cards with tilt */}
      <section style={{ position: 'relative' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>

          {/* Hourly Rate Card */}
          <div className="sticky top-0" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
            <div
              className="card--gradient"
              style={{
                transform: 'rotate(2deg)',
                width: 'min(88vw, 34rem)',
                borderRadius: 'var(--radius-xl)',
                backgroundColor: 'var(--color-paper-2)',
                border: '1px solid var(--color-rule)',
                padding: 'clamp(2rem, 5vw, 3.5rem)',
                boxShadow: '0 20px 60px var(--color-shadow)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--space-lg)',
                textAlign: 'center',
                position: 'relative',
                isolation: 'isolate',
                transition: 'border-color 220ms var(--ease-out), transform 220ms var(--ease-out)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-rule)' }}
            >
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-md)' }}>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Hourly Projects
                </span>
                <div>
                  <span style={{ fontFamily: 'var(--font-outlier)', fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'var(--color-ink)', lineHeight: 1 }}>
                    $5
                  </span>
                  <span style={{ fontSize: 'var(--text-lg)', color: 'var(--color-muted)', marginLeft: 'var(--space-xs)' }}>
                    /hr
                  </span>
                </div>
                <div style={{ width: '40px', height: '3px', borderRadius: '2px', backgroundColor: 'var(--color-accent)', opacity: 0.6 }} />
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-muted)', lineHeight: 1.6, maxWidth: '32ch' }}>
                  Standard hourly rate for all B2B lead generation, contact research, data enrichment, and CRM data cleaning services.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {['Lead Gen', 'Contact Research', 'Data Enrichment', 'CRM Cleanup'].map(t => (
                    <span key={t} style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', border: '1px solid var(--color-rule)', borderRadius: 'var(--radius-full)', padding: '2px 10px' }}>{t}</span>
                  ))}
                </div>
                <Link to="/contact" className="chip" style={{ marginTop: 'var(--space-sm)' }}>
                  Start a Project
                </Link>
              </div>
            </div>
          </div>

          {/* Consultation Card */}
          <div className="sticky top-0" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
            <div
              className="card--gradient"
              style={{
                transform: 'rotate(-2deg)',
                width: 'min(88vw, 34rem)',
                borderRadius: 'var(--radius-xl)',
                backgroundColor: 'var(--color-paper-2)',
                border: '1px solid var(--color-rule)',
                padding: 'clamp(2rem, 5vw, 3.5rem)',
                boxShadow: '0 20px 60px var(--color-shadow)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--space-lg)',
                textAlign: 'center',
                position: 'relative',
                isolation: 'isolate',
                transition: 'border-color 220ms var(--ease-out), transform 220ms var(--ease-out)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-rule)' }}
            >
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-md)' }}>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Consultation
                </span>
                <div>
                  <span style={{ fontFamily: 'var(--font-outlier)', fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'var(--color-ink)', lineHeight: 1 }}>
                    $20
                  </span>
                  <span style={{ fontSize: 'var(--text-lg)', color: 'var(--color-muted)', marginLeft: 'var(--space-xs)' }}>
                    /30 min
                  </span>
                </div>
                <div style={{ width: '40px', height: '3px', borderRadius: '2px', backgroundColor: 'var(--color-accent)', opacity: 0.6 }} />
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-muted)', lineHeight: 1.6, maxWidth: '32ch' }}>
                  Zoom meeting to discuss your project requirements, target audience, and how I can help you build qualified prospect lists.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {['Zoom Call', '30 Minutes', 'Project Discussion', 'Strategy'].map(t => (
                    <span key={t} style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', border: '1px solid var(--color-rule)', borderRadius: 'var(--radius-full)', padding: '2px 10px' }}>{t}</span>
                  ))}
                </div>
                <Link to="/contact" className="chip chip--outline" style={{ marginTop: 'var(--space-sm)' }}>
                  Book a Call
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Spacer */}
        <div style={{ height: '20vh' }} />
      </section>

      <Contact />
    </>
  )
}

export default Services