import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className='navbar-brand'>Exchange Rate</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" className='nav-link ml-auto'>Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/about" className='nav-link ml-auto'>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar