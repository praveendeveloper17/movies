import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar navbar-expand-md bg-primary navbar-dark fixed-top'>
      <div className='container-fluid'>
        <a href='#'className='navbar-brand'>
        <i className="fa-solid fa-video"></i> Movies</a>

        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#menu'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='menu'>
          <ul className='navbar-nav me-auto mb-2 mb-md-0'>
            <li className='nav-item'><NavLink to='/' className='nav-link'>Home</NavLink></li>
            <li className='nav-item'><NavLink to='/movies/top' className='nav-link'>Top Rated</NavLink></li>
            <li className='nav-item'><NavLink to='/movies/popular' className='nav-link'>Popular</NavLink></li>
            <li className='nav-item'><NavLink to='/movies/upcoming' className='nav-link'>Up Commimg</NavLink></li>
          </ul>
          <form action='#'>
            <input type='search'className='form-control form-control-sm' placeholder='search'/>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Header