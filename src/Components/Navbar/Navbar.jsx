import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>Shoppee</p>
      </div>
      <ul className='nav-menu'>
        <li className='menu'>Shop <hr /></li>
        <li className='menu'>Men</li>
        <li className='menu'>Women</li>
        <li className='menu'>Kids</li>
      </ul>
      <div className='nav-login-cart'>
        <button className='nav-login'> Login </button>
        <img src={cart_icon} alt="" />
      <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar
