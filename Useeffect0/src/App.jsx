import React from 'react'
import { useRef } from 'react'

const App = () => {
  const imgRef  = useRef(null)
 
  const randomPosition =()=>{
    const x = Math.random()*80;
    const y = Math.random()*80;

    imgRef.current.style.left =  x +"%"
    imgRef.current.style.top = y +'%'

  }

  return (

    <div>
      <img ref={imgRef} className='w-[30vh] h-[30vh] absolute m-10 ' src="https://i.pinimg.com/474x/49/4d/2e/494d2e25fad7412b4f11beb7242ba804.jpg" alt="" />
      <button className='px-2 py-1 bg-black text-white rounded m-2   text-center ' onClick={randomPosition}> click here</button>
     
    </div>
  )
}

export default App
