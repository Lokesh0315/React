import React from 'react'


const Home = ({array,arrofobj}) => {
    // console.log(develop);
    // const {array,arrofobj}=develop
  return (
    <>
    <div className='bg-blue-300 flex justify-around p-5 '>
        {array.map((s,y)=>(
            <div className='bg-white p-5 rounded text-black-300' key={y+1}>
                <p>{s}</p>
            </div>
        ))}
    </div>
    <div className='bg-violet-300 flex justify-around p-5'>       
        {arrofobj.map((e,i)=>(
            <div className='bg-white p-5 text-center rounded text-black-300' key={i+1}>
                <p>{e.name}</p>
                <p>{e.age}</p>
            </div>
        ))}
    </div>
    </>
  )
}

export default Home


