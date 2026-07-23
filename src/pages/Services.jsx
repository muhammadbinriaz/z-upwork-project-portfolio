import React from 'react'
import ServicesComponent from '../components/Services'
import Tools from '../components/Tools'
import Pricing from '../components/Pricing'
import Contact from '../components/Contact'

const Services = () => {
  return (
    <>
      <section
        className="section--hero"
        style={{ paddingBlockEnd: 'var(--space-2xl)', borderBottom: '1px solid var(--color-rule)' }}
      >
        <div className="container-page">
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
      <Pricing />
      <Contact />
    </>
  )
}

export default Services