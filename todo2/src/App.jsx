import React, { useState } from 'react'

const App = () => {

  const [name, setname] = useState(""); 
  const [details, setDetails] = useState(""); 
  const [imageUrl, setimageUrl] = useState(""); 
  const [allCards, setallCards] = useState([]); 
  



  
  const submitHandler =(e) =>{
    e.preventDefault()
    const newArr = [...allCards, {name, details, imageUrl}]
    console.log(newArr)
    setallCards(newArr)
    setname("")
    setDetails("")
    setimageUrl("")

  }
  
  

  return (
    <div className='h-screen w-full bg-zinc-100  py-10  text-center'>
       <form   onSubmit={(e)=>{submitHandler(e)}}>
        <input onChange={(e)=> {setname(e.target.value)}}  value={name} className='h-10  w-60 border border-black rounded px-10 py-2  mr-10 '  type="text" placeholder='Enter Name' />
        <input onChange={(e)=> {setDetails(e.target.value)}}  value={details} className='h-10  w-60 border border-black rounded px-10 py-2  mr-10 '  type="text" placeholder='Enter Details' />
      
        <input onChange={(e)=> {setimageUrl(e.target.value)}}  value={imageUrl} className='h-10  w-60 border border-black rounded px-10 py-2  mr-10 '  type="text" placeholder='Enter Image URL' />
      
        <button className='px-3 py-1 bg-black text-white rounded font-sm '>Submit</button>
      </form>
      <div className='h-[50vh] w-full mt-32 px-5 flex items-center justify-start gap-12 '>
        {allCards.map(function(elem){
          return <div className='w-[20vw] h-[45vh] px-5  border border-zinc-300 rounded  flex items-center justify-start flex-col    '>
              <img src={elem.imageUrl} className=' w-32 h-32 object-cover rounded-full mt-5  ' alt="" />
             <h1 className=' font-semibold text-2xl mb-4 mt-3  '>{elem.name}</h1>
             <h1 className='w-full text-xl mt-2  '>{elem.details}</h1>
           

                </div>
        })}
      </div>
         
      
    </div>
  )
}

export default App
