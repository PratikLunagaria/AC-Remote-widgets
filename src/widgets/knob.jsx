import React, { Component } from 'react';
import SvgKnob from 'svg-knob';

class Knob extends Component {

    handleChange = e => { if (this.props.onChange) this.props.onChange(e); };

    componentDidMount() {
        this.k = new SvgKnob(this.dom);
        this.dom.addEventListener("change", this.handleChange);
    }

    // Not really necessary, but will slightly improve the rendering performance.
    shouldComponentUpdate() {
        return this.k === null;
    }

    render() {
        return (
            <svg ref={elem => this.dom = elem} />
        );
    }
}

export default Knob;