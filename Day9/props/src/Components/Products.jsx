import React from 'react'
import Home from '../Pages/Home'
const Products = () => {

    const arr=["Lokesh","Aswin","Kathir"]
    const arrobj=[{name:"Lokesh",age:21},{name:"Aswin",age:22},{name:"Kathir",age:21}]
  return (
    <>
    <Home array ={arr} arrofobj={arrobj}/>
    </>
  )
}

export default Products