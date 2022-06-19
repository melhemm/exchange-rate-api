import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className='navbar-brand'>Exchange Rate</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className='nav-link ml-auto'>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className='nav-link ml-auto'>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar