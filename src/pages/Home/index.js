
import React from 'react'
import Navbar from '../../components/Navbar'
import Feature from './Feature'
import Design from './Design'
import Inspiration from './Inspiration'
import Faq from './Faq'
import Footer from '../../components/Footer'
import Testimonial from './Testimonial'
import Hero from './Hero'
import ProjectCarousel from './ProjectCarousel'



const index = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Feature />
        <Design />
        <Inspiration />
        <Testimonial />
        <ProjectCarousel />
        <Faq />
        <Footer />
    </div>
  )
}

export default index