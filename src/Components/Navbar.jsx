import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <Link to='/'>shop</Link>
        <Link to='/Cart'>cart</Link>
    </div>
  )
}

export default Navbar