import React from 'react'

const Product = ({name, price, color, data = {}}) => {
  //internal CSS
  const myStyle = {
    color: color,
    border: `2px solid ${color}`,
    padding: "10px",
    margin: "10px",
    borderRadius: "5px"
  };
  return (
    // inline CSS
    <>
    {/* <div style = {{color: color, border: `2px solid ${color}`, padding: "10px", margin: "10px", borderRadius: "5px"}} > */}
      <div style = {myStyle}>
      <h1>Welcome to the Product Page.</h1>

        <h1>Brand {name}</h1>
        <h2>Price {price}</h2>
        <h2>Color {color}</h2>
        {data.ram && (
          <>
            <p>RAM {data.ram}</p>
            <p>ROM {data.rom}</p>
            <p>Chip {data.chip}</p>
          </>
        )}
    </div>
    </>
  )
}

export default Product
