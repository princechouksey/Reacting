import React, { useState, useRef } from 'react';

const App = () => {
  const imgRef = useRef(null);
  const [imageSrc, setImageSrc] = useState('https://images.unsplash.com/photo-1734631083652-6a17bb81d8db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D');

  const swapImage = () => {
    const currentSrc = imgRef.current.getAttribute('src');
    if (currentSrc === 'https://images.unsplash.com/photo-1734631083652-6a17bb81d8db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D') {
      imgRef.current.setAttribute('src', 'https://images.unsplash.com/photo-1732106450333-5c95a3763d31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D');
    } else {
      imgRef.current.setAttribute('src', 'https://images.unsplash.com/photo-1734631083652-6a17bb81d8db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg w-64">
        <img 
          ref={imgRef}
          src={imageSrc}
          alt="Placeholder"
          className="mb-4 rounded-md  object-cover"
          style={{ width: '200px', height: '200px' }}
        />
        <button
          onClick={swapImage}
          className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
        >
          Swap Image
        </button>
      </div>
    </div>
  );
};

export default App;
