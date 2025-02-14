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
    <div className="parent_Window w-[80%] z-20 h-[80%] fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] bg-white rounded-[30px]">
        <div className="conainter h-full flex flex-col">
            <div className="exit px-[30px] pt-[20px]" onClick={() => {
                setClick(false)
            }}>
                <MdCancel className='text-[40px] text-right float-right  cursor-pointer text-[#859F3D]' />
            </div>
            <div className="informations flex justify-between px-[50px] h-full gap-[60px] w-full items-center">
                <div className="image w-[50%] h-[90%] bg-slate-800 rounded-[30px] flex items-center overflow-hidden">
<Image src={props.data.image} className='w-full object-contain' alt='' width={300} height={500} />
                </div>
                <div className="texts w-full h-[90%]">
                   <div className="head mb-[40px]">
                   <h1 className='font-semibold text-[65px]'>{props.data.Title}</h1>
                   <span className='text-[20px] font-medium text-[#585858]'>{props.data.tag}</span>
                   </div>
                    <p className='w-[650px] leading-[1.8]'>
                    <strong>{props.data.Title} Project</strong> {props.data.description}
                        </p>
                    <ul className='mt-[40px] text-[18px] flex flex-col gap-[10px]'>
{props.data.features.map((e:any) => (
                            <li key={e} className='flex gap-[10px] items-center'><IoCheckmarkCircle className='text-[#859F3D] text-[25px]' /> {e}</li>
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
