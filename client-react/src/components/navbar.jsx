import React from 'react'

const NavBar = ({ totalCounters }) => {
  console.log('navbar rendered')
  return (
    <nav className='navbar navbar-light bg-light'>
      <a className='navbar-brand' href='#'>Navbar</a>
      <span className='badge badge-pill badge-secondary'>
        {totalCounters}
      </span>
    </nav>
  )
}

export default NavBar
