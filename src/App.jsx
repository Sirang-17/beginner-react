import React from 'react'
import Product from './components/Product';
const App = () => {
  const iphoneData = {
    ram: "16GB",
    rom: "256GB",
    chip: "A15 Bionic"
  };
  return (
    <>
     <Product name = "IPhone" price = {100000} color={"Blue"} data = {iphoneData} />
      <Product name = "Samsung" price = {80000} color={"Black"} data = {{ram: "8GB", rom: "128GB", chip: "Exynos 2100"}} />
    </>
  )
}

export default App

