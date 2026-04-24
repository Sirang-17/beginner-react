import React from 'react'

const Product = ({name, price, color, data = {}}) => {
  return (
    <div>
      <h1>Welcome to the Product Page.</h1>
      <h1>Brand {name}</h1>
      <h2>Price {price}</h2>
      <h2>Color {color}</h2>
      <p>RAM {data.ram}</p>
      <p>ROM {data.rom}</p>
      <p>Chip {data.chip}</p>
    </div>
  )
}

export default Product
