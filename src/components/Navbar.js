import { useState } from 'react'
import logo from '../assets/images/logo.png'
import '../assets/scss/Navbar.scss'

const Navbar = () => {
  const [navbarState, toggleNavbar] = useState(false)

  const toggle = () => {
    toggleNavbar(!navbarState)
  }
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className={`menu ${navbarState ? 'open' : ''}`} onClick={toggle}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={navbarState ? 'show' : ''}>
          <li><h3><a rel="noreferrer" href="#about">ABOUT</a></h3></li>
          <li><h3><a rel="noreferrer" href="#projects">PROJECT</a></h3></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar