import React, { useState, useEffect } from 'react';

// Example JSON data
const jsonData = [
  { "id": 1, "name": "Alice", "age": 25 },
  { "id": 2, "name": "Bob", "age": 30 },
  { "id": 3, "name": "Charlie", "age": 22 }
];

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData); // Set the JSON data to state
  }, []);

  return (
    <div>
      <h1>User Information</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            Name : {item.name},  Age : {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
