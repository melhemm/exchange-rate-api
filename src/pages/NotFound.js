import React from 'react'
import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>PAGE NOT FOUND</h2>
      <h3>BACK TO HOME?</h3>
      <Link to="/">Home</Link>
    </div>
  )
}

export default NotFound