"use client"
import { features } from 'process'
import React, { createContext, useContext, useState } from 'react'
import Window from './Window'

export const Sign = createContext(true)

function Projects() {
  const [Click,setClick]:any = useState(false)
  const [signID , SetIt] = useState("1")

  const data = [{
    Title:"Lampa",
    image:"/lampa.jpg",
    tag:"Electronic",
    description:"an initiative dedicated to bringing light, sustainability, and innovation to our world. Lighting is more than just illumination; it represents progress, safety, and a better quality of life. The Lampa Project is built on three key principles: efficiency, sustainability, and accessibility. Our mission is to develop cutting-edge lighting solutions that reduce energy consumption, minimize environmental impact, and ensure that even the most remote communities have access to reliable lighting. Thank you. 🌍💡",
    features:["RGB" , "Working by Bettary" , "Simple Design" , "Good"],
    id:"1"
  },{
    Title:"Cozomo",
    image:"/robot.jpg",
    tag:"Robot",
    description:`a revolutionary robot powered by batteries, designed to function autonomously and efficiently.
RoboSelf is not just a machine; it is a smart assistant capable of adapting to its environment, learning from interactions, and executing tasks with precision. Whether in homes, offices, or industrial spaces, this robot can navigate, perform daily activities, and even respond to real-time challenges all without human intervention.`,
    features:["Easy for use" , "Working by Bettary" , "Simple Design" , "Good"],
    id:"2"
  },{
    Title:"Candles",
    image:"/lastproject.jpg",
    tag:"Manual Project",
    description:`
    where craftsmanship meets fragrance to create the perfect ambiance. Our candles are handmade with care, using natural ingredients and infused with captivating scents that bring warmth and relaxation to any space.
Each candle is crafted to not only illuminate but also to elevate moods and awaken senses. Whether it's the calming scent of lavender, the freshness of citrus, or the richness of vanilla, our collection offers a unique experience for every moment.
Light up your space with AromaCandles—where every flame tells a story of comfort and serenity.
    `,
    features:["Long lasting scent" , "smells nice" , "Simple Design" , "Good"],
    id:"3"
  }]
  return (
<>
    <div className="parent flex justify-center mt-[80px]" id='Projects'>
        <div className="container flex justify-center items-center flex-col text-white">
<div className="main">
    <h1 className='text-[55px] font-semibold'>Projects</h1>
</div>
<div className='grid grid-cols-3 max-2xl:grid-cols-2 max-lg:grid-cols-1 gap-9 justify-items-center my-[70px] mt-[40px]'>

     {data.map((e:any) => (
       <div key={e.id} className="caryd w-[450px] max-lg:w-fit h-[300px] rounded-[15px] relative overflow-hidden" id="1"  onClick={(a:any) => {
        setClick(true)
        SetIt(`${e.id}`)
      }}
      >
        <div className="image rounded-[15px] overflow-hidden" 
        >
        <img src={`${e.image}`} className='w-fit rounded-[15px]' alt="" />
        </div>
        <div className="text absolute bottom-0 px-[20px] pb-[20px]">
        <h1 className='text-[30px] font-semibold  text-white pop'>{e.Title}</h1>
        <p className='bab  text-[#ccc]'>{e.description.slice(2,80)}</p>
        </div>
      </div>
     ))}

     
    </div>
        </div>
    </div>
    <Sign.Provider value={setClick}>
    {Click ? (
      <Window data={data[parseInt(signID) - 1]} />
    ):null}
    </Sign.Provider>
    </>
  )
}

export default Projects
