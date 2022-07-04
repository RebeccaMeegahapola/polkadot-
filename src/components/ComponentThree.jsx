import React, { Component } from 'react'
import img from '../images/XCMv2--2-.png'
import img1 from '../images/Encointer-Blog-Cover-1.jpeg'
import img2 from '../images/cover-image.png'
import img3 from '../images/ghost_avatar_polkadot.png'
import Content03 from './SubComponent03/Content03'

export default class ComponentThree extends Component {
  render() {
    return (
        <div style={{display: 'flex'}}>
            <Content03 img={img} title="Polkadot" heading="XCMv2 Audit Completed by Quarkslab" description="XCMv2 has now been audited for a second time to discover any potential cross-chain security or fairness issues, including logical bugs, denial-of-service, and incorrect lock/unlock or burn/mint on both chains..." img1={img3} title1="Polkadot"/>
            <Content03  img={img1} title="Kusama" heading="Introducing Encointer: Making Web3 Truly Inclusive" description="Encointer is Kusama’s second common-good parachain slot . In this post, we take an in-depth look at Encointer and the problems it addresses — how it can bring financial inclusivity to Web3 and mitigate Sybil attacks with a novel ‘proof-of-personhood’ system for unique identity...." img1={img3} title1="Polkadot"/>
            <Content03 img={img2} title="Polkadot" heading="Polkadot v1.0: Sharding and Economic Security" description="This post is about the technology powering Polkadot. Polkadot is a sharded blockchain with heterogeneous shards...." img1={img3} title1="Polkadot"/>
        </div>
    )
  }
}
