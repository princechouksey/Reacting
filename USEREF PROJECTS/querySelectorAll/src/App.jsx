import React, { useEffect } from 'react';
import './App.css'

const App = () => {
  useEffect(() => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
      console.log(box);
    });
  }, []);

  return (
    <div className="App">
      <div className="box">Box 1</div>
      <div className="box">Box 2</div>
      <div className="box">Box 3</div>
    </div>
  );
};

export default App;
