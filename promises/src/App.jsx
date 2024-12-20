import React, { useState, useSyncExternalStore } from 'react';
import axios from 'axios';

const App = () => {
  const [Name, setName] = useState('');
  const [Company, setCompany] = useState('');
  const [Number, setNumber] = useState('');
  const [allUsers, setAllUsers] = useState([]);
  const [favourite, setFavourite] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    // Create a new user object
    const newUser = {
      name: Name,
      company: Company,
      phone: Number,
      favourite: favourite,
    };

    // Update the allUsers state with the new user
    setAllUsers([...allUsers, newUser]);

    // Clear the form fields
    setName('');
    setCompany('');
    setNumber('');
    setFavourite(false)
  };
  const deleteHandler = (i)=>{
    const newArr = [...allUsers]
    newArr.splice(i,1)
    setAllUsers(newArr);
  }

  return (
    <div className="h-screen w-full bg-gray-100 flex items-center justify-start p-5 gap-10">
      <div className="w-[30%] h-full bg-gray-100 p-3 px-10">
        <form onSubmit={submitHandler}>
          <h2 className="text-2xl font-semibold text-black mb-5 w-full">Add Contact</h2>
          <h1 className="text-xl font-sans mb-1">Name</h1>
          <input
            onChange={(e) => setName(e.target.value)}
            value={Name}
            className="border border-black px-2 py-1 rounded mb-5 w-full"
            type="text"
            placeholder="Enter name"
          />
          <h1 className="text-xl font-sans mb-1">Company</h1>
          <input
            onChange={(e) => setCompany(e.target.value)}
            value={Company}
            className="border border-black px-2 py-1 rounded mb-5 w-full"
            type="text"
            placeholder="Enter Company"
          />
          <h1 className="text-xl font-sans mb-1">Phone</h1>
          <input
             
            value={Number}
            className="border border-black px-2 py-1 rounded mb-5 w-full"
            type="text"
            placeholder="Enter Phone Number"
          />
          <br />
          <input onChange={(e) => setFavourite(e.target.checked)}  type="checkBox" checked={favourite}  />
          <label htmlFor="checkBox" className='ml-3 text-xl mb-5'>Favourite</label>
          <button className="px-10 py-2 rounded bg-blue-600 text-white w-full mt-4">Add Contact</button>
        </form>
      </div>
      <div className="w-[50%] h-full bg-gray-100 px-5 py-2">
        <h1 className="font-semibold text-2xl mb-5">Contact List</h1>
        {allUsers.map((user, index) => (
          <div key={index} className="w-[70%] h-[25%] bg-white rounded-[10px] px-5 py-5 mb-5">
            <h1 className="text-2xl font-semibold">{user.name}</h1>
            <h2 className="text-xl">Company: {user.company}</h2>
            <h2 className="text-xl">Phone: {user.phone}</h2>
            <div className='flex items-center justify-between'>
            <h2 className="text-xl w-fit px-3 py-2 rounded  bg-yellow-500 text-white" >{user.favourite ? "Favourite" : "" }</h2>
            <button onClick={()=>{deleteHandler(index)}} className='px-3 py-1 rounded bg-red-600 text-white text-lg mt-5 '>Delete</button>
         
            </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default App;
