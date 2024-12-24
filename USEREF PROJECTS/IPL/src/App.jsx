import React, { useState } from 'react'

const App = () => {
  const iplTeams = [
    {
      name: "Mumbai Indians",
      logo: "https://wallpapers.com/images/hd/mumbai-indians-team-celebration-photograph-0d49kq5o57i5mdm5.jpg"
    },
    {
      name: "Chennai Super Kings",
      logo: "https://i.pinimg.com/736x/4c/e8/ec/4ce8ec2ef49579e53d4f264f30d901b1.jpg"
    },
    {
      name: "Royal Challengers Bangalore",
      logo: "https://images.thequint.com/thequint%2F2023-03%2F38df59d3-63f1-45b2-8474-d98b4491428d%2FFsKYec9aYAI_0v3.jpg"
    },
    {
      name: "Delhi Capitals",
      logo: "https://7criccricket.in/wp-content/uploads/2023/11/delhi-capitals-11.webp"
    },
    {
      name: "Kolkata Knight Riders",
      logo: "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/381500/381554.jpg"
    },
    {
      name: "Sunrisers Hyderabad",
      logo: "https://wallpapers.com/images/hd/sunrisers-hyderabad-team-line-up-poster-39pr6p1tbhwitydc.jpg"
    },
    {
      name: "Rajasthan Royals",
      logo: "https://img-cdn.thepublive.com/fit-in/640x430/filters:format(webp)/pratidin/media/media_files/2024/11/26/cTlbMCPXvVNiS3Oh5ua6.jpeg"
    },
    {
      name: "Punjab Kings",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGSUcc49tkumuXNZOwmqHgI89_OD7IMpfULg&s"
    },
    {
      name: "Gujarat Titans",
      logo: "https://cricgate.com/wp-content/uploads/2024/02/GT-Squad-2.webp"
    },
    {
      name: "Lucknow Super Giants",
      logo: "https://i1.wp.com/sportsganga.gumlet.io/wp-content/uploads/2023/01/compressjpglsg-2023.jpg?strip=all"
    }
  ];
  const[winner, setWinner] = useState('')
  const guess = ()=>{
    const randomIndex = Math.floor(Math.random()* iplTeams.length)
    setWinner(iplTeams[randomIndex])
   
  }
  return (
    <div className='flex items-center justify-center mt-2 gap-4 flex-col '> 
     <h1 className='text-4xl text-center text-black font-bold  '>{winner.name}</h1>
      <div className=' w-[80vw] h-[80vh]  '>
        <img src={winner.logo} className='w-full h-full  object-cover  ' alt="" />
       
      </div>
      <button onClick={guess} className=' w-[50%] bg-blue-500 px-20 py-3 rounded-[30px] text-2xl text-white mt-2'>Guess Winner</button>

      
    </div>
  )
}

export default App
