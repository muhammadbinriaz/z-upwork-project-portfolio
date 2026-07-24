import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Portfolio from '../components/Portfolio'
import Tools from '../components/Tools'
import Contact from '../components/Contact'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <Portfolio />
      <Tools />

      {/* Pricing — Two stacking cards with tilt */}
      <section style={{ position: 'relative' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>

          {/* Hourly Rate Card */}
          <div className="sticky top-0" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
            <div style={{
              transform: 'rotate(2deg)',
              width: 'min(85vw, 28rem)',
              borderRadius: 'var(--radius-xl)',
              backgroundColor: 'var(--color-paper-2)',
              border: '1px solid var(--color-rule)',
              padding: 'var(--space-3xl)',
              boxShadow: '0 20px 60px var(--color-shadow)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-md)',
              textAlign: 'center',
            }}>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Hourly Projects
              </span>
              <div>
                <span style={{ fontFamily: 'var(--font-outlier)', fontSize: 'var(--text-5xl)', color: 'var(--color-ink)', lineHeight: 1 }}>
                  $5
                </span>
                <span style={{ fontSize: 'var(--text-lg)', color: 'var(--color-muted)', marginLeft: 'var(--space-xs)' }}>
                  /hr
                </span>
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', lineHeight: 1.5 }}>
                Standard hourly rate for all B2B lead generation, contact research, data enrichment, and CRM data cleaning services.
              </p>
              <Link to="/contact" className="chip" style={{ alignSelf: 'center' }}>
                Start a Project
              </Link>
            </div>
          </div>

          {/* Consultation Card */}
          <div className="sticky top-0" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
            <div style={{
              transform: 'rotate(-2deg)',
              width: 'min(85vw, 28rem)',
              borderRadius: 'var(--radius-xl)',
              backgroundColor: 'var(--color-paper-2)',
              border: '1px solid var(--color-rule)',
              padding: 'var(--space-3xl)',
              boxShadow: '0 20px 60px var(--color-shadow)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-md)',
              textAlign: 'center',
            }}>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Consultation
              </span>
              <div>
                <span style={{ fontFamily: 'var(--font-outlier)', fontSize: 'var(--text-5xl)', color: 'var(--color-ink)', lineHeight: 1 }}>
                  $20
                </span>
                <span style={{ fontSize: 'var(--text-lg)', color: 'var(--color-muted)', marginLeft: 'var(--space-xs)' }}>
                  /30 min
                </span>
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', lineHeight: 1.5 }}>
                Zoom meeting to discuss your project requirements, target audience, and how I can help you build qualified prospect lists.
              </p>
              <Link to="/contact" className="chip chip--outline" style={{ alignSelf: 'center' }}>
                Book a Call
              </Link>
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

export default Home