const Events = () => {
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
    let count = 0;
    console.log("Initial count value: ", count);

    let counter = (value) => {
        count = value;
        alert(`Counter: ${count}`);
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
              <button onClick={() => counter(count + 1)}> Count Increment</button>
          </div>
      </>
  )
}

export default Events