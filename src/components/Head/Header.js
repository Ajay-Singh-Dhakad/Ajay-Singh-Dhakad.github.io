
import React from 'react'
import  "./Header.css"
import logo from "../pic/logo.png"
const Header = () => {
  return (
    <div>
      <header className='header'>
        <div className='container d_flex'>
            <div className='logo'>
                <image src={logo} alt=""/>

            </div>
            <div className='navlink'>
                <ul className='link f_flex uppercase'>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#features'>Features</a></li>
                    <li><a href='#portfolio'>Portfolio</a></li>
                    <li><a href='#resume'>Resume</a></li>
                    <li><a href='#contact'>Contact</a></li>
                    {/* <li><button className='home-btn'>BUY NOW</button></li> */}
                  
                </ul>
                <button className='toggle'>
                    <i className='fas fa-times'></i>
                </button>
            </div>
        </div>

      </header>
    </div>
  )
}

export default Header