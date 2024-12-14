import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const Page1 = () => {
  return (
    <div>
    <div className='min-h-[60vh] bg-[#E4E4E4] flex items-center justify-center  '>
       <div id='left ' className='w-3/5 py-10   h-full pl-16 text-9xl font-["apercu"] leading-none tracking-tighter'>
       <h1 className='leading-[7rem]' >Turning heads <br/> and conquering  <br/> hearts</h1>
       <img className=" h-20  ml-[20vw] rotate-45" src="https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/645504e2d96d4113a9ae2f41_favicon-niceatnoon.png" alt="" />
   
       </div>
       <div id="right" className=' h-full flex flex-col  gap-10  items-center px-10'>
        <h4 className='w-2/4 '>NiceAtNoon is een boutique design studio gespecialiseerd in branding en webdesign.</h4>
<div className='flex h-[3%] w-[30%] justify-between  items-center bg-white px-5 py-3 rounded-[10px] hover:rounded-[30px]'>
<h2 className=' '>beijjk  projecten</h2>
<FaLongArrowAltRight />

</div> 

        
        
       </div>
    </div>
    <div id="slider" className='h-[100vh] w-full  flex items-center justify-center gap-[10px] px-10 py-5 bg-[#E4E4E4]'>
        <div id="boxes" className='h-full w-1/3 '>
            <img className='h-full w-full object-cover object-center rounded-[150px]' src="https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64bfbe5150f5f7884b492573_GAAF_Header-p-500.webp" alt="" />
        </div>
        <div id="boxes" className='h-full w-1/3 '> 
            <img className='h-full w-full object-cover object-center  rounded-[150px]' src="https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64bfbdd62241c685d9999607_DM_Ashtray-min-p-500.webp"  alt="" />
        </div>
        <div id="boxes" className='h-full w-1/3 '>
            <img className='h-full w-full object-cover object-center  rounded-[150px]' src="https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cc0f2f8c562d5ec23fe20e_VANMOOK_HEADER-p-500.webp" alt="" />
        </div>
    </div>
   
    </div>
   
  )
}

export default Page1
