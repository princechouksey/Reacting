import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-[80vh]  bg-black '>

          <div className='flex '>
    <div className=' left h-[30vh]  w-1/2 text-white px-10 py-10  text-["apercu"] font-semibold '>
     <div>
     <h1 className='text-5xl mb-5 '> Let's turn some heads!</h1>
     <div className='h-[7vh] w-[10vw] border  border-white   rounded-[10px] bg-black text-white flex justify-center gap-5 items-center'>
    <h3 className=' text-xl' >Contact</h3>
    <FaLongArrowAltRight />
</div>
     </div>
    </div>
    <div className='right h-[30vh] w-1/2  flex items-center justify-end gap-10 px-32 py-32 '>
    <div className=''>
        <h1 className='mb-4 text-xl text-["siaga"] text-white  '>Social </h1>
        <h2 className='uppercase text-[12px] mb-3 text-white'>Instagram </h2>
        <h2 className='uppercase text-[12px] mb-3 text-white'>linkedin </h2>
        <h2 className='uppercase text-[12px] mb-3 text-white'>HOme </h2>
    </div>
    <div className=''>
        <h1 className='mb-3 text-white text-xl text-["siaga"] '>Social </h1>
        <h2 className='uppercase text-[12px] mb-3 text-white '>Instagram </h2>
        <h2 className='uppercase text-[12px] mb-3 text-white'>linkedin </h2>
        <h2 className='uppercase text-[12px] mb-3 text-white'>HOme </h2>
        
    </div>
    <div className=''>
        <h1 className='mb-3 text-white text-xl text-["siaga"] '>Social </h1>
        <h2 className='uppercase text-[12px] mb-3 text-white'>Instagram </h2>
        <h2 className='uppercase text-[12px] mb-3 text-white'>linkedin </h2>
        <h2 className='uppercase text-[12px] mb-3 text-white'>HOme </h2>
    </div>
    </div>
    </div>
    <img className='h-[45vh] w-full ' src="https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1.png" loading="lazy" sizes="100vw" srcset="https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1-p-500.png 500w, https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1-p-800.png 800w, https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1-p-1080.png 1080w, https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1.png 1920w" alt="" class="image is-contain"></img>
  

    </div>
  )
}

export default Footer
