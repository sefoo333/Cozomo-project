import Image from 'next/image'
import React from 'react'
import { TextAnimate } from './magic/text_special'

function Recycling() {
  return (
   <div className="parent flex justify-center pt-[70px] " id='Recycling'>
    <div className="container flex justify-around items-center gap-[30px] max-lg:flex-col">
        <div className="text w-[600px] max-lg:w-fit">
            <h2 className='text-[45px] font-semibold mb-[10px] text-white max-lg:text-[30px]'>   <TextAnimate animation="blurInUp" by="character">
      What is recycling ?
    </TextAnimate></h2>
            <p className='text-[16px]  text-[#8c929a] leading-6'>
            Recycling is the process of collecting and processing used materials to transform them into new, reusable products instead of discarding them as waste. This process aims to reduce the consumption of natural resources, minimize environmental pollution, and decrease the accumulation of waste in landfills. Recyclable materials include paper, plastic, metals, glass, and electronics, which go through sorting, cleaning, and processing to be repurposed into new products. Recycling plays a crucial role in promoting environmental sustainability and reducing the carbon footprint, contributing to the preservation of the planet for future generations.
            </p>
        </div>
        <div className="imgage h-[500px] w-[380px] max-lg:w-fit">
            <Image src={"/pexels-readymade-3850512.jpg"} className='w-fit h-full object-cover rounded-[25px]' width={380} height={500} alt={''} />
        </div>
    </div>
   </div>
  )
}

export default Recycling
