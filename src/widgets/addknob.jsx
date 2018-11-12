import React, { Component } from "react";
import Knob from "./knob";

function Value(props) {
  return <div className="value">{props.value}</div>;
}

class SvgKnob extends Component {
  handleChange = e => {
    this.setState({ value: e.detail })
    console.log(e.detail)
};

  render() {
    return (
      <div className="knob">
        <Knob onChange={this.handleChange} />
        <Value value={this.props.arcValue} />
      </div>
    );
  }
}

export default SvgKnob;
