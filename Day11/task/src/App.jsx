// import React, { useState } from 'react'

// const App = () => {

//   const [number,setNumber]=useState(true)
//   function show(){
//     setNumber(!number)
//   }
//   return (
//     <>
//     <p>{number}</p>
//     {number?<p className='bg-green-600 p-3'>This is True</p>:<p className='bg-red-600 p-3'>This is false</p>}
//     <button className={number?'bg-blue-300 p-3 rounded':'bg-amber-300 p-3 rounded'} onClick={show}>Click Here..</button>
//     </>
//   )
// }

// export default App


import React, { useState } from "react";

const App = () => {

  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const [obj, setObj] = useState({name:"Loki"})


  const arrclick = () => {

    const newArr = [...arr,11]; 
    newArr[1] = 7;           

    setArr(newArr);
  };


  const objclick = () => {

    
    setObj({...obj,name:"Lokesh"})

  }


  return (
    <>
    
      <p>{arr}</p>
      <button className="bg-blue-300 p-3 rounded" onClick={arrclick}>Array Click</button>


      <p>{obj.name}</p>
      <button className="bg-blue-300 p-3 rounded" onClick={objclick}> Object Click</button>
    </>
  );
};

export default App;