import React, { useState, useEffect } from 'react';

const App = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[300px] p-4 border border-gray-300 rounded-lg">
        <h2 className="text-center text-xl mb-4">Progress Bar</h2>

        <div className="relative mb-6">
          <div className="w-full h-6 bg-gray-200 rounded-full">
            <div
              className="h-6 bg-blue-600 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <span className="text-white font-bold">{progress}%</span>
          </div>
        </div>

        {isComplete && (
          <div className="text-center text-green-600">Download Complete!</div>
        )}
      </div>
    </div>
  );
};

export default App;
