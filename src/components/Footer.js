import '../assets/scss/Footer.scss'
import logo from '../assets/images/logo.png'
import fb from '../assets/images/Facebook Icon.svg'
import li from '../assets/images/LinkedIn Icon.svg'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="flex">
          <div className="link-flex">
            <div className="links">
              <img src={logo} className="logo" alt="" />
              <ul>
                <li><a href="#hero">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#projects">PROJECTS</a></li>
              </ul>
            </div>
            <div className="address">
              <h3 className="light">Address</h3>
              <p>FFC Building, Makati City, Metro Manila, Philippines</p>
            </div>
          </div>
          <div>
            <h1 className="light">Get in Touch</h1>
            <div className="contacts">
              <a rel="noreferrer" href="https://www.linkedin.com/in/von-matthew-alfafara/" target="_blank" className="contact link">
                <img src={li} alt="" />
                <span>Von Matthew Alfafara</span>
              </a>
              <a rel="noreferrer" href="https://www.facebook.com/veearex/" target="_blank" className="contact link">
                <img src={fb} alt="" />
                <span>Matthew Alfafara</span>
              </a>
              <span className="contact">
                <span className="img mobile-icon"></span>
                <span>+63 923 084 9180</span>
              </span>
              <span className="contact">
                <span className="img email-icon"></span>
                <span>alfafara.vm@gmail.com</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer