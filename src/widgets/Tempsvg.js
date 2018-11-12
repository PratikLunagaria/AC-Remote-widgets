import React, { Component } from 'react'

export default class Tempsvg extends Component {
  render() {
    return (
      <div>
      <svg id='level'>
        <path d={this.props.pathd} fill='none' stroke-width='3' stroke='#26BEF0'></path>
    </svg>
        
      </div>
    )
  }
}
