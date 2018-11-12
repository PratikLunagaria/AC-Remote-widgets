import React, { Component } from 'react'

export default class Tempsvg extends Component {
  render() {
    return (
      <div>
      <svg id='level'>
        <path d={this.props.pathd} fill='none' strokeWidth='4' stroke='#26BEF0' strokeLinecap="round"></path>
    </svg>
        
      </div>
    )
  }
}
