import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const Page3 = () => {
  return ( 
    <div className='min-h-screen bg-[#E4E4E4] '>
    <div id='page3' className='  h-screen w-full  px-10   py-5 '>
        <div className=' w-full h-[80vh] rounded-[30px] hover:rounded-[100px] '>
            <img  className=' w-full h-full object-cover object-center overflow-hidden ' src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/65492b562e62e676d4159713_NS_Wayfinding%20_%20NaN-p-1080.jpg" alt="" />
        </div>
        <h1 className='w-fit text-xl text-gray-400 mt-5 '>Nieuw Schaijk</h1>
        <h1 className='font-semibold text-2xl '>De smaak van thuis</h1>
        <div className='flex items-center justify-start gap-5' >
            <h4 className=' text-sm border border-black px-2 py-1 rounded-[10px] mt-2 uppercase'>brand story </h4>
            <h4 className=' text-sm border border-black px-2 py-1 rounded-[10px] mt-2 uppercase '>merkidenttttt</h4>
        </div>

    </div>
    <div id="page4" className='h-screen  w-full bg-[#E4E4E4] px-10 py-5 flex items-center justify-center gap-10  '>


        <div id="left" className=' h-screen w-1/2  rounded-[20px] '>
        <img className=' w-full h-[70%] rounded-[50px]  object-cover object-cover' src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64cac65e2bf6eb87608fe500_GC_Flyers-Nan-min-p-1080.jpg" alt="" />
        <h4  className='w-fit text-xl text-gray-400 mt-5 '>Gaaf Creaties</h4>
        <h2  className='font-semibold text-2xl '>Creating mood-boosting experiences</h2>
        <div className='flex items-center justify-start gap-5' >
            <h4 className=' text-sm border border-black px-2 py-1 rounded-[10px] mt-2 uppercase'>brand story </h4>
            <h4 className=' text-sm border border-black px-2 py-1 rounded-[10px] mt-2 uppercase '>merkidenttttt</h4>
            <h4 className=' text-sm border border-black px-2 py-1 rounded-[10px] mt-2 uppercase '>webdesign</h4>

        </div>
        </div>
        <div id="right" className='h-screen w-1/2   '>
        <img className=' w-full h-[83%] rounded-[50px] object-cover object-center  ' src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64bbb716dc15a767d726cdea_DM_header-p-1080.jpg" alt="" />
        <h4  className='w-fit text-xl text-gray-400 mt-5 '>Gaaf Creaties</h4>
        <h2  className='font-semibold text-2xl '>Creating mood-boosting experiences</h2>
        <div className='flex items-center justify-start gap-5' >
            <h4 className=' text-sm border border-black px-2 py-1 rounded-[10px] mt-2 uppercase'>brand story </h4>
            <h4 className=' text-sm border border-black px-2 py-1 rounded-[10px] mt-2 uppercase '>merkidenttttt</h4>
            <h4 className=' text-sm border border-black px-2 py-1 rounded-[10px] mt-2 uppercase '>webdesign</h4>

        </div>


        </div>

    </div>

    <div className=' h-[9vh] w-[30vw] mb-20 bg-white mt-5 flex items-center justify-between px-5 rounded-[20px] ml-32 '>
        <h1 className='font-["siaga"]'>Ook aan de slag met jouw merk?</h1>
        <h1 className='font-["siaga"] border border-black px-2 py-1 rounded-[10px]'>Let's meet  </h1>
    </div>

    <div id="page5" className='min-h-screen w-full bg-white  px-10'>
        <h3 className=' text-sm '>Services</h3>
        <div className='w-full h-[10vh]  flex items-center justify-between '>
            <h2 className=' text-2xl   '>Zo onderscheiden we je van <br /> de norm</h2>
            <button className=' px-10 py-2 text-xl rounded-[10px] border bg-black text-white '>Lees meer</button>
        </div>


        <div className="cards flex items-center justify-center gap-10 text-white" >
        <div className='w-[30%] h-[60vh]  rounded-[50px] overflow-hidden '>
                <img className=' h-[50%] w-full object-cover object-center' src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64cac464ae61273a7c937ded_BRAND%20STORY_Over-Nan-p-500.jpg" alt="" />
                <div className='w-full h-[50%] bg-[#B596BF] '> 
                   <h1 className=' px-5 py-8 font-["apercu"] text-2xl font-semibold   '>Brand Story</h1>
                   <h4 className='px-5 py-2 text-md'>Lorem ipsum dolor  adipisicing elit. <br /> Voluptate, praesentium aut? Labore, illum!</h4>
                </div>

            </div>
            <div className='w-[30%] h-[60vh]  rounded-[50px] overflow-hidden '>
                <img className=' h-[50%] w-full object-cover object-center' src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64e51e8b3be191fdc49c321d_NaN_Merkidentiteit-p-500.jpg" alt="" />
                <div className='w-full h-[50%]  bg-[#000000] '> 
                   <h1 className=' px-5 py-8 font-["apercu"] text-2xl font-semibold   '>Brand Story</h1>
                   <h4 className='px-5 py-2 text-md'>Lorem ipsum dolor  adipisicing elit. <br /> Voluptate, praesentium aut? Labore, illum!</h4>
                </div>

            </div>
            <div className='w-[30%] h-[60vh]  rounded-[50px] overflow-hidden '>
                <img className=' h-[50%] w-full object-cover object-center' src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64e51e7766e8d5682bf6ee25_NaN_Webdesign-p-500.jpg" alt="" />
                <div className='w-full h-[50%] bg-[#36A96A] '> 
                   <h1 className=' px-5 py-8 font-["apercu"] text-2xl font-semibold   '>Brand Story</h1>
                   <h4 className='px-5 py-2 text-md'>Lorem ipsum dolor  adipisicing elit. <br /> Voluptate, praesentium aut? Labore, illum!</h4>
                </div>

            </div>
            <div className='w-[30%] h-[60vh] rounded-[50px] overflow-hidden '>
                <img className=' h-[50%] w-full object-cover object-center  ' src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64bbb43e292b8b8352068a48_NaN_A%20la%20Carte-p-500.jpg" alt="" />
                <div className='w-full h-[50%] bg-[#FA8A58] '> 
                   <h1 className=' px-5 py-8 font-["apercu"] text-2xl font-semibold   '>Brand Story</h1>
                   <h4 className='px-5 py-2 text-md'>Lorem ipsum dolor  adipisicing elit. <br /> Voluptate, praesentium aut? Labore, illum!</h4>
                </div>

            </div>
            

           
           
        </div>
        <h3 className='w-[50%] py-5 text-2xl '>NiceAtNoon is fris, jong en een tikkeltje eigenzinnig. Wars van
jargon en allergisch voor bureau blabla, gaan we lekker samen aan
de slag met jouw merk. En dat moet vooral leuk zijn! Want plezier
nemen we serieus. Vanuit daar ontstaat enthousiasme, trots en
het zelfvertrouwen om jouw merk de uitstraling te geven die het
verdient.</h3>
<div className='h-[7vh] w-[10vw] rounded-[10px] bg-black text-white flex justify-center gap-5 items-center'>
    <h3>Contact</h3>
    <FaLongArrowAltRight />
</div>


    </div>


    </div>

  )
}

export default Page3
