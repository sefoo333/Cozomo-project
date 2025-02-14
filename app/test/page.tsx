import React from 'react'

function page() {
  return (
        <div className='grid grid-cols-3 justify-items-center'>

      <div className="caryd w-[450px] h-[300px] rounded-[15px] relative overflow-hidden">
        <div className="image rounded-[15px] overflow-hidden">
        <img src="/lampa.jpg" className='w-fit rounded-[15px]' alt="" />
        </div>
        <div className="text absolute bottom-0 px-[20px] pb-[20px]">
        <h1 className='text-[30px] font-semibold  text-white pop'>Lampa</h1>
        <p className='bab  text-[#ccc]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto porro nam delectus odio</p>
        </div>
      </div>
      <div className="caryd w-[450px] h-[300px] rounded-[15px] relative overflow-hidden">
        <div className="image rounded-[15px] overflow-hidden">
        <img src="/lampa.jpg" className='w-fit rounded-[15px]' alt="" />
        </div>
        <div className="text absolute bottom-0 px-[20px] pb-[20px]">
        <h1 className='text-[30px] font-semibold  text-white pop'>Lampa</h1>
        <p className='bab  text-[#ccc] ]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto porro nam delectus odio</p>
        </div>
      </div>
      <div className="caryd w-[450px] h-[300px] rounded-[15px] relative overflow-hidden">
        <div className="image rounded-[15px] overflow-hidden">
        <img src="/lampa.jpg" className='w-fit rounded-[15px]' alt="" />
        </div>
        <div className="text absolute bottom-0 px-[20px] pb-[20px]">
        <h1 className='text-[30px] font-semibold  text-white pop'>Lampa</h1>
        <p className='bab  text-[#ccc]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto porro nam delectus odio</p>
        </div>
      </div>
    </div>
  )
}

export default page
