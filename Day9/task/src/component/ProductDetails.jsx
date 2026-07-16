import React from 'react'
import ProductPage from '../pages/ProductPage';

const ProductDetails = () => {
    const products = [
    {
      id: 1,
      productName: "Mouse",
      price: 700,
      inStock: true,
    },
    {
      id: 2,
      productName: "Keyboard",
      price: 2500,
      inStock: false,
    },
    {
      id: 3,
      productName: "Headphones",
      price: 800,
      inStock: true,
    },
    {
      id: 4,
      productName: "Monitor",
      price: 12000,
      inStock: true,
    },
    {
      id: 5,
      productName: "USB Cable",
      price: 300,
      inStock: false,
    },
  ];
  return (
   <>
   <ProductPage details = {products}/>
   
   </>
  )
}

export default ProductDetails