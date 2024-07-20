import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className='head'>
      <div className='nav'>
        <nav className='navbar fixed-top navbar-expand-lg navbar-light'>
            <div className='container-fluid  '>
            <ul className="navbar-nav">
			<li className="nav-item ">
			  <Link  className='navin' to="/">Home</Link>
			</li>
            <li class="nav-item">
			  <Link  className='navin'  to="/resume">Resume</Link>
			</li>
            <li class="nav-item">
			  <Link className='navin'  to="/about">About</Link>
			</li>
            </ul>

            </div>

        </nav>
        </div>     
    </div>
    
    
  )
}

export default Header