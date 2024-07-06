

import React from 'react'


const Feature = () => {
    
    const data = [
        {
           title:"Maintain Healthy-Lifestyle",
           description:"Incorporate balanced nutrition, regular exercise, and adequate rest into your daily routine to support overall well-being.",
           image: '/Assets/File_007.jpeg'
        },
        {
            title:"Maintain Healthy-Lifestyle",
            description:"Incorporate balanced nutrition, regular exercise, and adequate rest into your daily routine to support overall well-being.",
            image: '/Assets/File_007.jpeg'
         },
         {
            title:"Maintain Healthy-Lifestyle",
            description:"Incorporate balanced nutrition, regular exercise, and adequate rest into your daily routine to support overall well-being.",
            image: '/Assets/File_007.jpeg'
         },
          
          
         {
            title:"Maintain Healthy-Lifestyle",
            description:"Incorporate balanced nutrition, regular exercise, and adequate rest into your daily routine to support overall well-being.",
            image: '/Assets/File_007.jpeg'
         }
          
          
        
    ]

   



  return (
    <>
  
    <div className='flex flex-col gap-[20px] sm:px-[120px] px-[16px] sm:py-[80px] py-[40px]'>
        <h1 className='sm:text-[40px] text-[22px] leading-[48px] text-[#011000] font-bold'>One-stop shop for all things interiors</h1>
        <p className='sm:w-[526px] sm:text-[16px] text-[13px]'>Be it end-to-end interiors, renovation or modular solutions, we have it all for your home or office. With a wide range of furniture & decor, we have your back from start to finish</p>
         
      
        <div className='flex sm:flex-row  items-center  gap-[15px]'>

        
            {data.map((datas, index) => (
            <div key={index} className='flex shadow-xl  flex-col items-center justify-between gap-[40px] sm:max-w-[390px] border border-solid border-[#DDE0EA] rounded-[16px] '>
                <img src={datas.image} alt='' className='shadow-md rounded-xl h-[40vh] w-full' />
               <div className='px-[10px] py-[10px]'>
               <h1 className='font-semibold text-[24px] leading-[30px]'>{datas.title}</h1>
                <p className='font-medium text-[#71717A] text-[16px]'>{datas.description}</p>
               </div>
            </div>
            ))}
     
        </div>

    </div>


    </>
    
  )
}

export default Feature


