import React, { useState } from 'react'
import { use } from 'react'

const App = () => {
    const [glow, setGlow] = useState(false)
    const glower =()=>{
        setGlow(!glow)
    }
  return (
    <div className='flex items-center justify-center flex-col'>
        <div className={`h-[50vh] w-[50vh] rounded-full m-5 ${glow ? 'bg-yellow-300' : 'bg-gray-200'}`}></div>
        <button onClick={glower} className={`px-8 py-2 text-xl bg-green-600 text-white rounded ${glow ?" bg-red-500" : "bg-green-600"} `}  >{glow ?" OFF" :" ON" }</button>
      
    </div>
  )
}

export default App
