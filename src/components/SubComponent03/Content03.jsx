import React, { Component } from 'react'
import './Content03.css'

export default class Content03 extends Component {
  render() {
    return (
      <div className='box' align='center'>
          <img src={this.props.img} className='img01'/>
          <span className='span01'>{this.props.title}</span>
          <h3 className='topic'>{this.props.heading}</h3>
          <p className='desc'>{this.props.description}</p>
          <div style={{display: 'flex'}} className='card01'>
            <img src={this.props.img1} className='logo'/>
            <span className='span02'>{this.props.title1}</span>
          </div>        
      </div>
    )
  }
}
