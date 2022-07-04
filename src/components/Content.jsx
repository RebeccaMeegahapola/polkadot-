import React from 'react'
import './Content.css'
import img2 from '../images/xcm-animation-inner.png'
import img12 from '../images/logo-circle-parity-white.svg'
import img13 from '../images/logo-circle-chainsafe-white.svg'
import img14 from '../images/logo-circle-soramitsu-white.svg'
import img15 from '../images/logo-circle-polkadot-js-white.svg'
import img16 from '../images/web3-summit-3.jpg'
import NavBar from './NavBar'
import Footer from './Footer'
import ComponentOne from './ComponentOne'
import ComponentTwo from './ComponentTwo'


function Content() {
  return (
    <div>
        <NavBar/>
        <div class="row">
            <div class="column">
                <h1 className='heading01'>Parachain <br/> messaging <br/> is here</h1>
                <p className='paragraph01'>Parachain-to-parachain communication is now <br/> enabled with XCM. Polkadot's vision of cross-<br/> chain interoperability starts here.</p>
                <button class="button button1">Start Building</button>
                <button class="button button2">Open a Channel</button>
            </div>
            <div class="column">
                <a href="#">
                    <img src= {img2} alt="" className='image02'/>
                </a>
            </div>
        </div> 
        <ComponentOne/>
        <div className='div07'>
            <h1 className='heading04'>Learn more about Polkadot's <br/> technology</h1>
            <button class="button btn01">Discover Polkadot</button>
        </div>
        <div className='div08'>
            <div>
                <h1 className='heading05'>Powering the Polkadot network</h1>
                <p className='paragraph03'>The DOT token serves three distinct purposes: <br/>
                    governance over the network, staking and bonding. 
                </p>
            </div>
            <div class="row">
               
            </div>
            <div className='div09'>
                <h1 className='head01'>Learn more about the <br/> DOT token</h1>
                <button class="button btn02">Discover DOT</button>
            </div>
        </div>
        <div class="row01" id='div10'>
            <div className='column02'>
                <h1>An open-source <br/> protocol built for <br/> everyone</h1>
            </div>
            <div class="column03">
                <p className='paragraph07'>Polkadot is an open-source project founded by the <span className='underline'>Web3 Foundation.</span></p>
                <p className='paragraph08'>Web3 Foundation has commissioned five teams and over 100 developers to build Polkadot, including:</p>
            </div>
            <div class="row02">
                <div class="column04">
                    <img src= {img12} alt="" className='image12'/>
                </div>
                <div class="column04">
                    <img src= {img13} alt="" className='image13'/>
                </div>
                <div class="column04">
                    <img src= {img14} alt="" className='image14'/>
                </div>
                <div class="column04">
                    <img src= {img15} alt="" className='image15'/>
                </div>
            </div>
        </div>
        <div class="container">
            <img src= {img16} alt="" className='image16'/>
            <h1 className='top-left'>Founded by some of the blockchain <br/> industry’s foremost builders</h1>
            <button class="button fbtn1">Learn About the Poladot Team</button>
        </div> 
        <div>
            <h1 className='head02'>From the blog</h1>
        </div>
        
        <div className='div10'>
            <h1 className='heading06'>Want to get involved?</h1>
            <button class="button fbtn">Join the Community</button>
            <p className='cont'>or learn about how to <span className='underline1'>build on Polkadot.</span></p>
        </div> 
        <Footer/>     
    </div>
  )
}

export default Content;