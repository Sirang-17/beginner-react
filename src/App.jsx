import React from 'react'

const App = () => {
  const num = 10;
  const person = {
    name: "Ali",
    gmail: "ali12@gmail.com",
  };
  return (
    <>
     <div>
      <h1>Hello React</h1>
      <h1>Welcome to React!</h1>
      <h1>2 + 5</h1>
      <h1>{2 + 5}</h1> JSX means JavaScript XML, so we can write JavaScript 
      code inside the curly  braces
      <h1>{2 - 5}</h1>
      <h1>{2 * 5}</h1>
      <h2>{num}</h2>
      <h2>{person.name}</h2>
      <h2>{person.gmail}</h2>
     </div>
     <h1>Hi</h1>
     <div><h1>world</h1></div>
    </>
  )
}

export default App

