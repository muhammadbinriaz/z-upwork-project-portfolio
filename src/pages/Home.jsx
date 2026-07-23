import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Portfolio from '../components/Portfolio'
import Tools from '../components/Tools'
import Pricing from '../components/Pricing'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <Portfolio />
      <Tools />
      <Pricing />
      <Contact />
    </>
  )
}

export default Home