import React from 'react'

const Banner = ({object}) => {
  return (
    <>
    <div>
      <p>Name: {object.name}</p>
      <p>Age: {object.age}</p>
      <p>Course: {object.course}</p>
      <p>Trainer: {object.Trainer}</p>
    </div>
    </>
  )
}

export default Banner