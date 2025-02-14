import Image from 'next/image'
import React, { useContext } from 'react'
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { Sign } from './Projects';


function Window(props: any) {
    const setClick:any = useContext(Sign)
    console.log(props)
  return (
    <>
    <div className="Window fixed w-full h-full left-0 top-0" style={{backgroundColor:"rgba(0, 0, 0, 0.397)"}}></div>
    <div className="parent_Window w-[80%] z-20 h-[80%] max-xl:w-[95%] max-lg:h-[95%] fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] bg-white rounded-[30px] ">
        <div className="conainter h-full flex flex-col overflow-y-scroll overflow-x-hidden scroll-m-0 scroll-p-0">
            <div className="exit px-[30px] pt-[20px]" onClick={() => {
                setClick(false)
            }}>
                <MdCancel className='text-[40px] text-right float-right  cursor-pointer text-[#859F3D]' />
            </div>
            <div className="informations max-lg:flex-col flex justify-between px-[50px] h-full gap-[60px] max-lg:gap-0 w-full items-center max-lg:h-[1200px]">
                <div className="image max-md:w-fit w-[50%] h-[90%] bg-slate-800 rounded-[30px] flex items-center overflow-hidden">
<Image src={props.data.image} className='w-full object-contain' alt='' width={300} height={500} />
                </div>
                <div className="texts w-full h-[90%]">
                   <div className="head mb-[40px] max-md:my-[30px]">
                   <h1 className='font-semibold text-[65px] max-xl:text-[45px]'>{props.data.Title}</h1>
                   <span className='text-[20px] font-medium text-[#585858]'>{props.data.tag}</span>
                   </div>
                    <p className='w-[650px] leading-[1.8] max-xl:w-fit'>
                    <strong>{props.data.Title} Project</strong> {props.data.description}
                        </p>
                    <ul className='mt-[40px] text-[18px] flex flex-col gap-[10px] py-[20px]'>
{props.data.features.map((e:any) => (
                            <li key={e} className='flex gap-[10px] items-center text-nowrap'><IoCheckmarkCircle className='text-[#859F3D] text-[25px]' /> {e}</li>
))}                        
                      
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Window
