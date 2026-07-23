import React from 'react'
import PortfolioComponent from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const Portfolio = () => {
  return (
    <>
      <section
        className="section--hero"
        style={{ paddingBlockEnd: 'var(--space-2xl)', borderBottom: '1px solid var(--color-rule)' }}
      >
        <div className="container-page">
          <h1 style={{ color: 'var(--color-ink)' }}>
            Portfolio
          </h1>
          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-muted)',
              maxWidth: '55ch',
              marginTop: 'var(--space-sm)',
            }}
          >
            Selected projects completed for clients across SaaS, real estate,
            marketing, and enterprise industries.
          </p>
        </div>
      </section>
      <PortfolioComponent />
      <Testimonials />
      <Contact />
    </>
  )
}

export default Portfolio