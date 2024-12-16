import React, { useState } from 'react'

const App = () => {
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(username);
    setUsername('')
    setAllUsers(newArr)
    console.log(newArr);
    
  }

  const changeValue = (elem)=>{
    setUsername(elem.target.value);
  }
  const [username, setUsername] = useState('')
  const [allUsers, setAllUsers] = useState([])
  const newArr = [...allUsers,username]

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='mt-2 ml-2'>
        <input onChange={changeValue} value={username} className='border-2 border-black rounded px-2 py-1 mr-1' type="text" placeholder='Enter your name' />
        <button className='border rounded bg-black font-medium text-white px-3 py-2'>Submit</button>
      </form>

      <div className='py-4 bg-blue-300 mt-5'>
       {allUsers.map(function(elem){
        return <h1>{elem}</h1>
       })}
      </div>
    </div>
  )
}

export default App