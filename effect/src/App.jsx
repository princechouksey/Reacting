import React, { useEffect, useRef } from 'react'

const App = () => {
  const boxref  = useRef(null);
  const randomColor =()=>{
    const x = Math.floor(Math.random()*256)
    const y = Math.floor(Math.random()*256)
    const z = Math.floor(Math.random()*256)

    boxref.current.style.backgroundColor  = `rgb(${x},${y},${z})`
    
   
  }
 
  return (
    <div  className=' w-full  h-screen'>

      <div ref={boxref}  className='h-[20vh] w-[20vh] bg-gray-500  m-20'></div>
      <button className='mx-20 px-2 py-1 bg-black text-white rounded' onClick={randomColor}>Click here</button>
    </div>
    
  )
}

export default App
