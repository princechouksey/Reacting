import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [images, setImages] = useState([])
  
  const clickHandler = async ()  =>{
  const {data} = await axios.get('https://picsum.photos/v2/list')
  setImages(data)
  
  }
 
 
  return (
    <div className='p-5'>
      <button onClick={()=>{
        clickHandler()
      }} className='px-5 py-2 rounded bg-red-500 text-white'> Data </button>
      {images.map(function(elem){
        return <div className='bg-gray-100 flex justify-between items-center p-4'> 
          <img className='w-60 h-60 object-cover rounded ' src={elem.download_url} alt="" />
          <h1 className='text-xl font-medium'>{elem.author}</h1>
        </div>
      })}
    </div>
  )
}

export default App
