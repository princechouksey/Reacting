import React, { useEffect, useRef, useState } from 'react'
import './app.css'; 

const App = () => {
  const modeRef = useRef(null)
  const [theme, settheme] = useState(localStorage.getItem('theme'))
  
 

  const changeMode =()=>{
    if(theme == 'dark'){
      localStorage.setItem('theme' , 'light')
      settheme('light')
    }
    else{
      localStorage.setItem('theme' , 'dark')
      settheme('dark')
    }
  }
  useEffect(function(){
    modeRef.current.setAttribute('id', theme);
  },[theme])

  return (
    <div  ref={modeRef} className=' w-full h-screen px-5 py-2'>
      <div className='flex justify-between items-center px-5 py-2   '>
        <h2 className='text-2xl font-medium'>Sheryians</h2>
        <div className='flex items-center text-xl   gap-10'>
          <h2>About</h2>
          <h2>Contact</h2>
          <h2>Services</h2>
          <h2>Login</h2>
          <button onClick={changeMode} className='px-3 py-1 rounded bg-black text-white text-md'>Mode</button>
       
        </div>
        
       
      </div>
      
    </div>
  )
}

export default App
