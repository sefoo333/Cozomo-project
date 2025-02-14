import Image from 'next/image'
import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'

function Contact() {
  return (
 <div className="parent flex justify-center  mt-[80px]" id='Contact'>
    <div className="container flex justify-around items-center max-lg:flex-col-reverse gap-[30px]">
        <div className="imgagee h-[500px] w-[500px] max-lg:w-fit">
                   <Image src={"/contact.jpg"} className='w-fit h-full object-cover rounded-[25px]' width={500} height={500} alt={''} />
               </div>
        <div className="form">
        <div className="text text-white max-lg:w-full">
                        <h1 className='text-[50px] font-bold text-[#bec1dd] '>Contact Us</h1>
                        <p className='w-[500px] max-xl:w-full text-[#ccc] max-lg:w-fit'>We’d love to hear from you! Whether you have questions, feedback, or just want to connect, reach out and let’s make it happen.</p>
                        <div className="address flex  gap-[20px] flex-col py-[40px]">
                            <div className="ele flex items-center gap-[20px] text-[20px] font-bold text-[#9ca3af]">
                                <BsTelephone />
                                <h1>+20 01110343035</h1>
                            </div>
                            <div className="ele flex items-center gap-[20px] text-[20px] font-bold text-[#9ca3af]">
                                <MdOutlineEmail />
                                <h1>seiftube1@gmail.com</h1>
                            </div>

                        </div>
                    </div>
        </div>
    </div>
 </div>
  )
}

export default Contact
