import React, { Component } from 'react';
import Slider from 'rc-slider';
import "rc-slider/assets/index.css";

export default class Brightness extends Component {
    state = {
        value: 0
      };
      
  render() {
    return (
        <div id="brightness-container">
        <span className="faicons"><i class="fas fa-moon"></i></span>
      <div id="brightness">
      <Slider
      min={0}
      max={100}
      defaultValue={this.state.value}
      onChange={(value) => {
        this.setState({ value })
      }} />
      </div>
      <span className="faicons"><i class="fas fa-sun"></i></span>
      </div>
    )
  }
}
