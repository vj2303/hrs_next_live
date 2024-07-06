import React from 'react'

const Hero = () => {
  return (
    <div className='relative overflow-x-hidden bg-cover bg-center bg-no-repeat'>
    <img src='/Assets/IMG_1768.PNG' alt='img' className='w-full h-[60vh]' />
    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-55'></div>
    <h1 className='absolute flex leading-12 text-center items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold'>
      Projects
    </h1>
  </div>

  )
}

export default Hero