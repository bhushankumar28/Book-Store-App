import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {

  const { _id, bookTitle } = useLoaderData();
  return (
    <div>SingleBook: {_id}</div>
  )
}

export default SingleBook