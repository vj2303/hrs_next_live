import React from 'react'
import Hero from './Hero'
import Videos from './Videos'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const index = () => {
  return (
    <div>
      <Navbar />
        <Hero />
        <Videos />
      <Footer />
    </div>
  )
}

export default index