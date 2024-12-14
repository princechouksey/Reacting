import React from 'react'

const Page2 = () => {
  return (
    <div className=' h-screen w-full bg-[#E4E4E4] px-20 '> 
    <h1 className=' w-full  text-2xl '>NiceAtNoon is een fijnschalige design studio voor merken die de hoofden en de harten van hun publiek willen <br />
veroveren. Geobsedeerd door de magie van design, geloven we sterk in de kracht van 'story-driven design'; <br />
het geeft jouw unieke merkverhaal geloofwaardigheid, zeggingskracht en een niet te negeren <br />
aantrekkingskracht. Raak en verbind jouw doelgroepen als nooit tevoren!</h1>
<button className='px-8 py-3 bg-white rounded-[10px] text-md  mt-10'>Leer ons Kennen </button>
<div className=' w-full h-[60vh]  mt-10 flex items-center justify-start gap-10 flex-col relative   ' >
  <h1  className=' text-sm font-["apercu"]'>Cases</h1>
  <h1 className=' text-9xl uppercase leading-[7rem] tracking-tighter text-center font-bold  '>Head Turning <br /> Projects</h1>
  <h1 className='w-fit bg-yellow-400 px-8 py-4  text-xl  rounded-[30px] font-semibold absolute  bottom-[20%] right-[30%] rotate-[-20deg]' > Gotta see 'm all</h1>
  <button className=' px-8 py-3 text-xl  bg-white rounded-[10px]  absolute bottom-0 right-0'>Alle projecten</button>
</div>
      
    </div>
  )
} 

export default Page2
