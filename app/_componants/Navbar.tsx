"use client"
import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";

function Navbar() {

  let [active,SetActive] = useState(false)
  return (
   <div className="parent w-full text-white mt-[10px] flex justify-center">
     <div className="cont py-[25px] flex max-lg:flex-col justify-between items-center  px-container max-lg:px-[30px] max-lg:py-[20px]  w-[80%] border-[1px] border-[transparent] border-b-[1px] border-b-[#414141]">
          <div className="two flex justify-between w-full items-center">
     <div className="logo text-[25px] font-semibold  ">
          <h1>
                Cozomo
            </h1>
            </div>
            <div className="menu hidden max-lg:block text-[30px]" onClick={() => {
              SetActive(!active)
            }}>
              <FiMenu />
          </div>
              </div>
            <ul className={`flex font-medium gap-[50px] text-[16px] cursor-pointer ${!active ? "max-md:hidden" : "max-md:flex"} text-white max-lg:flex-col max-lg:w-full max-lg:gap-[20px] max-lg:mt-[25px]`}>
                <li className='transition-all hover:text-[#F6FCDF] max-md:border-b-[1px] max-lg:border-b-[#414141] max-lg:pb-[10px] '><a href="#">Home</a></li>
                <li className='transition-all hover:text-[#F6FCDF] max-md:border-b-[1px] max-lg:border-b-[#414141] max-lg:pb-[10px]'><a href="#Recycling">Recycling</a></li>
                <li className='transition-all hover:text-[#F6FCDF] max-md:border-b-[1px] max-lg:border-b-[#414141] max-lg:pb-[10px]'><a href="#Projects">Projects</a></li>
                <li className='transition-all hover:text-[#F6FCDF] max-md:border-b-[1px] max-lg:border-b-[#414141] max-lg:pb-[10px]'><a href="#Footer">Contact</a></li>
            </ul>
           
          
    </div>
   </div>
  )
}

export default Navbar
