import React, { useState } from 'react'

const App = () => {
  const [add, setAdd] = useState(false)
  const adding = () =>{
    setAdd(!add)

  }
  return (
    <div className='flex items-center justify-center px-5 py-5  '>
      <div className='w-[50vh] h-[65vh]  px-5 py-2 flex items-center justify-center flex-col border border-black rounded  '>
        <img className='w-24 h-24 rounded-full object-cover  ' src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> 
        <h2 className='text-2xl text-black font-semibold '>Vel Kumar pi</h2>
        <h1 className='text-md text-gray-400 '>UI/UX Designer</h1>

        <div className='flex items-center justify-center gap-16 mt-10'>
          <div className='text-center'>
            <h2 className='text-md text-gray-400 '>Projects</h2>
            <h2>11</h2>
          </div>
          <div className='text-center'>
            <h2 className='text-md text-gray-400 '>Following </h2>
            <h2 >1120</h2>
          </div>
          <div className='text-center'>
            <h2 className='text-md text-gray-400 '>Followers</h2>
            <h2>250</h2>
          </div>
        </div>
        <h2 className='text-center mt-10' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam reprehenderit consequatur cupiditate error tempore. Amet?</h2>
        <button onClick={adding} className={`px-5 w-[80%] py-3  text-white rounded-[30px] mt-10 ${add ? "bg-red-600" : "bg-blue-600"}`} >{add ? "Remove Friend" : "Add Friend"}</button>

      </div>
      
    </div>
  )
}

export default App
