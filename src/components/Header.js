import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <h2> &#x950;</h2>
      <nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About Us</NavLink>
      </nav>
    </div>
  )
}

export default Header
