import React, { Component } from 'react';
import {AlphaPicker} from 'react-color';

export default class AlphaPickerone extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="alpha-picker"><AlphaPicker color={this.props.color}/></div>
      </React.Fragment>
    )
  }
}
