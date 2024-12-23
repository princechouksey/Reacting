import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);

  const trimToWords = (str, wordLimit) => {
    let words = str.split(/\s+/);
    let trimmedStr = words.slice(0, wordLimit).join(" ");
    return trimmedStr;
  };

  const getData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const addToCart = (idx) => {
    const updatedCart = [...cartData, data[idx]];
    setCartData(updatedCart);
  };

  const deleteHandler = (idx) => {
    const updatedCart = [...cartData];
    updatedCart.splice(idx, 1);
    setCartData(updatedCart);
  };

  return (
    <div className="bg-blue-100 p-5 flex">
      {/* Product Section */}
      <div className="py-4 bg-blue-200 rounded-md w-3/4 min-h-screen flex flex-wrap gap-5 justify-evenly">
        {data.map((elem, idx) => {
          let trimmedDescription = trimToWords(elem.description, 10);

          return (
            <div
              key={idx}
              className="w-60 bg-white shadow-md p-2 flex flex-col justify-evenly rounded-md overflow-hidden"
            >
              <h1 className="mb-2 bg-cyan-300 text-white py-1 px-1 w-fit rounded-md uppercase text-[12px] font-medium">
                {elem.category}
              </h1>
              <img
                className="h-40 mx-auto mb-3 object-cover"
                src={elem.image}
                alt=""
              />
              <h2>{trimmedDescription}</h2>
              <p className="text-2xl text-center font-medium my-2">
                ${elem.price}
              </p>
              <div className="flex justify-between">
                <p className="bg-zinc-200 text-sm font-medium p-1 rounded-md">
                  Rating: {elem.rating.rate}
                </p>
                <p className="bg-zinc-200 text-sm font-medium p-1 rounded-md">
                  Count: {elem.rating.count}
                </p>
              </div>
              <button
                onClick={() => {
                  addToCart(idx);
                }}
                className="w-full p-2 bg-emerald-600 text-white rounded-md font-medium mt-4"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>

      {/* Cart Section */}
      <div className="w-1/4 bg-blue-100 p-2">
        {cartData.length === 0 ? (
          <div className="bg-white p-4 rounded-md shadow-md text-center">
            <p className="text-xl font-medium text-gray-700">Your cart is empty!</p>
          </div>
        ) : (
          cartData.map(function (elem, idx) {
            let trimmedDescription = trimToWords(elem.description, 10);
            return (
              <div
                key={idx}
                className="flex w-full items-center h-44 p-2 bg-gray-50 rounded-lg mb-4 shadow-md"
              >
                <img className="h-28 w-[100px] object-cover" src={elem.image} alt="" />
                <div>
                  <h3 className="text-[13px] leading-4 ml-2">{trimmedDescription}</h3>
                  <p className="ml-2 font-medium">${elem.price}</p>
                  <div className="ml-2 mt-1 flex gap-2">
                    <h4 className="bg-zinc-300 text-[9px] font-medium p-1 rounded-md">
                      Rating: {elem.rating.rate}
                    </h4>
                    <h4 className="bg-zinc-300 text-[9px] font-medium p-1 rounded-md">
                      Count: {elem.rating.count}
                    </h4>
                    <button
                      onClick={() => {
                        deleteHandler(idx);
                      }}
                      className="bg-red-500 p-1 text-white rounded-md text-[10px]"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default App;