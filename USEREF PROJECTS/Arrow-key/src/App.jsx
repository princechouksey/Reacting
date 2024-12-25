import React, { useState } from 'react';

const App = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const handleKeyDown = (e) => {
    console.log(e.key)
    switch (e.key) {
      case 'ArrowUp':
        setPosition((prev) => ({ ...prev, y: prev.y - 10 }));
        break;
      case 'ArrowDown':
        setPosition((prev) => ({ ...prev, y: prev.y + 10 }));
        break;
      case 'ArrowLeft':
        setPosition((prev) => ({ ...prev, x: prev.x - 10 }));
        break;
      case 'ArrowRight':
        setPosition((prev) => ({ ...prev, x: prev.x + 10 }));
        break;
      default:
        break;
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div
        tabIndex="0"  
        onKeyDown={handleKeyDown} 
        style={{
          position: 'absolute',
          top: `${position.y}px`,
          left: `${position.x}px`,
          width: '50px',
          height: '50px',
          backgroundColor: 'blue',
        }}
        className="border"
      ></div>
    </div>
  );
};

export default App;
