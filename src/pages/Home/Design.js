import React from 'react'

const Design = () => {
  return (
    <div className='px-[120px] py-[100px]'>
        <h3 className='text-[35px] font-bold'>Inspiration for home interior designs</h3>
        <p className='text-[#707070] font-semibold'>Give your home a new look with these interior design ideas curated for you</p>
        
        <div className='flex flex-row gap-[20px] rounded-lg '>

            <img src='/Assets/96D87BD5-38FE-40C3-A03B-390EAB5B9CB8.jpeg' alt='img' className='w-[50%] h-[50vh] rounded-lg'/>
            <img src='/Assets/IMG_2107.JPG' alt='img' className='w-[25%] h-[50vh] rounded-lg'/>
            <img src='/Assets/IMG_5456.JPEG' alt='img' className='w-[25%] h-[50vh] rounded-lg'/>

        </div>
        <div className='flex mt-[20px] flex-row gap-[5px] '>

            <img src='/Assets/IMG_3793.JPEG' alt='img' className='w-[25%] h-[50vh] rounded-lg'/>
            <img src='/Assets/IMG_9994.JPEG' alt='img' className='w-[50%] h-[50vh] rounded-lg'/>
            <img src='/Assets/IMG_2041.JPG' alt='img' className='w-[25%] h-[50vh] rounded-lg'/>

        </div>
         

    </div>
  )
}

export default Design