import React from 'react'
import './NavBar.css'
import img1 from '../images/logo-polkadot.svg'
import { FaGithub, FaDiscord, FaTwitter, FaAngleDown } from 'react-icons/fa';

function NavBar() {
  return (
    <nav>
        <div className='nav01'>
            <div className="dropdown">
                <a href='#' className='dropbtn'>EN<FaAngleDown/></a>
                <div className="dropdown-content">
                    <a href="#">español</a>
                    <a href="#">中文</a>
                    <a href="#">日本語</a>
                    <a href="#">한국어</a>
                    <a href="#">русский</a>
                    <a href="#">Türkçe</a>
                </div>
            </div> 
            <ul className='nav_menu01'>
                <li className='nav_item01'><a href='#' className='nav_link01'>Lightpaper</a></li>
                <li className='nav_item01'><a href='#' className='nav_link01'>Whitepaper</a></li>
                <li className='nav_item01'><a href='#' className='nav_link01'>Wiki</a></li>
                <li class='nav_item01'>
                    <button className='button02'><FaGithub/></button>
                </li>
                <li class='nav_item01'>
                    <button className='button02'><FaDiscord/></button>
                </li>
                <li class='nav_item01'>
                    <button className='button02'><FaTwitter/></button>
                </li>
                <li class='nav_item01'>
                    <button className='button01'>Support</button>            
                </li> 
            </ul>
        </div>
        <div className='nav'>
            <img src= {img1} alt="" className='image01'/>
            <ul className='nav_menu'>
                <li className='nav_item'><a href='Home.js' className='nav_link overline-on-hover'>Technology</a></li>
                <li className='nav_item'><a href='#' className='nav_link overline-on-hover'>Community</a></li>
                <li className='nav_item'><a href='#' className='nav_link overline-on-hover'>About</a></li>
                <li className='nav_item'><a href='#' className='nav_link overline-on-hover'>Blog</a></li>
                <li className='nav_item'><a href='#' className='nav_link overline-on-hover'>Build</a></li>
                <li className='nav_item'><a href='#' className='nav_link overline-on-hover'>Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar;