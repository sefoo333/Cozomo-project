import Image from 'next/image'
import React from 'react'
import { TextAnimate } from '../magic/text_special'

function Cozmo() {
  return (
   <div className="parent flex justify-center pt-[80px] py-[30px]  ">
    <div className="container flex justify-around items-center gap-[30px] flex-row-reverse">
        <div className="text w-[600px]">
            <h2 className='text-[45px] font-semibold mb-[10px]'>   <TextAnimate animation="blurInUp" by="character">
      About lampa
    </TextAnimate></h2>
            <p className='text-[16px]  text-[#8c929a] leading-6'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis facilis ipsa modi quasi adipisci ex corrupti autem molestiae obcaecati asperiores tenetur commodi optio quisquam et numquam, quae quidem excepturi ut.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ex quasi veniam debitis cumque quaerat culpa vero enim ipsum. Qui quasi vitae deleniti temporibus veniam enim repellat magni. Autem, saepe?
            </p>
        </div>
        <div className="imgage">
            <Image className='rounded-xl' src={"/lampa.jpg"} width={500} height={500} alt={''} />
        </div>
    </div>
   </div>
  )
}

export default Cozmo
