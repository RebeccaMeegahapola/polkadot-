import React, { Component } from 'react'
import Content02 from './SubComponent02/Content02'
import image01 from '../images/home-icon-token-1.svg'
import image02 from '../images/home-icon-token-2.svg'
import image03 from '../images/home-icon-token-3.svg'


export default class ComponentTwo extends Component {
  render() {
    return (
        <div style={{display: 'flex'}}>
            <Content02 img={image01} topic="Governance" paragraph="Polkadot token holders have complete control over the protocol. All privileges, which on other platforms are exclusive to miners, will be given to the Relay Chain participants (DOT holders), including managing exceptional events such as protocol upgrades and fixes."/>
            <Content02 img={image02} topic="Staking" paragraph="Game theory incentivizes token holders to behave in honest ways. Good actors are rewarded by this mechanism whilst bad actors will lose their stake in the network. This ensures the network stays secure."/>
            <Content02 img={image03} topic="Bonding" paragraph="New parachains are added by bonding tokens. Outdated or non-useful parachains are removed by removing bonded tokens. This is a form of proof of stake."/>
        </div>
    )
  }
}
