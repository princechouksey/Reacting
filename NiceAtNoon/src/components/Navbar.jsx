const Navbar = () => {
   
  return (
    <div className=" h-[10vh] text-3xl  flex  items-center justify-between px-20 py-5 font-['siaga'] bg-[#E4E4E4] "> 
    <h1 className="text-3xl font-bold font-['siaga] " >NiceAtNoon</h1>
    <img className=" h-10  ml-[10vw] rotate-45" src="https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/645504e2d96d4113a9ae2f41_favicon-niceatnoon.png" alt="" />
    <div className="flex items-center text-lg justify-center  gap-4  font-['apercu']  ">
     <h3 className="border hover:bg-black hover:text-white border-black px-4 py-1  rounded-[10px] ">Projecten</h3>
     <h3 className="border border-black px-4 py-1  rounded-[10px] hover:bg-black hover:text-white ">Over</h3>
     <h3 className="border border-black px-4 py-1  rounded-[10px]  hover:bg-black hover:text-white font-bold underline  ">Contact</h3>
    </div>

       
    </div>
  )
}

export default Navbar
