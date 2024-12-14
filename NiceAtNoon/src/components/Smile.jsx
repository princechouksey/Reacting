import React from 'react'

const Smile = () => {
  return (
    <div className='min-h-screen w-full bg-white flex flex-col items-center px-5    relative     '>
      <h1 className=' text-lg font-["apercu"] mb-10'>Our belief</h1>
      <h4 className='text-[140px] text-center leading-[130px] tracking-tighter  uppercase font-semibold font-["siaga"] '>Brands just want <br />
      To have fun</h4>
      <img className=' h-screen w-full object-cover object-center rounded-[40px]' src="https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cabd4824cecf2c23abed79_BRAND%20STORY%20SESSIES_Home-Nan-p-1080.webp" alt="" />
      <div className='flex items-center justify-start absolute left-5 bottom-[-5%] gap-5 '>
        <h3 className='w-fit px-2 rounded-[20px] text-white bg-gray-400 py-1  '>Brand Story sessies
        </h3>
        <h3 className=''>Lorem ipsum dolor sit amet.</h3> 
      </div>
    </div>
  )
}

export default Smile
