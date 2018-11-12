import React, { Component } from 'react';
import { HuePicker } from 'react-color';
import AlphaPickerone from './AlphaPickerone';

export default class ColorWidget extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: "#fff",
        }
        this.handleChange= this.handleChange.bind(this);
        this.handleChangeComplete= this.handleChangeComplete.bind(this);
    }
    handleChange(inputcolor, event){
        this.setState({ color: inputcolor})
        console.log(inputcolor);
    }

    handleChangeComplete(colorfinal, event){
        this.setState({ color: colorfinal});
    };
  render() {
    return (
      <div id="color-container">
        <div id="hue-picker"><HuePicker style={{"border": "5px solid white"}} color={this.state.color} onChange={this.handleChange} onChangeComplete={this.onChangeComplete}/></div>
        <AlphaPickerone color= {this.state.color} />
      </div>
    )
  }
}
