import React from 'react'
import { useState } from 'react';
const Events = () => {
    const[count, setCount] = useState(0);
    const showAlert = () => {
        alert("Button Clicked!");
    };
    const bg_light = () => {
        document.body.style.backgroundColor = "lightblue";
        document.body.style.color = "black";
    };
    const bg_dark = () => {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    };

    let counter = (value) => {
        console.log("Count value before increment: ", count);
        setCount(value);
        alert(`Counter: ${value}`);
        console.log("Count value after increment: ", count);
    };
    
  return (
      <>
          <h1>Events</h1>
          <h1>Counter = {count}</h1>
          <button onClick={showAlert}>Click</button>
          <div>
              <button onClick={bg_light}>Light Mode</button>
              <button onMouseOver={bg_dark}>Dark Mode</button>
              <button onClick={() => counter(count + 10)}> Count Increment</button>
          </div>
      </>
  )
}

export default Events