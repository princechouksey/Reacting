import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const {id} = useParams()
    console.log(id)
  return (
    <div>
      <h1>Details page of {id}'s </h1>
    </div>
  )
}

export default Details
