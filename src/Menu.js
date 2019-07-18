import React from 'react'

const Menu = () => {
  return (
    <nav>
      <img className='nasa-logo' src='https://api.nasa.gov/images/logo.png' alt='nasa logo'/>
      <ul className='menu'>
        <li>Topics</li>
        <li>Missions</li>
        <li>Galleries</li>
        <li>NASA TV</li>
        <li>About</li>
      </ul>
    </nav>
  )
}

export default Menu
