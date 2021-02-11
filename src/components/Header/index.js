import React from 'react'
import logo from '../../images/logo.jpg'

import './style.css'

function Header() {
    return (

                <div className="header__container">
            <div className="header__logo">
                <img className='logo' src={logo} alt='' />
                <h3>Africa Young Scholars Network</h3>
            </div>
            <div className='header__navbar'>
                <ul>
                    <li className="navbar__item">Home</li>
                    <li className="navbar__item">Month Article</li>
                    <li className="navbar__item">Archives</li>
                    <li className="navbar__item">Categories</li>
                    <li className="navbar__item">Other</li>
                    <li className="navbar__item">About</li>
                </ul>
                <div className="header__login">
                <h4 >Newletters</h4>
                <select className="header__language">
                    <option value='french'>Français</option>
                    <option value='english'>English</option>
                </select>

                </div>
            </div>
            <div className="header__search">
                <input type="text" placeholder="Search"/>
            </div>
            </div>
            
        
        
    )
}

export default Header
