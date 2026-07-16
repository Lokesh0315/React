import React from 'react'
import StudentCard from './component/StudentCard'
import EmployeeCard from './component/EmployeeCard'
import StudentList from './component/StudentList'

const App = () => {
  const employe ={name:"Lokesh",email:"lokesh@gmail.com",city:"Chennai",experience:2}
  const students = [
  {
    id: 1,
    name: "Sudhan",
    course: "React"
  },
  {
    id: 2,
    name: "Lokesh",
    course: "Frontend"
  },
  {
    id: 3,
    name: "Aswin",
    course: "Machine Learning"
  }
];
  return (
    <>
    <StudentCard name = "react" age={21} course="fullstack" isPlaced={true}/>
    <EmployeeCard details={employe}/>
    <StudentList data={students}/>
    </>
  )
}

export default App