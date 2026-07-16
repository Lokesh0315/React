// import React from 'react'

// const App = () => {
//   const name="Loki"
//   name="Lokesh"
//   const msg=()=>{
//     alert("Button Clicked")
//   }
//   return (
//     <>
//     <button onClick={msg} className='bg-blue-300 p-4 m-4 rounded'>Click</button>
//     </>
//   )
// }

// export default App


// import { useState } from 'react'

// const App = () => {

//   const [count,setCount]=useState("Loki")
//   const msg=()=>{
//     setCount("Lokesh")
//   }
//   return (
//     <>
//     <p>{count}</p>
//     <button className='bg-amber-200 p-3 rounded' onClick={msg}>Click to Change</button>
//     </>
//   )
// }

// export default App




import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <h1>{isLogin ? "Welcome User" : "Please Login"}</h1>

      <button className='bg-amber-200 p-3 rounded'  onClick={() => setIsLogin(!isLogin)}>
        Click
      </button>
    </>
  );
}

export default App;