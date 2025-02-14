import React from 'react'
import { RainbowButton } from './magic/Buttons'
import { SparklesText } from './magic/Special_text'
import { Particles } from './magic/Background'
import { cn } from '@/lib/utils'
import { AnimatedShinyText } from './magic/S_text'
import { ArrowRightIcon } from '@radix-ui/react-icons'

function Home2() {
  return (
    <>
      {/* <DotPattern
        width={40}
        height={30}
        cx={2}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      /> */}
       <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ccc"}
        refresh
      />
    <div className="parent h-screen flex justify-center  ">
        <div className="container flex flex-col justify-center items-center text-white">
        <div className="z-10 flex  items-center justify-center max-lg:mb-[10px] max-lg:text-[20px]">
      <div
        className={cn(
          "group rounded-full border dark:border-black/5 dark:bg-neutral-100 text-base dark:text-white transition-all ease-in hover:cursor-pointer dark:hover:bg-neutral-200 border-white/5 bg-neutral-900 hover:bg-neutral-800",
          
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:dark:text-neutral-600 hover:duration-300 hover:text-neutral-400">
          <span>✨ Introducing Cozmo</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
            <h1 className='text-[74px] font-semibold text-center flex items-center max-lg:text-[25px] text-nowrap'>
            Get Started With <SparklesText className="pl-[20px] max-lg:pl-[10px] text-[#859F3D] max-lg:text-[2rem]"  text="Cozomo" />
            </h1>
            <p className='text-[22px] font-medium text-center text-[#727070] pb-[15px] max-lg:text-[18px]'>The project starts with an idea</p>
          <div className="buttons flex gap-[20px] mt-[25px] max-lg:mt-[25px]">
          <RainbowButton><a href="#Projects" className='text-nowrap'>Get Started</a></RainbowButton>
          <RainbowButton><a href="#Recycling" className='text-nowrap'>Show More</a></RainbowButton>
          </div>

        </div>
         
    </div>
    </>
  )
}

export default Home2
