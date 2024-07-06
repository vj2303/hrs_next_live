import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const Hero = () => {
  
  return ( 
    <>  
         <div className="relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        navigation={{ nextEl: ".popular_next", prevEl: ".popular_prev" }}
        loop={true}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="relative overflow-x-hidden bg-cover bg-center bg-no-repeat">
            <img src='/Assets/IMG_1768.PNG' alt='img' className='w-full h-[100vh] object-cover'/>
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30'></div>
            <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold'>
              Home to Beautiful Interiors
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative overflow-x-hidden bg-cover bg-center bg-no-repeat">
            <img src='/Assets/IMG_1768.PNG' alt='img' className='w-full h-[100vh] object-cover'/>
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30'></div>
            <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold'>
              Home to Beautiful Interiors222
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative overflow-x-hidden bg-cover bg-center bg-no-repeat">
            <img src='/Assets/IMG_1768.PNG' alt='img' className='w-full h-[100vh] object-cover'/>
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30'></div>
            <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold'>
              Home to Beautiful Interiors3333
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>

      <button className='popular_prev p-2 hidden sm:block shadow rounded-full absolute left-5 top-[50%] z-10 transform -translate-y-1/2 text-blue-300 bg-white hover:text-white hover:bg-blue-500'>
        <ChevronLeft />
      </button>
      <button className='popular_next p-2 hidden sm:block shadow rounded-full absolute right-5 top-[50%] z-10 transform -translate-y-1/2 text-blue-300 bg-white hover:text-white hover:bg-blue-500'>
        <ChevronRight />
      </button>
    </div>
    </>

  )
}

export default Hero