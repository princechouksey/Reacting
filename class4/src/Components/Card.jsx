import React from "react";

const Card = (prop) => {
 
    const handleClickRequest = ()=>{
      if(prop.user.isAvailable){
        alert("Request Sent...")
      }
      else{
        alert("Already an Enployee")
      }

      
    }
  return (
   
    <div
      id={prop.key}
      className=" card w-[20vw] h-[55vh] border border-grey rounded-md flex items-center  justify-start gap-4 p-3 flex-col text-center "
    >
      
      <img src={prop.user.image}  className=" w-[15vh]  h-[15vh] object-cover object-top rounded-full " alt="" />
      <h1 className=' text-2xl font-semibold px-2 py-5  font-["gilroy"]   '>
        {prop.user.name}
      </h1>
      <div className="flex items-center justify-center gap-4">
        {prop.user.skills.map(function (elem, idx) {
          return (
            <h3 className=" px-3 py-1 bg-black text-white rounded-[20px] w-fit  mb-3  text-center">
              {elem}
            </h3>
          );
        })}
      </div>
   
      <h5 className=" ">{prop.user.job_description}</h5>
      <div className="flex items-center justify-between gap-20 ">
      <button onClick={handleClickRequest} className={`text-lg font-semibold px-5 py-2  rounded-md  ${prop.user.isAvailable ? "bg-green-400" :" bg-red-600"} text-white  `}>{prop.user.isAvailable ? "Available" : "Working"}</button>
      <h5 className=" text-xl text-black font-semibold">{prop.user.city}</h5>
      </div>
    </div>
  );
};

export default Card;
