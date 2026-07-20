// import React, { useState } from 'react'

// const App = () => {
//   const [obj,setObj]=useState({name:"Lokesh",course:"FullStack"})
//   const updobj=()=>{
//     setObj({...obj,name:"Aswin",course:"true"})
//   }


//   return (
//     <>
//     {/* <p>{obj.name}</p>
//     <p>{obj.course}</p> */}
//     {obj.course?<p>{obj.name}</p>:obj}
//     <button onClick={updobj}>UpdateObject</button>
//     </>
//   )
// }

// export default App


import React, { useState } from 'react'

const App = () => {
  const [arr,setArr]=useState(["Lokesh","Aswin","Kathir"])
  const updarr=()=>{
    const datas=[...arr]
    datas[2]="Chaithu"
    setArr(datas)
  }
  return (
    <>
    <p>{arr}</p>
    <button onClick={updarr}>UpdateArray</button>
    </>
  )
}

export default App