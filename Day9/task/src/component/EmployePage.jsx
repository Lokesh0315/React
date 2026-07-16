import React from 'react'
import EmployeeDetails from '../pages/EmployeeDetails'

const EmployePage = () => {

  const emp = {name:"Lokesh", email:"lokesh@gmail.com",department:"ECE"}
  return (
    <>
    <EmployeeDetails details={emp} />
    
    
    
    </>
  )
}

export default EmployePage