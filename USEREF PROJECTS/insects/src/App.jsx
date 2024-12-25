import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const arr = [
    {
      "name": "Ladybug",
      "image_url": "https://www.shutterstock.com/image-vector/ladybug-cartoon-insect-vector-cute-600w-2461734709.jpg"
    },
    {
      "name": "Dragonfly",
      "image_url": "https://thumbs.dreamstime.com/b/hyper-realistic-d-dragonfly-illustration-white-background-hyperrealistic-illustration-dragonfly-blue-wings-303850560.jpg"
    },
    {
      "name": "Butterfly",
      "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzg5N686jvlIDt6ZXHyk1yvDPAYQ48Kjrxsw&s"
    },
    {
      "name": "Honeybee",
      "image_url": "https://i.natgeofe.com/k/54e4ae4c-732e-485b-9b5f-2588d1416e97/honeybee-whitebackground_3x2.jpg"
    },
    {
      "name": "Grasshopper",
      "image_url": "https://images.ctfassets.net/cnu0m8re1exe/2Jv6S6yfKTEEPuJV0PJn23/8e0fc104907c5bd808401b7ec2457450/shutterstock_312547583.jpg"
    },
  ]
  
  const [insect, setInsect] = useState(null)
  const [position, setPosition] = useState({ top: '0%', left: '0%' })
  const imgRef = useRef(null)

  const generate = () => {
    const randomIndex = Math.floor(Math.random() * arr.length)
    const selectedInsect = arr[randomIndex]
    setInsect(selectedInsect)
  }

  useEffect(() => {
    if (insect) {
      const x = Math.floor(Math.random() * 80)
      const y = Math.floor(Math.random() * 80)
      setPosition({ top: `${y}%`, left: `${x}%` })
    }
  }, [insect])

  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div onClick={generate} className='w-[80%] h-[80%] bg-blue-200 relative border-gray-100 border px-5 py-2 flex items-center justify-center'>
        {insect && (
          <div className='mt-5 text-center'>
          
            <img 
              ref={imgRef} 
              src={insect.image_url} 
              className='w-32 h-32 absolute mt-2' 
              alt={insect.name}
              style={{ top: position.top, left: position.left }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
