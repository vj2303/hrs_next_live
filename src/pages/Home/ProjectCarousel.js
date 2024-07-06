import React from 'react'
import { Link } from 'react-router-dom'


const ProjectCarousel = () => {
  return (
    <>

        <div className='px-[120px]'>
                    <h1 className='text-[35px] text-center font-bold'>Explore our portfolio of HRS Interiors' standout projects</h1>
                    <p className='text-[20px] text-center'>Latest dream home interiors delivered the hassle-free way</p>

                   <div className='flex flex-row gap-[20px] '>                                
                           <Link to='/projects'>
                              <div className='relative flex'>
                                    <img src='/Assets/IMG_5456.JPEG' alt='img' className=' rounded-md h-[80vh]'/>
                                    <p className='absolute bottom-0 left-0 text-[white] font-semibold text-[20px] bg-opacity-75 p-2 rounded-md'>Modern 4BHK Penthouse, Bangalore</p>
                                </div>
                              
                           </Link>
                            <div className='relative'>
                                <img src='/Assets/IMG_5456.JPEG' alt='img' className='rounded-md h-[80vh]'/>
                                <p className='absolute bottom-0 left-0 text-[white] font-semibold text-[20px] bg-opacity-75 p-2 rounded-md'>Modern 4BHK Penthouse, Bangalore</p>
                            </div>
                            <div className='relative'>
                                <img src='/Assets/IMG_5456.JPEG' alt='img' className='rounded-md h-[80vh]'/>
                                <p className='absolute bottom-0 left-0 text-[white] font-semibold text-[20px] bg-opacity-75 p-2 rounded-md'>Modern 4BHK Penthouse, Bangalore</p>
                            </div>

                   </div>
        </div>    
    
    </>
  )
}

export default ProjectCarousel