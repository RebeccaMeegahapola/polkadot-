import React, { Component } from 'react'
import Content01 from './SubComponent01/Content01'
import img3 from '../images/home-icon1.svg'
import img4 from '../images/home-icon2.svg'
import img5 from '../images/home-icon3.svg'
import img6 from '../images/home-icon4-b.svg'
import img7 from '../images/home-icon5.svg'
import img8 from '../images/home-icon6.svg'

export default class ComponentOne extends Component {
  render() {
    return (
        <div className='wrapper'>
            <div className='wrap01'>
                <div className='div01'>
                   <Content01 img={img3} title="True interoperability" description="Polkadot enables cross-blockchain transfers of any type of data or asset, not just tokens. Connecting to Polkadot gives you the ability to interoperate with a wide variety of blockchains in the Polkadot network."/>
                </div>
                <div className='div02'>
                    <Content01 img={img4} title="Economic & transactional scalability" description="Polkadot provides unprecedented economic scalability by enabling a common set of validators to secure multiple blockchains. Polkadot provides transactional scalability by spreading transactions across multiple parallel blockchains."/>
                </div>
                <div className='div03'>
                    <Content01 img={img5} title="Easy blockchain innovation" description="Create a custom blockchain in minutes using the Substrate framework. Connect your chain to Polkadot and get interoperability and security from day one. This ease of development helps Polkadot's network grow. "/>  
                </div>
            </div>
            <div className='wrap02'>
                <div className='div04'>
                    <Content01 img={img6} title="High energy efficiency" description="Polkadot consumes a small fraction of the energy used by conventional blockchains thanks to its next-generation nominated proof-of-stake (NPoS) model. Using the equivalent of ~6.6 US households worth of energy per year, Polkadot has the lowest carbon footprint among proof-of-stake protocols analyzed in recent research."/>
                </div>
                <div className='div05'>
                    <Content01 img={img7} title="Security for everyone" description="Polkadot's novel data availability and validity scheme allows chains to interact with each other in a meaningful way. Chains remain independent in their governance, but united in their security."/>  
                </div>
                <div className='div06'>
                    <Content01 img={img8} title="User-driven governance" description="Polkadot has a sophisticated governance system where all stakeholders have a voice.Network upgrades are coordinated on-chain and enacted autonomously and without <br/> forking the network, ensuring that Polkadot’s development remains future-proof and community-driven."/>  
                </div> 
            </div>  
        </div>
    )
  }
}
