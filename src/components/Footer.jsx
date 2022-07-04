import React from 'react'
import './Footer.css'
import { FaGithub, FaDiscord, FaTwitter, FaYoutube, FaReddit, FaCommentAlt } from 'react-icons/fa';
import imgF from '../images/logo-polkadot-light.svg'

function Footer() {
  return (
    <div className='footer'>
      <div class="row">
        <div class="columnF">
          <h3 className='mTopic'>General</h3>
          <ul className='list'>
            <li>About</li>
            <li>FAQ</li>
            <li>Support</li>
            <li>Build</li>
            <li>Grants and Bounties</li>
            <li>Careers</li>
          </ul>
        </div>
        <div class="columnF">
          <h3 className='mTopic'>Technology</h3>
          <ul className='list'>
            <li>Technology</li>
            <li>Roadmap</li>
            <li>Token</li>
            <li>Telemetry</li>
            <li>Substrate</li>
            <li>Lightpaper</li>
            <li>Whitepaper</li>
          </ul>
        </div>
        <div class="columnF">
          <h3 className='mTopic'>Community</h3>
          <ul className='list'>
            <li>Community</li>
            <li>Documentation</li>
            <li>Brand Assets</li>
            <li>Blog</li>
            <li>Element Chat</li>
            <li>Medium</li>
          </ul>
        </div>
        <div class="columnF col4">
          <div style={{display: 'flex'}} className='iconList'>
            <button className='button03'><FaTwitter className='icon'/></button>
            <button className='button03'><FaReddit className='icon'/></button>
            <button className='button03'><FaGithub className='icon'/></button>
            <button className='button03'><FaYoutube className='icon'/></button>
            <button className='button03'><FaDiscord className='icon'/></button>
          </div>
          <p className='para01'>Subscribe to the newsletter to hear about Polkadot updates and events.</p>  
          <button class="buttonF">Subscribe</button>      
        </div>
      </div>
      <div style={{display: 'flex'}} className='foot1'>
        <img src= {imgF} alt="" className='imageF'/>
        <div style={{display: 'flex'}} className='foot2'>
          <p>© 2022 Web3 Foundation |</p>
          <p>Impressum |</p>
          <p>Disclaimer |</p>
          <p>Privacy |</p>
          <p>Cookie Settings |</p>
        </div>
        <button className='button04'><FaCommentAlt className='icon'/></button>
      </div>
    </div>
  )
}

export default Footer;