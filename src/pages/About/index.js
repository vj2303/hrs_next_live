import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from './Hero'
import Description from './Description'

const index = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Description />
        <Footer />

    </div>
  )
}

export default index