import React, { useState, useRef } from 'react';

const App = () => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mousee = (e) => {
    setPosition({ x: e.clientX, y: e.clientY }); 
  };

  return (
    <div onMouseMove={mousee} className="w-full h-screen px-5 py-2 relative">
      <div
        ref={divRef}
        style={{ top: position.y, left: position.x }}
        className="w-5 h-5 rounded-full bg-black absolute"
      ></div>
    </div>
  );
};

export default App;
