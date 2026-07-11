

// const App = () => {

//   const arr=[1,2,3,4,5,6]
//   return (
//     <>
//     <h1>{arr}</h1>
//     <div>
//       <ul>
//         {arr.map((e,i)=>(

//           <li key={i+1}>{e}</li>
//         ))}
//       </ul>
//       <p>{arr.filter((e)=>e%2===0)}</p>
//       <p>{arr.find((e)=>e%2===0)}</p>

//     </div>
//     </> 
//   )
// }

// export default App




// const App = () => {

//   const obj={
//     name:"Lokesh", 
//     Subject:"React",
//     skills:{main:"HTML"}
//   }
//   const arr=[]
//   const datas=[...arr,obj]
//   console.log(datas);
  

//   return (
//     <>
//     <h2>{obj.name}</h2>
//     <h2>{obj.Subject}</h2>
//     <p>{obj.skills.main}</p>
//     </>
//   )
// }

// export default App



import React from 'react'

const App = () => {

  const datas=[
    {name:"Lokesh", subject:"React"},
    {name:"HTML", subject:"CSS"},
    {name:"BS", subject:"TW"}
  ]
  return (
    <>
    <div className="bg-blue-600 flex justify-center items-center gap-20 h-100">
      {datas.map((e,i)=>(
        <div key={i+1} className=  'bg-amber-200 h-80 w-50 text-center'>
          <p>{e.name}</p>
          <p>{e.subject}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default App