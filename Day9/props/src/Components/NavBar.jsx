import React from 'react'
import { Link } from  'react-router-dom'
const NavBar = () => {
  return (
    <>
    <div className='bg-amber-200 flex justify-between p-3'>
        <div className='mx-10'>
            Logo
        </div>
        <div className='flex gap-10 mx-10'>  
            <Link to="/">Home</Link>
            <Link to="/banner">Banner</Link>
        </div>
    </div>
    </>
  )
}

export default NavBar